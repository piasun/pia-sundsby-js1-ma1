const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
} ;
cat.complain();

//question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//question 3

heading.style.fontSize = "2em";

//question 4

heading.className = "subheading";

//question 5

const paragraphs = document.querySelectorAll("p");
for(let i = 0; i < paragraphs.length; i++) {

    paragraphs[i].style.color = "red";
}


//qustion 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//question 7

function createList(list) {
    for (let i = 0; i < cats.length; i ++)
      console.log(list[i]);
}

createList(cats);


//question 8

const createCats = document.querySelector(".cat-container");

console.log(createCats);

let html = "";

for (let i = 0; i < cats.length; i ++) {
    
    let catsAge = "Age unknown";

    if(cats[i].age) {
        catsAge = cats[i].age;
    }

    html += `<div>
    <h5>${cats[i].name}</h5>
    <p>Age: ${catsAge}</p>
    </div>`;

    console.log(html);
}

createCats.innerHTML = html;
