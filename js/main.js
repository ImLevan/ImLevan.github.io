// ** SCROLL ** //
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-menu a");

    // Función de tiempo para un efecto de desplazamiento suave
    function easeInOutCubic(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const start = window.pageYOffset;
                const target = targetElement.offsetTop;
                const duration = 1000; // Duración en milisegundos

                const startTime = performance.now();

                function scroll(time) {
                    const elapsed = time - startTime;
                    const progress = easeInOutCubic(elapsed / duration);
                    const newPosition = start + (target - start) * progress;

                    window.scrollTo(0, newPosition);

                    if (elapsed < duration) {
                        requestAnimationFrame(scroll);
                    }
                }

                requestAnimationFrame(scroll);
            }
        });
    });
});




// ** TOP HEADER ** //

const words = [
    "Desarrollador de Software",
    "Desarrollador Backend Java",
    "Desarrollador FrontEnd React",
];

const typingSpan = document.getElementById("typing-span");
let currentWordIndex = 0;
let isDeleting = false;
let currentText = "";
let charIndex = 0;

function typeNextWord() {
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
        currentText = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        currentText = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    typingSpan.textContent = currentText;

    // Ajustar la velocidad del borrado
    const deleteSpeed = isDeleting ? 20 : 80;

    if (!isDeleting && currentText === currentWord) {
        isDeleting = true;
        setTimeout(typeNextWord, 1500);
    } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(typeNextWord, 500);
    } else {
        setTimeout(typeNextWord, isDeleting ? deleteSpeed : 100);
    }
}

typeNextWord();

// Función para manejar el menú responsive
function responsiveMenu() {
    var body = document.body;
    var mobileNav = document.getElementById('mobile-nav');
    var mobileNavToggle = document.getElementById('icono-nav');
    var mobileBodyOverlay = document.getElementById('mobile-body-overly');

    if (mobileNav && mobileNavToggle && mobileBodyOverlay) {
        if (body.classList.contains('mobile-nav-active')) {
            body.classList.remove('mobile-nav-active');
            mobileNavToggle.querySelector('i').classList.remove('fa-times');
            mobileNavToggle.querySelector('i').classList.add('fa-bars');
            mobileBodyOverlay.style.display = 'none';
        } else {
            body.classList.add('mobile-nav-active');
            mobileNavToggle.querySelector('i').classList.remove('fa-bars');
            mobileNavToggle.querySelector('i').classList.add('fa-times');
            mobileBodyOverlay.style.display = 'block';
        }
    }
}

//funcion que manda el mail
const $form = document.querySelector('#form')
const $buttomMailto = document.querySelector('#send')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttomMailto.setAttribute('href', `mailto:chianesevalentin@gmail.com?subject=Nombre: ${form.get('name')} Correo: ${form.get('email')} Asunto: ${form.get('theme')}&body=${form.get('message')}`)
    $buttomMailto.click()
}


//Filtrado portfolio
document.addEventListener("DOMContentLoaded", function() {
    const filterItems = document.querySelectorAll("#portfolio-flters li");
    const portfolioItems = document.querySelectorAll(".proyecto");

    filterItems.forEach(filterItem => {
        filterItem.addEventListener("click", function() {
            // Cambia la clase activa en el filtro
            filterItems.forEach(item => item.classList.remove("filter-active"));
            this.classList.add("filter-active");

            const targetCategory = this.getAttribute("data-filter");

            // Muestra u oculta los proyectos según la categoría
            portfolioItems.forEach(item => {
                if (targetCategory === "*" || item.classList.contains(targetCategory)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            // Si no hay proyectos visibles, muestra un mensaje
            const visibleProjects = document.querySelectorAll(".proyecto[style='display: block;']");
            if (visibleProjects.length === 0) {
                document.querySelector(".mensaje-sin-proyectos").style.display = "block";
            } else {
                document.querySelector(".mensaje-sin-proyectos").style.display = "none";
            }
        });
    });
});

