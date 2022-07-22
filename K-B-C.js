
console.log("Welcom To KBC Game")
console.log("first question per 5000 and second question per 10000 and third question per 30000 Rs milte hai")
question_list = [
    "How many continents are there?",              
    "What is the capital of India?",               
    "NG mei kaun se course padhaya jaata hai?"    

]
options_list = [
    
    ["Four", "Nine", "Seven", "Eight"],
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]

]
solution_list = [3, 4, 1]
answer50_50=[["four","seven"],
      ["Bhopal","Delhi"],
      ["software Engineering" ,"Counseling"]]


var a=require("readline-sync")     
let i = 0
var count = 0 
while (i <question_list.length){
    console.log( question_list[i])
    j = 0
    while (j <4 ){
        console.log(options_list[i])
        j+=1
    if (count < 1){
        console.log("do you want to use life line:")
        c = a.question("enter Yes or No:")
        if (c=="Y"){
            console.log(answer50_50[i])
            count+=1
        }
        else{
            answer = a.questionInt("enter your answer:")
            if (solution_list[i] == answer){
                console.log("your answer is correct")
            }    
            else{
                console.log("Game Over")
                console.log("thank you for participeting")
                break
            }    
            
        }    
    }        
    else{
        console.log("you have already used life line")    
        
    }
    i+=1
    }
}
