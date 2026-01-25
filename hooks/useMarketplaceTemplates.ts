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
      
      // Build query constraints
      const constraints: any[] = [where('isActive', '==', true)];

      // Filter op category als niet "All Apps"
      // Note: We doen industry filtering client-side om Firestore index problemen te vermijden
      if (category !== 'All Apps') {
        constraints.push(where('category', '==', category));
      }

      // Order by name
      constraints.push(orderBy('name'));

      // Build base query
      let q = query(templatesRef, ...constraints);

      // Als we full data nodig hebben voor sortering, haal meer op
      const fetchLimit = needsFullData ? 500 : PAGE_SIZE;

      // Pagination - voor page > 1 moeten we door vorige pagina's navigeren
      // Dit is nodig omdat Firestore geen offset ondersteunt
      if (page > 1 && !needsFullData) {
        // Haal alle vorige pagina's op om de cursor te krijgen
        let lastDoc: QueryDocumentSnapshot<DocumentData> | null = null;
        
        for (let i = 1; i < page; i++) {
          const pageQuery: any = lastDoc 
            ? query(q, startAfter(lastDoc), limit(PAGE_SIZE))
            : query(q, limit(PAGE_SIZE));
          
          const pageSnapshot = await getDocs(pageQuery);
          
          if (pageSnapshot.empty) {
            // Geen data meer beschikbaar
            return {
              templates: [],
              lastDoc: null,
              hasMore: false,
            };
          }
          
          lastDoc = pageSnapshot.docs[pageSnapshot.docs.length - 1] as QueryDocumentSnapshot<DocumentData>;
        }
        
        // Nu kunnen we de huidige pagina ophalen
        if (lastDoc) {
          q = query(q, startAfter(lastDoc), limit(PAGE_SIZE));
        }
      } else {
        q = query(q, limit(fetchLimit));
      }

      let snapshot;
      try {
        snapshot = await getDocs(q);
      } catch (error: any) {
        console.error('Firestore query error:', error);
        // Als er een index error is, val terug op client-side filtering
        if (error.code === 'failed-precondition') {
          console.warn('Firestore index missing, falling back to client-side filtering');
          // Haal alle actieve apps op zonder filters
          const fallbackQuery = query(
            templatesRef,
            where('isActive', '==', true),
            orderBy('name'),
            limit(1000) // Max voor client-side filtering
          );
          snapshot = await getDocs(fallbackQuery);
        } else {
          throw error;
        }
      }
      
      // Filter automationBlueprint veld eruit
      let templates = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as MarketplaceTemplate[];

      // Client-side filtering (search + industry) om Firestore index problemen te vermijden
      if (searchTerm.trim()) {
        const searchLower = searchTerm.toLowerCase();
        templates = templates.filter(t => 
          t.name.toLowerCase().includes(searchLower)
        );
      }

      // Client-side industry filter (supports multiple industries)
      if (industry && industry !== 'All Industries') {
        // Check if it's a comma-separated list (multiple industries)
        const selectedIndustries = industry.includes(',')
          ? industry.split(',').map(i => i.trim())
          : [industry.trim()];
        
        templates = templates.filter(t => {
          if (!t.industry) return false;
          // Case-insensitive vergelijking en trim whitespace
          const templateIndustry = t.industry.trim().toLowerCase();
          return selectedIndustries.some(selectedIndustry => 
            templateIndustry === selectedIndustry.trim().toLowerCase()
          );
        });
      }

      const hasMore = !needsFullData && snapshot.docs.length === PAGE_SIZE;

      return { 
        templates, 
        lastDoc: snapshot.docs[snapshot.docs.length - 1] || null,
        hasMore: needsFullData ? false : hasMore, // Geen pagination wanneer we full data hebben
      };
    },
  });
}
