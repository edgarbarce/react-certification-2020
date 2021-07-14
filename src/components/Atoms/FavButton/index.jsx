import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  getFavoriteVideos,
  deleteFavoriteVideo,
  parseVideo,
} from '../../../Utils/LocalStorageUtils';
import { AppContext } from '../../../State/Provider';

const FavButtonSC = styled.button`
  font-size: 12px;
  padding: 10px;
  min-width: 145px;
  max-width: 145px;
  border: none;
  background: teal;
  color: white;
  box-shadow: 4px 5px 6px 0 rgb(0 0 0 / 71%);
  position: relative;
  float: right;
  cursor: pointer;
  margin-top: -40px;
`;

function FavButton({
  isUserLoggedIn,
  isFavorite,
  setIsFavorite,
  videoId,
  title,
  description,
  img,
}) {
  const { dispatch } = useContext(AppContext);

  const addToFavorites = (event) => {
    event.stopPropagation();
    const parsedVideo = parseVideo(videoId, title, description, img);
    const favorites = getFavoriteVideos();
    favorites.push(parsedVideo);
    const localStorageObj = {
      favoriteVideos: favorites,
    };
    dispatch({
      type: 'SET_FAVORITE_VIDEOS',
      payload: {
        favoriteVideos: favorites,
      },
    });
    localStorage.setItem('USER-VIDEOS', JSON.stringify(localStorageObj));
    setIsFavorite(true);
  };

  const removeFromFavorites = (event) => {
    event.stopPropagation();
    const newFavorites = deleteFavoriteVideo(videoId);
    dispatch({
      type: 'SET_FAVORITE_VIDEOS',
      payload: {
        favoriteVideos: newFavorites,
      },
    });
    setIsFavorite(false);
  };

  return !isUserLoggedIn ? null : (
    <div>
      {isFavorite ? (
        <FavButtonSC onClick={(e) => removeFromFavorites(e)}>
          Remove from favorites
        </FavButtonSC>
      ) : (
        <FavButtonSC onClick={(e) => addToFavorites(e)}>Add to favorites</FavButtonSC>
      )}
    </div>
  );
}

export default FavButton;
