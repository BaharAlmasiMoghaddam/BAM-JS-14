/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/

//Answer:

document.addEventListener("DOMContentLoaded", () => {
  const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

  const text = prompt("Hi! Please enter a text:");

  const wordDiv = document.getElementById("word");

  let coloredText = "";
  for (let letter of text) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    coloredText += `<span style="color:${color}">${letter}</span>`;
  }

  wordDiv.innerHTML = coloredText;
});
