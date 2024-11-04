// Seleccionar el modal y elementos dentro del modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgAmpliada");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");

// Seleccionar todas las imágenes de la galería
const images = document.querySelectorAll(".gallery-item");

// Añadir un evento de clic a cada imagen para abrir el modal
images.forEach((img) => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Cerrar el modal cuando se hace clic en el botón de cierre
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Cerrar el modal si se hace clic fuera de la imagen
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};