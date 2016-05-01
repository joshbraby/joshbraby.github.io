$(function () {

    var currentYear = new Date();
    $('#footer-date').html("&copy;" + currentYear.getFullYear() + " Josh Braby");

    $('#initial-hello').animate({
        opacity: 1
      },1000, function() {
        // Animation complete.
        $('#initial-enter').animate({
            opacity: 1
          }, 500, function() {
            //animation complete.
        });
    });

}); //end document object function