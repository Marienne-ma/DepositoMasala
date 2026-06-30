import { useState } from 'react'


export function Callback() {
const [lastAction, setLastAction] = useState("Nessuna");//dentro useState c'è il valore di default della variabile lastAction

const handleAction = (type, value) => {
setLastAction(`${type} con valore ${value}`);
};

return (
<div className="event-box">
<p>Ultimo click: {lastAction}</p>
{/* Avvolgiamo la funzione in una callback anonima per ritardare l'avvio */}
<button onClick={() => handleAction("Azione A", 100)}>Azione 1</button>
<button onClick={() => handleAction("Azione B", 200)}>Azione 2</button>
</div>
);
}

export default Callback