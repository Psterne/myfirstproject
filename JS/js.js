$(function(){

//When page first loads, show engineering

  $('.engineering').show();

//When button support is clicked, show support and hide engineering and content

  $('.supp').click(function(){
    $('.support').show();
    $('.engineering').hide();
    $('.content').hide();
  });

//When button content is clicked, show content and hide engineering and content

  $('.cont').click(function(){
    $('.content').show();
    $('.engineering').hide();
    $('.support').hide();
  });

//when button engineering is clicked, show engineering and hide support and content

  $('.eng').click(function(){
    $('.engineering').show();
    $('.support').hide();
    $('.content').hide();
  });

});
