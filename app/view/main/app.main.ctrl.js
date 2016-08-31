(function() {
'use strict';

    angular
        .module('app')
        .controller('app.main.ctrl', ControllerController);
    ControllerController.$inject = ['$scope'];
    function ControllerController($scope) {
        var vm = this;
        vm.a1="main123321";
         
    }
})();