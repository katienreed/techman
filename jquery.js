$(document).ready(function(){
  $('<span>', {
    'class': 'button', // So you can style it
    role: 'button', // Tell assistive technology it's a button
    tabindex: '0', // Make it keyboard focusable
    click: function() { // Make something happen when it is clicked
      alert('You clicked me!');
    },
    keydown: function(e) { // Trigger the click event from the keyboard
      var code = e.which;
      // 13 = Return, 32 = Space
      if ((code === 13) || (code === 32)) {
        $(this).click();
      }
    },
    html: 'Click me!'
  }).appendTo($('#button-container'));
}
