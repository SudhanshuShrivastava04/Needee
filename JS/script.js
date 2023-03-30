var nav = document.querySelector('nav');
window.addEventListener('scroll' , function(){
  if(window.pageYOffset > 100){
    nav.classList.add('bg-dark' , 'shadow');
  }
  else{
    nav.classList.remove('bg-dark' , 'shadow');
  }
});





const workSection = document.querySelectorAll(".section-work-data");

const work = new IntersectionObserver( (entries , observer) => {
    const [entry] = entries;
    if(entry.isIntersecting == false) return;

    const counterNum = document.querySelectorAll(".counter-numbers");

    const speed = 20;

    counterNum.forEach((curElem) => {
    const updateNumber = () =>{
        const targetNumber = parseInt(curElem.dataset.number);

        const initialNumber = parseInt(curElem.innerText);

        const incrementNumber = Math.trunc(targetNumber/speed);

        if(initialNumber<targetNumber){
            curElem.innerText = `${initialNumber + incrementNumber}+`;
            setTimeout(updateNumber , 100);
        }
    };
    updateNumber();
    });

    observer.unobserve(workSection);
    
} , {
    root : null,
    threshold : 0,

});

work.observe(workSection);

// new


