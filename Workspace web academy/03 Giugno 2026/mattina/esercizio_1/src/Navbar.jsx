import logo from './assets/logo.webp'
import './App.css'


export function Navbar() {
  const title = "ESERCIZIO 1";
  

  return (
    <div className="navbar">
      {/* Visualizzazione di testi dinamici */}
      <h1>
        {title}
      </h1>

      {/* Risoluzione algebrica inline */}
      <img src={logo} className="framework" width="170" height="179" alt=""></img>

    
    </div>
  );
}
