
$(document).ready(function(){
  var $menu = $("#menu");
  var $viewWidth = $( window ).innerWidth();
  var $heigthToTop = $menu.offset().top;

  $(window).scroll(function(){
    if($( window ).width() > 1024){
      $menu.removeClass("show");
    };

    if ( $(this).scrollTop() > $heigthToTop || $(this).scrollTop() > 100  && $menu.hasClass("default") ){
      $menu.removeClass("default").addClass("fixed");

      if ($viewWidth > 1200) {
        var $leftMarg = ($viewWidth - 1200) / 2;
        $menu.css("left", ""+$leftMarg);
      };

    } else if($(this).scrollTop() <= $heigthToTop && $menu.hasClass("fixed")) {
      $menu.removeClass("fixed").addClass("default");
    };

  });//scroll
});
