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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.scrollTo(0, { immediate: true });

    // Cleanup
    return () => {
      lenis.destroy();
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
