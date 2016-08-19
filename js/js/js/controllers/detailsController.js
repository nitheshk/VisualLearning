
angular.
module('visualLearningApp').controller("detailsController", ['$scope', "$stateParams", '$http', '$sce', function ($scope, $stateParams, $http, $sce) {



    $scope.id = $stateParams.id;
    $http.get("http://localhost:3000/find/" + $scope.id)
        .then(function (data) {

        $scope.tutorial = data.data

        console.log($scope.tutorial)

        $scope.deliberatelyTrustDangerousSnippet = function () {


            return $sce.trustAsResourceUrl($scope.tutorial.content.videoLink);
        };
    }, function (err) {

    });


}])