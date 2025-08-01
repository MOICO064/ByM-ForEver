document.addEventListener('DOMContentLoaded', function () {

    var imageModal = document.getElementById('imageModal');
    var modalImage = imageModal.querySelector('#modalImage');

    // Instancia del modal (o la obtiene si ya existe)
    function getModalInstance() {
        return bootstrap.Modal.getInstance(imageModal) || new bootstrap.Modal(imageModal);
    }

    // Cuando se va a mostrar, setea la imagen
    imageModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        var imageUrl = button.getAttribute('data-bs-src');
        modalImage.src = imageUrl;
    });

    // Clic en cualquier parte del modal: si no es sobre la imagen ni el cierre, se oculta
    imageModal.addEventListener('click', function (e) {
        if (modalImage.contains(e.target) || e.target.closest('.btn-close')) {
            return; // clic sobre la imagen o el botón, no cerramos aquí
        }
        getModalInstance().hide();
    });


    // Lógica del contador de tiempo juntos
    // const startDate = new Date("April 19, 2025 22:30:00").getTime(); // Fecha y hora de inicio: 19 de abril de 2025 a las 10:30 PM

    // const daysSpan = document.getElementById('days');
    // const hoursSpan = document.getElementById('hours');
    // const minutesSpan = document.getElementById('minutes');
    // const secondsSpan = document.getElementById('seconds');

    // function updateCountdown() {
    //     const now = new Date().getTime();
    //     const distance = now - startDate; // Distancia en milisegundos (tiempo transcurrido)

    //     // Cálculos de tiempo
    //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //     // Actualizar los elementos HTML
    //     daysSpan.innerHTML = days;
    //     hoursSpan.innerHTML = hours;
    //     minutesSpan.innerHTML = minutes;
    //     secondsSpan.innerHTML = seconds;
    // }

    // // Actualizar el contador cada segundo
    // setInterval(updateCountdown, 1000);

    // // Llamar a updateCountdown una vez al cargar para mostrar el tiempo inicial
    // updateCountdown();

    // Lógica del scroll-reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Dejar de observar una vez que se muestra
            }
        });
    }, {
        threshold: 0.1 // El 10% del elemento debe estar visible para activar la animación
    });

    // Seleccionar todas las secciones a las que se aplicará el efecto
    const sections = document.querySelectorAll('.content-section, .months-section, .map-section, .curious-facts-section, .time-together-section, .objectives-section, .letters-section, .made-with-section');
    sections.forEach((section) => {
        observer.observe(section);
    });
});
