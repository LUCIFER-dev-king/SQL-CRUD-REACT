import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [listofPost, setListofPost] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts/getall").then((res) => {
      setListofPost(res.data);
    });
  }, []);
  return (
    <div>
      <Link to='/createpost'>Create Post</Link>

      {listofPost.map((post, id) => (
        <div key={id} className='card'>
          <div className='card-title'>{post.title}</div>
          <div className='card-body'>{post.postText}</div>
          <div className='card-footer'>{post.username}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
