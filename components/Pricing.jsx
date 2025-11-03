'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: "Starter",
    price: "1,490",
    period: "ay",
    description: "Küçük işletmeler için ideal başlangıç paketi",
    features: [
      "5.000 tıklama/ay",
      "1 Domain",
      "Temel bot engelleme",
      "Email destek",
      "Aylık raporlar",
      "30 gün veri saklama"
    ],
    highlighted: false
  },
  {
    name: "Pro",
    price: "2,990",
    period: "ay",
    description: "Orta ölçekli işletmeler için gelişmiş koruma",
    features: [
      "25.000 tıklama/ay",
      "5 Domain",
      "Gelişmiş bot engelleme",
      "Rakip analizi",
      "7/24 destek",
      "Gerçek zamanlı raporlar",
      "90 gün veri saklama",
      "VPN/Proxy filtreleme"
    ],
    highlighted: true
  },
  {
    name: "Business",
    price: "5,990",
    period: "ay",
    description: "Büyük işletmeler için kurumsal çözüm",
    features: [
      "Sınırsız tıklama",
      "Sınırsız Domain",
      "Tam özellik paketi",
      "Özel hesap yöneticisi",
      "Öncelikli destek",
      "Özel raporlar",
      "1 yıl veri saklama",
      "API erişimi",
      "Özelleştirilebilir kurallar"
    ],
    highlighted: false
  }
];

export default function Pricing() {
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
            Şeffaf Fiyatlandırma
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            İhtiyacınıza uygun paketi seçin, istediğiniz zaman iptal edin
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl bg-white p-8 shadow-xl ${
                plan.highlighted ? 'ring-4 ring-[#1BCFB4] scale-105' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-[#1BCFB4] to-[#10B981] px-6 py-2 text-sm font-semibold text-white shadow-lg">
                    En Popüler
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-[#0D1B2A]">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-[#0D1B2A]">{plan.price}</span>
                  <span className="ml-2 text-xl text-gray-600">₺/{plan.period}</span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}>
                Şimdi Başla
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Tüm paketlerde <span className="font-semibold text-[#1BCFB4]">14 gün ücretsiz</span> deneme hakkı
          </p>
        </motion.div>
      </div>
    </section>
  );
}
