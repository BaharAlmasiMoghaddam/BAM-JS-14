//! ** You should not modify HTML codes.
//? The photos are duplicated and wrong. :((
// todo1: please go and find a picture for each character that mentioned in cards in HarryPotter.html .
// todo2: assign the picutre of each character to it's card.

/**WRITE CODE BELOW */

document.addEventListener("DOMContentLoaded", () => {
  const characterImages = {
    "Hermione-Granger": "./img/HG.jpg",
    "Ron-Weasley": "./img/RW.jpg",
    "Severus-Snape": "./img/SS.avif",
    "Draco-Malfoy": "./img/DM.avif",
    "Cedric-Diggory": "./img/SD.avif",
    "Lord-Voldemort": "./img/Voldy.jpg",
    "Bellatrix-Lestrange": "./img/BL.jpg",
  };

  for (const [id, src] of Object.entries(characterImages)) {
    const imgElement = document.getElementById(id);
    if (imgElement) {
      imgElement.src = src;
    }
  }
});
