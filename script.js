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



/* --- Parte da Foto de Perfil (Clique) --- */
var myImageElement = document.getElementById('MyImage');


var currentImageName = 'myfoto.png';

myImageElement.onclick = function() {
    
    // 1. Se for a foto original, muda para a foto1
    if (currentImageName === 'myfoto.png') {
        currentImageName = 'foto1.png';
        
    // 2.  Se for a foto1, muda para a foto2
    } else if (currentImageName === 'foto1.png') {
        currentImageName = 'foto2.png';
        
    // 3. Se for a foto2, muda para a foto3
    } else if (currentImageName === 'foto2.png') {
        currentImageName = 'foto3.png';
        
    // 4. Se for qualquer outra (no caso, foto3), volta para a original
    } else {
        currentImageName = 'myfoto.png';
    }
    
    // Aplica a mudança
    myImageElement.src = currentImageName;
}