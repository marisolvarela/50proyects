const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.textContent = '0';
  
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const increment = target/200
    const c = +counter.textContent

    if(c < target) {
        counter.textContent = `${Math.ceil(c + increment)}`
    }else {
        counter.textContent = target;
    }
    

    setTimeout(updateCounter, 1)
   }
  

  updateCounter()
})
