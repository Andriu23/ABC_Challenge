// script.js - Lógica interactiva del proyecto

// 1. Variable global para el contador de progreso
let cantidadDescubiertas = 0;

// 2. Función voltear(card)
function voltear(card) {
    // Verificamos si es la primera vez que se voltea
    if (!card.classList.contains('volteada')) {
        // Agrega o quita la clase .volteada en esa card
        card.classList.add('volteada');
        
        // Sumamos al contador si es la primera vez
        cantidadDescubiertas++;
        
        // Actualizamos el texto del contador en la navbar
        const elementoContador = document.getElementById('contador');
        if (elementoContador) {
            elementoContador.textContent = cantidadDescubiertas;
        }
    } else {
        // Agrega o quita la clase .volteada en esa card (permite regresar al frente)
        card.classList.remove('volteada');
    }
}

// 3. Función filtrar(tipo)
function filtrar(tipo) {
    // Recorremos TODAS las cards del documento (cumpliendo el requerimiento de buscar '.card')
    const cartas = document.querySelectorAll('.card');
    
    cartas.forEach(carta => {
        if (tipo === 'todas') {
            // Si tipo es 'todas', muestra todas
            carta.classList.remove('oculto');
        } else if (tipo === 'vocales') {
            // Si tipo es 'vocales', muestra solo las que tienen data-tipo='vocal' y oculta el resto
            if (carta.dataset.tipo === 'vocal') {
                carta.classList.remove('oculto');
            } else {
                carta.classList.add('oculto');
            }
        }
    });
}
