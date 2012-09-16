# Hello, this is mmd.js

[mmd.js](mmd.js) is a standalone minimalist Markdown parser written in ~815 bytes of JavaScript.

All the cool kids use Markdown. If you are not familiar with it already, have a look at the [original Markdown syntax](http://daringfireball.net/projects/markdown/syntax). Check the source code of this page, it is written in Markdown and parsed using [mmd.js](mmd.js).

## How does **mmd.js** work ?

The input text is split into blocks separated by one or more blank lines. In this version, the type of each block is determined by checking of the first character of the block then using a regular expression to split the multilines blocks. This allow to be closer to the original Markdown syntax.

## How to use **mmd.js** ?

    <script src=mmd.min.js></script>
	<script>alert( mmd('Markdown is **sweet**') );</script>


## Supported features

* Headers # 
* Blockquotes >
* Ordered lists 1
* Unordered lists *
* Paragraphs
* Links []()
* Images![]()
* Inline <em> emphasis *
* Inline <strong> emphasis **

## Unsupported features

* References and IDs
* Escaping of Markdown characters
* Nesting

## Why ?

[mmd.js](mmd.js) is the result of some very intensive yak shaving. Let's be honest, it was just an excuse to procastinate and do something different.


That's all folks.
