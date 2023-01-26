function intersection(arr1, arr2) {

    const s1 = new Set(arr1);
    const s2 = new Set(arr2);

    let ans = [];

    for (let i of s2) {
    
        if (s1.has(i)) {
            ans.push(i);
        }
        
    }
    if(ans.length===0){
        return "Null";
    }
    else{
        return ans;
    }

}

const array1 = [15,7,3,8,6,3,5,9];
const array2 = [6,7,3,4,6,3,7,5,3];
console.log("Intersection of the 2 arrays:"+intersection(array1, array2));