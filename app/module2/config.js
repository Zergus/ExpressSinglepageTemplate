export default {
    route: {
        url: '/module2',
        abstract: true,
        template () {
            return require('./template.html');
        },
        // resolve: {
        //     module2 () {
        //         return new Promise(function (res, rej) {
        //             require.ensure('./module2.js', function (require) {
        //                 require('./module2.js');
        //                 res(true);
        //             });
        //         });
        //     }
        // }
    }
};
