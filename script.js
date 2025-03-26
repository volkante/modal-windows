//Import modal window contents from contents.js

import { contents } from "./contents.js";

// Select elements and assign them to variables
const container = document.querySelector(".container");
const header = document.querySelector("header");
const firstButton = document.querySelector(".first-modal-button");
const secondButton = document.querySelector(".second-modal-button");
const thirdButton = document.querySelector(".third-modal-button");
const closeButton = document.querySelector(".close-button");
const article = document.querySelector("article");
const articleContent = document.querySelector("article p");

//Store buttons
const buttons = [firstButton, secondButton, thirdButton];

// Define basic functions
const displayContent = (element, content) => {
  element.textContent = content;
};

const makeVisible = (element) => {
  element.style.visibility = "visible";
};

const makeInvisible = (element) => {
  element.style.visibility = "hidden";
};

const blurContainer = () => {
  container.classList.add("blurred");
};

const unblurContainer = () => {
  container.classList.remove("blurred");
};

const removeCursor = (element) => {
  element.style.cursor = "default";
};

const addCursor = (element) => {
  element.style.cursor = "pointer";
};

const removeHoverEffect = (element) => {
  element.classList.add("no-hover");
};

const addHoverEffect = (element) => {
  element.classList.remove("no-hover");
};

// Define button functions

const disableButtons = () => {
  buttons.forEach((element) => {
    element.disabled = true;
    removeCursor(element);
    removeHoverEffect(element);
  });
};

const enableButtons = () => {
  buttons.forEach((element) => {
    element.disabled = false;
    addCursor(element);
    addHoverEffect(element);
  });
};

//Add event listeners for each modal button
buttons.forEach((element, index) => {
  element.addEventListener("click", () => {
    disableButtons();
    makeVisible(article);
    displayContent(articleContent, contents[index]);
    blurContainer();
  });
});

//Add event listener for close button
closeButton.addEventListener("click", () => {
  makeInvisible(article);
  enableButtons();
  unblurContainer();
});

//Add event listener for click to hide modal window
document.addEventListener("click", (e) => {
  if (
    !article.contains(e.target) &&
    !header.contains(e.target) &&
    articleContent.textContent.length > 0
  ) {
    makeInvisible(article);
    enableButtons();
    unblurContainer();
  }
});

//Add event listener for key down esc to close the modal window
document.addEventListener("keydown", (e) => {
  console.log(e); //logs the event
  if (article.style.visibility === "visible" && e.key === "Escape") {
    makeInvisible(article);
    enableButtons();
    unblurContainer();
  }
});
