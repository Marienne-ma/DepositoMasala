import { useState, useEffect } from "react";
import axios from "axios";

export function Post(props) {

  const x = {
    id: 4,
    title: "POST",
    body: "inserito con chiamata post",
    userId: 4,
  };



  function addElement() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", x)
      .then((response) => {


        //aggiorno array id
        props.setIds(prevIds => [...prevIds, 4]);


      });

     
  }

  return (
    <button onClick={addElement}>Aggiungi post 4</button>
  );
}
