import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './index';

describe('Test VideoCard Component', () => {
  it('matches snapshot', () => {
    render(<VideoCard title="Test Heading" />);
    const heading = screen.getByRole('heading', { name: /Test Heading/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toMatchInlineSnapshot(`
      <h4
        class="sc-dlfnbm iGzhYW"
      >
        Test Heading
      </h4>
    `);
  });
});
