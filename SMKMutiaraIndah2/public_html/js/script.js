// JavaScript - SMK Mutiara Indah 2

document.addEventListener('DOMContentLoaded', function() {
    // Toggle Mobile Menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Toggle Modal (Buka / Tutup)
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.toggle('hidden');
    }
}

// Buka Modal PPDB
function openPpdbModal() {
    toggleModal('ppdb-modal');
}

// Tampilkan Detail Jurusan (Pop-up Modal)
function showJurusanDetail(code) {
    const content = document.getElementById('modal-jurusan-content');
    
    // Data Detail Masing-Masing Jurusan
    const dataJurusan = {
        'RPL': {
            title: 'Rekayasa Perangkat Lunak (RPL)',
            desc: 'Program keahlian yang fokus pada pengembangan perangkat lunak, mulai dari pembuatan aplikasi web, mobile app, hingga pengelolaan database berbasis standar industri modern.',
            pelajaran: [
                'Pemrograman Web & Perangkat Bergerak (HTML, CSS, JS, React)',
                'Pemrograman Berorientasi Objek (Java / Python)',
                'Basis Data & Server (MySQL / PostgreSQL)',
                'Desain Antarmuka Pengguna (UI/UX Design)',
                'Produk Kreatif & Kewirausahaan Digital'
            ],
            prospek: 'Web Developer, Mobile App Developer, Software Tester, UI/UX Designer, Database Administrator.',
            foto: [
                'images/rpl-1.jpeg',
                'images/rpl-2.jpeg'
            ]
        },
        'TKJ': {
            title: 'Teknik Komputer & Jaringan (TKJ)',
            desc: 'Mempelajari seluk-beluk perakitan komputer, instalasi jaringan lokal & luas (LAN/WAN), administrasi server, keamanan siber (cyber security), serta teknologi cloud computing.',
            pelajaran: [
                'Administrasi Infrastruktur Jaringan (MikroTik / Cisco)',
                'Administrasi Sistem Jaringan (Linux Server / Windows Server)',
                'Teknologi Jaringan Berbasis Luas (WAN & Fiber Optic)',
                'Keamanan Jaringan & Cyber Security Dasar',
                'Perakitan & Perawatan Komputer/Hardware'
            ],
            prospek: 'Network Engineer, System Administrator, IT Support Specialist, Cyber Security Analyst, Cloud Engineer.',
            foto: [
                'images/tkj-1.jpeg',
                'images/tkj-2.jpeg'
            ]
        },
        'AKL': {
            title: 'Akuntansi & Keuangan Lembaga (AKL)',
            desc: 'Membekali siswa dengan keterampilan pencatatan keuangan bisnis, perpajakan, pengelolaan transaksi perbankan, dan penggunaan komputer akuntansi modern.',
            pelajaran: [
                'Komputer Akuntansi (MYOB / Accurate / Excel Advance)',
                'Akuntansi Keuangan & Perusahaan Jasa/Dagang/Manufaktur',
                'Administrasi Perpajakan (PPh & PPN)',
                'Praktikum Akuntansi Lembaga / Instansi Pemerintah',
                'Etika Profesi & Keuangan Digital'
            ],
            prospek: 'Staf Akuntansi, Admin Perpajakan, Kasir/Teller Perbankan, Staf Keuangan, Internal Auditor Junior.',
            foto: [
                'images/akl-1.jpeg',
                'images/akl-2.jpeg'
            ]
        }
    };

    const item = dataJurusan[code];
    if (!item) return;

    // Buat daftar pelajaran
    const listPelajaran = item.pelajaran.map(p => `
        <li class="flex items-start gap-2 text-xs text-slate-600">
            <i class="fas fa-check-circle text-brand-blue mt-0.5"></i>
            <span>${p}</span>
        </li>
    `).join('');

    // Buat galeri foto kegiatan
    const listFoto = item.foto.map(f => `
        <div class="h-28 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
            <img src="${f}" class="w-full h-full object-cover hover:scale-105 transition transform duration-300">
        </div>
    `).join('');

    // Rangkai tampilan Modal Pop-up
    content.innerHTML = `
        <div class="inline-block px-3 py-1 bg-brand-blue text-white rounded-full text-xs font-bold mb-3">${code}</div>
        <h3 class="text-2xl font-bold font-heading text-slate-900 mb-2">${item.title}</h3>
        <p class="text-slate-600 text-xs leading-relaxed mb-4">${item.desc}</p>
        
        <!-- Mata Pelajaran Utama -->
        <div class="mb-4 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <h4 class="text-xs font-bold uppercase text-slate-800 mb-2 flex items-center gap-1.5">
                <i class="fas fa-book text-brand-amber"></i> Mata Pelajaran Unggulan:
            </h4>
            <ul class="space-y-1.5">${listPelajaran}</ul>
        </div>

        <!-- Prospek Kerja -->
        <div class="mb-4">
            <h4 class="text-xs font-bold uppercase text-slate-800 mb-1 flex items-center gap-1.5">
                <i class="fas fa-briefcase text-emerald-600"></i> Prospek Karir / Lulusan:
            </h4>
            <p class="text-xs text-slate-600 leading-relaxed">${item.prospek}</p>
        </div>

        <!-- Galeri Foto Kegiatan -->
        <div class="mb-6">
            <h4 class="text-xs font-bold uppercase text-slate-800 mb-2 flex items-center gap-1.5">
                <i class="fas fa-camera text-purple-600"></i> Foto Kegiatan Praktik Siswa:
            </h4>
            <div class="grid grid-cols-2 gap-2">${listFoto}</div>
        </div>

        <!-- Tombol Aksi -->
        <button onclick="toggleModal('jurusan-modal'); openPpdbModal();" class="w-full bg-brand-amber hover:bg-amber-600 text-slate-900 font-bold py-2.5 rounded-lg text-sm transition shadow">
            Daftar Jurusan Ini via PPDB Online
        </button>
    `;

    toggleModal('jurusan-modal');
}

