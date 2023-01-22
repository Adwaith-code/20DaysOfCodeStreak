function fib(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fib(num-1) + fib(num - 2);
    }
}
const num = prompt('Enter the number of terms: ');

if(num <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < num; i++) {
        console.log(fib(i));
    }
}