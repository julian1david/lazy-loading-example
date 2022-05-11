
//create image
import { registerImage } from "./lazy";
import { createImagesNodes } from './utils'


// Cargue las imagenes existentes cuando cargue la página
const allImages = document.querySelectorAll("img[data-src]");
allImages.forEach(registerImage);

//Agregar las nuevas imagenes.
const mountNode = document.querySelector('#images');
const addButton = document.querySelector('#addImage');

const addImage = () => 
{ 
    const [node, image] = createImagesNodes();
    //guardamos la imagen que recibimos retornada de la funcion en una variable
    registerImage(image);
    //agregamos la imagen al contenedor padre
    mountNode.append(node);
}

addButton.addEventListener('click', addImage);

//Limpiar
const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
    mountNode.innerHTML = "";
});