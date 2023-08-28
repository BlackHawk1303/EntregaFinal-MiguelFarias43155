//Se aplica fetch utilizando una API que busca el clima
//de santiago de Chile buscando latitud y longitud

//Intenté utilizar la ubicación del usuario pero no logré
//hacer que el navegador me consultara por mi ubicación

//Los grados lo muestra como valor redondeado y en Celsius
let information = document.getElementById("temperature");

window.addEventListener("load", (event) => {
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=-33.45&longitude=-70.64&current_weather=true`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.current_weather.temperature);
      information.innerHTML =
        Math.round(parseFloat(data.current_weather.temperature)) + " °C";
    });
});
