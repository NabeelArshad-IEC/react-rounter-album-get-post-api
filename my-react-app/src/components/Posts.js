import React, { useState, useEffect } from 'react';
import { Container, Card, CardBody, CardTitle } from 'reactstrap';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts: ', error));
  }, []);

  return (
    <Container>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Card key={post.id} className="my-3">
          <CardBody>
            <CardTitle tag="h5">{post.title}</CardTitle>
            <p className="card-text">{post.body}</p>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
};

export default Posts;
