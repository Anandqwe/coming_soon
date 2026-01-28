# Royal Chai ☕👑

A premium "Coming Soon" landing page for Royal Chai — an instant chai tea premix inspired by royal Indian households.

![Royal Chai Preview](https://img.shields.io/badge/Status-Coming%20Soon-gold?style=for-the-badge)

## ✨ Features

- **Elegant Royal Design** — Gold accents, deep browns, and warm cream tones
- **Countdown Timer** — Live countdown to launch date
- **Email Signup** — Capture early interest with validated email form
- **Fully Responsive** — Mobile-first design that looks great on all devices
- **Accessibility** — ARIA labels, skip links, keyboard navigation, reduced motion support
- **Smooth Animations** — Subtle hover effects and entrance animations

## 🛠️ Tech Stack

- **React 18** — Functional components with hooks
- **Vite** — Fast build tool and dev server
- **CSS3** — Custom properties, animations, no UI libraries
- **PropTypes** — Runtime type checking

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Icon.jsx
│   │   ├── Ornament.jsx
│   │   └── Section.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── LaunchingSoon.jsx
│   ├── EmailSignup.jsx
│   ├── SocialLinks.jsx
│   └── Footer.jsx
├── constants/           # Text content & configuration
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── assets/              # Images (logo.png)
└── App.jsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Anandqwe/royal-chai.git
cd royal-chai

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist` folder.

## ⚙️ Configuration

### Change Launch Date

Edit `src/constants/index.js`:

```js
export const LAUNCH_DATE = new Date(2026, 2, 15, 0, 0, 0); // March 15, 2026
```

### Update Brand Content

All text content is centralized in `src/constants/index.js` for easy customization.

### Add Your Logo

Place your logo at `src/assets/logo.png` — it's automatically imported in the Header.

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Gold | `#D4AF37` | Accents, CTAs |
| Deep Brown | `#2C1810` | Primary dark |
| Warm Brown | `#4A2C2A` | Secondary dark |
| Cream | `#F5E6D3` | Background |
| Copper | `#8B5A2B` | Text accents |

## 📱 Responsive Breakpoints

- **Mobile:** < 480px
- **Tablet:** 481px – 768px
- **Desktop:** > 768px

## 🌐 Deployment

### Netlify / Vercel

| Setting | Value |
|---------|-------|
| Build Command | `npm run build` |
| Output Directory | `dist` |

## 📄 License

MIT License — feel free to use for your own projects.

---

<p align="center">
  <strong>Royal Chai</strong> — Brew the Royal Tradition ☕
</p>
