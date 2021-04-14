import React, { useContext } from 'react';
import styled from 'styled-components';
import VideoImg from '../../Atoms/VideoImg';
import HeaderMedium from '../../Atoms/HeaderMedium';
import Paragraph from '../../Atoms/Paragraph';
import { AppContext } from '../../../state/Provider';

const Card = styled.div`
  display: ${(props) =>
    props.direction && props.direction === 'column' ? 'flex' : 'inline-block'};
  padding: ${(props) =>
    props.direction && props.direction === 'column' ? '4px' : '10px'};
  min-height: ${(props) =>
    props.direction && props.direction === 'column' ? '125px' : '320px'};
  max-height: ${(props) =>
    props.direction && props.direction === 'column' ? '125px' : '320px'};
  border-radius: ${(props) =>
    props.direction && props.direction === 'column' ? '5px' : '10px'};
  box-shadow: 7px 5px 4px 0 rgb(0 0 0 / 28%);
  background: ${({ theme }) => theme.background};
  margin: 1%;
  cursor: pointer;
  @media (max-width: 768px) {
    min-height: ${(props) =>
      props.direction && props.direction === 'column' ? '155px' : '320px'};
    max-height: ${(props) =>
      props.direction && props.direction === 'column' ? '155px' : '320px'};
  }
  @media (max-width: 480px) {
    min-height: ${(props) =>
      props.direction && props.direction === 'column' ? '100px' : '320px'};
    max-height: ${(props) =>
      props.direction && props.direction === 'column' ? '100px' : '320px'};
  }
  @media (min-width: 2560px) {
    min-height: ${(props) =>
      props.direction && props.direction === 'column' ? '170px' : '320px'};
    max-height: ${(props) =>
      props.direction && props.direction === 'column' ? '170px' : '320px'};
  }
`;

const DivCard = styled.div`
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.maxWidth};
`;

function VideoCard({ imgCover, title, description, videoId, direction }) {
  const { dispatch } = useContext(AppContext);

  const selectVideo = (params) => () => {
    dispatch({
      type: 'SET_VIDEO_PROPS',
      payload: {
        status: false,
        videoProps: params,
      },
    });
  };

  const content =
    direction && direction === 'column' ? (
      <Card
        direction={direction}
        id={videoId}
        onClick={selectVideo({ title, description, videoId })}
      >
        <DivCard maxWidth="35%">
          <VideoImg imgCover={imgCover} />
        </DivCard>
        <DivCard maxWidth="65%">
          <HeaderMedium fontWeight="400" textAlign="left">
            {title}
          </HeaderMedium>
        </DivCard>
      </Card>
    ) : (
      <Card
        direction={direction}
        id={videoId}
        onClick={selectVideo({ title, description, videoId })}
      >
        <DivCard maxWidth="320px">
          <VideoImg imgCover={imgCover} />
        </DivCard>
        <DivCard maxWidth="320px">
          <HeaderMedium fixedHeight="45px">{title}</HeaderMedium>
          <Paragraph fixedHeight="45px" margin="12px 0px">
            {description}
          </Paragraph>
        </DivCard>
      </Card>
    );
  return content;
}

export default VideoCard;
