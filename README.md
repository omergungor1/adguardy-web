# 🛡️ AdGuardy - Bot ve Rakip Tıklama Koruması

Modern SaaS landing page - Google Ads kampanyalarınızı bot ve rakip tıklamalardan koruyun.

![AdGuardy](https://img.shields.io/badge/Status-Active-success)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8)

## 🚀 Özellikler

- ⚡ **Next.js 16** - App Router ile modern yapı
- 🎨 **Tailwind CSS 4** - Özel renk paleti (#1BCFB4, #10B981, #3B82F6)
- 🎭 **Framer Motion** - Akıcı animasyonlar
- 📱 **Responsive** - Mobil öncelikli tasarım
- 🌍 **SEO Optimized** - Schema.org, sitemap, robots.txt
- ⚖️ **KVKK/GDPR Uyumlu** - Yasal sayfalar
- 🔒 **Güvenli** - Best practice security headers

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development modunda çalıştır
npm run dev

# Production build
npm run build

# Production modunda çalıştır
npm start
```

Proje [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## 📁 Proje Yapısı

```
adguardy-web/
├── app/
│   ├── layout.js              # Root layout + metadata + Schema.org
│   ├── page.js                # Ana sayfa (landing)
│   ├── globals.css            # Global stiller + renk paleti
│   ├── sitemap.js             # Dinamik sitemap
│   ├── schema.js              # Schema.org definitions
│   ├── about/                 # Hakkımızda sayfası
│   ├── contact/               # İletişim sayfası
│   ├── privacy-policy/        # KVKK uyumlu gizlilik
│   └── terms-of-service/      # Kullanım koşulları
├── components/
│   ├── Hero.jsx               # Hero section
│   ├── Features.jsx           # Özellikler kartları
│   ├── HowItWorks.jsx         # 4 adımlı süreç
│   ├── ComparisonTable.jsx    # AdGuardy vs Google Ads
│   ├── Pricing.jsx            # 3 paket fiyatlandırma
│   ├── FAQ.jsx                # Sıkça sorulan sorular
│   ├── CTA.jsx                # Call to action
│   └── Footer.jsx             # Footer + yasal linkler
├── public/
│   ├── robots.txt             # SEO robot kuralları
│   └── favicon.ico            # Site ikonu
├── next.config.mjs            # Vercel + CDN optimize
└── vercel.json                # Vercel deployment config
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary:** `#1BCFB4` - Ana marka rengi
- **Secondary:** `#3B82F6` - İkincil vurgu
- **Success:** `#10B981` - Başarı durumları
- **Danger:** `#EF4444` - Uyarı durumları
- **Text:** `#0D1B2A` - Ana metin
- **Background:** `#F9FAFB` - Arkaplan

### Tipografi
- **Başlıklar:** Poppins SemiBold (600/700)
- **Paragraflar:** Inter Regular (400/500/600)

### Radius & Shadows
- **Border Radius:** 16px (1rem)
- **Shadow:** `0 4px 14px rgba(0,0,0,0.05)`

## 📄 Sayfalar

### Landing Page (/)
- Hero section - CTA butonları
- Features - 6 özellik kartı
- How It Works - 4 adım
- Comparison Table - AdGuardy vs Google Ads
- Pricing - 3 paket (Starter, Pro, Business)
- FAQ - 8 soru-cevap
- CTA - Final çağrı
- Footer - Yasal linkler + sosyal medya

### Yasal Sayfalar
- `/about` - Hakkımızda, misyon, değerler
- `/contact` - İletişim formu
- `/privacy-policy` - KVKK uyumlu gizlilik politikası
- `/terms-of-service` - Kullanım koşulları

## 🔍 SEO

### Metadata
- Türkçe meta etiketler
- OpenGraph tags (Facebook/LinkedIn)
- Twitter Card
- Canonical URLs

### Schema.org
- Organization schema
- SoftwareApplication schema
- FAQ schema

### Dosyalar
- `robots.txt` - Tarama kuralları
- `sitemap.js` - Dinamik sitemap
- Structured data

## 🚀 Vercel'e Deploy

### Otomatik Deploy
1. GitHub reposunu Vercel'e bağlayın
2. Otomatik deployment başlar
3. Her push yeni deploy tetikler

### Manuel Deploy
```bash
npx vercel
```

### Ortam Değişkenleri
Vercel dashboard'dan ekleyin:
```
NEXT_PUBLIC_BASE_URL=https://adguardy.com
NEXT_PUBLIC_APP_NAME=AdGuardy
```

## 📊 Google Şeffaf Tıklama İzleyici Sertifikası

Proje, Google'ın Transparent Click Tracker sertifika kriterlerine uygun olarak geliştirilmiştir:

✅ Şeffaf veri politikası  
✅ KVKK/GDPR uyumlu  
✅ Privacy Policy ve Terms of Service  
✅ SSL zorunlu  
✅ Anonim veri işleme  
✅ Kullanıcı onay mekanizması  

## 🛠️ Teknolojiler

- **Framework:** Next.js 16.0.1 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Language:** JavaScript (ES6+)
- **Fonts:** Poppins + Inter (Google Fonts)
- **Deploy:** Vercel
- **CDN:** Vercel Edge Network

## 📝 Lisans

© 2025 AdGuardy. Tüm hakları saklıdır.

---

Made with ❤️ by AdGuardy Team