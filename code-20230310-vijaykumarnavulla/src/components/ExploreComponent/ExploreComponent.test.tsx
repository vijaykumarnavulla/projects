import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExploreComponent from './ExploreComponent';

describe('<ExploreComponent />', () => {
  test('it should mount', () => {
    render(<ExploreComponent />);
    
    const exploreComponent = screen.getByTestId('ExploreComponent');

    expect(exploreComponent).toBeInTheDocument();
  });
});