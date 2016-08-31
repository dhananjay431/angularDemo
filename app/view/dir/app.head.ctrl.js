angular.module('app')
    .directive('app.head', header)
    header.$inject = [];
    function header() {
    
        var directive = {
            templateUrl:'app/view/dir/app.head.html',
        };
        return directive;
    }