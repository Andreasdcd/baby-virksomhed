# Baby Vejledning & Tumlehold - Hjemmeside

En moderne, varm og professionel hjemmeside til en virksomhed, der arbejder med babyer og forældre.

## Om projektet

Hjemmesiden er bygget som en single-page landing page med fokus på:
- Trygt og nærværende udtryk
- Tydelig information om ydelser
- Let kontakt og booking
- Mobilvenlig design
- Skandinavisk, blødt design

## Kom i gang

### Installation

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Åbn http://localhost:3000 i din browser.

### Build til produktion

```bash
npm run build
npm start
```

## Projektstruktur

```
baby-virksomhed/
├── app/
│   ├── layout.tsx          # Root layout med SEO metadata
│   ├── page.tsx            # Hovedside (samler alle komponenter)
│   └── globals.css         # Global styling
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── ForWhom.tsx
│   ├── HowItWorks.tsx
│   ├── About.tsx
│   ├── PracticalInfo.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx     (optional)
└── public/                # Billeder placeres her
```

## Hvad skal du redigere?

### 1. Footer.tsx (PRIORITET 1)
Erstat placeholders:
- [Virksomhedens navn]
- [email@example.dk]
- [+45 12 34 56 78]
- [CVR: 12345678]
- [@profil] (Instagram)

### 2. About.tsx
- Tilføj dit navn, baggrund og erfaring
- Tilføj profilbillede i `public/images/`

### 3. PracticalInfo.tsx
- Udfyld adresse, tidspunkter, priser

### 4. Contact.tsx
- Opdater kontaktinfo

### 5. layout.tsx
- Opdater SEO metadata (title, description)

## Billeder

Placer billeder i `public/images/` og reference dem som `/images/filnavn.jpg`

For profilbillede i About-sektionen:
```tsx
<Image src="/images/profil.jpg" alt="Dit navn" width={600} height={750} />
```

## Design og farver

Farveskema:
- Warm beige: #FAFAF8, #F5F1ED, #F4E8E3
- Sage green: #D4D9CC, #B8C2AD (accent)
- Neutral: #3A3A3A, #5A5A5A

## Kontaktformular

Formularen er klar til integration med:
- Formspree (anbefalet - gratis)
- Web3Forms
- EmailJS

Opdater `handleSubmit` funktionen i `Contact.tsx` med dit Form ID.

## SEO

Siden har grundlæggende SEO:
- Meta tags (title, description, keywords)
- Open Graph tags
- Dansk sprog
- Semantisk HTML

## Deployment

### Vercel (anbefalet - gratis)

1. Push til GitHub
2. Gå til vercel.com
3. Importer repository
4. Deploy

### Andre muligheder
- Netlify
- Railway
- Egen server med Node.js

## Teknisk stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Inter font (Google Fonts)

## Support

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs

---

**God fornøjelse med din nye hjemmeside!**
