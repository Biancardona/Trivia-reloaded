
//Se crea una funcion que guarda el nombre del usuario en una variable.

function validateForm() {
 let nombres = document.forms["form"]["input_name"].value;
 if (nombres == "") { //Si no escribe nada muestra un alert en donde menciona que debe proporcionar el nombre.
   alert("Nombre debe ser proporcionado");
   return false;
 }
 else {  //Si escribe un nombre, guarda el nombre de usuario en el localStorage.
   if (typeof (Storage) !== "undefined") {//Par checar siel navegador soporta el localStorage.
     localStorage.setItem("nombres", nombres);//Para almacenar el nombre
     localStorage.setItem("correctas", "0")
     localStorage.setItem("incorrectas", "0")
   }
 }
}
// Set the date we're counting down to
let countDownDate = new Date(new Date().getTime()+31000);

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
  
    document.getElementById("demo").innerHTML = "TU TIEMPO SE ACABO";
}
  }, 1000);


//Funcion para hacer el conteo de respuestas correctas e incorrectas de rock con una funcion llamada correta
function correcta() {
   contador_original_str = localStorage.getItem("correctas")
   contador_original_int = parseInt(contador_original_str)
   contador_incremento = contador_original_int + 1
   contador_incrementado_str = contador_incremento.toString()
   localStorage.setItem("correctas", contador_incrementado_str)
 }
function incorrecta() {
   contador_original_str = localStorage.getItem("incorrectas")
   contador_original_int = parseInt(contador_original_str)
   contador_incremento = contador_original_int + 1
   contador_incrementado_str = contador_incremento.toString()
   localStorage.setItem("incorrectas", contador_incrementado_str)

}
//Conteo de respuestas correctas e incorrectas de Pop llamando a la funcion correcta e incorrecta
function correcta() {
   contador_original_str = localStorage.getItem("correctas")
   contador_original_int = parseInt(contador_original_str)
   contador_incremento = contador_original_int + 1
   contador_incrementado_str = contador_incremento.toString()
   localStorage.setItem("correctas", contador_incrementado_str)
 }
 function incorrecta() {
   contador_original_str = localStorage.getItem("incorrectas")
   contador_original_int = parseInt(contador_original_str)
   contador_incremento = contador_original_int + 1
   contador_incrementado_str = contador_incremento.toString()
   localStorage.setItem("incorrectas", contador_incrementado_str)

}

function reset(){
 localStorage.setItem("correctas", "0");
 localStorage.setItem("incorrectas", "0")
}
