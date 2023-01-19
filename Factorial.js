function fac(num){
    let p=1
    for(let i=1;i<=num;i++){
        p=p*i;
    }
    return p;

}
console.log(fac(10));
console.log(fac(3));
console.log(fac(6));