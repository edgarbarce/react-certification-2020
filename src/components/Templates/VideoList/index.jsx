import React from 'react';
import styled from 'styled-components';
import VideoCard from '../../Organisms/VideoCard/index';

const VideoListSC = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  text-align: center;
`;

function VideoList({ list }) {
  return (
    <VideoListSC>
      {list.default.items.map((video) => {
        if (video.id.kind === 'youtube#video') {
          return (
            <VideoCard
              key={video.id.videoId}
              imgCover={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
              description={video.snippet.description}
            />
          );
        }
        return null;
      })}
    </VideoListSC>
  );
}

export default VideoList;
