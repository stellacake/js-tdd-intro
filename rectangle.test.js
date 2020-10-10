const assert = require('assert');
const Rectangle = require('./rectangle');

describe('Rectangle.isSquare', () => {
    it('tells if the rectangle is square', () => {
        assert.ok((3, 3), "true");
        assert.ok((3, 4), "false");
    });
});

describe('Rectangle.getArea', () => {
    it('caculates area', () => {
        const rectA = new Rectangle (13, 7);
        assert.strictEqual(rectA.getArea(), 91);
    });
});

describe('Rectangle.getPerimeter', () => {
    it('calculates perimeter', () => {
        const rectB = new Rectangle (13, 7);
        assert.strictEqual(rectB.getPerimeter(), 40);
    });
});
