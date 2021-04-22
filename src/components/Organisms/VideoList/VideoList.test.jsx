import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import VideoList from './index';
import * as data from '../../../data/youtube-videos-mock.json';

describe('Test VideoList Component', () => {
  it('renders without crashing and all videos are shown', () => {
    const history = createMemoryHistory();
    history.push('/video/id123');

    const videos = data.items;
    render(
      <Router history={history}>
        <VideoList videos={videos} direction="row" type="Home" />
      </Router>
    );

    const allVideos = screen.getAllByRole('img', { name: /Video/i });
    expect(allVideos.length).toEqual(24);
  });
});
