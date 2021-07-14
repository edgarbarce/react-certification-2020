import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import HeaderLarge from '../../Atoms/HeaderLarge';
import Paragraph from '../../Atoms/Paragraph';
import FavButton from '../../Atoms/FavButton';
import { AppContext } from '../../../State/Provider';
import useIsVideoFavorite from '../../../Hooks/useIsVideoFavorite';

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

function VideoPlayer({ snippet }) {
  const { state } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const videoId = snippet?.id ? snippet.id : '';
  const { isVideoFavorite } = useIsVideoFavorite(videoId, state.favoriteVideos);

  useEffect(() => {
    setIsFavorite(isVideoFavorite);
  }, [isVideoFavorite]);

  return (
    <PlayerWrapperSC>
      <IframePlayer
        id="player"
        type="text/html"
        title={snippet?.snippet.title ?? 'No title available'}
        src={`https://youtube.com/embed/${videoId}?autoplay=0`}
      />
      <InfoWrapperSC>
        <HeaderLarge textAlign="left" margin="0px 5px">
          {snippet?.snippet.title ?? ''}
        </HeaderLarge>
        <FavButton
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          title={snippet?.snippet.title ?? ''}
          description={snippet?.snippet.description ?? ''}
          videoId={snippet?.id}
          img={snippet?.snippet.thumbnails.medium.url ?? ''}
        />

        <Paragraph textAlign="left" fontSize="14px" margin="10px 5px">
          {snippet?.snippet.description ?? ''}
        </Paragraph>
      </InfoWrapperSC>
    </PlayerWrapperSC>
  );
}

export default VideoPlayer;
