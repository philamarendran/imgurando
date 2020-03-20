import React from 'react';
import { render } from '@testing-library/react';
import Imgurando from './Imgurando';

test('renders learn react link', () => {
  const { getByText } = render(<Imgurando />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
