import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('/api/favorites');
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites: ', error);
      }
    };

    fetchFavorites();
  }, []);

  const removeFromFavorites = async (id) => {
    try {
      await axios.delete(`/api/favorites/${id}`);
      setFavorites(favorites.filter(favorite => favorite.id !== id));
    } catch (error) {
      console.error('Error removing favorite: ', error);
    }
  };

  return (
    <div>
      <h1>My Favorites</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(favorite => (
            <li key={favorite.id}>
              <img src={favorite.image} alt={favorite.name} />
              <h3>{favorite.name}</h3>
              <p>{favorite.description}</p>
              <button onClick={() => removeFromFavorites(favorite.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favorites;