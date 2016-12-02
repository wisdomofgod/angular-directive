(function () {
    'use strict';
    angular.module('app').directive('pagination', function(){
        return {
            restrict: 'EA',
            scope: {
                totalItems: '=',
                totalPages: '=',
                firstText: '@',
                previousText: '@',
                nextText: '@',
                lastText: '@',
                ngDisabled: '=',
                ngChange: '=',
                ngPage: '=',
                ngRows: '='
            },
            templateUrl: function () {
                return 'template/pagination.html';
            },
            replace: true,
            link: function (scope) {

                scope.changePage = function(page){
                    if(page == 'last' && scope.ngPage != scope.totalPages){
                        scope.ngPage = scope.totalPages;
                        scope.ngChange(scope.ngPage);
                        return;
                    }
                    if(page == 'first' && scope.ngPage != 1){
                        scope.ngPage = 1;
                        scope.ngChange(scope.ngPage);
                        return;
                    }
                    if(page == -1 && scope.ngPage > 1){
                        scope.ngPage -= 1;
                        scope.ngChange(scope.ngPage);
                        return;
                    }
                    if(page == 1 && scope.ngPage < scope.totalPages){
                        scope.ngPage += 1;
                        scope.ngChange(scope.ngPage);
                        return;
                    }
                }

                scope.$watch('ngRows',function(value){
                    scope.ngChange();
                })
            }
        }
    });
})();