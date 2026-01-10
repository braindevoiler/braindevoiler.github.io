import { Metadata } from 'next';

export const siteConfig = {
  name: 'Ankur Gupta',
  title: 'Ankur Gupta - Staff Software Engineer | Ex-Google, Ex-PayPal',
  description: 'Experienced Software Engineer specializing in System Design, Microservices Architecture, and Cloud-Native Applications. 12+ years at Google, PayPal, Nium, and project44.',
  url: 'https://ankurgupta.net',
  ogImage: 'https://ankurgupta.net/og-image.jpg',
  links: {
    github: 'https://github.com/braindevoiler',
    linkedin: 'https://www.linkedin.com/in/ankurcsa/',
    website: 'https://ankurgupta.net',
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Ankur Gupta',
    'Staff Software Engineer',
    'Backend Engineer',
    'System Design',
    'Microservices',
    'Spring Boot',
    'Java',
    'Distributed Systems',
    'Cloud Architecture',
    'AWS',
    'Kubernetes',
    'REST API',
    'Google',
    'PayPal',
    'Nium',
    'IISc',
    'Bangalore',
  ],
  authors: [
    {
      name: 'Ankur Gupta',
      url: siteConfig.url,
    },
  ],
  creator: 'Ankur Gupta',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@ankurcsa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Icons commented out - add favicon files to public/ directory if needed
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
  manifest: '/site.webmanifest',
};

// Structured Data (JSON-LD) for SEO
export const generatePersonStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ankur Gupta',
    jobTitle: 'Staff Software Engineer',
    description: 'Experienced Software Engineer specializing in System Design, Microservices, and Cloud Architecture',
    url: 'https://ankurgupta.net',
    sameAs: [
      'https://www.linkedin.com/in/ankurcsa/',
      'https://github.com/braindevoiler',
      'https://ankurgupta.net/blog/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'India',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Indian Institute of Science',
        url: 'https://iisc.ac.in',
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'project44',
    },
    knowsAbout: [
      'System Design',
      'Microservices Architecture',
      'Spring Boot',
      'Cloud Computing',
      'Distributed Systems',
      'REST APIs',
      'Kubernetes',
      'AWS',
    ],
  };
};
