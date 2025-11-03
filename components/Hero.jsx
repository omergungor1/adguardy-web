'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-[#E0F7F4] to-[#F9FAFB] pt-32 pb-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight text-[#0D1B2A] lg:text-6xl xl:text-7xl">
              Bot ve Rakipleri <br />
              <span className="text-[#1BCFB4]">Reklamlarınızdan Uzak Tutun</span> 🚫
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 lg:text-2xl">
              AdGuardy, Google Ads kampanyalarınızı bot ve rakip tıklamalardan korur. 
              2 dakikada sitenizi bağlayın, gereksiz tıklamalara veda edin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <button className="btn-primary flex items-center justify-center gap-2 text-lg">
              <span>Ücretsiz Başla</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2 text-lg">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Demo İzle</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 w-full max-w-5xl"
          >
            <div className="relative rounded-2xl bg-white p-4 shadow-2xl">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-[#1BCFB4]/20 to-[#3B82F6]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <svg className="h-24 w-24 text-[#1BCFB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-gray-600">Dashboard Önizlemesi</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
