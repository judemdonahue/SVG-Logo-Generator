//Shape dimensions page

//base constructor class
class SVGBase {
    constructor (shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
}

//Square pulling from SVGBase
class Square extends SVGBase {
    renderSquare = (shapeColor, text, textColor) => {
        return `
        <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">

        <text x="10" y="10" fill="${textColor}" text-anchor="middle" >${text}</text>

        <rect x="10" y="10" width="30" height="30" fill="${shapeColor}" />

        </svg>
        `
    }
}

//Circle pulling from SVGBase
class Circle extends SVGBase {
    renderCircle = (shapeColor, text, textColor) => {
        return `
        <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">

        <text x="10" y="10" fill="${textColor}" text-anchor="middle" >${text}</text>

        <circle cx="25" cy="75" r="20" fill="${shapeColor}" />
        
        </svg>
        `
    }
}

//Triangle pulling from SVGBase
class Triangle extends SVGBase {
    renderTriangle = (shapeColor, text, textColor) => {
        return `
        <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        
        <text x="10" y="10" fill="${textColor}" text-anchor="middle" >${text}</text>

        <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
        
        </svg>
        `
    }
}

module.exports = { SVGBase, Square, Circle, Triangle }