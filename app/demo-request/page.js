'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';

export default function DemoRequestPage() {
    const [formData, setFormData] = useState({
        domain: '',
        google_ads_customer_id: '',
        full_name: '',
        email: '',
        phone: '',
        company_name: '',
        sector: '',
        address: '',
        monthly_budget_range: '',
        preferred_payment_method: '',
        referral_source: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const formatPhoneNumber = (value) => {
        // Sadece rakamları al
        const numbers = value.replace(/\D/g, '');

        // Max 10 rakam
        const limited = numbers.slice(0, 10);

        // Format: 555 555 55 55
        let formatted = '';
        if (limited.length > 0) {
            formatted = limited.slice(0, 3);
        }
        if (limited.length >= 4) {
            formatted += ' ' + limited.slice(3, 6);
        }
        if (limited.length >= 7) {
            formatted += ' ' + limited.slice(6, 8);
        }
        if (limited.length >= 9) {
            formatted += ' ' + limited.slice(8, 10);
        }

        return formatted;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            // Telefon numarasını formatla
            const formatted = formatPhoneNumber(value);
            setFormData(prev => ({
                ...prev,
                [name]: formatted
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

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

            // Telefon numarasından boşlukları temizle
            const cleanPhone = formData.phone.replace(/\s/g, '');

            // Boş opsiyonel alanları undefined yapma
            const submitData = {
                ...formData,
                phone: cleanPhone, // Formatlanmış telefonu temizlenmiş haliyle gönder
                company_name: formData.company_name || null,
                sector: formData.sector || null,
                address: formData.address || null,
                monthly_budget_range: formData.monthly_budget_range || null,
                preferred_payment_method: formData.preferred_payment_method || null,
                referral_source: formData.referral_source || null,
                message: formData.message || null,
                status: 'pending'
            };

            console.log('Gönderilecek veri:', submitData);

            const { data, error: supabaseError } = await supabase
                .from('demo_requests')
                .insert([submitData])
                .select();

            if (supabaseError) {
                console.error('Supabase hatası:', supabaseError);

                if (supabaseError.code === '23505') {
                    // Unique constraint violation
                    if (supabaseError.message.includes('email')) {
                        throw new Error('Bu e-posta adresi zaten kayıtlı.');
                    } else if (supabaseError.message.includes('domain')) {
                        throw new Error('Bu domain zaten kayıtlı.');
                    } else if (supabaseError.message.includes('phone')) {
                        throw new Error('Bu telefon numarası zaten kayıtlı.');
                    } else if (supabaseError.message.includes('google_ads_customer_id')) {
                        throw new Error('Bu Google Ads müşteri ID\'si zaten kayıtlı.');
                    }
                }

                // Diğer Supabase hataları için detaylı mesaj
                throw new Error(supabaseError.message || 'Veritabanı hatası oluştu.');
            }

            setSuccess(true);
            setFormData({
                domain: '',
                google_ads_customer_id: '',
                full_name: '',
                email: '',
                phone: '',
                company_name: '',
                sector: '',
                address: '',
                monthly_budget_range: '',
                preferred_payment_method: '',
                referral_source: '',
                message: ''
            });

            // 3 saniye sonra başarı mesajını temizle
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            console.error('Hata:', err);
            setError(err.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-[#F9FAFB] via-[#E0F7F4] to-[#F9FAFB] py-20 pt-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        {/* Başlık */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-12 text-center"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1BCFB4] to-[#10B981] shadow-lg">
                                    <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                            </div>
                            <h1 className="mb-4 text-5xl font-bold text-[#0D1B2A]">
                                Ücretsiz Test Edin
                            </h1>
                            <p className="mx-auto max-w-2xl text-xl text-gray-600">
                                14 gün ücretsiz deneme ile AdGuardy'yi keşfedin. Kredi kartı gerektirmez.
                            </p>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="rounded-2xl bg-white p-8 shadow-xl lg:p-12"
                        >
                            {success && (
                                <div className="mb-6 rounded-lg bg-green-50 p-4 border-2 border-green-200">
                                    <div className="flex items-center gap-3">
                                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold text-green-800">Başarılı!</p>
                                            <p className="text-green-700">Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="mb-6 rounded-lg bg-red-50 p-4 border-2 border-red-200">
                                    <div className="flex items-center gap-3">
                                        <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-red-700">{error}</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* İletişim Bilgileri */}
                                <div>
                                    <h2 className="mb-4 text-2xl font-semibold text-[#0D1B2A]">İletişim Bilgileri</h2>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-gray-700">
                                                Ad Soyad <span className="text-red-500">*</span>
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
                                                E-posta <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                                                placeholder="ornek@sirket.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                                                Telefon <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                maxLength={13}
                                                className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                                                placeholder="555 555 55 55"
                                            />
                                            <p className="mt-1 text-xs text-gray-500">
                                                Format: 555 555 55 55
                                            </p>
                                        </div>

                                        <div>
                                            <label htmlFor="company_name" className="mb-2 block text-sm font-medium text-gray-700">
                                                Şirket Adı
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
                                    </div>
                                </div>

                                {/* Google Ads Bilgileri */}
                                <div>
                                    <h2 className="mb-4 text-2xl font-semibold text-[#0D1B2A]">Google Ads Bilgileri</h2>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="domain" className="mb-2 block text-sm font-medium text-gray-700">
                                                Web Siteniz <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="domain"
                                                name="domain"
                                                value={formData.domain}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                                                placeholder="ornek.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="google_ads_customer_id" className="mb-2 block text-sm font-medium text-gray-700">
                                                Google Ads Müşteri ID <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="google_ads_customer_id"
                                                name="google_ads_customer_id"
                                                value={formData.google_ads_customer_id}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                                                placeholder="123-456-7890"
                                            />
                                            <p className="mt-1 text-sm text-gray-500">
                                                Google Ads hesabınızın üst kısmında bulabilirsiniz
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Ek Bilgiler */}
                                <div>
                                    <h2 className="mb-4 text-2xl font-semibold text-[#0D1B2A]">Ek Bilgiler</h2>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="sector" className="mb-2 block text-sm font-medium text-gray-700">
                                                Sektör
                                            </label>
                                            <select
                                                id="sector"
                                                name="sector"
                                                value={formData.sector}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                                            >
                                                <option value="">Sektör seçin</option>
                                                <option value="E-ticaret">E-ticaret</option>
                                                <option value="Eğitim">Eğitim</option>
                                                <option value="Finans">Finans</option>
                                                <option value="Sağlık">Sağlık</option>
                                                <option value="Teknoloji">Teknoloji</option>
                                                <option value="Turizm">Turizm</option>
                                                <option value="Gayrimenkul">Gayrimenkul</option>
                                                <option value="Danışmanlık">Danışmanlık</option>
                                                <option value="Diğer">Diğer</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="monthly_budget_range" className="mb-2 block text-sm font-medium text-gray-700">
                                                Aylık Reklam Bütçeniz
                                            </label>
                                            <select
                                                id="monthly_budget_range"
                                                name="monthly_budget_range"
                                                value={formData.monthly_budget_range}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                                            >
                                                <option value="">Bütçe aralığı seçin</option>
                                                <option value="0-5000">0 - 5.000 ₺</option>
                                                <option value="5000-15000">5.000 - 15.000 ₺</option>
                                                <option value="15000-50000">15.000 - 50.000 ₺</option>
                                                <option value="50000-100000">50.000 - 100.000 ₺</option>
                                                <option value="100000+">100.000 ₺ üzeri</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="preferred_payment_method" className="mb-2 block text-sm font-medium text-gray-700">
                                                Tercih Edilen Ödeme Yöntemi
                                            </label>
                                            <select
                                                id="preferred_payment_method"
                                                name="preferred_payment_method"
                                                value={formData.preferred_payment_method}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                                            >
                                                <option value="">Ödeme yöntemi seçin</option>
                                                <option value="Kredi Kartı">Kredi Kartı</option>
                                                <option value="Banka Havalesi">Banka Havalesi</option>
                                                <option value="Kurumsal Fatura">Kurumsal Fatura</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="referral_source" className="mb-2 block text-sm font-medium text-gray-700">
                                                Bizi Nereden Duydunuz?
                                            </label>
                                            <select
                                                id="referral_source"
                                                name="referral_source"
                                                value={formData.referral_source}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                                            >
                                                <option value="">Seçin</option>
                                                <option value="Google Arama">Google Arama</option>
                                                <option value="Sosyal Medya">Sosyal Medya</option>
                                                <option value="Tavsiye">Tavsiye</option>
                                                <option value="Reklam">Reklam</option>
                                                <option value="Blog/Makale">Blog/Makale</option>
                                                <option value="Diğer">Diğer</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">
                                            Adres
                                        </label>
                                        <textarea
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            rows={2}
                                            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                                            placeholder="Şirket adresiniz"
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                                            Mesajınız
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#1BCFB4] focus:outline-none"
                                            placeholder="Bize iletmek istediğiniz bir şey var mı?"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-start gap-2 text-sm text-gray-600">
                                        <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>
                                            Formu göndererek <a href="/privacy-policy" className="text-[#1BCFB4] hover:underline">Gizlilik Politikamızı</a> ve{' '}
                                            <a href="/terms-of-service" className="text-[#1BCFB4] hover:underline">Kullanım Koşullarımızı</a> kabul etmiş olursunuz.
                                        </span>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
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
                                                <span>Denemeyi Başlat</span>
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </motion.div>

                        {/* Özellikler */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-12 grid gap-6 md:grid-cols-3"
                        >
                            <div className="rounded-xl bg-white p-6 shadow-md text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1BCFB4]/10">
                                        <svg className="h-6 w-6 text-[#1BCFB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-[#0D1B2A]">5 Dakikada Kurulum</h3>
                                <p className="text-gray-600">Hızlı ve kolay entegrasyon</p>
                            </div>

                            <div className="rounded-xl bg-white p-6 shadow-md text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#10B981]/10">
                                        <svg className="h-6 w-6 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-[#0D1B2A]">Kredi Kartı Yok</h3>
                                <p className="text-gray-600">14 gün tamamen ücretsiz</p>
                            </div>

                            <div className="rounded-xl bg-white p-6 shadow-md text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3B82F6]/10">
                                        <svg className="h-6 w-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-[#0D1B2A]">7/24 Destek</h3>
                                <p className="text-gray-600">Her zaman yanınızdayız</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

