let HXH = "Hunter X Hunter"
let Boruto = "Boruto"
let DBS = "DBS"
let AOT = "AOT"

function TEST() {
    let PSEUDO = prompt('Veuillez entrer votre nom.');
    if(!PSEUDO) {
  TEST();
    } else {
      let pseudo = document.getElementById("username");
      username.innerHTML= PSEUDO;
      localStorage.setItem("username", PSEUDO)
      TEST2();
        }
  }

  function TEST2(){
      let MONEY = prompt('Veuillez Déposer un fond :');
    if(!MONEY) {
  TEST2();
    } else {
      localStorage.setItem("money", MONEY)
        }
  }

function TEST3(){
      localStorage.clear();
  }
  
  function star1(star1){
    window.alert("Vous avez mis 1 étoile")
    localStorage.setItem(star1, noteTab[0])
  }

  function star2(star2){
    window.alert("Vous avez mis 2 étoiles")
    localStorage.setItem(star2, noteTab[1])
  }

  function star3(star3){
    window.alert("Vous avez mis 3 étoiles")
    localStorage.setItem(star3, noteTab[2])
  }

  function star4(star4){
    window.alert("Vous avez mis 4 étoiles")
    localStorage.setItem(star4, noteTab[3])
  }

  function star5(star5){
    window.alert("Vous avez mis 5 étoiles")
    localStorage.setItem(star5, noteTab[4])
  }

var noteTab=new Array();
noteTab[0]="1☆";
noteTab[1]="2☆";
noteTab[2]="3☆";
noteTab[3]="4☆";
noteTab[4]="5☆";
var longueur=noteTab.length;