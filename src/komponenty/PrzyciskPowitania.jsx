import { useState, useEffect } from 'react';

function PrzyciskPowitania() {
  const [imie, setImie] = useState('');

  useEffect(() => {
    const zapisaneImie = localStorage.getItem('imieUzytkownika');
    if (zapisaneImie) {
      setImie(zapisaneImie);
    }
  }, []);

   function PrzedstawSie() {
  const wpisaneImie = window.prompt('Jak masz na imię?');
  if (wpisaneImie) {
    localStorage.setItem('imieUzytkownika', wpisaneImie);
    setImie(wpisaneImie);
  }
}

  return (
    <div className="panel-kontrast d-flex flex-wrap align-items-center justify-content-between gap-3 p-3 p-md-4 mb-4 shadow-sm">
      <div>
        {imie ? (
          <p className="mb-0 fw-bold fs-5" style={{ color: '#581c87' }}>
             Witaj ponownie, {imie}!
          </p>
        ) : (
          <p className="mb-0 fw-medium" style={{ color: '#2e1a3b' }}>
             Jeszcze się nie znamy? kliknij przycisk i daj się poznać!
          </p>
        )}
      </div>

      <button
        type="button"
        className="btn przycisk-rozowy"
        onClick={PrzedstawSie}
      >
        Przedstaw się
      </button>
    </div>
  );
}

export default PrzyciskPowitania;