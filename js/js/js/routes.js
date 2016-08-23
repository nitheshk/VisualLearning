'use strict';

angular.
module('visualLearningApp').
config(['$stateProvider', '$urlRouterProvider'
    , function config($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home'
                , templateUrl: 'templates/home.html'
            })
            .state('home.index', {
            url: '/'
            , templateUrl: 'templates/home.html'
        })
            .state('about', {
                url: '/aboutUs'
                , templateUrl: 'templates/aboutUs.html'
            }).
        state('tutorialsid', {
            url: "/tutorials/:id"
            , templateUrl: 'templates/tut-details-template.html'
            , controller: 'detailsController'
        }).
        state('tutorials', {
            url: "/tutorials"
            , templateUrl: 'templates/tut-list-template.html'
        }).
        state('registeruser', {
            url: "/registeruser"
            , templateUrl: 'templates/add-user-template.html'
        }).
        state('addTutorial', {
                url: "/addTutorial"
                , templateUrl: 'templates/add-new-tutorial.html'
            })
            .state('index', {
                url: "/index"
                , templateUrl: 'templates/home.html'
            })

        .state('signUp', {
                url: "/signUp"
                , templateUrl: 'templates/signUp.html'
            })
            .state('leranIt', {
                url: "/leranIt"
                , templateUrl: 'templates/leranIt.html'
                , controller: "MasterCtrl"
            })
            .state('services', {
                url: "/services"
                , templateUrl: 'templates/services.html'
            })
          .state('visdom', {
                url: "/visdom"
                , templateUrl: 'templates/visdom.html'
            })
            .state('pricing', {
                url: "/pricing"
                , templateUrl: 'templates/pricing.html'
            })
            .state('404', {
                url: "/404"
                , templateUrl: 'templates/404.html'
            })
            .state('shortcodes', {
                url: "/shortcodes"
                , templateUrl: 'templates/shortcodes.html'
            })
            .state('blog', {
                url: "/blog"
                , templateUrl: 'templates/blog.html'
            })
            .state('contactUs', {
                url: "/contactUs"
                , templateUrl: 'templates/contact-us.html'
            })
        }
       ]);