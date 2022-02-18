const slides = document.querySelector('.imageContainer'); 
const slideImg = document.querySelectorAll('.imageContainer li'); 

let currentIdx = 0; 
let slideNumber = 0;
const slideCount = slideImg.length; 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
const slideWidth = 700; 
const slideMargin = 100; 
const HIDDEN_CLASSNAME = "hidden";
let desID = document.querySelector("#first");
let array = ['first', 'second', 'third', 'fourth'];

for (step = 1; step < array.length; step++){
    document.getElementById(array[step]).style.display = "none";
}

slides.style.width = (slideWidth + slideMargin) * slideCount + 'px'; 
let slidingSize = 800
let width_size = window.outerWidth

function moveSlide(num) { 
    slides.style.left = -num * slidingSize + 'px'; currentIdx = num; } 
prev.addEventListener('click', function () { 
    slideNumber = slideNumber - 1;
    if (slideNumber < 0){
        slideNumber = 0;
    }else{
        adoptVisibility(+1, slideNumber);
    }

    if (currentIdx !== 0) moveSlide(currentIdx - 1); }); 

next.addEventListener('click', function () { 

    if (currentIdx !== slideCount - 1) 
    {   
        slideNumber = slideNumber + 1;  
        adoptVisibility(-1, slideNumber);
        moveSlide(currentIdx + 1); } 
});

if (this.window.outerWidth <= 1060){
    slidingSize = 400;
}else{
    slidingSize = 800;
}

window.addEventListener('resize', function() {
    if (this.window.outerWidth <= 1060){
        slidingSize = 400;}else{
            slidingSize = 800;
        }
}, true);

function adoptVisibility(count, number){
    const preNumber = number + count;
    console.log(array[number]);
    document.getElementById(array[preNumber]).style.display = "none";
    document.getElementById(array[number]).style.display = "";
}

