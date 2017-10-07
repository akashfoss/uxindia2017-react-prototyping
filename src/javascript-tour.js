// ------- Variables --------

let a = 'apple';
const count = 100;

let conference = {
    name: 'UX India',
    year: 2017,
    venue: 'Bengaluru'
};

let birds = [
    'sparrow',
    'eagle',
    'peacock',
    'hummingbird'
];


let shoppingList = [
    { name: 'Cheese', count: 1 },
    { name: 'Milk', count: 1 },
    { name: 'Cucumber', count: 2 },
];

// ------- Conditionals --------
const color = a === 'apple' ? 'red' : 'green';

if (a === 'apple') {
    // ok its an apple
} else {
    // some other fruit
}

// ------- Loops --------

for (let x = 0; x < 10; x++) {
    console.log('I will not write on the wall again.');
}

let morning = true;
while (morning) {
    // show the sun
}

// ------- Functions --------

function makePizza() {
    const config = {
        flavor: 'Hearty Veggies',
        base: 'Deep Dish',
        size: 12,
        sauce: 'normal',
        wellDone: true
    };

    applyConfig(config);

    notifyDone('Pizza Ready!');
}

function applyConfig(config) {
    // Use the config and prepare the pizza
}

function notifyDone(msg) {
    console.log(msg);
}

//---
function make5Rectangles() {
    return [0, 1, 2, 3, 4], map(y => {
        return (
            <Rect x={0} y={100 + y * 10} />
        );
    })
}

const onOkButtonClick = () => {
    console.log('Ok great!');
};


// ------- Classes --------

class ColorBar extends React.Component {
    static defaultProps = {
        color: 'red'
    };

    state = {
        currentValue: 'blue'
    };

    constructor(props) {
        super(props)
    }

    render() {

    }

    componentDidMount() {

    }
}


// ------- Modules --------

// constants.js
export default constants = {
    apiURL: 'http://localhost:3000',
    token: '1fafsr23fasdf'
};

export function log() { }

// service.js
import constants, { log } from './constants';

log(constants)