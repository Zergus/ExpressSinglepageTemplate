import HomeController from './HomeController.js';

export default ($stateProvider, $urlRouterProvider, $locationProvider) => {

    let moduleRequest = null;

    function requestModule () {
        if (!moduleRequest) {
            moduleRequest = new Promise(function (res, rej) {
                require.ensure('./module1', function (require) {
                    require('./module1');
                    res(true);
                });
            });
        }

        return moduleRequest;
    }

    $stateProvider
        .state('home', {
            url: '/',
            controller: HomeController,
            controllerAs: 'ctrl',
            templateUrl: 'test.html'
        })
        .state('module1', {
            url: '/module1',
            template () {
                return requestModule().then(function () {
                    return require('./module1/template.html');
                });
            },
            resolve: {
                module1 () {
                    return requestModule().then(function () {
                        console.log('file loaded');
                        return true;
                    });
                }
            }
        });


    $locationProvider.html5Mode(true);
};
