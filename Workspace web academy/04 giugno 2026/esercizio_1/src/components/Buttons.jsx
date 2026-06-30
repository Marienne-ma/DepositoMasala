import { useState } from "react";

export function Buttons() {
  const [number, setNumber] = useState(0);

  const handlePlus = () => {
    setNumber((number) => number+1);
  };

  const handleDivide = () => {
    setNumber((number) => Math.floor(number / 2));
  };

  return (
    <div className="event-box">
      <p>{number}</p>
      <button onClick={handlePlus}>Aggiungi 1</button>
      <button onClick={handleDivide}>Dividi per 2</button>
      {number % 5 === 0 && number != 0 ? 
        <div>è un multiplo di 5</div>
       : 
        <div>non è un multiplo di 5</div>
      }
    </div>
  );
}

export default Buttons;
