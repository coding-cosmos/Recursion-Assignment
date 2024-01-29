
// Q1
function sumRange(n) {
    if (n == 0) {
        return 0;
    }
    return n + sumRange(n - 1);
}

// console.log(sumRange(5));

// Q2
function power(base, exp) {
    if (exp == 0) {
        return 1;
    }
    return base * power(base,exp -1)
}

// console.log(power(2, 3));

// Q3
function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

// console.log(factorial(5));

// Q4
function all(arr, callback) {
    if (arr.length == 1) {
        return callback(arr[ 0 ]);
    }
    return callback(arr[ 0 ]) && all(arr.slice(1,),callback);
}

var allAreLessThanSeven = all([1, 2, 6], function (num) {
  return num < 7;
});

// console.log(allAreLessThanSeven);

// Q5

function productOfArray(arr) {
    if (arr.length == 1) {
        return arr[ 0 ];
    }
    return arr[ 0 ] * productOfArray(arr.slice(1,));
}

var six = productOfArray([1, 2, 3]); 
var sixty = productOfArray([ 1, 2, 3, 10 ]); 

// console.log(six,sixty)

// Q6

function contains(object, value) {
    const keys = Object.keys(object);
    const ob = object[`${keys[0]}`];
    
    if (ob instanceof Object) {
        return false || contains(ob, value);
    }
    else {
       const values = Object.values(object);
        for (let i = 0; i <= values.length; i++){
            if (values[ i ] == value) {
                return true;
            } 
        }
        return false;
    }
}

const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

const hasIt = contains(nestedObject, 44); // true
const doesntHaveIt = contains(nestedObject, "foo"); // false

// console.log(hasIt,doesntHaveIt);


function totalIntegers(arr) {
    count = 0;
    for (let x of arr) {
        if (Array.isArray(x)) {
            count = count + totalIntegers(x);
        }
        if (Number.isInteger(x)) {
            count++;
        }
    }
    return count;
}

var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]);

// console.log(seven);


// Q 8
function SumSquares(arr) {
    if (arr.length == 0) return 0;
    let sum = 0
    const first = arr.shift();

    if (Array.isArray(first)) {
        sum += SumSquares(first);
    } else if (Number.isInteger(first)) {
        sum += first*first;
    }
    return sum + SumSquares(arr);
}

// var l = [1,2,3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1,2],3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]]
// console.log(SumSquares(l)); // 1 = 1

// l = [10,[[10],10],[10]]
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function replicate(n, value) {
    if (n <= 0) return [];
    return [value].concat(replicate(n - 1, value));
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []