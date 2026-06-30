export function JsonPlaceholderPost({post, postAPI}) {



    const handleClick = () => {
    postAPI(post);
  };

  return (
    <button onClick={handleClick}>
      Invia POST
    </button>
  );



}