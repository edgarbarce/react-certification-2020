import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import VideoImg from '../../Atoms/VideoImg';
import HeaderMedium from '../../Atoms/HeaderMedium';
import Paragraph from '../../Atoms/Paragraph';
import { AppContext } from '../../../State/Provider';
import FavButton from '../../Atoms/FavButton';
import useIsVideoFavorite from '../../../Hooks/useIsVideoFavorite';

const Card = styled.div`
  display: ${(props) => (props?.direction === 'column' ? 'flex' : 'inline-block')};
  padding: ${(props) => (props.direction === 'column' ? '4px' : '10px')};
  min-height: ${(props) => (props?.direction === 'column' ? '125px' : '320px')};
  max-height: ${(props) => (props?.direction === 'column' ? '125px' : '320px')};
  border-radius: ${(props) => (props?.direction === 'column' ? '5px' : '10px')};
  background: ${({ theme }) => theme.background};
  box-shadow: 7px 5px 4px 0 rgb(0 0 0 / 28%);
  margin: 1%;
  cursor: pointer;

  @media (max-width: 768px) {
    min-height: ${(props) => (props?.direction === 'column' ? '155px' : '320px')};
    max-height: ${(props) => (props?.direction === 'column' ? '155px' : '320px')};
  }
  @media (max-width: 480px) {
    min-height: ${(props) => (props?.direction === 'column' ? '100px' : '320px')};
    max-height: ${(props) => (props?.direction === 'column' ? '100px' : '320px')};
  }
  @media (min-width: 2560px) {
    min-height: ${(props) => (props?.direction === 'column' ? '170px' : '320px')};
    max-height: ${(props) => (props?.direction === 'column' ? '170px' : '320px')};
  }
`;

const DivCard = styled.div`
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.maxWidth};
  display: block;
`;

const DivColumnBtnHolderSC = styled.div`
  margin-top: 60px;
  margin-left: 5px;
  float: left;
`;

function VideoCard({ imgCover, title, description, videoId, direction }) {
  const history = useHistory();
  const location = useLocation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const { isVideoFavorite } = useIsVideoFavorite(videoId, state.favoriteVideos);

  useEffect(() => {
    setIsFavorite(isVideoFavorite);
  }, [isFavorite, isVideoFavorite]);

  useEffect(() => {
    setLoggedIn(state.isUserLoggedIn);
  }, [state.isUserLoggedIn]);

  const selectVideo = (params) => () => {
    dispatch({
      type: 'SET_VIDEO_PROPS',
      payload: {
        status: false,
        videoProps: params,
      },
    });
    if (location.pathname.includes('Favorites')) {
      history.push(`/Favorites/${params.videoId}`);
    } else {
      history.push(`/video/${params.videoId}`);
    }
  };

  const trim = (content) => {
    return content.length > 170 ? `${content.substring(0, 170)}...` : content;
  };

  return (
    <Card
      direction={direction}
      id={videoId}
      onClick={selectVideo({ title, description, videoId })}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <DivCard maxWidth={direction === 'column' ? '35%' : '320px'}>
        <VideoImg imgCover={imgCover} />
      </DivCard>
      {isVisible && direction !== 'column' && (
        <FavButton
          isFavorite={isFavorite}
          isUserLoggedIn={loggedIn}
          setIsFavorite={setIsFavorite}
          title={title ?? ''}
          description={description ?? ''}
          videoId={videoId ?? ''}
          img={imgCover ?? ''}
        />
      )}
      <DivCard maxWidth={direction === 'column' ? '65%' : '320px'}>
        <div>
          <HeaderMedium
            fixedHeight={direction === 'column' ? '100px' : '45px'}
            textAlign={direction === 'column' ? 'left' : 'center'}
          >
            {title}
          </HeaderMedium>
          {direction !== 'column' && (
            <Paragraph fixedHeight="45px" margin="12px 0px">
              {trim(description)}
            </Paragraph>
          )}
        </div>
        {isVisible && direction === 'column' && (
          <DivColumnBtnHolderSC>
            <FavButton
              isFavorite={isFavorite}
              isUserLoggedIn={loggedIn}
              setIsFavorite={setIsFavorite}
              title={title ?? ''}
              description={description ?? ''}
              videoId={videoId ?? ''}
              img={imgCover ?? ''}
            />
          </DivColumnBtnHolderSC>
        )}
      </DivCard>
    </Card>
  );
}

export default VideoCard;
