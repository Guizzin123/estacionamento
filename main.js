function estacionamento(){
  var Tempo = document.getElementById("tempo").value;
  var Modelo = document.getElementById("input2").value;
  var codigo = document.getElementById("codigo").value;
  var divresultado = document.getElementById("resultado");
  divresultado.innerHTML = resultado +"Valor Total"  ;

  valortotal = codigo * Tempo
switch (codigo) {
    case "1":
      var valor = 3.5
      var valortotal = valor * Tempo;
      resultado.innerHTML = "O total a se pagar é " + valortotal + " Reais";
      break;
      
      case "2":
      var valor = 4.0
      var valortotal = valor * Tempo;
      resultado.innerHTML = "O total a se pagar é " + valortotal + " Reais";
      break;
      
      case "3":
      var valor = 4.5
      var valortotal = valor * Tempo;
      resultado.innerHTML = "O total a se pagar é " + valortotal + " Reais";
      break;
      
      case "4":
      var valor = 5.0
      var valortotal = valor * Tempo;
      resultado.innerHTML = "O total a se pagar é " + valortotal + " Reais";
      break;
      
      case "5":
      var valor = 6.0
      var valortotal = valor * Tempo;
      resultado.innerHTML = "O total a se pagar é " + valortotal + " Reais";
      break;
      
      case "6":
      var valor = 7.0
      var valortotal = valor * Tempo;
      resultado.innerHTML = "O total a se pagar é " + valortotal + " Reais";
      break;

      default:
      
  }
  if (codigo >=1 && codigo <= 6 && Tempo >= 1 && Tempo <= 3)
  alert ('código válido e tempo validos, seja bem vindo')

  else if (alert ('código ou tempo inválido, tente novamente'));

  else if (Tempo >= 4)
  alert('AVISO:Limite de 3 horas')

}

function novocad() {
  alert('os dados serão limpos')
  document.getElementById('input1').value='';
	document.getElementById('input2').value='';
	document.getElementById('codigo').value='';
  document.getElementById('tempo').value='';
}