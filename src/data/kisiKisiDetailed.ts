import type { Competency } from '../types/exam';

export interface KisiSubItem {
  code: string;
  desc: string;
  tags: string[];
}

export interface KisiKompetensiGroup {
  id: Competency;
  tabLabel: string;
  heading: string;
  summary: string;
  mainTopics: string[];
  focusTip: string;
  items: KisiSubItem[];
}

export const KISI_GROUPS: KisiKompetensiGroup[] = [
  {
    id: 'Pedagogik',
    tabLabel: '1. Pedagogik',
    heading: '1. Kompetensi Pedagogik',
    summary:
      'Kemampuan mengelola pembelajaran yang berpusat pada Murid untuk mencapai tujuan pembelajaran atau pembimbingan.',
    mainTopics: [
      'Karakteristik peserta didik',
      'Analisis kebutuhan peserta didik',
      'Motivasi belajar',
      'Teori perkembangan (kognitif, psikososial, emosional)',
      'Teori-teori belajar',
      'Teori belajar',
      'Pendekatan dan metode pembelajaran',
      'Perencanaan pembelajaran/modul ajar',
      'Pembelajaran kontekstual',
      'Teaching at the right level',
      'Analisis lingkungan belajar',
      'Lingkungan belajar yang aman',
      'Perencanaan dan asesmen pembelajaran',
      'Perspektif capaian pembelajaran',
      'Desain pembelajaran (perencanaan, implementasi, pembelajaran inklusif, individualisasi)',
      'Pemanfaatan pembelajaran',
      'Pengembangan bahan ajar dan media pembelajaran',
      'Bentuk hasil pengembangan perangkat pembelajaran',
      'Pengembangan teknologi dan media pembelajaran',
      'Pemanfaatan teknologi dan media pembelajaran',
      'Penggunaan isu pemanfaatan informasi',
      'Evaluasi hasil belajar',
      'Literasi dasar dalam pembelajaran',
    ],
    focusTip:
      'Porsi soal Pedagogik dominan dalam 30 butir PU dan terintegrasi pada 50 butir PCK. Cermati kata kunci Lampiran 4: pengalaman konseptual-kontekstual-reflektif (P.1), pembelajaran responsif keragaman (P.2), berkesadaran-bermakna-menggembirakan (P.3), integrasi TIK & literasi digital (P.4), pemanfaatan sumber belajar, lingkungan & kearifan lokal (P.5), serta asesmen berkelanjutan & umpan balik (P.6).',
    items: [
      {
        code: 'P.1',
        desc: 'Merancang dan memfasilitasi pengalaman belajar Murid yang mendorong pemahaman konseptual, penerapan kontekstual, dan refleksi bermakna terhadap proses pembelajaran.',
        tags: ['UbD', 'Advance Organizer (Ausubel)', 'Scaffolding ZPD (Vygotsky)', 'PBL / PjBL / Inkuiri', 'Beban Kognitif'],
      },
      {
        code: 'P.2',
        desc: 'Melaksanakan pembelajaran yang responsif terhadap keragaman latar belakang, kebutuhan, dan potensi Murid melalui berbagai model pembelajaran.',
        tags: ['TaRL', 'Universal Design for Learning (UDL)', 'Diferensiasi Konten/Proses/Produk', 'CRT', 'Pendidikan Inklusif'],
      },
      {
        code: 'P.3',
        desc: 'Menciptakan proses pembelajaran yang berkesadaran, bermakna, dan menggembirakan.',
        tags: ['Pembelajaran Mendalam (3M)', 'Hierarki Maslow', 'SDT', 'Atribusi Weiner', 'Manajemen Kelas Kounin'],
      },
      {
        code: 'P.4',
        desc: 'Mengintegrasikan teknologi informasi dan komunikasi secara kritis dan kreatif dalam pembelajaran untuk memperluas akses, memperdalam pemahaman, dan mendukung literasi digital Murid.',
        tags: ['TPACK', 'ASSURE', 'Model SAMR', 'Flipped Classroom', 'Coherence Mayer', 'Etika AI & Literasi Digital'],
      },
      {
        code: 'P.5',
        desc: 'Menerapkan strategi pembelajaran atau pembimbingan yang sesuai karakteristik Murid dengan memanfaatkan sumber belajar dan mempertimbangkan potensi lingkungan dan kearifan lokal.',
        tags: ['Sumber Belajar Kontekstual', 'Potensi Lingkungan & Kearifan Lokal', 'CTL', 'Bruner & Kolb', 'Kooperatif Jigsaw/STAD'],
      },
      {
        code: 'P.6',
        desc: 'Melaksanakan asesmen untuk mengetahui kebutuhan belajar, memberikan umpan balik, dan mengukur hasil belajar Murid secara berkesinambungan dan reflektif.',
        tags: ['Asesmen Diagnostik & Formatif', 'Assessment as Learning', 'Rubrik Analitik/Holistik', 'Taksonomi SOLO & Bloom', 'Umpan Balik'],
      },
    ],
  },
  {
    id: 'Kepribadian',
    tabLabel: '2. Kepribadian',
    heading: '2. Kompetensi Kepribadian',
    summary:
      'Kemampuan kepribadian yang mantap, berakhlak mulia, arif, dan berwibawa serta menjadi teladan bagi Murid, lingkungan, dan masyarakat, yang ditunjukkan dengan kematangan spiritual, moral, dan emosional, serta kebiasaan melakukan refleksi diri dalam pembelajaran.',
    mainTopics: [
      'Profil Pelajar Pancasila',
      'Filsafat pendidikan',
      'Filosofi pendidikan Ki Hajar Dewantara',
      'Lima kompetensi sosial-emosional',
      'Asesmen SEL pada peserta didik',
      'Pengembangan kesadaran diri',
      'Refleksi pengalaman belajar mata kuliah inti',
      'Perencanaan dan asesmen pembelajaran',
      'Teaching at the right level',
      'Pendidikan yang berpihak pada anak',
      'Analisis karakteristik peserta didik',
      'Lingkungan belajar yang aman',
    ],
    focusTip:
      'Uji skenario dilema etis dan keteladanan dalam keberagaman (K.1), kebiasaan refleksi diri berkelanjutan & pola pikir bertumbuh/belajar sepanjang hayat (K.2), serta konsistensi keputusan mengembangkan potensi dan budaya belajar Murid (K.3).',
    items: [
      {
        code: 'K.1',
        desc: 'Menampilkan perilaku etis dan keteladanan yang mencerminkan kematangan spiritual, moral, dan emosional berdasarkan Ketuhanan Yang Maha Esa dan nilai-nilai keberagaman.',
        tags: ['Perilaku Etis & Keteladanan', 'Kematangan Spiritual, Moral & Emosional', 'Keberagaman', 'Privasi Data Murid'],
      },
      {
        code: 'K.2',
        desc: 'Melakukan refleksi diri secara berkesinambungan, mengembangkan pola pikir bertumbuh, serta belajar sepanjang hayat untuk peningkatan kualitas diri.',
        tags: ['Growth Mindset & Power of Yet', 'Refleksi Berkesinambungan', 'Siklus Gibbs & 4F', 'Belajar Sepanjang Hayat'],
      },
      {
        code: 'K.3',
        desc: 'Mengambil keputusan dan bertindak secara konsisten dalam mengembangkan potensi dan budaya belajar Murid.',
        tags: ['Keputusan Konsisten', 'Budaya Belajar Murid', 'Pengembangan Potensi', 'Iklim Kelas Aman'],
      },
    ],
  },
  {
    id: 'Sosial',
    tabLabel: '3. Sosial',
    heading: '3. Kompetensi Sosial',
    summary:
      'Kemampuan berkomunikasi, berinteraksi, dan berkolaborasi secara efektif dan efisien dengan Murid, sesama Pendidik, orang tua/wali Murid, dan masyarakat dalam pengembangan pembelajaran yang berpusat pada Murid dan pengembangan profesi.',
    mainTopics: [
      'Dasar-dasar kepemimpinan',
      'Kepemimpinan pendidikan (pengambilan keputusan yang bertanggung jawab)',
      'Mengidentifikasi persoalan pendidikan di komunitas',
      'Melaksanakan kegiatan penyelesaian masalah pendidikan di komunitas',
      'Mengevaluasi dan merefleksikan pelaksanaan kegiatan',
      'Karakteristik peserta didik',
      'Lima kompetensi sosial-emosional',
      'Filosofi pendidikan Ki Hajar Dewantara',
      'Teaching at the right level',
    ],
    focusTip:
      'Perhatikan ragam saluran komunikasi inklusif secara lisan, tulisan, dan/atau isyarat sesuai kebutuhan Murid (S.1), kolaborasi lintas unsur termasuk Tendik selain Pendidik, orang tua/wali, dan masyarakat (S.2), serta partisipasi komunitas pembelajaran untuk PKB (S.3).',
    items: [
      {
        code: 'S.1',
        desc: 'Berkomunikasi secara inklusif, empatik, dan efektif secara lisan, tulisan, dan/atau isyarat dengan memperhatikan keragaman dan kebutuhan Murid.',
        tags: ['Komunikasi Lisan, Tulisan & Isyarat', 'Inklusif & Empatik', 'CASEL Social Awareness', 'Compassion (EMC2)'],
      },
      {
        code: 'S.2',
        desc: 'Berkolaborasi dengan Murid, sesama Pendidik, Tenaga Kependidikan selain Pendidik, orang tua/wali Murid, dan masyarakat untuk meningkatkan kualitas pembelajaran.',
        tags: ['Kolaborasi Pendidik & Tendik', 'Kemitraan Orang Tua/Wali', 'Masyarakat & Dunia Kerja', 'Tri Pusat Pendidikan'],
      },
      {
        code: 'S.3',
        desc: 'Berpartisipasi aktif dalam organisasi profesi dan komunitas pembelajaran untuk pengembangan keprofesian berkelanjutan.',
        tags: ['Kombel & MGMP/KKG', 'Lesson Study (Open Class)', 'Organisasi Profesi & PKB'],
      },
    ],
  },
  {
    id: 'Profesional',
    tabLabel: '4. Profesional',
    heading: '4. Kompetensi Profesional',
    summary: 'Kemampuan penguasaan materi pelajaran secara mendalam dan kontekstual.',
    mainTopics: [
      'Perumusan capaian pembelajaran',
      'Perencanaan pembelajaran',
      'Pelaksanaan dan asesmen pembelajaran',
      'Desain pembelajaran (perencanaan, pelaksanaan, dan penilaian, model pembelajaran)',
      'Produk hasil pengembangan perangkat pembelajaran',
      'Pengembangan bahan ajar dan media pembelajaran',
      'Teori perkembangan (kognitif, psikososial, emosional)',
      'Karakteristik peserta didik',
      'Analisis karakteristik peserta didik',
      'Teori belajar',
      'Teknologi belajar',
      'Motivasi belajar',
      'Teaching at the right level',
      'Pendekatan dan metode pembelajaran',
      'Implementasi budaya yang aman',
      'Lima kompetensi sosial-emosional',
      'Analisis lingkungan belajar',
      'Pendidikan dan kebudayaan',
      'Pemanfaatan hasil asesmen/XXI',
      'Asesmen SEL pada peserta didik',
      'Data dan analisis hasil pengamatan',
      'Evaluasi hasil belajar',
      'Konsep literasi',
    ],
    focusTip:
      'Menjadi porsi inti 50 butir PCK di setiap Prodi: menguasai tujuan satuan pendidikan (PF.1), disiplin ilmu materi Prodi (PF.2), potensi & kebutuhan murid berbasis karakteristik materi & konteks lokal (PF.3), kurikulum adaptif (PF.4), dan praktik profesional inovatif (PF.5).',
    items: [
      {
        code: 'PF.1',
        desc: 'Menguasai tujuan pendidikan terutama pada Satuan Pendidikan yang diampu.',
        tags: ['Tujuan Satuan Pendidikan (SD/SMP/SMA/SMK)', 'Permendikdasmen No. 21 Tahun 2025', 'Standar Kompetensi Lulusan'],
      },
      {
        code: 'PF.2',
        desc: 'Menguasai disiplin ilmu sesuai dengan materi/muatan pembelajaran atau pembimbingan.',
        tags: [
          'Konsep Esensial & Miskonsepsi Bidang Studi',
          'Asesmen Diagnostik & Umpan Balik Materi',
          'Pembelajaran Mendalam Konteks Prodi',
        ],
      },
      {
        code: 'PF.3',
        desc: 'Memahami potensi dan kebutuhan belajar Murid berdasarkan karakteristik materi pembelajaran atau pembimbingan dan konteks lokal.',
        tags: ['Karakteristik Materi Bidang Studi', 'Diagnostik Potensi & Kesulitan Murid', 'Miskonsepsi Materi & Konteks Lokal'],
      },
      {
        code: 'PF.4',
        desc: 'Memahami, menerapkan, dan mengembangkan kurikulum secara adaptif dan kontekstual sesuai perkembangan zaman.',
        tags: ['CP ke TP & ATP', 'Kurikulum Adaptif', 'Kontekstualisasi & Teaching Factory'],
      },
      {
        code: 'PF.5',
        desc: 'Mengembangkan praktik profesional pendidikan secara konseptual, empiris, kreatif, dan inovatif.',
        tags: ['Penelitian Tindakan Kelas (PTK)', 'Praktik Empiris & Konseptual', 'Inovasi Media & Asesmen Praktik'],
      },
    ],
  },
];
