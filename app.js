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

// Existing code...
// Existing code...

// Existing code...

// Get all carousel items and corresponding content
let carouselItems = document.querySelectorAll('.carousel .list .item');
let carouselContents = document.querySelectorAll('.carousel .list .item .content');

// Add click event listener to each item
carouselItems.forEach((item, index) => {
    // Get the image element within each item
    let img = item.querySelector('img');

    // Add click event listener to the image
    img.addEventListener('click', () => {
        // Call a function to handle item click and pass the index
        console.log(index);
        openContent(index);
    });
});

// Function to open the corresponding content when an item is clicked
function openContent(index) {
    // Hide all other contents
    carouselContents.forEach((content, i) => {
        if (i !== index) {
            content.style.display = 'none';
        }
    });

    // Display the clicked content
    carouselContents[index].style.display = 'block';

    // Add any additional functionality you need when an item is clicked
}

// Existing code...
