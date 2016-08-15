import module1 from './module1/config.js';
import module1sub from './module1/submodule/config.js';

import module2 from './module2/config.js';
import module2sub from './module2/submodule/config.js';

export default function ($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    $stateProvider
        .state('app', {
            url: '',
            abstract: true,
            template: '<ui-view />'
        })
        .state('app.home', {
            url: '/home',
            templateUrl: 'test.html'
        })
        .state('app.module1', module1.route)
        .state('app.module1.sub', module1sub.route)
        .state('app.module2', module2.route)
        .state('app.module2.sub', module2sub.route);


    $urlRouterProvider.when('/', ['$state', function ($state) {
        $state.go('app.home');
    }]);

    $locationProvider.html5Mode(true);
}
