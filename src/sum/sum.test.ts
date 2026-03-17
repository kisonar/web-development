import { suma } from "./sum";


describe('suma function', () => {
    it('should return proper sum', () => {
        const result = suma(1,2);
        expect(result).toBe(3)
    });
});