import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './index';
import * as videos from '../../data/youtube-videos-mock.json';

describe('Test App', () => {
  it('Enable the dark mode and then go back to the ligth mode', () => {
    render(<App />);
    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    let navbar = screen.getByRole('navigation');
    let styleNav = window.getComputedStyle(navbar);
    expect(styleNav.backgroundColor).toBe('rgb(16, 16, 16)');
    fireEvent.click(toggle);
    navbar = screen.getByRole('navigation');
    styleNav = window.getComputedStyle(navbar);
    expect(styleNav.backgroundColor).toBe('rgb(0, 174, 191)');
  });

  it('Select a video to go to view mode and search a video again to back to search mode', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(videos),
      });
    });
    await act(async () => {
      render(<App />);
    });

    // Check that the quantity of videos rendered is correct
    const listVideos = screen.getAllByRole('img', { name: /Video/i });
    expect(listVideos.length).toBe(24);

    // Select the first video and go to view mode
    fireEvent.click(listVideos[0]);
    const heading = screen.getByRole('heading', {
      name: /Video Tour | Welcome to Wizeline Guadalajara/i,
      level: 1,
    });
    expect(heading).toBeInTheDocument();

    // Search a new term and go back to the search mode
    await act(async () => {
      const searchBar = screen.getByRole('textbox');
      fireEvent.change(searchBar, { target: { value: 'Muse' } });
      fireEvent.keyDown(searchBar, { key: 'Enter', code: 'Enter' });
    });
    const searchModeTitle = screen.getByRole('heading', {
      name: /Video List/i,
      level: 1,
    });
    expect(searchModeTitle).toBeInTheDocument();
  });
});
