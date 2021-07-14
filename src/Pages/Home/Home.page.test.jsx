import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AppProvider from '../../State/Provider';
import Home from './Home.page';
import * as useYoutubeApi from '../../Hooks/useYoutubeApi';
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
