// Transpose of a matrix
let a=[
     [1,1,1],
     [2,2,2],
     [3,3,3]
]
let temp;
console.log("Matrix ::"+a);
for(i=0;i<3;i++){
    for(j=0;j<i;j++){
        temp=a[i][j];
        a[i][j]=a[j][i];
        a[j][i]=temp;
    }
}
console.log("Transpose Matrix ::"+a);