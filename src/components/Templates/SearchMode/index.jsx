import React from 'react';
import HeaderLarge from '../../Atoms/HeaderLarge';
import VideoList from '../../Organisms/VideoList';

function SearchMode({ title, videos, type }) {
  const parsedVideos = type === 'Favorites' ? videos : videos.items;
  return (
    <section className="homepage">
      <HeaderLarge>{title}</HeaderLarge>
      <VideoList videos={parsedVideos} type={type} />
    </section>
  );
}

export default SearchMode;
