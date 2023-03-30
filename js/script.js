// set variables

var remy = document.getElementById('remy');

var left = document.getElementById('left');
var right = document.getElementById('right');
var up = document.getElementById('up');
var down = document.getElementById('down');
var home = document.getElementById('home');

var hor_position = 0;
var vert_position = 0;


// set images

remy.style.position = 'relative';

$('#eric').css('opacity', 0);
$('#eric_message').css('opacity', 0);


// button functionality

left.onclick = function() {
  hor_position -= 20;
  remy.style.left = hor_position + 'px';
  if (vert_position === 280 && hor_position >= 500 && hor_position <= 560) {
    $('#eric').css('opacity', 1);
    $('#eric_message').css('opacity', 1)
  }
}

right.onclick = function() {
  hor_position += 20;
  remy.style.left = hor_position + 'px';
  if (vert_position === 280 && hor_position >= 500 && hor_position <= 560) {
    $('#eric').css('opacity', 1);
    $('#eric_message').css('opacity', 1)
  }
}

up.onclick = function() {
  vert_position -= 20;
  remy.style.top = vert_position + 'px';
  if (vert_position === 280 && hor_position >= 500 && hor_position <= 560) {
    $('#eric').css('opacity', 1);
    $('#eric_message').css('opacity', 1)
  }
}

down.onclick = function() {
  vert_position += 20;
  remy.style.top = vert_position + 'px';
  if (vert_position === 280 && hor_position >= 500 && hor_position <= 560) {
    $('#eric').css('opacity', 1);
    $('#eric_message').css('opacity', 1)
  }
}

home.onclick = function() {
  hor_position = 0;
  vert_position = 0;
  remy.style.left = hor_position;
  remy.style.top = vert_position;
  $('#eric').css('opacity', 0);
  $('#eric_message').css('opacity', 0);
}


// keyboard functionality

$(document).keydown(function(e) {
  if (e.keyCode === 37) { // left
    hor_position -= 20;
    remy.style.left = hor_position + 'px';
    if (vert_position === 280 && hor_position >= 500 && hor_position <= 560) {
      $('#eric').css('opacity', 1);
      $('#eric_message').css('opacity', 1)
    }
  } else if (e.keyCode === 38) { // up
    vert_position -= 20;
    remy.style.top = vert_position + 'px';
    if (vert_position === 280 && hor_position >= 500 && hor_position <= 560) {
      $('#eric').css('opacity', 1);
      $('#eric_message').css('opacity', 1)
    }
  } else if (e.keyCode === 39) { // right
    hor_position += 20;
    remy.style.left = hor_position + 'px';
    if (vert_position === 280 && hor_position >= 500 && hor_position <= 560) {
      $('#eric').css('opacity', 1);
      $('#eric_message').css('opacity', 1)
      console.log(hor_position);
      console.log(vert_position);
    }
  } else if (e.keyCode === 40) { // down
    vert_position += 20;
    remy.style.top = vert_position + 'px';
    if (vert_position === 280 && hor_position >= 500 && hor_position <= 560) {
      $('#eric').css('opacity', 1);
      $('#eric_message').css('opacity', 1)
      console.log(hor_position);
      console.log(vert_position);
    }
  }
});
