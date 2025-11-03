import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gizlilik Politikası - AdGuardy',
  description: 'AdGuardy gizlilik politikası ve KVKK uyumluluk bildirimi.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F9FAFB] py-20 pt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-5xl font-bold text-[#0D1B2A]">
                Gizlilik Politikası
              </h1>
              <p className="text-lg text-gray-600">
                Son güncelleme: 3 Kasım 2025
              </p>
            </div>

            <div className="space-y-8 rounded-2xl bg-white p-8 shadow-lg lg:p-12">
              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">1. Giriş</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  AdGuardy olarak kişisel verilerinizin güvenliği ve gizliliği bizim için son derece önemlidir. 
                  Bu Gizlilik Politikası, hizmetlerimizi kullanırken toplanan, işlenen ve saklanan verilerin 
                  nasıl yönetildiğini açıklamaktadır. Politikamız, 6698 sayılı Kişisel Verilerin Korunması 
                  Kanunu (KVKK) ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) ile tam uyumludur.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">2. Toplanan Veriler</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p className="font-semibold">AdGuardy olarak topladığımız veriler:</p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1BCFB4]">•</span>
                      <span><strong>Hesap Bilgileri:</strong> Ad, soyad, e-posta adresi, şirket bilgileri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1BCFB4]">•</span>
                      <span><strong>Teknik Veriler:</strong> IP adresi, tarayıcı bilgisi, cihaz bilgisi (anonim)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1BCFB4]">•</span>
                      <span><strong>Kullanım Verileri:</strong> Hizmet kullanım istatistikleri, tıklama verileri (anonim)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1BCFB4]">•</span>
                      <span><strong>Ödeme Bilgileri:</strong> Sadece ödeme sağlayıcıları üzerinden işlenir, bizde saklanmaz</span>
                    </li>
                  </ul>
                  <div className="mt-4 rounded-lg bg-green-50 p-4">
                    <p className="font-semibold text-green-800">
                      ⚠️ ÖNEMLİ: Kişisel veri toplamıyoruz! Tüm analitik veriler anonim olarak işlenir.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">3. Verilerin Kullanım Amacı</h2>
                <p className="mb-4 text-lg text-gray-700">Topladığımız veriler yalnızca şu amaçlarla kullanılır:</p>
                <ul className="space-y-2 pl-6 text-lg text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">•</span>
                    <span>Hizmetimizi sağlamak ve iyileştirmek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">•</span>
                    <span>Bot ve rakip tıklamaları tespit etmek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">•</span>
                    <span>Müşteri desteği sağlamak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">•</span>
                    <span>Yasal yükümlülükleri yerine getirmek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">•</span>
                    <span>Hizmet kalitesini artırmak için anonim istatistikler oluşturmak</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">4. Veri Saklama Süresi</h2>
                <div className="rounded-xl bg-blue-50 p-6">
                  <p className="text-lg text-gray-700">
                    <strong className="text-[#3B82F6]">Varsayılan Saklama:</strong> Verileriniz en fazla 3 ay süreyle saklanır.
                    Bu süre sonunda tüm veriler otomatik olarak silinir.
                  </p>
                  <p className="mt-3 text-lg text-gray-700">
                    <strong className="text-[#3B82F6]">Hesap Silme:</strong> Hesabınızı sildiğinizde, tüm verileriniz 
                    7 gün içinde kalıcı olarak silinir.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">5. Veri Güvenliği</h2>
                <p className="mb-4 text-lg text-gray-700">Verilerinizi korumak için aldığımız önlemler:</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border-2 border-[#1BCFB4] p-4">
                    <h3 className="mb-2 font-semibold text-[#0D1B2A]">🔒 SSL/TLS Şifreleme</h3>
                    <p className="text-gray-600">Tüm veri transferleri şifrelenir</p>
                  </div>
                  <div className="rounded-lg border-2 border-[#1BCFB4] p-4">
                    <h3 className="mb-2 font-semibold text-[#0D1B2A]">🛡️ Güvenli Sunucular</h3>
                    <p className="text-gray-600">Veriler güvenli veri merkezlerinde saklanır</p>
                  </div>
                  <div className="rounded-lg border-2 border-[#1BCFB4] p-4">
                    <h3 className="mb-2 font-semibold text-[#0D1B2A]">🔐 Erişim Kontrolü</h3>
                    <p className="text-gray-600">Sınırlı personel erişimi</p>
                  </div>
                  <div className="rounded-lg border-2 border-[#1BCFB4] p-4">
                    <h3 className="mb-2 font-semibold text-[#0D1B2A]">📊 Düzenli Denetim</h3>
                    <p className="text-gray-600">Güvenlik testleri ve denetimleri</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">6. Haklarınız (KVKK)</h2>
                <p className="mb-4 text-lg text-gray-700">KVKK kapsamındaki haklarınız:</p>
                <ul className="space-y-3 pl-6 text-lg text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">✓</span>
                    <span>Kişisel verilerinizin işlenip işlenmediğini öğrenme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">✓</span>
                    <span>İşlenmişse buna ilişkin bilgi talep etme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">✓</span>
                    <span>Verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">✓</span>
                    <span>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">✓</span>
                    <span>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">✓</span>
                    <span>Kişisel verilerin silinmesini veya yok edilmesini isteme</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">7. Çerezler (Cookies)</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanıyoruz. Çerezler, 
                  tarayıcınıza kaydedilen küçük metin dosyalarıdır. Çerez tercihlerinizi istediğiniz zaman 
                  tarayıcı ayarlarınızdan değiştirebilirsiniz.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">8. Üçüncü Taraf Servisler</h2>
                <p className="mb-4 text-lg text-gray-700">
                  Hizmetimizde kullandığımız üçüncü taraf servisler:
                </p>
                <ul className="space-y-2 pl-6 text-lg text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">•</span>
                    <span><strong>Google Ads API:</strong> Kampanya verilerini okumak için</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">•</span>
                    <span><strong>Ödeme Sağlayıcıları:</strong> Güvenli ödeme işlemleri için</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1BCFB4]">•</span>
                    <span><strong>Hosting Servisleri:</strong> Veri barındırma için (Vercel)</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">9. Değişiklikler</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Bu Gizlilik Politikası, yasal gereksinimlere ve hizmet değişikliklerine bağlı olarak güncellenebilir. 
                  Önemli değişikliklerde sizi e-posta ile bilgilendireceğiz. Güncel versiyonu her zaman web sitemizde bulabilirsiniz.
                </p>
              </section>

              <section className="rounded-xl bg-gradient-to-br from-[#1BCFB4] to-[#10B981] p-8 text-white">
                <h2 className="mb-4 text-3xl font-semibold">10. İletişim</h2>
                <p className="mb-4 text-lg text-white/90">
                  Gizlilik politikamız veya verilerinizle ilgili sorularınız için bizimle iletişime geçin:
                </p>
                <div className="space-y-2 text-lg">
                  <p><strong>E-posta:</strong> privacy@adguardy.com</p>
                  <p><strong>Adres:</strong> İstanbul, Türkiye</p>
                </div>
                <div className="mt-6">
                  <a 
                    href="/contact" 
                    className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-[#1BCFB4] transition-all hover:bg-gray-100"
                  >
                    İletişim Formu
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
