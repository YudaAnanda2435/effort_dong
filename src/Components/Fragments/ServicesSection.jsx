import { servicesData } from "../../Data/ServicesData";

const ServicesSection = () => {

  return (
    <section className="services section bg-seccondary" id="services">
      <div className="container">
        <div className="section-title">
          <h2
            className="text-[32px] sm:text-[50px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Jadi di Effort.Dong ini kamu bisa dapat apa?
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Jadi disini kamu bisa mendapatkan website ucapan yang kamu mau.
          </p>
        </div>

        <div className="services-grid no-scrollbar!">
          {servicesData.map((service, index) => (
            // 1. DIV PEMBUNGKUS (WRAPPER) UNTUK AOS
            // Grid akan mengatur div ini sebagai kolom
            <div key={index} data-aos="zoom-in" data-aos-delay={index * 200}>
              {/* 2. DIV KARTU ASLI UNTUK HOVER */}
              {/* Hapus data-aos dari sini */}
              <div className="service-card">
                <i className={`bx ${service.icon} service-icon`}></i>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
