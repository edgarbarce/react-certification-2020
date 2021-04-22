import React from 'react';
import { screen, render } from '@testing-library/react';
import { Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AppProvider from '../../State/Provider';
import Home from './Home.page';
import * as useYoutubeApi from '../../Hooks/useYoutubeApi';
import * as useRelatedVideos from '../../Hooks/useRelatedVideos';
import * as useFetchVideo from '../../Hooks/useFetchVideo';
import * as videos from '../../data/youtube-videos-mock.json';

describe('Test the main Home functionality', () => {
  it('the videos are shown correctly', () => {
    const history = createMemoryHistory();
    history.push('/');
    const spy = jest.spyOn(useYoutubeApi, 'default');
    spy.mockReturnValue({
      videos,
      isLoading: false,
      error: false,
    });

    render(
      <AppProvider>
        <Router history={history}>
          <Home />
        </Router>
      </AppProvider>
    );
    const videosView = screen.getByText(/Video List/i);
    expect(videosView).toBeInTheDocument();
  });
  it('the video player is rendered correctly', () => {
    const history = createMemoryHistory();
    history.push('/video/id123');

    const spyYoutube = jest.spyOn(useYoutubeApi, 'default');
    spyYoutube.mockReturnValue({
      videos,
      isLoading: false,
      error: false,
    });

    const spy = jest.spyOn(useRelatedVideos, 'default');
    spy.mockReturnValue({
      relatedVideos: videos,
      relatedVideosLoading: false,
      relatedVideosError: false,
    });
    const spy2 = jest.spyOn(useFetchVideo, 'default');
    const singleVideo = videos.items[0];
    spy2.mockReturnValue({
      singleVideo,
      videoIsLoading: false,
      error: false,
    });
    const newState = {
      searchMode: false,
      searchWord: 'test',
      propsSelectedVideo: {
        title: 'Video Title',
        description: 'Description of the video',
      },
    };
    render(
      <AppProvider providedState={newState}>
        <Router history={history}>
          <Route path="/video/:id">
            <Home />
          </Route>
        </Router>
      </AppProvider>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/^Wizeline/);
    const videoDescription = screen.getByText(
      /Wizeline transforms how teams build technology/i
    );
    expect(videoDescription).toBeInTheDocument();
  });
  it('the videos are loading', () => {
    const spy = jest.spyOn(useYoutubeApi, 'default');
    spy.mockReturnValue({
      videos: {},
      isLoading: true,
      error: false,
    });

    render(
      <AppProvider>
        <Home />
      </AppProvider>
    );
    const loading = screen.getByText(/Loading/i);
    expect(loading).toBeInTheDocument();
  });
  it('shows an error because the API failed', () => {
    const spy = jest.spyOn(useYoutubeApi, 'default');
    spy.mockReturnValue({
      videos: {},
      isLoading: false,
      error: true,
    });

    render(
      <AppProvider>
        <Home />
      </AppProvider>
    );
    const error = screen.getByText(
      /There was an unexpected problem. Please refresh the page/i
    );
    expect(error).toBeInTheDocument();
  });
});
