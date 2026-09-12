const inputBtn = document.getElementById("input-btn");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-output");
const volumeEl = document.getElementById("volume-output");
const massEl = document.getElementById("mass-output");
const inputEl = document.getElementById("input-el");

function calculateMeterToFeet(num) {
  let meter = Number(num);
  let feet = meter * 3.28084;
  return Number(feet.toFixed(3));
}

function calculateFeetToMeter(num) {
  let feet = Number(num);
  let meter = feet / 3.28084;
  return Number(meter.toFixed(3));
}

function calculateLength(num) {
  let feet = calculateMeterToFeet(num);
  let meter = calculateFeetToMeter(num);
  lengthEl.textContent = `${num} meters = ${feet}  feet | ${num} feet = ${meter} meters`;
}

function calculateLiterToGallon(num) {
  let liter = Number(num);
  let gallon = liter / 3.785;
  return Number(gallon.toFixed(3));
}

function calculateGallonToLiter(num) {
  let gallon = Number(num);
  let liter = gallon * 3.785;
  return Number(liter.toFixed(3));
}

function calculateVolume(num) {
  let gallon = calculateLiterToGallon(num);
  let liter = calculateGallonToLiter(num);
  volumeEl.textContent = `${num} liters = ${gallon} gallons | ${num} gallons = ${liter} liters`;
}

function calculateKiloToPound(num) {
  let kilo = num;
  let pound = kilo * 2.205;
  return Number(pound.toFixed(3));
}

function calculatePoundToKilo(num) {
  let pound = num;
  let kilo = pound / 2.205;
  return Number(kilo.toFixed(3));
}

function calculateMass(num) {
  let pound = calculateKiloToPound(num);
  let kilo = calculatePoundToKilo(num);
  massEl.textContent = `${num} kilos = ${pound} pounds | ${num} pounds = ${kilo} kilos`;
}
convertBtn.addEventListener("click", function () {
  calculateLength(Number(inputEl.value));
  calculateVolume(Number(inputEl.value));
  calculateMass(Number(inputEl.value));
});
