import { useNavigate } from "react-router-dom";

export function ListaCitta() {
  const navigate = useNavigate();

  const luoghi = [
  { id: 1, nome: "Agrigento", descrizione: "Provincia della Sicilia" },
  { id: 2, nome: "Alessandria", descrizione: "Provincia del Piemonte" },
  { id: 3, nome: "Ancona", descrizione: "Provincia delle Marche" },
  { id: 4, nome: "Aosta", descrizione: "Provincia della Valle d'Aosta" },
  { id: 5, nome: "Arezzo", descrizione: "Provincia della Toscana" },
  { id: 6, nome: "Ascoli Piceno", descrizione: "Provincia delle Marche" },
  { id: 7, nome: "Asti", descrizione: "Provincia del Piemonte" },
  { id: 8, nome: "Avellino", descrizione: "Provincia della Campania" },
  { id: 9, nome: "Bari", descrizione: "Capoluogo della Puglia" },
  { id: 10, nome: "Belluno", descrizione: "Provincia del Veneto" },
  { id: 11, nome: "Benevento", descrizione: "Provincia della Campania" },
  { id: 12, nome: "Bergamo", descrizione: "Provincia della Lombardia" },
  { id: 13, nome: "Biella", descrizione: "Provincia del Piemonte" },
  { id: 14, nome: "Bologna", descrizione: "Capoluogo dell'Emilia-Romagna" },
  { id: 15, nome: "Bolzano", descrizione: "Provincia autonoma del Trentino-Alto Adige" },
  { id: 16, nome: "Brescia", descrizione: "Provincia della Lombardia" },
  { id: 17, nome: "Brindisi", descrizione: "Provincia della Puglia" },
  { id: 18, nome: "Cagliari", descrizione: "Capoluogo della Sardegna" },
  { id: 19, nome: "Caltanissetta", descrizione: "Provincia della Sicilia" },
  { id: 20, nome: "Campobasso", descrizione: "Capoluogo del Molise" },
  { id: 21, nome: "Caserta", descrizione: "Provincia della Campania" },
  { id: 22, nome: "Catania", descrizione: "Provincia della Sicilia" },
  { id: 23, nome: "Catanzaro", descrizione: "Capoluogo della Calabria" },
  { id: 24, nome: "Chieti", descrizione: "Provincia dell'Abruzzo" },
  { id: 25, nome: "Como", descrizione: "Provincia della Lombardia" },
  { id: 26, nome: "Cosenza", descrizione: "Provincia della Calabria" },
  { id: 27, nome: "Cremona", descrizione: "Provincia della Lombardia" },
  { id: 28, nome: "Crotone", descrizione: "Provincia della Calabria" },
  { id: 29, nome: "Cuneo", descrizione: "Provincia del Piemonte" },
  { id: 30, nome: "Enna", descrizione: "Provincia della Sicilia" },
  { id: 31, nome: "Ferrara", descrizione: "Provincia dell'Emilia-Romagna" },
  { id: 32, nome: "Firenze", descrizione: "Capoluogo della Toscana" },
  { id: 33, nome: "Foggia", descrizione: "Provincia della Puglia" },
  { id: 34, nome: "Forlì", descrizione: "Provincia dell'Emilia-Romagna" },
  { id: 35, nome: "Frosinone", descrizione: "Provincia del Lazio" },
  { id: 36, nome: "Genova", descrizione: "Capoluogo della Liguria" },
  { id: 37, nome: "Gorizia", descrizione: "Provincia del Friuli-Venezia Giulia" },
  { id: 38, nome: "Grosseto", descrizione: "Provincia della Toscana" },
  { id: 39, nome: "Imperia", descrizione: "Provincia della Liguria" },
  { id: 40, nome: "Isernia", descrizione: "Provincia del Molise" },
  { id: 41, nome: "L'Aquila", descrizione: "Capoluogo dell'Abruzzo" },
  { id: 42, nome: "La Spezia", descrizione: "Provincia della Liguria" },
  { id: 43, nome: "Latina", descrizione: "Provincia del Lazio" },
  { id: 44, nome: "Lecce", descrizione: "Provincia della Puglia" },
  { id: 45, nome: "Lecco", descrizione: "Provincia della Lombardia" },
  { id: 46, nome: "Livorno", descrizione: "Provincia della Toscana" },
  { id: 47, nome: "Lodi", descrizione: "Provincia della Lombardia" },
  { id: 48, nome: "Lucca", descrizione: "Provincia della Toscana" },
  { id: 49, nome: "Macerata", descrizione: "Provincia delle Marche" },
  { id: 50, nome: "Mantova", descrizione: "Provincia della Lombardia" },
  { id: 51, nome: "Matera", descrizione: "Provincia della Basilicata" },
  { id: 52, nome: "Messina", descrizione: "Provincia della Sicilia" },
  { id: 53, nome: "Milano", descrizione: "Capitale economica d'Italia" },
  { id: 54, nome: "Modena", descrizione: "Provincia dell'Emilia-Romagna" },
  { id: 55, nome: "Monza", descrizione: "Capoluogo della Brianza" },
  { id: 56, nome: "Napoli", descrizione: "Città del Vesuvio" },
  { id: 57, nome: "Novara", descrizione: "Provincia del Piemonte" },
  { id: 58, nome: "Nuoro", descrizione: "Provincia della Sardegna" },
  { id: 59, nome: "Oristano", descrizione: "Provincia della Sardegna" },
  { id: 60, nome: "Padova", descrizione: "Provincia del Veneto" }
];

  return (
    <div className="cards-container">
      {luoghi.map((luogo) => (
        <div key={luogo.id} className="card">
          <h3>{luogo.nome}</h3>
          <p>{luogo.descrizione}</p>

          <button onClick={() => navigate(`/citta/${luogo.nome}`)}>
            Dettagli
          </button>
        </div>
      ))}
    </div>
  );
}