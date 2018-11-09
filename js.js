(function(){
var buttonMenu = document.getElementById('hamburger');
buttonMenu.addEventListener('click', function(){

  var menu = document.getElementById('mane-menu');


  if(menu.classList.contains('menu-hide')){
    menu.classList.remove('menu-hide');
    menu.classList.add('mane-menu');
  }else{
    menu.classList.remove('mane-menu');
    menu.classList.add('menu-hide');
  }


  var btn = document.getElementById('hamburger');


  if(btn.classList.contains('hamburger-btn')){
    btn.classList.toggle('hamburger1');
}else{
    btn.classList.toggle('hamburger');
  } 


});
}) ();



