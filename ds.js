
let names = ['esther', 'pesh','show', 'agather']
let[person1,person2,person3,person4,] = names
console.log(person1,person2,person3,person4)

let constants = [6.68,100,7,72,63]
let [pi,boilingTemp,gravity,bodyTemp]= constants
console.log(pi,boilingTemp,gravity,bodyTemp)

let fullStackDev = [['html','javascript','bpptstrap','css'],['node js','mangodb','express js']]
let [frontEnd,backEnd] =fullStackDev
console.log(frontEnd)
console.log(backEnd)
for (const[first,second] of fullStackDev)
    console.log(first, second)

//spreed operator using distructions

let moreNumbers =[1,2,3,4,5,6,7,8,9,10]
let [number1,number2,number3,number4,...rest] = moreNumbers
console.log(number1,number2,number3)
console.log(rest)

let countries = [['uganda','kampala'],['kemya', 'Nairobi'],['Tanzania', 'Dodoma']]
for(const[country,city] of countries){
    console.log(country,city)
}

//objects using distructuring here we use carly bractions
const rectangle = {
    width :3,
    length :4,
    height :52
}
let {width :w,lentgh,height,area,perimeter}= rectangle
console.log(w,length,area,paremeter)

let addNumbers = (... args)=> {
    return args
}
console.log(addNumbers(1,2,3,4,5,6,7,8,9,10,11))

