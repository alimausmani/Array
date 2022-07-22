
var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var max=0;
// var second_max=0;
// for (var i =0;i if (max   if (second_max     second_max=max);}
//    max=numbers[i];
//  }
//  else{
//      if (second_max     second_max=numbers[i];
//    }
//  }
// }
 
// console.log(second_max);


i=0
max=0
while (i<numbers.length){
    if (numbers[i]>max){
        max=numbers[i]
    }
    i++
}
// console.log(max);
second_max=0
i=0
while (i<numbers.length){
    if (numbers[i]>second_max && numbers[i]!=max){
        second_max=numbers[i]
    }
    i++
}
console.log(second_max);