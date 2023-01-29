var CASE = 0; 
var output = ""; 


var input = prompt('Enter input string');

var characters = input.split("");

for(var i=0; i<characters.length; i++) {
  

  if(characters[i] == '@') {
    CASE = CASE ? 0 : 1; 
  } else {
    if(CASE) output += characters[i].toUpperCase();
    else output += characters[i].toLowerCase(); 
  }
}

console.log(output);
