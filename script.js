// génère un nombre au hasard entre 1 et 100.
var chiffreHasard =  Math.floor(Math.random()*100+1);
var bouton = document.getElementById("clic");
var debut = "Bienvenue !";
var choix = "L'ordinateur a choisi son chiffre. Il s'agit de ..." + chiffreHasard +" !";
var tours = 1;


console.log(debut);
console.log(choix);



bouton.addEventListener("click", function(){
    var valeurSaisie = document.getElementById("nombre").value;
    var dif = valeurSaisie - chiffreHasard;
    var choixjoueur = "Vous avez choisi " + valeurSaisie + " !";
    console.log(`Vous êtes au tour numéro: ${tours}`)
    console.log(choixjoueur);

    if(valeurSaisie <= 0 || valeurSaisie > 100){
        document.querySelector(".result").innerHTML = "Veuillez entrer un nombre entre 1 et 100"
    }
    else if(dif == 0){
        var animation = document.querySelector(".result");
        //déclaration de variable, la classe résult html s'appelle animation en javascript 
        animation.innerHTML = "Bravo !"; 
        animation.className="anim";
        //j'attribue à cette variable la classe anim présente dans mon css avec l'animation
        // animation += 2
        //animation = animation +2
        console.log("Fin du script JS.")
    } else if(dif <= 10 && dif >= -10){
        document.querySelector(".result").innerHTML = "C'est chaud !";   
    }else if ((dif >= 11 && dif <= 30) || (dif <= -11 && dif>= -30)){
        document.querySelector(".result").innerHTML = "C'est froid...";
    }else{
        document.querySelector(".result").innerHTML = "C'est très froid...";
    }
        if(tours>=5 && tours<=9){
            document.querySelector(".result").innerHTML = "Indice : le nombre se situe entre " + (chiffreHasard - 5) + " et " + (chiffreHasard + 5);
        }else if(tours==10){
            document.querySelector("#jeu").style.display="none";
            document.querySelector(".result").innerHTML = "Vous avez effectué vos 10 tours, c'est perdu !" 
        console.log("Fin du script JS.")  
    } 
    document.getElementById("nbtour").innerHTML = "Vous avez effectué " + tours + " tour(s).";
    tours++
    });
    

    

