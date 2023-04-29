//Require modules
const { Shape } = require('./lib/shapes');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

//Prompt logo specs
inquirer
.prompt([
    {
        type: input,
        name: text,
        message: "Please provide text for your logo. (1 - 4 Characters)",
        validate: function(answer) {
            if (answer.length < 1) {
                return '❗Please enter valid logo text.❗';
            } if (answer.length > 4) {
                return '❗Please enter valid logo text.❗';
            }
            return true;
          }
    },
    {
        type: list,
        name: textColor,
        message: "Please select a color for your logo text.",
        choices: ["Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "Black", "White"],
    },
    {
        type: list,
        name: shape,
        message: "Please select a shape for your logo.",
        choices: ["Square", "Circle", "Triangle"],
    },
    {
        type: list,
        name: shapeColor,
        message: "Please select a color for your logo shape.",
        choices: ["Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "Black", "White"],
    },
])






















// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered