# Plan — Connected Health & Habit Tracker (React + shadcn/ui + Tailwind CSS)

Project hasil rekonstruksi dan modularisasi dari **`bevel2`** (`www.bevel.health`) yang dibangun menggunakan standar industri modern:
- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 + Bevel Design Tokens
- **Komponen UI:** shadcn/ui pattern (`cva`, `clsx`, `tailwind-merge`, Radix UI primitives)
- **Aset & Media:** Menggunakan aset lokal terverifikasi di `/public/assets` (mockup iPhone, Apple Watch, video loop, poster, dsb).

---

## 🎨 Desain Sistem & Token ([DESIGN.md](../bevel2/DESIGN.md))

| Token | Warna | Kelas Tailwind | Penggunaan |
|---|---|---|---|
| Paper White | `#ffffff` | `bg-paper-white` / `bg-white` | Kanvas utama, background footer, navbar surface |
| Charcoal | `#1f2025` | `bg-charcoal` / `text-charcoal` | Tombol CTA download, dark mode section, pill controls |
| Ink | `#222326` | `text-ink` | Display headings, section titles, teks utama |
| Cloud Card | `#ebf0f8` | `bg-cloud-card` | Kartu bento, background metrik, soft surface |
| Body Gray | `#747679` | `text-body-gray` | Deskripsi, helper text, muted links |
| Signal Gold | `#ffca00` | `text-signal-gold` | Star ratings, highlight penting |
| Metric Blue | `#415eee` | `text-metric-blue` | Data klinis & longevity |
| Recovery Green | `#31ce01` | `text-recovery-green` | Indikator pemulihan & HRV optimal |
| Sleep Lilac | `#b9a6ff` | `text-sleep-lilac` | Tahapan tidur dan circadian |

---

## 📁 Struktur Direktori

```
/root/work/plan/
├── public/
│   └── assets/                  # Media gambar, video, dan ikon
├── src/
│   ├── components/
│   │   ├── layout/              # CapsuleNavbar, Footer
│   │   ├── sections/            # HeroSection, BentoFeatures, PartnerLogos,
│   │   │                        # SocialProofMarquee, IntelligenceSection,
│   │   │                        # GallerySection, CtaDownloadSection
│   │   ├── shared/              # DeviceMockup (iPhone + Watch), MetricCards
│   │   └── ui/                  # Primitif shadcn (Button, Card, Badge, dsb)
│   ├── data/
│   │   └── content.ts           # Konfigurasi teks & data mock
│   ├── lib/
│   │   └── utils.ts             # cn() helper
│   ├── types/
│   │   └── index.ts             # Definisi interface TypeScript
│   ├── App.tsx                  # Root layout komposisi
│   ├── index.css                # CSS variables, utility tokens, SF Pro tracking
│   └── main.tsx                 # Mounting React
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Menjalankan Project

### 1. Development Server
```bash
npm run dev
# Server berjalan di http://localhost:3000
```

### 2. Type Check (Lint)
```bash
npm run lint
```

### 3. Production Build
```bash
npm run build
```

---

## 🧩 Reusable untuk Masa Depan
Seluruh section dirancang terpisah dan modular. Jika di masa depan Anda ingin membuat:
- **Landing Page Produk Baru**: Cukup ubah data di `src/data/content.ts` dan susun ulang komponen di `src/App.tsx`.
- **Dashboard / Web App**: Komponen `Card` (Cloud Card), `Button` (Charcoal Pill), dan `Badge` dapat langsung dipakai di aplikasi internal atau dashboard metrik apa pun.
