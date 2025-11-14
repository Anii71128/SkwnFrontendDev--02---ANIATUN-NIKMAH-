# SkwnFrontendDev--02 – ANIATUN NIKMAH

Proyek frontend **Dashboard Finance** yang dibangun menggunakan **HTML, CSS, dan jQuery**, dengan data yang diambil dari **API finance terbuka** untuk menampilkan statistik, card saldo, transaksi, grafik, dan elemen dashboard lainnya. Proyek ini di‑hosting melalui GitHub Pages:

➡️ [https://anii71128.github.io/SkwnFrontendDev--02---ANIATUN-NIKMAH-/](https://anii71128.github.io/SkwnFrontendDev--02---ANIATUN-NIKMAH-/)

---

## 📄 Dokumen Soal Tes

Silakan lihat dokumen soal tes pada link berikut:

➡️ (https://docs.google.com/document/d/1PzpOaKJDQv4dmTbr45HJJK0EvjL9xEAG35U7QoRB2XE/edit?tab=t.0)

## 📝 Deskripsi Proyek

Dashboard ini menampilkan elemen-elemen berikut:

* Card saldo / income / expense
* Statistik transaksi
* Grafik keuangan (menggunakan Chart.js atau jQuery plugin lain jika diperlukan)
* Responsivitas penuh untuk mobile & desktop
* Animasi smooth untuk hover, transition, dan interaksi
* Data dimuat secara dinamis dari API finance/public economic API

Dashboard ini dibuat untuk meniru tampilan dashboard modern menggunakan layout grid, style clean, dan integrasi data realtime.

---

## 🚀 How to Start Project

Berikut cara menjalankan proyek dashboard finance ini secara lokal:

### **1. Clone Repository**

```bash
git clone https://github.com/anii71128/SkwnFrontendDev--02---ANIATUN-NIKMAH-.git
cd SkwnFrontendDev--02---ANIATUN-NIKMAH-
```

### **2. Tidak membutuhkan instalasi**

Tidak ada package tambahan karena proyek ini hanya menggunakan **HTML, CSS, jQuery**, dan API langsung dari web.

Pastikan file berikut ada:

* `index.html`
* `style.css`
* `script.js`

### **3. Jalankan proyek (2 cara)**

#### ✔ Cara A — Buka langsung

Cukup buka:

```
index.html
```

melalui browser.

#### ✔ Cara B — Menggunakan VSCode Live Server (direkomendasikan)

1. Install ekstensi **Live Server**
2. Klik kanan `index.html`
3. Pilih **Open With Live Server**

---

## 🌐 API yang Digunakan (Finance Data)

Dashboard ini menggunakan API finance publik seperti:

### **1. Exchange Rate / Currency API (Gratis)**

```
https://open.er-api.com/v6/latest/USD
```

Digunakan untuk:

* update nilai mata uang
* card statistik
* tabel data

### **2. Economic Indicators API (opsional)**

```
https://api.exchangerate.host/latest
```

Contoh response:

```json
{
  "base": "USD",
  "rates": {
    "EUR": 0.93,
    "IDR": 15700,
    "JPY": 151
  }
}
```

Data tersebut dapat digunakan untuk:

* grafik
* perbandingan nilai tukar
* card ringkasan finansial

---

## 🔧 Fungsionalitas Utama (Menggunakan jQuery)

Dashboard ini mencakup fitur berikut:

### ✔ Memuat data finance dari API real‑time

* mengambil kurs / indikator ekonomi
* menampilkan pada card informasi
* update otomatis saat refresh

### ✔ Grafik Data

* Chart line / bar untuk tren keuangan
* Data diambil dari API

### ✔ Animasi Interaktif

* hover smooth
* card scale effect
* fade-in data loader

### ✔ Responsive Layout

Menggunakan CSS Grid & Flexbox, termasuk mode mobile.

---

## 📁 Struktur Direktori

```
/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── icons/
│   └── images/
└── README.md
```

---

## 🙋 Cara Berkontribusi

1. Fork repository ini
2. Buat branch baru: `git checkout -b fitur-dashboard`
3. Commit perubahan: `git commit -m "Menambahkan fitur finance baru"`
4. Push: `git push origin fitur-dashboard`
5. Ajukan Pull Request

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License**.

---

## 💬 Kontak

Untuk pertanyaan dan saran, hubungi Ani Atun Nikmah melalui profil GitHub atau media sosial yang tersedia.
