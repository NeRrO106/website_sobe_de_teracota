function About() {
  return (
    <div className="flex-grow bg-amber-700 min-h-screen pb-12">
      <div className="flex flex-col items-center justify-center text-center px-6 py-20 sm:py-32 relative z-10">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          Despre Atelierul nostru
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl">
          La Atelier Sobe, tradiția întâlnește calitatea. Realizăm sobe de
          teracotă manual, cu pasiune și atenție la detalii.
        </p>
      </div>
      <div className="bg-yellow-500 text-gray-900 rounded-3xl mt-4 p-12 max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-6">Povestea noastră</h2>
        <p className="mb-4">
          Atelierul nostru a fost fondat pentru a păstra tradiția sobelor de
          teracotă în casele românilor. Fiecare sobă este realizată manual,
          folosind materiale de cea mai bună calitate, pentru a oferi căldură și
          durabilitate.
        </p>
        <p className="mb-4">
          Meșteșugul nostru combină tehnici tradiționale cu design modern,
          astfel încât fiecare sobă să fie atât funcțională, cât și estetică.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Valorile noastre</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Calitate și durabilitate în fiecare sobă</li>
          <li>Respect pentru tradiție și meșteșug</li>
          <li>Design estetic și funcțional</li>
          <li>Serviciu personalizat pentru fiecare client</li>
        </ul>
      </div>
    </div>
  );
}
export default About;
