// components/Albums.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error('Error fetching albums: ', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Albums</h1>
      {albums.map((album) => (
        <div key={album.id} style={{ marginBottom: '10px' }}>
          <Link to={`/album/${album.id}`} style={{ textDecoration: 'none' }}>
            <h3 style={{ color: '#333', cursor: 'pointer' }}>{album.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Albums;
