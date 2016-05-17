//defaults
S.cfga({
  "defaultToCurrentScreen" : true,
  "secondsBetweenRepeat" : 0.1,
  "checkDefaultsOnLoad" : true,
  "orderScreensLeftToRight" : true
});


//movements

//make the current window FULLSCREEN – I use this one very frequently
var fullscreen = slate.operation("move", {
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});

//make the current window HALF the width of the screen and position it on the LEFT
var pushLeftHalf = slate.operation("push", {
  "direction" : "left",
  "style" : "bar-resize:screenSizeX/2"
});

//make the current window TWO-THIRDS the width of the screen and position it on the LEFT
var pushLeftTwoThirds = slate.operation("push", {
  "direction" : "left",
  "style" : "bar-resize:screenSizeX*0.66666666666666666666666666666666666666666666666666666666666666"
});

//make the current window HALF the width of the screen and position it on the RIGHT
var pushRightHalf = slate.operation("push", {
  "direction" : "right",
  "style" : "bar-resize:screenSizeX/2"
});

//make the current window TWO-THIRDS the width of the screen and position it on the RIGHT
var pushRightTwoThirds = slate.operation("push", {
  "direction" : "right",
  "style" : "bar-resize:screenSizeX*0.66666666666666666666666666666666666666666666666666666666666666"
});



// bindings

// ⌥ ⌘ F
// runs the fullscreen function
slate.bind("f:alt;cmd", function(win) {
  win.doOperation(fullscreen);
});

// ⌥ ⌘ ←
var leftTimeout = 0;
slate.bind("left:alt;cmd", function(win) {

  // set a a timeout for 1 second
  setTimeout(function(){
    leftTimeout = 0;
  }, 1000);

  if (leftTimeout === 1) {
    // runs pushLeftTwoThirds if ⌥ ⌘ ← was pressed twice within 1 second
    win.doOperation(pushLeftTwoThirds);
  }else{
    // runs pushLeftHalf
    win.doOperation(pushLeftHalf);
  }

  leftTimeout = 1;
});

// ⌥ ⌘ →
var rightTimeout = 0;
slate.bind("right:alt;cmd", function(win) {

  // set a a timeout for 1 second
  setTimeout(function(){
    rightTimeout = 0;
  }, 1000);

  if (rightTimeout === 1) {
    // runs pushRightTwoThirds if ⌥ ⌘ → was pressed twice within 1 second
    win.doOperation(pushRightTwoThirds);
  }else{
    // runs pushRightHalf
    win.doOperation(pushRightHalf);
  }

  rightTimeout = 1;
});