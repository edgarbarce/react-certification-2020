import React, { useContext, useRef } from 'react';
import HeaderLarge from '../../components/Atoms/HeaderLarge';
import VideoList from '../../components/Templates/VideoList/index';
import VideoDetails from '../../components/Templates/VideoDetails/index';
import { AppContext } from '../../state/Provider';
import useYoutubeApi from '../../hooks/useYoutubeApi';

function HomePage() {
  const sectionRef = useRef(null);
  const { state } = useContext(AppContext);
  const { videos, isLoading, error } = useYoutubeApi(state.searchWord);

  if (error) {
    return <p>There was an unexpected problem. Please refresh the page.</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!state.searchMode) {
    return (
      <VideoDetails videoProps={state.propsSelectedVideo}>
        <VideoList list={videos} direction="column" />
      </VideoDetails>
    );
  }
  return (
    <section className="homepage" ref={sectionRef}>
      <HeaderLarge>Video List</HeaderLarge>
      <VideoList list={videos} />
    </section>
  );
}

export default HomePage;
