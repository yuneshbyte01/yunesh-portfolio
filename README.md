# Yunesh Timsina – Portfolio

A modern, responsive portfolio website for Yunesh Timsina, a backend developer specializing in Java, Spring Boot, MySQL, and REST APIs. Built with React, TypeScript, and Framer Motion.

---

## 🚀 Features
- **Beautiful Hero Section** with animated background and profile photo
- **About, Skills, Projects, Contact** pages
- **Dark/Light Theme Toggle** (remembers your preference)
- **Animated Transitions** with Framer Motion
- **Responsive Design** (mobile-friendly)
- **Downloadable Resume**
- **SEO & PWA Optimized**

---

## 🛠️ Tech Stack
- **React 19** + **TypeScript**
- **Framer Motion** (animations)
- **React Bootstrap** (layout)
- **React Icons**
- **CRACO** (custom build config)
- **Service Worker** (PWA/offline support)

---

## 📦 Getting Started

### 1. **Clone the repo**
```bash
git clone https://github.com/your-username/yunesh-portfolio.git
cd yunesh-portfolio
```

### 2. **Install dependencies**
```bash
npm install
```

### 3. **Run locally**
```bash
npm start
```
Visit [http://localhost:3000](http://localhost:3000)

### 4. **Build for production**
```bash
npm run build
```

---

## 🌐 Deployment

You can deploy this portfolio to Vercel, Netlify, or GitHub Pages.

- **Vercel/Netlify:** Import your repo, set build command to `npm run build` and output directory to `build`.
- **GitHub Pages:**
  1. Install: `npm install --save gh-pages`
  2. Add to `package.json`:
     ```json
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
     ```
  3. Run: `npm run deploy`

---

## 🖼️ Customization

### **Change Profile Photo**
- Replace `public/profile.jpg` with your own photo (same filename for instant update).

### **Update Resume**
- Replace `public/Resume.pdf` with your own resume (same filename for instant update).
- The download button in the hero section will always link to this file.

---

## 📁 Project Structure

```
yunesh-portfolio/
  public/
    profile.jpg      # Your profile photo
    Resume.pdf       # Your resume
    ...
  src/
    components/      # All React components
    App.tsx          # Main app
    ...
```

---

## 🙏 Credits
- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## © 2025 Yunesh Timsina

Feel free to fork and use for your own portfolio!
