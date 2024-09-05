// function to divide two numbers
function divideTwoNumbers(num1,num2) {
    try{
        if (num2 == 0) {
            throw new Error(`division by zero (0)`)
        }
        let result = num1 / num2;
        console.log(`the result is ${result}`);
    } catch(error) {
        console.log(`an error occured: $(error.message)`)

    } finally {
        console.log(`Division attempt complited`);
    }
}