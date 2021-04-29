import { useState, useEffect, useCallback, useContext } from 'react';
import { AppContext } from '../State/Provider';

const useFavoriteVideos = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { state } = useContext(AppContext);

  const fetchVideos = useCallback(() => {
    try {
      setIsLoading(true);
      if (state.favoriteVideos != null) {
        setVideos(state.favoriteVideos);
      } else {
        setVideos([]);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
      setIsLoading(false);
    }
  }, [state.favoriteVideos]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return { videos, isLoading, error };
};

export default useFavoriteVideos;
