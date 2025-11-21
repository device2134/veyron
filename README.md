# Veyron Wiki - Rage Multiplayer RPG

Wiki-ul oficial pentru serverul Rage Multiplayer RPG Veyron.

## Tehnologii

- **Next.js 14** - Framework React pentru aplicații web
- **React 18** - Biblioteca UI
- **TypeScript** - Tipare statice pentru JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Iconițe moderne

## Instalare Locală

1. Instalează dependențele:
```bash
npm install
```

2. Rulează serverul de dezvoltare:
```bash
npm run dev
```

3. Deschide [http://localhost:3000](http://localhost:3000) în browser.

## Structura Proiectului

- `/app` - Pagini și layout-uri Next.js
- `/components` - Componente React reutilizabile
- `/contexts` - Context providers (Language)
- `/app/globals.css` - Stiluri globale și configurație Tailwind

## Categorii Wiki

- **Factiuni** - Informații despre factiunile disponibile (Poliție, Pașnice, Mafii)
- **Case** - Ghid pentru cumpărarea și gestionarea caselor
- **Apartamente** - Informații despre apartamente
- **Vehicule Personale** - Ghid pentru vehicule
- **Cont** - Gestionarea contului
- **Progres** - Sistemul de progres și skill-uri
- **Level** - Sistemul de level și XP

## Deploy pe Vercel

### Pasul 1: Push pe GitHub

1. Creează un repository nou pe GitHub
2. Adaugă remote-ul:
```bash
git remote add origin https://github.com/TU_USERNAME/veyron-wiki.git
git branch -M main
git push -u origin main
```

### Pasul 2: Deploy pe Vercel

1. Mergi pe [vercel.com](https://vercel.com) și loghează-te
2. Click pe "Add New Project"
3. Importă repository-ul de pe GitHub
4. Vercel va detecta automat Next.js și va configura build-ul
5. Click pe "Deploy"
6. Site-ul va fi live în câteva minute!

### Configurare Vercel (Automată)

Vercel detectează automat:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

Nu este nevoie de configurație suplimentară!

## Build pentru Producție

```bash
npm run build
npm start
```

## Caracteristici

- 🌍 **Multi-limbă**: Suport pentru Română și Engleză
- 🎨 **Design Modern**: Inspirat din Discord și GTA
- 📱 **Responsive**: Funcționează perfect pe toate dispozitivele
- ⚡ **Performant**: Optimizat cu Next.js 14
- 🎭 **Animații**: Loading screen și tranziții fluide

