import React from 'react';
import { render, screen } from '@testing-library/react';
import AppProvider from '../../../state/Provider';
import NavbarLeft from './index';

describe('Test NavbarLeft Component', () => {
  it('renders the pic and the text input correctly', () => {
    render(
      <AppProvider>
        <NavbarLeft>Test Content</NavbarLeft>
      </AppProvider>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
