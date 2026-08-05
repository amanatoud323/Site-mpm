const texte = "Mouvement du Peuple en Marche(MPM)";
let index = 0;
const element = document.getElementById("slogan");

function effetMachineAEcrire() {
    if (index < texte.length) {
        element.innerHTML += texte.charAt(index);
        index++;
        setTimeout(effetMachineAEcrire, 50); // Vitesse d'écriture
    } else {
        // Une fois la phrase finie, on attend 2 secondes avant de tout effacer et recommencer
        setTimeout(effacerTexte, 2000);
    }
}

function effacerTexte() {
    if (index > 0) {
        // On supprime les lettres une par une (effet suppression)
        element.innerHTML = texte.substring(0, index - 1);
        index--;
        setTimeout(effacerTexte, 20); // Vitesse d'effacement
    } else {
        // Une fois effacé, on relance l'écriture
        setTimeout(effetMachineAEcrire, 500);
    }
}


    // Lancer l'effet au chargement de la page
    window.onload = effetMachineAEcrire;

    // l'intéraction du bouton rejoignez-nous
    const bouton = document.getElementById("btnRejoindre");

    bouton.addEventListener("click", function(event) {
        // Optionnel : si tu veux afficher un message avant de changer de page
        alert("Merci pour votre engagement au sein du MPM ! Remplissez le formulaire de contact pour finaliser.");
    });

    