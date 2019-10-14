/* what is functional programing? 
    a programing style - lots of array methods 
    its about breaking up your code - thinking in terms of action 
    passing functions to functions -
    abserbaval reacting programing----
    pure functions that don't have any side effects

--fundamentals of functional programing--

*/

//objects and arrays
const person = {}
person.name = 'Mrs. white';
// console.log(person.name) // evaluate to a string that says Mrs. white;
let mrs = person.name; // it will look in memory and return the person.name value
console.log(mrs)
person.name = 'Mr. White';
console.log(person.name) 
// primitive value : string, number, boolean, null, symbol, undefined - anything thats not an object gets pass by value
// storing a value by reference - object
const personOne = [];
person.name = 'Mrs. White';
console.log(personOne)
console.log(typeof personOne === 'array')// false - arrays are object in JS
console.log(Array.isArray(personOne)) // to check if an array is actually an array\
personOne[0] = mrs;
console.log(personOne);
let x = 'x';
personOne[x]  = 'she is guilty';
console.dir(personOne)
for(let i = 0; i < personOne.length; ++i) {
    console.log(personOne[i]);
}

/* ES6 destructuring */
// the target : where you asin the variables - left value
// the source : where the obj goes - right object
let age;
function names(){
    return ['paul', 'perez',36];
}

//arrays : 
let [firstName, lastName] = names();
[,,age]= names();

console.log(firstName, lastName)
console.log(age)

//objects :
let obj = {
    type: 'car',
    brand : 'bmw'
}

let {type, brand} = obj; // the names have to match 
console.log(type, brand);

let {name, room, weapon} = {name: 'Rusty', room:'Kitchen', weapon:'CandleStick'};
console.log(name, room, weapon)

let game = {
    'gameOfLife': [
        {
            weapons: ['rock', 'lamp', 'mic'],
            transportation: 'train',
            characters : {
                good : 'superHero',
                bad : 'vilange'
            }
        },
        {
            weapons: ['hammer', 'tire', 'fork'],
            transportation: 'bus',
            characters : {
                good : 'Batman',
                bad : 'Joker'
            }
        }
    ]
};
console.log(`---------------`);

function show(){
    return game['gameOfLife'].map(el =>{
    console.log('map loop', el)
    return el.weapons;
    }).filter(e => {
        console.log('filter loop', e)
        if(e.includes('fork')) {
            console.log('found it')
           return e
        }
        console.log('next time')
    });
}
console.log(show(game))
console.log(`==========`)
function getClasses() {
 let x = document.getElementsByTagName('section');
 console.log('from section tag', x)
 let [a,...c] = x[0].classList; // skips the two css class 
 console.log(a);
 console.log(c)
}
getClasses();
console.log(`=========`)

const suspects = [
    {
        name: 'paul',
        color: 'blue'
    },
    {
        name: 'Maria',
        color: 'brown'
    }
]

let [{color: a},{color: b}] = suspects;
console.log(a, b)


function destr(obj) {
    let arr = obj.map(el => {
        return el.color;
    })
    let [colorOne, colorTwo] = arr;
    console.log(colorOne, colorTwo)
}
destr(suspects);


console.log(`==== list transformations ====`)
/*

*/

function loopObj(){
    let fights = document.getElementById('fights')
    let chars = game['gameOfLife'].map((e,i) =>{
        return `<li data-id =${i}> ${e.characters.good} vs ${e.characters.bad} </li>`;
    }).join('\n');
    fights.innerHTML = chars;
}
loopObj(game)