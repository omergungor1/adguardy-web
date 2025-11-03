'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#E0F7F4] py-20 pt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-5xl font-bold text-[#0D1B2A]">
                İletişime Geçin
              </h1>
              <p className="text-xl text-gray-600">
                Sorularınız için buradayız. Bize ulaşın!
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-semibold text-[#0D1B2A]">
                  Mesaj Gönderin
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#1BCFB4] focus:outline-none focus:ring-2 focus:ring-[#1BCFB4]/20"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#1BCFB4] focus:outline-none focus:ring-2 focus:ring-[#1BCFB4]/20"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">
                      Şirket Adı (Opsiyonel)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#1BCFB4] focus:outline-none focus:ring-2 focus:ring-[#1BCFB4]/20"
                      placeholder="Şirket adınız"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#1BCFB4] focus:outline-none focus:ring-2 focus:ring-[#1BCFB4]/20"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Mesajı Gönder
                  </button>

                  {submitted && (
                    <div className="rounded-lg bg-green-50 p-4 text-center text-green-700">
                      ✓ Mesajınız başarıyla gönderildi!
                    </div>
                  )}
                </form>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl bg-white p-8 shadow-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1BCFB4]/10">
                      <svg className="h-6 w-6 text-[#1BCFB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0D1B2A]">E-posta</h3>
                      <a href="mailto:info@adguardy.com" className="text-[#1BCFB4] hover:underline">
                        info@adguardy.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3B82F6]/10">
                      <svg className="h-6 w-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0D1B2A]">Canlı Destek</h3>
                      <p className="text-gray-600">7/24 hizmetinizdeyiz</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#10B981]/10">
                      <svg className="h-6 w-6 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0D1B2A]">Çalışma Saatleri</h3>
                      <p className="text-gray-600">Hafta içi: 09:00 - 18:00</p>
                      <p className="text-gray-600">Hafta sonu: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#1BCFB4] to-[#10B981] p-8 text-white shadow-lg">
                  <h3 className="mb-3 text-xl font-semibold">Demo Talep Edin</h3>
                  <p className="mb-4 text-white/90">
                    AdGuardy'nin nasıl çalıştığını görmek ister misiniz? Size özel bir demo ayarlayalım.
                  </p>
                  <button className="w-full rounded-lg bg-white px-6 py-3 font-semibold text-[#1BCFB4] transition-all hover:bg-gray-100">
                    Demo Talep Et
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
