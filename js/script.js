const cats = [
    {
        name: "Blob",
        age: 10,
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21,
    }
];

//question 1 

const cat = {
    complain: "Meow!",
};

console.log(cat.complain);

//question 2

const heading = document.querySelector("h3");

heading.innerHTML = ("Updated Heading");

//question 3

heading.style.fontSize = "2em";

//question 4

heading.classList.add ("sub-heading"); 

//question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = ("red");
}

//question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style = "background: Yellow"> New Paragraph </p>`;


//question 7

function catNames(list) {
    for(let i = 0; i < cats.length; i++) {
        console.log(list[i].name);
    }
}
catNames(cats);

//question 8

function createCats(Cats) {

    let catsItems = "";

    for(let i = 0; i < cats.length; i++) {

        let catsAge = "Nobody knows";

        if(cats.age)

        catsItems = catsItems + cats[i];
    }


}

createCats(cats);










