console.log("JS chargé");


// On crée un tableau qui va stocker toute les solutions

let solution = [
    [3, 7, 4, 1, 6, 5, 9, 2, 8],
    [1, 8, 5, 9, 2, 4, 7, 6, 9],
    [9, 6, 2, 8, 1, 3, 4, 1, 5],

    [5, 3, 1, 4, 8, 9, 6, 7, 2],
    [6, 4, 9, 7, 5, 2, 8, 3, 1],
    [8, 2, 7, 3, 1, 6, 5, 4, 9],

    [4, 9, 6, 2, 3, 8, 1, 5, 7],
    [2, 1, 8, 5, 4, 7, 3, 9, 6],
    [7, 5, 3, 6, 9, 1, 2, 8, 4],
];

// On crée un tableau vide qui va stocker toute la grille
let grille = [];

// Boucle sur les lignes (0 à 8)
for (let ligne = 0; ligne < 9; ligne++) {

    // On initialise chaque ligne comme un tableau vide
    grille[ligne] = [];

    // Boucle sur les colonnes (0 à 8)
    for (let col = 0; col < 9; col++) {

        // On récupère l'élément HTML grâce à son id ex: "2-5"
        let uneCase = document.getElementById(`${ligne}-${col}`);

        // On stocke l'élément dans la grille
        grille[ligne][col] = uneCase;

        // Si la case est un input 
        if (uneCase.tagName === "INPUT") {

            // On attend quand l'utilisateur appuie sur une touche du clavier
            uneCase.addEventListener("keydown", function(evenement) {
    
                // On vérifie que c'est la touche tabulation qui a été appuyée
                if (evenement.key === "Enter") {

                    // On empêche le Tab de changer de case tout de suite
                    evenement.preventDefault();

                    // parentElement remonte au parent HTML de l'input
                    // l'input est dans un <td>, donc caseParente = la <td>
                    // on en a besoin pour pouvoir changer la couleur de la case
                    let caseParente = uneCase.parentElement;

                    // On retire les anciennes couleurs avant d'en remettre une
                    caseParente.classList.remove("CaseBonne", "CaseFausse");

                    // Si l'input est vide on ne fait rien
                    if (uneCase.value === "") return;

                    // On verifie si l'input est égale à la bonne réponse (solution[ligne][col])
                    if (uneCase.value == solution[ligne][col]) {

                        // La valeur est correcte, on met la case en vert
                        caseParente.classList.add("CaseBonne");

                    } else {

                        // La valeur est fausse, on met la case en rouge
                        caseParente.classList.add("CaseFausse");

                    }
                }
            });
        }
    }
}