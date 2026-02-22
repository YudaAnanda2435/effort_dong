import Payment from "../assets/steps-order/bayar.png";
import Select from "../assets/steps-order/pilih.png";
import Bahan from "../assets/steps-order/isi.png";
import Hasil from "../assets/steps-order/hasil.png";

export const stepsData = [
  {
    id: 0,
    img: Select,
    title: "Pilih Produk Desain",
    desc: "Pilih produk atau desain yang kamu inginkan, lalu klik tombol custom.",
  },
  {
    id: 1,
    img: Bahan,
    title: "Klik Pesan & Isi Formulir",
    desc: "Lengkapi formulir dengan bahan foto, video, musik, dan lainnya sesuai arahan.",
  },
  { 
    id: 2,
    img: Hasil,
    title: "Proses & hasil",
    desc: "Tim kami akan memproses sesuai permintaan customer, kemudian menyerahkan hasil final yang siap digunakan.",
  },
  {
    id: 3,
    img: Payment,
    title: "Lakukan Pembayaran",
    desc: "Selesaikan pembayaran setelah web 100% selesai, dengan berbagai metode pembayaran yang terpercaya.",
  },
];
