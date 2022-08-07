var buttonCalculateImc = document.querySelector("#button-calculate-imc");
buttonCalculateImc.addEventListener("click", handleButtonClick);

function calculateImc(weight, height) {
  return weight / (height * height);
}

function messagesResult(imc) {
  var message = "";

  if (imc >= 16 && imc <= 16.9) {
    message = "Muito abaixo do peso.";
  } else if (imc >= 17 && imc <= 18.4) {
    message = "Abaixo do peso.";
  } else if (imc >= 18.5 && imc < 25) {
    message = "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    message = "Acima do peso";
  } else if (imc >= 30 && imc < 35) {
    message = "Obesidade grau I";
  } else if (imc >= 35 && imc <= 40) {
    message = "Obesidade grau II";
  } else if (imc > 40) {
    message = "Obesidade grau III";
  }
  return message;
}

function handleButtonClick() {
  var inputWeight = document.querySelector("#input-weight");
  var inputHeight = document.querySelector("#input-height");
  var imcResult = document.querySelector("#imc-result");
  var imcMessage = document.querySelector("#imc-message");

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace(".", ",");
  var message = messagesResult(imc);

  imcResult.textContent = formattedImc;
  imcMessage.textContent = message;
}
