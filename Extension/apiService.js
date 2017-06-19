app.factory('apiservice',function(){
      return{
            getApis:function(){
                  return [{name:'N/record',api:'attach',code:"\\n\t var attachedRecId = record.attach({\n\t\trecord:{\n\t\t\ttype:\"\",\n\t\t\tid:\"\"\n\t\t},\n\t\tto:{\n\t\t\ttype:\"\",\n\t\t\tid:\"\"\n\t\t}\n\t});"},
                          {name:'N/record',api:'copy',code:"\\n\t var copiedRec = record.copy({\n\t\ttype:\"\",\n\t\tid:\"\"\n\t });"},
                          {name:'N/record',api:'create',code:"\\n\t var createdRec = record.create({\n\t\ttype:record.Type. ,\t //if you want to create record which is custom record type, please use the internalid. \n\t });"}, //record start from here
                          {name:'N/record',api:'detach',code:"\\n\t record.detach({\n\t\trecord:{\n\t\t\ttype:\"\",\n\t\t\tid:\"\"\n\t\t},\n\t\tfrom:{\n\t\t\ttype:\"\",\n\t\t\tid:\"\"\n\t\t}\n\t});"},
                          {name:'N/record',api:'delete',code:"\\n\t var deletedRec = record.delete({\n\t\ttype:record.Type. ,\t //if you want to delete record which is custom record type, please use the internalid.\n\t\tid:\"\"\n\t });"},
                          {name:'N/record',api:'load',code:"\\n\t var loadedRec = record.load({\n\t\ttype:record.Type. ,\t //if you want to load record which is custom record type, please use the internalid.\n\t\tid:\"\"\n\t });"},
                          {name:'N/record',api:'submitFields',code:"\\n\t var submitedRecId = record.submitFields({\n\t\ttype:record.Type. ,\t //if you want to submit record fields which is custom record type, please use the internalid.\n\t\tid:\"\",\n\t\tvalues:{\n\t\t\t//The ID-value pairs for each field you want to edit and submit\n\t\t},\n\t\toptions:{\n\t\t\tenableSourcing: false,\n\t\t\tignoreMandatoryFields : true\n\t\t}\n\t});"},
                          {name:'N/record',api:'transform',code:"var objRecord = record.transform({\n\t\tfromType:record.Type. \t,\n\t\tfromId:\"\",\n\t\ttoType: record.Type. \t,\n\t\tisDynamic: true\n\t});"},

                          {name:'N/search',api:'create',code:"\\n\t var createdSearch = search.create({\n\t\ttype:search.Type. ,\t //if you want to create search on custom record type, please use the internalid.\n\t\tcolumns:[],\n\t\tfilters:[]\n\t });"},//search start from here
                          {name:'N/search',api:'load',code:"\\n\t var loadedSearch = search.load({\n\t\tid:\"\"\n\t });"},
                          {name:'N/search',api:'delete',code:"search.delete({\n\t\tid:\"\" //internalid of the search\n\t});"},
                          {name:'N/search',api:'duplicates',code:"var duplicatesRecords = search.duplicates({\n\t\ttype:search.Type. ,\n\t\tid:\"\" //internalid of the existing records\n\t});"},
                          {name:'N/search',api:'global',code:"var customerSearch = search.global({\n\t\tkeywords:\"\" //Global search keywords string or expression.\n\t});"},
                          {name:'N/search',api:'lookupFields',code:"var fieldLookUp = search.lookupFields({\n\t\ttype:search.Type. \t,\n\t\tid:\"\" ,\n\t\tcolumns:[]\n\t});"},
                          {name:'N/search',api:'createColumn',code:"var currencyColumn = search.createColumn({\n\t\tname:\"\",\n\t\tsort:search.Sort.ASC //options are Sort,function,formula,summary,join and label\n\t});"},
                          {name:'N/search',api:'createFilter',code:"var mySearchFilter = search.createFilter({\n\t\tname:\"\",\n\t\toperator: search.Operator.ISEMPTY //options are join,operator,values,formula and summary \n\t});"},

                          {name:'N/runtime',api:'getCurrentScript',code:"var scriptObj = runtime.getCurrentScript()"},
                          {name:'N/runtime',api:'getCurrentSession',code:"var sessionObj = runtime.getCurrentSession()"},
                          {name:'N/runtime',api:'getCurrentUser',code:"var userObj = runtime.getCurrentUser()"},
                          {name:'N/runtime',api:'isFeatureInEffect',code:"var isEffect = runtime.isFeatureInEffect({feature:\"\"})"},

                          {name:'N/cache',api:'getCache',code:"var myCache = cache.getCache({\n\t\tname:'temporaryCache',\n\t\tscope: cache.Scope.PRIVATE\n\t});"},
                          {name:'N/cache',api:'put',code:"myCache.put({\n\t\tkey:'keyText',\n\t\tvalue:'valueText',\n\t\tttl:300\n\t});"},
                          {name:'N/cache',api:'get',code:"myCache.get({\n\t\tkey:'keyText'\n\t});"},
                          {name:'N/cache',api:'remove',code:"myCache.remove({\n\t\tkey:'keyText'\n\t});"}
                        ]
            }
      }
})
