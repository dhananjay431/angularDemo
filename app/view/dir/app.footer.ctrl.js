angular.module('app')
.directive('app.footer', footer);
    footer.$inject = [];
    function footer() {
        
        var directive = {
            templateUrl:'app/view/dir/app.footer.html',
        };
        return directive;
    }
