function clickHandler(e) {
  var codeSnippet;
  var getCache = "var myCache = cache.getCache({\n\t\tname:'temporaryCache',\n\t\tscope: cache.Scope.PRIVATE\n\t});";
  var getCacheNotFound = e.filter(function(li){return li.api == 'getCache'}).length <= 0;
  e.forEach(function(k){
    if(getCacheNotFound){
      if(k.api == 'put' || k.api == 'remove' || k.api == 'get')
        k.code = getCache+"\n\t"+k.code;
    }else if(k.api == 'getCache'){
        k.code = getCache;
    }
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
