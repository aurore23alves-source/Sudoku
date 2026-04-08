// Initialisation d'un tableau vide pour représenter la grille (9x9)
let grille = [];

for (let ligne = 0; ligne < 9; ligne++) {
  grille[ligne] = [];

  for (let col = 0; col < 9; col++) {

    let uneCase = document.getElementById(${ligne}-${col});

    // ON GARDE L'ÉLÉMENT HTML
    grille[ligne][col] = uneCase;

    // Si c’est un input → on ajoute l’événement
    if (uneCase.tagName === "INPUT") {

      uneCase.addEventListener("keyup", () => {

        let value = uneCase.value;

        // reset couleurs
        uneCase.classList.remove("CaseBonne", "CaseFausse");

        if (value === "") return;

        // Vérif simple (juste 1-9)
        if (value >= "1" && value <= "9") {
          uneCase.classList.add("CaseBonne");
        } else {
          uneCase.classList.add("CaseFausse");
        }

      });

    }
  }
}
