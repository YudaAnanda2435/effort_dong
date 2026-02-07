import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { products } from "../../Data/ProductData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Data produk contoh (bisa ditambah sesuai HTML asli)

const ProductsSection = ({ onPreview }) => {
  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="products-header pt-2!">
          <div className="product-info-text">
            <h2 className="section-h2-product flex gap-2 flex-col sm:flex-row" data-aos="fade-right" data-aos-delay="100">
              Produk{" "}
              <span className="highlight w-fit text-dark! font-bold italic">
                Effort.Dong
              </span>
            </h2>
            <p data-aos="fade-right" data-aos-delay="200">Bikin Happy Birthday atau happy yang lain? disini aja.</p>
          </div>
          <div className="product-nav h-0">
            <div className="swiper-button-prev product-prev text-seccondary!"></div>
            <div className="swiper-button-next product-next text-seccondary!"></div>
          </div>
        </div>

        <div className="product-swiper-container">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            spaceBetween={24}
            grabCursor={true}
            centeredSlides={true}
            navigation={{
              nextEl: ".product-next",
              prevEl: ".product-prev",
            }}
            pagination={{ clickable: true, el: ".product-pagination" }}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 16 },
              480: { slidesPerView: 2.2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 3.5, spaceBetween: 24 },
            }}
            className="product-swiper"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="product-card">
                  <div
                    className="product-image-container"
                    onClick={() => onPreview(item.video)}
                  >
                    <div className="product-preview-overlay">
                      <i className="bx bx-play-circle"></i>
                      <span>Preview</span>
                    </div>
                    <img src={item.img} alt={item.title} />
                    <span className="product-badge">{item.badge }</span>
                  </div>
                  <div className="product-card-content">
                    <h3>{item.title}</h3>
                    <p>{ item.category}</p>
                    <Link to={`/product/${item.id}`} className="btn btn-custom">
                      Custom
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination product-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
