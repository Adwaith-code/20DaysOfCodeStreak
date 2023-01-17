function rem(num,val){
    return num%val
}

function quo(num,val){
    return num/val;
}    

function round(num){
    return Math.round(num);
}

function floor(num){
    return Math.floor(num);
}

function ceil(num){
    return Math.ceil(num);
}

console.log("Remainder: "+rem(10,2));
console.log("Quotient: "+quo(10,2));
console.log("Round: "+round(2.7));
console.log("Ceil: "+ceil(2.7));
console.log("Floor: "+floor(2.7));