function fibs(n) {
    fibo = [ 0, 1 ];
    i = 2
    while (i< n) {
        fibo.push(fibo[ i - 1 ] + fibo[ i - 2 ]);
        i++;
    }
    return fibo;
}

// console.log(fibs(8));

function fibsRec(n) {
    if (n == 2) {
        return [ 0, 1 ];
    }
    arr = fibsRec(n - 1);
    return arr.concat(arr[ arr.length -1 ] + arr[ arr.length -2 ]);
}

console.log(fibsRec(9));

