import React from 'react';
import styled from 'styled-components';

const VideoImgSC = styled.img`
  max-width: 100%;
  height: auto;
`;

const VideoImg = ({ imgCover }) => <VideoImgSC src={imgCover} alt="Video" />;

export default VideoImg;
