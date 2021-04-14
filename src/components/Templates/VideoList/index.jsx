import React from 'react';
import styled from 'styled-components';
import VideoCard from '../../Organisms/VideoCard/index';

const VideoListSC = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  justify-content: space-around;
  text-align: ${(props) =>
    props.direction && props.direction === 'column' ? 'right' : 'center'};
`;

function VideoList({ list, direction }) {
  return (
    <VideoListSC direction={direction}>
      {list &&
        list.items.map((video) => {
          if (video.id.kind === 'youtube#video') {
            return (
              <VideoCard
                key={video.id.videoId}
                imgCover={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
                description={video.snippet.description}
                videoId={video.id.videoId}
                direction={direction}
              />
            );
          }
          return null;
        })}
      {(!list || list.items.length === 0) && (
        <span role="img" aria-label="No items">
          No Videos to show
        </span>
      )}
    </VideoListSC>
  );
}

export default VideoList;
