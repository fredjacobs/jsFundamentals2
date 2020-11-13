'use strict';

function logger(){
    console.log("Function Call");
}

logger();

//Function Declaration & Expressions

//Declaration

function myFunction(){
    //Function Body
}



//Expression

const theVar = function(){ /*Function Body*/ }


//Arrow Functions

const calcAge = birthYear => 2037 - birthYear;

const getAge = calcAge(1991);

console.log(getAge);



/* const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return retirement;
}
 */

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    if( retirement > 0){
        console.log(`${firstName} will retire in ${retirement} years`)
        return retirement;
    } else{
        console.log(`${firstName} is already retired`);
        return -1;

    }

    
}
console.log(yearsUntilRetirement(1950, 'Fred'));


//Functions calling functions

//Coding Challenge

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const doubleAvg = avgScore => avgScore * 2;

function checkWinner( avgDolphins, avgKoalas ){

    const doubleDolphinAvg = doubleAvg(avgDolphins);
    const doubleKoalaAvg = doubleAvg(avgKoalas);

    if( avgDolphins >= doubleKoalaAvg ){
         return `Dolphins win : ${avgDolphins} - ${avgKoalas}`;
    } else if(avgKoalas >= doubleDolphinAvg) {
        return `Koalas Win: ${avgKoalas} - ${avgDolphins}`;
    } else {
        return `No winner`;
    }

}



let avgDolphinScore = calcAverage(85,54,41);
let avgKoalaScore = calcAverage(23, 34, 27);

console.log(checkWinner(avgDolphinScore, avgKoalaScore));

avgDolphinScore = calcAverage(44,23,71);
avgKoalaScore = calcAverage(65, 54, 49);

console.log(checkWinner(avgDolphinScore, avgKoalaScore));



//Arrays

const friends = ['John', 'Andy', 'Peter'];

const years = new Array(1991, 2001, 3001);

const fred = ['Fred', 'Jacobs', 2020 - 1974, friends];

console.log(fred);

friends.push('Ian');

friends.unshift('Jimmy');

friends.pop();

friends.shift();

friends.indexOf('Andy');

friends.includes('John');


//Coding Challenge

const bills = [125, 555, 44];
const tipValues = [];

// const tipCalc = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

function tipCalc(bill){

    
    let tip;

    tip =  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

    tipValues.push(tip);

    return tip + bill;;
}

console.log(tipCalc(bills[0]));
console.log(tipCalc(bills[1]));
console.log(tipCalc(bills[2]));

console.log(tipValues);

//Objects

const fredObj = {
    name: 'Fred',
    lastName: 'Jacobs',
    age: 2020-1974,
    job:'developer',
    friends: ['James','Jim', 'Jonas'],
    message: function(){console.log('Hello')}
}

console.log();
fredObj.message();

const info = prompt('Choose the info you want from: lastName, name, age, job and friends');
console.log(info);

if (fredObj[info]){

    console.log(fredObj[info]);

} else {

    console.log('Wrong request');

}

//Add properties to object

fredObj.location = 'South Africa';
fredObj['color'] = 'Green';

console.log(fredObj.location);

console.log(`${fredObj.name} has ${fredObj.friends.length} 
friends and his best friend is called ${fredObj['friends'][0]}`);



const jim = {
    name: 'Jim',
    lastName: 'Morrison',
    birthYear: 1974,
    job:'developer',
    friends: ['James','Jim', 'Jonas'],
    calcAge: function(){

        this.age = 2020 - this.birthYear;
        return this.age;
    },
    hasLicense: true,
    getSummary: function (){
        return `${this.name} is a ${this.calcAge()} year old ${this.job} 
        and he has ${this.hasLicense ? 'got' : 'not got'} a license`;
    }
}

console.log(jim.calcAge());


console.log(jim.getSummary());

// Coding Challenge 3

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass:78,
    height:1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
    
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass:92,
    height:1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
    
}

console.log(john.calcBMI());
console.log(mark.calcBMI());

console.log(john, mark);

function logResult(){

    if(mark.bmi > john.bmi){
        return `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is 
        higher than ${john.firstName} ${john.lastName}'s BMI (${john.bmi})`;
    } else {
        return `${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is 
        higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi})`;
    }
}

console.log(logResult());

//LOOP

for(let i = 0; i <= 10; i++){
    console.log(`Number ${i}`);
}


const person = [
    'Person',
    'Surname',
    2037 - 2000,
    'developer',
    ['John', 'Fred', 'Harry'],
    true
];

const types = [];

for(let i = 0;i < person.length;i++){

    console.log(person[i]);

    types.push(typeof person[i]);
}

console.log(types);

const birthYears = [1990, 2000, 2020, 1974];
const ages = [];

for(let i = 0; i < birthYears.length; i++){

    ages.push(2020 - birthYears[i]);
}

console.log(ages);

//Continue statement
//Break statement

console.log('Only Strings');
console.log('-------------');

for(let i = 0; i < person.length; i++){
    
    if(typeof person[i] !== 'string') continue; //continue

    console.log(person[i], typeof person[i]);
}

console.log('Exit on Number');
console.log('-------------');
for(let i = 0; i < person.length; i++){
    
    if(typeof person[i] === 'number') break; //break

    console.log(person[i], typeof person[i]);
}















