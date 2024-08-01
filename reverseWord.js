//Reverse each word in the string

function reverseWord(str){
    return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ');
}

console.log("Reversed String  ::",reverseWord("Life is Beautiful. Enjoy each moment!"));