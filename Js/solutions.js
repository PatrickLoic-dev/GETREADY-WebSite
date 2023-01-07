const container = document.querySelector('.background.slider');

container.addEventListener('wheel', (e)=>{
    e.preventDefault();
    container.scrollLeft += e.deltaY;
    container.scrollRight += e.deltaX;
    container.style. scroll-behavior.smooth;
})