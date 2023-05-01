//Constructors are imported
const { SVGBase, Square, Circle, Triangle } = require('./shapes');



// A testing suite for Square is created
describe('Square', () => {
    // Test created to check that renderSquare does in fact return the expected output
    describe('renderSquare', () => {
        it('should make a Magenta Square with Cyan text reading SQR', () => {
            const output = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect x="" y="" width="300" height="300" fill="Magenta"/><text x="150" y="175" font-size="100" fill="Cyan" text-anchor="middle">SQR</text></svg>`;
            const square = new Square();
            expect(square.renderSquare("Magenta", "SQR", "Cyan")).toEqual(output);
        });
    });
});

// A testing suite for Circle is created
describe('Circle', () => {
    // Test created to check that renderCircle does in fact return the expected output
    describe('renderCircle', () => {
        it('should make a Grey Circle with White text reading CIR', () => {
            const output = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="150" fill="Grey"/><text x="155" y="175" font-size="100" fill="White" text-anchor="middle">CIR</text></svg>`;
            const circle = new Circle();
            expect(circle.renderCircle("Grey", "CIR", "White")).toEqual(output);
        });
    });
});

// A testing suite for Triangle is created
describe('Triangle', () => {
    // Test created to check that renderTriangle does in fact return the expected output
    describe('renderTriangle', () => {
        it('should make a Red Triangle with Black text reading TRI', () => {
            const output = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 0 300, 300 0, 300" fill="Red"/><text x="150" y="275" font-size="115" fill="Black" text-anchor="middle">TRI</text></svg>`;
            const triangle = new Triangle();
            expect(triangle.renderTriangle("Red", "TRI", "Black")).toEqual(output);
        });
    });
});

