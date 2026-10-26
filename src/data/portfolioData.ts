import { EducationItem, ExperienceItem, SkillItem, ContactInfo } from '../types';

export const PROFILE: ContactInfo = {
  name: 'Fadhila',
  tagline: 'Mahasiswa Sistem Informasi yang tertarik pada sistem informasi kesehatan.',
  bio: 'Saya Fadhila, lulusan SMK Farmasi Majenang yang sekarang kuliah Sistem Informasi di Universitas Komputama. Selama 5 bulan PKL di puskesmas, saya membantu pekerjaan di ruang farmasi dan mengenal e-Puskesmas, sistem digital yang dipakai di sana. Dari pengalaman itu, saya jadi tertarik pada sistem informasi kesehatan dan bercita-cita bekerja di bagian Sistem Informasi Manajemen Rumah Sakit (SIMRS).',
  quote: 'Ragu itu manusiawi, menyerah itu pilihan.',
  email: 'lestarifadila13@gmail.com',
  phone: '0831-6501-4750',
  instagram: '@fadhilalestari_',
  location: 'Cilacap, Jawa Tengah',
  heroImage: '/assets/aistudio/pasphoto_61bbc023.jpeg',
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'univ-komputama',
    period: 'Okt 2026 – Sekarang',
    institution: 'Universitas Komputama',
    detail: 'S1 Sistem Informasi',
    status: 'Sedang Berjalan',
    badge: 'Perguruan Tinggi',
  },
  {
    id: 'smk-farmasi',
    period: '2023 – 2026',
    institution: 'SMK Farmasi Majenang',
    detail: 'Jurusan Farmasi',
    status: 'Lulus',
    badge: 'Pendidikan Menengah Kejuruan',
  },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: 'pkl-puskesmas',
    role: 'Praktik Kerja Lapangan (PKL)',
    organization: 'Puskesmas Wanareja 2',
    period: 'Juni – November 2025',
    duration: '5 bulan',
    description:
      'Menjalankan tugas asistensi pelayanan kefarmasian di fasilitas kesehatan primer, serta mengamati dan mempraktikkan alur operasional pencatatan obat melalui platform digital e-Puskesmas.',
    tasks: [
      'Membantu pekerjaan di ruang farmasi',
      'Menyiapkan obat sesuai resep dokter dan tenaga medis',
      'Menata dan mengecek stok obat secara teratur',
      'Mencatat pengeluaran obat harian dan mutasi farmasi',
      'Mengenal langsung penggunaan sistem digital e-Puskesmas',
    ],
    systemHighlight: 'e-Puskesmas (Sistem Informasi Manajemen Pelayanan Kesehatan Puskesmas)',
  },
];

export const SKILL_LIST: SkillItem[] = [
  {
    name: 'Pelayanan Farmasi Dasar',
    category: 'farmasi',
    categoryLabel: 'Kefarmasian',
    description: 'Penyiapan obat sesuai resep dokter, penataan etiket, pengecekan ketersediaan stok, dan pencatatan mutasi obat.',
    level: 90,
  },
  {
    name: 'Dasar-Dasar Sistem Informasi',
    category: 'sistem_informasi',
    categoryLabel: 'Teknologi Informasi',
    description: 'Sedang mendalami struktur basis data, analisis alur proses informasi, logika algoritma, dan arsitektur web modern.',
    level: 75,
  },
  {
    name: 'Pengenalan Sistem e-Puskesmas',
    category: 'kesehatan_digital',
    categoryLabel: 'Sistem Informasi Kesehatan',
    description: 'Pemahaman alur pencatatan pengeluaran obat dan data layanan pasien secara terdigitalisasi di puskesmas.',
    level: 85,
  },
  {
    name: 'Manajemen & Pengarsipan Resep',
    category: 'farmasi',
    categoryLabel: 'Kefarmasian',
    description: 'Ketelitian dalam memverifikasi resep, menjaga ketersediaan depo obat, dan pelaporan stok obat berkala.',
    level: 88,
  },
];
