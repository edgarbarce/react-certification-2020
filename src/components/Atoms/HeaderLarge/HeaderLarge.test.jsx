import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderLarge from './index';

describe('Test HeaderLarge H1 Component', () => {
  it('renders the content correctly', () => {
    render(<HeaderLarge fixedHeight="35px">Test Content</HeaderLarge>);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/^Test Content$/);

    const style = window.getComputedStyle(screen.getByRole('heading', { level: 1 }));
    expect(style.maxHeight).toBe('35px');
  });
});
