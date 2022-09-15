var color1 = "red";
var color2 = "orange";
var color3 = "yellow";
var color4 = "green";
var color5 = "blue";
var color6 = "indigo";
var color7 = "purple";

var rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

console.log(rainbowColors[3]);
rainbowColors[0] = "brown";


rainbowColors[rainbowColors.length] = "dark blue";
console.log(rainbowColors);

var emptyArray = [];
var emptyArrayNew = new Array();

var numbers = [1, 2, 3, 4];
console.log(numbers);

var anyItems = [1, "hi", true];
console.log(anyItems);







/////////////////////////////////////////////////////////
// Method

// push/pop
// unshift/shift
// indexOf
// slice






var names = ["john", 'jane', 'jack', 'jim'];
console.log(names);

//push
var x = names.push("jeen");
x = names.push("ivan");
console.log(names);
console.log(x);

//pop
var y = names.pop();
console.log(names);
console.log(y);


//unshift
x = names.unshift("irene");
console.log(names);
console.log(x);

//shift
names.shift();
console.log(names);

//indexOf
console.log(names.indexOf("jim"));

//slice
var cars = ["honda", 'kia', 'peugeot', 'mercedes', 'opel', 'toyota'];
var germanCars = cars.slice(2, 4);
console.log(germanCars);



////////////////////////////////////////////////////

//Object
// var carToyota = ['camry', 2010, 'seda', 'black', true];
// console.log(carToyota[2]);
var carToyota = {
    model: 'Camry',
    year: 2010,
    carBody: 'sedan',
    color: 'black',
    hasAirbag: true
};
console.log(carToyota["carBody"]);
console.log(carToyota.hasAirbag);
console.log(carToyota.color);

carToyota.color = "red";
console.log(carToyota.color);
console.log(carToyota.year += 2);

/////////
var carMazda = {};
carMazda.year = 2014;
carMazda.model = 'crossover';
carMazda.carBody = 'cx7';
console.log(carMazda);

///////////
var carOpel = new Object();
carOpel.year = 2014;
carOpel.model = 'opel';
carOpel.carBody = 'cx7';
console.log(carOpel);

//////////////////////////////////////////////////////////////////////////////////////

var colors = ['red', 'orange', 'yellow'];
var personJack = {
    firstName: 'Jack',
    lastName: 'brown',
    age: 24,
    isMarried: true,
    pets: ['cat', 'dog', 'snake']
}

var numbers2 = [
    [1, 2, 3],
    [4, 5, 4],
    [6, 4, 45, 3]
];
console.log(numbers2[1][2]);
console.log(personJack.pets[2]);

var sellers = [{
        firstName: 'Peter',
        secondName: 'goodman',
        regDate: '03,10,2019',
        hadDiscount: false,
        age: 33,
        cars: [{
            carProducer: 'mersedes',
            carModel: 'opel'
        }]
    },
    {
        firstName: 'John',
        secondName: 'badman',
        regDate: '03,10,2019',
        hadDiscount: false,
        age: 55
    }
]