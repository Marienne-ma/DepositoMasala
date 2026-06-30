import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { JsonPlaceholderPost } from "./JsonPlaceholderPost";

export function JsonPlaceholderGet() {
  const [posts, setPosts] = useState([]);
  const [post_form, setPost_form] = useState({});
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  function postAPI(data) {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log("Dati inviati correttamente "+response.data);
      });

  }

  function onSetPost(post) {
    setPost_form(post);
  }

   const onValid = (data) => {
    console.log("Dati del form:", data);
    const x = {
      title: data.title,
      body: data.body
    };
    setPost_form(x);
  };

  const onInvalid = (error) => {
    console.log(error);
  };


  return (
    <div style={{display:"flex"}}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          {...register("title", {
            required: "Il titolo è richiesto",
          })}
          placeholder="Inserisci il titolo"
        />
         {errors.title && (
          <span style={{ color: "red" }}>{errors.title.message}</span>
        )}
        <input
          {...register("body", {
            required: "Il testo è richiesto",
          })}
          placeholder="Inserisci il testo"
        />
        {errors.body && (
          <span style={{ color: "red" }}>{errors.body.message}</span>
        )}

        <button type="submit">Conferma</button>
      </form>

      <JsonPlaceholderPost post={post_form} postAPI={postAPI}/>
    </div>
  );
}
