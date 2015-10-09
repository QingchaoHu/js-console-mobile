(function(){
	var scripts = document.getElementsByTagName('script');
	currentScript = scripts[scripts.length - 1];
	var consoleQuery=currentScript.attributes['console'].value;
	
	var levels=['trace', 'debug', 'log', 'info', 'warn', 'error'];
	var console0={};
	var consoleDom=document.querySelector(consoleQuery);
	function addDebug(level, args) {
		console0[level+'0'].apply(console, args);
		var div=document.createElement('div');
		div.className=level;
		var message='';
		for (var i=0;i<args.length;i++) {
			if (i>0) message+=' ';
			message+=args[i];
		}
		div.innerHTML='<span>'+level+'</span> '+message;
		consoleDom.appendChild(div);
	}

	for (var i=0;i<levels.length;i++) {
		var level=levels[i];
		console0[level+'0']=console[level];
		console[level]=(function(level){
			return function() {
				addDebug(level, arguments);
			}
		})(level);
	}
})(console);