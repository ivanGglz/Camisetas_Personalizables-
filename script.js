// script.js
// Modo claro / oscuro para Dark T-Shirts

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Crear el botón de modo automáticamente y agregarlo al header
  const header = document.querySelector("header");
  const toggleBtn = document.createElement("button");
  toggleBtn.id = "modo-toggle";
  toggleBtn.className = "modo-btn";
  header.appendChild(toggleBtn);

  // Leer el modo guardado (si existe)
  const modoGuardado = localStorage.getItem("modoTema");

  if (modoGuardado === "claro") {
    body.classList.add("modo-claro");
    toggleBtn.textContent = "Modo oscuro";
  } else {
    toggleBtn.textContent = "Modo claro";
  }

  // Función para cambiar el modo
  function cambiarModo() {
    const esModoClaro = body.classList.toggle("modo-claro");

    if (esModoClaro) {
      toggleBtn.textContent = "Modo oscuro";
      localStorage.setItem("modoTema", "claro");
    } else {
      toggleBtn.textContent = "Modo claro";
      localStorage.setItem("modoTema", "oscuro");
    }
  }

  // Escuchar el clic en el botón
  toggleBtn.addEventListener("click", cambiarModo);
});
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("pedidoForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var talla = document.getElementById("talla").value;
    var mensaje = document.getElementById("mensaje").value.trim();

    var telefono = "527671306891";

    var texto =
      "Nuevo pedido Dark T-Shirts\n" +
      "Nombre: " + nombre + "\n" +
      "Correo: " + correo + "\n" +
      "Talla: " + talla + "\n" +
      "Diseño o texto: " + mensaje;

    var url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(texto);

    window.open(url, "_blank");
  });
});