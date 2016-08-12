import module1 from './module1/config.js';
import module1sub from './module1/submodule/config.js';

import module2 from './module2/config.js';
import module2sub from './module2/submodule/config.js';

export default function ($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'test.html'
        })
        .state('module1', module1.route)
        .state('module1.sub', module1sub.route)
        .state('module2', module2.route)
        .state('module2.sub', module2sub.route);


    $locationProvider.html5Mode(true);
}
