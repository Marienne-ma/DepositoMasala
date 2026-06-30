export function GridCard({index}) {
  let isDark = Math.random() > 0.5;

  let randomNumber = Math.floor(Math.random() * 1000);

  return (
    <div className={isDark ? "card dark" : "card light"}>
      <h3>Card Dinamica n: {index}</h3>

      <p>Valore numerico: {randomNumber}</p>
    </div>
  );
}