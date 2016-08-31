(function() {
    'use strict';
    angular.module('app', 
    [
        'ngMaterial',
        'ui.router'   
    ])
    .controller('main',main)
    .directive('app.head', header)
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("index");  
    $stateProvider
        .state('index', {
        url: "/index",
        templateUrl: "/app/view/main/app.main.html",
        controller:'app.main.ctrl as vm'
        });
    });

    main.$inject = ['$scope'];
    function main($scope) {
        var vm = this;
         console.log("sdafasdfsdaf");
    }


 
    header.$inject = [];
    function header() {
        
        var directive = {
            templateUrl:'app/view/dir/app.head.html',
        };
        return directive;
    }

})();


