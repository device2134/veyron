# Veyron Wiki - Rage Multiplayer RPG

Official wiki for the Veyron Rage Multiplayer RPG server.

## Technologies

- **Next.js 14** - React framework for web applications
- **React 18** - UI library
- **TypeScript** - Static typing for JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icons

## Local Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js pages and layouts
- `/components` - Reusable React components
- `/contexts` - Context providers (Language)
- `/app/globals.css` - Global styles and Tailwind configuration

## Wiki Categories

- **Factions** - Information about available factions (Police, Peaceful, Mafias)
- **Houses** - Guide for buying and managing houses
- **Apartments** - Information about apartments
- **Personal Vehicles** - Vehicle guide
- **Account** - Account management
- **Progress** - Progress and skills system
- **Level** - Level and XP system

## Deploy to Vercel

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Add the remote:
```bash
git remote add origin https://github.com/YOUR_USERNAME/veyron-wiki.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and log in
2. Click "Add New Project"
3. Import the repository from GitHub
4. Vercel will automatically detect Next.js and configure the build
5. Click "Deploy"
6. Your site will be live in a few minutes!

### Vercel Configuration (Automatic)

Vercel automatically detects:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

No additional configuration needed!

## Production Build

```bash
npm run build
npm start
```

## Features

- 🌍 **Multi-language**: Support for Romanian and English
- 🎨 **Modern Design**: Inspired by Discord and GTA
- 📱 **Responsive**: Works perfectly on all devices
- ⚡ **Performant**: Optimized with Next.js 14
- 🎭 **Animations**: Loading screen and smooth transitions

---

**Created by Device**

