document.addEventListener("DOMContentLoaded", function() {
    // Définition des fonctions
    window.openModal2 = function() {
        document.getElementById("myModal2").style.display = "block";
    };

    window.closeModal2 = function() {
        document.getElementById("myModal2").style.display = "none";
    };

    // Ferme le modal si l'utilisateur clique en dehors du contenu
    window.onclick = function(event) {
        var modal = document.getElementById("myModal2");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});