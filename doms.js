/*let allHeadings= document.getElementsByTagName("h1")

console.log(allHeadings)
console.log(allHEdaings.length)

for(let m=0; m<allHeadings;m--){
    console.log([allHeadings]);
}
*/

//console.log(allHeadings)
//console.log(allHeadings.length)

//let firstHeading = document.getElementById("word")

//console.log(firstHeading)

/*let firstHeading = document.querySelectorAll("h1")
let thirdHeaading = document.querySelector(".head")

let seecondHeading = document.querrySelector("word2")/*

/*console.log(allHeadings)
console.log(thirdHeading)
console.log(secondHeading)*/


//let lists =``

//let ul = document.querySelector("ul")
// ul.innerHTML = lists

//let allHeadings = document.querySelector("h1")

//let biggestHeading = document.createElement("h1")


/*document.queerySelector["ul"]
ul.innerHTML= lists*/

/*let title =
biggestHeading.className = "title"
biggestHeading.style.fontsize= "50px"
biggestHeading.innerHTML="this is the biggest heading.

console.log(biggestHeading)// un resolved/*


//creat the element
//goes hand in hand with apendchild and better to be used in a container.
document.creatElement() 

//get/ read the element
//let one = document.getElementById("tittle")
//document.getElementById()
/*let head = getElementById("container")

let subtitleElement = document.getElementByClassNmae("sub-title");
let updatedButton = document.querySelector("update");

console.log(document.getElementById("title"));
console.log(subtitleElement);
console.log(updateButton); this has refused to run*/

/*add the element (element.innerHTML or element.textContent)
textContent= no tags, push inside an existing tag
delete the element()*/






// create the element
// createElement goes hand in hand with append or appendChild. and its better to use it with a container.
let container = document.getElementById("container")
let addButton = document.getElementById("add-product")
let addBranch = document.getElementById("add-branch")
let updateTitle = document.getElementById("update-title")
let title = document.getElementById("title")
let removeButton = document.getElementById("remove-product")


// addEventListener() - inbuilt, helps us to capture user signals / input(click, scroll etc)
addButton.addEventListener("click", function () {
  let newProduct = document.createElement("p");
  newProduct.textContent = "Beans";

  container.appendChild(newProduct);
});

addBranch.addEventListener("click", function () {
    let newBranch = document.createElement("p");
    newBranch.textContent = "Matuga";
  
    container.appendChild(newBranch);
  });

// update title
updateTitle.addEventListener("click", function () {
    title.textContent = "Happy Hoe Updated";
    });

// remove product
removeButton.addEventListener("click", function () {
    let product = document.querySelector("#g-nuts")
    if(product) {
        product.remove()
    } else {
        
    }

    });


// get / read the element
// let one = document.getElementById("title");
let subTitleElement = document.getElementsByClassName("sub-title");
let updateButton = document.querySelector("#update");

console.log(document.getElementById("title"));
console.log(subTitleElement);
console.log(updateButton);



// add the element (appendChild to the containe / div) (element.innerHTML or element.textContent)
//textContent - no tags, push inside an existing tag
//innerHtml - create new tags.

// delete the element (removeChild of the container / div)