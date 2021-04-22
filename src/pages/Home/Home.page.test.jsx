import React from 'react';
import { screen, render } from '@testing-library/react';
import AppProvider from '../../state/Provider';
import Home from './Home.page';
import * as useYoutubeApi from '../../hooks/useYoutubeApi';
import * as videos from '../../data/youtube-videos-mock.json';

describe('Test the main Home functionality', () => {
  it('the videos are shown correctly', () => {
    const spy = jest.spyOn(useYoutubeApi, 'default');
    spy.mockReturnValue({
      videos,
      isLoading: false,
      error: false,
    });

    render(
      <AppProvider>
        <Home />
      </AppProvider>
    );
    const videosView = screen.getByText(/Video List/i);
    expect(videosView).toBeInTheDocument();
  });
  it('the video player is rendered correctly', () => {
    const spy = jest.spyOn(useYoutubeApi, 'default');
    spy.mockReturnValue({
      videos,
      isLoading: false,
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
        <Home />
      </AppProvider>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/^Video Title/);
    const videoDescription = screen.getByText(/Description of the video/i);
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
