import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";

import { ListaCitta } from "./components/ListaCittà";
import { DettaglioCitta } from "./components/DettaglioCitta";




function App() {
  const visualizzaStileAttivo = ({ isActive }) => ({
    color: isActive ? "gold" : "white",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div>
      <nav>
        <NavLink to="/" style={visualizzaStileAttivo}>Home</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<ListaCitta />} />
        <Route path="/citta/:citta" element={<DettaglioCitta />} />
      </Routes>
    </div>
  );
}

export default App;
