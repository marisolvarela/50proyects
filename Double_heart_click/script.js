const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let milisecondsBetweenClicksToBeConsidererDobleClick = 800;
let numberOfLikes = 0;

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
        // console.log(456)
    }else {
        if(new Date().getTime() - clickTime < milisecondsBetweenClicksToBeConsidererDobleClick) {
            createHeart(e)
            clickTime = 0
       }else {
        clickTime = new Date().getTime()
        
       }
    }
    //PONIENDO UN DOBLE CLICK EN EL EVENTO  SERIA

//    if(clickTime === 0) {
//       clickTime = new Date().getTime()
//     }

})

const createHeart = (e) => {
    const heart = document.createElement('i') 
    heart.classList.add('fa-solid')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++numberOfLikes

    setTimeout(() => heart.remove(), 5000);

}