

// var myFavouriteThings = ["Ramani", "Black",1, "jan 2 1996"];
// console.log(myFavouriteThings.length)


// var fruits = ['Apple', 'Banana','orange'];
// console.log(fruits[1]);

// var fruits = ['Apple', 'Banana']
// fruits.push('orange')
// console.log(fruits)

// var array = [ 1, 2, 3, 4, 5, 6 ];
// for (var index = 0; index < array.length;index++) {
// console.log(array[index]);
// }

// var fruits = ['Apple', 'Banana', 'orange'];
// fruits.pop();
// console.log(fruits);

// var fruits = ['Apple', 'Banana', 'orange'];
// fruits.shift();
// console.log(fruits);


// var fruits = ['Apple', 'Banana']
// fruits.unshift('Grapes');
// console.log(fruits);

// let fruits = ['Apple', 'Banana', 'Orange'];
// let position=fruits.indexOf('Banana')
// console.log(position);

// var fruits = ['Apple', 'Banana', 'Orange']
// let removedItem = fruits.splice(1,1)
// console.log(removedItem)

// var myFavouriteGames = ["chess", "Ludo", "Badminton", "Volleyball"];
// console.log(myFavouriteGames);



// var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// var i=0
// var l=[]
// count=0
// while (i<length(n)){
//     if (n[i]  not in l)
//         l.append(n[i])
//         count+=1
//     i+=1
// print(l,)        
// }
    
// 12. You will be given a number and you need to return it as a string in Expanded Form. For example:
// # 12 # Should return '10 + 2'
// # 42 # Should return '40 + 2'
// # 70304 # Should return '70000 + 300 + 4'


var a=require("readline-sync")
var num1=a.questionInt("enter any number:")
var i=0
add=" "
while (i<num1.length)
    add+=num1[i]
    j=1
    while (j<=(num1.length)-(i+1)){
        add+="0"
        j+=1
    if (i==(length(num1)-1)){
        pass 
    }
    else{
        add+="+" 
    i+=1
    }
console.log(add)     
}

         