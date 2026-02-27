import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "/logo.png";
// import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (location.pathname.includes("/product/")) {
      setActiveSection("products");
    } else if (location.pathname.includes("/blog/")) {
      setActiveSection("blog");
    } else if (isHomePage) {
      setActiveSection("home");
    }
  }, [location, isHomePage]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (isHomePage) {
        const sections = [
          "hero",
          "services",
          "products",
          "order-steps",
          "testimoni",
          "blog",
        ];

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= -100 && rect.top < 300) {
              setActiveSection(section);
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const getLink = (item) => {
    if (item === "hero") {
      return isHomePage ? "#" : "/";
    }
    return isHomePage ? `#${item}` : `/#${item}`;
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar container">
        <Link
          to="/"
          className="nav-logo z-20 flex flex-row gap-2 items-center"
          onClick={() => {
            window.scrollTo(0, 0);
            setActiveSection("hero");
          }}
        >
          <img className=" w-10" src={ Logo} alt="" />
          <p>Effort.Dong</p>
        </Link>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {[
            "hero",
            "services",
            "products",
            "order-steps",
            "testimoni",
            "blog",
          ].map((item) => (
            <li className="nav-item" key={item}>
              <Link
                to={getLink(item)}
                // className="nav-link"
                onClick={() => {
                  closeMenu();
                  if (isHomePage && item === "hero") window.scrollTo(0, 0);
                  setActiveSection(item);
                }}
              >
                <a
                  href={`#${item}`}
                  className={`nav-link ${activeSection === item ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  {item === "hero"
                    ? "Home"
                    : item === "order-steps"
                      ? "Cara Pesan"
                      : item === "blog"
                        ? "Blog"
                        : item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </Link>
            </li>
          ))}
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
