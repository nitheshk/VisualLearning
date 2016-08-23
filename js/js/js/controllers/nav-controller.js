angular.module("visualLearningApp").controller('navController', function ($scope) {
    $scope.navStyleChange = function (event) {
        $scope.activeMenu = event.target.id;
    };
});

angular.module("visualLearningApp").controller('contactUSController', function ($scope) {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showCurrentLocation);
    } else {
        alert("Geolocation API not supported.");
    }

    function showCurrentLocation(position) {
        var latitude = 15.365805; //position.coords.latitude; 
        var longitude = 73.933536; //position.coords.longitude;
        var coords = new google.maps.LatLng(latitude, longitude);

        var mapOptions = {
            zoom: 11
            , center: coords
            , mapTypeControl: true
            , mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        //create the map, and place it in the HTML map div
        map = new google.maps.Map(
            document.getElementById("map"), mapOptions
        );

        //place the initial marker
        var marker = new google.maps.Marker({
            position: coords
            , map: map
            , title: "Current location!"
        });
    }


});
