import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const getLink = (item) => {
    if (item === "hero") {
      return isHomePage ? "#" : "/"
    }
    return isHomePage ? `#${item}` : `/#${item}`;
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar container">
        <Link to="/" className="nav-logo z-20">
          Effort.Dong
        </Link>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {["hero", "services", "products", "order-steps", "testimoni"].map(
            (item) => (
              <li className="nav-item" key={item}>
                <Link
                  to={getLink(item)}
                  className="nav-link"
                  onClick={() => {
                    closeMenu();
                    if (isHomePage && item === "hero") window.scrollTo(0, 0);
                  }}
                >
                  <a href={`#${item}`} className="nav-link" onClick={closeMenu}>
                    {item === "hero"
                      ? "Home"
                      : item === "order-steps"
                      ? "Cara Pesan"
                      : item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </Link>
              </li>
            )
          )}
        </ul>

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
