const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>EffortDong</h3>
          <p>Kartu ucapan digital untuk setiap momen berharga.</p>
        </div>
        <div className="footer-col">
          <h4>Navigasi</h4>
          <ul>
            <li>
              <a href="#services">Layanan</a>
            </li>
            <li>
              <a href="#products">Produk</a>
            </li>
            <li>
              <a href="#order-steps">Cara Pesan</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Syarat & Ketentuan</a>
            </li>
            <li>
              <a href="#">Kebijakan Privasi</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i className="bx bxl-tiktok"></i>
            </a>
            <a href="#">
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 EffortDong. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
