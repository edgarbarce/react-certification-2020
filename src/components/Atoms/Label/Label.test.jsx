import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './index';

describe('Test Label Component', () => {
  it('renders correct content', () => {
    render(
      <div>
        <Label htmlFor="mockInput">Test Content</Label>
        <input id="mockInput" type="text" />
      </div>
    );
    expect(screen.getByText(/Test Content/i)).toBeInTheDocument();
  });
});
