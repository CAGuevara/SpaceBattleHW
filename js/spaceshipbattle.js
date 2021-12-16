class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy
    }
    attack(attacker) {
        let randomAttack = Math.random();
            // console.log(randomAttack);
        if (randomAttack < this.accuracy) {
            // console.log(randomAttack);
            // console.log(this.accuracy);
            attacker.hull -= this.firepower;
            console.log(attacker);
            console.log('Your attack was a success!')
        }
        else {
            this.hull -= attacker.firepower;
            console.log(attacker);
            console.log(this);
            console.log('Your attack failed! You got HIT')
        }
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomNumberFromInterval(min, max) {
    return (Math.random() * (max - min) + min);
}
const ussHelloWorld = new Ship(20, 5, 0.7);
// creating Alien Army
const alienArmy = [];
function creatingArmy() {
    for (let i = 0; i < 6; i++) {
        let alienHull = randomIntFromInterval(3, 6);
        let alienFirepower = randomIntFromInterval(2, 4);
        let alienAccuracy = parseFloat(randomNumberFromInterval(0.6, 0.8)).toFixed(1);
        alienArmy[i] = new Ship(alienHull, alienFirepower, alienAccuracy);
    }
}
// console.log(alienArmy);

function battle() {
    for (let i = 0; i < alienArmy.length; i++) {
        ussHelloWorld.attack(alienArmy[i]);
        while ((alienArmy[i].hull > 0) && (ussHelloWorld.hull > 0)) {
            console.log('do you want to attack again')
            // insert the if for the answer from the customer
            ussHelloWorld.attack(alienArmy[i])
        }
        console.log('checking USS Hello World');
        console.log(ussHelloWorld);
        console.log('Checking Alien Status'); 
        console.log(alienArmy[i]); 
    }
}

creatingArmy();
battle();

console.log(ussHelloWorld)
console.log(alienArmy);



