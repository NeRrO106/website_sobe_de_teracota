import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-amber-500">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 text-white text-lg font-bold">
            <span>Atelier Sobe</span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/products" className="text-md font-semibold text-white">
            Produse
          </Link>
          <Link to="/about" className="text-md font-semibold text-white">
            Despre noi
          </Link>
          <Link to="/contact" className="text-md font-semibold text-white">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
