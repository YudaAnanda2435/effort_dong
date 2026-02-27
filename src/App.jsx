import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./Pages/LandingPage";
import ProductDetail from "./Pages/ProductDetail";
import BlogDetailPage from "./Pages/BlogDetailPage";
import ScrollToAnchor from "./Components/Common/ScrollToAnchor";
import Navbar from "./Components/Layouts/Navbar";
import Footer from "./Components/Fragments/Footer";
import FreeGenerator from "./Pages/FreeGenerator";
import FreeView from "./Pages/FreeView";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-out",
    });
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // --- TAMBAHAN KUNCI: Ekspos Lenis ke window ---
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Hapus lenis.scrollTo di sini karena akan diurus oleh ScrollToAnchor

    // Cleanup
    return () => {
      lenis.destroy();
      window.lenis = null; // Bersihkan juga saat unmount
    };
  }, []);

  return (
    <>
      <ScrollToAnchor />
      <Navbar />
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/buat-gratis" element={<FreeGenerator />} />
        <Route path="/free-view" element={<FreeView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
