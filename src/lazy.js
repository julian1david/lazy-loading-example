//Entries: Todas las entras
let totalImages = 0;
let loadedImages = 0;

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImage);
});

const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting;
    //200px lejos d el apntalla haz lo siguiente si no no
    // true (detnro de la pantalla)


const loadImage = (entry) => {
    const imgNode = entry.target; //El nodo es el  div
    //const imagen = imgNodeDad.firstChild;
    const url = imgNode.dataset.src;
    
    //cargue imagen
    imgNode.src = url;

    imgNode.onload = () => {
        loadedImages += 1;
        logState();
    };
    //debuger
    //des registra la imagen (unlisten)
    observer.unobserve(imgNode);
}


export const registerImage = (image) =>{
    // IntersectactionObservador -> observer(image)
    observer.observe(image);
    totalImages += 1;
    logState();
}

function logState() {
    console.log(`⚪️ Total Imágenes: ${totalImages}`);
    console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
}