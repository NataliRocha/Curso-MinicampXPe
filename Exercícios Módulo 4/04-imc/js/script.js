function start() {
  console.log('start');
  console.log(54, 1.54);
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
  handleButtonClick();

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  console.log(weight);
  console.log(height);
  var imc = calculateImc(weight, height);
  var formattedIMC = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedIMC;
}
start();
