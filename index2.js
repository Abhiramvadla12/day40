string = prompt('enter any string here:');
//string = 'banana';
char_to_count = prompt("enter the character you want to count:");
//char_to_count = 'a';
count = 0;
for(i of string){
    if(i=='a'){
        count++;
    }
}
console.log(`Result: ${count} (The character "${char_to_count}" appears ${count} times in "${string}")`)