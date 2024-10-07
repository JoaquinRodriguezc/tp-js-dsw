import "./style.css";

//ejercicio 1.2
const a = 10;
const b = 5;
console.log(a + b);
// ejercicio 1.3
const nombre = prompt("Cual es tu nombre?");
console.log("Hola, " + nombre);
// ejercicio 2.1
const c = 10;
const d = 5;
console.log("El mayor es ", c > d ? c : d);
// ejercicio 2.2
const numero = prompt("Dame un número para determinar si es par o impar");
console.log(`${numero} es `, numero % 2 === 0 ? "par" : "impar");
let contador = 10;
// ejercicio 3.1
while (contador > 0) {
  console.log(contador--);
}
// ejercicio 3.2
let number = 0;
do {
  number = prompt("Ingresa un numero mayor que 100");
} while (number <= 100);
//ejercicio 4.1
function esPar(number) {
  return number % 2 === 0;
}
esPar(2);
esPar(3);
//ejercicio 4.2
function celsiusToFahrenheit(celsius) {
  const f = celsius * 1.8 + 32;
  console.log(`${celsius}°C son ${f}°F`);
}
celsiusToFahrenheit(30);

//ejercicio 5.1
const persona = {
  nombre: "joaco",
  edad: 21,
  ciudad: "Mendoza",
};
persona.ciudad = "Barcelona";
console.log(persona);

//ejercicio 5.2
const libro = {
  autor: "Orwell",
  titulo: "1984",
  year: "1940",
  isAntiguo: function () {
    const n = new Date().getFullYear() - this.year;
    return n > 10;
  },
};
console.log("El libro ", libro.titulo, "es antiguo: ", libro.isAntiguo());

//6
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = array.map((n) => n * 2);
console.log(array, array2);
//6.2
const arrayPares = [];
for (let step = 0; step < 21; step++) {
  if (step % 2 === 0) {
    arrayPares.push(step);
  }
}
console.log(arrayPares);

//7 dom

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const btn = document.getElementById("b1");

btn.addEventListener("click", () => {
  p1.style = "color:blue";
  p2.style = "color:blue";
  p3.style = "color:blue";
});
const submitButton = document.getElementById("formButton");
const input = document.getElementById("input");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;
  alert(text);
});
// 8
const lis = document.querySelectorAll("li");
lis.forEach((li) => {
  li.addEventListener("click", (e) => console.log(li.innerHTML));
});
const btnHab = document.getElementById("hab");
const btnDes = document.getElementById("deshab");
const input2 = document.getElementById("input2");
btnHab.addEventListener("click", () => (input2.disabled = false));
btnDes.addEventListener("click", () => (input2.disabled = true));

// 9
const input3 = document.getElementById("inputEmail");
const btn3 = document.getElementById("b3");
const label = document.getElementById("label");
const correoGuardado = localStorage.getItem("correo");
if (correoGuardado) {
  label.innerHTML += correoGuardado;
}
btn3.addEventListener("click", () => {
  const correo = input3.value;
  localStorage.setItem("correo", correo);
});
