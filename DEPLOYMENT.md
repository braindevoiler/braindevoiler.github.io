# Deployment Guide

## Prerequisites

1. **Docker** (with Compose plugin) installed on your machine
2. **Git** configured with your GitHub credentials
3. **Google Analytics** (Optional)
   - Create a GA4 property at [analytics.google.com](https://analytics.google.com/)
   - Get your Measurement ID (format: `G-XXXXXXXXXX`)
   - Add to `.env.local`:
     ```bash
     NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
     ```

## Quick Deployment

### One-Command Deploy

```bash
make deploy
```

This single command:
1. Builds your site in a Docker container
2. Creates/updates the `gh-pages` branch
3. Pushes the built site to GitHub
4. Your site goes live automatically

**That's it!** Your site will be live at `https://braindevoiler.github.io`

## First-Time Setup

### Enable GitHub Pages (One-Time)

After running `make deploy` for the first time:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source": Select **Deploy from a branch**
4. Branch: Select **gh-pages**
5. Folder: **/ (root)**
6. Click **Save**

Wait 2-3 minutes, then visit: `https://braindevoiler.github.io`

## Workflow

### Regular Deployment Workflow

```bash
# 1. Make your changes to the code
vim data/profile.ts

# 2. Test locally (optional)
make build

# 3. Deploy (automatically saves source code AND deploys site)
make deploy

# Done! Both branches updated:
#  • main: Your source code is saved
#  • gh-pages: Your site is live in 2-3 minutes
```

**Important**: `make deploy` automatically commits and pushes your changes to the `main` branch before deploying, so you never lose your work!

### What Happens During Deploy?

The `make deploy` command does THREE steps:

1. **Saves Your Source Code (main branch)**
   - Checks for uncommitted changes
   - If found, commits them with a timestamp
   - Pushes `main` branch to GitHub
   - Your source code is now safely backed up!

2. **Builds in Docker**
   - Runs `npm run build` in a clean container
   - Generates static HTML files in `out/` directory
   - Adds `.nojekyll` file (tells GitHub to not use Jekyll)
   - Adds `CNAME` file (for custom domain)

3. **Deploys to GitHub Pages (gh-pages branch)**
   - Switches to an orphan `gh-pages` branch
   - Copies built files from `out/` to root
   - Commits all files with timestamp
   - Force pushes to `gh-pages` branch
   - GitHub Pages serves from this branch
   - Returns you to `main` branch

## Custom Domain Setup

If you want to use a custom domain (e.g., `ankurgupta.net`):

### 1. Update CNAME in Makefile

The CNAME is already set to `ankurgupta.net` in the Makefile. To change it:

```makefile
# Edit Makefile, line 24:
echo 'yourdomain.com' > out/CNAME
```

### 2. Configure DNS

At your domain provider (e.g., GoDaddy, Cloudflare):

**For apex domain (yourdomain.com):**
```
A Record: 185.199.108.153
A Record: 185.199.109.153
A Record: 185.199.110.153
A Record: 185.199.111.153
```

**For www subdomain:**
```
CNAME: www → braindevoiler.github.io
```

### 3. Configure GitHub

1. Go to **Settings → Pages**
2. Under "Custom domain", enter: `yourdomain.com`
3. Check "Enforce HTTPS"
4. Wait for DNS check to complete (can take 24-48 hours)

## Troubleshooting

### Deploy fails with "out/ directory not found"

```bash
make clean
make deploy
```

### Git conflicts on gh-pages branch

```bash
# Force recreate gh-pages branch
git branch -D gh-pages
git push origin --delete gh-pages
make deploy
```

### Site not updating

- Wait 2-3 minutes for GitHub Pages to rebuild
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check: `https://github.com/braindevoiler/braindevoiler.github.io/settings/pages`

### Permission denied during push

```bash
# Check your git remote
git remote -v

# If using HTTPS, switch to SSH
git remote set-url origin git@github.com:braindevoiler/braindevoiler.github.io.git
```

## Alternative Deployment Options

### Deploy to Other Platforms

If you want to deploy to Vercel, Netlify, or another platform:

```bash
# Build locally
make build

# Upload the 'out/' directory to your hosting provider
```

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=out
```

## Environment Variables

### Local Development

Create `.env.local` for local testing:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production

Google Analytics ID is embedded during build. Update in `.env.local` before running `make deploy`.

## Build Output

After running `make build`, you'll see:

```
out/
├── index.html           # Homepage
├── _next/              # Next.js assets
│   ├── static/
│   └── ...
├── .nojekyll           # Tells GitHub to not use Jekyll
└── CNAME               # Custom domain configuration
```

## Performance

- **Build time**: ~30-60 seconds
- **Deployment time**: ~2-3 minutes
- **Total size**: ~90KB (First Load JS)
- **Lighthouse scores**: 95+ across all categories

## Security

- No secrets needed in GitHub (everything builds locally)
- All builds happen in isolated Docker containers
- No API keys exposed in the codebase
- HTTPS enforced by default on GitHub Pages

## Maintenance

### Update Dependencies

```bash
# Update package.json
# Then rebuild Docker images
docker compose build --no-cache

# Deploy
make deploy
```

### Clean Up

```bash
# Remove build artifacts
make clean

# Remove Docker containers and images
docker compose down --rmi all
```

## Support

- **GitHub Issues**: [Report issues](https://github.com/braindevoiler/braindevoiler.github.io/issues)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Pages Docs**: [docs.github.com/pages](https://docs.github.com/pages)

---

**Summary**: Run `make deploy` to build and publish your site. First time only: configure GitHub Pages to use the `gh-pages` branch.
