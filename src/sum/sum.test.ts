import {mySubstract, suma} from "./sum";


describe('suma function', () => {
    it('should return proper sum', () => {
        const result = suma(1,2);
        expect(result).toBe(3)
    });
});

describe('roznica function', () => {
    it('should return proper roznica', () => {
        const result = mySubstract(4,2);
        expect(result).toBe(2)
    });
});