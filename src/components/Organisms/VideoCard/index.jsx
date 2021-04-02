import React from 'react';
import styled from 'styled-components';
import Div from '../../Atoms/Div';
import VideoImg from '../../Atoms/VideoImg';
import HeaderMedium from '../../Atoms/HeaderMedium';
import Paragraph from '../../Atoms/Paragraph';

const Card = styled.div`
  display: inline-block;
  min-height: 350px;
  max-height: 350px;
  background-color: white;
  margin: 1%;
`;

function VideoCard({ imgCover, title, description }) {
  return (
    <Card>
      <Div maxWidth="320px">
        <VideoImg imgCover={imgCover} />
      </Div>
      <Div maxWidth="320px">
        <HeaderMedium fixedHeight="20px">{title}</HeaderMedium>
        <Paragraph fixedHeight="20px">{description}</Paragraph>
      </Div>
    </Card>
  );
}

export default VideoCard;
