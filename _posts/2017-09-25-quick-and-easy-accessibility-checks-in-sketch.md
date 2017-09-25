---
layout: post
title:  Quick and easy accessibility checks in Sketch
date:   2017-09-25 12:00:00
categories: blog
excerpt: Accessibility is obviously important. Instead of making one big “this better pass or else it’s back to the drawing board” accessibility check after the design phase, make quick checks along the way this Sketch plugin.
---

Accessibility is obviously important. Instead of making one big “this better pass or else it’s back to the drawing board” accessibility check after the design phase, make quick checks along the way using the [Color Contrast Analyser for Sketch](https://github.com/getflourish/Sketch-Color-Contrast-Analyser).

## Installing the plugin

**Option 1:** Search for "Color Contrast Analyser" using the [Sketch Toolbox](http://sketchtoolbox.com/) app (if you don’t already have it installed, I highly recommend it — it’s great at managing Sketch plugins).

**Option 2:** Mosey over to the plugin’s [Github page](https://github.com/getflourish/Sketch-Color-Contrast-Analyser) and download the ZIP file. Unzip it and move the whole folder into `~/Library/Application Support/com.bohemiancoding.sketch3/Plugins` like so:

<figure>
  <img data-action="zoom" src="/img/blog/2017-09-25-accessibility/plugins-folder.png" alt="Sketch Plugins folder">
</figure>

## Using the plugin

You may have to restart Sketch before you can see the plugin. Once you do, create a text layer on top of a colored background layer (a rectangle, or any other shape). Select **both** layers and then go to `Plugins > Color Contrast Analyser` at the top of the page.

<video controls loop autoplay class="full-width-video">
  <source src="/img/blog/2017-09-25-accessibility/contrast-analyser.mp4" type="video/mp4">
  Your browser does not support the video tag :/
</video>

Along the bottom of the app, you should see a little message indicating whether you’re text meets AA or AAA accessibility standards (or neither). Check out the [Web Content Accessibility Guidelines (WCAG) 2.0 site](https://www.w3.org/TR/WCAG20/) for all the details on how to meet these standards.

## So, AA or AAA?

That’s a whole another post and ultimately up to you to decide based on your users… but as a rule of thumb, AA is a great place to start. 
