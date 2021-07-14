import React from 'react';
import useFavoriteVideos from '../../Hooks/useFavoriteVideos';
import SearchMode from '../../components/Templates/SearchMode';

import WithLayoutComponentLoading from '../../Helpers/WithComponentLoading';

const SearchModeWithLayoutComponentLoading = WithLayoutComponentLoading(SearchMode);

function Favorites() {
  const { videos, isLoading, error } = useFavoriteVideos();

  return (
    <SearchModeWithLayoutComponentLoading
      isLoading={isLoading}
      hasError={error}
      title="My Favorite Videos"
      videos={videos}
      type="Favorites"
    />
  );
}

export default Favorites;
