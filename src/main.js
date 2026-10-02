const letras = [
    ["T", "consonante", "Tigre"],
    ["U", "vocal", "Uva"],
    ["V", "consonante", "Vaca"],
    ["W", "consonante", "Wafle"],
    ["X", "consonante", "Xilófono"],
    ["Y", "consonante", "Yate"],
    ["Z", "consonante", "Zapato"]
];

const container = document.getElementById("container");

letras.forEach(([letra, tipo, palabra]) => {
    container.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class='card' data-tipo='${tipo}' onclick='voltear(this)'>
            <div class='card-frente'>
                <h1>${letra}</h1>
            </div>

            <div class='card-dorso'>
                <img src='./img T-Z/${letra}.png' alt='${palabra}'>
                <h3>${palabra}</h3>
            </div>
        </div>
    </div>
    `;
});


function voltear(card) {
    card.classList.toggle("volteada");
}