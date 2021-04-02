import React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from './index';

describe('Test Paragraph Component', () => {
  it('render correct content', () => {
    render(<Paragraph>Test Content</Paragraph>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
