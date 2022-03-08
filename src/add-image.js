import Krusty from './krusty.gif';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Krutsy';
    img.width = 300;
    img.src = Krusty;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;