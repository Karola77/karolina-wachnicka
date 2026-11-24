import { useState, useEffect } from 'react';
import Naglowek from './komponenty/Naglowek';
import KartaKsiazki from './komponenty/KartaKsiazki';
import PrzyciskPowitania from './komponenty/PrzyciskPowitania';


const paletyTla = [
  'linear-gradient(180deg, #f9a8d4 0%, #571c96 100%)',
  'linear-gradient(180deg, #8e3bb4 0%, #f472b6 100%)',
  'linear-gradient(180deg, #fbcfe8 0%, #c084fc 100%)',
  'linear-gradient(180deg, #f5d0fe 0%, #f9a8d4 100%)'
];

function App({ ksiazki, ciekawostka }) {
  const [szukaj, setSzukaj] = useState('');
  const [kolorTla, setKolorTla] = useState(paletyTla[0]);

  useEffect(() => {
    const losowyKolor = paletyTla[Math.floor(Math.random() * paletyTla.length)];
    setKolorTla(losowyKolor);
  }, []);

  const przefiltrowaneKsiazki = ksiazki.filter(([tytul]) =>
    tytul.toLowerCase().includes(szukaj.toLowerCase())
  );

  return (
    <div
      style={{ background: kolorTla, minHeight: '100vh' }}
      className="py-4"
    >
      <div className="container">
        <Naglowek
          tytul="Mini-portal o książkach Stephena Kinga"
          ciekawostka={ciekawostka}
        />

        <PrzyciskPowitania />

        <div className="panel-kontrast p-3 p-md-4 mb-4 shadow-sm">
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-2 gap-2">
            <label
              htmlFor="poleSzukaj"
              className="form-label fw-bold mb-0"
              style={{ color: '#4c1d95' }}
            >
              🔍 Szukaj książki po tytule
            </label>
            <span
              className="badge rounded-pill px-3 py-2"
              style={{ backgroundColor: '#f3e8ff', color: '#581c87', fontWeight: 700 }}
            >
              Wyświetlane: {przefiltrowaneKsiazki.length} / {ksiazki.length}
            </span>
          </div>

          <div className="d-flex gap-2">
            <input
              id="poleSzukaj"
              type="text"
              className="form-control form-control-lg pole-szukaj-fiolet bg-white"
              placeholder="Wpisz np. Lśnienie, To, Misery..."
              value={szukaj}
              onChange={(e) => setSzukaj(e.target.value)}
            />
            {szukaj && (
              <button
                type="button"
                className="btn btn-dark rounded-3 px-3 fw-semibold"
                onClick={() => setSzukaj('')}
              >
                Wyczyść
              </button>
            )}
          </div>
        </div>

        {przefiltrowaneKsiazki.length > 0 ? (
          <div className="row">
            {przefiltrowaneKsiazki.map(([tytul, opis]) => (
              <KartaKsiazki key={tytul} tytul={tytul} opis={opis} />
            ))}
          </div>
        ) : (
          <div className="panel-kontrast p-4 text-center shadow-sm">
            <p className="mb-2 fw-bold" style={{ color: '#4c1d95' }}>
              Nie znaleziono książek dla frazy „{szukaj}”.
            </p>
            <button
              type="button"
              className="btn btn-sm przycisk-rozowy"
              onClick={() => setSzukaj('')}
            >
              Pokaż wszystkie książki
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;