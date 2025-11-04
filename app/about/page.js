import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Hakkımızda - AdGuardy',
  description: 'AdGuardy ekibi ve misyonumuz hakkında bilgi edinin.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F9FAFB] py-20 pt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-5xl font-bold text-[#0D1B2A]">
                AdGuardy Hakkında
              </h1>
              <p className="text-xl text-gray-600">
                Reklamlarınızı korumak için buradayız
              </p>
            </div>

            <div className="space-y-8 rounded-2xl bg-white p-8 shadow-lg lg:p-12">
              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">Misyonumuz</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  AdGuardy, dijital reklam dünyasında işletmelerin karşılaştığı en büyük problemlerden biri olan
                  bot ve rakip tıklamalarını çözmek için kuruldu. Amacımız, reklam bütçelerinizin her kuruşunun
                  gerçek potansiyel müşterilere ulaşmasını sağlamak ve ROI'nizi maksimize etmektir.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">Hikayemiz</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Google Ads ile kampanya yürüten yüzlerce işletme, bütçelerinin önemli bir kısmının
                  bot tıklamalara gittiğini fark etti. Google'ın sunduğu koruma mekanizmaları ise 24 saat
                  sonra devreye giriyor ve bu sürede binlerce lira boşa harcanıyordu.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  İşte bu noktada AdGuardy doğdu. Gerçek zamanlı bot engelleme, gelişmiş makine öğrenimi
                  algoritmaları ve kullanıcı dostu bir arayüz ile reklam kampanyalarınızı tam koruma altına alıyoruz.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">Değerlerimiz</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl bg-[#1BCFB4]/5 p-6">
                    <h3 className="mb-2 text-xl font-semibold text-[#1BCFB4]">Şeffaflık</h3>
                    <p className="text-gray-700">
                      Tüm süreçlerimiz şeffaf. Verileriniz nasıl işleniyor, nasıl korunuyor - hepsini biliyorsunuz.
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#3B82F6]/5 p-6">
                    <h3 className="mb-2 text-xl font-semibold text-[#3B82F6]">Gizlilik</h3>
                    <p className="text-gray-700">
                      KVKK ve GDPR'a tam uyum. Kişisel veri toplamıyor, tüm verileri anonim saklıyoruz.
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#10B981]/5 p-6">
                    <h3 className="mb-2 text-xl font-semibold text-[#10B981]">İnovasyon</h3>
                    <p className="text-gray-700">
                      Sürekli geliştiriyoruz. Yeni bot türleri ortaya çıktıkça algoritmalarımızı güncelliyoruz.
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#EF4444]/5 p-6">
                    <h3 className="mb-2 text-xl font-semibold text-[#EF4444]">Müşteri Odaklılık</h3>
                    <p className="text-gray-700">
                      Başarınız bizim başarımız. Her geri bildiriminizi dinliyor ve ürünümüzü geliştiriyoruz.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">Neden AdGuardy?</h2>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-6 w-6 flex-shrink-0 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Google'dan 24 saat önce gerçek zamanlı koruma</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-6 w-6 flex-shrink-0 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>%99 doğrulukla bot ve rakip tespiti</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-6 w-6 flex-shrink-0 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>5 dakikada kurulum, hemen koruma başlar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-6 w-6 flex-shrink-0 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>KVKK uyumlu, anonim veri işleme</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-6 w-6 flex-shrink-0 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>7/24 Türkçe destek</span>
                  </li>
                </ul>
              </section>

              <section className="text-center">
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">Bizimle İletişime Geçin</h2>
                <p className="mb-6 text-lg text-gray-700">
                  Sorularınız mı var? Ekibimiz size yardımcı olmak için hazır.
                </p>
                <a href="/contact" className="btn-primary inline-block">
                  İletişime Geç
                </a>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
