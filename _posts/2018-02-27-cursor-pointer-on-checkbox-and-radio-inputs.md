---
layout: post
title:  Cursor pointer on checkbox and radio inputs
date:   2017-09-25 12:00:00
categories: blog
excerpt: Should checkboxes and radio buttons get a "pointer" cursor when the user hovers them with their mouse? The Chrome default is no, but not everyone agrees.
---

When you hover a link with your mouse, your cursor turns into a "pointer" (the one that resembles a [Mickey Mouse glove](https://www.google.com/search?q=mickey+mouse+glove&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi1q6C62cbZAhVr2IMKHQjkBJcQ_AUICigB&biw=1440&bih=780)). The same is true for other interactive elements such as a clickable image or a navigation item. But there are some interactive items that don't get a `cursor: pointer` css rule (at least not by default in Chrome) such as checkboxes, radio buttons, and buttons.

It may come as a surprise that a `<button>` doesn't get a pointer when hovered over by default, especially since it seems like most site creators these days override this default (including [Bootstrap](http://getbootstrap.com/docs/4.0/components/forms/)). The reason for this default is essentially because in the early days of computing, users didn't need the extra affordance of a cursor change to know a big skeumorphic button was interactive. But when the more subtle pattern of linked text in websites came about, the pointer affordance helped users understand that clicking the link would take them somewhere or do something else on the page. This default simply hasn't changed since then.

With the modern convention being that all links and buttons get a pointer when hovered, it makes me wonder -- should *all* interactive elements on a page like checkboxes and radio buttons get a pointer when hovered? Currently, they do not by default, and I haven't personally noticed this behavior getting overriden often.

I think it comes down to what is being communicated with a pointer. Is it just saying "clicking here will do something"? Or is it saying "clicking here will do something *because that isn't already made obvious with some other affordance*"?

For now, there seems to be some consensus on the latter (where buttons get a pointer, checkboxes and radio buttons do not). But I also understand the former's argument for consistency (where all clickable elements get a pointer). I'm not sure I have a true preference to be honest. My only thought on the matter is that any website or app should pick a direction and implement that consistently throughout their entire product.
