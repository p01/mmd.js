;function mmd(src)
{
	var h='';
	var r=
	[
		/\n\* /,'<ul><li>','</li></ul>',,
		/\n[1-9]\d*\.? /,'<ol><li>','</li></ol>',,
		/\n    /,'<pre><code>','</pre></code>','\n',
		/\n> /,'<blockquote>','</blockquote>','\n'];

	function escape(t)
	{
		return new Option(t).innerHTML;
	}
	function inlineEscape(s)
	{
		return escape(s)
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
	.forEach(function(b, f, t,R)
	{
		for( t='\n'+b, f=0; t.search(R=r[f]); )
			f+=4;

		h+=
			R?r[f+1]+t
				.split(R)
				.slice(1)
				.map(r[f+3]?escape:inlineEscape)
				.join(r[f+3]||'</li>\n<li>')+r[f+2]:
			b[0]=='#'?'<h'+(f=b.indexOf(' '))+'>'+inlineEscape(b.slice(f+1))+'</h'+f+'>':
			b[0]=='<'?b:
			'<p>'+inlineEscape(b)+'</p>';
	});
	return h;
};
