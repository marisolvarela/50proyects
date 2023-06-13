const sliderContainer = document.querySelector('.slider-container')
const sliderLeft = document.querySelector('.left-slider')
const sliderRight = document.querySelector('.right-slider')
const buttonDown = document.querySelector('.down-button')
const buttonUp = document.querySelector('.up-button')
const slidersLength =sliderRight.querySelectorAll('div').length

let activeSliderIndex = 0;

sliderLeft.style.top = `-${(slidersLength - 1) * 100}vh`

buttonUp.addEventListener('click',() => changeSlider('up'))
buttonDown.addEventListener('click',() => changeSlider('down'))

const changeSlider = (direction) => {
    const sliderHeight = sliderContainer.clientHeight

    if(direction ==='up'){
       activeSliderIndex++
       if(activeSliderIndex > slidersLength -1) {
        activeSliderIndex = 0
       }
    }else if(direction ==='down') {
        activeSliderIndex--
        if(activeSliderIndex < 0) {
            activeSliderIndex = slidersLength -1
        }
    }

    sliderRight.style.transform = `translateY(-${activeSliderIndex * sliderHeight}px)`
    sliderLeft.style.transform = `translateY(${activeSliderIndex * sliderHeight}px)`
    
}