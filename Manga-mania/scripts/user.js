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