/* -----------------------------------------------
   1. ANIMAÇÃO DE FUNDO (PARTÍCULAS / REDE NEURAL)
----------------------------------------------- */
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

// Ajusta o tamanho do canvas para a tela inteira
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Classe da Partícula
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.directionX = (Math.random() * 1) - 0.5; // Velocidade X
        this.directionY = (Math.random() * 1) - 0.5; // Velocidade Y
        this.size = (Math.random() * 3) + 1;         // Tamanho
        this.color = '#00aaff';                      // Azul Neon
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        // Verifica colisão com as bordas para inverter direção
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function init() {
    particlesArray = [];
    // Define a quantidade de partículas baseada no tamanho da tela
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            // Distância entre partículas
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                         + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

            // Se estiverem perto, desenha a linha
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                opacityValue = 1 - (distance / 20000);
                ctx.strokeStyle = 'rgba(0, 170, 255,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

// Redimensionar tela sem quebrar o efeito
window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

// Inicia as Partículas
init();
animate();


/* -----------------------------------------------
   2. EFEITO DE DIGITAÇÃO (TYPEWRITER)
----------------------------------------------- */
const elemento = document.querySelector('.texto-animado');
const frases = ['Desenvolvedor Backend', 'Entusiasta Linux', 'Estudante de Comp. Sci.', 'Fã de C++'];

let indiceFrase = 0;
let indiceLetra = 0;
let textoatual = '';
let letra = '';

function digitar() {
    if (indiceFrase === frases.length) {
        indiceFrase = 0;
    }

    textoatual = frases[indiceFrase];
    letra = textoatual.slice(0, ++indiceLetra);

    elemento.textContent = letra;

    if (letra.length === textoatual.length) {
        // Terminou a frase, espera um pouco
        indiceFrase++;
        indiceLetra = 0;
        setTimeout(digitar, 2000);
    } else {
        // Continua digitando
        setTimeout(digitar, 100);
    }
}

// Inicia a Digitação (se o elemento existir na página)
if(elemento) {
    digitar();
}