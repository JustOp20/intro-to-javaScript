//while loops
//if you knw the number of times something will appear
let m =0
while( m<5){

    console.log(m)
    m++
}



//do while loop
let i =0
do {
    console.log(i)
    i++
}
while (i<=5) 


    for(const num of numbers){
        console.log(num);
    }

    let cereals = ["peas", "gnuts", "beans"]
    for (const grain of cereals){

        console.log(grain);
    }
//this could be used in the project that has been given
    const produceList= [{name:"peas", type:"legumes",weight:2000, cost:600000},
        {name:"gnuts", type:"legums",weight:1000, cost:500000},
        {name:"beans", type:"legumes",weight:1500, cost:400000}]

        for(const produce of produceList){
            console.log(`name:${produce},name:${produce.name}, type:${produce.type}, weight:${produce.weight}, cost:${produce.cost}`)
        }