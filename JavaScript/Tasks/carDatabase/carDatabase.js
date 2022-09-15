var cars = [{
        carProducer: 'japan',
        carModel: 'toyota',
        carAge: 2019,
        carColor: 'red',
        carSold: true
    },
    {
        carProducer: 'germany',
        carModel: 'mersedes',
        carAge: 2018,
        carColor: 'black',
        carSold: false
    },
    {
        carProducer: 'germany',
        carModel: 'bmv',
        carAge: 2020,
        carColor: 'purple',
        carSold: true
    },
    {
        carProducer: 'korea',
        carModel: 'kia',
        carAge: 2022,
        carColor: 'red',
        carSold: false
    },
    {
        carProducer: 'russia',
        carModel: 'lada',
        carAge: 2009,
        carColor: 'blue',
        carSold: false
    }
];
for (let char of cars) {
    if (!char.carSold)
        console.log(char);
}