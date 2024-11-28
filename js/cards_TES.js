//EFECTO BOTON CARD 1

document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el botón
    let button = document.querySelector(".card_button--activated");

    // Función para mostrar la notificación
    let showNotification = () => {
        button.classList.add("open");
    };

    // Función para ocultar la notificación
    let hideNotification = () => {
        button.classList.remove("open");
    };

    // Configurar el bucle continuo
    let startNotificationLoop = () => {
        let isOpen = false;

        // Alternar entre mostrar y ocultar con tiempos ajustados
        setInterval(() => {
            if (!isOpen) {
                showNotification();
                isOpen = true;

                // Cierra después de 1 segundo
                setTimeout(() => {
                    hideNotification();
                    isOpen = false;
                }, 3000); // Tiempo visible
            }
        }, 2000); // Inicia un nuevo ciclo cada 2 segundos
    };

    // Inicia el bucle
    startNotificationLoop();
});




//EFECTO PRECIO CARD 3

let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});


let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord =
        currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    // Rotate out letters of current word
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    // Reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

    // Stop rotation after one cycle
    if (currentWordIndex === maxWordIndex) {
        setTimeout(() => {
            // Fix activated price
            words[currentWordIndex].style.opacity = "1";
            Array.from(words[currentWordIndex].children).forEach((letter) => {
                letter.className = "letter in";
            });
        }, 1000); // Slight delay to finish animation
        clearInterval(rotationInterval);
    }
};

// Initial delay to show the starting price
setTimeout(() => {
    rotateText();
    var rotationInterval = setInterval(rotateText, 4000);
}, 2000); // Adjust the delay (2000ms = 2 seconds)
