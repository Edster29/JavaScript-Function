function Alphabetical(string)// function that will process the string. 
  {
return string.split('').sort().join(''); // splitting the words into letter{split}, and then sorting them out in an alphabetical order{sort}, and combined them again but in a sorted position{join}. 
  }
console.log(Alphabetical("qwertyuiop"));// use the function to a word. 