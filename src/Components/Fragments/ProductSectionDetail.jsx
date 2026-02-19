import React, { useEffect } from "react";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, Link } from "react-router-dom";
import { products } from "../../Data/ProductData"; // Pastikan path ini benar
import Navbar from "../Layouts/Navbar";
import BreadCrumbs from "../Common/BreadCrumbs";

const ProductDetail = ({ onPreview }) => {
  const { id } = useParams();
  // const navigate = useNavigate();

  // --- BARU: STATE UNTUK VIDEO PREVIEW ---
  // const [previewVideo, setPreviewVideo] = useState(null);

  // 1. Cari produk yang SEDANG DILIHAT (Current Product)
  const product = products.find((p) => p.id === Number(id));

  // 2. Logic Produk Terkait (Related Products)
  // Ambil semua produk KECUALI yang sedang dilihat, batasi cuma 3 atau 4
  const relatedProducts = products
    .filter((p) => p.id !== Number(id))
    .slice(0, 3);

  // 3. Scroll ke atas otomatis saat ID berubah (saat klik produk terkait)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 4. Handle Not Found
  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center bg-dark text-white">
        <h2 className="text-2xl font-bold mb-4">Produk tidak ditemukan :(</h2>
        <Link
          to="/"
          className="px-6 py-2 bg-white text-black rounded-sm font-bold"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="product-detail-section pt-32! pb-20 px-4 md:px-8 bg-dark ">
        <div className="container mx-auto max-w-6xl">
          <BreadCrumbs />

          {/* --- BAGIAN ATAS: DETAIL PRODUK (Main Content) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start ">
            {/* KOLOM KIRI: GAMBAR */}
            <div className="product-image-wrapper bg-white p-4 rounded-sm shadow-lg border border-gray-100">
              <div className="relative bg-seccondary p-4! sm:p-8! flex  w-full overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain sm:object-cover hover:scale-105 rounded-sm transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-dark backdrop-blur-sm px-4! py-1! rounded-full text-sm font-semibold text-seccondary shadow-sm">
                  {product.category || "Digital Product"}
                </div>
              </div>
            </div>

            {/* KOLOM KANAN: INFO */}
            <div className="product-info space-y-6!  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex flex-col">
                <h1 className="text-3xl md:text-4xl flex text-start font-bold text-seccondary mb-2!">
                  {product.title}
                </h1>
                <p className=" font-semibold text-seccondary">
                  Rp {product.price?.toLocaleString("id-ID") || "Hubungi Admin"}
                </p>
              </div>

              <div className="prose text-seccondary leading-relaxed">
                <p>
                  {product.description || "Deskripsi produk belum tersedia."}
                </p>
              </div>

              {/* List Fitur */}
              {product.features && (
                <div className="bg-seccondary p-6! rounded-sm border border-gray-200">
                  <h3 className="font-bold text-lg mb-4! text-dark">
                    Apa yang kamu dapat?
                  </h3>
                  <ul className="space-y-3!">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3! text-gray-600 text-sm"
                      >
                        <i className="bx bxs-check-circle text-dark text-lg mt-0.5!"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4!">
                <a
                  target="_blank"
                  href={product.form}
                  className="flex-1 cursor-pointer bg-seccondary hover:bg-dark border border-seccondary hover:text-seccondary! hover:border hover:border-seccondary text-dark! py-3! w-full rounded-sm font-semibold transition-all shadow-lg flex justify-center items-center gap-2!"
                >
                  Pesan Sekarang <i className="bx bxl-whatsapp text-xl"></i>
                </a>
                <a
                  href="https://wa.me/6285559758465"
                  target="_blank"
                  className=" flex-1 bg-seccondary hover:bg-dark border border-seccondary hover:text-seccondary! hover:border hover:border-seccondary text-dark! py-3! w-full rounded-sm font-semibold transition-all shadow-lg flex justify-center items-center gap-2!"
                >
                  Tanya Dulu
                  <FontAwesomeIcon icon={faHeadset} />
                </a>
              </div>
              <a
                href={product.prototype}
                className=" flex-1 border-2 cursor-pointer flex flex-row items-center gap-2 justify-center border-gray-300 hover:border-gray-500 text-seccondary py-3! w-full rounded-sm font-semibold transition-all"
              >
                Lihat Prototype
                <FontAwesomeIcon icon={faMicrochip} />
              </a>

              <p className="text-xs text-center text-gray-400 mt-4">
                *Proses pengerjaan dimulai setelah data lengkap diterima.
              </p>
            </div>
          </div>

          {/* --- BAGIAN BAWAH: PRODUK TERKAIT (Related Products) --- */}
          {relatedProducts.length > 0 && (
            <div className="related-products mt-10!  pt-10!">
              <h3 className="text-2xl font-bold text-seccondary! mb-8!">
                Lihat Produk Lainnya
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedProducts.map((item) => (
                  <Link
                    to={`/product/${item.id}`}
                    key={item.id}
                    className="group block"
                  >
                    <div className="product-card">
                      {/* Image Thumbnail */}
                      <div
                        className="product-image-container"
                        onClick={() => onPreview(item.video)}
                      >
                        <div className="product-preview-overlay">
                          <i className="bx bx-play-circle"></i>
                          <span>Preview</span>
                        </div>
                        <img src={item.img} alt={item.title} />
                        <span className="product-badge">{item.badge}</span>
                      </div>
                      <div className="product-card-content">
                        <h3>{item.title}</h3>
                        <p>{item.category}</p>
                        <Link
                          to={`/product/${item.id}`}
                          className="btn btn-custom"
                        >
                          Custom
                        </Link>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
