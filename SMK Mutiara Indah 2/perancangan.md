# Perancangan Sistem SMK Mutiara Indah 2

Dokumen ini berisi rancangan struktur antarmuka (hirarki menu) dan Relasi Antar Tabel (ER-D) untuk Aplikasi Company Profile SMK Mutiara Indah 2.

---

## 1. Hirarki Menu (Sidebar / Navbar)

Berikut adalah struktur navigasi menu berdasarkan 2 peran pengguna (*role*):

### A. Hak Akses: Pengunjung / Publik (Siswa & Umum)
* **Beranda** (Hero banner, profil singkat, berita terbaru, & testimoni)
* **Profil Sekolah**
  * Sejarah & Identitas Sekolah
  * Visi & Misi
  * Sambutan Kepala Sekolah
  * Struktur Organisasi
  * Fasilitas & Sarana Prasarana
* **Program Keahlian (Jurusan)**
  * Teknik Komputer & Jaringan (TKJ)
  * Rekayasa Perangkat Lunak (RPL)
  * Desain Komunikasi Visual (DKV)
  * Manajemen Perkantoran (OTKP)
  * Akuntansi & Keuangan Lembaga (AKL)
* **Kemitraan & Industri (DUDI)**
  * Daftar Perusahaan Mitra
  * Program Praktik Kerja Lapangan (PKL)
  * Informasi Bursa Kerja Khusus (BKK)
* **Berita & Kegiatan** (Artikel, pengumuman, & galeri acara)
* **Kontak & Lokasi** (Alamat, peta interaktif, & media sosial)

### B. Hak Akses: Administrator / Tim Humas
* **Dashboard Admin** (Statistik pengunjung & ringkasan konten)
* **Kelola Profil Sekolah**
  * Edit Visi & Misi
  * Edit Sambutan Kepala Sekolah
  * Master Data Fasilitas & Foto
* **Kelola Program Keahlian**
  * Edit Detail Kurikulum Jurusan
  * Unggah Karya & Portofolio Siswa
* **Kelola Informasi & Berita**
  * Tambah / Edit Artikel Berita
  * Kelola Kategori Berita
  * Upload Galeri Kegiatan
* **Kelola Kemitraan**
  * Master Data Mitra Industri (DUDI)
  * Update Informasi BKK / Lowongan Kerja

---

https://www.figma.com/design/kActxx7rA71jVqZsAKmSuz/Company-Profile?node-id=0-1&p=f&t=dgl3OsnTFCMpbFGQ-0


https://www.figma.com/design/kActxx7rA71jVqZsAKmSuz/Company-Profile?node-id=0-1&p=f



## 2. Relasi Antar Tabel (ER-D)

Berikut adalah pemodelan entitas dan relasi basis data sederhana untuk Company Profile:

### A. Entitas & Atribut
* **USERS** (*id, nama, email, password, role*)
* **JURUSAN** (*id, kode_jurusan, nama_jurusan, deskripsi, prospect_kerja, ikon*)
* **BERITA** (*id, judul, slug, konten, gambar_cover, user_id, created_at*)
* **FASILITAS** (*id, nama_fasilitas, deskripsi, gambar_url*)
* **MITRA_INDUSTRI** (*id, nama_perusahaan, bidang_usaha, logo_url, website*)
* **KARYA_SISWA** (*id, judul_karya, deskripsi, foto_karya, jurusan_id*)

### B. Relasi Antar Tabel
* **USERS** ke **BERITA**: *One-to-Many* (1 Admin/Humas dapat menulis banyak berita)
* **JURUSAN** ke **KARYA_SISWA**: *One-to-Many* (1 Jurusan memiliki banyak portofolio karya siswa)