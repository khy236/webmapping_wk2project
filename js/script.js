//get location of landing dock

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


// move functions

function move(hor, vert) {
  hor_position += hor;
  remy.style.left = hor_position + 'px';
  vert_position += vert;
  remy.style.top = vert_position + 'px';
  console.log(hor_position);
  console.log(vert_position);
  if (vert_position === 380 && hor_position >= 580 && hor_position <= 640) {
    $('#eric').css('opacity', 1);
    $('#eric_message').css('opacity', 1)
  }
}

function go_home() {
  hor_position = 0;
  vert_position = 0;
  remy.style.left = hor_position;
  remy.style.top = vert_position;
  $('#eric').css('opacity', 0);
  $('#eric_message').css('opacity', 0);
}


// button and keyboard functionality

$(document).ready(function () {

  // buttons

  left.onclick = function () { move(-20, 0) }
  right.onclick = function () { move(20, 0) }
  up.onclick = function () { move(0, -20) }
  down.onclick = function () { move(0, 20) }
  home.onclick = function () { go_home() }


  // keyboard 

  $(document).keydown(function (e) {
    if (e.keyCode === 37) { // left
      move(-20, 0)
    } else if (e.keyCode === 38) { // up
      move(0, -20)
    } else if (e.keyCode === 39) { // right
      move(20, 0)
    } else if (e.keyCode === 40) { // down
      move(0, 20)
    } else if (e.keyCode === 13) { // enter
      go_home()
    }
  });
});
