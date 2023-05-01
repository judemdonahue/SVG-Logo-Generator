//Require modules
const { SVGBase, Square, Circle, Triangle } = require('./lib/shapes');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

//Prompt logo specs
inquirer
.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape for your logo.',
        choices: ["Square", "Circle", "Triangle"],
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Please select a color for your logo shape.',
        choices: ["Black", "White", "Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "Orange", "Purple", "Pink", "Brown", "Grey"],
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please provide text for your logo. (1 - 3 Characters)',
        validate: function(answer) {
            if (answer.length < 1) {
                return '❗Please enter valid logo text.❗';
            } if (answer.length > 3) {
                return '❗Please enter valid logo text.❗';
            }
            return true;
          }
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'Please select a color for your logo text.',
        choices: ["Black", "White", "Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "Orange", "Purple", "Pink", "Brown", "Grey"],
    },
])
.then((input) => {
    let text = input.text;
    let textColor = input.textColor;
    let shape = input.shape;
    let shapeColor = input.shapeColor;

    if (shape === "Square") {
        const square = new Square(shapeColor, text, textColor);
        const render = square.renderSquare(square.shapeColor, square.text, square.textColor);
            fs.writeFile(`./examples/${text}.svg`, render, (err) =>
            err ? console.log(err) : console.log('Successfully Rendered New SVG Logo!'));

    } else if (shape === "Circle") {
        const circle = new Circle(shapeColor, text, textColor);
        const render = circle.renderCircle(circle.shapeColor, circle.text, circle.textColor);
            fs.writeFile(`./examples/${text}.svg`, render, (err) =>
            err ? console.log(err) : console.log('Successfully Rendered New SVG Logo!'));

    } else if (shape === "Triangle") {
        const triangle = new Triangle(shapeColor, text, textColor);
        const render = triangle.renderTriangle(triangle.shapeColor, triangle.text, triangle.textColor);
            fs.writeFile(`./examples/${text}.svg`, render, (err) =>
            err ? console.log(err) : console.log('Successfully Rendered New SVG Logo!'));

    }
});
