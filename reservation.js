var nom;
function Choix(elm){
    var boiteVitesse=document.getElementById("boite_vitesse");
    var dieselzone = document.getElementById("Diesel");
    var hybridezone = document.getElementById("Hybride");
    var electriquezone = document.getElementById("Electrique");
    var essencezone = document.getElementById("Essence");
    var boitmanuelle=document.getElementById("boite_Manuelle");
    var boitautomatique=document.getElementById("boite_Automatique");
    // console.log(e);
    console.log(elm.parentNode.childNodes);
    for (let index = 0; index < elm.parentNode.childNodes.length; index++) {
        const element = elm.parentNode.childNodes[index];
        if(element.style) {
            element.style.border = "none";
        }
     

    };
    elm.style.border = "thick solid red";
    nom=elm.id;
    if(elm.id=="moto"){
            boiteVitesse.style.display='none';
            dieselzone.style.display='none';
            hybridezone.style.display='none';
            electriquezone.style.display='block';
            essencezone.style.display='block';  
        }
        else if(elm.id=="compact"){
            nom="compact";
            console.log(nom);
            boiteVitesse.style.display='block';
            boitautomatique.style.display='none';
            boitmanuelle.style.display='block'
            dieselzone.style.display='block';
            hybridezone.style.display='block';
            electriquezone.style.display='none';
            essencezone.style.display='block';
        }
        else if(elm.id=="citadin"){
            nom="citadin";
            console.log(nom);
            boiteVitesse.style.display='block';
            boitautomatique.style.display='none';
            boitmanuelle.style.display='block'
            dieselzone.style.display='block';
            hybridezone.style.display='block';
            electriquezone.style.display='block';
            essencezone.style.display='block';
        }
        else if(elm.id=="utilitaire"){
            nom="utilitaire";
            console.log(nom);
            boiteVitesse.style.display='block';
            boitautomatique.style.display='none';
            boitmanuelle.style.display='block'
            dieselzone.style.display='block';
            hybridezone.style.display='none';
            electriquezone.style.display='none';
            essencezone.style.display='none';
        }
        else if(elm.id=="sedanberlin"){
            nom="sedanberlin";
            console.log(nom);
            boiteVitesse.style.display='block';
            boitautomatique.style.display='block';
            boitmanuelle.style.display='none'
            dieselzone.style.display='block'; 
            hybridezone.style.display='block';
            electriquezone.style.display='none';
            essencezone.style.display='block';
        }
        else if(elm.id=="engin"){
            nom="engin";
            console.log(nom);
            boiteVitesse.style.display='block';
            boitautomatique.style.display='none';
            boitmanuelle.style.display='block'
            dieselzone.style.display='block'; 
            hybridezone.style.display='none';
            electriquezone.style.display='none';
            essencezone.style.display='block';
        }
        else if(elm.id=="camion"){
            nom="camion";
            console.log(nom);
            boiteVitesse.style.display='block';
            boitautomatique.style.display='block';
            boitmanuelle.style.display='none';
            dieselzone.style.display='block'; 
            hybridezone.style.display='none';
            electriquezone.style.display='none';
            essencezone.style.display='none';
        }
}

