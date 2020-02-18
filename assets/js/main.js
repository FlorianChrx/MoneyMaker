function button(){
    let unite = document.getElementById('unite').value;
    let prix_achat = document.getElementById('prix_achat').value;
    let quantite_achetee = document.getElementById('quantite_achetee').value;
    let prix_vente = document.getElementById('prix_vente').value;


    let pourcentage = prix_vente > prix_achat ? (prix_vente / prix_achat - 1) * 100 : -((prix_achat / prix_vente - 1) * 100);

    let gain = quantite_achetee * (1 + pourcentage / 100);


    let benefice = gain - quantite_achetee;

    document.getElementById('uniteAff').innerHTML = unite;
    document.getElementById('pourcentage').innerHTML = "Pourcentage : " + pourcentage.toFixed(2) + " %";
    document.getElementById('gain').innerHTML = "Gain " + gain.toFixed(2) + " " + unite;
    document.getElementById('benefice').innerHTML = "Bénéfice : " + benefice.toFixed(2) + " " + unite;
    if(benefice > 0) document.getElementById('benefice').style.color = "green";
    else document.getElementById('benefice').style.color = "red";
}
