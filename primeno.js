function check(num){
    let n=0;
    for(i=1;i<=num;i++){
        if(num%i===0){
            n+=1;
        }
    }
    if(n>2){
        return "Its a composite no."
    }
    else{
        return "Its a prime no."
    }
}
let no=prompt("Enter a no.: ");
console.log(check(no));