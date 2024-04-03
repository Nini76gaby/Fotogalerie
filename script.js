let images=[
    "img/bild 1.jpg",
    "img/bild4.jpg",
    "img/bild8.jpg",
    "img/bild13.jpg",
    "img/bild17.jpg",
    "img/bild5.jpg",
    "img/bild7.jpg",
    "img/bild9.jpg",
    "img/bild10.jpg",
    "img/bild14.jpg",
    "img/bild15.jpg",
    "img/bild18.jpg",
    "img/bild19.jpg",
    "img/bild23.jpg",
    "img/bild27.jpg",
    "img/bild3.jpg",
    "img/bild28.jpg",
    "img/bild5.jpg",
    "img/bild16.jpg",
    "img/bild20.jpg",
    "img/bild25.jpg"
];


function render(){
 let content= document.getElementById("content");
 content.innerHTML='';
 for(let i=0; i<images.length; i++) {
   let image=images[i];
   content.innerHTML += `
   <img onclick="openImage(${i})" class="images"src="${image}">
   `;
 }
}

function openImage(i) {
    if (i >= 0 && i < images.length) {
        document.getElementById('full-screen').classList.remove('d-none');
        let imageSrc = images[i];
        document.getElementById('container-fullscreen-img').innerHTML = `
            <img src="${imageSrc}" class="images">
            <img onclick="previousImage(${i})" id="leftArrow" class="previous-img" src="icons/leftarrow.webp">
            <img onclick="nextImage(${i})" id="rightArrow" class="next-img" src="icons/rightarrow.webp">
        `;
    } else {
        console.error('Ungültiger Index');
    }
}

 function previousImage(i) {
    if(i === 0) {
        
        openImage(images.length -1 );
    } else {
        openImage(i - 1);
    }
}

 
 function nextImage(i) {
    if (i === images.length - 1) {
        openImage(0);
    } else {
        openImage(i + 1);
    }
}
    
 function backToGallery() {
        document.getElementById('full-screen').classList.add('d-none');
    }