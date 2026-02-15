import Cake from "../../assets/bday.png";
import Love from "../../assets/love.png";
import Duck from "../../assets/duck.png";
import Flower from "../../assets/flower.png";
import Lips from "../../assets/bibir.png";
import LovePanah from "../../assets/lovePanah.png";
import Music from "../../assets/music.png";
import TwoFlower from "../../assets/twoflower.png";
import Bumb from "../../assets/bumb.png";
import Dadu from "../../assets/dadu2.png";

const HeroSection = () => {
  return (
    <section className="hero relative!" id="hero">
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute top-120 md:top-80 left-10 md:left-20 z-2 w-10 md:w-20 -rotate-12"
        src={Cake}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute top-20 md:top-30 z-2 w-10 md:w-16 -rotate-12"
        src={Love}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute bottom-10 md:bottom-20 left-10 md:left-2/5  z-2 w-16 md:w-22 -rotate-12"
        src={Bumb}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute top-18 md:top-40 left-70 md:left-72  z-2 w-10 md:w-16 -rotate-12"
        src={Music}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute top-22.5 md:top-40 left-5 md:left-32  z-2 w-14 md:w-18 -rotate-12"
        src={Dadu}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute top-15 md:top-20 right-290px md:right-52  z-2 w-20 md:w-28 -rotate-12"
        src={TwoFlower}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute bottom-66 md:bottom-32 right-70 md:right-56  z-2 w-12 md:w-16 -rotate-12"
        src={LovePanah}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute top-30 md:top-60 right-1 md:right-40 z-2 w-16.5 md:w-24 rotate-6"
        src={Duck}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute bottom-10.5 md:bottom-20 left-70 md:left-70 z-2 w-16.5 md:w-24 rotate-6"
        src={Lips}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute bottom-30 right-1/3 z-2 w-16.5 md:w-24 rotate-6"
        src={Flower}
        alt=""
      />
      <div className="hero-background-animation"></div>
      <div className="hero-blur-container">
        <div className="hero-content flex flex-col items-center">
          <h1
            className="hero-title"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="1200"
            data-aos-offset="0"
          >
            for your{" "}
            <span className="highlight-hero text-dark! italic text-[28px] md:text-[56px]">
              lover?
            </span>
          </h1>
          <p
            className="hero-slogan"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="1200"
            data-aos-offset="0"
          >
            Ulang tahun? Anniversary? bikinin dia website ucapan! dia bakalan
            baper siii, coba aja kalo ga percaya.
          </p>
          {/* Tombol Custom */}
          <a
            href="#products"
            className="max-w-70.5! flex justify-center mx-auto items-center btn btn-custom cursor-pointer hover:scale-105 transition-trasform duration-300  flex-row! bg-seccondary!  md:max-w-70.5! text-dark! group"
          >
            <div
              className="flex flex-row text-dark! items-center"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-offset="0"
            >
              <strong className="text-dark! pr-2! leading-5 tracking-normal!">
                Mulai Buat Sekarang
              </strong>
              <svg
                className="w-5.5 pt-1! group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        {/* Elemen Dekorasi */}
        <div className="hero-3d-elements">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className={`dot dot-${i}`}></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
