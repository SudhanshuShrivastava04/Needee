// let section = document.querySelectorAll(".section-work-data");
// let stat = document.querySelectorAll(".counter-container");
// let sta = document.querySelectorAll(".counter-numbers");

// let start = false;

// function startCount(el){
//   let max = el.dataset.max;
//   let count = setInterval(() =>{
//     el.textContent++;
//     if(el.textContent == max){
//       clearInterval(count);
//     }
//   } , 2000/stat);
// }

// window.onscroll = function(){
//   if(window.scrollY >= section.OffsetTop){
//     if(!start){
//       stat.forEach((sta) => startCount(sta));
//     }
//     start = true;
//   }
// }


var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-numbers').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});