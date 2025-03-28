// Import modal window contents from contents.js
import { contents, contentTitles } from "./contents.js";

// Select elements and assign variables to them
const container = document.querySelector(".container");
const header = document.querySelector("header");
const modalWindowButtons = document.querySelectorAll("header button");
const closeButton = document.querySelector(".close-button");
const article = document.querySelector("article");
const articleTitle = document.querySelector(".modal-window-title");
const articleContent = document.querySelector("article p");

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
  modalWindowButtons.forEach((element) => {
    element.disabled = true;
    removeCursor(element);
    removeHoverEffect(element);
  });
};

const enableButtons = () => {
  modalWindowButtons.forEach((element) => {
    element.disabled = false;
    addCursor(element);
    addHoverEffect(element);
  });
};

// Add click event listeners for each modal button
modalWindowButtons.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    e.stopPropagation();
    disableButtons();
    makeVisible(article);
    displayContent(articleContent, contents[index]);
    displayContent(articleTitle, contentTitles[index]);
    blurContainer();
  });
});

// Add click event listener to close button
closeButton.addEventListener("click", () => {
  makeInvisible(article);
  enableButtons();
  unblurContainer();
});

// Add click event listener to document to hide modal window
document.addEventListener("click", (e) => {
  if (!article.contains(e.target) && article.style.visibility === "visible") {
    makeInvisible(article);
    enableButtons();
    unblurContainer();
  }
});

// Add key down esc event listener to close the modal window
document.addEventListener("keydown", (e) => {
  if (article.style.visibility === "visible" && e.key === "Escape") {
    makeInvisible(article);
    enableButtons();
    unblurContainer();
  }
});
