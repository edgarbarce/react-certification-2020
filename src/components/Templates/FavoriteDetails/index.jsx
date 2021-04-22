import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../State/Provider';
import VideoDetails from '../VideoDetails';

function FavoriteDetails() {
  const { state } = useContext(AppContext);
  const [videos, setVideos] = useState();

  useEffect(() => {
    setVideos(state.favoriteVideos);
  }, [state.favoriteVideos]);

  return (
    <div>
      <VideoDetails favVideos={videos} type="Favorites" />
    </div>
  );
}

export default FavoriteDetails;
