let str = prompt("Enter a string: ")
if (str.length < 2) {
    console.log("Input cannot be translated.")
}
else {
    let word_list = str.split(" ");
    let result = [];
    let vowels = ['a', 'e', "i", "o", "u", "A", "E", "I", "O", "U"];
    for(let word of word_list){
     if(vowels.indexOf(word[0]) != -1){
       result.push(word + "way");
     }
     else if (vowels.indexOf(word[0]) == -1 && vowels.indexOf(word[1]) == -1) {
         let move_both = word.substring(2) + word.substring(0,2) + "ay";
         result.push(move_both)
     }
     else{
         let move_first = word.substring(1) + word.substring(0,1) + "ay";
         result.push(move_first);
     }
    }
    let join_string = result.join(" ");
    console.log(join_string)
};
