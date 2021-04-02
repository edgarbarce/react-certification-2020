import React from 'react';
import { render, screen } from '@testing-library/react';
import Pic from './index';

describe('Test Pic Component', () => {
  it('renders default image', () => {
    render(<Pic />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', '/profile.svg');
  });

  it('renders img passed in the props', () => {
    render(<Pic imgSrc="/anotherSource/test.png" />);
    expect(screen.getByRole('img')).toHaveAttribute('src', '/anotherSource/test.png');
  });
});
