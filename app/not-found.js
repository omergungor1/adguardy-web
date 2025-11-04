'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAFB] via-[#E0F7F4] to-[#F9FAFB] px-6">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* 404 Animasyonlu İkon */}
          <div className="mb-8 flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="relative"
            >
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#1BCFB4] to-[#10B981] shadow-2xl">
                <svg className="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-[#3B82F6] opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-2 -left-2 h-6 w-6 rounded-full bg-[#8B5CF6] opacity-20"
              />
            </motion.div>
          </div>

          {/* 404 Başlık */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-8xl font-bold text-[#0D1B2A] lg:text-9xl"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-3xl font-bold text-[#0D1B2A] lg:text-4xl"
          >
            Sayfa Bulunamadı
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 text-xl text-gray-600"
          >
            Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.
          </motion.p>
        </motion.div>

        {/* Butonlar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/"
            className="btn-primary flex items-center justify-center gap-2 text-lg"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Ana Sayfaya Dön</span>
          </Link>

          <Link
            href="/contact"
            className="btn-secondary flex items-center justify-center gap-2 text-lg"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Bize Ulaşın</span>
          </Link>
        </motion.div>

        {/* Popüler Sayfalar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="mb-4 text-lg font-semibold text-gray-700">Popüler Sayfalar</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/pricing"
              className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-[#1BCFB4] hover:text-[#1BCFB4]"
            >
              Fiyatlandırma
            </Link>
            <Link
              href="/about"
              className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-[#1BCFB4] hover:text-[#1BCFB4]"
            >
              Hakkımızda
            </Link>
            <Link
              href="/demo-request"
              className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-[#1BCFB4] hover:text-[#1BCFB4]"
            >
              Demo Talep Et
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-[#1BCFB4] hover:text-[#1BCFB4]"
            >
              İletişim
            </Link>
          </div>
        </motion.div>

        {/* AdGuardy Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 opacity-50 transition-opacity hover:opacity-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1BCFB4] to-[#10B981]">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-[#0D1B2A]">AdGuardy</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

