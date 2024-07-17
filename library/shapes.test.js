const {Circle, Triangle, Square} = require('./shapes');

describe('Shapes', () =>{
    test('Circle renders correclty', () =>{
        const circle = new Circle('red');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});

test('Triangle renders correctly', ()=>{
    const triangle = new Triangle('blue');
    expect(triangle.render()).toBe('polygon points="150,10 240,190 60,190" fill="blue" />');
});

test('Square renders correctly', ()=>{
    const square = new square('green');
    expect(square.render()).toBe('<rect x="70" y="20" width="160" height="160" fill="green" />');
});