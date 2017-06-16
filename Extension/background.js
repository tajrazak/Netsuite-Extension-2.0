chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var modules = JSON.stringify(request.moduleList),params,func;
    if(modules.length > 0){
      modules = modules.length == 0?[]:String(modules),
      func = 'function('+request.params+'){\\n\\n'+request.code.replace('undefined','')+'\\n\\n})';
    }else{
      modules = '[]',func = 'function(){\\n\\n\\n})'
    }
    chrome.tabs.executeScript(null,{ // defaults to the current tab
      code: `document.getElementById('inpt_runtimeversion1').value = document.getElementById('hddn_runtimeversion1').value = '2.0';document.getElementById('mainscript').value=\`require(`+modules+`,`+func+`;\``, // script to inject into page and run in sandbox
      allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
    });
  }
);
