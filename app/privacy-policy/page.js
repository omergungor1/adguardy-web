import Link from 'next/link';
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
                Son güncelleme: 12 Kasım 2025
              </p>
            </div>

            <div className="space-y-8 rounded-2xl bg-white p-8 shadow-lg lg:p-12">
              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">1. Giriş</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  AdGuardy olarak kişisel verilerinizin güvenliği ve gizliliği bizim için son derece önemlidir.
                  Bu Gizlilik Politikası, hizmetlerimizi kullanırken toplanan, işlenen ve saklanan verilerin
                  nasıl yönetildiğini açıklamaktadır. Politikamız, 6698 sayılı Kişisel Verilerin Korunması
                  Kanunu (KVKK) ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) ile uyumludur.
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
                  </ul>
                  <div className="mt-4 rounded-lg bg-green-50 p-4">
                    <p className="font-semibold text-green-800">
                      ⚠️ ÖNEMLİ: Kişisel veri toplamıyoruz! Tüm analitik veriler anonim olarak işlenir.
                    </p>
                    <p className="mt-2 text-green-700">
                      AdGuardy olarak topladığımız tüm teknik ve kullanım verileri anonimleştirilmiş şekilde tutulur.
                      Hiçbir veri kişisel kimlik bilgisiyle eşleştirilmez veya kişisel olarak tanımlanabilir hale getirilmez.
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
                <div className="mt-6 rounded-lg border-2 border-red-200 bg-red-50 p-4">
                  <p className="font-semibold text-red-800">
                    🚫 ÖNEMLİ: AdGuardy hiçbir zaman verilerinizi satmaz, kiralamaz veya ticari amaçlarla üçüncü taraflara aktarmaz.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">4. Trafik ve Bot Tespiti</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    AdGuardy, tıklama güvenliğini sağlamak ve sahte trafiği azaltmak amacıyla ziyaretçi etkileşimlerini analiz eder.
                  </p>
                  <p className="leading-relaxed">
                    Bu analiz, IP adresi, tarayıcı bilgileri ve tıklama zamanı gibi anonimleştirilmiş teknik verileri kapsayabilir.
                  </p>
                  <div className="mt-4 rounded-lg border-2 border-[#1BCFB4] bg-blue-50 p-4">
                    <p className="font-semibold text-[#0D1B2A] mb-2">🔹 Önemli Bilgi</p>
                    <p className="leading-relaxed">
                      Sistem, zararlı veya otomatik (bot) trafiği tespit edip engellemeye çalışır; ancak yeni IP adresleri veya gelişmiş bot davranışları nedeniyle %100 koruma garantisi vermez.
                    </p>
                  </div>
                  <p className="leading-relaxed mt-4">
                    Bu süreçte toplanan veriler yalnızca güvenlik ve performans amaçlı kullanılır, ticari veya reklam amaçlı üçüncü taraflarla paylaşılmaz.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">5. Veri Saklama Süresi</h2>
                <div className="rounded-xl bg-blue-50 p-6">
                  <p className="text-lg text-gray-700">
                    <strong className="text-[#3B82F6]">Varsayılan Saklama:</strong> Toplanan veriler yalnızca istatistiksel ve anonim amaçlarla kullanılmakta olup, en fazla 1 yıl süreyle saklanır. Bu sürenin sonunda tüm veriler anonimleştirilir veya kalıcı olarak silinir.
                  </p>
                  <p className="mt-3 text-lg text-gray-700">
                    <strong className="text-[#3B82F6]">Hesap Silme:</strong> Hesabınızı sildiğinizde, tüm verileriniz
                    14 gün içinde kalıcı olarak silinir.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">6. Veri Güvenliği</h2>
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
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">7. Haklarınız (KVKK)</h2>
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
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">8. Çerezler (Cookies)</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanıyoruz. Çerezler,
                    tarayıcınıza kaydedilen küçük metin dosyalarıdır. Çerez tercihlerinizi istediğiniz zaman
                    tarayıcı ayarlarınızdan değiştirebilirsiniz.
                  </p>
                  <div className="mt-4 rounded-lg bg-green-50 p-4">
                    <p className="font-semibold text-green-800">
                      🔒 ÖNEMLİ: Çerezlerimiz üçüncü taraflarla paylaşılmaz. Tüm çerez verileri yalnızca AdGuardy tarafından kullanılır.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-semibold text-[#0D1B2A]">9. Değişiklikler</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Bu Gizlilik Politikası, yasal gereksinimlere ve hizmet değişikliklerine bağlı olarak güncellenebilir. Adguardy, gizlilik politikasını gerektiğinde güncelleyebilir. Yapılan değişiklikler bu sayfada yayımlandığı anda yürürlüğe girer. Kullanıcılar en güncel politikayı her zaman bu sayfadan görüntüleyebilir.
                </p>
              </section>

              <section className="rounded-xl bg-gradient-to-br from-[#1BCFB4] to-[#10B981] p-8 text-white">
                <h2 className="mb-4 text-3xl font-semibold">10. İletişim</h2>
                <p className="mb-4 text-lg">
                  Gizlilik politikamız veya kişisel verilerinizin işlenmesiyle ilgili sorularınız için bizimle{' '}
                  <Link href="/contact" className="underline hover:text-gray-200 transition-colors">
                    iletişim sayfası
                  </Link>
                  {' '}üzerinden veya{' '}
                  <a href="mailto:info@adguardy.com" className="underline hover:text-gray-200 transition-colors">
                    info@adguardy.com
                  </a>
                  {' '}adresinden iletişime geçebilirsiniz.
                </p>
                <div className="space-y-2 text-lg">
                  <p>
                    <strong>E-posta:</strong>{' '}
                    <a href="mailto:info@adguardy.com" className="underline hover:text-gray-200 transition-colors">
                      info@adguardy.com
                    </a>
                  </p>
                  <p><strong>Adres:</strong> Bursa, Türkiye</p>
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
