$(document).ready(function(){
console.log("jquery is here!!!");


var clickRed = $( ".container").css( "background-color", "red" );
var clickYellow = $( ".container").css( "background-color", "yellow" );
var clickGreen = $( ".container").css( "background-color", "green" );
var clickBlue = $( ".container").css( "background-color", "blue" );
//start click
$( ".color-button").click(function () {
clickRed;
}); // end click

//start click
 $( ".color-button").click(function() {
clickYellow;
});// end click

//start click
$( ".color-button").click(function() {
clickGreen;
});// end click

//start click
$( ".color-button").click(function() {
clickBlue;
});// end click

});//end document ready
