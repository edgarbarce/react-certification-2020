import React from 'react';
import { render, screen } from '@testing-library/react';
import AppProvider from '../../../State/Provider';

import Input from './index';

describe('Test Input Component', () => {
  it('The attribute is correct', () => {
    render(
      <AppProvider>
        <Input placeholder="Placeholder Test" name="InputTest" type="text" />
      </AppProvider>
    );
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      'Placeholder Test'
    );
  });
  it('renders the value searchWord from the provider and it is updated correctly', () => {
    render(
      <AppProvider>
        <Input placeholder="Placeholder Test" name="InputTest" type="text" />
      </AppProvider>
    );
    expect(screen.getByRole('textbox')).toHaveValue('Wizeline');
  });
});
