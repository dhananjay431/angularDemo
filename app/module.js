(function() {
    'use strict';
    angular.module('app', 
    [
        'ngMaterial',
        'ui.router'   
    ])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("index");  
    $stateProvider
        .state('index', {
        url: "/index",
        templateUrl: "/app/view/main/app.main.html",
        controller:'app.main.ctrl as vm'
        });
    });
})();


