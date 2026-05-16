/* =========================================================
   GALERIA LIGHTBOX
========================================================= */

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const lightboxCloseBtn =
  document.getElementById("closeLightbox");

const lightboxPrevBtn =
  document.getElementById("prevBtn");

const lightboxNextBtn =
  document.getElementById("nextBtn");

let currentGalleryIndex = 0;

/* ABRIR */

if(galleryImages.length > 0){

  galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

      currentGalleryIndex = index;

      showGalleryImage();

      lightbox.classList.add("active");

    });

  });

}

/* MOSTRAR IMAGEM */

function showGalleryImage(){

  lightboxImage.src =
    galleryImages[currentGalleryIndex].src;

}

/* FECHAR */

if(lightboxCloseBtn){

  lightboxCloseBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

  });

}

/* PREV */

if(lightboxPrevBtn){

  lightboxPrevBtn.addEventListener("click", () => {

    currentGalleryIndex--;

    if(currentGalleryIndex < 0){

      currentGalleryIndex =
        galleryImages.length - 1;

    }

    showGalleryImage();

  });

}

/* NEXT */

if(lightboxNextBtn){

  lightboxNextBtn.addEventListener("click", () => {

    currentGalleryIndex++;

    if(currentGalleryIndex >= galleryImages.length){

      currentGalleryIndex = 0;

    }

    showGalleryImage();

  });

}

/* FECHAR AO CLICAR FORA */

if(lightbox){

  lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

      lightbox.classList.remove("active");

    }

  });

}

/* TECLADO */

document.addEventListener("keydown", (e) => {

  if(!lightbox) return;

  if(!lightbox.classList.contains("active")) return;

  if(e.key === "Escape"){

    lightbox.classList.remove("active");

  }

  if(e.key === "ArrowRight"){

    lightboxNextBtn.click();

  }

  if(e.key === "ArrowLeft"){

    lightboxPrevBtn.click();

  }

});

/* =========================================================
   SCROLL TOP
========================================================= */

const scrollTopBtn =
  document.getElementById("scrollTopBtn");

/* MOSTRAR BOTÃO */

window.addEventListener("scroll", () => {

  if(!scrollTopBtn) return;

  if(window.scrollY > 400){

    scrollTopBtn.classList.add("show");

  }else{

    scrollTopBtn.classList.remove("show");

  }

});

/* VOLTAR AO TOPO */

if(scrollTopBtn){

  scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}