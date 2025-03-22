// Select elements and assign them to variables
const header = document.querySelector("header");
const firstButton = document.querySelector(".first-modal-button");
const secondButton = document.querySelector(".second-modal-button");
const thirdButton = document.querySelector(".third-modal-button");
const closeButton = document.querySelector(".close-button");
const article = document.querySelector("article");
const articleContent = document.querySelector("article p");

//Store modal window contents
const contents = [
  "First content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, vero. Excepturi exercitationem maxime adipisci? Ullam quam quo sit animi exercitationem?",
  "Second content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, vero. Excepturi exercitationem maxime adipisci? Ullam quam quo sit animi exercitationem?",
  "Third content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, vero. Excepturi exercitationem maxime adipisci? Ullam quam quo sit animi exercitationem?",
];

//Store buttons
const buttons = [firstButton, secondButton, thirdButton];

// Define functions
const displayContent = (element, content) => {
  element.textContent = content;
};

const toggleVisibility = (element) => {
  if (element.style.visibility === "visible") {
    element.style.visibility = "hidden";
  } else {
    element.style.visibility = "visible";
  }
};

const disableButtons = () => {};

const enableButtons = (element) => {};

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

//Add event listener for click to toggle modal window
document.addEventListener("click", (e) => {
  if (
    !article.contains(e.target) &&
    !header.contains(e.target) &&
    articleContent.textContent.length > 0
  ) {
    toggleVisibility(article);
  }
});

//Add event listener for key down esc to close the modal window
document.addEventListener("keydown", (e) => {
  console.log(e);
  if ((article.style.visibility = "visible") && e.key === "Escape") {
    toggleVisibility(article);
  }
});
