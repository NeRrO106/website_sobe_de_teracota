import soba from "../assets/soba_moderna.png";

function Home() {
  return (
    <div className="bg-amber-700 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
            Căldura tradiției <br /> în casa ta
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-stone-200 max-w-md mx-auto md:mx-0">
            Sobe de teracotă realizate manual, cu atenție la detalii și
            materiale de calitate.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/products"
              className="px-5 py-3 bg-amber-500 text-stone-800 rounded-md font-semibold hover:bg-amber-600 hover:scale-105 transition-transform hover:text-white"
            >
              Vezi produsele
            </a>
            <a
              href="/contact"
              className="px-5 py-3 bg-amber-500 text-stone-800 rounded-md font-semibold hover:bg-amber-600 hover:scale-105 transition-transform hover:text-white"
            >
              Contactează-ne →
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-6">
          <img
            src={soba}
            alt="Sobă teracotă"
            className="w-105 h-120 rounded-2xl shadow-lg transform hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
