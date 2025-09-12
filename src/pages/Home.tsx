function Home() {
  return (
    <div className="bg-amber-700 min-h-screen relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-screen px-6">
        <h1 className="text-5xl sm:text-7xl font-bold text-white">
          Căldura tradiției în casa ta
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl">
          Sobe de teracotă realizate manual, cu atenție la detalii și materiale
          de calitate.
        </p>
        <div className="mt-10 flex gap-x-6">
          <a
            href="#produse"
            className="px-4 py-2 bg-amber-500 text-white rounded-md font-semibold hover:bg-amber-600"
          >
            Vezi produsele
          </a>
          <a href="#contact" className="text-white font-semibold">
            Contactează-ne →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
