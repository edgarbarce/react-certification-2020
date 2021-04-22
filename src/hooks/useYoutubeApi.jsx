import { useState, useEffect, useCallback } from 'react';

const useYoutubeApi = (searchWord) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchVideos = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?${new URLSearchParams({
          maxResults: 20,
          part: 'snippet',
          key: process.env.REACT_APP_API_KEY,
          q: searchWord,
        })}`
      );
      const data = await response.json();
      setVideos(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
      setIsLoading(false);
    }
  }, [searchWord]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return { videos, isLoading, error };
};

export default useYoutubeApi;
