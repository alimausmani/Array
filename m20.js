
// Count of the elements that is repeated in a list.

// var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// Code Example

// // please write code here
// Code Example

char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
 
uniques=[]
for(var i of char_list){
   if(!uniques.includes(i)){
       uniques.push(i)
   }
}
console.log(uniques);
 
for(var j of uniques){
   count=0
   for(var k of char_list){
       if (j === k){
           count+=1
       }
   }
   console.log(j,count," times");
}
