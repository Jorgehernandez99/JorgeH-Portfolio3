/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    
   $('#oneButton').bind('click', alertButtonClick);
   $('#twoButton').bind('click', replaceWText);
   $('#threeButton').bind('click', replaceWHtml);
   $('#fourButton').bind('click', addAPara);
   $('#fiveButton').bind('click', removeAPara);
    
   $(".hero").css("background-color", "yellow");
   $('p').css("color", "blue");
    
   $('replaceWHtml').bind('click', replaceWHtml);
   $('replaceWText').bind('click', replaceWText);
   $('addAPara').bind('click' addAPara);
   $('removeAPara').bind('click' removeAPara);
   
});

$("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

$('h1').bind('click', mouseClick);


function alertButtonClick() {
   alert("Milestone 3"); 
}

function mouseOverMe() {
    $("h1").html("Miletone 3");
}

function mouseOutMe() {
    $('h1').html("This is a Jquery Website");
}

function mouseClick() {
    $('p').html('Clicked');
}

function replaceWHtml() {
    $('#h3Tag').html('Milestone 4');
}

function replaceWText() {
    $('#h3Tag').text('<h6>Now I\'m an h6 </h6>');
}

function addApara() {
    $('randPara').append('<p>Another Paragraph</p>');
}

function removeAPara() {
    $('#randPara p:last' ).remove();
}
