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

//question 1 - OK

const cat = {
    complain: function() {
        console.log("Meow!");
    }
} ;
cat.complain();

//question 2 OK

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//question 3 - OK

heading.style.fontSize = "2em";

//question 4 - OK

heading.className = "subheading";

//question 5 - OK

const paragraphs = document.querySelectorAll("p");
for(let i = 0; i < paragraphs.length; i++) {

    paragraphs[i].style.color = "red";
}


//qustion 6 - OK

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//question 7 - IKKE KLAR

function createList(list) {
    for (let i = 0; i < cats.length; i ++)
      console.log(list[i]);
}

createList(cats);


//question 8 - OK

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
