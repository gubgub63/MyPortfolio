document.addEventListener("DOMContentLoaded", function() {
    // Définition des fonctions
    window.openModal = function() {
        document.getElementById("myModal").style.display = "block";
    };

    window.closeModal = function() {
        document.getElementById("myModal").style.display = "none";
    };

    // Ferme le modal si l'utilisateur clique en dehors du contenu
    window.onclick = function(event) {
        var modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});




