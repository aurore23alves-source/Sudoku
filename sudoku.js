document.querySelectorAll("input").forEach(function(uneCase) {
    uneCase.addEventListener("keydown", function(evenement) {
        console.log("touche :", evenement.key);
    });
});