# 🛍️ Shop Dashboard

Shop Dashboard adalah aplikasi web berbasis **React.js** yang berfungsi sebagai **dashboard manajemen produk sederhana**.  
Proyek ini dibuat untuk menampilkan kemampuan dalam membangun aplikasi **React modern** dengan routing, state management, dan UI framework yang responsif.

🔗 **Demo:** [shop-dashboard-app-one.vercel.app](https://shop-dashboard-app-one.vercel.app/)

---

## 🚀 Fitur Utama

- **🔐 Autentikasi Login**  
  Pengguna harus login terlebih dahulu sebelum mengakses dashboard utama.

- **📦 Manajemen Produk**  
  Menampilkan daftar produk dalam tampilan tabel dan kartu interaktif.  
  Setiap produk dapat dilihat secara detail.

- **📊 Dashboard Analytics (opsional)**  
  Menyajikan data produk secara ringkas melalui tampilan dashboard.

- **🧭 Navigasi Dinamis**  
  Routing antar halaman menggunakan **React Router v6** dengan sistem `PrivateRoute`.

- **🧠 Context API**  
  Mengelola state global produk secara efisien tanpa perlu Redux.

- **🎨 Desain Modern**  
  Menggunakan **shadcn/ui** + **Tailwind CSS 4** untuk tampilan yang clean, responsif, dan interaktif.

---

## 🧩 Teknologi yang Digunakan

| Kategori | Teknologi |
|-----------|------------|
| Frontend Framework | [React.js 19](https://react.dev/) |
| Routing | React Router v6 |
| UI Library | [shadcn/ui](https://ui.shadcn.com/) |
| Styling | Tailwind CSS 4 |
| Animasi | Framer Motion |
| State Management | React Context API |
| Deployment | [Vercel](https://vercel.com/) |

---

## 📁 Struktur Folder

src/
│
├── components/ # Komponen UI (Navbar, Card, dsb)
├── pages/ # Halaman utama (Login, Dashboard, ProductDetail)
├── contexts/ # Context API (ProductContext)
├── hooks/ # Custom hooks (opsional)
├── App.tsx # Routing utama aplikasi
├── Index.tsx 
├── Navbar.tsx
├── PrivateRoute.tsx
└── main.tsx # Entry point React

---

## ⚙️ Cara Menjalankan Proyek

### 1️⃣ Clone repository
```bash
git clone https://github.com/username/shop-dashboard.git
2️⃣ Masuk ke folder project
bash
Copy code
cd shop-dashboard
3️⃣ Install dependencies
bash
Copy code
npm install
4️⃣ Jalankan project
bash
Copy code
npm run dev
Akses melalui: http://localhost:5173

🧠 Konsep dan Tujuan
Proyek ini dikembangkan sebagai ujian praktikum React.js yang menekankan pada:

Implementasi komponen fungsional dan state management menggunakan Context API.

Penerapan routing privat (PrivateRoute).

Integrasi UI modern dengan shadcn/ui.

Deploy aplikasi nyata menggunakan Vercel.

🧩 Cuplikan Tampilan
Halaman	Deskripsi
Login Page	Autentikasi sebelum masuk ke dashboard
Dashboard	Menampilkan daftar produk dalam tampilan tabel & card
Product Detail	Menampilkan detail informasi produk secara lengkap

💡 Pengembangan Selanjutnya
Beberapa ide pengembangan ke depan:

Fitur CRUD (Create, Update, Delete) produk.

Integrasi database (Firebase / Supabase) untuk penyimpanan data real-time.

Menambah dark mode toggle.

Sistem user role (admin & user).

👨‍💻 Pembuat
Tsaqif Muwaffaq
Frontend Developer & React Enthusiast
🎥 **slide presentasi:**  
👉 [Klik di sini untuk membuka presentasi proyek React.js](https://gamma.app/docs/Presentasi-Proyek-Akhir-Reactjs-f96ilptrmirpsc5?mode=present#card-0pckpvbv9821utk)

link vidio presentasi : 

🪄 Lisensi
Proyek ini bersifat open-source dan dapat digunakan untuk keperluan pembelajaran atau pengembangan pribadi.

“Clean code, modern UI, and clear logic — that’s the essence of a great dashboard.”
