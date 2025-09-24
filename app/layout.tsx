import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from './components/LanguageProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://davicampos.dev'),
  title: {
    default: 'Davi Campos | Computer Engineer Portfolio',
    template: '%s | Davi Campos'
  },
  description: 'Experienced Computer Engineer specializing in full-stack web development, C#, ASP.NET, React, and modern web technologies. View my projects, skills, and professional experience.',
  keywords: [
    'Davi Campos',
    'Computer Engineer',
    'Full Stack Developer',
    'Python Developer',
    'ASP.NET Developer',
    'React Developer',
    'Web Development',
    'Portfolio',
    'Software Development',
    'Backend Developer',
    'Frontend Developer',
    'API Development',
    'Database Design',
    'Microsoft Technologies'
  ],
  authors: [{ name: 'Davi Campos', url: 'https://davicampos.dev' }],
  creator: 'Davi Campos',
  publisher: 'Davi Campos',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://davicampos.dev',
    title: 'Davi Campos | Full Stack Computer Engineer',
    description: 'Experienced Computer Engineer specializing in full-stack web development. Explore my projects, technical skills, and professional journey.',
    siteName: 'Davi Campos Portfolio',
    images: [
      {
        url: '/images/davi-share.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'Davi Campos - Computer Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davi Campos | Full Stack Computer Engineer',
    description: 'Experienced Computer Engineer specializing in full-stack web development. View my portfolio and projects.',
    images: ['/images/davi-share.jpg'],
    creator: '@DaviCampos',
    site: '@DaviCampos',
  },
  // Additional social media and platform metadata
  other: {
    // LinkedIn
    'linkedin:owner': 'davicampos',
    'linkedin:title': 'Davi Campos | Full Stack Computer Engineer',
    'linkedin:description': 'Experienced Computer Engineer specializing in full-stack web development. Connect with me on LinkedIn.',
    'linkedin:image': '/images/davi-share.jpg',

    // Instagram
    'instagram:title': 'Davi Campos | Computer Engineer',
    'instagram:description': 'Follow my journey as a Computer Engineer. Behind-the-scenes of coding life.',
    'instagram:image': '/images/davi-share.jpg',
    'instagram:creator': '@DaviCampos',

    // Facebook
    'facebook:title': 'Davi Campos | Full Stack Computer Engineer Portfolio',
    'facebook:description': 'Experienced Computer Engineer specializing in full-stack web development. Explore my projects and professional journey.',
    'facebook:image': '/images/davi-share.jpg',
    'facebook:type': 'website',
    'facebook:url': 'https://davicampos.dev',

    // Discord (for tech communities)
    'discord:title': 'Davi Campos | Computer Engineer',
    'discord:description': 'Full Stack Developer specializing in .NET and React. Available for tech discussions and collaborations.',
    'discord:image': '/images/davi-share.jpg',

    // Microsoft/GitHub specific
    'github:user': 'davi-campos',
    'github:title': 'Davi Campos - Computer Engineer',
    'github:description': 'Check out my open source projects and contributions on GitHub.',

    // Professional platforms
    // 'stackoverflow:user': 'davi-campos', // Replace with actual Stack Overflow profile
    // 'dev.to:username': 'davi-campos', // Replace with actual Dev.to username if you have one

    // WhatsApp sharing
    'whatsapp:title': 'Davi Campos | Computer Engineer Portfolio',
    'whatsapp:description': 'Check out this amazing portfolio of a Full Stack Computer Engineer!',

    // Telegram sharing
    'telegram:title': 'Davi Campos | Computer Engineer',
    'telegram:description': 'Portfolio of an experienced .NET and React developer.',
    'telegram:image': '/images/davi-share.jpg',

    // Pinterest
    'pinterest:title': 'Davi Campos | Computer Engineer Portfolio',
    'pinterest:description': 'Professional portfolio showcasing software development projects and skills.',
    'pinterest:image': '/images/davi-share.jpg',

    // Reddit
    'reddit:title': 'Davi Campos | Full Stack Computer Engineer',
    'reddit:description': 'Portfolio of an experienced Computer Engineer specializing in .NET and React development.',

    // YouTube (if you have tech content)
    // 'youtube:channel': 'davi-campos', // Replace with actual YouTube channel if you have one
    // 'youtube:title': 'Davi Campos | Computer Engineer',
    // 'youtube:description': 'Tech tutorials and software development insights.',

    // Skype
    // 'skype:username': 'davi.campos', // Replace with actual Skype username

    // Medium (if you write articles)
    // 'medium:username': '@davi-campos', // Replace with actual Medium username if you have one
    // 'medium:title': 'Davi Campos | Computer Engineer',
    // 'medium:description': 'Read my articles about software development, .NET, and web technologies.',

    // General sharing metadata
    'sharing:title': 'Davi Campos | Computer Engineer Portfolio',
    'sharing:description': 'Experienced Full Stack Developer specializing in .NET and React. View projects and professional experience.',
    'sharing:image': '/images/davi-share.jpg',
    'sharing:url': 'https://davicampos.dev',
  },
  alternates: {
    canonical: 'https://davicampos.dev',
  },
  verification: {
    google: 'zdQFYxKVBv3AoLlMTfXFm3zBeftFUoFsqW9mZsvT3Xs', // Replace with your actual Google Search Console verification code
    // yandex: 'your-yandex-verification', // Add if needed
    // bing: 'your-bing-verification', // Add if needed
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Davi Campos",
    "jobTitle": "Computer Engineer",
    "description": "Experienced Computer Engineer and .NET Developer specializing in full-stack web development",
    "url": "https://davicampos.dev",
    "sameAs": [
      "https://linkedin.com/in/davi-campos",
      "https://github.com/davi-campos",
      "https://x.com/DaviCampos",
      "https://www.instagram.com/davi_campos/",
      "https://stackoverflow.com/users/13072887/davi-campos",
      "https://www.facebook.com/davi.campos",
    ],
    "knowsAbout": [
      "Software Engineering",
      ".NET Development",
      "C# Programming",
      "ASP.NET",
      "React",
      "JavaScript",
      "Web Development",
      "Full Stack Development",
      "Database Design",
      "API Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "C-DAC"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Ahead"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    }
  }

  return (
    <html lang="en">
      <head>
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="google-site-verification" content="zdQFYxKVBv3AoLlMTfXFm3zBeftFUoFsqW9mZsvT3Xs" />

        {/* Additional social media meta tags */}
        {/* <meta property="fb:app_id" content="your-facebook-app-id" /> */}
        <meta name="linkedin:owner" content="davi-campos" />
        {/* <meta name="pinterest-rich-pin" content="true" /> */}
        <meta name="theme-color" content="#1976d2" />
        <meta name="msapplication-TileColor" content="#1976d2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Davi Campos" />

        {/* WhatsApp specific meta tags */}
        <meta property="whatsapp:title" content="Davi Campos | Computer Engineer Portfolio" />
        <meta property="whatsapp:description" content="Check out this amazing portfolio of a Full Stack Computer Engineer!" />
        <meta property="whatsapp:image" content="https://davicampos.dev/images/davi-share.jpg" />


        {/* Discord embed meta tags */}
        <meta property="discord:title" content="Davi Campos | Computer Engineer" />
        <meta property="discord:description" content="Full Stack Developer specializing in .NET and React. Available for tech discussions and collaborations." />
        <meta property="discord:image" content="https://davicampos.dev/images/davi-share.jpg" />

        {/* Rich snippets for professional profiles */}
        <link rel="me" href="https://linkedin.com/in/davi-campos" />
        <link rel="me" href="https://github.com/davi-campos" />
        <link rel="me" href="https://x.com/DaviCampos" />
        <link rel="me" href="https://www.instagram.com/davi_campos/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
