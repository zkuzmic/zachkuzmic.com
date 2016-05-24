---
layout: post
title:  "OS X Window Management Using Slate.js"
date:   2016-05-16 17:30:00
categories: blog
excerpt: A couple of years ago, I started looking into various window management solutions for OS X (there are a lot out there from what I can tell), and eventually landed on Slate due to its high customizability. It’s a little more complicated to configure than others (via a .js file as opposed to a GUI), but well worth it.
---

As a designer, it probably comes as no surprise that I’m sort of an Apple fanboy. OS X is way more usable (and stable) than Windows in my experience, but I’ve always thought it was hard to wrangle (resize, reposition) windows. I don’t really like going into fullscreen mode via the circular green button in the corner and clicking / dragging to resize windows is cumbersome.

A couple of years ago, I started looking into various window management solutions (there are a lot out there from what I can tell), and eventually landed on [Slate](https://github.com/jigish/slate) due to its customizability. It’s a little more complicated to configure than others (via a .js file as opposed to a GUI), but well worth it.

Here's how to get started with Slate:

## Step 1: Download and Install

Via this [.dmg](http://slate.ninjamonkeysoftware.com/Slate.dmg). More installation options available via the [Slate GitHub page](https://github.com/jigish/slate).

## Step 2: Customize

This is the good part and requires a little javascript knowledge if you want to get fancy. Once you’ve created a .slate.js file in your home (~) directory (note the period at the front of the filename), you’re ready to start customizing.

I set up up Slate with five discrete actions and made each of those a function:

{% highlight javascript %}
// make the current window FULLSCREEN
var fullscreen = slate.operation("move", {
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});

// make the current window HALF the width of the screen
// and position it on the LEFT
var pushLeftHalf = slate.operation("push", {
  "direction" : "left",
  "style" : "bar-resize:screenSizeX/2"
});

// make the current window TWO-THIRDS the width of the screen 
// and position it on the LEFT
var pushLeftTwoThirds = slate.operation("push", {
  "direction" : "left",
  "style" : "bar-resize:screenSizeX*0.66666666666666666666666666666666666666666666666666666666666666"
});

// make the current window HALF the width of the screen
// and position it on the RIGHT
var pushRightHalf = slate.operation("push", {
  "direction" : "right",
  "style" : "bar-resize:screenSizeX/2"
});

// make the current window TWO-THIRDS the width of the screen 
// and position it on the RIGHT
var pushRightTwoThirds = slate.operation("push", {
  "direction" : "right",
  "style" : "bar-resize:screenSizeX*0.66666666666666666666666666666666666666666666666666666666666666"
});
{% endhighlight %}

And each of those five actions are triggered by various keystrokes defined here:

{% highlight javascript %}
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
{% endhighlight %}

In the end, I'm able to manipulate windows using three shortcuts:

### ⌥ ⌘ F
This shortcuts makes the active window take up the full screen width / height. I use this constantly.

### ⌥ ⌘ ←
This shortcut makes the active window take up the left half of the screen. If I press it again within 1 second, it will make the window two-thirds the width of the screen (which is good for making webpages with full-width text more readable).

### ⌥ ⌘ →
Simliar to the previous shortcut, this one makes the active window half the screen width but pushes it to the right. Double-tapping it makes the window two-thirds width.

Here’s my full [slate.js](/img/blog/slate-js/slate.js) file if you want to use it or just need a template to get started. *(Note: You'll have to add a period before the filename before adding it to your home directory)*

For more configuration documentation, check out the [Slate GitHub page](https://github.com/jigish/slate).

Comment below if you have questions about my set up or want to share yours.
