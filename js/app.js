var myApp = angular.module("myApp", ['ngRoute']);
myApp.controller("myContoller", function ($scope) {

});


myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/home', {
            templateUrl: 'home.html'
        })
        .when('/index', {
            templateUrl: 'home.html'
        })
    
        .when('/signUp', {
            templateUrl: 'signUp.html'
        })
        .when('/leranIt', {
            templateUrl: 'leranIt.html'
        })
        .when('/services', {
            templateUrl: 'services.html'
        })
        .when('/aboutUs', {
            templateUrl: 'aboutUs.html'
        })
//        .when('/blog-item', {
//            templateUrl: 'blog-item.html'
//        })
        .when('/pricing', {
            templateUrl: 'pricing.html'
        })
        .when('/404', {
            templateUrl: '404.html'
        })
        .when('/shortcodes', {
            templateUrl: 'shortcodes.html'
        })
        .when('/blog', {
            templateUrl: 'blog.html'
        })
        .when('/contactUs', {
            templateUrl: 'contact-us.html'
        })
        .otherwise({
            templateUrl: '404.html'
        });
  }]);


myApp.controller('contactUSController', function ($scope) {

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


angular.module('myApp').value('$anchorScroll', angular.noop);