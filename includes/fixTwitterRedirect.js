// ==UserScript==
// @include        https://www.twitter.com/*
// @include        https://twitter.com/*
// @include        http://www.twitter.com/*
// @include        http://twitter.com/*
// @run-at         document-start
// ==/UserScript==
//UserJS based on script from http://userscripts.org/scripts/review/117942

document.addEventListener('DOMNodeInserted',checksearch,false);
function checksearch()
{	
	if(window.location.hostname.match(/twitter\.com/))
	{
		document.removeEventListener('DOMNodeInserted',checksearch,false);
		document.addEventListener('DOMNodeInserted',huntForLinks,false);
	}
}

var fixRedirect = function(event)
{	
	var node = event.target;
	var realURL = node.getAttribute('data-ultimate-url');	
	if(!realURL)
	{
		realURL = node.getAttribute('data-expanded-url');		
	}	
	opera.postError("fixedRedirect");
	if(realURL && realURL != node.href)
	{			
		node.href=realURL;		
	}	
	node.removeEventListener('mouseenter',fixRedirect,false);
};

function huntForLinks()
{	
	var items=document.getElementsByTagName('a');
	for(var i=0;i<items.length;i++)
	{
		var realURL = items[i].getAttribute('data-ultimate-url');
		if(!realURL) realURL = items[i].getAttribute('data-expanded-url');		
		
		if(realURL != null && realURL != items[i].href)
			items[i].addEventListener('mouseenter',fixRedirect,false);		
	}
}