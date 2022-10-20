function uppercase(str)         //the function that will be used to capitalized the strng
{
  var crntarray = str.split(' ');       //the current array with the splitted original element
  var newarray = [];            //array for new string(capitalized)
  for(var i = 0; i < crntarray.length; i++)     //loop that will execute every indexes in an array
  {
    newarray.push(crntarray[i].charAt(0).toUpperCase()+crntarray[i].slice(1)); //replacing the first letter with capital letter then copying it to a new array
  }
  return newarray.join(' ');// will combine every element into a string.
}
console.log(uppercase("coding is hard but having enough practice will help you a lot.")); // calling the function to convert the original string.