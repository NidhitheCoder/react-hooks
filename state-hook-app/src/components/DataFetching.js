import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, SetIdFromButtonClick] = useState(1);

  const handleClick = () => {
    SetIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetching;
