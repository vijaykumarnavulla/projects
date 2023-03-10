import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutUsComponent from './AboutUsComponent';

describe('<AboutUsComponent />', () => {
  test('it should mount', () => {
    render(<AboutUsComponent />);
    
    const aboutUsComponent = screen.getByTestId('AboutUsComponent');

    expect(aboutUsComponent).toBeInTheDocument();
  });
});