const arrow = document.querySelectorAll("[data-arrow]");
const scroll = document.querySelectorAll("[data-scroll]");
let images = [...document.querySelectorAll("img")]; // Ho messo le mie imagine in una lista.
let galleryContainer = document.querySelector(".gallery-container");
let hashLength = 0;
let j = 16;
for(let i = 0; i < images.length; i++)
{

    images[i].style.backgroundSize = "cover";
    images[i].style.backgroundRepeat = "no-repeat";
    images[i].style.backgroundImage = `url(https://picsum.photos/id/${j}/600/300)`;
    j++;
}
//      Drag Event      //
let isDragStart;
let isDragEnd;

images.forEach((image) => 
{
    image.addEventListener("dragstart", (e) =>
    {
        isDragStart = e.layerX;
    });

    image.addEventListener("dragend", (e) =>
    {
        isDragEnd = e.layerX;

        if(isDragStart > isDragEnd)
            moveLeft();
            
        else
            moveRight();
        
    })
})



//      Scroll Event     //
let galleryScroll = document.querySelector(".gallery-scroll");
galleryScroll.addEventListener("wheel", scrollImages);
function scrollImages(evento)
{
    if(evento.wheelDelta > 0)
        moveLeft();
    else
        moveRight();
}

arrow.forEach((elemento) =>
{
    elemento.addEventListener("click", (evento) =>
    {
        nextPhoto(evento.target.dataset.arrow);
    })
})

function nextPhoto(operacao)
{
    if(operacao === '-')
    {
        moveLeft();
       
    }
    else
        moveRight();
}

//              CHANGING PHOTO GALLERY AFTER RELOAD - TRY WITHOUT SUCCESS.
//function moveArrayElement(images, from) {
//    var el = [];
//    el.push = images[from];
//    console.log(el);
//    images[0].style.backgroundImage = images[1].style.backgroundImage;
//    images[1].style.backgroundImage = el[0].style.backgroundImage;
//    console.log(images[0]);
//    
//};
//
//function hashChange()
//{   
//    let url = document.URL;
//    console.log(url);
//   
//    if(url == 'http://127.0.0.1:5500/#img0')
//    {           
//                moveArrayElement(images, 0);
//                //location.reload();
//                //stop();
//    }
//    else if(url == 'http://127.0.0.1:5500/#img2')
//    {
//            moveArrayElement(images, 2);
//            //location.reload();
//            //stop();
//    }
//               
//    else if(url == 'http://127.0.0.1:5500/#img3')
//    {
//        moveArrayElement(images, 3);
//        //location.reload();
//        //stop();
//    }
//               
//    else if(url == 'http://127.0.0.1:5500/#img4')
//    {
//        moveArrayElement(images, 4);
//        //location.reload();
//        //stop();
//    }
//               
//    else{
//        //location.reload();
//        //stop();
//    }
//}
//hashChange();
function moveLeft()
    {
        let galleryContainer = document.querySelector(".gallery-container");
        let contentContainer = document.querySelector(".container");
        const firstChildImage = galleryContainer.children[0];
        const firstChildContent = contentContainer.children[0];
        galleryContainer.appendChild(firstChildImage); 
        contentContainer.appendChild(firstChildContent); 
    }

function moveRight()
    {
        let galleryContainer = document.querySelector(".gallery-container");
        let contentContainer = document.querySelector(".container");
        const firstChildImage = galleryContainer.children[0];
        const firstChildContent = contentContainer.children[0];
        var lastChildImage = galleryContainer.children[galleryContainer.children.length - 1];
        galleryContainer.insertBefore(lastChildImage, firstChildImage);
        var lastChildContent = contentContainer.children[contentContainer.children.length -1];
        contentContainer.insertBefore(lastChildContent, firstChildContent);
    }



 







