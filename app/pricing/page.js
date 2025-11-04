import Pricing from '@/components/Pricing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata = {
    title: 'Fiyatlandırma - AdGuardy | Google Ads Koruma Paketleri',
    description: 'AdGuardy fiyatlandırma paketleri. Küçük işletmelerden ajans ve kurumsal şirketlere kadar herkes için uygun Google Ads koruma çözümleri. 14 gün ücretsiz deneme.',
    keywords: 'adguardy fiyat, google ads koruma fiyatları, bot engelleme paketi, reklam koruma fiyat',
};

export default function PricingPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-[#E0F7F4] to-[#F9FAFB] pt-32 pb-16">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-[#0D1B2A] lg:text-6xl">
                            Size Uygun Paketi Seçin
                        </h1>
                        <p className="text-xl text-gray-600 lg:text-2xl">
                            Şeffaf fiyatlandırma, gizli ücret yok. Tüm paketlerde 14 gün ücretsiz deneme hakkı.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Component */}
            <Pricing />

            {/* CTA Section */}
            <CTA />

            <Footer />
        </main>
    );
}

