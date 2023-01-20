function length(arr){
    return arr.length
}
function access(arr,ind){
    return arr[ind]
}
function insert(arr,ele){
    arr.push(ele)
    return arr
}

console.log(length([1,2,5,3,1,4,6,6]));
console.log(access([1,2,5,3,1,4,6,6],3));
console.log(insert([1,2,5,3,1,4,6,6],'Pushed element'));