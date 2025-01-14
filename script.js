var n = -1;
function slide(n){
  $('#slide1').css('marginLeft', (-n * 33.33333)+"%");

}

setInterval(function(){
   n++;
    if( n == 3 ){
      $('.container-fotos').css('transition', "0s");
      $('#slide1').css('marginLeft', "0%");
      $('#radio-1').prop('checked', true);
        n= 0;
    }else{
      $('.container-fotos').css('transition', "1s ease-in-out");
      slide(n);
      $('#radio-' + (n+1)).prop('checked', true);
    }
 

}, 5000)