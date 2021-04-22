import { useState, useEffect } from 'react';

const useFavoriteVideos = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchVideos = () => {
    try {
      setIsLoading(true);
      const userString = localStorage.getItem('USER-VIDEOS');
      if (userString != null) {
        const favorites = JSON.parse(userString);
        setVideos(favorites.favoriteVideos);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return { videos, isLoading, error };
};

export default useFavoriteVideos;
