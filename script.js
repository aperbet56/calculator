// Récupération des différents éléments
const buttons = document.querySelectorAll("button");
const inputResult = document.querySelector("#result");

// Déclaration de la fonction appendValue qui va permettre d'ajouter des valeurs
const appendValue = (buttonValue) => {
  inputResult.value += buttonValue;
  // inputResult.value = inputFieldEl.value + buttonValue;
};

// Déclaration de la fonction calculateResult qui va permettre de calculer le résultat d'une opération
const calculateResult = () => {
  inputResult.value = eval(inputResult.value);
};

// Déclaration de la fonction clearResult qui va permettre d'effacer le résultat
const clearResult = () => {
  inputResult.value = "";
};

// Boucle for qui va parcourir les différents boutons
for (let i = 0; i < buttons.length; i++) {
  // Ecoute de l'événement "click" sur les différents boutons
  buttons[i].addEventListener("click", () => {
    const buttonValue = buttons[i].textContent;
    if (buttonValue === "C") {
      // Appel de la fonction clearResult()
      clearResult();
    } else if (buttonValue === "=") {
      // Appel de la fonction calculateResult()
      calculateResult();
    } else {
      // Appel de la fonction appendValue ayant pour paramètre buttonValue
      appendValue(buttonValue);
    }
  });
}
