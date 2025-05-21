document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Animaciones al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Ejecutar animación al cargar la página
    animateOnScroll();
    
    // Ejecutar animación al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Tabs del plan de estudio
    const yearTabs = document.querySelectorAll('.year-tab');
    const yearContents = document.querySelectorAll('.year-content');
    
    if (yearTabs.length > 0) {
        yearTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remover clase active de todas las pestañas
                yearTabs.forEach(t => t.classList.remove('active'));
                
                // Agregar clase active a la pestaña actual
                this.classList.add('active');
                
                // Mostrar contenido correspondiente
                const year = this.getAttribute('data-year');
                yearContents.forEach(content => {
                    content.classList.remove('active');
                });
                
                document.getElementById(`year-${year}`).classList.add('active');
            });
        });
    }
});