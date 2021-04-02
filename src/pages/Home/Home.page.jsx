import React, { useRef } from 'react';
import HeaderLarge from '../../components/Atoms/HeaderLarge';
import VideoList from '../../components/Templates/VideoList/index';
import * as videos from '../../data/youtube-videos-mock.json';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <HeaderLarge>Video List</HeaderLarge>
      <>
        <VideoList list={videos} />
      </>
    </section>
  );
}

export default HomePage;
