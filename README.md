Twitter Redirect Fixer
=============

The Opera extension is available here.


How Twitter Handles Redirection (or How I could fix 3rd party redirection without dereferencing the links)
-------

Although the URL points to Twitter's redirection service (t.co), Twitter includes the original link under the 'data-expanded-url' attribute in the A tag.
If the shared link belongs to a third-party URL shortener, Twitter deferences it and includes the original link under the 'data-ultimate-url' attribute in the A tag.

Thanks to that, all I need to do is look for the 'data-ultimate-url' attribute for a link and replace the href with that. If the ultimate-url is not found, I use 'data-expanded-url' instead.

Porting to other Browsers
------------

This extension can be easily ported to other browsers as long as you swap 'mouseenter' with 'mouseover'.
Although the 'mouseenter' event has been present in the W3C specs for almost 10 years, as of May 8 2012, only Opera and IE support it. (and you thought Firefox, Chrome and Safari cared about web standards)