# Quick Start Guide

## 🚀 Get Your Website Live in 5 Minutes

### Step 1: Setup Google Analytics (Optional)

1. Visit [Google Analytics](https://analytics.google.com/)
2. Create a GA4 property
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
4. Create `.env.local` file:
   ```bash
   echo "NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX" > .env.local
   ```

### Step 2: Deploy to GitHub Pages

**One command does everything:**

```bash
make deploy
```

This command:
- Saves your source code to `main` branch
- Builds your site in Docker
- Creates/updates the `gh-pages` branch
- Pushes both branches to GitHub
- Your site goes live!

### Step 3: Enable GitHub Pages (First Time Only)

1. Go to: `https://github.com/braindevoiler/braindevoiler.github.io/settings/pages`
2. Under "Source": Select **Deploy from a branch**
3. Select **gh-pages** branch
4. Click **Save**

### Step 4: Done! 🎉

Your website will be live at:
**https://braindevoiler.github.io**

Takes 2-3 minutes for the first deployment.

---

## 📝 Customize Your Content

### Update Your Information

Edit `data/profile.ts`:

```typescript
export const profileData = {
  personal: {
    fullName: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    // ...
  },
  // Add your experience, skills, projects, etc.
}
```

### Add Your Photo (Optional)

1. Add your photo to `public/profile.jpg`
2. Update the hero section in `app/page.tsx`

### Change Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary: #3b82f6;  /* Change primary color */
  --secondary: #8b5cf6; /* Change secondary color */
  /* ... */
}
```

---

## 🔧 Common Commands

**All commands use Docker for consistency:**

```bash
make help      # Show all commands
make build     # Build production site locally
make deploy    # Build and deploy to GitHub Pages
make clean     # Remove build artifacts
```

**Your typical workflow:**

```bash
# Edit your code
vim data/profile.ts

# Test locally if needed (optional)
make build

# Deploy (saves source code + deploys site)
make deploy

# Done! Both branches updated automatically
```

---

## 📚 Documentation

- [README.md](README.md) - Complete documentation
- [DEPLOYMENT.md](DEPLOYMENT.md) - Detailed deployment guide
- [Next.js Docs](https://nextjs.org/docs) - Next.js documentation

---

## 🆘 Need Help?

1. Check the [README.md](README.md) for detailed instructions
2. See [DEPLOYMENT.md](DEPLOYMENT.md) for troubleshooting
3. Open an issue on GitHub

---

**Built with**: Next.js 14 + TypeScript + Docker
