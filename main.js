/*** Hamburger menu interaction***/

/*Command*/
var hamburgerShow = $('.fas.fa-bars');
var hamburgerHide = $('.fas.fa-times');
var hamburgerMenu = $('.hamburger-menu');

/*Function*/
hamburgerShow.click(function(){
    hamburgerMenu.show();
});

hamburgerHide .click(function(){
    hamburgerMenu.hide(); 
});