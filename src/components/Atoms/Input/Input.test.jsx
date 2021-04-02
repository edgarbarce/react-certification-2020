import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './index';

describe('Test Layout Component', () => {
  it('The attribute is correct', () => {
    render(
      <Input placeholder="Placeholder Test" name="InputTest" type="text" value="hola" />
    );
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      'Placeholder Test'
    );
  });
});
