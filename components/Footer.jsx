'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] py-12 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1BCFB4]">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-2xl font-bold">AdGuardy</span>
            </div>
            <p className="text-gray-400">
              Reklamlarınızı bot ve rakip tıklamalardan koruyun.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Ürün</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 transition-colors hover:text-[#1BCFB4]">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 transition-colors hover:text-[#1BCFB4]">
                  Fiyatlandırma
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Şirket</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 transition-colors hover:text-[#1BCFB4]">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 transition-colors hover:text-[#1BCFB4]">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Yasal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 transition-colors hover:text-[#1BCFB4]">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 transition-colors hover:text-[#1BCFB4]">
                  Kullanım Koşulları
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2025 AdGuardy. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
