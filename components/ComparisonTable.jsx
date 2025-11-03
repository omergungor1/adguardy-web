'use client';

import { motion } from 'framer-motion';

const comparisons = [
  { feature: "Gerçek zamanlı engelleme", adguardy: true, googleAds: false, googleNote: "24 saat sonra" },
  { feature: "Tıklama limiti özelleştirme", adguardy: true, googleAds: false },
  { feature: "Ziyaretçi analitiği", adguardy: true, googleAds: false },
  { feature: "VPN trafiği hariç tutma", adguardy: true, googleAds: false },
  { feature: "Oturum davranışı kaydı", adguardy: true, googleAds: false },
  { feature: "Rakip tıklama engelleme", adguardy: true, googleAds: false },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-[#0D1B2A] lg:text-5xl">
            AdGuardy vs Google Ads
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Neden Google Ads standart koruması yeterli değil?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#1BCFB4] to-[#10B981]">
                  <th className="px-6 py-4 text-left text-lg font-semibold text-white">Özellik</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-white">AdGuardy</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-white">Google Ads</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {comparisons.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <td className="px-6 py-4 text-gray-900 font-medium">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.googleAds ? (
                        <div className="flex justify-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                            <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          {item.googleNote && (
                            <span className="text-xs text-gray-500">{item.googleNote}</span>
                          )}
                        </div>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button className="btn-primary text-lg">
            AdGuardy ile Başlayın
          </button>
        </motion.div>
      </div>
    </section>
  );
}
