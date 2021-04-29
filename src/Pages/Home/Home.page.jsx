import React, { useContext } from 'react';
import { AppContext } from '../../State/Provider';
import useYoutubeApi from '../../Hooks/useYoutubeApi';
import SearchMode from '../../components/Templates/SearchMode';
import WithLayoutComponentLoading from '../../Helpers/WithComponentLoading';

const SearchModeWithLayoutComponentLoading = WithLayoutComponentLoading(SearchMode);

function HomePage() {
  const { state } = useContext(AppContext);
  const { videos, isLoading, error } = useYoutubeApi(state.searchWord);

  return (
    <SearchModeWithLayoutComponentLoading
      isLoading={isLoading}
      hasError={error}
      title="Video List"
      videos={videos}
      type="Home"
    />
  );
}

export default HomePage;
