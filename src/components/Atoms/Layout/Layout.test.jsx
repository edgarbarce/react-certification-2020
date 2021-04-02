import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './index';

describe('Test Layout Component', () => {
  it('render correct content', () => {
    render(<Layout>Test Content</Layout>);
    expect(screen.getByRole('main')).toHaveTextContent(/^Test Content$/);
  });
});
