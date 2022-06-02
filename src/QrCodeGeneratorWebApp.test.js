import { render, screen } from '@testing-library/react';
import QrCodeGeneratorWebApp from './QrCodeGeneratorWebApp';

test('renders learn react link', () => {
  render(<QrCodeGeneratorWebApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
