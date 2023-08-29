let msjs = [];
let input = document.getElementById("msj");
let nombre = document.getElementById("nombreCompleto");
let btn = document.getElementById("btn");
let lista = document.getElementById("list");

function agregarMsj() {
  const msj = input.value;
  const nmbr = nombre.value;
  if (!msj || !nmbr) {
    // alert("Llena ambos campos para dejar tu mensaje");
    Toastify({
      text: "Llena ambos campos para dejar tu mensaje",
      duration: 3000,
    }).showToast();
  } else {
    const mensaje =
      '<h5 class="claseComentarios">El usuario "' +
      nmbr +
      '" dice: ' +
      msj +
      "</h5>";
    msjs.push(mensaje);
    input.value = "";
    nombre.value = "";
    //Agregado
    Toastify({
      text: "Su Comentario Ha Sido Agregado",
      duration: 3000,
    }).showToast();
    mostrarMsjs();
    //Agregado
  }
}

function eliminarMsj(index) {
  // msjs.splice(index, 1);
  // mostrarMsjs();
  Swal.fire({
    title: "Vas a eliminar tu comentario, ¿Estas Seguro?",
    imageUrl: "./img/TheRock.png",
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: ":D",
    showCancelButton: true,
    confirmButtonText: "¡Si, Eliminar!",
    cancelButtonText: "¡No, Mantener!",
  }).then((result) => {
    if (result.isConfirmed) {
      msjs.splice(index, 1);
      mostrarMsjs();
      //Borrado
      Toastify({
        text: "Su Comentario Ha sido Eliminado",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      mostrarMsjs();
      //Borrado
    }
  });
}

function mostrarMsjs() {
  !msjs.length
    ? (lista.innerHTML = "<li>No Hay Comentarios</li>")
    : (lista.innerHTML = "");
  msjs.forEach((mensaje, index) => {
    lista.innerHTML += `
      <li>
        <span>${mensaje}</span>
        <button class="delete" onclick="eliminarMsj(${index}) ">Eliminar</button>
      </li>
    `;
  });
}

document.addEventListener("DOMContentLoaded", mostrarMsjs);
btn.addEventListener("click", agregarMsj);
