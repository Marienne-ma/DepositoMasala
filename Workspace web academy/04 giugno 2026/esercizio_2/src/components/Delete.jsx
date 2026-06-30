import { useState, useEffect } from "react";
import axios from "axios";

export function Delete(props) {

  
  function deleteElement() {

    const idDelete = 4;


    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${idDelete}`)
      .then(() => {

        //elimino da array di id
       props.setIds(prev =>
          prev.filter(id => id !== idDelete)
        );

      });

     
  }

  return (
    <button onClick={deleteElement}>Elimina post 4</button>
  );
}
