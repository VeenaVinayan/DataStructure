function replaceCharacter(s,pos){
    let value= s.charAt(pos);
    let result=[];
     for(i=0;i<s.length-1;i++){ 
        result.push(s[i].replaceAll(value,s[i]));
    }
    console.log("New string is ::"+result);
}

let str="All is well";
replaceCharacter(str,2);
