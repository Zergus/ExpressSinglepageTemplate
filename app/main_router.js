import module1Config from './module1/config.js';
import subConf from './module1/submodule/config.js';

import module2 from './module2/config.js';

export default function ($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'test.html'
        })
        .state('module1', module1Config.route)
        .state('module1.sub', subConf.route)
        .state('module2', module2.route)
        .state('module2.sub', {
            url: '/sub',
            template () {
                return 'test sub test 2';
            }
        });


    $locationProvider.html5Mode(true);
}
