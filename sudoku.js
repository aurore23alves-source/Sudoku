// On crée un tableau qui va stocker toutes les solutions et cases fixes par saison
const niveaux = {

    // ETE = grille originale, la plus facile, chargée au démarrage
    ete: {
        solution: [
            [3, 7, 4, 1, 6, 5, 9, 2, 8],
            [1, 8, 5, 9, 2, 4, 7, 6, 3],
            [9, 6, 2, 8, 7, 3, 4, 1, 5],
            [5, 3, 1, 4, 8, 9, 6, 7, 2],
            [6, 4, 9, 7, 5, 2, 8, 3, 1],
            [8, 2, 7, 3, 1, 6, 5, 4, 9],
            [4, 9, 6, 2, 3, 8, 1, 5, 7],
            [2, 1, 8, 5, 4, 7, 3, 9, 6],
            [7, 5, 3, 6, 9, 1, 2, 8, 4],
        ],
        fixes: [
            [null, null, null, 1,    6,    5,    9,    2,    8   ],
            [1,    null, 5,    null, 2,    null, 7,    6,    null],
            [null, null, 2,    8,    null, null, null, null, null],
            [5,    3,    null, 4,    8,    9,    null, null, null],
            [6,    4,    null, 7,    null, null, 8,    3,    null],
            [null, null, 7,    null, 1,    null, null, 4,    9   ],
            [4,    9,    null, null, null, 8,    1,    5,    7   ],
            [null, 1,    8,    null, null, null, 3,    null, null],
            [null, null, null, 6,    9,    1,    2,    8,    null],
        ]
    },

    // PRINTEMPS = un peu plus dur
    printemps: {
        solution: [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9],
        ],
        fixes: [
            [5,    3,    null, null, 7,    null, null, null, null],
            [6,    null, null, 1,    9,    5,    null, null, null],
            [null, 9,    8,    null, null, null, null, 6,    null],
            [8,    null, null, null, 6,    null, null, null, 3   ],
            [4,    null, null, 8,    null, 3,    null, null, 1   ],
            [7,    null, null, null, 2,    null, null, null, 6   ],
            [null, 6,    null, null, null, null, 2,    8,    null],
            [null, null, null, 4,    1,    9,    null, null, 5   ],
            [null, null, null, null, 8,    null, null, 7,    9   ],
        ]
    },

    // AUTOMNE = difficile
    automne: {
        solution: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [4, 5, 6, 7, 8, 9, 1, 2, 3],
            [7, 8, 9, 1, 2, 3, 4, 5, 6],
            [2, 1, 4, 3, 6, 5, 8, 9, 7],
            [3, 6, 5, 8, 9, 7, 2, 1, 4],
            [8, 9, 7, 2, 1, 4, 3, 6, 5],
            [5, 3, 1, 6, 4, 2, 9, 7, 8],
            [6, 4, 2, 9, 7, 8, 5, 3, 1],
            [9, 7, 8, 5, 3, 1, 6, 4, 2],
        ],
        fixes: [
            [1,    null, null, null, 5,    null, null, null, 9   ],
            [null, 5,    null, 7,    null, null, null, 2,    null],
            [null, null, 9,    null, null, 3,    4,    null, null],
            [2,    null, null, null, 6,    null, null, null, 7   ],
            [null, 6,    null, null, null, null, null, 1,    null],
            [null, null, 7,    null, 1,    null, null, null, 5   ],
            [null, null, 1,    6,    null, null, 9,    null, null],
            [null, 4,    null, null, null, 8,    null, 3,    null],
            [9,    null, null, null, 3,    null, null, null, 2   ],
        ]
    },

    // HIVER = expert, le plus difficile
    hiver: {
        solution: [
            [8, 2, 7, 1, 5, 4, 3, 9, 6],
            [9, 6, 5, 3, 2, 7, 1, 4, 8],
            [3, 4, 1, 6, 8, 9, 7, 5, 2],
            [5, 9, 3, 4, 6, 8, 2, 7, 1],
            [4, 7, 2, 5, 1, 3, 6, 8, 9],
            [6, 1, 8, 9, 7, 2, 4, 3, 5],
            [7, 8, 6, 2, 3, 5, 9, 1, 4],
            [1, 5, 4, 7, 9, 6, 8, 2, 3],
            [2, 3, 9, 8, 4, 1, 5, 6, 7],
        ],
        fixes: [
            [null, null, null, 1,    null, null, null, null, null],
            [null, null, 5,    null, null, 7,    null, null, null],
            [null, 4,    null, null, 8,    null, null, 5,    null],
            [5,    null, null, null, null, null, 2,    null, null],
            [null, 7,    null, null, null, null, null, 8,    null],
            [null, null, 8,    null, null, null, null, null, 5   ],
            [null, 8,    null, null, 3,    null, null, 1,    null],
            [null, null, null, 7,    null, null, 8,    null, null],
            [null, null, null, null, null, 1,    null, null, null],
        ]
    }
};

