import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CallComponent from './CallComponent';

describe('<CitiesComponent />', () => {
  test('it should mount', () => {
    render(<CallComponent />);
    
    const citiesComponent = screen.getByTestId('CallComponent');

    expect(citiesComponent).toBeInTheDocument();
  });
});