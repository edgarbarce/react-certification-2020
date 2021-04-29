import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AppProvider from '../../State/Provider';
import Favorites from './Favorites.page';
import * as useFavoriteVideos from '../../Hooks/useFavoriteVideos';
import * as videos from '../../data/youtube-videos-mock.json';

describe('Test the main Favorites functionality', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('the videos are shown correctly', () => {
    const history = createMemoryHistory();
    history.push('/Favorites');
    const spy = jest.spyOn(useFavoriteVideos, 'default');
    spy.mockReturnValue({
      videos: videos.default.items,
      isLoading: false,
      error: false,
    });

    const newState = {
      favoriteVideos: [],
    };

    render(
      <AppProvider providedState={newState}>
        <Router history={history}>
          <Favorites />
        </Router>
      </AppProvider>
    );
    const videosView = screen.getByText(/My Favorite Videos/i);
    expect(videosView).toBeInTheDocument();
  });
  it('the videos are loading', () => {
    const spy = jest.spyOn(useFavoriteVideos, 'default');
    spy.mockReturnValue({
      videos: {},
      isLoading: true,
      error: false,
    });

    render(
      <AppProvider>
        <Favorites />
      </AppProvider>
    );
    const loading = screen.getByText(/Loading/i);
    expect(loading).toBeInTheDocument();
  });
  it('shows an error because the API failed', () => {
    const spy = jest.spyOn(useFavoriteVideos, 'default');
    spy.mockReturnValue({
      videos: {},
      isLoading: false,
      error: true,
    });

    render(
      <AppProvider>
        <Favorites />
      </AppProvider>
    );
    const error = screen.getByText(
      /There was an unexpected problem. Please refresh the page/i
    );
    expect(error).toBeInTheDocument();
  });
  it('test custom hook on component wiht no favorite videos not added yet', () => {
    jest.restoreAllMocks();
    const history = createMemoryHistory();
    history.push('/Favorites');

    // eslint-disable-next-line no-proto
    window.localStorage.__proto__.getItem = jest.fn(() => {});
    const newState = {
      favoriteVideos: [],
    };

    render(
      <AppProvider providedState={newState}>
        <Router history={history}>
          <Favorites />
        </Router>
      </AppProvider>
    );
    const videosView = screen.getByText(/My Favorite Videos/i);
    expect(videosView).toBeInTheDocument();

    const favoriteVideosNotFound = screen.getByText(
      /You have not added any video as favorite yet/i
    );
    expect(favoriteVideosNotFound).toBeInTheDocument();
  });
});