// On crée un tableau vide qui va stocker toute la grille
let grille = [];

// On crée la solution et le timer
let solution = [];
let secondes = 0;
let timerInterval = null;

// Fonction qui génère les lignes et colonnes du tableau HTML
function genererTableau() {
    const table = document.getElementById("sudokuTable");
    table.innerHTML = "";

    // Boucle sur les lignes (0 à 8)
    for (let ligne = 0; ligne < 9; ligne++) {
        let tr = document.createElement("tr");

        // On ajoute la classe Separateur sur les lignes 3 et 6 pour les bordures épaisses
        if (ligne === 3 || ligne === 6) tr.classList.add("Separateur");

        // Boucle sur les colonnes (0 à 8)
        for (let col = 0; col < 9; col++) {
            let td = document.createElement("td");

            // On donne un id à chaque case ex: "2-5"
            td.id = `${ligne}-${col}`;

            // On ajoute la classe Lign sur les colonnes 2 et 5 pour les bordures épaisses
            if (col === 2 || col === 5) td.classList.add("Lign");

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

// Fonction qui charge un niveau selon la saison choisie
function chargerNiveau(saison) {
    const niveau = niveaux[saison];
    if (!niveau) return;

    solution = niveau.solution;

    // Boucle sur les lignes (0 à 8)
    for (let ligne = 0; ligne < 9; ligne++) {
        grille[ligne] = [];

        // Boucle sur les colonnes (0 à 8)
        for (let col = 0; col < 9; col++) {

            // On récupère l'élément HTML grâce à son id ex: "2-5"
            let td = document.getElementById(`${ligne}-${col}`);
            td.innerHTML = "";

            // On retire les anciennes classes au changement de niveau
            td.classList.remove("case-fixe", "CaseBonne", "CaseFausse", "Dark-Case", "Dark-Case-Lign");

            const valeurFixe = niveau.fixes[ligne][col];

            // Si la case est fixe, on affiche la valeur et on colorie en bleu
            if (valeurFixe !== null) {
                td.textContent = valeurFixe;
                td.classList.add("case-fixe");

                // Dark-Case-Lign si colonne 2 ou 5 (bordure droite épaisse), sinon Dark-Case
                if (col === 2 || col === 5) {
                    td.classList.add("Dark-Case-Lign");
                } else {
                    td.classList.add("Dark-Case");
                }

                // On stocke l'élément td dans la grille
                grille[ligne][col] = td;

            // Si la case est vide, on crée un input
            } else {
                let input = document.createElement("input");
                input.type = "text";
                input.maxLength = 1;
                input.pattern = "[1-9]";
                td.appendChild(input);

                // On stocke l'input dans la grille
                grille[ligne][col] = input;

                // On ajoute les écouteurs sur l'input
                ajouterEvenements(input, ligne, col);
            }
        }
    }

    // On remet le timer à zéro
    secondes = 0;
    document.getElementById("timer").textContent = "00:00";
    document.getElementById("messageFin").textContent = "";

    //Arrete le timer avant d'un relancer un nouveau
    if (timerInterval) clearInterval(timerInterval); 
    timerInterval = setInterval(mettreAJourTimer, 1000);
}

// Fonction qui ajoute les écouteurs sur un input
function ajouterEvenements(uneCase, ligne, col) {

    // On surligne la ligne et la colonne quand on clique sur une case
    uneCase.addEventListener("focus", function() {
        //On appelle la fonction qui retire le surlignage de la casee précédente lorsqu'on clique sur une nouvelle case
        retirerSurlignage();

        // On surligne toute la ligne (ligne et col sont deja utilisé donc on créer des nouveaux compteurs col2 et ligne2)
        for (let col2 = 0; col2 < 9; col2++) grille[ligne][col2].classList.add("Surlign-Ligne");

        // On surligne toute la colonne
        for (let ligne2 = 0; ligne2 < 9; ligne2++) grille[ligne2][col].classList.add("Surlign-Ligne");

        // On surligne la case cliquée elle-même plus fort
        uneCase.classList.add("Surlign-Ligne");
    });

    // On retire le surlignage quand on clique en dehors de la grille
    uneCase.addEventListener("blur", function() {
        retirerSurlignage();
    });

    // On attend quand l'utilisateur appuie sur une touche du clavier
    uneCase.addEventListener("keydown", function(evenement) {
        //Autorise seulement les chiffres entre 1 et 9
        if (!/^[1-9]$/.test(evenement.key) &&
            evenement.key !== "Backspace" &&
            evenement.key !== "Delete" &&
            evenement.key !== "Enter" &&
            evenement.key !== "Tab" &&
           !evenement.key.startsWith("Arrow")) {

            evenement.preventDefault();
        }

        // On vérifie que c'est la touche Entrée qui a été appuyée
        if (evenement.key === "Enter") {

            // On empêche le comportement par défaut
            evenement.preventDefault();

            // Pour passer directement à la case suivante après avoir tapé sur Entrée
            let prochaineCase = col + 1;
            let prochaineLigne = ligne;

            // Si on a fait toutes les cases d'une ligne, on passe à la première case de la ligne suivante
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

                    // Si on a fait toutes les cases d'une ligne, on passe à la première case de la ligne suivante
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

        // Pour supprimer la valeur de la case ainsi que la couleur avec la touche Suppr et la touche Effacer
        if (evenement.key === "Delete" || evenement.key === "Backspace") {
            uneCase.value = "";
            uneCase.parentElement.classList.remove("CaseBonne", "CaseFausse");
        }
    });
}

// Fonction pour retirer le surlignage de toute la grille
function retirerSurlignage() {
    for (let ligne = 0; ligne < 9; ligne++) {
        for (let col = 0; col < 9; col++) {
            if (grille[ligne] && grille[ligne][col]) {
                grille[ligne][col].classList.remove("Surlign-Ligne", "Surlign-Ligne");
            }
        }
    }
}

// Fonction permettant de vérifier si toute la grille est remplie
function verifierFin() {
    for (let ligne = 0; ligne < 9; ligne++) {
        for (let col = 0; col < 9; col++) {
            // Si une case est encore vide, on affiche aucun mot de fin
            if (grille[ligne][col].tagName === "INPUT" && grille[ligne][col].value === "") {
                return;
            }
        }
    }

    // Si on arrive ici, toutes les cases sont remplies, on vérifie la solution
    let Erreurs = 0;
    for (let ligne = 0; ligne < 9; ligne++) {
        for (let col = 0; col < 9; col++) {
            // On additionne le nombre de cases ne correspondant pas à la solution pour avoir le nombre d'erreurs
            if (grille[ligne][col].tagName === "INPUT" && grille[ligne][col].value != solution[ligne][col]) {
                Erreurs = Erreurs + 1;
            }
        }
    }

    // Si il y a des erreurs on affiche le nombre d'erreurs
    if (Erreurs > 0) {
        document.getElementById("messageFin").textContent = "Tu as fait " + Erreurs + " Erreur(s)";
    } else {
        // Si tout correspond à la solution on affiche un message de félicitation
        document.getElementById("messageFin").textContent = "Bravo tu as tout bon !";
        //On évite que plusieurs chrono tournent en même temps
        if (timerInterval) clearInterval(timerInterval);
    }
}

// Quand on clique sur le bouton valider, on affiche les couleurs de toutes les cases
document.getElementById("boutonValider").addEventListener("click", function() {
    for (let ligne = 0; ligne < 9; ligne++) {
        for (let col = 0; col < 9; col++) {
            if (grille[ligne] && grille[ligne][col].tagName === "INPUT" && grille[ligne][col].value === "") {
                // Si une case est vide on affiche un message
                document.getElementById("messageFin").textContent = "Veuillez remplir toutes les cases !";
                return;
            }
        }
    }

    // Si toutes les cases sont remplies on affiche les couleurs
    for (let ligne = 0; ligne < 9; ligne++) {
        for (let col = 0; col < 9; col++) {
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

//Reinitialise la grille lorsqu'on appuie sur Réinitialiser
function resetGrille() {
    for (let ligne = 0; ligne < 9; ligne++) {
        for (let col = 0; col < 9; col++) {
            if (grille[ligne][col].tagName === "INPUT") {
                grille[ligne][col].value = "";
                grille[ligne][col].parentElement.classList.remove("CaseBonne", "CaseFausse");
            }
        }
    }
    //Efface aussi le message de fin laisser par le bouton Valider
    document.getElementById("messageFin").textContent = "";
}
//On lance la fonction resetGrille quand on clique sur le bouton Réinitialiser
document.getElementById("boutonReset").addEventListener("click", resetGrille);


//On retire l'ancien mode de couleur du body avant d'appliquer le nouveau, pour éviter que deux modes se cumulent
function resetModes() {
    document.body.classList.remove(
        "ModeEte",
        "ModeHiver",
        "ModePrintemps",
        "ModeAutomne"
    );
}
//Lance la fonction resetModes lorsqu'on appuie sur un bouton de saison 
document.getElementById("boutonEte").addEventListener("click", function() {
    resetModes();
    document.body.classList.add("ModeEte");
    creerDecors("ete");
    chargerNiveau("ete");
});

document.getElementById("boutonHiver").addEventListener("click", function() {
    resetModes();
    document.body.classList.add("ModeHiver");
    creerDecors("hiver");
    chargerNiveau("hiver");
});

document.getElementById("boutonPrintemps").addEventListener("click", function() {
    resetModes();
    document.body.classList.add("ModePrintemps");
    creerDecors("printemps");
    chargerNiveau("printemps");
});

document.getElementById("boutonAutomne").addEventListener("click", function() {
    resetModes();
    document.body.classList.add("ModeAutomne");
    creerDecors("automne");
    chargerNiveau("automne");
});


//Génèration de 30 éléments animés qui tombent en fonction de la saison choisie
function creerDecors(type) {
    // On récupère le conteneur des décorations (zone ou les éléments animés vont tomber)
    let zoneDecors = document.getElementById("decorations");
    zoneDecors.innerHTML = "";
    
    for (let i = 0; i < 30; i++) {
        // On crée un div pour chaque élément
        let elem = document.createElement("div");
        // On choisit l'emoji selon la saison
        if (type === "hiver") {
            elem.classList.add("flocon");
            elem.textContent = "❄️";

        } else if (type === "ete") {
            elem.classList.add("papillon");
            elem.textContent = "🦋";

        } else if (type === "printemps") {
            elem.classList.add("papillon");
            elem.textContent = "🌸";

        } else if (type === "automne") {
            elem.classList.add("feuille");
            elem.textContent = "🍂";
        }

        // On donne à chaque élément une position/durée/taille aléatoire
        elem.style.left = Math.random() * 100 + "vw";
        elem.style.animationDuration = (3 + Math.random() * 5) + "s";
        elem.style.fontSize = (15 + Math.random() * 20) + "px";

        // Insère l'élément à l'intérieur de la div decorations dans le HTML
        zoneDecors.appendChild(elem);
    }
}

// Temps de jeux
function mettreAJourTimer() {
    secondes++;
    // On convertit les secondes en minutes et on récupère les secondes restantes
    let minutes = Math.floor(secondes / 60);
    let sec = secondes % 60;

    // format 00:00
    let affichage =
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (sec < 10 ? "0" + sec : sec);

    document.getElementById("timer").textContent = affichage;
}


document.getElementById("boutonIndice").addEventListener("click", function() {
    // On récupère toutes les cases vides
    let casesVides = [];
    for (let ligne = 0; ligne < 9; ligne++) {
        for (let col = 0; col < 9; col++) {
            if (grille[ligne][col].tagName === "INPUT" && grille[ligne][col].value === "") {

                //On stocke les coordonnées de chaque case vide pour pouvoir en choisir une au hasard juste après.
                casesVides.push({ ligne, col });
            }
        }
    }

    // Si toutes les cases sont remplies, on ne fait rien
    if (casesVides.length === 0) return;

    // On choisit une case vide au hasard
    let hasard = Math.floor(Math.random() * casesVides.length);
    let { ligne, col } = casesVides[hasard];

    // On révèle la valeur correcte de cette case
    grille[ligne][col].value = solution[ligne][col];

    // On la colorie en vert
    grille[ligne][col].parentElement.classList.add("CaseBonne");
});



// On génère le tableau HTML puis on charge le niveau Eté au démarrage
genererTableau();
chargerNiveau("ete");