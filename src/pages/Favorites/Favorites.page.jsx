import React from 'react';
import useFavoriteVideos from '../../Hooks/useFavoriteVideos';
import SearchMode from '../../components/Templates/SearchMode';

function Favorites() {
  const { videos, isLoading, error } = useFavoriteVideos();
  if (error) {
    return <p>There was an unexpected problem. Please refresh the page.</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <SearchMode title="My Favorite Videos" videos={videos} type="Favorites" />;
}

export default Favorites;
