//todo1. Create an index.html file and put four p elements

//Answer: Done!

//todo2. Get the first paragraph by using document.querySelector(tagname)

//Answer:
document.addEventListener("DOMContentLoaded", () => {
  const firstParagraph = document.querySelector("p");

  console.log(firstParagraph);
  //todo3. Get each of the paragraph using document.querySelector(#id)

  //Answer:
  const secondParagraph = document.querySelector("#second");
  const thirdParagraph = document.querySelector("#third");
  const fourthParagraph = document.querySelector("#fourth");

  console.log(secondParagraph);
  console.log(thirdParagraph);
  console.log(fourthParagraph);

  //todo4. Get all the p as nodeList using document.querySelectorAll(tagname)

  //Answer:
  const allParagraphs = document.querySelectorAll("p");
  console.log(allParagraphs);

  //todo5. Loop through the nodeList and get the text content of each paragraph

  //Answer: Done!

  allParagraphs.forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1}: ${paragraph.textContent}`);
  });

  //todo6. Set a text content to the fourth paragraph

  //Answer:

  fourthParagraph.textContent = "This is the updated fourth paragraph.";

  //todo7. Set id and class attribute for all the paragraphs using different methods

  //Answer:
  firstParagraph.id = "first";
  firstParagraph.className = "paragraph";

  secondParagraph.setAttribute("id", "second");
  secondParagraph.setAttribute("class", "paragraph");

  thirdParagraph.id = "third";
  thirdParagraph.classList.add("paragraph");

  fourthParagraph.id = "fourth";
  fourthParagraph.classList.add("paragraph");

  //todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

  //Answer:

  firstParagraph.style.color = "blue";
  firstParagraph.style.backgroundColor = "lightgray";
  firstParagraph.style.border = "1px solid black";
  firstParagraph.style.fontSize = "16px";
  firstParagraph.style.fontFamily = "Arial, sans-serif";

  secondParagraph.style.color = "red";
  secondParagraph.style.backgroundColor = "lightyellow";
  secondParagraph.style.border = "1px solid black";
  secondParagraph.style.fontSize = "16px";
  secondParagraph.style.fontFamily = "Arial, sans-serif";

  thirdParagraph.style.color = "green";
  thirdParagraph.style.backgroundColor = "lightpink";
  thirdParagraph.style.border = "1px solid black";
  thirdParagraph.style.fontSize = "16px";
  thirdParagraph.style.fontFamily = "Arial, sans-serif";

  fourthParagraph.style.color = "purple";
  fourthParagraph.style.backgroundColor = "lightblue";
  fourthParagraph.style.border = "1px solid black";
  fourthParagraph.style.fontSize = "16px";
  fourthParagraph.style.fontFamily = "Arial, sans-serif";

  //todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

  //Answer:
  allParagraphs.forEach((paragraph, index) => {
    if (index === 0 || index === 2) {
      paragraph.style.color = "green";
    } else if (index === 1 || index === 3) {
      paragraph.style.color = "red";
    }
  });
});
