function calcularValores() {
  // Obter os valores dos campos de entrada
  var valor1 = parseFloat(document.getElementById("txtValor1").value);
  var valor2 = parseFloat(document.getElementById("txtValor2").value);

  // Obter a operação selecionada
  var operacao = document.getElementById("cbxOperacao").value;

  // Realizar o cálculo com base na operação selecionada
  var resultado;
  switch (operacao) {
    case "+":
      resultado = valor1 + valor2;
      break;
    case "-":
      resultado = valor1 - valor2;
      break;
    case "/":
      resultado = valor1 / valor2;
      break;
    case "*":
      resultado = valor1 * valor2;
      break;
    default:
      resultado = "Operação inválida";
  }

  // Exibir o resultado
  document.getElementById("txtResultado").textContent = resultado;
}
