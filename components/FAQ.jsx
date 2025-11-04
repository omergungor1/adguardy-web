'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "AdGuardy nedir?",
    answer: "AdGuardy, Google Ads kampanyalarınızı bot ve rakip tıklamalardan koruyan gelişmiş bir yazılım hizmetidir. Gereksiz reklam harcamalarınızı azaltır ve reklam getirininizi artırır."
  },
  {
    question: "Hesabınız nasıl bağlanıyor?",
    answer: "Hesabınızı güvenli bir şekilde bağlantı kuruyoruz. Sadece okuma ve engelleme listesi yönetimi yetkisi istiyoruz. Kampanyalarınızın verilerine müdahale etmiyoruz."
  },
  {
    question: "KVKK'ya uygun mu?",
    answer: "Evet, %100 KVKK uyumlu. Hiçbir kişisel veri toplamıyoruz, tüm veriler anonim, şeffaf bir şekilde işleniyor ve belirlenen süre sonunda otomatik olarak siliniyor."
  },
  {
    question: "Botları nasıl tespit ediyor?",
    answer: "Makine öğrenimi algoritmaları, IP analizi, cihaz tanıma, davranış analizi ve VPN/proxy tespiti gibi çoklu katmanlı yöntemlerle botları %99 doğrulukla tespit ediyoruz."
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer: "Sadece 5 dakika! Domain ekleyin, Google Ads hesabınızı bağlayın ve onaylayın. Hemen koruma başlar."
  },
  {
    question: "İptal edebilir miyim?",
    answer: "Evet, istediğiniz zaman iptal edebilirsiniz. Herhangi bir ceza veya bağlayıcı sözleşme yok."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20  bg-gradient-to-br from-[#F9FAFB] to-[#E0F7F4]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-[#0D1B2A] lg:text-5xl">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Aklınıza takılan her şey burada
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-[#0D1B2A]">{faq.question}</span>
                <svg
                  className={`h-6 w-6 flex-shrink-0 text-[#1BCFB4] transition-transform ${openIndex === index ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-gray-200 px-6 py-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
