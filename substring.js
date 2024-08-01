// implement substring functions.

let str="MERN stack Program in Brototype";
let part=str.slice(0,4);
console.log("Substring is "+part);
part=str.substring(22,25);
console.log("Substring is 10-15 "+part);
part=str.substr(2,32);
console.log("Substring is 2-25 "+part);
const s1="this is healthy.this is delicious.this is costly";
const actual = s1.replace("this","BlueBerry");
console.log("New string :",actual);
const values = s1.replaceAll("this","Blueberry")
console.log("Using replace All :",values);
console.log(values.toUpperCase());
console.log(values.toLowerCase());
let newArray = values.split("Blueberry");
console.log("Splited arry ::"+newArray);