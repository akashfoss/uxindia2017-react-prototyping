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

    notifyDone('Pizza Ready!');
}

function notifyDone(msg) {
    console.log(msg);
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

export default constants = {
    apiURL: 'http://localhost:3000',
    token: '1fafsr23fasdf'
};