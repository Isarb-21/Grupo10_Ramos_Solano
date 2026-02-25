
// =============================================
// 1. MENÚ HAMBURGUESA (para móvil)
// =============================================

const menuIcon = document.getElementById('menu-icon');
const navbar   = document.getElementById('navbar');

// Al hacer clic en el ícono de hamburguesa, muestra u oculta el menú
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    // toggle: si tiene la clase 'active' la quita, si no la tiene la agrega
    // El CSS de .navbar.active pone display:flex y muestra el menú
});

// Al hacer clic en un link del menú, lo cierra automáticamente
navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});


// =============================================
// 2. CAMBIAR LINK ACTIVO AL HACER SCROLL
// =============================================

// Seleccionamos todas las secciones y los links del navbar
const secciones = document.querySelectorAll('section, footer');
const navLinks  = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {

    let seccionActual = '';

    // Revisamos qué sección está visible en pantalla
    secciones.forEach(seccion => {
        const offsetTop = seccion.offsetTop - 150;
        // offsetTop: distancia desde el tope de la página hasta la sección
        if (window.scrollY >= offsetTop) {
            seccionActual = seccion.getAttribute('id');
            // Guardamos el id de la sección visible
        }
    });

    // Marcamos el link correspondiente como "active"
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + seccionActual) {
            link.classList.add('active');
        }
    });

});


// =============================================
// 3. ANIMACIÓN DE TARJETAS AL HACER SCROLL
// =============================================

// Usamos IntersectionObserver: detecta cuando un elemento entra en pantalla
// Es más eficiente que escuchar el evento scroll constantemente

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Si el elemento es visible, le agregamos la clase 'visible'
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
// threshold: 0.1 = se activa cuando el 10% del elemento es visible

// Le decimos al observer qué elementos vigilar
document.querySelectorAll('.projects-card, .habilidad-card, .contacto-card').forEach(card => {
    observer.observe(card);
});


// =============================================
// 4. FORMULARIO DE CONTACTO
// =============================================

const contactForm = document.getElementById('contactForm');

// Ahora sí existe el formulario en el HTML, entonces esto no genera error
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // preventDefault: cancela el envío normal del formulario (que recargaría la página)

    const nombre  = document.getElementById('nombre').value;
    const email   = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert('¡Gracias por tu mensaje, ' + nombre + '! Te responderé pronto.');
        contactForm.reset();
        // reset(): limpia todos los campos del formulario
    }
});