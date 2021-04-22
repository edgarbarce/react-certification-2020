import React, { useCallback, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import HeaderLarge from '../../Atoms/HeaderLarge';
import Paragraph from '../../Atoms/Paragraph';
import { AppContext } from '../../../State/Provider';
import { getFavoriteVideos, deleteFavoriteVideo } from '../../../Utils/LocalStorageUtils';

const PlayerWrapperSC = styled.div`
  display: inline;
  flex: 8;
`;

const InfoWrapperSC = styled.div`
  padding: 10px;
  margin-top: -20px;
`;

const IframePlayer = styled.iframe`
  width: 100%;
  height: 65%;
  padding: 15px;
  border: none;
  @media (max-width: 768px) {
    height: 38vh;
  }
`;

const AddFavoritesBtn = styled.button`
  font-size: 16px;
  padding: 10px;
  min-width: 90px;
  border: none;
  background: teal;
  color: white;
  box-shadow: 4px 5px 6px 0 rgb(0 0 0 / 71%);
  margin-top: -35px;
  margin-right: 10px;
  float: right;
  cursor: pointer;
`;

function VideoPlayer({ snippet }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { dispatch } = useContext(AppContext);
  const videoId = snippet?.id ? snippet.id : '';

  const addToFavorites = (videoData) => () => {
    const parsedVideo = {
      id: {
        videoId: videoData.id,
        kind: 'youtube#video',
      },
      snippet: {
        title: videoData.snippet.title,
        description: videoData.snippet.description,
        thumbnails: {
          medium: {
            url: videoData.snippet.thumbnails.medium.url,
          },
        },
      },
    };
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

  const removeFromFavorites = (id) => () => {
    const newFavorites = deleteFavoriteVideo(id);
    dispatch({
      type: 'SET_FAVORITE_VIDEOS',
      payload: {
        favoriteVideos: newFavorites,
      },
    });
    setIsFavorite(false);
  };

  const isVideoFavorite = useCallback(() => {
    const localVideos = localStorage.getItem('USER-VIDEOS');
    if (localVideos !== null) {
      const favorites = JSON.parse(localVideos).favoriteVideos;
      return favorites.some((x) => x.id.videoId === videoId);
    }
    return false;
  }, [videoId]);

  useEffect(() => {
    setIsFavorite(isVideoFavorite());
  }, [isVideoFavorite]);

  return (
    <PlayerWrapperSC>
      <IframePlayer
        id="player"
        type="text/html"
        title={snippet?.snippet?.title ? snippet.snippet.title : 'No mola'}
        src={`https://youtube.com/embed/${videoId}?autoplay=0`}
      />
      <InfoWrapperSC>
        <HeaderLarge textAlign="left" margin="0px 5px">
          {snippet?.snippet?.title ? snippet.snippet.title : ''}
        </HeaderLarge>
        {isFavorite ? (
          <AddFavoritesBtn onClick={removeFromFavorites(videoId)}>
            Remove from favorites
          </AddFavoritesBtn>
        ) : (
          <AddFavoritesBtn onClick={addToFavorites(snippet)}>
            Add to favorites
          </AddFavoritesBtn>
        )}
        <Paragraph textAlign="left" fontSize="14px" margin="10px 5px">
          {snippet?.snippet?.description || ''}
        </Paragraph>
      </InfoWrapperSC>
    </PlayerWrapperSC>
  );
}

export default VideoPlayer;
