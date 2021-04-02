import React from 'react';
import { render, screen } from '@testing-library/react';
import NavbarLeft from './index';

describe('Test NavbarLeft Component', () => {
  it('renders the pic and the text input correctly', () => {
    render(<NavbarLeft>Test Content</NavbarLeft>);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
