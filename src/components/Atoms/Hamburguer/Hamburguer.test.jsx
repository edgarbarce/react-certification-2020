import React from 'react';
import { render, screen } from '@testing-library/react';
import Hamburguer from './index';

describe('Test Hamburguer Component', () => {
  it('renders image correctly', () => {
    render(<Hamburguer />);
    expect(screen.getByRole('img', { name: /Menu Icon/i })).toHaveAttribute(
      'src',
      '/menu.svg'
    );
  });
});
