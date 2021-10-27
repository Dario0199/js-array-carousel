/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const imagesRef = document.querySelector('.images');
const thumbsRef = document.querySelector('.thumbs');
let activeImage = 0;

for (let i = 0; i < imageCollection.length; i++) {
    //images
    imagesRef.innerHTML += `
    <div class="image-container">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
        <div class="text">
            <h3>${titleCollection[i]}</h3>
            <p>${textCollection[i]}</p>
        </div>
    </div>
    `;

    //thumbs
    thumbsRef.innerHTML += `
    <div class="thumb">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
    </div>
    `;
}

document.getElementsByClassName('image-container')[activeImage].classList.add('active')
console.log( document.getElementsByClassName('image-container') );

document.getElementsByClassName('thumb')[activeImage].classList.add('active')
// console.log( document.getElementsByClassName('thumb') );

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener ('click', function(){
    // console.log('click');

    // aggiornare immagine
    // activeImage++;
    // console.log(activeImage);
    //image
    //reset immagine e imposta nuova immagine
    document.querySelector('.image-container.active').classList.remove('active')

    document.getElementsByClassName('image-container')[activeImage].classList.add('active')

    //thumb
    document.querySelector('.thumb.active').classList.remove('active')

    document.getElementsByClassName('thumb')[activeImage].classList.add('active')

    if (activeImage === imageCollection.length -1){
        activeImage = 0;
    } else{
        activeImage++;
    }
});



prev.addEventListener ('click', function(){
    // console.log('click');
    // activeImage--;
    // console.log('activeImage');
    // aggiornare immagine
    //image
    //reset immagine e imposta nuova immagine
    document.querySelector('.image-container.active').classList.remove('active')

    document.getElementsByClassName('image-container')[activeImage].classList.add('active')

    //thumb
    document.querySelector('.thumb.active').classList.remove('active')

    document.getElementsByClassName('thumb')[activeImage].classList.add('active')

    if (activeImage === imageCollection.lenght -5){
        activeImage = imageCollection;
    } else{
        activeImage--;
    }
});