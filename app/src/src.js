var element = document.querySelector('.slider');
var hammertime = new Hammer(element);
var slides = document.querySelectorAll('.slide');
var menu = document.querySelector('#menu');
var menuOpener = document.querySelector(".menuOpener");

function goToSlide(index, side) {
  var currentIndex = [].indexOf.call(slides, element.querySelector('.is-active'));
  pinarr = document.querySelectorAll('.pin-dot');
  console.log(pinarr);

  [].forEach.call(pinarr, function(item){
    item.classList.remove('active-pin');
  });

  [].forEach.call(pinarr, function(item){
    if([].indexOf.call(pinarr, item) == index){
      item.classList.add('active-pin');
    };
  });



  [].forEach.call(slides, function(item) {
    item.classList.remove('is-active', 'is-next', 'is-prev', 'transition');

    if(([].indexOf.call(slides, item) == index) || ([].indexOf.call(slides, item) == currentIndex)){
      item.classList.add('transition');
    };

    if ([].indexOf.call(slides, item) < index) {
      item.classList.add("is-prev");
    } else if ([].indexOf.call(slides, item) > index) {
      item.classList.add('is-next');
    };

  });


  if (!slides[index]) {
    return false;
  };

  slides[index].classList.add("is-active");
};

var subMenuOpeners = document.querySelectorAll('.sub-menu-opener');

[].forEach.call(subMenuOpeners, function(item) {
  item.addEventListener('click', function() {

    let parent = this.parentElement.parentElement;
    let rotator = parent.querySelector('.sub-menu-opener img');
    let listHeigth = 0;
    let sub = parent.querySelector('ul');

    sub.classList.toggle('is-visible');
    parent.classList.toggle('active');

    if (sub.classList.contains('is-visible')) {
      rotator.style.transform = "rotate(180deg)";
      let subLinks = sub.querySelectorAll('.active ul li a');

      for (var i = 0; i < subLinks.length; i++) {
        if ((window.innerWidth >= 1170) && (subLinks[i].textContent.length > 21)) {
          listHeigth += 66;
        } else {
          listHeigth += 48;
        }
      }

      sub.style.height = listHeigth + "px";

    } else {
      rotator.style.transform = "rotate(0)"
      sub.style.height = "0px";
    }

  });
});



function sliderInit() {
  goToSlide(0);

  var num = 1;
  var pins = document.createElement('div');
  pins.classList.add('slider-pins');

  [].forEach.call(slides, function(item) {
    var pin = document.createElement('div');
    pin.classList.add('pin');
    var pinDot = document.createElement('div');
    pinDot.classList.add('pin-dot');
    pin.dataset.num = num;
    if(num == 1){
      pinDot.classList.add('active-pin');
    };
    num++;

    pin.addEventListener('click', function() {
      goToSlide(+this.dataset.num - 1);
    });
    pins.appendChild(pin);
    pin.appendChild(pinDot);
  });

  element.appendChild(pins);
};

sliderInit();

hammertime.on('swipeleft', function(ev) {
  let current = document.querySelector('.slide.is-active');
  var index = Array.prototype.indexOf.call(slides, current);
  index++;

  if (index >= slides.length) {
    index = 0;
  };

  goToSlide(index, 'left');
});

hammertime.on('swiperight', function(ev) {
  let current = document.querySelector('.slide.is-active');
  var index = Array.prototype.indexOf.call(slides, current);
  index--;

  if (index < 0) {
    index = slides.length - 1;
  };

  goToSlide(index, 'rigth');

});

var cards = document.querySelectorAll('.card__img');

[].forEach.call(cards, function(item) {

  if (([].indexOf.call(cards, item) !== 0) && ([].indexOf.call(cards, item) !== cards.length - 1)) {
    item.classList.add('margin-card');
  };

});

menuOpener.addEventListener('click', function(){
  menu.classList.toggle('show');
});
