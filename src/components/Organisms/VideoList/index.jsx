import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../Atoms/Paragraph';
import VideoCard from '../VideoCard/index';

const VideoListSC = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  justify-content: center;
  text-align: ${(props) =>
    props.direction && props.direction === 'column' ? 'right' : 'center'};
`;

const EmptyListSC = styled.div`
  width: 100%;
  background: #e3363d;
  border-radius: 15px;
  margin-top: 15px;
`;

function VideoList({ videos, direction, type }) {
  const legend =
    type === 'Favorites'
      ? 'You have not added any video as favorite yet'
      : 'No Videos match the search';
  return (
    <VideoListSC direction={direction}>
      {videos &&
        videos.map((video) => {
          if (video.id.kind === 'youtube#video' && video.snippet) {
            return (
              <VideoCard
                key={video.id.videoId}
                imgCover={video?.snippet?.thumbnails?.medium.url}
                title={video?.snippet?.title}
                description={video?.snippet?.description}
                videoId={video.id.videoId}
                direction={direction}
                type={type}
              />
            );
          }
          return null;
        })}
      {(!videos || videos?.length === 0) && (
        <EmptyListSC>
          <Paragraph>{legend}</Paragraph>
        </EmptyListSC>
      )}
    </VideoListSC>
  );
}

export default VideoList;
