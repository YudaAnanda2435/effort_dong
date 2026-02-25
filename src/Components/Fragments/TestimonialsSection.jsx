import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Testi1 from "../../assets/testimoni/one.png";
import Testi2 from "../../assets/testimoni/three.png";
import Testi3 from "../../assets/testimoni/two.png";
import Testi4 from "../../assets/testimoni/for.png";
import Testi5 from "../../assets/testimoni/five.png";
import Testi6 from "../../assets/testimoni/six.png";
import Testi7 from "../../assets/testimoni/seven.png";
import Testi8 from "../../assets/testimoni/eight.png";
import Testi9 from "../../assets/testimoni/nine.png";

const testimonials = [
  Testi1,
  Testi2,
  Testi3,
  Testi4,
  Testi5,
  Testi6,
  Testi7,
  Testi8,
  Testi9,
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials section" id="testimoni">
      <div className="container">
        <div className="section-title flex flex-row justify-between items-center">
          <div className="flex flex-col text-start">
            <h2
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="700"
              data-aos-offset="0"
              className="text-seccondary"
            >
              Apa Kata Pelanggan?
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="800"
              data-aos-offset="0"
              className="text-seccondary!"
            >
              Testimoni asli langsung dari percakapan kami dengan klien.
            </p>
          </div>
          <div className="product-nav w-full max-w-32 hidden! sm:flex!  h-0  z-20">
            <div className="swiper-button-prev testimonial-prev  border border-seccondary "></div>
            <div className="swiper-button-next testimonial-next"></div>
          </div>
        </div>

        <div className="testimonial-swiper-container ">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            spaceBetween={24}
            grabCursor={true}
            centeredSlides={true}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            pagination={{ clickable: true, el: ".testimonial-pagination" }}
            slidesPerView={"auto"}
            breakpoints={{
              320: { slidesPerView: 1.3, spaceBetween: 16 },
              400: { slidesPerView: 1.8, spaceBetween: 18 },
              600: { slidesPerView: 2.5, spaceBetween: 24 },
              768: { slidesPerView: 3.5, spaceBetween: 24 },
              1024: { slidesPerView: 4.5, spaceBetween: 16 },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((src, index) => (
              <SwiperSlide className="flex justify-center!  py-3!" key={index}>
                <div className="testimonial-card w-full max-w-[270px]">
                  <img loading="lazy" src={src} alt={`Testimoni ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination testimonial-pagination left-2/4! pt-3!"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
