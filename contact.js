
 function validation(){

    var Nom=document.getElementById("Nom");
    var CaractereValide=/^[a-zA-Z]+?$/;
    var Prenom=document.getElementById("Prenom");
    var Email=document.getElementById("Email"); 
    var Email_Valide = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    var Sujet=document.getElementById("Sujet");
    var Message=document.getElementById("Message");
    var compteur=0;
    if(Nom.value==""){
        document.getElementById("ErreurNom").innerHTML="Le Nom est Obligatoire !";
         compteur++;
    }
    else if(CaractereValide.test(Nom.value)==false){
        document.getElementById("ErreurNom").innerHTML="le Nom est Incorrecte !";
         compteur++;

    }
    if(Prenom.value==""){
        document.getElementById("ErreurPrenom").innerHTML="le Prenom est Obligatoire !";
        compteur++;
    }
    else if(CaractereValide.test(Prenom.value)==false){
        document.getElementById("ErreurPrenom").innerHTML="le Prenom et Incorrecte !";
       compteur++;
    }
    if(Email.value==""){
        document.getElementById("ErreurEmail").innerHTML="L'email est Obligatoire !";
       compteur++;
    }
    else if(Email_Valide.test(Email.value)==false){
        document.getElementById("ErreurEmail").innerHTML="L'email est Incorrecte !";
      compteur++;
    }
    if(Sujet.value==""){
        document.getElementById("ErreurSujet").innerHTML="le sujet est obligatoire !";
     compteur++;
    }
    else if(CaractereValide.test(Sujet.value)==false){
        document.getElementById("ErreurSujet").innerHTML="Le Sujet et Incorrecte !";
       compteur++;
    }
    if(Message.value==""){
        document.getElementById("ErreurMessage").innerHTML="Veuillez Ecrire un message SVP !";
      compteur++;
    }
    else if(Message.value.length<10){
    	document.getElementById("ErreurMessage").innerHTML="Message Insuffisant";
      	compteur++;
    }
    if(compteur ==0){
        alert("Votre contenu est bien traite:");
        Nom.value="";
        Prenom.value="";
        Email.value="";
        Sujet.value="";
        Message.value="";
        document.getElementById("ErreurMessage").innerHTML=document.getElementById("ErreurSujet").innerHTML=document.getElementById("ErreurEmail").innerHTML=document.getElementById("ErreurPrenom").innerHTML=document.getElementById("ErreurNom").innerHTML="";
    }
 }
