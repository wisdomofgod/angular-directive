/**
 * Created by lazyhome on 4/14/16.
 */
(function () {
    'use strict';
    /**
     * 根据输入的关键字，及对应数据集合提供下拉列表选择
     * <auto-complete ng-model="" complete-data="" success-function="" complete-query=""></auto-complete>
     * 
     * @param  {[completeData]} 源数据                                                                            return {                            restrice:     'EA',            scope: {                completeData: ' [description]
     * @param  {successFunction} 选择后的回调函数
     * @param  {[completeQuery]} 显示的查询字段
     */
    angular.module('app').directive('autoComplete',function(){
        return {
            restrice: 'EA',
            scope: {
                completeData: '=completeData',
                successFunction: '=successFunction',
                query: '@completeQuery'
            },
            /*template: '<input ng-transclude /><ul class="autocomplete" ng-if="owners.length > 0"><li ng-click="select(o)" ng-mouseenter="selectActive($index)" ng-class="{'+"'"+'active'+'"'+':$index == selectIndex}" ng-repeat="o in owners">{{o.query}}</li></ul>',
            */
            template: '<ul class="autocomplete" ng-show="showStatus">' +
            '<li ng-click="select(o)" ng-mouseenter="selectActive($index)" ng-class="{active:$index == selectIndex}" ng-repeat="o in completeData">' +
            '{{o[query]}}' +
            '</li>' +
            '</ul>',
            replace: true,
            link: function(scope, element, attrs, accordionController){
                scope.showStatus = false;
                scope.selectIndex = 0;
                scope.prev = element.prev();
                scope.selectStatus = true;
                var left = undefined;
                var keydown = function(event){
                    var e = event || window.event;
                    if(e && e.keyCode == 13){
                        scope.$apply(function(){
                            scope.select(scope.completeData[scope.selectIndex]);
                        });
                    }
                    if(e && e.keyCode == 38){
                        if(scope.selectIndex > 0){
                            scope.$apply(function() {
                                scope.selectIndex -= 1;
                            });
                        }
                    }
                    if(e && e.keyCode == 40){
                        if(scope.selectIndex < scope.completeData.length -1){
                            scope.$apply(function() {
                                scope.selectIndex += 1;
                            });
                        }
                    }
                }

                scope.selectActive = function(index){
                    scope.selectIndex = index;
                };
                scope.select = function(obj){
                    if(obj){
                        scope.successFunction(obj);
                        scope.showStauts = false;
                        scope.selectStatus = true;
                        document.onkeydown = '';
                    }else{
                        scope.successFunction(obj);
                    }

                };
                scope.prev.blur(function(event){
                    if(event.relatedTarget && event.relatedTarget.parentNode == element[0]){
                        return;
                    }
                    scope.$apply(function() {
                        scope.showStatus = false;
                    });
                    document.onkeydown = '';
                });
                var focus = function(){
                    if(scope.completeData && scope.completeData.length > 0){
                        scope.$apply(function() {
                            scope.showStatus = true;
                        });
                    }
                    if(!left || left == undefined){
                        left = scope.prev[0].offsetLeft;
                        element.css('left',left);
                    }
                    scope.prev[0].onkeydown = keydown;
                }
                scope.prev.focus(focus);
                scope.$watch('completeData',function(newData,b,c){
                    if(!scope.selectStatus){
                        scope.select(false);
                    }else{
                        scope.selectStatus = false;
                    }
                   if(scope.completeData && scope.completeData.length > 0){
                       scope.showStatus = true;
                   }else{
                       scope.showStatus = false;
                       document.onkeydown = '';
                   }
                });
            }
        }
    });

})();
