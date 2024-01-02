import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const AlbumDetails = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error('Error fetching photos: ', error));
  }, [albumId]);

  return (
    <Container>
      <h1 className="text-center my-4">Album Details</h1>
      <Row>
        {photos.map((photo) => (
          <Col md="3" key={photo.id} className="mb-4">
            <Card>
              <CardImg top width="100%" src={photo.thumbnailUrl} alt={photo.title} />
              <CardBody>
                <CardTitle tag="h5" className="text-center" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{photo.title}</CardTitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AlbumDetails;
