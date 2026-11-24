function KartaKsiazki({ tytul, opis }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card karta-ksiazki h-100 shadow-sm">
        <div className="pasek-karty" />
        <div className="card-body d-flex flex-column p-4">
          <span className="badge odznaka-king align-self-start mb-3">
            Stephen King
          </span>
          <h5 className="card-title tytul-ksiazki mb-2">{tytul}</h5>
          <p className="card-text opis-ksiazki mb-0">{opis}</p>
        </div>
      </div>
    </div>
  );
}

export default KartaKsiazki;