// src/Data/blogData.js

// Import gambar (Pastikan kamu punya file gambar dummy atau asli untuk ini)
// Jika belum ada gambar 4-9, kamu bisa pakai gambar yang sama dulu sementara
import img1 from "../assets/blog/cek.jpg";
import img2 from "../assets/blog/cekk2.jpg";
import img3 from "../assets/blog/cekk3.jpg";
// Contoh import tambahan (Ganti dengan file aslimu nanti)
import img4 from "../assets/blog/romance1.jpg";
import img5 from "../assets/blog/romance2.jpg";
import img6 from "../assets/blog/romance3.jpg";
import img7 from "../assets/blog/romance4.jpg";
import img8 from "../assets/blog/romance5.jpg";
import img9 from "../assets/blog/romance6.jpg";

export const blogs = [
  // --- ARTIKEL 1-3 (YANG SUDAH ADA) ---
  {
    id: 1,
    image: img1,
    category: "Tips Hubungan",
    title:
      "5 Alasan Kenapa Website Ucapan Lebih Bikin Baper Daripada Kado Mahal",
    date: "10 Feb 2026",
    desc: "Bunga bisa layu, coklat bisa habis. Tapi website ucapan akan abadi selamanya di internet sebagai bukti cinta...",
    link: "#",
    content: [
      {
        type: "paragraph",
        text: "Pernah gak sih kamu bingung mau kasih kado apa buat doi? Boneka udah numpuk di lemari, baju takut gak muat, bunga seminggu juga udah layu dan berakhir di tempat sampah. Rasanya pengen kasih sesuatu yang beda, yang 'kena' banget di hati, tapi bingung apa.",
      },
      {
        type: "paragraph",
        text: "Nah, di era digital ini, memberikan website ucapan (Web Invitation/Greeting) jadi solusi paling aesthetic dan thoughtful banget. Bukan sekadar ikut tren, tapi ada alasan psikologis kenapa kado jenis ini lebih bikin pasangan kamu meleleh.",
      },
      {
        type: "heading",
        text: "1. Abadi Selamanya (Digital Footprint)",
      },
      {
        type: "paragraph",
        text: "Beda sama kue yang habis dimakan, website itu abadi. Selama internet masih ada, kenangan kalian bakal tersimpan rapi di sana. Bayangin 5 tahun lagi kalian buka link yang sama, rasanya kayak naik mesin waktu. Nostalgianya dapet banget.",
      },
      {
        type: "heading",
        text: "2. Personalisasi Tanpa Batas",
      },
      {
        type: "paragraph",
        text: "Di website, kamu adalah sutradaranya. Kamu bisa masukin lagu 'kalian banget' yang otomatis keputer pas web dibuka (autoplay music). Kamu bisa pajang foto aib (tapi lucu), video kompilasi TikTok kalian, sampai surat cinta yang panjangnya 1000 kata tanpa takut kertasnya habis.",
      },
      {
        type: "quote",
        text: "Effort terbaik adalah memberikan sesuatu yang tidak bisa dibeli dengan uang di toko manapun: Waktu, Kenangan, dan Perhatian.",
      },
      {
        type: "heading",
        text: "3. Simbol 'Effort' yang Valid",
      },
      {
        type: "paragraph",
        text: "Semua orang bisa beli barang mahal kalau punya uang. Tapi gak semua orang mau meluangkan waktu buat nyusun foto, milih kata-kata, dan request desain website. Di mata pasanganmu, kado ini teriak: 'Aku meluangkan waktu buat bikin ini spesial untukmu'. Dan percayalah, effort itu seksi.",
      },
    ],
  },
  {
    id: 2,
    image: img2, // Pastikan variabel image sesuai import kamu
    category: "Ide Kado",
    title:
      "Budget Pelajar? Ini 5 Kado Anniversary di Bawah 50k yang Terlihat Mewah",
    date: "12 Feb 2026",
    desc: "Siapa bilang romantis harus mahal? Cek ide kado kreatif yang ramah di kantong tapi bikin dia merasa jadi orang paling spesial...",
    link: "#",
    content: [
      {
        type: "paragraph",
        text: "Tanggal tua, dompet tipis, tapi bentar lagi Anniversary? Tenang, jangan panik. Romantis itu gak diukur dari berapa nol di struk belanjaan kamu. Justru, keterbatasan budget seringkali melahirkan ide paling kreatif dan tulus.",
      },
      {
        type: "paragraph",
        text: "Berikut adalah ide kado low-budget tapi high-impact yang bisa kamu siapin sekarang juga:",
      },
      {
        type: "heading",
        text: "1. Playlist Spotify Terkurasi (Mixtape Modern)",
      },
      {
        type: "paragraph",
        text: "Zaman dulu orang kasih kaset pita (mixtape), sekarang kamu bisa bikin Playlist Spotify. Tapi jangan asal masukin lagu! Pilih lagu yang liriknya mewakili perasaanmu. Urutkan judul lagunya supaya kalau dibaca dari atas ke bawah membentuk kalimat rahasia (Acrostic). Modal: Rp 0,- (Cuma kuota).",
      },
      {
        type: "heading",
        text: "2. Website Ucapan (The Ultimate Budget Hack)",
      },
      {
        type: "paragraph",
        text: "Serius, ini cheat code-nya. Bikin website ucapan di Y-Cardify itu harganya sangat terjangkau (mulai dari harga seblak!). Tapi impact-nya? Kelihatan kayak kado jutaan. Dia bakal ngerasa kamu nyewa programmer profesional buat bikin ini. Padahal cuma modal template premium dari kita.",
      },
      {
        type: "heading",
        text: "3. 'Open When' Letters (Surat Masa Depan)",
      },
      {
        type: "paragraph",
        text: "Modal amplop coklat murah dan kertas HVS. Tulis instruksi di depannya: 'Buka saat kamu sedih', 'Buka saat kangen aku', atau 'Buka saat kita lagi berantem'. Isinya tulisan tanganmu yang tulus, permen, atau foto receh. Ini kado yang nggak habis sekali pake, tapi nemenin dia berbulan-bulan.",
      },
      {
        type: "heading",
        text: "4. Masakin Bekal Cinta (Personal Chef)",
      },
      {
        type: "paragraph",
        text: "Gak perlu fancy dinner di resto mahal. Nasi goreng buatanmu (walau keasinan dikit) nilainya jauh lebih tinggi daripada makanan restoran. Hias dikit pake saos bentuk love atau kasih sticky notes di kotak bekalnya. 'Dimasak dengan penuh cinta dan keringat'.",
      },
      {
        type: "heading",
        text: "5. Love Coupons (Voucher Bucin)",
      },
      {
        type: "paragraph",
        text: "Bikin voucher-voucheran lucu dari kertas karton. Tulis: 'Voucher Pijat Pundak 15 Menit', 'Voucher Bebas Ngambek Seharian', atau 'Voucher Minta Maaf Duluan'. Ini kado yang interaktif, lucu, dan modalnya cuma kertas sama spidol warna-warni.",
      },
      {
        type: "quote",
        text: "Jangan minder kalau cuma bisa kasih kado murah. Minderlah kalau kamu punya uang, tapi gak punya waktu buat bikin dia bahagia.",
      },
    ],
  },
  {
    id: 3,
    image: img3,
    category: "LDR Life",
    title:
      "Cara Merayakan Ulang Tahun Pacar LDR Biar Terasa Dekat (Anti Garing)",
    date: "14 Feb 2026",
    desc: "Jarak bukan halangan. Manfaatkan teknologi biar dia merasa kamu ada di sampingnya tepat di jam 12 malam...",
    link: "#",
    content: [
      {
        type: "paragraph",
        text: "Pejuang LDR (Long Distance Relationship) pasti tau banget rasanya 'sesak' pas hari ulang tahun pasangan. Pengen meluk tapi kepisah pulau, pengen kasih kue tapi takut hancur di ekspedisi. Ujung-ujungnya cuma bisa video call sambil tiup lilin virtual.",
      },
      {
        type: "paragraph",
        text: "Eits, jangan sedih dulu. Jarak fisik gak bisa membatasi kedekatan emosional kalau kamu tau caranya. Ini tips ngerayain ultah LDR biar tetep seru:",
      },
      {
        type: "heading",
        text: "1. Movie Date Sync",
      },
      {
        type: "paragraph",
        text: "Pake aplikasi kayak Teleparty atau Rave. Kalian bisa nonton film bareng secara real-time. Siapin popcorn masing-masing, matiin lampu kamar, dan rasain sensasi nonton bioskop bareng walau layar memisahkan.",
      },
      {
        type: "heading",
        text: "2. The Midnight Digital Surprise",
      },
      {
        type: "paragraph",
        text: "Tepat jam 00.00, jangan cuma chat 'HBD ya'. Itu basi! Kirim link website khusus yang udah kamu siapin. Isinya video ucapan dari temen-temennya yang udah kamu kumpulin diem-diem.",
      },
      {
        type: "quote",
        text: "Jarak itu cuma ujian buat ngeliat seberapa jauh cinta bisa berkelana. Kalau effortmu sampai, hatinya pasti tersentuh.",
      },
    ],
  },

  // --- ARTIKEL TAMBAHAN (4-9) ---

  {
    id: 4,
    image: img4,
    category: "Relationship Advice",
    title:
      "Lagi Berantem? Ini Cara Minta Maaf yang Elegan Biar Gak Makin Runcing",
    date: "16 Feb 2026",
    desc: "Gengsi minta maaf duluan? Coba cara ini biar ego turun dan hubungan kalian kembali adem ayem...",
    link: "#",
    content: [
      {
        type: "paragraph",
        text: "Namanya juga hubungan, pasti ada bumbu-bumbu berantemnya. Tapi yang bahaya bukan berantemnya, melainkan gimana cara kita menyelesaikannya. Seringkali kata 'maaf' susah banget keluar karena tertahan ego setinggi langit.",
      },
      {
        type: "heading",
        text: "Kenapa Minta Maaf Lewat Chat Sering Gagal?",
      },
      {
        type: "paragraph",
        text: "Teks itu gak punya nada. Chat 'Maaf ya' bisa dibaca dengan nada tulus, tapi bisa juga dibaca dengan nada ketus sama pasanganmu yang lagi emosi. Salah baca nada, perang dunia ketiga bisa meletus.",
      },
      {
        type: "heading",
        text: "Gunakan 'Surat Digital' Sebagai Perantara",
      },
      {
        type: "paragraph",
        text: "Kalau lidah kelu buat ngomong langsung, coba tuliskan perasaanmu lewat website sederhana. Tulis semua penyesalanmu, janji untuk berubah, dan pasang foto kenangan manis kalian pas lagi akur.",
      },
      {
        type: "paragraph",
        text: "Kenapa ini ampuh? Karena saat dia membuka link dan membaca tulisanmu di website yang aesthetic dengan lagu sedih/romantis, hatinya akan melunak. Dia melihat 'effort' kamu untuk memperbaiki keadaan, bukan cuma sekadar chat singkat.",
      },
      {
        type: "quote",
        text: "Minta maaf bukan berarti kamu kalah. Itu artinya kamu lebih menghargai hubungan daripada ego sendiri.",
      },
    ],
  },
  {
    id: 5,
    image: img5,
    category: "Love Language",
    title:
      "Buat Kamu yang Love Language-nya 'Words of Affirmation', Wajib Baca Ini",
    date: "18 Feb 2026",
    desc: "Kata-kata itu validasi. Temukan cara terbaik untuk memenuhi tangki cinta pasanganmu yang butuh pujian...",
    link: "#",
    content: [
      {
        type: "paragraph",
        text: "Setiap orang punya cara beda buat merasa dicintai. Kalau pasanganmu tipe 'Words of Affirmation', dia bakal luluh lantak sama pujian, ucapan semangat, dan kata-kata manis yang tulus.",
      },
      {
        type: "heading",
        text: "Masalahnya: Chat Bisa Tenggelam",
      },
      {
        type: "paragraph",
        text: "Kamu mungkin sering chat 'Aku sayang kamu', tapi chat itu bakal ketumpuk sama obrolan 'Nanti makan apa?' atau 'Udah nyampe belum?'. Momen romantisnya jadi lewat gitu aja.",
      },
      {
        type: "heading",
        text: "Solusi: Museum Kata-Kata Digital",
      },
      {
        type: "paragraph",
        text: "Bayangin kamu buatin dia satu halaman website yang isinya cuma: 'Hal-hal yang aku suka dari kamu'. List 50 atau 100 hal kecil yang kamu perhatikan dari dia. Mulai dari cara dia ketawa, sampai cara dia minum kopi.",
      },
      {
        type: "paragraph",
        text: "Bagi pemilik Words of Affirmation, website ini adalah 'Kitab Suci' yang bakal dia baca ulang setiap kali dia merasa insecure atau sedih. Itu adalah validasi permanen bahwa dia dicintai.",
      },
      {
        type: "quote",
        text: "Satu kalimat tulus bisa mengubah hari yang buruk menjadi hari terbaik dalam hidup seseorang.",
      },
    ],
  },
  {
    id: 6,
    image: img6,
    category: "Inspirasi",
    title:
      "Anniversary Pertama Bingung Mau Ngapain? Coba Ide 'Time Capsule' Ini",
    date: "20 Feb 2026",
    desc: "Satu tahun pertama adalah fase krusial. Dokumentasikan perjalanan kalian agar tidak terlupakan begitu saja...",
    link: "#",
    content: [
      {
        type: "paragraph",
        text: "Happy 1st Anniversary! Tahun pertama biasanya penuh dengan 'yang pertama'. Nonton bareng pertama, berantem pertama, liburan pertama. Sayang banget kalau momen-momen emas ini cuma ngendap di galeri HP.",
      },
      {
        type: "heading",
        text: "Konsep Digital Time Capsule",
      },
      {
        type: "paragraph",
        text: "Buatlah sebuah website yang berfungsi sebagai kapsul waktu. Urutkan foto dari bulan ke-1 sampai bulan ke-12. Ceritakan apa yang kalian rasakan di setiap fotonya.",
      },
      {
        type: "paragraph",
        text: "Di bagian akhir website, tambahkan fitur 'Harapan untuk Tahun Depan'. Tulis mimpi-mimpi kalian berdua. Tahun depan, buka lagi website ini dan lihat mana aja yang udah terwujud.",
      },
      {
        type: "paragraph",
        text: "Ini bukan cuma kado, tapi dokumentasi sejarah cinta kalian. Anak cucu kalian nanti bakal kagum liat betapa aesthetic-nya kisah cinta kakek neneknya dulu.",
      },
      {
        type: "quote",
        text: "Kita tidak bisa menghentikan waktu, tapi kita bisa mengabadikan momennya.",
      },
    ],
  },
  {
    id: 7,
    image: img7, // Pastikan variabel image sesuai import kamu
    category: "Green Flag",
    title:
      "5 Tanda Cowok Kamu 'Green Flag' dan Layak Dipertahankan Mati-matian",
    date: "22 Feb 2026",
    desc: "Jangan sampai lepas! Cek apakah pasanganmu punya ciri-ciri langka yang bikin hubungan sehat dan awet...",
    link: "#",
    content: [
      {
        type: "paragraph",
        text: "Di tengah gempuran cowok 'Red Flag' yang manipulatif dan ghosting, nemu cowok 'Green Flag' itu kayak nemu harta karun. Tapi kadang kita gak sadar kalau dia itu berharga banget.",
      },
      {
        type: "heading",
        text: "1. Mengingat Hal Kecil (Micro-Attention)",
      },
      {
        type: "paragraph",
        text: "Dia inget kamu gak suka daun bawang di martabak. Dia inget nama kucingmu. Dia inget tanggal jadian tanpa perlu diingetin notif Google Calendar. Perhatian pada detail kecil adalah tanda cinta yang besar.",
      },
      {
        type: "heading",
        text: "2. Effort yang Konsisten",
      },
      {
        type: "paragraph",
        text: "Dia gak cuma manis di awal (love bombing), tapi konsisten baiknya. Salah satu ciri utamanya: Dia mau repot. Dia mau bikinin kamu sesuatu yang personal, kayak playlist, surat tulisan tangan, atau website ucapan ulang tahun.",
      },
      {
        type: "heading",
        text: "3. Komunikasi Terbuka",
      },
      {
        type: "paragraph",
        text: "Kalau ada masalah, dia ngajak ngobrol buat cari solusi, bukan ngilang (silent treatment). Dia mendengarkan keluhanmu tanpa menghakimi dan gak kabur pas suasana lagi gak enak.",
      },
      {
        type: "heading",
        text: "4. Support Mimpi Kamu (Bukan Pengekang)",
      },
      {
        type: "paragraph",
        text: "Dia gak insecure kalau kamu sukses atau sibuk sama hobi kamu. Justru dia jadi supporter nomor satu. Dia ngasih ruang buat kamu berkembang ('Me Time'), bukan malah ngekang dengan alasan cemburu yang gak jelas.",
      },
      {
        type: "heading",
        text: "5. Berani Mengakui Kesalahan",
      },
      {
        type: "paragraph",
        text: "Ini yang paling langka. Cowok Green Flag itu gak gengsi bilang 'Maaf' kalau dia emang salah. Dia bertanggung jawab atas perbuatannya dan gak playing victim atau memutarbalikkan fakta biar kamu yang ngerasa bersalah (gaslighting).",
      },
      {
        type: "quote",
        text: "Cari pasangan yang menenangkan, bukan yang menyenangkan tapi sementara. Green flag adalah tentang kenyamanan jangka panjang.",
      },
    ],
  },
  {
    id: 8,
    image: img8,
    category: "Fun Ideas",
    title:
      "Jangan Hapus Foto Aib! Ini Alasan Kenapa Momen 'Candid' Itu Mahal Harganya",
    date: "24 Feb 2026",
    desc: "Instagram isinya pencitraan, tapi galeri isinya kenyataan. Kenapa foto jelek justru bikin hubungan makin lengket?",
    link: "#",
    content: [
      {
        type: "paragraph",
        text: "Coba cek galeri HP kamu. Berapa banyak foto pasanganmu yang lagi mangap tidur, double chin, atau muka konyol pas lagi makan? Pasti banyak kan? Dan nalurimu pasti pengen hapus karena 'gak aesthetic'.",
      },
      {
        type: "heading",
        text: "Stop! Jangan Dihapus!",
      },
      {
        type: "paragraph",
        text: "Foto-foto aesthetic di Instagram itu untuk konsumsi publik. Tapi foto aib dan candid itu untuk konsumsi hati. Itu adalah bukti bahwa kalian nyaman satu sama lain. Kalian bisa jadi diri sendiri tanpa jaim.",
      },
      {
        type: "heading",
        text: "Ide Kado: The 'Real Us' Website",
      },
      {
        type: "paragraph",
        text: "Coba bikin website di Y-Cardify, tapi isinya jangan foto bagus doang. Selipin satu section khusus judulnya 'Behind The Scenes' atau 'Realita Kita'. Isinya foto-foto konyol kalian.",
      },
      {
        type: "paragraph",
        text: "Percayalah, pas dia buka website itu, dia bakal ketawa ngakak sambil terharu. 'Kok kamu nyimpen foto ginian sih?'. Itu momen emas yang gak bisa dibeli.",
      },
      {
        type: "quote",
        text: "Cinta itu ketika kamu melihat sisi terjelek seseorang, tapi tetap merasa dialah orang terindah di duniamu.",
      },
    ],
  },
  {
    id: 9,
    image: img9, // Pastikan variabel image sesuai import kamu
    category: "LDR Life",
    title: "Bosen Video Call Doang? 7 Ide Virtual Date yang Gak Bikin Ngantuk",
    date: "26 Feb 2026",
    desc: "Hubungan jarak jauh butuh variasi biar gak jenuh. Coba aktivitas seru ini biar malam minggumu tetap asik...",
    link: "#",
    content: [
      {
        type: "paragraph",
        text: "Video call: 'Lagi apa?' 'Lagi makan'. Gitu aja terus sampe sukses. Bosen kan? Pasangan LDR sering putus bukan karena jarak, tapi karena bosan dengan rutinitas komunikasi yang monoton.",
      },
      {
        type: "heading",
        text: "1. Mabar Game Santai",
      },
      {
        type: "paragraph",
        text: "Main game kayak Stumble Guys, Ludo King, atau Roblox bareng. Kompetisi kecil bisa memicu adrenalin dan tawa yang hilang di obrolan biasa. Kalah harus traktir GoFood ya!",
      },
      {
        type: "heading",
        text: "2. Unboxing Kado Digital Bareng",
      },
      {
        type: "paragraph",
        text: "Ini seru banget. Kamu kirim link website ucapan/kado digital ke dia. Terus minta dia Share Screen pas lagi buka link-nya. Kamu bisa liat reaksi wajahnya secara langsung pas dia baca suratmu atau liat foto-foto kalian muncul di layar.",
      },
      {
        type: "heading",
        text: "3. Virtual Museum Tour",
      },
      {
        type: "paragraph",
        text: "Banyak museum dunia sekarang punya fitur tur virtual 360 derajat (seperti Louvre atau Museum Nasional). Kalian bisa jalan-jalan ke Paris atau Jakarta bareng lewat layar laptop sambil diskusi soal lukisan (sok tau dikit gak apa-apa).",
      },
      {
        type: "heading",
        text: "4. Nonton Film Bareng (Watch Party)",
      },
      {
        type: "paragraph",
        text: "Pake fitur 'Watch Party' di streaming platform atau aplikasi pihak ketiga kayak Teleparty. Kalian bisa nonton film horor bareng dan kaget barengan. Jangan lupa siapin popcorn masing-masing biar vibes bioskopnya dapet.",
      },
      {
        type: "heading",
        text: "5. Masak Bareng (Cooking Challenge)",
      },
      {
        type: "paragraph",
        text: "Tentukan satu menu simpel, misal mie instan kreasi atau pancake. Pasang HP di dapur, terus masak barengan langkah demi langkah. Nanti pas udah jadi, makan bareng di depan kamera. Rasanya kayak lagi dinner date beneran.",
      },
      {
        type: "heading",
        text: "6. PowerPoint Night",
      },
      {
        type: "paragraph",
        text: "Ini lagi tren banget di TikTok. Bikin presentasi lucu-lucuan. Topiknya bebas, misal: 'Rating Mantan-Mantan Aku', 'Kenapa Aku Cocok Jadi Presiden', atau 'Teori Konspirasi Kartun Spongebob'. Dijamin ngakak semaleman.",
      },
      {
        type: "heading",
        text: "7. Deep Talk via Kuesioner",
      },
      {
        type: "paragraph",
        text: "Cari daftar pertanyaan '36 Questions to Fall in Love' di Google. Jawab gantian. Pertanyaannya deep banget dan bisa bikin kalian makin kenal sisi lain pasangan yang selama ini gak pernah kebahas.",
      },
      {
        type: "quote",
        text: "Kreativitas adalah kunci nafas LDR. Jangan biarkan jarak membunuh keseruan hubungan kalian.",
      },
    ],
  },
];
