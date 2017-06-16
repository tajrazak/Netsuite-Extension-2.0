if(window.location.href.search('https://debugger.na1.netsuite.com/app/common/scripting/scriptdebugger.nl?')>=0){
	console.log(config)
	document.getElementById('mainscript').value="require([],function(){\n\n})";
}

