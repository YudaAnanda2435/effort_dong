import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  // useRef untuk menyimpan history path sebelumnya
  const lastPathname = useRef(pathname);

  useEffect(() => {
    // Cek apakah kita berada di halaman yang sama atau pindah halaman
    const isSamePage = lastPathname.current === pathname;
    lastPathname.current = pathname; // Update history dengan path saat ini

    if (hash) {
      // JIKA ADA HASH:
      // Kalau di halaman yang sama, delay 0. Kalau dari halaman lain, delay 400ms.
      const delay = isSamePage ? 0 : 400;

      const timer = setTimeout(() => {
        if (window.lenis) {
          window.lenis.scrollTo(hash, { offset: -80 });
        } else {
          const element = document.getElementById(hash.replace("#", ""));
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, delay);

      return () => clearTimeout(timer);
    } else {
      // JIKA TIDAK ADA HASH (Reset ke paling atas)
      const timer = setTimeout(() => {
        if (window.lenis) {
          window.lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToAnchor;
