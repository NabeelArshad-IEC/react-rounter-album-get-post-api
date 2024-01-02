import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error('Error fetching albums: ', error));
  }, []);

  return (
    <Container>
      <h1>Albums</h1>
      <Row>
        {albums.map((album) => (
          <Col md="4" key={album.id}>
            <Link to={`/album/${album.id}`}>
              <Card>
                <CardImg top width="100%" src={`https://picsum.photos/200/300?random=${album.id}`} alt="Album" />
                <CardBody>
                  <CardTitle>{album.title}</CardTitle>
                </CardBody>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Albums;
