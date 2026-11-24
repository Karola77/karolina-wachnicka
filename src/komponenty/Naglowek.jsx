function Naglowek({ tytul, ciekawostka }) {
  return (
    <header className="naglowek p-4 p-md-5 mb-4 rounded-4 shadow text-white">
      <div
        className="badge mb-3 px-3 py-2 rounded-pill"
        style={{ backgroundColor: '#fdf2f8', color: '#831843', fontWeight: 700 }}
      >
       Twój kącik czytelniczy online!
      </div>
      <h1 className="display-6 fw-bold mb-2 text-white">{tytul}</h1>
      <p className="mb-0 fs-6 ciekawostka-tekst">{ciekawostka}</p>
    </header>
  );
}

export default Naglowek;