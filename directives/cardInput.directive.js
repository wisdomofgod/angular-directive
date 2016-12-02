(function () {
    'use strict';
    angular.module('app').directive('cardinput', function(){
        return {
            restrice: 'EA',
            scope: {
                ngModel: '=',
                len: '=',
                size: '='
            },
            templateUrl: function(){
                return "template/cardinput.html";
            },
            replace: true,
            link: function( scope ) {
                scope.inputList = [];
                scope.cardList = [];

                setTimeout(function(){
                    $('.cardinput').on('input',function(e){
                        var target = e.target;
                        var value = target.value;
                        if(value.length == scope.len){
                            var id = target.id;
                            var n = id.substr(3);
                            scope.cardList[n] = value;
                            if(n == (scope.size -1) ){
                                scope.$apply(function(){
                                    scope.ngModel = scope.cardList.join('');
                                });
                            }else{
                                id = 'key' + ( parseInt(n) + 1 );
                                $("#"+id).focus();
                            }
                        }
                    });
                });


                for (var i = 0; i < scope.size; i++) {
                    scope.inputList.push(i);
                }
            }
        };
    });
})();