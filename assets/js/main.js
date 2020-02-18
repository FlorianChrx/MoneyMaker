const action = function calcul() {
    const prix_achat = document.getElementById('prix_achat').value;
    const quantite_achetee = document.getElementById('quantite_achetee').value;
    const prix_vente = document.getElementById('prix_vente').value;


    const pourcentage = prix_vente > prix_achat ? (prix_vente / prix_achat - 1) * 100 : -((prix_achat / prix_vente - 1) * 100);

    const gain = quantite_achetee * (1 + pourcentage / 100);


    const benefice = gain - quantite_achetee;

    document.getElementById('pourcentage').innerHTML = "Pourcentage : " + pourcentage.toFixed(2) + " %";
    document.getElementById('gain').innerHTML = "Gain " + gain.toFixed(2) + " ";
    document.getElementById('benefices').innerHTML = "Bénéfice : " + benefice.toFixed(2);
    if(benefice > 0) document.getElementById('benefices').style.color = "green";
    else document.getElementById('benefices').style.color = "red";
}

document.getElementById('prix_achat').onchange = action;
document.getElementById('quantite_achetee').onchange = action;
document.getElementById('prix_vente').onchange = action;
