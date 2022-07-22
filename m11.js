
// Palindrome is the string or number if we reverse it will be same as number or string.

// Example:

// MOM

// MALAYALAM

// 121

// 2002

// Sample Input :

// var name=[‘m’,’a’,’l’,’a’,’y’,’a’,’l’,’a’,’m’]

// sample output:

// This is palindrome

// Code Example

// please write code here
// Code Example

var Name=['m','a','l','a','y','a','l','a','m'];
var new_array=[];
for (var i=Name.length-1; i>=0;i--){
   new_array.push(Name[i]);
}
var count=0;
for (var j=0;  (new_array[j]===Name[j]); j++){
       count++;
   }
if(count===Name.length){
   console.log("This is palindrome");
}else{
   console.log("This is not a palindrome");
}


// var Name=['m','a','l','a','y','a','l','a','m'];
// var new_array=[];
// for (var j=0; if (new_array[j]==Name);{
//     new_array.push
// }