(function () {
    'use strict';
    angular.module('app').directive('passwordInput', function(){
        return {
            restrice: 'EA',
            scope: {
                password: '=passwordData',
                passwordLen: '='
            },
            templateUrl: function(){
                return "template/password.html";
            },
            replace: true,
            link: function( scope ) {
                scope.passList = [];

                scope.password = "";
                scope.inputStatus = false;

                scope.changeInputStatus = function(){
                    if(scope.password.length != scope.passwordLen){
                        scope.inputStatus = true;
                    }
                };

                scope.inputKey = function(e){
                    if(!event.key){
                        var code = event.keyCode;
                        var n = -1;
                        if(event.keyCode == 8) {
                            if (scope.password.length > 0) {
                                scope.password = scope.password.substr(0, scope.password.length - 1);
                                scope.inputSelect = scope.password.length;
                                scope.inputStatus = true;
                            }
                            event.preventDefault();
                            return;
                        }
                        if(code > 47 && code <58){
                            n = code - 48;
                        }else if( code > 95 && code < 106){
                            n = code -96;
                        }
                        if(n > -1){
                            scope.password += n;
                            scope.inputSelect = scope.password.length;
                            if(scope.password.length == scope.passwordLen){
                                scope.inputSelect += 1;
                                scope.inputStatus = false;
                            }
                        }
                    }else if(isNaN(event.key) == false && scope.inputStatus){
                        scope.password += event.key;
                        scope.inputSelect = scope.password.length;
                        if(scope.password.length == scope.passwordLen){
                            scope.inputSelect += 1;
                            scope.inputStatus = false;
                        }
                    }else if(event.keyCode == 8){
                        if(scope.password.length > 0){
                            scope.password = scope.password.substr(0,scope.password.length -1);
                            scope.inputSelect = scope.password.length;
                            scope.inputStatus = true;
                        }
                        event.preventDefault();
                    }
                };

                scope.inputSelect = 0;

                var keyDown = document.onkeydown;

                for (var i = 0; i < scope.passwordLen; i++) {
                    scope.passList.push(i);
                }
            }
        };
    })
}();