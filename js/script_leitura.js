/* =========================================
   ELEMENTOS
========================================= */
const chapterButtons =
    document.querySelectorAll(".chapter-btn");

const chapterContent =
    document.getElementById("chapterContent");

const prevBtn =
    document.getElementById("prev");

const nextBtn =
    document.getElementById("next");

const sidebar =
    document.getElementById("sidebar");

const mobileToggle =
    document.getElementById("mobileToggle");

const progressBar =
    document.querySelector(".reading-progress__bar");

/* =========================================
   CAPÍTULOS
========================================= */

const chapters = [

    "capitulo_01.html",
    "capitulo_02.html",
    "capitulo_03.html",
    "capitulo_04.html",
    "capitulo_05.html"

];

/* =========================================
   ESTADO
========================================= */

let current =
    Number(localStorage.getItem("syggChapter")) || 0;

/* =========================================
   LOAD CHAPTER
========================================= */

async function loadChapter(index){

    try{

        const response =
            await fetch(
                `capitulos/${chapters[index]}`
            );

        const html =
            await response.text();

        chapterContent.innerHTML = html;

        updateButtons();

        localStorage.setItem(
            "syggChapter",
            index
        );

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }catch(error){

        chapterContent.innerHTML = `
            <p>
                Erro ao carregar capítulo.
            </p>
        `;

    }

}

/* =========================================
   UPDATE BUTTONS
========================================= */

function updateButtons(){

    chapterButtons.forEach((btn,index)=>{

        btn.classList.toggle(
            "active",
            index === current
        );

    });

    prevBtn.disabled =
        current === 0;

    nextBtn.disabled =
        current === chapters.length - 1;

}

/* =========================================
   MENU CLICK
========================================= */

chapterButtons.forEach((btn,index)=>{

    btn.addEventListener("click",()=>{

        current = index;

        loadChapter(current);

        sidebar.classList.remove("open");

    });

});

/* =========================================
   NEXT
========================================= */

nextBtn.addEventListener("click",()=>{

    if(current < chapters.length - 1){

        current++;

        loadChapter(current);

    }

});

/* =========================================
   PREV
========================================= */

prevBtn.addEventListener("click",()=>{

    if(current > 0){

        current--;

        loadChapter(current);

    }

});

/* =========================================
   MOBILE SIDEBAR
========================================= */

mobileToggle.addEventListener("click",()=>{

    sidebar.classList.toggle("open");

});

/* =========================================
   PROGRESS BAR
========================================= */

window.addEventListener("scroll",()=>{

    const scrollTop =
        window.scrollY;

    const height =
        document.documentElement.scrollHeight
        - window.innerHeight;

    const progress =
        (scrollTop / height) * 100;

    progressBar.style.width =
        progress + "%";

});

/* =========================================
   INIT
========================================= */

loadChapter(current); 
