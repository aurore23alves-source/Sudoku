// Initialisation d'un tableau vide pour représenter la grille (9x9)
let grille = [];

// Boucle sur les lignes (0 à 8)
for (let ligne = 0; ligne < 9; ligne++) {

    // On initialise chaque ligne comme un tableau
    grille[ligne] = [];

    // Boucle sur les colonnes (0 à 8)
    for (let col = 0; col < 9; col++) {

        // Récupère l'élément HTML 
        grille[ligne][col] = document.getElementById(`${ligne}-${col}`);

        // Stocke l'élément dans une variable 
        let uneCase = grille[ligne][col];

        // Vérifie si la case est un champ input (modifiable par l'utilisateur)
        if (uneCase.tagName === "INPUT") {

            // Si oui, on récupère la valeur saisie par l'utilisateur
            grille[ligne][col] = uneCase.value;

        } else {

            // Sinon, on récupère le texte contenu dans l'élément (case fixe)
            grille[ligne][col] = uneCase.textContent;

        }

    }
}