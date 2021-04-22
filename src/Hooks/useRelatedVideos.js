import { useState, useEffect, useCallback } from 'react';

const useRelatedVideos = (videoId, favVideos, type) => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [relatedVideosLoading, setRelatedVideosLoading] = useState(true);
  const [relatedVideosError, setRelatedVideosError] = useState(false);
  const fetchVideos = useCallback(async () => {
    try {
      if (type === 'Favorites') {
        setRelatedVideos(favVideos);
        setRelatedVideosLoading(false);
        return;
      }
      setRelatedVideosLoading(true);
      const searchURL = `https://www.googleapis.com/youtube/v3/search?${new URLSearchParams(
        {
          part: 'snippet',
          maxResults: 25,
          relatedToVideoId: videoId,
          type: 'video',
          key: process.env.REACT_APP_API_KEY,
        }
      )}`;
      const response = await fetch(searchURL);
      const data = await response.json();
      setRelatedVideos(data);
      setRelatedVideosLoading(false);
    } catch (e) {
      console.log(e);
      setRelatedVideosError(true);
      setRelatedVideosLoading(false);
    }
  }, [videoId, favVideos, type]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return { relatedVideos, relatedVideosLoading, relatedVideosError };
};

export default useRelatedVideos;
