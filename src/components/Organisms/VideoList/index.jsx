import React from 'react';
import styled from 'styled-components';
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
  width: 80%;
  background: #e3363d;
  color: white;
`;

function VideoList({ videos, direction, type }) {
  const legend =
    type === 'Favorites'
      ? 'You haven not added any video as favorite yet'
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
          <p>{legend}</p>
        </EmptyListSC>
      )}
    </VideoListSC>
  );
}

export default VideoList;
