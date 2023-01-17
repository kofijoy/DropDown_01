const button = document.getElementById("button");
const button = button.getBoundingClientRect();
const chevron = document.getElementById("chevron");
const chevronRect = chevron.getBoundingClientRect();
const menRight = buttonRect.right - chevronRect.right;
const menuTop = chevronRect.top - buttonRect.top;

const menu = document.getElementById("menu");
menu.style.top = `${menuTop}px`;
menu.style.right = `${menuRight}px`;

const toggleDropdown = () => {
  const dropdown = document.getElementById("dropdown");

  if (dropdown.classList.contains("open")) {
    menu.style.top = `${menuTop}px`;
    menu.style.right = `${menuRight}px`;
  } else {
    menu.style.top = `${button.clientHeight + 10}px`;
    menu.style.right = 0;
  }