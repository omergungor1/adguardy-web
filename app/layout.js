import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata = {
  title: 'AdGuardy - Bot Koruması',
  description: 'AdGuardy, Google Ads kampanyalarınızı bot ve rakip tıklamalardan korur. 5 dakikada sitenizi bağlayın, gereksiz tıklamalara veda edin.',
  keywords: ['Google Ads', 'Bot Engelleme', 'Tıklama Koruması', 'AdGuardy', 'Reklam Güvenliği', 'KVKK Uyumlu'],
  authors: [{ name: 'AdGuardy Team' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'AdGuardy - Bot ve Rakip Tıklamalardan Koruma',
    description: 'Google Ads kampanyalarınızı bot ve rakip tıklamalardan koruyun. KVKK uyumlu, gerçek zamanlı koruma.',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'AdGuardy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdGuardy - Bot ve Rakip Tıklamalardan Koruma',
    description: 'Google Ads kampanyalarınızı bot ve rakip tıklamalardan koruyun',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AdGuardy",
    "url": "https://adguardy.com",
    "logo": "https://adguardy.com/logo.png",
    "description": "Google Ads kampanyalarınızı bot ve rakip tıklamalardan koruyun"
  };

  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
