import React from 'react';
import styled from 'styled-components';
import HeaderLarge from '../../Atoms/HeaderLarge';
import Paragraph from '../../Atoms/Paragraph';

const VideoDetailSC = styled.div`
  display: flex;
  margin-top: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PlayerWrapperSC = styled.div`
  display: inline;
  flex: 8;
`;

const RelatedVideosSC = styled.div`
  display: inline;
  flex: 4;
  height: 92vh;
  overflow: scroll;
  overflow-x: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 40vh;
  }
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
function VideoDetails({ children, videoProps }) {
  return (
    <VideoDetailSC>
      <PlayerWrapperSC>
        <IframePlayer
          id="player"
          type="text/html"
          title={videoProps.title}
          src={`https://youtube.com/embed/${videoProps.videoId}?autoplay=0`}
        />
        <InfoWrapperSC>
          <HeaderLarge textAlign="left" margin="0px 5px">
            {videoProps.title}
          </HeaderLarge>
          <Paragraph textAlign="left" fontSize="14px" margin="0px 5px">
            {videoProps.description}
          </Paragraph>
        </InfoWrapperSC>
      </PlayerWrapperSC>
      <RelatedVideosSC>{children}</RelatedVideosSC>
    </VideoDetailSC>
  );
}

export default VideoDetails;
