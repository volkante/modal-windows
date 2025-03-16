// Select elements and assign them to variables

const header = document.querySelector("header");
const firstButton = document.querySelector(".first-modal-button");
const secondButton = document.querySelector(".second-modal-button");
const thirdButton = document.querySelector(".third-modal-button");


const closeButton = document.querySelector(".close-button");

const article = document.querySelector("article");
const articleContent = document.querySelector("article p");

const body = document.querySelector("body");

//const contents = ["First content", "Second content", "Third content"];

// Define functions
const makeVisible = (element) => {
  element.style.visibility = "visible";
};

const makeInvisible = (element) => {
  element.style.visibility = "hidden";
};

const displayContent = (element, content) => {
  element.textContent = content;
};


//Add event listeners
firstButton.addEventListener("click", () => {
  makeVisible(article);
  displayContent(articleContent, "First content");
});

secondButton.addEventListener("click", () => {
  makeVisible(article);
  displayContent(articleContent, "Second content");
});

thirdButton.addEventListener("click", () => {
  makeVisible(article);
  displayContent(articleContent, "Third content");
});

closeButton.addEventListener("click", () => {
  makeInvisible(article);
})


document.addEventListener("click", (e) => {
  console.log("e.target ben: ", e.target);
  if(!article.contains(e.target) && !header.contains(e.target)){
    console.log("Elementin dışına tıkladın");
    makeInvisible(article);
  }
})

