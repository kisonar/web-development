import {render, screen} from '@testing-library/react';
import App from './App';
import {suma} from './sum/sum'

test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

describe('suma function w APP test', () => {
    it('should return proper sum w APP test', () => {
        const result = suma(1, 2);
        expect(result).toBe(3)
    });
});




