

const container = document.body.querySelector('#container');
const imagesCarousel = document.body.querySelectorAll('.imgCarousel');


/* Flex */
container.style.display = "flex";
container.style.justifyContent = "center";

/* imagesCarousel.forEach(image => {
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
}, 3000); */

imagesCarousel.forEach((image, index) => {
    image.style.height = "0";
    image.style.position = "absolute";
    index%2==0 ? imagesCarousel[index].style.top = "0" : imagesCarousel[index].style.bottom = "0";  //une photo sur deux a sa position top pour transition plus fluide (penser à gérer le cas nbre total photo est impair)
    image.style.transition = "all 350ms ease-in-out";
    
})

let i=0;
imagesCarousel[i].style.top = "0";
imagesCarousel[i].style.height = "100%";
setInterval(()=> {
    let j=i-1
    j<0 ? j = imagesCarousel.length-1 : j;
    imagesCarousel[j].style.height = "0";
    imagesCarousel[i].style.height = "100%";
    i == imagesCarousel.length-1 ? i=0 : i++;
}, 3000);
