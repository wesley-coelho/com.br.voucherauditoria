var n = 0;

$('#slide1').show();
$('#slide2').hide();
$('#slide3').hide();
$('#slide4').hide();
$('#slide5').hide();

 function slide(n){

    switch(n){
      case 1:{
          $('.bg-service').css('opacity', '0');
          $('#bg-service-1').css('opacity', '1');        
          $('#slide1').show();
          $('#slide2').hide();
          $('#slide3').hide();
          $('#slide4').hide();
          $('#slide5').hide();
            
     
      } break;

      case 2:{
          $('.bg-service').css('opacity', '0');
          $('#bg-service-2').css('opacity', '1'); 
          
          $('.bg-service').css('opacity', '0');
          $('#bg-service-2').css('opacity', '1');        
          $('#slide1').hide();
          $('#slide2').show();
          $('#slide3').hide();
          $('#slide4').hide();
          $('#slide5').hide();
 
        
      }break;

      case 3:{
        $('.bg-service').css('opacity', '0');
        $('#bg-service-3').css('opacity', '1');
        $('.bg-service').css('opacity', '0');
          $('#bg-service-3').css('opacity', '1');        
          $('#slide1').hide();
          $('#slide2').hide();
          $('#slide3').show();
          $('#slide4').hide();
          $('#slide5').hide();
       
 
            
      }break;

      case 4:{

        $('.bg-service').css('opacity', '0');
          $('#bg-service-4').css('opacity', '1');

          $('.bg-service').css('opacity', '0');
          $('#bg-service-4').css('opacity', '1');        
          $('#slide1').hide();
          $('#slide2').hide();
          $('#slide3').hide();
          $('#slide4').show();
          $('#slide5').hide();
      
      }break;

      case 5:{
  
        $('.bg-service').css('opacity', '0');
        $('#bg-service-5').css('opacity', '1');

        $('.bg-service').css('opacity', '0');
          $('#bg-service-5').css('opacity', '1');        
          $('#slide1').hide();
          $('#slide2').hide();
          $('#slide3').hide();
          $('#slide4').hide();
          $('#slide5').show();
 
      }break;
    }
  

}

setInterval(function(){
   n++;
    if( n == 6 ){

      $('.bg-service').css('opacity', '0');
      $('#bg-service-1').css('opacity', '1');
      $('#slide1').show();
      $('#slide2').hide();
      $('#slide3').hide();
      $('#slide4').hide();
      $('#slide5').hide();
     
      $('#radio-1').prop('checked', true);
        n= 0;
    }else{
      
      slide(n);
      $('#radio-' + (n)).prop('checked', true);
    }
 

}, 5000) 

function btnPassLeft(){
 
let atualValue = $('#container-clientes').css('marginLeft').substring(0,$('#container-clientes').css('marginLeft').length-2); 
if(parseInt(atualValue) >= -7750){
  let newValue = parseInt(atualValue) -250;
  $('#container-clientes').css('marginLeft', newValue+'px');
}

}

function btnPassRight(){

let atualValue = $('#container-clientes').css('marginLeft').substring(0,$('#container-clientes').css('marginLeft').length-2); 
if(parseInt(atualValue) < 0) {
  let newValue = parseInt(atualValue) + 250;
  $('#container-clientes').css('marginLeft', newValue+'px');
}

}