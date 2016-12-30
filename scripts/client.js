$(document).ready(function() {
    console.log("jquery is here!!!");
    var totalRed = 0;
    var totalYellow = 0;
    var totalGreen = 0;
    var totalBlue = 0;

    //start click
    $(".color-button").on('click', function() {
        var buttonColor = $(this).attr("data-color");
        console.log("the color button has been clicked!!!");
        console.log("in button Color Attribute is:", buttonColor);
        if (buttonColor === 'red') {
            $(".container").append('<div class= "color-cube red"></div>');
            totalRed++;
            $('#red').html('Total Red:' + totalRed);
        } else if (buttonColor === 'yellow') {
            $(".container").append('<div class= "color-cube yellow"></div>');
            totalYellow++;
            $('#yellow').html('Total Yellow:' + totalYellow);
        } else if (buttonColor === 'green') {
            $(".container").append('<div class= "color-cube green"></div>');
            totalGreen++;
            $('#green').html('Total Green:' + totalGreen);
        } else if (buttonColor === 'blue') {
            $(".container").append('<div class= "color-cube blue"></div>');
            totalBlue++;
            $('#blue').html('Total Blue:' + totalBlue);
        }
    }); // end click
}); //end document ready
