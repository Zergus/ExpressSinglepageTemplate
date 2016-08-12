export default {
    route: {
        url: '/module1',
        abstract: true,
        controller: 'Module1Ctrl',
        template () {
            return require('./template.html');
        },
        resolve: {
            module1 ($ocLazyLoad) {
                'ngInject';

                return new Promise(function (res, rej) {
                    require.ensure('./module1.js', function (require) {
                        require('./module1.js') && $ocLazyLoad.load({ name: 'app.module1' });
                        res(true);
                    });
                });
            }
        }
    }
};
