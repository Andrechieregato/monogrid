export function moveLeft()
    {
        let galleryContainer = document.querySelector(".gallery-container");
        let contentContainer = document.querySelector(".container");
        const firstChildImage = galleryContainer.children[0];
        const firstChildContent = contentContainer.children[0];
        galleryContainer.appendChild(firstChildImage); 
        contentContainer.appendChild(firstChildContent); 
    }