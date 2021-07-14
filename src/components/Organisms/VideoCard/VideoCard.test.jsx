import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import VideoCard from './index';
import AppProvider from '../../../State/Provider';

const localStorageMock = {
  getItem: jest.fn(() => []),
  setItem: jest.fn(),
};
global.localStorage = localStorageMock;

describe('Test VideoCard Component', () => {
  it('when user is logged in and onEnter video is not favorite before click', async () => {
    const history = createMemoryHistory();
    history.push('/video/id123');

    const newState = {
      favoriteVideos: [],
      isUserLoggedIn: true,
    };

    render(
      <AppProvider providedState={newState}>
        <Router history={history}>
          <VideoCard
            title="Test Video Title"
            imgCover="test.png"
            description="description"
            videoId="video123"
            direction="column"
          />
        </Router>
      </AppProvider>
    );
    const heading = screen.getByRole('heading', { name: /Test Video Title/i });
    const img = screen.getByRole('img', { src: 'test.png' });
    expect(img).toBeInTheDocument();
    expect(heading).toBeInTheDocument();

    fireEvent.mouseEnter(img);
    const button = screen.getByText(/Add to favorites/i);
    expect(button).toBeInTheDocument();
    expect(heading).toMatchInlineSnapshot(`
      <h3
        class="sc-gsTCUz jRa-dXZ"
      >
        Test Video Title
      </h3>
    `);

    await act(async () => {
      fireEvent.click(button);
    });
    const buttonRemove = screen.getByText(/Remove from favorites/i);
    expect(buttonRemove).toBeInTheDocument();
  });
});
