# 🚀 Quick Start Guide - Anusiya's Portfolio

## What's Included

Your React portfolio includes:
- ✅ All sections from your original design (Home, About, Skills, Projects, Experience, Contact)
- ✅ Same color scheme (blue gradient: #0ea5e9)
- ✅ Dark/Light mode toggle
- ✅ Your resume available for download
- ✅ TrustScan and SentinelGPT projects added
- ✅ All your internship experiences
- ✅ Mobile responsive design
- ✅ Smooth animations and floating blobs
- ✅ No Tailwind CSS (pure CSS as requested)

## 📋 Before You Start

Make sure you have Node.js installed. Check with:
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org/

## 🎯 Step-by-Step Setup

### 1. Navigate to Project Folder
```bash
cd portfolio-react
```

### 2. Install Dependencies
```bash
npm install
```
This will install React and all necessary packages (takes 1-2 minutes).

### 3. Add Your Photo
Replace these placeholder images in `src/App.js`:
- Line 213: Hero section (main photo)
- Line 238: About section photo

You can:
- Add your images to the `public` folder
- Or use an image URL from your hosting

Update the code like this:
```javascript
// Line 213 - Change to:
<img src="/your-photo.jpg" alt="Anusiya T" />

// Line 238 - Change to:
<img src="/your-photo.jpg" alt="Anusiya T" />
```

### 4. Update Resume (Optional)
Your current resume is already in `public/Anusiya_T_Resume.pdf`.
To update it, just replace this file with your latest resume (keep the same name).

### 5. Start Development Server
```bash
npm start
```
Your portfolio will open automatically at http://localhost:3000

## 🎨 Customization Tips

### Change Colors
Edit `src/App.css` at the top (lines 7-17):
```css
:root {
  --primary-500: #0ea5e9;  /* Change this */
  --primary-600: #0284c7;  /* And this */
  /* ... */
}
```

### Add More Projects
In `src/App.js`, find the `projects` array (around line 73) and add:
```javascript
{
  title: 'Your Project Name',
  description: 'Project description...',
  tech: ['React', 'Python', 'etc'],
  icon: '🚀',
  github: 'https://github.com/yourrepo',
  date: 'Date'
}
```

### Update Contact Info
In `src/App.js`, search for the Contact Section (around line 470) and update:
- Email
- Phone
- Location
- Social links

## 🌐 Deploy Your Portfolio

### Option 1: Netlify (Recommended - Free)
1. Create account at https://netlify.com
2. Drag and drop your `build` folder
3. Done! You'll get a free URL

### Option 2: Vercel (Also Free)
1. Create account at https://vercel.com
2. Import your GitHub repository
3. Auto-deploys on every commit

### Option 3: GitHub Pages
```bash
npm install --save gh-pages
```
Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Then run:
```bash
npm run deploy
```

## 📦 Build for Production

When ready to deploy:
```bash
npm run build
```
This creates an optimized `build` folder with all your files ready for hosting.

## ⚡ Key Features

1. **Dark Mode**: Click moon/sun icon - preference saved in browser
2. **Skill Filter**: Click category buttons to filter skills
3. **Smooth Scroll**: Click nav links for smooth scrolling
4. **Back to Top**: Scroll down to see the button appear
5. **Download Resume**: Button in hero section downloads your PDF
6. **Responsive**: Works perfectly on mobile, tablet, and desktop

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
# Kill the process
npx kill-port 3000
# Or use a different port
PORT=3001 npm start
```

**npm install errors?**
```bash
# Clear cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Images not showing?**
- Make sure images are in the `public` folder
- Use `/image.jpg` (with leading slash) in src attribute
- Or use external URLs

## 📱 Contact Me

Need help? Reach out:
- **GitHub**: https://github.com/AnusiyaThirumalai
- **LinkedIn**: https://www.linkedin.com/in/anusiyathirumalai
- **Email**: anusiyathirumala@gmail.com

## ✅ Checklist

Before going live:
- [ ] Add your photos
- [ ] Update resume if needed
- [ ] Test dark/light mode
- [ ] Test on mobile device
- [ ] Update any placeholder text
- [ ] Check all links work
- [ ] Test contact form
- [ ] Update GitHub/LinkedIn URLs if needed

---

**Built with ❤️ using React**

Your portfolio is ready! Just run `npm install` and `npm start` to see it live! 🎉
