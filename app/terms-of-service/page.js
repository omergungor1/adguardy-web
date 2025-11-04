import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Kullanım Koşulları - AdGuardy',
  description: 'AdGuardy kullanım koşulları ve hizmet şartları.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F9FAFB] py-20 pt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-5xl font-bold text-[#0D1B2A]">
                Kullanım Koşulları
              </h1>
              <p className="text-lg text-gray-600">
                Son güncelleme: 3 Kasım 2025
              </p>
            </div>

            <div className="space-y-8 rounded-2xl bg-white p-8 shadow-lg lg:p-12">
              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">1. Hizmetin Kabul Edilmesi</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  AdGuardy hizmetini kullanarak, bu Kullanım Koşullarını ve Gizlilik Politikamızı kabul etmiş olursunuz.
                  Bu koşulları kabul etmiyorsanız, lütfen hizmeti kullanmayınız. Hizmetimizi kullanmaya devam ettiğinizde,
                  bu koşullara uyduğunuzu beyan etmiş sayılırsınız.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">2. Hizmet Tanımı</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  AdGuardy, Google Ads kampanyalarınızı bot ve rakip tıklamalardan korumak için gelişmiş bir yazılım hizmetidir.
                  Hizmetimiz aşağıdaki özellikleri içerir:
                </p>
                <ul className="mt-4 space-y-2 pl-6 text-lg text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">•</span>
                    <span>Gerçek zamanlı bot tespiti ve engelleme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">•</span>
                    <span>Rakip tıklama analizi ve koruma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">•</span>
                    <span>Detaylı raporlama ve analitik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">•</span>
                    <span>Google Ads entegrasyonu</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">3. Hesap Oluşturma ve Güvenlik</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p><strong>Hesap Sorumluluğu:</strong></p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1BCFB4]">•</span>
                      <span>Doğru ve güncel bilgiler sağlamalısınız</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1BCFB4]">•</span>
                      <span>Hesap güvenliğinden siz sorumlusunuz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1BCFB4]">•</span>
                      <span>Şifrenizi kimseyle paylaşmamalısınız</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1BCFB4]">•</span>
                      <span>Yetkisiz erişimi derhal bildirmelisiniz</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">4. Abonelik ve Ödeme</h2>
                <div className="space-y-4">
                  <div className="rounded-lg bg-blue-50 p-6">
                    <h3 className="mb-3 text-xl font-semibold text-[#3B82F6]">Ödeme Koşulları</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6]">→</span>
                        <span>Abonelik ücretleri aylık veya yıllık olarak tahsil edilir</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6]">→</span>
                        <span>İlk 14 gün ücretsiz deneme süresi vardır</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6]">→</span>
                        <span>Deneme süresi bitiminde otomatik olarak ücretlendirme başlar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6]">→</span>
                        <span>İstediğiniz zaman iptal edebilirsiniz</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-yellow-50 p-6">
                    <h3 className="mb-3 text-xl font-semibold text-yellow-800">İptal ve İade</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">⚠</span>
                        <span>Aboneliği dilediğiniz zaman iptal edebilirsiniz</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">⚠</span>
                        <span>İptal işlemi sonraki fatura döneminden geçerli olur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">⚠</span>
                        <span>Kısmen kullanılan dönemler için iade yapılmaz</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">⚠</span>
                        <span>Teknik sorunlar nedeniyle hizmet kesintisi olursa, kullanılamayan süre iade edilir</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">5. Yasak Kullanımlar</h2>
                <p className="mb-4 text-lg text-gray-700">Hizmetimizi aşağıdaki amaçlarla kullanmayı kabul etmiyorsunuz:</p>
                <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Yasa dışı faaliyetler veya hileli amaçlar için</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Başkalarının haklarını ihlal etmek için</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Sistemimizi veya hizmetimizi bozmak için</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Kötü amaçlı yazılım yaymak için</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Başka kullanıcıların hesaplarına yetkisiz erişim sağlamak için</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">6. Fikri Mülkiyet Hakları</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  AdGuardy platformu, logosu, tasarımı ve tüm içeriği AdGuardy'nin fikri mülkiyetidir ve
                  telif hakkı yasaları ile korunmaktadır. Yazılı izin olmadan kopyalanamaz, çoğaltılamaz veya dağıtılamaz.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">7. Hizmet Garanti ve Sorumluluk</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p><strong>Hizmet Garantisi:</strong></p>
                  <p>
                    AdGuardy, hizmetin %99.9 uptime ile sunulması için çaba gösterir. Ancak, internet bağlantısı,
                    sunucu problemleri veya beklenmedik teknik sorunlar nedeniyle kesintiler yaşanabilir.
                  </p>

                  <div className="rounded-lg bg-gray-100 p-6">
                    <p className="font-semibold">Sorumluluk Sınırlaması:</p>
                    <p className="mt-2">
                      AdGuardy, hizmetin kullanımından kaynaklanan dolaylı, özel veya tesadüfi zararlardan
                      sorumlu tutulamaz. Sorumluluğumuz, ödediğiniz abonelik ücreti ile sınırlıdır.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">8. Veri ve Gizlilik</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Verilerinizin işlenmesi ve korunması hakkında detaylı bilgi için
                  <a href="/privacy-policy" className="mx-1 font-semibold text-[#1BCFB4] hover:underline">
                    Gizlilik Politikamızı
                  </a>
                  inceleyiniz. KVKK ve GDPR standartlarına tam uyumluyuz.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">9. Değişiklikler</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Bu Kullanım Koşulları zaman zaman güncellenebilir. Önemli değişiklikler için sizi e-posta
                  ile bilgilendireceğiz. Değişikliklerden sonra hizmeti kullanmaya devam etmeniz, yeni koşulları
                  kabul ettiğiniz anlamına gelir.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">10. Uygulanacak Hukuk</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Bu sözleşme Türkiye Cumhuriyeti kanunlarına tabidir. Herhangi bir uyuşmazlık durumunda,
                  İstanbul mahkemeleri ve icra daireleri yetkilidir.
                </p>
              </section>

              <section className="rounded-xl bg-gradient-to-br from-[#1BCFB4] to-[#10B981] p-8 text-white">
                <h2 className="mb-4 text-3xl font-semibold">İletişim</h2>
                <p className="mb-4 text-lg text-white/90">
                  Kullanım koşulları hakkında sorularınız için:
                </p>
                <div className="space-y-2 text-lg">
                  <p><strong>E-posta:</strong> legal@adguardy.com</p>
                  <p><strong>Destek:</strong> support@adguardy.com</p>
                </div>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-[#1BCFB4] transition-all hover:bg-gray-100"
                  >
                    Bize Ulaşın
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
