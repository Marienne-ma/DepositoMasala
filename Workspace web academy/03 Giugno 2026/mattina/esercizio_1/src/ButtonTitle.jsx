export function ButtonTitle() {

  function buttonClick() {
    const title = document.getElementById("title");
    title.classList.toggle("style1");
  }

  return (
    <div>
      <h1 id="title">
        Titolo dinamico
      </h1>

      <button onClick={buttonClick}>
        Cambia stato
      </button>

    
    </div>
  );
}