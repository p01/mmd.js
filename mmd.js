;function mmd(src)
{
    var h='';
    function escape(t)
    {
    	return new Option(t).innerHTML;
    }
    function inlineEscape(t)
    {
    	return inline(escape(t))
    }
    function multiline(b, p, g)
    {
        return('\n'+b)
        .split('\n'+p)
        .slice(1)
        .map(g?inlineEscape:escape)
        .join(g||'\n');
    }
    function inline(s)
    {
    	return s
    	.replace(/!\[([^\]]*)]\(([^(]+)\)/g, '<img alt="$1" src="$2"/>')
    	.replace(/\[([^\]]+)]\(([^(]+)\)/g, '<a href="$2">$1</a>')
    	.replace(/`([^`]+)`/g, '<code>$1</code>')
    	.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
		.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    }

    src
    .replace(/^\s+|\r|\s+$/g, '')
    .replace(/\t/g, '    ')
    .split(/\n\n+/)
    .forEach(function(b, f, r)
    {
        f=b[0];
        h+=
	        f=='#'?(f=b.indexOf(' '),'<h'+f+'>'+inlineEscape(b.slice(f+1))+'</h'+f+'>'):
			f=='*'?'<ul><li>'+multiline(b, '* ', '</li>\n<li>' )+'</li></ul>':
	        f=='1'?'<ol><li>'+multiline(b, '1 ', '</li>\n<li>' )+'</li></ol>':
	        f==' '?'<pre><code>'+multiline(b, '    ') +'</code></pre>':
	        f=='>'?'<blockquote>'+multiline(b, '> ')+'</blockquote>':
	        f=='<'?b:
	        '<p>'+inlineEscape(b)+'</p>';
    });
    return h;
};
