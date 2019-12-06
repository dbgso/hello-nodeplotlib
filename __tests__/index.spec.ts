import { hello } from "../src/index";
describe('hello', () => {
    it('should be success', () => {
        expect(hello('World')).toBe('Hello, World!')
    })
})