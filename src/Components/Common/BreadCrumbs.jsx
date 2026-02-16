import { useLocation, Link } from "react-router-dom";
import { products } from "../../Data/ProductData";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const getName = (value) => {
    const isId = !isNaN(value);

    if (isId) {
      const product = products.find((p) => p.id == Number(value));
      return product ? product.title : value;
    }

    switch (value) {
      case "product":
      case "produk":
        return "Products";
      default:
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
  };

  return (
    <nav className="text-sm font-medium text-gray-400 mb-6!">
      <ol className="list-reset flex items-center gap-2">
        <li className="flex flex-row gap-1 items-center!">
          <Link
            to="/"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <i className="bx bx-home-alt text-lg pb-1!"></i>
            Home
          </Link>{" "}
        </li>

        {pathnames.map((value, index) => {
          let to = `/${pathnames.slice(0, index + 1).join("/")}`;

          if (value === "product") {
            to = "/#products";
          }

          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center gap-2">
              <span className="bx bx-chevron-right text-lg mt-1"></span>

              {isLast ? (
                <span className="text-white font-semiBold">
                  {getName(value, index)}
                </span>
              ) : (
                <Link to={to} className="hover:text-white transition-colors">
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
