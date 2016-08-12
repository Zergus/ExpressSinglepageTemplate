export default {
    route: {
        url: '/sub',
        controller: 'SubCtrl',
        template () {
            return require('./template.html');
        }
    }
};
