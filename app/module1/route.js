export default ($stateProvider, $urlRouterProvider, $locationProvider) => {

    console.log('routing');

    $stateProvider
        .state('mod1', {
            url: '/module1',
            templateUrl: 'test2.html',
            resolve: {
                resolve1 () {
                    console.log(1);
                }
            }
        });
};
