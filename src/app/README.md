# ZookOut Landing Page

Figma design se 1:1 convert kiya gaya Next.js + Tailwind CSS landing page.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Colors (Figma se extracted)
| Token | Value | Usage |
|-------|-------|-------|
| Brand Orange | `#ff6b00` | Primary CTA buttons, accents |
| Brand Black | `#0f0f0e` | Dark backgrounds, text |
| Cream | `#f5f2ec` | Section backgrounds |
| Muted | `#7a7a75` | Secondary text, nav links |
| Green | `#34d399` | Checkmarks (ZookOut card) |
| Red | `#e57373` | Cross marks (Old Way card) |

## Fonts (Figma se extracted)
- **Display/Headings:** GT Walsheim Trial (h1, h2 elements)
- **Body:** Inter (all other text)

## Project Structure
```
zookout/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page - imports all sections
│   └── globals.css      # Tailwind + global styles
├── components/
│   ├── Navbar.tsx           # Fixed top navbar
│   ├── HeroSection.tsx      # Hero with headline + CTA + dashboard
│   ├── MerchantsSection.tsx # Category icons row
│   ├── StatsSection.tsx     # 2.4K+ / 98% / ₹0 / 5min stats
│   ├── DifferenceSection.tsx # Old Way vs New Way cards
│   ├── WinWinSection.tsx    # Win-Win model + connection map
│   ├── FeaturesSection.tsx  # 6-feature grid
│   ├── OffersSection.tsx    # Create Offer form + steps
│   ├── TestimonialsSection.tsx # Reviews
│   ├── FAQSection.tsx       # Accordion FAQ
│   ├── CTASection.tsx       # Final CTA
│   └── Footer.tsx           # Footer bar
├── package.json
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── postcss.config.js
```

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Notes
- GT Walsheim Trial font ko aap apne project me manually install karna hoga ya Google Fonts alternate use karein
- Figma ke image assets 7 days tak valid hain — production me apne own assets replace karein
- `next.config.js` me `www.figma.com` domain allow kiya gaya hai Figma asset URLs ke liye
