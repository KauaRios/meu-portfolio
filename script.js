var backgroundDiv = document.querySelector('.background-carousel');
var images = ['foto1.png', 'foto2.png','foto3.png']; 
var index = 0;

backgroundDiv.style.backgroundImage = 'url("' + images[index] + '")';

setInterval(function() {
    backgroundDiv.style.opacity = 0; 

    setTimeout(function() {
        index++;
        if (index >= images.length) {
            index = 0; 
        }
        backgroundDiv.style.backgroundImage = 'url("' + images[index] + '")';
        backgroundDiv.style.opacity = 1;
    }, 1000); 
}, 4000);







//typerwriter

const elemento=document.querySelector('.texto-animado');

const frases=['Desenvolvedor Backend','Entusiasta Linux','Estudante De Ciências da computação ','Fã de C++']

let indiceFrase=0;
let indiceLetra=0;
let textoatual=0;
let letra='';



function digitar(){
    if(indiceFrase===frases.length){
        indiceFrase=0;
    }

    textoatual=frases[indiceFrase];

    letra=textoatual.slice(0,++indiceLetra);

    elemento.textContent=letra;

    if(letra.length===textoatual.length){
        // Se terminou a frase, espera 2 segundos, limpa e vai pra próxima
            indiceFrase++;
            indiceLetra = 0;
            setTimeout(digitar, 2000); 
        } else {
            // Se não terminou, continua digitando rápido
            setTimeout(digitar, 100); 
        }
    }

    // Inicia a função
    digitar();


    










