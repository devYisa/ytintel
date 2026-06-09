

export const metadata = {

  title: { default: 'eTWise World', template: '%s | etYisa' },
  description: 'Official portfolio of Yusuf Olamitunji Yisa (eTWise). Expert in Web & Mobile Development (Flutter, JS, MERN) as well as Management Based Research and Analysis across West Africa. The Brain Behind Edu-Technology Wise (eTWise).',
  keywords: [ 'yisa olamitunji', 'yusuf olamitunji', 'yusuf etyisa', 'yusuf etwise', 'etwise.com', 'etwise EduTech Company', 'etwise in Bissau', 'tech company in Guinea-Bissau', 'melhor empresa de technologia em Bissau', 'Software Developer Guinea-Bissau', 'Best Flutter Developer West Africa', 'MERN engenharia em Bissau' ],
  
  authors: [{ name: 'Yusuf Olamitunji Yisa', url: 'https://www.etwise.com' }],
  creator: 'Yisa etWise',
  publisher: 'eTWise',
  metadataBase: new URL('https://www.etwise.com'),
  
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1, },},

  openGraph: { type: 'website', locale: 'en_US', url: 'https://www.etwise.com', title: 'Yusuf eTYisa - Educational Technology', description: 'Architecting high-performance enterprise frameworks, linguistic pathways, and digital pipelines for schools and corporations.', siteName: 'etwise', 
    images: [  { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Yisa eTYisa Portfolio', },],
  },

  twitter: { card: 'summary_large_image', title: 'Yisa eTWise', description: 'Software Engineering & Management Reserach Pipelines.', creator: '@devYisa', images: ['/og-image.jpg'], },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark" />
        <link rel="canonical" href="https://www.etwise.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}