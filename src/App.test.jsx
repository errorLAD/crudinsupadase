import { render, screen } from '@testing-library/react';
import App from './App';

test('render learn reacft link', () => {
    render(<APP />);
    const linkElement = screen.getByText(/learn react/i);
    expact(linkElement).toBeInTheDocument();
})