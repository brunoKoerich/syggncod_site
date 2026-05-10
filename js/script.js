const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.getElementById("closeLightbox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

/* ABRIR */

galleryImages.forEach((img, index) => {

  img.addEventListener("click", () => {

    currentIndex = index;

    showImage();

    lightbox.classList.add("active");

  });

});

/* MOSTRAR IMAGEM */

function showImage() {

  lightboxImage.src = galleryImages[currentIndex].src;

}

/* FECHAR */

closeBtn.addEventListener("click", () => {

  lightbox.classList.remove("active");

});

/* PREV */

prevBtn.addEventListener("click", () => {

  currentIndex--;

  if(currentIndex < 0) {
    currentIndex = galleryImages.length - 1;
  }

  showImage();

});

/* NEXT */

nextBtn.addEventListener("click", () => {

  currentIndex++;

  if(currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }

  showImage();

});

/* FECHAR AO CLICAR FORA */

lightbox.addEventListener("click", (e) => {

  if(e.target === lightbox) {
    lightbox.classList.remove("active");
  }

});

/* TECLADO */

document.addEventListener("keydown", (e) => {

  if(!lightbox.classList.contains("active")) return;

  if(e.key === "Escape") {
    lightbox.classList.remove("active");
  }

  if(e.key === "ArrowRight") {
    nextBtn.click();
  }

  if(e.key === "ArrowLeft") {
    prevBtn.click();
  }

});




/* =========================
   SCROLL TOP
========================= */

const scrollTopBtn = document.getElementById("scrollTopBtn");

/* MOSTRAR BOTÃO */

window.addEventListener("scroll", () => {

  if(window.scrollY > 400) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }

});

/* VOLTAR AO TOPO */

scrollTopBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

