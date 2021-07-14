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

export const getTheme = () => {
  try {
    const localTheme = localStorage.getItem('USER-THEME');
    if (localTheme != null) {
      const contentLocalStorage = JSON.parse(localTheme);
      return contentLocalStorage;
    }
    return 'light';
  } catch (e) {
    console.log(e);
    return 'light';
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

export const parseVideo = (videoId, title, description, img) => {
  return {
    id: {
      videoId,
      kind: 'youtube#video',
    },
    snippet: {
      title,
      description,
      thumbnails: {
        medium: {
          url: img,
        },
      },
    },
  };
};
