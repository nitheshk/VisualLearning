angular.module("visualLearningApp").controller('navController', function ($scope) {
    $scope.navStyleChange = function (event) {
        $scope.activeMenu = event.target.id;
    };
});