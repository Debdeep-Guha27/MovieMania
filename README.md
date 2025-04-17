
## 🚀 MovieMania

A sleek and fast *React-based Movie App* built with *Vite*. Discover trending movies, search for your favorites, and dive into detailed movie info – all in one place!

---

### 🌟 Features

- 🔥 Browse Trending Movies
- 🔍 Search Movies Instantly
- 🎬 Detailed Movie Information
- ⚡ Lightning-fast with Vite
- 📱 Fully Responsive UI
- ☁ Deployed on Vercel

---

### 📸 Demo

[Live Demo](https://movie-mania-rouge-mu.vercel.app/) <!-- Replace with actual link -->

---

### 🛠 Tech Stack

- *React*
- *Vite*
- *Tailwind CSS 
- *TMDB API 
- *Vercel* (for deployment)

---

### 🚚 Installation & Setup

bash
# Clone the repository
git clone https://github.com/Debdeep-Guha27/MovieMania

# Navigate to the project directory
cd MovieMania

# Install dependencies
npm install

# Start the development server
npm run dev


---

### 🔨 Build for Production

bash
npm run build


Preview production build:

bash
npm run preview


---

### 🌍 Deployment (Vercel)

*Vercel Settings:*

- *Framework Preset:* Vite
- *Build Command:* npm run build
- *Output Directory:* dist

Add vite.config.js:

javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
})


If using React Router, add vercel.json:

json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}

---

### 🙌 Acknowledgements

- [TMDB API](https://www.themoviedb.org/documentation/api) (if you used it)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)

