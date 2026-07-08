import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CitiesComponent from './CitiesComponent';

describe('<CitiesComponent />', () => {
  test('it should mount', () => {
    render(<CitiesComponent />);
    
    const citiesComponent = screen.getByTestId('CitiesComponent');

    expect(citiesComponent).toBeInTheDocument();
  });
});