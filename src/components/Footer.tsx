function Footer() {
  return (
    <footer className="shadow-sm bg-amber-500">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-md text-white sm:text-center">
          © {new Date().getFullYear()} Atelier Sobe . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-md font-medium text-white sm:mt-0">
          <li>
            <a href="/about" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
