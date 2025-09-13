import sobaclasica from "../assets/soba_clasica.png";
import sobamoderna from "../assets/soba_moderna.png";
import sobasemineu from "../assets/soba_semineu.avif";
import sobarustic from "../assets/soba_rustica.webp";
import sobacompacta from "../assets/soba_compacta.webp";
import sobacuptor from "../assets/soba_cuptor.avif";
import sobaplita from "../assets/soba_plita.webp";
import sobaminimalista from "../assets/soba_minimalista.webp";
function Products() {
  const produse = [
    {
      id: 1,
      nume: "Sobă Teracotă Classic",
      descriere: "Sobă realizată manual, perfectă pentru camere medii.",
      imagine: sobaclasica,
    },
    {
      id: 2,
      nume: "Sobă Teracotă Modernă",
      descriere: "Design elegant, cu eficiență ridicată.",
      imagine: sobamoderna,
    },
    {
      id: 3,
      nume: "Sobă Teracotă Semineu",
      descriere: "Perfectă pentru living, cu plită mare și cuptor lateral.",
      imagine: sobasemineu,
    },
    {
      id: 4,
      nume: "Sobă Teracotă Rustic",
      descriere: "Design tradițional, ideală pentru cabane și case rustice.",
      imagine: sobarustic,
    },
    {
      id: 5,
      nume: "Sobă Teracotă Compactă",
      descriere: "Ideală pentru apartamente sau spații mai mici.",
      imagine: sobacompacta,
    },
    {
      id: 6,
      nume: "Sobă Teracotă cu Cuptor",
      descriere: "Permite gătitul și încălzirea camerei simultan.",
      imagine: sobacuptor,
    },
    {
      id: 7,
      nume: "Sobă Teracotă cu Plită",
      descriere: "Design tradițional cu plită pentru gătit.",
      imagine: sobaplita,
    },
    {
      id: 8,
      nume: "Sobă Teracotă Minimalistă",
      descriere: "Linii simple, perfectă pentru decor modern.",
      imagine: sobaminimalista,
    },
  ];

  return (
    <div className="bg-amber-700 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12 mt-10">
          Produsele noastre
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produse.map((produs) => (
            <div
              key={produs.id}
              className="bg-yellow-600 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow hover:scale-105 transition-transform"
            >
              <img
                src={produs.imagine}
                alt={produs.nume}
                className="w-48 h-48 object-fill align-center mx-auto mt-6"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-stone-950">
                  {produs.nume}
                </h3>
                <p className="mt-2 text-stone-800">{produs.descriere}</p>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="/contact"
                  className="inline-block w-full text-center px-4 py-2 bg-amber-500 text-stone-900 font-semibold rounded-md hover:bg-amber-600 transition-colors hover:text-white"
                >
                  Solicită ofertă
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
