import { useState } from "react";
import { Figlio } from "./Figlio";

export function Padre() {
  const [username, setUsername] = useState("Marco");

  function onUpdateName(nomeRicevuto) {
    setUsername(nomeRicevuto);
  }

  return (
    <div>
      <p>Sono il padre</p>
      <Figlio username={username} onUpdateName={onUpdateName} />
    </div>
  );
}
