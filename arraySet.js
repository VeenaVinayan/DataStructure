// find the Union and intersection of an array
function findUnionOfTwoArray(arr1,arr2){
    const set1 = new Set(arr1);
    const set2 =new Set(arr2);
    const union = [...new Set([...set1,...set2])];
    console.log("Array Elements ");
    union.map(val => console.log(val));
}
function intersectionOfTwoArray(arr1,arr2){
      const set1= new Set(arr1);
      let result =[];
      for(let num of arr2){
            if(set1.has(num)){
                 result.push(num);
            }
      }
      console.log("Array Intersection !!");
      result.map(val => console.log(val));
}

let arr1=[1,2,4,6,7,9,20];
let arr2 = [4,7,11,15,20];

findUnionOfTwoArray(arr1,arr2);
intersectionOfTwoArray(arr1,arr2);
