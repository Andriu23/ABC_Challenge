let contador = 0;

function voltear(card) {

    // Agrega o quita la clase "volteada"
    card.classList.toggle("volteada");

    // Si es la primera vez que se voltea
    if (!card.dataset.volteada) {

        contador++;

        // Marcamos que esta card ya fue contada
        card.dataset.volteada = "true";

        // Actualizamos el contador
        document.getElementById("contador").textContent = contador;
    }
}