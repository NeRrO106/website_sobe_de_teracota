function Products() {
  const produse = [
    {
      id: 1,
      nume: "Sobă Teracotă Classic",
      descriere: "Sobă realizată manual, perfectă pentru camere medii.",
      imagine:
        "https://images.unsplash.com/photo-1601036623485-7d56e603a3ef?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      nume: "Sobă Teracotă Modernă",
      descriere: "Design elegant, cu eficiență ridicată.",
      imagine: "https://via.placeholder.com/300x200.png?text=Soba+Modern",
    },
    {
      id: 3,
      nume: "Sobă Teracotă Semineu",
      descriere: "Perfectă pentru living, cu plită mare și cuptor lateral.",
      imagine: "https://via.placeholder.com/300x200.png?text=Soba+Semineu",
    },
    {
      id: 4,
      nume: "Sobă Teracotă Rustic",
      descriere: "Design tradițional, ideală pentru cabane și case rustice.",
      imagine: "https://via.placeholder.com/300x200.png?text=Soba+Rustic",
    },
    {
      id: 5,
      nume: "Sobă Teracotă Compactă",
      descriere: "Ideală pentru apartamente sau spații mai mici.",
      imagine: "https://via.placeholder.com/300x200.png?text=Soba+Compacta",
    },
    {
      id: 6,
      nume: "Sobă Teracotă cu Cuptor",
      descriere: "Permite gătitul și încălzirea camerei simultan.",
      imagine: "https://via.placeholder.com/300x200.png?text=Soba+Cuptor",
    },
    {
      id: 7,
      nume: "Sobă Teracotă cu Plită",
      descriere: "Design tradițional cu plită pentru gătit.",
      imagine: "https://via.placeholder.com/300x200.png?text=Soba+Plita",
    },
    {
      id: 8,
      nume: "Sobă Teracotă Minimalistă",
      descriere: "Linii simple, perfectă pentru decor modern.",
      imagine: "https://via.placeholder.com/300x200.png?text=Soba+Minimalista",
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
              className="bg-yellow-600 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={produs.imagine}
                alt={produs.nume}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {produs.nume}
                </h3>
                <p className="mt-2 text-gray-700">{produs.descriere}</p>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="inline-block w-full text-center px-4 py-2 bg-amber-500 text-white font-semibold rounded-md hover:bg-amber-600 transition-colors"
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
