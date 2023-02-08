"use strict";


// Récupèrer le préom du visiteur
//const prenom = prompt("Quel est ton prénom ? ");
//alert("bienvenue " + prenom);

// Ex transformer degres en ferenheit
let temperature = prompt("Entrer la température en degré celsius ? ");

if (isNaN(temperature)) {
    //alert("La variable n'est pas un nombre !");
}

let temperature2 = ((temperature * 9) / 5) + 32;

alert("La température en degrés farenheint est de  " + temperature2);





// alert("Bonjour le monde");

// afficher un contenu ou uen variable dans la console
console.log("toto");


// récupère le <h1> de la page
const titrePrincipal = document.querySelector("h1");
// titre en bleu
titrePrincipal.style.color = "blue";

/**
 * Ajoute du style a tout les `<li>` de la page
 */
function styleLi () {
    // récupère tout les <li> dans un tableau
    const elementsDeListe = document.querySelectorAll("li");
    console.log(elementsDeListe);

    // Met le 2ème <li> en rouge
    elementsDeListe[1].style.color = "red";

    // boucle qui parcour le tableau et mets un fond jaune
    for (let i =  0; i < elementsDeListe.length; i++){
        elementsDeListe[i].style.backgroundColor = "yellow";
    }

    // même chose avec un for off
    //boucle qui parcour le tableau et mets un fond jaune
    for (let element of elementsDeListe){
        element.style.fontWeight = "bold";
    }
}

// Ecouter l'évènement clic sur le <h1>
titrePrincipal.addEventListener("click",styleLi);

// recupère le formulaire
const form = document.querySelector("form");

// recupere la <ol> avec la classe commentaire
const olCommentaires = document.querySelector(".commentaires");

// recupere l'input avec id commentaire
const inputCommentaire = document.querySelector("#commentaire");

// Ecouter l'envoi du formulaire
form.addEventListener("submit", function ajouterCommentaire(event){
    event.preventDefault(); // stop l'envoi du formulaire

    // ajoute le contenu du champs commentaire a la liste
    olCommentaires.innerHTML += "<li>" + inputCommentaire.value + "</li>";

    // vide le champs de saisie
    inputCommentaire.value = " ";

    // redonne le focus au champs commentaire
    inputCommentaire.focus();
});
