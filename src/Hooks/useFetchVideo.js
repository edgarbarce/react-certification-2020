import { useState, useEffect, useCallback } from 'react';

const useFetchVideo = (videoId) => {
  const [singleVideo, setSingleVideo] = useState();
  const [videoIsLoading, setVideoIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchVideos = useCallback(async () => {
    try {
      setVideoIsLoading(true);

      const searchVideo = `https://www.googleapis.com/youtube/v3/videos?${new URLSearchParams(
        {
          part: 'snippet',
          id: videoId,
          key: process.env.REACT_APP_API_KEY,
        }
      )}`;
      const responseVideo = await fetch(searchVideo);
      const dataVideo = await responseVideo.json();
      setSingleVideo(dataVideo.items[0]);
      setVideoIsLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
      setVideoIsLoading(false);
    }
  }, [videoId]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return { singleVideo, videoIsLoading, error };
};

export default useFetchVideo;
