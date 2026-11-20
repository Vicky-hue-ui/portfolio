# Vicky Samal — 3D Interactive Portfolio Website

An interactive, editorial 3D portfolio website for **Vicky Samal** (BCA student at Aditya Institute of Management Studies, Bengaluru; Full-Stack MERN, Python, and Machine Learning developer). Inspired by the fluid motion, editorial typography, binary/terminal accents, 0–100% preloader, interactive status capsules, and WebGL 3D atmosphere of Adrien Quechon's portfolio.

---

## ⚡ Key Highlights & Architecture

### 1. Visual Style & 3D WebGL Core
- **0–100% Preloader**: Sleek terminal diagnostics sequence booting system parameters, geoloc coordinates `[13.03° N, 77.63° E]`, MERN stack engines, and Three.js WebGL pipeline. Includes skip shortcut (`ESC`).
- **Interactive 3D WebGL Canvas**: Three.js core featuring a quantum polyhedron with glowing wireframe edges, dual orbiting MERN + ML node rings, and a 3D particle atmosphere.
  - **Desktop (`>= 1024px`)**: Interactive pointer parallax tracking cursor angles with inertia damping.
  - **Mobile (`< 1024px`)**: Interactive touch drag rotation, gyroscopic drift, and clamped device pixel ratio (`<= 1.75`) for smooth 60 FPS performance without battery drain.
  - **Reduced Motion / 2D Lite Mode**: Accessible fallback rendering an animated vector energy node without WebGL overhead.
- **Micro-Audio Feedback**: Subtle synthesized sounds powered by the Web Audio API (zero external sound files) for button clicks, hover blips, and terminal confirms. Equipped with an interactive mute/unmute toggle.

### 2. Identity, Location & Night-Shift Availability
- **Identity**: Vicky Samal — Software Developer | Full-Stack MERN | Machine Learning
- **Live Bengaluru (IST) Clock**: Real-time clock badge with glowing status beacon and availability pill:
  - *Academic Window*: Morning BCA classes (8:00 AM – 1:00 PM IST) at Aditya Institute of Management Studies, Bengaluru.
  - *Shift Window*: Fully open for evening, night-shift, and remote software engineering opportunities with international team overlap.
- **One-Click Email Action**: Instant copy for `vickyff699@gmail.com` with celebratory cyber confetti (`canvas-confetti`) and visual toast confirmation.
- **Direct Phone**: `+91 8310506391`
- **Languages**: English, Hindi, Kannada, Odiya
- **Personal Interests**: Fitness & Calisthenics, Travelling, Reading, Cooking

### 3. Comprehensive Sections & Content
1. **Hero Stage**: Display headline, 3D interactive core, shift availability card, quick links, and terminal trigger.
2. **Interactive Status Marquee**: Adrien Quechon-inspired continuous ticker (`"In my terminal: MERN + ML"`, `"Bengaluru • IST"`, `"Building on GitHub @Vicky-hue-ui"`, `"Night-Shift Ready"`).
3. **Profile & About**: Technical summary, core engineering pillars, multi-lingual proficiency, and daily schedule telemetry.
4. **Project Showcase**:
   - Filterable by `All`, `Full-Stack MERN`, `Python & ML`, `Frontend & APIs`.
   - Feature spotlight on **CineSphere** (`Vicky-hue-ui/cinesphere`), **foodiee** (`Vicky-hue-ui/foodiee`), **Cat API Explorer**, **3D Portfolio**, and **ML Predictive Engine**.
   - Interactive architectural detail modal with key highlights and repository links.
5. **Experience, Education & Certifications**:
   - **Forage**: Cybersecurity Virtual Intern (`08/2025 – 12/2025`)
   - **Software Developer Intern**: Frontend bug resolution & responsive JS components (`09/2025`)
   - **Certifications**:
     - *Cybersecurity Job Simulation* (Forage / Mastered & NYC Jobs CEO Council)
     - *Software Engineering Job Simulation* (Forage / JPMorgan Chase & Co. — Kafka, H2 DB, REST APIs)
     - *Project Management Fundamentals* (IBM SkillsBuild)
     - *Getting Started With Artificial Intelligence* (IBM SkillsBuild)
   - **Education**:
     - *Aditya Institute of Management Studies* — BCA (`08/2024 – 08/2027`)
     - *Govt PU College* — PCMC (`69.67%`, `05/2022 – 03/2024`)
     - *Soniya English High School* — SSLC (`75.84%`, `04/2022`)
6. **Technical Skills Matrix**: Programming Languages, MERN Web Development, AI & Machine Learning, Developer Suite & AI Workflows (Cursor, GitHub Copilot, Git). Includes real-time search filter.
7. **Interactive CLI Terminal**: Command palette (`⌘K` or click) with commands: `help`, `whoami`, `skills`, `projects`, `shift`, `edu`, `certs`, `contact`, `email`, `clear`.
8. **Contact & Dispatch**: One-click email copy, interactive message sender, and phone links.
9. **Editorial Footer**: Geolocation, IST timestamp, back-to-top button, and copyright.

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+` or `v20+` or `v24+`
- npm `v9+` or `v10+` or `v11+`

### Installation & Development
```bash
# Clone the repository
git clone https://github.com/Vicky-hue-ui/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start Vite local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Building for Production
```bash
# Typecheck and bundle optimized production assets
npm run build
```

Production output will be generated in `dist/` with chunk splitting for Three.js, React, and vendor packages.

---

## 🌐 One-Click Deployment

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: './'`.
2. Run `npm run build`.
3. Push `dist/` to the `gh-pages` branch.

---

## 🛠 Tech Stack
- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS + Custom Brutalist Glassmorphism & Cyber Grids
- **3D & WebGL**: Three.js
- **Micro-Interactions**: Canvas Confetti, Web Audio API, Lucide Icons
- **Fonts**: Space Grotesk, Syne, Inter, JetBrains Mono
