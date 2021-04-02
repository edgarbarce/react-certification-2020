import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoList from './index';
import * as data from '../../../data/youtube-videos-mock.json';

describe('Test VideoList Component', () => {
  it('renders without crashing and all videos are shown', () => {
    render(<VideoList list={data} />);

    const allVideos = screen.getAllByRole('img', { name: /Video/i });
    expect(allVideos.length).toEqual(24);
  });
});
