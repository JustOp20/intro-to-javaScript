//declaration function

    let addition = a+b;
  
    function addNumber (a,b){
    return addition;
}

//arrow function
const addNumber= (a,b) =>{
    return addition;
}
//expression funtion
const addNumber = function(a,b){
    return addition;
}
//anonymous function
setTimeout(function(a,b){
    return addition;
},400)

//immediately evoked function
/*(funtion(a, b){
    return addition
})()*/


let callback = function (n) {
    return n**2;
};

function cubed(callback,n) {
    
    return callback(n)*n
};
console.log(cubed(callback,4));

