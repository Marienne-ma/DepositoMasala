export function Card(props) {

  return (
    <div className={`card ${props.isPresent ? "" : "inactive"}`}>
      <h1>{props.name}</h1>

      <h3>{props.role}</h3>
      
      <p>{props.bio}</p>

      <div>
        <img src={props.imageUrl} alt="" />
      </div>


      { props.isPresent ?
      <button className="available" >
        Disponibile
      </button>
      :
      <button className="not_available">
        Assente / In riunione
      </button>
      }

    </div>
  );
}
