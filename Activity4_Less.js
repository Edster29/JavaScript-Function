function Lessthan18(arr_num) // function that is used to find the number in array that is less than 18.
{
  arr_num.sort(function(x,y) // sorting the values
           {
        return x-y;
           });

  var narray = [arr_num[0]]; //this array is utilized to store the numbers 
  
  
  for(var j=1; j < arr_num.length; j++) // loop is used to run the if statement in every indexes
  {
    if(arr_num[j] < 18) // if statement that will evaluate the numbers if they are less than 18
    {
      narray.push(arr_num[j]); // storing the true values
    }
  }
  return narray.join(',');// combining the true values
  }
console.log(Lessthan18([19,22,33,4,55,7,88,9,10])); // utilizing the function in the console. 