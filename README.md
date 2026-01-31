# Mindhello Website

AI marketplace website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── apps/[slug]/       # Dynamic app detail pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── AppCard.tsx
│   ├── AppGrid.tsx
│   └── ...
├── data/                   # Static data
│   └── apps.json           # App data
├── types/                  # TypeScript types
│   └── app.ts
└── public/                 # Static assets
    └── images/             # App images
```

## 🎨 Design System

### Colors
- **Background**: `#0a0a0a` (primary), `#1a1a1a` (secondary)
- **Text**: `#ffffff` (primary), `#a0a0a0` (secondary)
- **Accent**: `#00d9ff` (cyan), `#7c3aed` (purple)
- **Blocks**: `#77bdf8` (blue), `#4edc96` (green), `#fc85d7` (pink)

### Typography
- **Font**: Inter, SF Pro Display
- **Sizes**: 12px - 48px scale

## 📝 Features

- ✅ Dark theme design
- ✅ Responsive layout (mobile, tablet, desktop)
- ✅ App showcase with filtering
- ✅ App detail pages
- ✅ Animations (Framer Motion)
- ✅ Search and filter functionality

## 🔧 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Hosting**: Vercel (recommended)

## 📦 Adding Apps

Edit `data/apps.json` to add or modify apps:

```json
{
  "id": "app-id",
  "name": "App Name",
  "slug": "app-slug",
  "description": "Short description",
  "category": ["Category"],
  "tags": ["Tag"],
  "pricing": "From €0.30/image",
  "pricingTier": "All tiers",
  "thumbnail": "/images/app/thumbnail.png",
  "featured": true
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
npm start
```

## 📄 License

© 2026 Mindhello. All rights reserved.
