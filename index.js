const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./library/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => input.length <= 3 || 'Please enter up to three characters.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hex):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex):'
    }
];

inquirer.prompt(questions).then(answers => {
    const { text, textColor, shape, shapeColor } = answers;

    let shapeInstance;
    switch (shape) {
        case 'Circle':
            shapeInstance = new Circle(shapeColor);
            break;
        case 'Triangle':
            shapeInstance = new Triangle(shapeColor);
            break;
        case 'Square':
            shapeInstance = new Square(shapeColor);
            break;
    }

    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeInstance.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
                ${text}
            </text>
        </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
}).catch(error => {
    console.error('Error:', error);
});
