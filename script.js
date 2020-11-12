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










