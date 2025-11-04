'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Fiyatlandırma', href: '/pricing' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'İletişim', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1BCFB4] to-[#10B981]">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-[#0D1B2A]">AdGuardy</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menüyü aç</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors ${pathname === item.href
                  ? 'text-[#1BCFB4]'
                  : 'text-gray-700 hover:text-[#1BCFB4]'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <a href="https://app.adguardy.com/login" className="flex items-center text-sm font-semibold leading-6 text-gray-700 hover:text-[#1BCFB4]">
              Giriş Yap
            </a>
            <Link
              href="/demo-request"
              className="rounded-lg bg-gradient-to-r from-[#1BCFB4] to-[#10B981] px-6 py-2 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105"
            >
              Ücretsiz Başla
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${pathname === item.href
                    ? 'bg-[#1BCFB4]/10 text-[#1BCFB4]'
                    : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://app.adguardy.com/login"
                  className="block rounded-lg px-3 py-2 text-center text-base font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Giriş Yap
                </a>
                <Link
                  href="/demo-request"
                  className="block rounded-lg bg-gradient-to-r from-[#1BCFB4] to-[#10B981] px-3 py-2 text-center text-base font-semibold text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ücretsiz Başla
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

