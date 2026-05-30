import { Metadata } from 'next';

export const metadata = {

  title: {
    default: 'Yusuf Olamitunji Yisa (devYisa) | ysintel.com',
    template: '%s | devYisa'
  },
  description: 'Official portfolio of Yusuf Olamitunji Yisa (devYisa). Expert in Front-End Web & Mobile Development (Flutter, JS, MERN) and Language Technology Systems in West Africa. Founder of Easy Technology Company (ETC).',
  keywords: [
    'Yusuf Olamitunji Yisa', 
    'devYisa', 
    'ysintel', 
    'ysintel.com', 
    'Easy Technology Company', 
    'ETC Bissau', 
    'Software Engineer Guinea-Bissau', 
    'Front-end Developer West Africa',
    'Flutter engineer'
  ],
  authors: [{ name: 'Yusuf Olamitunji Yisa', url: 'https://ysintel.com' }],
  creator: 'devYisa',
  publisher: 'Easy Technology Company',
  metadataBase: new URL('https://ysintel.com'),
  
  // Robôs de busca: Diz ao Google para indexar tudo e seguir os links
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

  // Open Graph (Garante que quando partilhares o link no WhatsApp, LinkedIn ou Twitter, apareça um card bonito com foto)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ysintel.com',
    title: 'Yusuf Olamitunji Yisa (devYisa) - Software & Hardware Engineering',
    description: 'Architecting high-performance enterprise frameworks, linguistic pathways, and digital pipelines for schools, churches, and corporations.',
    siteName: 'ysintel',
    images: [
      {
        url: '/og-image.jpg', // Crie uma imagem com este nome na pasta public depois!
        width: 1200,
        height: 630,
        alt: 'Yusuf Olamitunji Yisa (devYisa) Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yusuf Olamitunji Yisa (devYisa)',
    description: 'Software & Hardware Engineering pipelines.',
    creator: '@devYisa',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tag canónica para evitar conteúdos duplicados se acederem por subdomínios da Vercel */}
        <link rel="canonical" href="https://ysintel.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}