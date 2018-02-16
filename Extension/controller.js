var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);

angular.module('myApp',['ui.router','underscore','ui.filters'])
.config(function($stateProvider, $urlRouterProvider,$locationProvider){
  $urlRouterProvider.otherwise('/home');
  $locationProvider.hashPrefix('');
  $stateProvider.state('home',{
      url:'/home',
      templateUrl:'moduleTemplate.html',
      controller:function($scope,apiservice){
        this.modules = apiservice.getApis();
      },
      controllerAs:'ctrl'
  }).state('api',{
      url:'/api',
      templateUrl:'moduleApiTemplate.html',
      controller:function($scope,$rootScope,apiservice,_){
        var modulelist = apiservice.getApis(),list = []
        $rootScope.selection.forEach(function(e){
          list = list.concat(_.where(modulelist,{name:e}));
        });
        this.apilist = list;
        this.clickHandler = function(){
          clickHandler(this.selectedapis);
        }
      },
      controllerAs:'apiCtrl'
  })

})
