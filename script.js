// Select elements and assign them to variables
const header = document.querySelector("header");
const firstButton = document.querySelector(".first-modal-button");
const secondButton = document.querySelector(".second-modal-button");
const thirdButton = document.querySelector(".third-modal-button");

const closeButton = document.querySelector(".close-button");

const article = document.querySelector("article");
const articleContent = document.querySelector("article p");

//Store modal window contents
const contents = ["First content", "Second content", "Third content"];

//Store buttons
const buttons = [firstButton, secondButton, thirdButton];

// Define functions
const displayContent = (element, content) => {
  element.textContent = content;
};

const toggleVisibility = (element) => {
  let { visibility } = element.style;
  visibility = "visible" ? (visibility = "hidden") : "";
};

//Add event listeners for modal buttons
buttons.forEach((element, index) => {
  element.addEventListener("click", () => {
    toggleVisibility(article);
    displayContent(articleContent, contents[index]);
  });
});

//Add event listener for close button
closeButton.addEventListener("click", () => {
  toggleVisibility(article);
});

//Add event listener for document
document.addEventListener("click", (e) => {
  console.log("e.target şu: ", e.target);
  if (!article.contains(e.target) && !header.contains(e.target)) {
    console.log("Elementin dışına tıkladın");
    toggleVisibility(article);
  }
});
