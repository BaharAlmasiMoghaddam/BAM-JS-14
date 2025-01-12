//Count the number of <li> in the countItems.html file and show the results in console.

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('input[type="button"]');

  button.addEventListener("click", () => {
    const listItems = document.querySelectorAll("ul li");

    const itemCount = listItems.length;

    console.log(`Number of items in the list: ${itemCount}`);
  });
});
