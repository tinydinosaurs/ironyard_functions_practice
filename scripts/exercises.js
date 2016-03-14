/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // iterate over array
    for(i = 0; i < array.length; i++) {
        // run function on item at index i in array
        callback(array[i]);
    }
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    total = 0;
    // parse arguments into an array
    var args = [].slice.call(arguments);
    // iterate over numbers in the array
    for(i = 0; i < args.length; i++) {
        // add number at current index to value of total
        total += args[i];
    }
    // return final tally
    return total;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    sum = 0;
    // parse arguments into an array
    var args = [].slice.call(arguments);
    
    // iterate over numbers in an array
    for(i = 0; i < args.length; i++) {
        // add the number at the current index to sum
        sum += args[i];
    }
    // return final tally divided by the number of items in the array.
    return sum / args.length;
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    
    // set a variable for largest number. Set it's default value to 0
    var currentLargest = 0;
    // iterate over each number in the array
    for(var i = 0; i < args.length; i++){
        // if the number at the current index is larger than the value of currentLargest,
        if(args[i] > currentLargest) {
            // replace currentLargest with number at current index
            currentLargest = args[i];
        }
    }
    // return final value of currentLargest
    return currentLargest;
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // set default string to empty
    var longestString = '';
    // iterate over strings in the array
    for(var i = 0; i < args.length; i++) {
        // if the length of the string at the current index is longer than current longest string,
        if(args[i].length > longestString.length) {
            // assign the string to our longestString variable. 
            longestString = args[i];
        }  
    }
    // return the final result of length comparison.
    return longestString;
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

//////////////////////////////////////////////////////////////
// .sort()
//////////////////////////////////////////////////////////////

//my list of gummy bear flavors
var gummyBears = ['raspberry', 'orange', 'strawberry', 'pineapple', 'lemon']

// sort the flavors alphabetically and store that list in a new variable.
var alphabears = gummyBears.sort();

console.assert(alphabears[0] === 'lemon' && alphabears[1] === 'orange' && alphabears[2] === 'pineapple' && alphabears[3] === 'raspberry' && alphabears[4] === 'strawberry');

// one and two digit mersenne primes in random order
var mersennes = [61, 2, 19];

// sort function to rearrange primes numerically.
function numericSort(a, b) {
    return a - b;
}

// sort the primes and store result in new variable.
var mersennesSorted = mersennes.sort(numericSort);

console.assert(mersennesSorted[0] === 2 && mersennesSorted[1] === 19 && mersennesSorted[2] === 61);

//////////////////////////////////////////////////////////////
// .concat()
//////////////////////////////////////////////////////////////

// take a list of magical creatures that are also real and add additional magical creatures...that are real. 
function allAreReal(creatures, creature) {
    return creatures.concat(creature);
}
// these creatures are totally real.
var areReal = ['unicorns', 'werewolves',];

console.assert(allAreReal(areReal, 'wood nymphs')[2] === 'wood nymphs')


//////////////////////////////////////////////////////////////
// .indexOf()
//////////////////////////////////////////////////////////////
var mersennes = [61, 2, 19];

console.assert(mersennes.indexOf(2) === 1);
console.assert(mersennes.indexOf(7) === -1);
console.assert(mersennes.indexOf(19) === 2);
console.assert(mersennes.indexOf(19, 3) === -1);

//////////////////////////////////////////////////////////////
// .split()
//////////////////////////////////////////////////////////////

var secondFig = 'Come and see my shining palace built upon the sand!'

var figWords = secondFig.split(' ');

var figLetters = secondFig.split('');

// assert that figWords is an array with 10 items.
console.assert(figWords.length === 10);

// assert that figLetters is an array with 51 items.
console.assert(figLetters.length === 51);


//////////////////////////////////////////////////////////////
// .join()
//////////////////////////////////////////////////////////////

var largestSaturnMoons = ['Titan', 'Rhea', 'Iapetus', 'Dione', 'Tethys']

// Assert that the largest moons of Saturn are in a string separated by a comma and a space.
console.assert(largestSaturnMoons.join(', ') === 'Titan, Rhea, Iapetus, Dione, Tethys')


//////////////////////////////////////////////////////////////
// .pop()
//////////////////////////////////////////////////////////////

var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

// I know he didn't really kill pluto. Frankly, I'm glad it's not a planet. Planet X is way cooler.
var killedByNDT = planets.pop();

// pop alters the original array. Assert there is now nothing at index 8.
console.assert(planets[8] === undefined);

// pop returns the removed elements. Assert that Pluto was returned.
console.assert(killedByNDT === 'Pluto');


//////////////////////////////////////////////////////////////
// .push()
//////////////////////////////////////////////////////////////

// push alters the original array. Check to see if it's got 9 elements now.
console.assert(planets.push('Planet X') === 9);

//////////////////////////////////////////////////////////////
// .slice()
//////////////////////////////////////////////////////////////

console.assert(planets.slice(2, 6).length === 4);
console.assert(planets.length === 9);

//////////////////////////////////////////////////////////////
// .splice()
//////////////////////////////////////////////////////////////

// one of these isn't a texas bird.
var texasBirds = ['Mockingbird', 'Blue-Footed Booby']

// assert remove and replace worked.
console.assert(texasBirds.splice(1, 1, 'Blue Jay')[1] != 'Blue Footed Booby')


//////////////////////////////////////////////////////////////
// .shift()
//////////////////////////////////////////////////////////////

// again, one of these isn't a texas bird.
var moreTexasBirds = ['Waved Albatross', 'House Wren', 'Orange-crowned Warbler', 'Northern Cardinal', 'Great-tailed Grackle'];

// let's put it somewhere that makes more sense.
var galapagosBird = moreTexasBirds.shift();

// did it work?
console.assert(galapagosBird === 'Waved Albatross');

//////////////////////////////////////////////////////////////
// .unshift()
//////////////////////////////////////////////////////////////

var texasSymbols = ['mockingbird', 'bluebonnet']

console.assert(texasSymbols.unshift('chili', 'cotton', 'Paluxisaurus Jonesi') === 5);


//////////////////////////////////////////////////////////////
// .filter()
//////////////////////////////////////////////////////////////

var fibonacci = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]

function doubleDigits(nums) {
    return nums > 10;
}

var fibonacciDoubleDigits = fibonacci.filter(doubleDigits);
console.assert(fibonacciDoubleDigits[0] === 13);

//////////////////////////////////////////////////////////////
// .map()
//////////////////////////////////////////////////////////////

var myWords = ['cat', 'dog', 'bird', 'lizard', 'hippo'];

var myPlurals = myWords.map(function makePlurals(words) {
    for(var i = 0; i < words.length; i++) {
        words[i] = words[i] + 's';
    }
    return words;
});

// cannot get map function to actually work for the array on which the method is called.
// I actually copied and pasted the example from MDN, and it failed the assert, so I don't know....
console.assert(myPlurals[0] === 'cats');
