import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import VideoCard from './index';

describe('Test VideoCard Component', () => {
  it('matches snapshot', () => {
    const history = createMemoryHistory();
    history.push('/video/id123');
    render(
      <Router history={history}>
        <VideoCard
          title="Test Video Title"
          imgCover="test.png"
          description="description"
          videoId="video123"
          direction="column"
        />
      </Router>
    );
    const heading = screen.getByRole('heading', { name: /Test Video Title/i });

    const img = screen.getByRole('img', { src: 'test.png' });

    expect(img).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(heading).toMatchInlineSnapshot(`
      <h3
        class="sc-gsTCUz lcGkDj"
        font-weight="400"
      >
        Test Video Title
      </h3>
    `);
  });
});
