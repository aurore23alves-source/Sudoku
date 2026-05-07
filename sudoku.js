
// On crée un tableau qui va stocker toute les solutions

let solution = [
    [3, 7, 4, 1, 6, 5, 9, 2, 8],
    [1, 8, 5, 9, 2, 4, 7, 6, 3],
    [9, 6, 2, 8, 7, 3, 4, 1, 5],

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
    
                
                if (evenement.key === "0") {
                    evenement.preventDefault();
                }
                
                // On vérifie que c'est la touche tabulation qui a été appuyée
                if (evenement.key === "Enter") {

                    // On empêche le Tab de changer de case tout de suite
                    evenement.preventDefault();

                    
                    //Pour passer directement à la case suivante après avoir taper sur Entrer
                    let prochaineCase = col + 1;
                    let prochaineLigne = ligne;

                    // Si on a fait toute les cases d'une ligne, on passe à la première case de la ligne suivante
                    if (prochaineCase > 8) {
                        prochaineCase = 0;
                        prochaineLigne = ligne + 1;
                    }

                    // On vérifie qu'on est pas sorti du tableau et on met à jour la case suivante 
                    if (prochaineLigne < 9) {
                        let caseSuivante = grille[prochaineLigne][prochaineCase];

                        // Tant que la case suivante est fixe, on continue d'avancer
                        while (caseSuivante.tagName !== "INPUT" && prochaineLigne < 9) {
                            prochaineCase = prochaineCase + 1;
                            // Si on a fait toute les cases d'une ligne, on passe à la première case de la ligne suivante
                            if (prochaineCase > 8) {
                                prochaineCase = 0;
                                prochaineLigne = prochaineLigne + 1;
                            }
                            // On met à jour la case suivante
                            if (prochaineLigne < 9) {
                                caseSuivante = grille[prochaineLigne][prochaineCase];
                            }
                        }

                        // On met le focus sur la prochaine case input trouvée
                        if (prochaineLigne < 9) {
                            caseSuivante.focus();
                        }
                    }

                }

            });

            // Pour supprimer la valeur de la case ainsi que la couleru de la case avec la touche Suppr et la touche effacer 
            uneCase.addEventListener("keydown", function(evenement) {
                if (evenement.key === "Delete" || evenement.key === "Backspace") {
                    uneCase.value = "";
                    uneCase.parentElement.classList.remove("CaseBonne", "CaseFausse");
                }
            });
        }
    }
}

//Fonction permettant de vérifier si toute la grille est remplie
function verifierFin() {
    for (ligne = 0; ligne < 9; ligne++) {
        for (col = 0; col < 9; col++) {
            // Si une case est encore vide, on affiche aucun mot de fin
            if (grille[ligne][col].tagName === "INPUT" && grille[ligne][col].value === "") {
                return;
            }
        }
    }
    // Si on arrive ici, toutes les cases sont remplies, on vérifie la solution
    let Erreurs = 0;
    for (ligne = 0; ligne < 9; ligne++) {
        for (col = 0; col < 9; col++) {
            // On additionne le nombre de case ne correspond pas à la solution pour avoir le nombre d'erreurs
            if (grille[ligne][col].tagName === "INPUT" && grille[ligne][col].value != solution[ligne][col]) {
                Erreurs = Erreurs + 1;
            }
        }
    }
    // Si il y a des erreurs on affiche le nombre d'erreurs
    if (Erreurs > 0) {
        document.getElementById("messageFin").textContent = "Malheureusement tu as faux ! Tu as fait " + Erreurs + " Erreur(s)";
    } else {
        // Si tout correspond à la solution on affiche un message de félicitation
        document.getElementById("messageFin").textContent = "Bravo tu as tout bon !";
    }
}

    // Quand on clique sur le bouton valider, on affiche les couleurs de toutes les cases
    document.getElementById("boutonValider").addEventListener("click", function() {
    for (ligne = 0; ligne < 9; ligne++) {
        for (col = 0; col < 9; col++) {
            if (grille[ligne][col].tagName === "INPUT" && grille[ligne][col].value === "") {
                // Si une case est vide on affiche un message
                document.getElementById("messageFin").textContent = "Veuillez remplir toutes les cases !";
                return;
            }
        }
    }
    // Si toutes les cases sont remplies on affiche les couleurs
    for (ligne = 0; ligne < 9; ligne++) {
        for (col = 0; col < 9; col++) {
            if (grille[ligne][col].tagName === "INPUT") {
                let caseParente = grille[ligne][col].parentElement;
                caseParente.classList.remove("CaseBonne", "CaseFausse");
                if (grille[ligne][col].value == solution[ligne][col]) {
                    caseParente.classList.add("CaseBonne");
                } else {
                    caseParente.classList.add("CaseFausse");
                }
            }
        }
    }
    verifierFin();
});

// Quand on clique sur le bouton garçon, on change le mode
document.getElementById("boutonGarcon").addEventListener("click", function() {
    // On retire l'ancien mode et on met le mode garçon
    document.body.classList.remove("ModeFille");
    document.body.classList.add("ModeGarcon");
});

// Quand on clique sur le bouton fille, on change le mode
document.getElementById("boutonFille").addEventListener("click", function() {
    // On retire l'ancien mode et on met le mode fille
    document.body.classList.remove("ModeGarcon");
    document.body.classList.add("ModeFille");
});