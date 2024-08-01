// Separate -ve numbers and +ve numbers.

function separateNeagtiveAndPositive(arr){
    let n=arr.length;
    let high=n-1;
    let mid =0;
    let temp;
    while(mid<=high){
         if(arr[mid] > 0){
              temp= arr[high];
              arr[high] = arr[mid];
              arr[mid]=temp;
              high--;
        }else {
            mid++;
        }
    }
    console.log("Elements :");
    arr.map(val => console.log(val));

}

let arr=[6,1,2,-5,-9,6,1,10];
separateNeagtiveAndPositive(arr);