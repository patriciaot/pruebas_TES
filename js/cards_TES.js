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


