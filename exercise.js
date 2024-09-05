const produceList=[
    {
        produce:"beanns",
        producetype :"legume",
        tonnage: 1000,
        cost : 50000,
        dealername :"john",
        branch: "maganjo",
        telephone: "0788123456",
        sellingprice :600,

    },
    {
        produce:"maize",
        producetype:"cereal",
        tonnage:2500,
        cost: 76000,
        dealername: "jane",
        branch :"matuga",
        contact:"070075468",
        sellingprice:800,
    },
];



function displaySalesReport(){
    console.log("sales Report:");
    for (const product of products){
        console.log(`${product.name}:${product.quantitySold}`);
    }
}

displaySalesReport();  //displaying the sales report using the arrays


//an arrays to store information about each product
const products=[{ name: "apples", quantitySold:0},
{name: "bananas", quantitySold: 0},
{name: "oranges", quantitySold:0},
];



//separeate arrays on the cash and credit sales

const cashsales =[];
const creditsales =[];

function recordcashsale(productname,tonnage, amountpaid,buyername,salesagent,date,time){
    cashsales.push({
        productname,
        tonnage,
        amountpaid,
        buyername,
        salesagent,
        date,
        time,
    });
}

function recordcreditsales(buyerName, nationalId, location, buyerContact,amountDue,salesagent,dueDate, productName, productType, tonnage, dispatchDate){
    creditsales.push({
        buyerName,
        nationalId,
        location,
        buyerContact,
        amountDue,
        salesagent,
        dueDate,
        producename,
        produceType,
        tonnage,
        dispatchDate,
    })
}