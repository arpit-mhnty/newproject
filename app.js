//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
function handleScroll(event) {
    if (event.deltaY < 0) {
        // Scrolling up
        showSlider('next');
    } else {
        // Scrolling down
        showSlider('prev');
    }
}

// Add wheel event listener to the document
document.addEventListener('wheel', handleScroll);
// Existing code...

// Function to handle touch events
function handleTouchStart(event) {
    // Get the initial touch position
    startY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    // Get the current touch position
    let currentY = event.touches[0].clientY;

    // Calculate the distance moved
    let deltaY = startY - currentY;

    // Determine the direction of the scroll
    if (deltaY > 0) {
        // Scrolling up
        showSlider('next');
    } else {
        // Scrolling down
        showSlider('prev');
    }

    // Update the starting position for the next move
    startY = currentY;
}

// Add touch event listeners to the document
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);

// Existing code...
