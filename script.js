// Une boucle for

function sommeEntier(nombreFinal){
  let S = 0;
  for (let k = 0 ; k<= nombreFinal ; k++){
    S = S+k;
  }
  return S
}


function afficherCalcul() {

  var mynumber = parseInt(document.getElementById("mynumber").value);
  
  let maSomme = sommeEntier(mynumber);
  
  
  var parag1 = document.createElement('p');
  parag1.textContent = "La somme est égale à " + maSomme.toString();

  document.getElementById("zoneMessage").textContent = "Voici le résultat du calcul";
  document.getElementById("zoneMessage").appendChild(parag1); 
  
}

document.getElementById("boutonValider").addEventListener("click", afficherCalcul);
