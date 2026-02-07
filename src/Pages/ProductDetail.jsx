import ProductDetail from "../Components/Fragments/ProductSectionDetail";
import VideoModal from "../Components/Fragments/VideoModal";
import { useState } from "react";

const DetailProduct = () => {
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
      <ProductDetail onPreview={handleOpenPreview} />
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc={currentVideoSrc}
      />
    </>
  );
};
export default DetailProduct;
