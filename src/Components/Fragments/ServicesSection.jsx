const ServicesSection = () => {
  const services = [
    {
      icon: "bx-images",
      title: "Banyak Pilihan Template",
      desc: "Pilih dari puluhan template kartu digital premium untuk ulang tahun dan anniversary yang dirancang khusus untuk kamu.",
    },
    {
      icon: "bx-customize",
      title: "Kustomisasi Tanpa Batas",
      desc: "Personalisasi kartu pilihanmu dengan foto, video, musik, dan pesan teks untuk sentuhan yang benar-benar personal.",
    },
    {
      icon: "bx-wallet",
      title: "Pembayaran di Akhir",
      desc: "Tidak perlu khawatir, revisi dapat dilakukan tanpa batas, dan pembayaran hanya dilakukan setelah website selesai 100%.",
    },
  ];

  return (
    <section className="services section bg-seccondary" id="services">
      <div className="container">
        <div className="section-title">
          <h2 className="text-[32px] sm:text-[50px]" data-aos="fade-up" data-aos-delay="100">
            Jadi di Effort.Dong ini kamu bisa dapat apa?
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Jadi disini kamu bisa mendapatkan website ucapan yang kamu mau.
          </p>
        </div>

        <div className="services-grid overflow-y-auto no-scrollbar">
          {services.map((service, index) => (
            // 1. DIV PEMBUNGKUS (WRAPPER) UNTUK AOS
            // Grid akan mengatur div ini sebagai kolom
            <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
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
