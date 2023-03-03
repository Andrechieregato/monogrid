export function moveRight()
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