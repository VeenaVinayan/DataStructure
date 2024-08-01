// Convert first character of each word Upper case
function convertWordUpper(str){
     let st = str.split(" ");
     st.map(val =>{
          val.convertWordUpper(val[0]);
     });
     let st1=st.join(" ");
     console.log(st1);
}

let str="sun rises in east";
convertWordUpper(str);