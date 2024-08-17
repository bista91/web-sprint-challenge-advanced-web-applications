import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // This import should match the setupTests.js import
import Spinner from './Spinner';

describe('Spinner Component', () => {
  test('renders spinner when `on` prop is true', () => {
    render(<Spinner on={true} />);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  test('does not render spinner when `on` prop is false', () => {
    render(<Spinner on={false} />);
    expect(screen.queryByText('Please wait...')).not.toBeInTheDocument();
  });
});