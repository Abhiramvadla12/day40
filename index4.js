string = 'abcdef';
reverse = '';
for(i=string.length-1;i>=0;i--){
    reverse += string[i];
}
console.log(`string before : "${string}"`);
console.log(`string after reversing : "${reverse}"`);