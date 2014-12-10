// This selects the noose and animates it's entrance on the homepage
//$(document).ready(function () {
//  $("#noose").animate({ "bottom": "-260px" }, "slow" );
//});

// This selects the noose to swing back and forth
$(document).ready(function() {
  right();

  function right() {
    $('#noose').stop().animate({
      // Move the image right to the width of the container, minus the width of the image
      left: '0px',
    }, 5000, function() {
      left()
    });
  }
  function left() {
    $('#noose').stop().animate({
      // Move back to the left
      left: '75px',
    }, 5000, function() {
      right()
    });
  }

});