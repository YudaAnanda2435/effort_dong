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
        className="absolute top-80 left-40 z-2 w-20 -rotate-12"
        src={Cake}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute top-30   z-2 w-16 -rotate-12"
        src={Love}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute bottom-20 left-2/5  z-2 w-22 -rotate-12"
        src={Bumb}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute top-40 left-72  z-2 w-16 -rotate-12"
        src={Music}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute top-40 left-32  z-2 w-18 -rotate-12"
        src={Dadu}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute top-20 right-52  z-2 w-28 -rotate-12"
        src={TwoFlower}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute bottom-32 right-56  z-2 w-16 -rotate-12"
        src={LovePanah}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute top-60 right-40 z-2 w-24 rotate-6"
        src={Duck}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute bottom-20 left-70 z-2 w-24 rotate-6"
        src={Lips}
        alt=""
      />
      <img
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-offset="0"
        className="absolute bottom-30 right-1/3 z-2 w-24 rotate-6"
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
            for your <span className="highlight text-dark! italic">lover?</span>
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
            className="max-w-70.5! flex justify-center mx-auto items-center"
          >
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-offset="0"
            >
              <button
                type="button"
                className="btn btn-custom cursor-pointer hover:scale-105 transition-trasform duration-300 mx-auto flex! items-center! flex-row! bg-seccondary! max-w-70.5! text-dark! group"
              >
                <strong className="text-dark! pr-2!">
                  Mulai Buat Sekarang
                </strong>
                <svg
                  class="w-5.5 pt-1! group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
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
