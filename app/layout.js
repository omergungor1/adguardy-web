import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "AdGuardY - Modern DNS Yönetim Platformu",
  description: "AdGuardY ile DNS kayıtlarınızı kolayca yönetin, izleyin ve optimize edin.",
  keywords: ["DNS", "AdGuard", "DNS Yönetimi", "Web Arayüzü"],
  authors: [{ name: "AdGuardY Team" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  openGraph: {
    title: "AdGuardY - Modern DNS Yönetim Platformu",
    description: "DNS kayıtlarınızı kolayca yönetin ve izleyin",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
