const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes () {
   const triggerBottom = window.innerHeight / 5 * 4;
  
   const boxTop = box.getBoundingClientRect().top;
   boxes.forEach(box => {

       if(boxTop < triggerBottom) {
           box.classList.add('show')
        }else {
            box.classList.remove('show');
        }                                                                                                      
   })

}