import { useLocation, Link } from "react-router-dom";
// import { products } from "../../Data/ProductData";
// import { blogs } from "../../Data/blogData";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Tambahkan parameter index untuk mengecek parent path
  const getName = (value, index) => {
    const isId = !isNaN(value);

    if (isId) {
      // Cek segment sebelumnya (parent)
      // Contoh URL: /blog/1 -> index '1' adalah 1, maka prevPath adalah pathnames[0] yaitu 'blog'
      const prevPath = pathnames[index - 1];

      // JIKA PARENTNYA 'PRODUCT'
      if (prevPath === "product" || prevPath === "produk") {
        return "Detail Product";
      }

      // JIKA PARENTNYA 'BLOG'
      if (prevPath === "blog") {
        
        return "Detail Blog";
      }

      // Default jika tidak ada parent spesifik (fallback)
      return value;
    }

    // Handle nama segment URL
    switch (value.toLowerCase()) {
      case "product":
      case "produk":
        return "Products";
      case "blog":
        return "Blog";
      default:
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
  };

  return (
    <nav className="text-sm font-medium text-gray-400 mb-6!">
      <ol className="list-reset flex items-center gap-2">
        <li className="flex flex-row gap-1 items-center">
          <Link
            to="/"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <i className="bx bx-home-alt text-lg pb-1"></i>
            Home
          </Link>
        </li>

        {pathnames.map((value, index) => {
          let to = `/${pathnames.slice(0, index + 1).join("/")}`;

          if (value === "product") {
            to = "/#products";
          } else if (value === "blog") {
            to = "/#blog";
          }

          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center gap-2">
              <span className="bx bx-chevron-right text-lg mt-1"></span>

              {isLast ? (
                <span className="text-white font-semibold">
                  {/* PENTING: Pass 'index' ke dalam getName */}
                  {getName(value, index)}
                </span>
              ) : (
                <Link to={to} className="hover:text-white transition-colors">
                  {/* PENTING: Pass 'index' ke dalam getName */}
                  {getName(value, index)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
