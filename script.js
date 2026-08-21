// limite de km para acionar o alarme de manutenção
var LIMITE_KM = 10000;

// lista onde vão ficar os caminhões cadastrados
var caminhoes = [];

function adicionarCaminhao() {
  var placa = document.getElementById("placa").value;
  var km = document.getElementById("km").value;

  // verifica se os campos foram preenchidos
  if (placa === "" || km === "") {
    alert("Preencha a placa e a quilometragem!");
    return;
  }

  // cria um objeto simples com os dados do caminhão
  var caminhao = {
    placa: placa,
    km: Number(km)
  };

  // adiciona na lista
  caminhoes.push(caminhao);

  // limpa os campos do formulário
  document.getElementById("placa").value = "";
  document.getElementById("km").value = "";

  // atualiza a tabela na tela
  mostrarCaminhoes();
}

function mostrarCaminhoes() {
  var tabela = document.getElementById("tabelaCaminhoes");
  var textoVazio = document.getElementById("vazio");

  // limpa a tabela antes de desenhar de novo
  tabela.innerHTML = "";

  // mostra ou esconde a mensagem de "lista vazia"
  if (caminhoes.length === 0) {
    textoVazio.style.display = "block";
  } else {
    textoVazio.style.display = "none";
  }

  for (var i = 0; i < caminhoes.length; i++) {
    var caminhao = caminhoes[i];

    // define o status de acordo com a quilometragem
    var status = "OK";
    var classeStatus = "ok";

    if (caminhao.km >= LIMITE_KM) {
      status = "URGENTE";
      classeStatus = "urgente";
    }

    // monta a linha da tabela
    var linha = "<tr>" +
                    "<td>" + caminhao.placa + "</td>" +
                    "<td>" + caminhao.km + " km</td>" +
                    "<td><span class='status " + classeStatus + "'>" + status + "</span></td>" +
                 "</tr>";

    // adiciona a linha na tabela
    tabela.innerHTML += linha;
  }
}

// mostra a mensagem de "lista vazia" quando a página abre
mostrarCaminhoes();