// Handler Submit Form Kontak
function handleContactSubmit(e) {
    e.preventDefault();
    
    const inputs = e.target.querySelectorAll('input, textarea');
    const nama = inputs[0].value;
    const kontak = inputs[1].value;
    const pesan = inputs[2].value;

    const nomorWA = "6285779200954"; 

    const pesanWA = `Halo Admin SMK Mutiara Indah 2,%0A%0A` +
                    `Saya ingin bertanya/menghubungi sekolah dengan detail berikut:%0A` +
                    `*Nama:* ${nama}%0A` +
                    `*Email/HP:* ${kontak}%0A` +
                    `*Pesan:* ${pesan}`;

    window.open(`https://wa.me/${nomorWA}?text=${pesanWA}`, '_blank');
    e.target.reset();
}

// Handler Submit Form PPDB
function handlePpdbSubmit(e) {
    e.preventDefault();
    
    const inputs = e.target.querySelectorAll('input, select');
    const nama = inputs[0].value;
    const asalSekolah = inputs[1].value;
    const noWA = inputs[2].value;
    const jurusan = inputs[3].value;

    const nomorAdmin = "6285779200954"; 

    const pesanPPDB = `Halo Panitia PPDB SMK Mutiara Indah 2,%0A%0A` +
                      `Saya ingin mendaftar sebagai calon siswa baru:%0A` +
                      `*Nama Lengkap:* ${nama}%0A` +
                      `*Asal Sekolah:* ${asalSekolah}%0A` +
                      `*No. WhatsApp:* ${noWA}%0A` +
                      `*Pilihan Jurusan:* ${jurusan}%0A%0A` +
                      `Mohon informasi langkah pendaftaran selanjutnya. Terima kasih!`;

    window.open(`https://wa.me/${nomorAdmin}?text=${pesanPPDB}`, '_blank');
    
    toggleModal('ppdb-modal');
    e.target.reset();
}

// Modal Visi Misi
function openVisiMisiModal(tipe) {
    const content = document.getElementById('modal-visimisi-content');
    
    if (tipe === 'visi') {
        content.innerHTML = `
            <div class="w-12 h-12 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center text-xl mb-4 font-bold">
                <i class="fas fa-bullseye"></i>
            </div>
            <h3 class="text-2xl font-bold font-heading text-slate-900 mb-3">Visi SMK Mutiara Indah 2</h3>
            <p class="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                "Menjadi Sekolah Menengah Kejuruan Unggulan yang menghasilkan lulusan berkarakter, unggul dalam teknologi dan berdaya saing tinggi di tingkat nasional maupun internasional."
            </p>
        `;
    } else if (tipe === 'misi') {
        content.innerHTML = `
            <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl mb-4 font-bold">
                <i class="fas fa-tasks"></i>
            </div>
            <h3 class="text-2xl font-bold font-heading text-slate-900 mb-3">Misi SMK Mutiara Indah 2</h3>
            <ul class="text-slate-600 text-sm space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-emerald-600 mt-1"></i>
                    <span>Menyelenggarakan pembelajaran berbasis teknologi dan berstandar industri.</span>
                </li>
                <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-emerald-600 mt-1"></i>
                    <span>Membina karakter siswa yang disiplin, jujur dan berakhlak mulia.</span>
                </li>
                <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-emerald-600 mt-1"></i>
                    <span>Meningkatkan kerja sama dengan Dunia Usaha dan Dunia Industri.</span>
                </li>
                <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-emerald-600 mt-1"></i>
                    <span>Mengembangkan potensi kewirausahaan dan kreativitas siswa.</span>
                </li>
            </ul>
        `;
    }
    
    toggleModal('visimisi-modal');
}