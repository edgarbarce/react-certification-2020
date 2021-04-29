import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import VideoList from './index';
import AppProvider from '../../../State/Provider';
import * as useIsVideoFavorite from '../../../Hooks/useIsVideoFavorite';
import * as data from '../../../data/youtube-videos-mock.json';

describe('Test VideoList Component', () => {
  it('renders without crashing and all videos are shown', () => {
    const history = createMemoryHistory();
    history.push('/video/id123');

    const spy = jest.spyOn(useIsVideoFavorite, 'default');
    spy.mockReturnValue({
      isVideoFavorite: false,
    });

    const newState = {
      favoriteVideos: [],
    };
    const videos = data.items;
    render(
      <AppProvider providedState={newState}>
        <Router history={history}>
          <VideoList videos={videos} direction="row" type="Home" />
        </Router>
      </AppProvider>
    );

    const allVideos = screen.getAllByRole('img', { name: /Video/i });
    expect(allVideos.length).toEqual(24);
  });
});
