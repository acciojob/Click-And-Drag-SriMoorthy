// Your code here.
const items = document.querySelector('.items')
let isDown = false;
let startX;
let scorollLeft;

items.addEventListener('mousedown',(e)=>{
	isDown = true;
    items.classList.add('active');
    startX = e.pageX - items.offsetLeft;
    scrollLeft = items.scrollLeft;
})

items.addEventListener('mouseleave', () => {
    isDown = false;
    items.classList.remove('active');
});
