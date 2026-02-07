import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Jika ada hash (misal #products) di URL
    if (hash) {
      // Tunggu sebentar (0ms) agar halaman selesai render dulu
      setTimeout(() => {
        // Cari elemen berdasarkan ID (hilangkan tanda #)
        const element = document.getElementById(hash.replace("#", ""));

        if (element) {
          // Scroll halus ke elemen tersebut
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    } else {
      // Opsi: Jika tidak ada hash, scroll ke paling atas (default behavior)
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Jalankan setiap kali URL berubah

  return null; // Component ini tidak merender visual apa-apa
};

export default ScrollToAnchor;
