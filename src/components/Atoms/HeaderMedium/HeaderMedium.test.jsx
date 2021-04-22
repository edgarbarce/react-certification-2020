import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderMedium from '.';

describe('Test HeaderMedium H4 Component', () => {
  it('renders the content correctly', () => {
    render(<HeaderMedium fixedHeight="35px">Test Content</HeaderMedium>);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(/^Test Content$/);

    const style = window.getComputedStyle(screen.getByRole('heading', { level: 3 }));
    expect(style.maxHeight).toBe('35px');
  });
});
