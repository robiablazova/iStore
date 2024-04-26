import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SinglePage = () => {
  const { id } = useNavigate;
  const navigate = useNavigate();
  const [post, setPost] = useState();
  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json().then((data) => setPost(data))
    )
  }, [id]);
  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <button onClick={goHome}>Go home</button>

      {post && (
          <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          </>
      )}
    </div>
  );
};

export default SinglePage;
