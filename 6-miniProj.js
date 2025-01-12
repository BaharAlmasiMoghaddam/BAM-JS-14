//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second

//Answer:

document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  setInterval(() => {
    const yearText = "2020";
    let coloredYearText = "";
    const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

    for (let char of yearText) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      coloredYearText += `<span style="color:${color}">${char}</span>`;
    }
    h1.innerHTML = h1.innerHTML.replace(yearText, coloredYearText);
  }, 1000);

  //todo2: Completed challenge has background green

  //Answer:

  const listItems = document.querySelectorAll("ul li");

  listItems.forEach((item) => {
    if (item.textContent.includes("Done")) {
      item.style.backgroundColor = "green";
      //todo3: Ongoing challenge has background yellow

      //Answer:
    } else if (item.textContent.includes("Ongoing")) {
      item.style.backgroundColor = "yellow";

      //todo4: Coming challenges have background red

      //Answer:
    } else if (item.textContent.includes("Coming")) {
      item.style.backgroundColor = "red";
    }
  });
});
