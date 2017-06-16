function clickHandler(e) {
  var codeSnippet;
  e.forEach(function(k){
    codeSnippet = codeSnippet+'\t'+k.code+'\n';
  })
  var modules = document.getElementsByTagName('optgroup'),list=[],params='';
  for(var i= 0;i<modules.length;i++){
    if(modules[i].label != null){
      list.push(modules[i].label);
      var paramValue = modules[i].label.split('/')[1];
      params = (params == '')?params+''+paramValue:params+','+paramValue;
    }
  }
  chrome.runtime.sendMessage({moduleList:list,params:params,code:codeSnippet},function(response) {
    this.close(); // close the popup when the background finishes processing request
  });
}
