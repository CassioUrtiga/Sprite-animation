let canvas = document.getElementById('tela');
let caneta = canvas.getContext('2d');

let p = new Personagem(caneta);

function inicializar(){
    caneta.clearRect(0,0,canvas.width,canvas.height);

    p.desenhar();
    
    requestAnimationFrame(inicializar)
}

inicializar();