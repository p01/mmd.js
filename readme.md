# Hello, this is mmd.js

[mmd.js](mmd.js) is a standalone minimalist Markdown parser written in ~815 bytes of JavaScript.

All the cool kids use Markdown. If you are not familiar with it already, have a look at the [original Markdown syntax](http://daringfireball.net/projects/markdown/syntax). Check the source code of this page, it is written in Markdown and parsed using [mmd.js](mmd.js).

## Why so small ?

[mmd.js](mmd.js) is only small because of its simple design and feature set. Using dirty size optimization tricks it should be possible to reach the 5-600 bytes mark. Maybe smaller. Except that's not the idea. Enough yak shaving!

## How does **mmd.js** work ?

The input text is split into blocks separated by one or more blank lines. The type of each block is determined by checking the first character of the block. Headers, HTML and paragraphs are handled separetely. Multi line blocks are split using a regular expression. HTML escaping and span elements ( link, images, emphasis ) are processed for each line of the blocks. This allow to be close to the original Markdown syntax.

## How to use **mmd.js** ?

    <script src=mmd.min.js></script>
	<script>console.log( mmd('Markdown is **sweet**') );</script>

## Supported features

* Headers # 
* Blockquotes >
* Ordered lists 1
* Unordered lists *
* Paragraphs
* Links []()
* Images ![]()
* Inline <em> emphasis *
* Inline <strong> emphasis **

## Unsupported features

* References and IDs
* Escaping of Markdown characters
* Nesting

## Supported browsers

So far [mmd.js](mmd.js) has been tested in recent versions of Opera ( all flavours including Mini ), Chrome and Firefox. Pull requests addressing compatibility issues are most welcome, esp. regarding IE and Safari.

## Why ?

[mmd.js](mmd.js) is the result of some very intensive yak shaving. Let's be honest, it was just an excuse to procastinate and do something different.

## License

MIT

That's all folks.
