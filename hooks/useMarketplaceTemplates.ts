import { useQuery } from '@tanstack/react-query';
import { 
  collection, 
  query, 
  orderBy, 
  limit, 
  startAfter, 
  getDocs, 
  QueryDocumentSnapshot, 
  DocumentData, 
  where 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface MarketplaceTemplate {
  id: string;
  name: string;
  oneLiner?: string;
  one_liner?: string;
  version?: string;
  industry?: string;
  description: string;
  image?: string;
  mainImage?: string;
  main_image?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  banner?: string; // Hero banner image from Firebase Storage
  images?: Array<{
    image: string;
    order: number;
  }>;
  category?: string;
  isActive: boolean;
  features?: Array<{
    feature: string;
    subtext: string;
  }>;
  amountsBought?: number;
  releaseDate?: string | any; // Firestore Timestamp object of string
}

const PAGE_SIZE = 12;

interface PageData {
  templates: MarketplaceTemplate[];
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
  hasMore: boolean;
}

export function useMarketplaceTemplates(
  searchTerm: string = '',
  category: string = 'All Apps',
  industry: string = 'All Industries',
  page: number = 1,
  needsFullData: boolean = false // Voor client-side sortering
) {
  return useQuery<PageData>({
    queryKey: ['marketplace-apps', searchTerm, category, industry, page, needsFullData],
    queryFn: async () => {
      const templatesRef = collection(db, 'apps');
      
      // Simpele query - haal alle actieve apps op
      // Alle filtering gebeurt client-side voor betrouwbaarheid
      const q = query(
        templatesRef,
        where('isActive', '==', true),
        limit(500)
      );

      const snapshot = await getDocs(q);
      
      // Map naar templates
      let templates = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as MarketplaceTemplate[];

      // Client-side category filtering
      if (category && category !== 'All Apps') {
        templates = templates.filter(t => {
          if (!t.category) return false;
          return t.category.trim().toLowerCase() === category.trim().toLowerCase();
        });
      }

      // Client-side search filtering - ALLEEN op 'name' veld
      if (searchTerm && searchTerm.trim() !== '') {
        const searchLower = searchTerm.trim().toLowerCase();
        templates = templates.filter(t => {
          if (!t.name) return false;
          return t.name.toLowerCase().includes(searchLower);
        });
      }

      // Client-side industry filter (supports multiple industries)
      if (industry && industry !== 'All Industries') {
        const selectedIndustries = industry.includes(',')
          ? industry.split(',').map(i => i.trim())
          : [industry.trim()];
        
        templates = templates.filter(t => {
          if (!t.industry) return false;
          const templateIndustry = t.industry.trim().toLowerCase();
          return selectedIndustries.some(selectedIndustry => 
            templateIndustry === selectedIndustry.trim().toLowerCase()
          );
        });
      }

      return { 
        templates, 
        lastDoc: snapshot.docs[snapshot.docs.length - 1] || null,
        hasMore: false,
      };
    },
    staleTime: 0, // Altijd verse data ophalen
    gcTime: 1000 * 60 * 5, // Cache 5 minuten
  });
}

// Hook voor een specifieke app op basis van ID
export function useAppById(appId: string) {
  return useQuery<MarketplaceTemplate | null>({
    queryKey: ['app', appId],
    queryFn: async () => {
      if (!appId) return null;
      
      const { doc, getDoc } = await import('firebase/firestore');
      const docRef = doc(db, 'apps', appId);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        return null;
      }
      
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as MarketplaceTemplate;
    },
    enabled: !!appId,
  });
}

// Hook voor slider: top 10 nieuwste apps met banner
export function useSliderApps() {
  return useQuery<MarketplaceTemplate[]>({
    queryKey: ['slider-apps'],
    queryFn: async () => {
      const templatesRef = collection(db, 'apps');
      
      // Haal alle actieve apps op (we sorteren client-side)
      const q = query(
        templatesRef,
        where('isActive', '==', true),
        limit(100)
      );

      const snapshot = await getDocs(q);
      
      console.log('Total apps fetched:', snapshot.docs.length);
      
      // Map naar templates
      let templates = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as MarketplaceTemplate[];

      console.log('Apps with banner before filter:', templates.filter(t => t.banner).length);

      // Filter op apps met banner
      templates = templates.filter(t => t.banner && t.banner.trim() !== '');

      console.log('Apps with banner after filter:', templates.length);

      // Sorteer op releaseDate (nieuwste eerst)
      templates.sort((a, b) => {
        const dateA = a.releaseDate?.toDate ? a.releaseDate.toDate() : new Date(a.releaseDate || 0);
        const dateB = b.releaseDate?.toDate ? b.releaseDate.toDate() : new Date(b.releaseDate || 0);
        return dateB.getTime() - dateA.getTime(); // Nieuwste eerst
      });

      // Neem top 10
      const result = templates.slice(0, 10);
      console.log('Final slider apps:', result.length, result.map(t => ({ id: t.id, name: t.name, hasBanner: !!t.banner })));
      return result;
    },
  });
}
