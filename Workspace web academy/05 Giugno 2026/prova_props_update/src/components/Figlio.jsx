export function Figlio({username, onUpdateName}) {
  return (
    <>
      <p>Username ricevuto dal padre: {username}</p>
      <button onClick={() => onUpdateName("Luigi")}>
        Cambia nome in Luigi
      </button>
    </>
  );
}

