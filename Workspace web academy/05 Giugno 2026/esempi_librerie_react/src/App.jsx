import "./App.css";
import { About } from "./pages/About";
import { DettaglioNome } from "./pages/DettaglioNome";
import { Home } from "./pages/Home";
import { NavLink, Route, Routes } from "react-router-dom";



function App() {
  const visualizzaStileAttivo = ({ isActive }) => ({
    color: isActive ? "gold" : "white",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div>
      <nav>
        <NavLink to="/" style={visualizzaStileAttivo}>Home</NavLink>
        
        <NavLink to="/about" style={visualizzaStileAttivo}>About</NavLink>
       
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
        <Route path=":nome" element={<DettaglioNome/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
