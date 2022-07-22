
// Given two arrays, find which numbers are not present in the second array.

// var list1 = [1,2,3,4,5,6]

// var list2 = [2,3,1,0,6,7]
// Code Example

// // please write code here
// Code Example

var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
elements=[]
for(var i of list1){
   if (!list2.includes(i)){
       elements.push(i)
   }
}
console.log(elements);
