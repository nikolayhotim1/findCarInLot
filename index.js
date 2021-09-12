'usestrict';
function findCarInLot(car) {
    for (let i = 0; i < lot.length; i++) {
        if (car === lot[i]) {
            return i;
        }
    }

    return -1;
}

let chevy = {
    make: 'Chevy',
    model: 'Bel Air'
};

let taxi = {
    make: 'Webville Motors',
    model: 'Taxi'
};

let fiat1 = {
    make: 'Fiat',
    model: '500'
};

let fiat2 = {
    make: 'Fiat',
    model: '500'
};

let fiat3 = {
    make: 'Fiat',
    model: '500'
};

let lot = [chevy, taxi, fiat1, fiat2];

let loc1 = findCarInLot(fiat2);
console.log(loc1); // 3
let loc2 = findCarInLot(taxi);
console.log(loc2); // 1
let loc3 = findCarInLot(chevy);
console.log(loc3); // 0
let loc4 = findCarInLot(fiat1);
console.log(loc4); // 2
let loc5 = findCarInLot(fiat3);
console.log(loc5); // -1
