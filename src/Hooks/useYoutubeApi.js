import { useState, useEffect, useCallback } from 'react';

const useYoutubeApi = (searchWord) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchVideos = useCallback(async () => {
    try {
      setIsLoading(true);
      const searchURL = `https://www.googleapis.com/youtube/v3/search?${new URLSearchParams(
        {
          maxResults: 25,
          part: 'snippet',
          key: process.env.REACT_APP_API_KEY,
          q: searchWord,
        }
      )}`;
      const response = await fetch(searchURL);
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
