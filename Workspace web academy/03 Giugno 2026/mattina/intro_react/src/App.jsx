import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Welcome } from "./components/Welcome";
import { ProfileCard } from "./components/ProfileCard";
import { ProductDisplay } from "./components/ProductDisplay";
import { AlertButton } from "./components/AlertButton";
import { Avatar } from "./components/Avatar";
import { LightSwitch } from "./components/LightSwitch";

function App() {
  const [count, setCount] = useState(0);
  const userData = { firstName: "Anna", lastName: "Rossi", role: "Developer" };
  const userSkills = ["React", "JavaScript", "CSS"];
  const handleAlert = () => {
    alert("Azione rilevata dal componente principale!");
  };

  return (
    <>
      <section id="center">
        <div className="hero">
          <div>
            {/* Nome è una stringa statica, messageCount è un numero passato tra graffe */}
            <Welcome name="Mario" messageCount={5} />
            <Welcome name="Luigi" messageCount={0} />
          </div>
          <ProfileCard user={userData} skills={userSkills} />
          <ProductDisplay name="Laptop" price="1200" />
          <div className="control-panel">
            {/* Passiamo il riferimento alla funzione handleAlert */}
            <AlertButton label="Avvia Processo" onAction={handleAlert} />
            <LightSwitch />
          </div>

          
        </div>
      </section>

      <div className="ticks"></div>


      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
