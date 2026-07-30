import {Rectangle} from "./obiekt";

describe('obiekt unit test', () => {
    it('should create obiekt', () => {
        const  rect = new Rectangle(5, 10);
        expect(rect.area()).toEqual(50);
    });
});