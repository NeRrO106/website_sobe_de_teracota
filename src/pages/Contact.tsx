function Contact() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center px-6 py-24 relative z-10 bg-amber-700 min-h-screen">
      <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
        Contactează-ne
      </h1>
      <p className="text-lg sm:text-xl text-gray-200 mb-12 max-w-2xl">
        Pentru informații sau oferte personalizate, completează formularul sau
        folosește datele noastre de contact.
      </p>

      <div className="max-w-2xl w-full bg-yellow-600 rounded-lg shadow-md p-8">
        <form className="space-y-6 ">
          <div>
            <label
              className="block text-white font-semibold mb-2"
              htmlFor="nume"
            >
              Nume
            </label>
            <input
              type="text"
              id="nume"
              placeholder="Introdu numele tău"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label
              className="block text-white font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="exemplu@domeniu.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label
              className="block text-white font-semibold mb-2"
              htmlFor="mesaj"
            >
              Mesaj
            </label>
            <textarea
              id="mesaj"
              placeholder="Scrie mesajul tău..."
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 text-white font-semibold py-2 rounded-md hover:bg-amber-600 transition-colors"
          >
            Trimite mesaj
          </button>
        </form>

        {/* Info contact */}
        <div className="mt-8 text-gray-700">
          <p>
            <strong>Telefon:</strong> 0722 123 456
          </p>
          <p>
            <strong>Email:</strong> contact@atelier-sobe.ro
          </p>
          <p>
            <strong>Adresă:</strong> Str. Exemplu 10, Oraș, Județ
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
