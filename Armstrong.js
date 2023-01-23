let sum = 0;
const num = prompt('Enter a 3 digit no.: ');
let temp = num;
while (temp > 0) {
    let rem = temp % 10;
    sum += rem * rem * rem;
    temp = parseInt(temp / 10);
}
if (sum == num) {
    console.log(`${num} is an Armstrong no.`);
}
else {
    console.log(`${num} is not an Armstrong no.`);
}    