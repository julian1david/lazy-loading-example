const baseUrl = 'https://randomfox.ca/'
const maximum = 122;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

export const createImagesNodes = () => {
    const wrapper = document.createElement('div');
    wrapper.className = "p-4";

    const image = document.createElement('img');
    image.className =  'mx-auto';
    image.width = "350"; 
    image.dataset.src= `${baseUrl}images/${random()}.jpg`;
    wrapper.appendChild(image)

    return [wrapper,image];
};