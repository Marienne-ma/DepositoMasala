import { useState } from "react";

import "./App.css";
import { Get } from "./components/Get";
import { Post } from "./components/Post";
import { Delete } from "./components/Delete";

function App() {
  const [posts, setPosts] = useState([]);
  const [ids, setIds] = useState([1, 2, 3]);

  return (
    <>
      <section id="center">
        <Get posts={posts} setPosts={setPosts} ids={ids} />
        <Post setPosts={setPosts} ids={ids} setIds={setIds} />
        <Delete setPosts={setPosts} setIds={setIds} />
      </section>
    </>
  );
}

export default App;
