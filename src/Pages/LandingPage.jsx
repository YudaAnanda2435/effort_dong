import { useState } from "react";
import Navbar from "../Components/Layouts/Navbar";
import HeroSection from "../Components/Fragments/HeroSection";
import ServicesSection from "../Components/Fragments/ServicesSection";
import ProductsSection from "../Components/Fragments/ProductsSection";
// import BannerSection from "../Components/Fragments/BannerSection";
import OrderStepsSection from "../Components/Fragments/OrderStepsSection";
import TestimonialsSection from "../Components/Fragments/TestimonialsSection";
import ConnectSection from "../Components/Fragments/ConnectSection";
// import Footer from "../Components/Fragments/Footer";
import VideoModal from "../Components/Fragments/VideoModal";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");

  const handleOpenPreview = (src) => {
    setCurrentVideoSrc(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentVideoSrc("");
  };

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductsSection onPreview={handleOpenPreview} />
        {/* <BannerSection /> */}
        <OrderStepsSection />
        <TestimonialsSection />
        <ConnectSection />
      </main>

      {/* Modal diletakkan di sini agar global */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc={currentVideoSrc}
      />
    </>
  );
};

export default LandingPage;
