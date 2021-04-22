import React, { useContext } from 'react';
import styled from 'styled-components';
import Div from '../../Atoms/Div';
import VideoImg from '../../Atoms/VideoImg';
import HeaderMedium from '../../Atoms/HeaderMedium';
import Paragraph from '../../Atoms/Paragraph';
import { AppContext } from '../../../state/Provider';

const Card = styled.div`
  display: ${(props) =>
    props.direction && props.direction === 'column' ? 'flex' : 'inline-block'};
  padding: ${(props) =>
    props.direction && props.direction === 'column' ? '10px' : '2px'};
  min-height: ${(props) =>
    props.direction && props.direction === 'column' ? '100px' : '320px'};
  max-height: ${(props) =>
    props.direction && props.direction === 'column' ? '100px' : '320px'};
  background-color: white;
  margin: 1%;
  cursor: pointer;
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
        <Div maxWidth="40%">
          <VideoImg imgCover={imgCover} />
        </Div>
        <Div maxWidth="60%">
          <HeaderMedium fixedHeight="5px" fontWeight="400" textAlign="left">
            {title}
          </HeaderMedium>
        </Div>
      </Card>
    ) : (
      <Card
        direction={direction}
        id={videoId}
        onClick={selectVideo({ title, description, videoId })}
      >
        <Div maxWidth="320px">
          <VideoImg imgCover={imgCover} />
        </Div>
        <Div maxWidth="320px">
          <HeaderMedium fixedHeight="35px">{title}</HeaderMedium>
          <Paragraph fixedHeight="40px" margin="12px 0px">
            {description}
          </Paragraph>
        </Div>
      </Card>
    );
  return content;
}

export default VideoCard;
