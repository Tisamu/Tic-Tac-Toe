// Déclaration des variables.
var c_player = "player1";
var player1_cases= [];
var player2_cases= [];
var case_clicked = "";
//Nombre de cases cliquées
var clicks = 0;


function update_cases(case_clicked){
  if(c_player == "player1"){
    player1_cases.push(case_clicked);
    //console.log("Le joueur 1 a: " + player1_cases);
  }else{
    player2_cases.push(case_clicked);
    //console.log("Le joueur 2 a: " + player2_cases);
  }
}

function check_win() {
    if(c_player == "player1"){
      cases_array = player1_cases;
    }else{
      cases_array = player2_cases;
    }
  if(//Première ligne horizontale
      (cases_array.indexOf("#11") != -1 && cases_array.indexOf("#12") != -1 && cases_array.indexOf("#13") != -1)
      //Deuxième ligne horizontale
      || (cases_array.indexOf("#21") != -1 && cases_array.indexOf("#22") != -1 && cases_array.indexOf("#23") != -1)
      //Troisième ligne horizontale
      || (cases_array.indexOf("#31") != -1 && cases_array.indexOf("#32") != -1 && cases_array.indexOf("#33") != -1)
      //Première ligne verticale
      || (cases_array.indexOf("#11") != -1 && cases_array.indexOf("#21") != -1 && cases_array.indexOf("#31") != -1)
      //Deuxème ligne verticale
      || (cases_array.indexOf("#12") != -1 && cases_array.indexOf("#22") != -1 && cases_array.indexOf("#32") != -1)
      //Troisième ligne verticale
      || (cases_array.indexOf("#13") != -1 && cases_array.indexOf("#23") != -1 && cases_array.indexOf("#33") != -1)
      //Première Diagonale
      || (cases_array.indexOf("#11") != -1 && cases_array.indexOf("#22") != -1 && cases_array.indexOf("#33") != -1)
      //Deuxième Diagonale
      || (cases_array.indexOf("#13") != -1 && cases_array.indexOf("#22") != -1 && cases_array.indexOf("#31") != -1)
    ){
      if(c_player == "player1"){
        alert("Les cercles gagnent");
        location.reload();
      }else{
        alert("Les croix gagnent");
        location.reload();
      }
  }

}

$(document).ready(function(){
  //Si on clique sur une case
  $(".case").click(function(){
    case_clicked = "#" + $(this).attr("id");
    //console.log("Cliqué: " + case_clicked);
    //On ajoute la classe du joueur
    if($(case_clicked).hasClass("player1") || $(case_clicked).hasClass("player2")){
      //console.log("Case déjà prise !");
    }else {
      //Compte du nombre de cases cliqués.
      clicks ++;
      //console.log(clicks + " cases cliqués");


      $(case_clicked).addClass(c_player);
      //Mise à jour des tableaux des cases cliqués par le joueur.
      update_cases(case_clicked);
      //Vérification du gagnant
      check_win();
      //Si il n'y a pas de victoire, checkage du match nul
      if(clicks == 9){
        alert("Match nul !");
        location.reload();
      }
      // Suppression du joueur en cours dans le tour
      $("#turn").removeClass(c_player);
      //Si c'est le joueur un qui joue..
        if(c_player == "player1") {
          //On change la classe après le click
          c_player = "player2";
        }else if(c_player == "player2"){
          //On change la classe après le click
          c_player = "player1";
        }
        // On met à jour le div du tour
        $("#turn").addClass(c_player);
    }


      });

    //Si on click sur le bouton reset_button
    $("#reset_button").click(function(){
      location.reload();
    });


})
