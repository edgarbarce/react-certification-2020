import React, { useContext } from 'react';
import VideoDetails from '../../components/Templates/VideoDetails/index';
import { AppContext } from '../../State/Provider';
import useYoutubeApi from '../../Hooks/useYoutubeApi';
import SearchMode from '../../components/Templates/SearchMode';

function HomePage() {
  const { state } = useContext(AppContext);
  const { videos, isLoading, error } = useYoutubeApi(state.searchWord);

  if (error) {
    return <p>There was an unexpected problem. Please refresh the page.</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!state.searchMode) {
    return <VideoDetails videos={videos} videoProps={state.propsSelectedVideo} />;
  }
  return <SearchMode title="Video List" videos={videos} type="Home" />;
}

export default HomePage;
