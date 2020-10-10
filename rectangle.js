class Rectangle {
    constructor(a, b) {
        this.a = parseInt(a);
        this.b = parseInt(b);
    }

    isSquare() {
        return this.a === this.b;
    }

    getArea() {
        let area = (this.a)*(this.b);
        return area;
    }

    getPerimeter() {
        let perimeter = (this.a*2) + (this.b*2);
        return perimeter;
    }
}

module.exports = Rectangle;