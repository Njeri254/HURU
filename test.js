//menu hamburger start
$(".hamb").click(function(){
    $(".hamb").toggleClass("change");
      $("nav").slideToggle(200);
  });    
//menu hamburger ends
//menu 
$(document).ready(function() {
$('li a.menu').click(
    function(e) {
    e.preventDefault();
    var dropDown = $(this).parent().find("ul.a_menu");                   
    dropDown.slideToggle(200);
    $('li a.menu').parent().find("ul.a_menu").not(dropDown).slideUp(200);
     
         });    
    });