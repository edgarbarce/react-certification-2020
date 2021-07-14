import { useState, useEffect, useCallback } from 'react';

const useIsVideoFavorite = (videoId, favoriteVideos) => {
  const [isVideoFavorite, setIsVideoFavorite] = useState(false);

  const searchVideoFavorite = useCallback(() => {
    try {
      if (favoriteVideos !== null) {
        setIsVideoFavorite(favoriteVideos.some((x) => x.id.videoId === videoId));
      } else {
        setIsVideoFavorite(false);
      }
    } catch (e) {
      console.log(e);
      setIsVideoFavorite(false);
    }
  }, [videoId, favoriteVideos]);

  useEffect(() => {
    searchVideoFavorite();
  }, [searchVideoFavorite]);

  return { isVideoFavorite };
};

export default useIsVideoFavorite;
