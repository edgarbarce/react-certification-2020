export const getFavoriteVideos = () => {
  try {
    const localVideos = localStorage.getItem('USER-VIDEOS');
    if (localVideos != null) {
      const contentLocalStorage = JSON.parse(localVideos);
      return contentLocalStorage.favoriteVideos;
    }
    return [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const deleteFavoriteVideo = (id) => {
  const localVideos = localStorage.getItem('USER-VIDEOS');
  if (localVideos !== null) {
    const favorites = JSON.parse(localVideos).favoriteVideos;
    const newFavorites = favorites.filter((x) => x.id.videoId !== id);
    const localStorageObj = {
      favoriteVideos: newFavorites,
    };
    localStorage.setItem('USER-VIDEOS', JSON.stringify(localStorageObj));
    return newFavorites;
  }
  return [];
};
