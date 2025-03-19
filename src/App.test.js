import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders app', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );
    const linkElement = screen.getByText(/Welcome to Hutieugo/i);
    expect(linkElement).toBeInTheDocument();
});