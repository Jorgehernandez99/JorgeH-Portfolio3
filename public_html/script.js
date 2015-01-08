/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    
    $('#oneButton').bind('click', alertButtonClick);
    
   $(".hero").css("background-color", "yellow");
   $('p').css("color", "blue");
    
});

function alertButtonClick() {
   alert("You clicked this button"); 
}


