# TechnoLogic Hungary Kft. - Céges Weboldal

Modern, reszponzív weboldal a TechnoLogic Hungary Kft. fiktív IT szolgáltató cég számára.

> **Figyelmeztetés**: Ez a projekt kizárólag oktatási és bemutatási célokat szolgál. A TechnoLogic Hungary Kft. egy fiktív cég.

## Előnézet

A weboldal egy professzionális IT szolgáltató cég bemutatkozó oldala, amely tartalmazza:
- Hero szekció animált háttérrel
- Szolgáltatások bemutatása
- Cég története és timeline
- Telephelyek (Budapest, Debrecen, Miskolc)
- Kapcsolatfelvételi űrlap
- Reszponzív dizájn (mobil, tablet, desktop)

## Tech Stack

| Technológia | Verzió | Leírás |
|-------------|--------|--------|
| [React](https://react.dev/) | 19.x | UI könyvtár |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | Típusos JavaScript |
| [Vite](https://vite.dev/) | 7.x | Build tool és dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS framework |
| [Lucide React](https://lucide.dev/) | 0.563 | Ikon könyvtár |

## Projekt struktúra

```
src/
├── components/
│   ├── layout/              # Navbar, Footer
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── sections/            # Oldal szekciók
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── LocationsSection.tsx
│   │   ├── CtaSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── index.ts
│   ├── ui/                  # Újrahasználható UI komponensek
│   │   ├── Button.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── DisclaimerBanner.tsx
│   │   └── index.ts
│   └── ErrorBoundary.tsx
├── constants/               # Statikus adatok
│   └── index.ts
├── hooks/                   # Custom React hookok
│   ├── useScrollPosition.ts
│   ├── useScrollToSection.ts
│   ├── use-mobile.tsx
│   └── index.ts
├── lib/                     # Utility függvények
│   └── utils.ts
├── types/                   # TypeScript típusok
│   └── index.ts
├── App.tsx                  # Fő alkalmazás komponens
├── main.tsx                 # Belépési pont
└── index.css                # Globális stílusok
```

## Telepítés

### Követelmények

- Node.js 20.19+ vagy 22.12+
- pnpm (ajánlott) vagy npm

### Lépések

```bash
# Repository klónozása
git clone https://github.com/Feinq/vizsgaremek2026-frontend.git
cd vizsgaremek2026-frontend

# Csomagok telepítése
pnpm install

# Fejlesztői szerver indítása
pnpm run dev
```

A weboldal elérhető lesz: `http://localhost:5173`

## Elérhető scriptek

| Parancs | Leírás |
|---------|--------|
| `pnpm run dev` | Fejlesztői szerver indítása |
| `pnpm run build` | Production build készítése |
| `pnpm run preview` | Production build előnézete |
| `pnpm run lint` | ESLint ellenőrzés |
| `pnpm run lint:fix` | ESLint hibák automatikus javítása |
| `pnpm run typecheck` | TypeScript típusellenőrzés |

## Kódolási konvenciók

### Formázás

- **Indentálás**: 1 tab (nem space)
- **Idézőjelek**: Single quotes (`'`)
- **Pontosvessző**: Kötelező
- **Trailing comma**: Többsoros struktúráknál

### Import alias

A `@/` prefix a `src/` mappára mutat:

```typescript
// Helyes
import { Button } from '@/components/ui';
import { COMPANY_INFO } from '@/constants';

// Kerülendő
import { Button } from '../../components/ui';
```

### Komponens struktúra

```typescript
// 1. Importok
import { useState } from 'react';
import { Icon } from 'lucide-react';
import { cn } from '@/lib/utils';

// 2. Típusok
interface ComponentProps {
	title: string;
	variant?: 'primary' | 'secondary';
}

// 3. Komponens
export function Component({ title, variant = 'primary' }: ComponentProps) {
	// Hookok
	const [state, setState] = useState(false);
	
	// Handlers
	const handleClick = () => {
		setState(true);
	};
	
	// Render
	return (
		<div className={cn('base-class', variant === 'primary' && 'primary-class')}>
			{title}
		</div>
	);
}
```

## Funkciók

### SEO optimalizálás

- Meta tagek (title, description, keywords)
- Open Graph tagek (Facebook, LinkedIn)
- Twitter Card tagek
- Strukturált adatok (JSON-LD)
  - Organization schema
  - LocalBusiness schema
  - BreadcrumbList schema
- Canonical URL
- robots.txt
- sitemap hivatkozás

### Accessibility (a11y)

- ARIA labelek és role-ok
- Skip link ("Ugrás a tartalomra")
- Megfelelő heading hierarchia (h1 → h2 → h3)
- Form validáció aria-describedby-val
- Keyboard navigáció támogatás
- Focus visible állapotok

### Reszponzív dizájn

- Mobile-first megközelítés
- Breakpointok: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Hamburger menü mobilon
- Optimalizált touch targets

### Form kezelés

- Kliens oldali validáció
- Hibaüzenetek valós időben
- Loading állapot küldéskor
- Sikeres küldés visszajelzés
- Validációs szabályok:
  - Név: kötelező
  - Email: kötelező, valid formátum
  - Téma: kötelező választás
  - Üzenet: kötelező, min. 10 karakter

## Build

### Production build

```bash
pnpm run build
```

A build kimenete a `dist/` mappában található:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js    # ~257 KB (gzip: ~80 KB)
│   └── index-[hash].css   # ~52 KB (gzip: ~8.5 KB)
├── favicon.svg
├── site.webmanifest
└── robots.txt
```

### Deployment

A `dist/` mappa tartalma bármely statikus hosting szolgáltatásra feltölthető:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Hagyományos webszerver (Apache, Nginx)

## Testreszabás

### Cégadatok módosítása

A `src/constants/index.ts` fájlban:

```typescript
export const COMPANY_INFO = {
	name: 'TechnoLogic Hungary Kft.',
	shortName: 'TechnoLogic',
	foundedYear: 2018,
	phone: '+36 1 234 5678',
	email: 'info@technologic.hu',
	address: '1117 Budapest, Infopark sétány 1.',
};
```

### Színek módosítása

A Tailwind alapértelmezett színpalettáját használjuk:
- Primary: `blue-600`
- Accent: `cyan-400`
- Background: `slate-50` (light), `slate-900` (dark)

### Új szekció hozzáadása

1. Komponens létrehozása: `src/components/sections/NewSection.tsx`
2. Export hozzáadása: `src/components/sections/index.ts`
3. Importálás és használat: `src/App.tsx`

## Licensz

Oktatási célokra készült projekt.
