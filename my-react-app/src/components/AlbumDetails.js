// components/AlbumDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Album Details</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.map((photo) => (
          <div key={photo.id} style={{ margin: '10px', textAlign: 'center' }}>
            <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '200px' }} />
            <p style={{ marginTop: '5px' }}>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumDetails;
