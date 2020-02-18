let action = function calcul(){

    // Recupération des valeurs du formulaire
    const prix_achat = document.getElementById('prix_achat').value;
    const quantite_achetee = document.getElementById('quantite_achetee').value;
    const prix_vente = document.getElementById('prix_vente').value;


    // Calcul 
    const pourcentage = (prix_vente / prix_achat - 1) * 100;
    const gain = quantite_achetee * (1 + pourcentage / 100);
    const benefice = gain - quantite_achetee;


    // Affichage dans les labels
    // Vérification que les valeurs sont non nuls pour pas remplir les labels alors que l'utilisateur
    // n'a pas encore rempli entièrement le formulaire
    if(prix_achat != "" && quantite_achetee != "" && prix_vente != ""){
        document.getElementById('pourcentage').innerHTML = "Pourcentage : " + pourcentage.toFixed(2) + " %";
        document.getElementById('gain').innerHTML = "Gain " + gain.toFixed(2) + " ";
        document.getElementById('benefices').innerHTML = "Bénéfice : " + benefice.toFixed(2);
        if(benefice >= 0) document.getElementById('benefices').style.color = "green";
        else document.getElementById('benefices').style.color = "red";
    }
}


// Attribution de la fonction action au changement des formulaires
document.getElementById('prix_achat').onchange = action;
document.getElementById('quantite_achetee').onchange = action;
document.getElementById('prix_vente').onchange = action;

