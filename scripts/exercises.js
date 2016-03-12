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

// .sort()

// .concat()

// .indexOf()

// .split()

// .join()

// .pop()

// .push()

// .slice()

// .splice()

// .shift()

// .unshift()

// .filter()

// .map()
