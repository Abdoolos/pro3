# React i18n Website

A bilingual (Norwegian/English) React website built with Vite, featuring internationalization support.

## 🚀 Features

- **Bilingual Support**: Norwegian (nb) and English (en)
- **Modern Stack**: React 18 + Vite 5
- **Internationalization**: i18next + react-i18next
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Responsive Design**: Mobile-first approach

## 📦 Installation

```bash
npm install
```

## 🛠 Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🏗 Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

## 👀 Preview

```bash
npm run preview
```

Preview the production build locally on [http://localhost:4173](http://localhost:4173).

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the configuration and deploy

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📁 Project Structure

```
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── locales/     # Translation files
│   │   ├── en/      # English translations
│   │   └── no/      # Norwegian translations
│   ├── App.jsx      # Main app component
│   ├── i18n.js      # i18next configuration
│   └── main.jsx     # Entry point
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── vite.config.js   # Vite configuration
└── vercel.json      # Vercel deployment config
```

## 🌐 Language Support

The website supports:
- Norwegian (nb) - Default language
- English (en)

Language preference is saved in localStorage and persists across sessions.

## 👨‍💻 Development

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: CSS with custom properties
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **i18n**: i18next + react-i18next

## 📝 License

This project is private.

---

**Design by Abdullah Alawiss**
