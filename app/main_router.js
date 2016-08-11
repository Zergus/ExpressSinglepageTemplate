import module1Config from './module1/routes.js';
import subConf from './module1/submodule/routes.js';

export default function ($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'test.html'
        })
        .state('module1', module1Config)
        .state('module1.sub', subConf);


    $locationProvider.html5Mode(true);
}
