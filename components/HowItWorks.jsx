'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: "1",
    title: "Domainini Ekle",
    description: "Korunmasını istediğiniz web sitesini sisteme ekleyin."
  },
  {
    number: "2",
    title: "Google Ads ID Gir",
    description: "Google Ads hesap bilgilerinizi güvenli şekilde bağlayın."
  },
  {
    number: "3",
    title: "Yönetici Hesabını Onayla",
    description: "Hesap doğrulamasını tamamlayın ve entegrasyonu aktif edin."
  },
  {
    number: "4",
    title: "Her Şey Hazır ✅",
    description: "Artık kampanyalarınız bot ve rakip tıklamalardan korunuyor!"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-[#E0F7F4]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-[#0D1B2A] lg:text-5xl">
            Nasıl Çalışır?
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            4 basit adımda kampanyalarınızı korumaya başlayın
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="card text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#1BCFB4] to-[#10B981] text-3xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#0D1B2A]">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden pl-8 lg:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10">
                  <svg className="h-8 w-8 text-[#1BCFB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
