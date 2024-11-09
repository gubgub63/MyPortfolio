document.addEventListener("DOMContentLoaded", function() {
    // Définition des fonctions
    window.openModal3 = function() {
        document.getElementById("myModal3").style.display = "block";
    };

    window.closeModal3 = function() {
        document.getElementById("myModal3").style.display = "none";
    };

    // Ferme le modal si l'utilisateur clique en dehors du contenu
    window.onclick = function(event) {
        var modal = document.getElementById("myModal3");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});