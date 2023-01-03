
//adiciona o usuário
function addUser() {
  //guarda o que o nome que o usuário digitou
  userName = document.getElementById("userName").value;
  //coloca na memória do navegador
  localStorage.setItem("userName", userName);
  //troca de site
  window.location = "kwitterRoom.html";
}

function carregar(){
  //pega o nome do localStorage e guarda na variável
  userName = localStorage.getItem("userName");
  //exibe uma saudação
  document.getElementById("userName").innerHTML = "Seja bem vindo(a) "+userName;
}

