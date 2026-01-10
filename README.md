# Ankur Gupta - Professional Portfolio

A modern, SEO-optimized portfolio website built with Next.js 14, featuring full Google Analytics integration and static site generation.

## Features

- ✅ **Next.js 14** with App Router
- ✅ **Full SEO Optimization** (Meta tags, Open Graph, Twitter Cards)
- ✅ **Google Analytics 4** Integration
- ✅ **Structured Data** (JSON-LD) for search engines
- ✅ **Responsive Design** (Mobile, Tablet, Desktop)
- ✅ **Static Site Generation** (Fast, SEO-friendly)
- ✅ **Docker Support** (Run anywhere)
- ✅ **GitHub Pages Ready**
- ✅ **TypeScript**
- ✅ **Professional UI/UX**

## Quick Start

**Prerequisites**: Docker (with Compose plugin) installed on your machine.

```bash
# Clone the repository
git clone https://github.com/braindevoiler/braindevoiler.github.io.git
cd braindevoiler.github.io

# Deploy to GitHub Pages (builds and pushes automatically)
make deploy

# That's it! Your site will be live at https://braindevoiler.github.io
```

### All Available Commands

```bash
make help     # Show all commands
make build    # Build production site locally
make deploy   # Build and deploy to GitHub Pages (MAIN COMMAND)
make clean    # Remove build artifacts
```

## Google Analytics Setup

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com/)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Create `.env.local` file:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Deployment

### Deploy to GitHub Pages

One command deploys everything:

```bash
make deploy
```

This command:
1. Commits and pushes your source code to `main` branch
2. Builds your site in Docker
3. Creates/updates the `gh-pages` branch
4. Pushes the built site to GitHub
5. Your site goes live at `https://braindevoiler.github.io`

**First-time setup**: Go to your GitHub repo settings → Pages → Source → Select "Deploy from a branch" → Select "gh-pages" branch

That's it! Every time you run `make deploy`, both branches update automatically - your source code is saved to `main`, and your site is deployed to `gh-pages`.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Main page
│   └── page.module.css      # Page-specific styles
├── components/
│   ├── Navigation.tsx       # Navigation component
│   └── Navigation.module.css
├── data/
│   └── profile.ts           # All profile data
├── lib/
│   ├── seo.ts              # SEO configuration
│   └── analytics.tsx        # Google Analytics
├── public/                  # Static assets
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose config
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies

```

## Customization

### Update Profile Data

Edit `data/profile.ts` to update:
- Personal information
- Work experience
- Skills
- Projects
- Education
- Achievements

### Update SEO

Edit `lib/seo.ts` to customize:
- Meta titles and descriptions
- Open Graph images
- Twitter cards
- Structured data

### Styling

- Global styles: `app/globals.css`
- CSS variables: `:root` in `globals.css`
- Component styles: `*.module.css` files

## Docker Architecture

This project uses **Docker** to ensure consistent builds across all machines.

### How It Works

- All builds happen in Docker containers
- No need to install Node.js locally
- Guarantees the same build output on any machine
- Multi-stage Dockerfile optimizes the build process

## Deployment Options

### GitHub Pages (Default - Automated)

```bash
make deploy
```

Automatically builds and pushes to the `gh-pages` branch.

### Other Platforms

To deploy to Vercel, Netlify, or any static host:

```bash
make build
# Upload the 'out/' directory to your hosting provider
```

## SEO Checklist

- ✅ Meta titles and descriptions
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap (auto-generated)
- ✅ Mobile-responsive
- ✅ Fast loading times
- ✅ Semantic HTML
- ✅ Alt text for images
- ✅ Google Analytics

## Performance

- **Lighthouse Score**: 95+ (Performance, SEO, Accessibility)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Static HTML**: Pre-rendered for instant loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

This is a personal portfolio. Feel free to fork and customize for your own use.

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

- **Website**: [ankurgupta.net](https://ankurgupta.net)
- **LinkedIn**: [in/ankurcsa](https://www.linkedin.com/in/ankurcsa/)
- **GitHub**: [braindevoiler](https://github.com/braindevoiler)
- **Email**: ankur@ankurgupta.net

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
