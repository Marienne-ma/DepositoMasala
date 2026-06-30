import { useState, useEffect } from "react";
import axios from 'axios'

export function Get(props) {


    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {


      props.setPosts(response.data.filter(x => props.ids.includes(x.id)))
    })
  }, [props.ids])

  return (
    <div>
      <ul>
        {props.posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}