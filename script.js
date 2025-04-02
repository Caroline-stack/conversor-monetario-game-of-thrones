function converterMoeda() {
    const valor = parseFloat(document.getElementById('valor').value);
    const moeda = document.getElementById('moeda').value;

    const taxasDeCambio = {
        dragao: 500, 
        veado: 50,   
        tostao: 5,   
        honor: 300,  
        vintem: 20   
    };

    if (isNaN(valor) || valor <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira um valor válido.";
        return;
    }
    const valorConvertido = valor * taxasDeCambio[moeda];
    const valorFormatado = valorConvertido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('resultado').innerText = `O valor convertido é ${valorFormatado}`;
}
let scrollPosition = 0;
let maxScroll = 0;

window.addEventListener("load", function () {
    const img = new Image();
    img.src = getComputedStyle(document.body).backgroundImage.slice(5, -2); 

    img.onload = function () {
        const windowHeight = window.innerHeight;
        const imageHeight = img.height;

        maxScroll = Math.max(0, imageHeight - windowHeight);

        window.addEventListener("wheel", function (event) {
            let speed = 3; 

            scrollPosition += event.deltaY * 0.3;
            scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));

            document.body.style.backgroundPosition = `center -${scrollPosition}px`;
        });
    };
});

