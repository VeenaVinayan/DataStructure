function replaceAlphabet(str,n){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result=''
    for(let i=0;i<str.length;i++){
        const char = str[i].toLowerCase();
        const index = alphabet.indexOf(char);
        if(index!== -1){
            result += alphabet[(index+n)%26]
        }else{
            result += str[i]
        }
    }
    return result;
}


// const input = 'Athira'
// const shift = 2
console.log(replaceAlphabet('abcdefghi',2));