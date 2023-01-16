function getNextAge(age) {
    age=Number.parseInt(age,10)
    return age=age+1;
}

function getString(val) {
    return val.toString();
}

console.log("Next age: "+getNextAge("123"));
console.log("String: "+getString(13141));