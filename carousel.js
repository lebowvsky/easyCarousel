

const container = document.body.querySelector('#container');
const imagesCarousel = document.body.querySelectorAll('.imgCarousel');


/* Flex */
container.style.display = "flex";
container.style.justifyContent = "center";






if(container.className == 'top-to-btm'){

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
}   , 3000);

} else if(container.className == 'side-to-side'){

    imagesCarousel.forEach((image, index) => {
        image.style.width = "0";
        /* image.style.height = "100%"; */
        image.style.position = "absolute";
        index%2==0 ? imagesCarousel[index].style.left = "0" : imagesCarousel[index].style.right = "0";  //une photo sur deux a sa position gauche pour transition plus fluide (penser à gérer le cas nbre total photo est impair)
        image.style.transition = "all 350ms ease-in-out";   
    })

    let i=0;
    imagesCarousel[i].style.top = "left";
    imagesCarousel[i].style.width = "100%";
    setInterval(()=> {
        let j=i-1
        j<0 ? j = imagesCarousel.length-1 : j;
        imagesCarousel[j].style.width = "0";
        imagesCarousel[i].style.width = "100%";
        i == imagesCarousel.length-1 ? i=0 : i++;
    }   , 3000);
}


