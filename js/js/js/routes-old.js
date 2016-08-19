'use strict';

angular.
module('visualLearningApp').
config(['$stateProvider', '$urlRouterProvider'

        , function config($stateProvider, $urlRouterProvider) {

            $stateProvider.
            state('/tutorials/:id', {

                templateUrl: 'templates/tut-details-template.html'
                , controller: 'detailsController'
            }).
            state('/tutorials', {
                templateUrl: 'templates/tut-list-template.html'
            }).
            state('/registeruser', {
                templateUrl: 'templates/add-user-template.html'
            }).
            state('/addTutorial', {
                templateUrl: 'templates/add-new-tutorial.html'
            }).
            state('/', {
                templateUrl: 'templates/home.html'
            })
                .state('/home', {
                templateUrl: 'templates/home.html'
            })
                .state('/index', {
                templateUrl: 'templates/home.html'
            })

                .state('/signUp', {
                templateUrl: 'templates/signUp.html'
            })
                .state('/leranIt', {
                templateUrl: 'templates/leranIt.html'
            })
                .state('/services', {
                templateUrl: 'templates/services.html'
            })
                .state('/aboutUs', {
                templateUrl: 'templates/aboutUs.html'
            })
                .state('/pricing', {
                templateUrl: 'templates/pricing.html'
            })
                .state('/404', {
                templateUrl: 'templates/404.html'
            })
                .state('/shortcodes', {
                templateUrl: 'templates/shortcodes.html'
            })
                .state('/blog', {
                templateUrl: 'templates/blog.html'
            })
                .state('/contactUs', {
                templateUrl: 'templates/contact-us.html'
            })
                .otherwise({
                templateUrl: 'templates/404.html'
            });

        }
       ]);