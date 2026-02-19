import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { stepsData } from "../../Data/StepsData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const swiperModules = [Pagination, Autoplay, EffectFade];
const autoplaySettings = {
  delay: 5500,
  disableOnInteraction: false, // Agar tetap jalan walau diklik
  pauseOnMouseEnter: false, // Pastikan tidak berhenti saat mouse di atasnya
};

const OrderStepsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleStepClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <section className="order-steps section" id="order-steps">
      <div className="container order-container">
        <div className="section-title">
          <h2
            className="text-seccondary! w-fit flex items-center text-start gap-2 sm:gap-4"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="700"
            data-aos-offset="0"
          >
            Order sekarang, jadinya{" "}
            <span className="highlight text-dark! font-semibold! italic">
              hari ini!
            </span>
          </h2>
          <p
            className="text-seccondary! text-start"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="700"
            data-aos-offset="0"
          >
            Hanya butuh 4 langkah mudah untuk membuat kejutan digital.
          </p>
        </div>

        <div className="steps-container-new">
          {/* Bagian Kiri: Visual */}
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="800"
            data-aos-offset="0"
            className="steps-display overflow-hidden justify-center flex"
          >
            <Swiper
              // Gunakan variabel constant dari luar
              modules={swiperModules}
              autoplay={autoplaySettings}
              loop={true}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              pagination={{ clickable: true, el: ".steps-display-pagination" }}
              // Event handler
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="steps-display-swiper"
            >
              {stepsData.map((step) => (
                <SwiperSlide key={step.id} className="display-slide ">
                  <img src={step.img} alt={step.title} />
                  <h3 className="text-dark! text-[20px]! md:text-[32px]! mt-2! mb-4!">{step.title}</h3>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination steps-display-pagination w-full left-2/4!"></div>
          </div>

          {/* Bagian Kanan: List */}
          <div className="steps-list">
            {stepsData.map((step, index) => (
              <div
                key={step.id}
                className={`step-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleStepClick(index)}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="800"
                  data-aos-offset="0"
                  className="step-item-header"
                >
                  <span>0{index + 1}</span>
                  <h4>{step.title}</h4>
                </div>
                <p
                 className="step-desc"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="800"
                  data-aos-offset="0"
                >
                  {step.desc}
                </p>
                <div className="progress-bar">
                  <div className="progress-bar-inner"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderStepsSection;
