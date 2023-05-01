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
        return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect x="" y="" width="300" height="300" fill="${shapeColor}"/><text x="150" y="175" font-size="100" fill="${textColor}" text-anchor="middle">${text}</text></svg>`
    }
}

//Circle pulling from SVGBase
class Circle extends SVGBase {
    renderCircle = (shapeColor, text, textColor) => {
        return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="150" fill="${shapeColor}"/><text x="155" y="175" font-size="100" fill="${textColor}" text-anchor="middle">${text}</text></svg>`
    }
}

//Triangle pulling from SVGBase
class Triangle extends SVGBase {
    renderTriangle = (shapeColor, text, textColor) => {
        return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 0 300, 300 0, 300" fill="${shapeColor}"/><text x="150" y="275" font-size="115" fill="${textColor}" text-anchor="middle">${text}</text></svg>`
    }
}



module.exports = { SVGBase, Square, Circle, Triangle }