function estimation_prix(){
    var vehicule= [{"nom":"moto", "prix":"100"},
                    {"nom":"compact","prix":"140"},
                    {"nom":"citadin","prix":"120"},
                    {"nom":"utilitaire","prix":"160"},
                    {"nom":"sedanberlin","prix":"200"},
                    {"nom":"engin","prix":"9000"},
                    {"nom":"camion","prix":"2500"}]

    var duree = document.getElementById("date").value;
    var carburant=document.getElementsByName("radio"); 
    var boitvitese=document.getElementsByName("radioc");
      if(duree!=""&& carburant[0].checked==true || carburant[1].checked==true || carburant[2].checked==true || carburant[3].checked==true && boitvitese[0].checked==true || boitvitese[1].checked==true){
        document.getElementById("dure_reservation").innerHTML+=duree+" jours";
      var payement;

      // Moto : 
    if(nom=="moto"){  
        document.getElementById("Resulboite_vitesse").style.display='none';
        document.getElementById("resulttype_vehicule").innerHTML+=vehicule[0].nom;
    if(carburant[0].checked==true){
         document.getElementById("resulttype_carburant").innerHTML+="essence";
            payement=((parseFloat(vehicule[0].prix*0.14)+parseFloat(vehicule[0].prix))*duree);
         }

    else if(carburant[2].checked==true){
        document.getElementById("resulttype_carburant").innerHTML+="electrique";   
        payement=((parseFloat(vehicule[0].prix*0.05)+parseFloat(vehicule[0].prix))*duree); 
    }
}

  // Compact :  
  else if(nom=="compact"){
    document.getElementById("Resulboite_vitesse").style.display='block';
    document.getElementById("resulttype_vehicule").innerHTML+=vehicule[1].nom;
    // calcule de carburant
    if(carburant[0].checked==true){
        document.getElementById("resulttype_carburant").innerHTML+="essence";
        payement=parseFloat(vehicule[1].prix)+(parseFloat(vehicule[1].prix*0.14));
    }
    else if(carburant[1].checked==true){
        document.getElementById("resulttype_carburant").innerHTML+="diessel";   
        payement=parseFloat(vehicule[1].prix)+(parseFloat(vehicule[1].prix*0.21));
    }
    else if(carburant[3].checked==true){
        document.getElementById("resulttype_carburant").innerHTML+="hybride";   
       payement=parseFloat(vehicule[1].prix)+(parseFloat(vehicule[1].prix*0.09));
    }
        document.getElementById("Resulboite_vitesse").innerHTML+="Manuelle" 
        payement=payement*duree;
}

 // Citadin :  

 else if(nom=="citadin"){
    document.getElementById("Resulboite_vitesse").style.display='block';
    document.getElementById("resulttype_vehicule").innerHTML+=vehicule[2].nom;
    // calcule de carburant
    if(carburant[0].checked==true){
        document.getElementById("resulttype_carburant").innerHTML+="essence";
        payement=((parseFloat(vehicule[2].prix*0.14))+parseFloat(vehicule[2].prix));
    }
    else if(carburant[1].checked==true){
        document.getElementById("resulttype_carburant").innerHTML+="diessel";   
        payement=((parseFloat(vehicule[2].prix*0.21))+parseFloat(vehicule[2].prix));
    }
    else if(carburant[2].checked==true){
        document.getElementById("resulttype_carburant").innerHTML+="electrique";   
        payement=((parseFloat(vehicule[2].prix*0.05))+parseFloat(vehicule[2].prix));
    }
    else if(carburant[3].checked==true){
        document.getElementById("resulttype_carburant").innerHTML+="Hybride";  
        payement=((parseFloat(vehicule[2].prix*0.09))+parseFloat(vehicule[2].prix)); 
    }
        document.getElementById("Resulboite_vitesse").innerHTML+="Manuelle" ;
        payement=payement*duree;
}

 // Utilitaire :

 else if(nom=="utilitaire"){
    document.getElementById("Resulboite_vitesse").style.display='block';
    document.getElementById("resulttype_vehicule").innerHTML+=vehicule[3].nom;
    // calcule de carburant
        document.getElementById("resulttype_carburant").innerHTML+="diessel";   
        payement=((parseFloat(vehicule[3].prix*0.21))+parseFloat(vehicule[3].prix));
        document.getElementById("Resulboite_vitesse").innerHTML+="Manuelle" ;
        payement=payement*duree; 
}
//Sedanberlin :
else if(nom=="sedanberlin"){
    document.getElementById("Resulboite_vitesse").style.display='block';
    document.getElementById("resulttype_vehicule").innerHTML+=vehicule[4].nom;
    // calcule de carburant
    if(carburant[0].checked==true){
        document.getElementById("resulttype_carburant").innerHTML+="essence";
        payement=((parseFloat(vehicule[4].prix*0.14))+parseFloat(vehicule[4].prix));
    }
    else if(carburant[1].checked==true){
        document.getElementById("resulttype_carburant").innerHTML+="diessel";   
        payement=((parseFloat(vehicule[4].prix*0.21))+parseFloat(vehicule[4].prix));
    }
    else if(carburant[3].checked==true){
        document.getElementById("resulttype_carburant").innerHTML+="Hybride";   
        payement=((parseFloat(vehicule[4].prix*0.09))+parseFloat(vehicule[4].prix));
    }
        document.getElementById("Resulboite_vitesse").innerHTML+="automatique";
        payement=(payement+parseFloat(vehicule[4].prix*0.19))*duree;
}

//Camion:

else if(nom=="camion"){
    document.getElementById("Resulboite_vitesse").style.display='block';
    document.getElementById("resulttype_vehicule").innerHTML+=vehicule[6].nom;
    // calcule de carburant
        document.getElementById("resulttype_carburant").innerHTML+="diessel";   
        payement=(parseFloat(vehicule[6].prix*0.21))+parseFloat(vehicule[6].prix);
        document.getElementById("Resulboite_vitesse").innerHTML+="automatique";
        payement=(payement+parseFloat(vehicule[6].prix*0.19))*duree;
}

//engin de chantier :
else if(nom=="engin"){
    document.getElementById("Resulboite_vitesse").style.display='block';
    document.getElementById("resulttype_vehicule").innerHTML+=vehicule[5].nom;
    // calcule de carburant
    if(carburant[0].checked==true){
        document.getElementById("resulttype_carburant").innerHTML+="essence";
        payement=((parseFloat(vehicule[5].prix*0.14)+parseFloat(vehicule[5].prix))*duree);
    }
    else if(carburant[1].checked==true){
        document.getElementById("resulttype_carburant").innerHTML+="diessel";   
        payement=((parseFloat(vehicule[5].prix*0.21)+parseFloat(vehicule[5].prix))*duree);
    }
        document.getElementById("Resulboite_vitesse").innerHTML+="Manuelle";

}

document.getElementById("prix_totale").innerHTML+=payement+" DH";
}else {
    alert("tous les champs est obligaoire");

 
}
}
    
  