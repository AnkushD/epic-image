
angular.module('epic-image', [])
 .directive('checkbackground', ['$http','$q', function($http,$q) {
    
    var isImageExist = function(src, minWidth) {
        var deferred = $q.defer();
        var newImg = new Image();

        newImg.onerror = function() {
            deferred.resolve(false);
        };

        newImg.onload = function() {
            var width = newImg.width;
            var height = newImg.height;

            if(!minWidth) {
                deferred.resolve(true);
            } 
            if(parseInt(minWidth, 10) && (width > parseInt(minWidth, 10))) {
                deferred.resolve(true);
            } else {
                deferred.resolve(false);
            }
        };
        newImg.src = src;
        return deferred.promise;
    };

    return {
        restrict: "A",
        scope: {
            actualImage: "=",
            defaultImage: "@",
            minImageWidth: "@"
        },
        link: function postLink(scope, element, attrs) {
            scope.$watch('actualImage', function(actualUrl) {

                isImageExist(actualUrl, scope.minImageWidth).then(function(isImageOk) {
                    if(!isImageOk){
                        if(!scope.defaultImage){
                            element.remove();
                        } else {
                            var image = "background-image:url('"+scope.defaultImage+"')";
                            element.attr('style', image);
                        }
                    }
                    else {
                        var image = "background-image:url('"+actualUrl+"')";
                        element.attr('style', image);
                    }
                });
            });
        }
    };
}])

 .directive('checksrc', ['$http','$q',function($http,$q) {

    var isImageExist = function(src, minWidth) {
        var deferred = $q.defer();
        var newImg = new Image();

        newImg.onerror = function() {
            deferred.resolve(false);
        };

        newImg.onload = function() {
            var width = newImg.width;
            var height = newImg.height;

            if(!minWidth) {
                deferred.resolve(true);
            } 
            if(parseInt(minWidth, 10) && (width > parseInt(minWidth, 10))) {
                deferred.resolve(true);
            } else {
                deferred.resolve(false);
            }
        };
        newImg.src = src;
        return deferred.promise;
    };

    return {
        restrict: "A",
        scope: {
            actualImage: "=",
            defaultImage: "@",
            minImageWidth: "@"
        },
        link: function postLink(scope, element, attrs) {
            scope.$watch('actualImage', function(actualUrl) {

                isImageExist(actualUrl, scope.minImageWidth).then(function(isImageOk) {
                    if(!isImageOk){
                        if(!scope.defaultImage){
                            element.remove();
                        } else {
                            element.attr('src', scope.defaultImage).css('opacity', '1');
                        }
                    }
                    else {
                        element.attr('src', actualUrl).css('opacity', '1');
                    }
                });
            });
        }
    };
}]);
