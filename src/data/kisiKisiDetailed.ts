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
  focusTip: string;
  items: KisiSubItem[];
}

export const KISI_GROUPS: KisiKompetensiGroup[] = [
  {
    id: 'Pedagogik',
    tabLabel: '1. Pedagogik',
    heading: '1. Kompetensi Pedagogik',
    summary: 'Kemampuan mengelola pembelajaran yang berpusat pada Murid untuk mencapai tujuan pembelajaran secara bermakna.',
    focusTip:
      'Porsi soal Pedagogik paling besar dalam UTBK UKPPPG. Perhatikan kata kunci kasus: desain pengalaman belajar (P.1), keragaman/inklusi/TaRL/UDL (P.2), iklim 3M & psikologis kelas (P.3), pemanfaatan TIK (P.4), teori & strategi belajar (P.5), atau asesmen & tindak lanjut (P.6).',
    items: [
      {
        code: 'P.1',
        desc: 'Merancang dan memfasilitasi pengalaman belajar Murid yang mendorong pemahaman konseptual, penerapan kontekstual, dan refleksi bermakna.',
        tags: ['UbD', 'Advance Organizer (Ausubel)', 'Scaffolding ZPD (Vygotsky)', 'PBL / PjBL / Inkuiri', 'Beban Kognitif'],
      },
      {
        code: 'P.2',
        desc: 'Melaksanakan pembelajaran yang responsif terhadap keragaman latar belakang, kesiapan, kebutuhan, dan potensi Murid.',
        tags: ['TaRL', 'Universal Design for Learning (UDL)', 'Diferensiasi Konten/Proses/Produk', 'CRT', 'Pendidikan Inklusif'],
      },
      {
        code: 'P.3',
        desc: 'Menciptakan proses pembelajaran yang berkesadaran (mindful), bermakna (meaningful), dan menggembirakan (joyful).',
        tags: ['Pembelajaran Mendalam (3M)', 'Hierarki Maslow', 'SDT', 'Atribusi Weiner', 'Manajemen Kelas Kounin'],
      },
      {
        code: 'P.4',
        desc: 'Mengintegrasikan teknologi informasi dan komunikasi secara kritis dan kreatif untuk mendukung pembelajaran & literasi digital.',
        tags: ['TPACK', 'ASSURE', 'Model SAMR', 'Flipped Classroom', 'Coherence Mayer', 'Etika AI & Literasi Digital'],
      },
      {
        code: 'P.5',
        desc: 'Menerapkan strategi pembelajaran sesuai karakteristik Murid dengan memanfaatkan sumber belajar dan konteks lingkungan/kearifan lokal.',
        tags: ['Behavioristik (Skinner/Pavlov)', 'Bandura', 'Bruner (CRA)', 'Kolb', 'Kooperatif STAD/NHT/Jigsaw', 'CTL'],
      },
      {
        code: 'P.6',
        desc: 'Melaksanakan asesmen berkelanjutan, memberi umpan balik konstruktif, dan menindaklanjuti hasil belajar Murid secara objektif.',
        tags: ['Asesmen Diagnostik & Formatif', 'Assessment as Learning', 'Rubrik Analitik/Holistik', 'Taksonomi SOLO & Bloom', 'Hattie'],
      },
    ],
  },
  {
    id: 'Kepribadian',
    tabLabel: '2. Kepribadian',
    heading: '2. Kompetensi Kepribadian',
    summary: 'Kematangan moral, regulasi emosi, refleksi diri, pola pikir bertumbuh, serta integritas etika profesi guru.',
    focusTip:
      'Uji skenario dilema etika (pemberian hadiah/nilai, privasi konseling murid), respons stres guru, serta perangkap growth mindset yang hanya memuji usaha tanpa umpan balik strategi.',
    items: [
      {
        code: 'K.1',
        desc: 'Menampilkan perilaku etis dan keteladanan yang mencerminkan kematangan spiritual, moral, dan emosional.',
        tags: ['Kode Etik Guru', 'Integritas Penilaian', 'Privasi Data Murid', 'Sistem Among (Tut Wuri Handayani)'],
      },
      {
        code: 'K.2',
        desc: 'Melakukan refleksi diri berkesinambungan dan mengembangkan pola pikir bertumbuh (growth mindset).',
        tags: ['Growth Mindset & Power of Yet', 'Neuroplastisitas', 'Siklus Gibbs', 'Model Driscoll & 4F', 'Regulasi Emosi Guru'],
      },
      {
        code: 'K.3',
        desc: 'Mengambil keputusan secara konsisten dalam mengembangkan budaya belajar yang aman, disiplin positif, dan anti-perundungan.',
        tags: ['Disiplin Positif', 'Regulasi Diri (SEL CASEL)', 'Penanganan Bullying', 'Mediasi Restoratif'],
      },
    ],
  },
  {
    id: 'Sosial',
    tabLabel: '3. Sosial',
    heading: '3. Kompetensi Sosial',
    summary: 'Komunikasi empatik inklusif dengan murid, kemitraan orang tua/DUDIKA, serta partisipasi aktif komunitas belajar.',
    focusTip:
      'Perhatikan perbedaan empati & compassion pada EMC², strategi komunikasi non-menghakimi dengan orang tua pekerja shift/nelayan, dan kolaborasi sejawat di KKG/MGMP/Kombel.',
    items: [
      {
        code: 'S.1',
        desc: 'Berkomunikasi secara inklusif, empatik, dan efektif dengan memperhatikan keberagaman bahasa, budaya, dan kondisi murid.',
        tags: ['CASEL Social Awareness', 'Relationship Skills', 'Empati Kognitif & Compassion (EMC²)', 'School Well-Being'],
      },
      {
        code: 'S.2',
        desc: 'Berkolaborasi dengan Murid, sesama pendidik, orang tua/wali, industri (DUDIKA), dan masyarakat sekitar.',
        tags: ['Tri Pusat Pendidikan (KHD)', 'Kemitraan Orang Tua/DUDIKA', 'Kearifan Lokal', 'Komunikasi Persuasif Tanpa Menghakimi'],
      },
      {
        code: 'S.3',
        desc: 'Berpartisipasi aktif dalam organisasi profesi dan komunitas belajar untuk pengembangan keprofesian berkelanjutan.',
        tags: ['Kombel & MGMP/KKG', 'Lesson Study (Open Class)', 'Coaching TIRTA & Supervisi Klinis'],
      },
    ],
  },
  {
    id: 'Profesional',
    tabLabel: '4. Profesional',
    heading: '4. Kompetensi Profesional & Bidang Studi',
    summary: 'Penguasaan struktur keilmuan bidang studi, miskonsepsi materi ajar, adaptasi kurikulum, dan inovasi praktik pendidikan.',
    focusTip:
      'Bagian ini memuat materi PCK khusus Prodi masing-masing (50 butir pada simulasi prodi penuh): Teknik Mesin SMK, DKV SMK, PGSD, Matematika, Bahasa Indonesia, atau IPA.',
    items: [
      {
        code: 'PF.1',
        desc: 'Menguasai tujuan pendidikan satuan pendidikan dan pengembangan 8 dimensi profil lulusan secara seimbang.',
        tags: ['8 Dimensi Profil Lulusan', 'Sistem Among (Asah-Asih-Asuh)', 'Pendidikan Nilai & Holistik'],
      },
      {
        code: 'PF.2',
        desc: 'Menguasai disiplin ilmu, konsep inti, dan praksis pembelajaran sesuai Program Studi (PCK Bidang Studi).',
        tags: ['Teknik Mesin SMK', 'PGSD SD', 'Matematika', 'Bahasa Indonesia', 'IPA / IPAS', 'Vokasi Kejuruan'],
      },
      {
        code: 'PF.3',
        desc: 'Memahami tahap perkembangan kognitif/moral serta miskonsepsi khas materi bidang studi.',
        tags: ['Tahap Piaget & Erikson', 'Perkembangan Moral Kohlberg', 'Identifikasi Miskonsepsi & Diagnostik Kesulitan'],
      },
      {
        code: 'PF.4',
        desc: 'Memahami, menyusun alur tujuan (ATP), KKTP, dan mengembangkan kurikulum adaptif sesuai konteks jenjang/industri.',
        tags: ['CP ke TP & ATP', 'KKTP Deskriptif', 'Kurikulum Adaptif & Teaching Factory'],
      },
      {
        code: 'PF.5',
        desc: 'Mengembangkan praktik profesional pembelajaran secara reflektif, empiris (PTK), kreatif, dan inovatif.',
        tags: ['Penelitian Tindakan Kelas (PTK)', 'Siklus Kemmis-McTaggart', 'Inovasi Media & Asesmen Praktik'],
      },
    ],
  },
];
