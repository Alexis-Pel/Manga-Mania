function showusername (){
  localStorage.setItem("USERNAME", myName);
  username = localStorage.getItem("USERNAME");
  console.log(username);
}