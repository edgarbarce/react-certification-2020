import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import VideoPlayer from '../../Organisms/VideoPlayer';
import VideoList from '../../Organisms/VideoList';
import useRelatedVideos from '../../../Hooks/useRelatedVideos';
import useFetchVideo from '../../../Hooks/useFetchVideo';
import WithLayoutComponentLoading from '../../../Helpers/WithComponentLoading';

const VideoPlayerWithLayoutComponentLoading = WithLayoutComponentLoading(VideoPlayer);

const VideoDetailSC = styled.div`
  display: flex;
  margin-top: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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

function VideoDetails({ favVideos, type = 'Home' }) {
  const { id } = useParams();
  const { singleVideo, videoIsLoading, error } = useFetchVideo(id);
  const { relatedVideos, relatedVideosLoading, relatedVideosError } = useRelatedVideos(
    id,
    favVideos,
    type
  );
  const videos = type === 'Favorites' ? relatedVideos : relatedVideos?.items;
  return (
    <VideoDetailSC>
      <VideoPlayerWithLayoutComponentLoading
        isLoading={videoIsLoading}
        hasError={error}
        snippet={singleVideo}
      />
      <RelatedVideosSC>
        <VideoList
          videos={videos}
          isLoading={relatedVideosLoading}
          hasError={relatedVideosError}
          direction="column"
          type={type}
        />
      </RelatedVideosSC>
    </VideoDetailSC>
  );
}

export default VideoDetails;
