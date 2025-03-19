import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders app', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const homeLink = screen.getByText(/Home/i); // Kiểm tra text trong Navbar
  expect(homeLink).toBeInTheDocument(); // Lỗi: Dư dấu )
});