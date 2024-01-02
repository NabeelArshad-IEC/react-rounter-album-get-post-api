// components/Posts.js
import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts: ', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '15px' }}>
          <h3 style={{ color: '#333' }}>{post.title}</h3>
          <p style={{ color: '#666' }}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
