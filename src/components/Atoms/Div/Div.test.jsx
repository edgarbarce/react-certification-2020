import React from 'react';
import { render, screen } from '@testing-library/react';
import Div from './index';

describe('Test Div Component', () => {
  it('renders the div and the content correctly', () => {
    render(<Div>Test Content</Div>);
    expect(screen.getByText(/^Test Content$/)).toBeInTheDocument();
  });
});
