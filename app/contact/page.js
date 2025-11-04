'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company_name: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Supabase bağlantısını kontrol et
      if (!supabase) {
        throw new Error('Supabase bağlantısı kurulamadı. Lütfen environment variables\'ları kontrol edin.');
      }

      // Boş opsiyonel alanları null yap
      const submitData = {
        full_name: formData.full_name,
        email: formData.email,
        company_name: formData.company_name || null,
        message: formData.message,
        status: 'unread'
      };

      console.log('Gönderilecek veri:', submitData);

      const { data, error: supabaseError } = await supabase
        .from('contact_messages')
        .insert([submitData])
        .select();

      if (supabaseError) {
        console.error('Supabase hatası:', supabaseError);
        throw new Error(supabaseError.message || 'Veritabanı hatası oluştu.');
      }

      console.log('Mesaj başarıyla gönderildi:', data);
      setSuccess(true);

      // Formu temizle
      setFormData({
        full_name: '',
        email: '',
        company_name: '',
        message: ''
      });

      // 5 saniye sonra başarı mesajını temizle
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Hata:', err);
      setError(err.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
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
                  {error && (
                    <div className="rounded-lg bg-red-50 p-4 border-2 border-red-200">
                      <div className="flex items-center gap-3">
                        <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-red-700">{error}</p>
                      </div>
                    </div>
                  )}

                  {success && (
                    <div className="rounded-lg bg-green-50 p-4 border-2 border-green-200">
                      <div className="flex items-center gap-3">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-green-800">Başarılı!</p>
                          <p className="text-green-700">Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-gray-700">
                      Adınız Soyadınız <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                      E-posta Adresiniz <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company_name" className="mb-2 block text-sm font-medium text-gray-700">
                      Şirket Adı (Opsiyonel)
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                      placeholder="Şirket adınız"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                      Mesajınız <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Gönderiliyor...</span>
                      </>
                    ) : (
                      <>
                        <span>Mesajı Gönder</span>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>
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
                  <a href="/demo-request" className="block w-full rounded-lg bg-white px-6 py-3 text-center font-semibold text-[#1BCFB4] transition-all hover:bg-gray-100">
                    Demo Talep Et
                  </a>
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
