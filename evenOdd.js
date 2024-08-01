// Find number even or odd
function evenOdd(n){
    if(n===0){return "Even";
    }
    if(n===1){return "Odd"}
    return evenOdd(n-2);
}

console.log(evenOdd(70));