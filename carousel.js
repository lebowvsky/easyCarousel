

const container = document.body.querySelector('#container');
const imagesCarousel = document.body.querySelectorAll('.imgCarousel');


/* Flex */
container.style.display = "flex";
container.style.justifyContent = "center";

imagesCarousel.forEach(image => {
    image.style.display = "none";
    
})

let i=0;

setInterval(()=> {
    let j=i-1
    j<0 ? j = imagesCarousel.length-1 : j;
    imagesCarousel[j].style.display = "none";
    imagesCarousel[i].style.display = "block";
    imagesCarousel[i].style.height = "100%";
    i == imagesCarousel.length-1 ? i=0 : i++;
}, 3000);


