import controller from './controller.js';
import subCtrl from './submodule/controller.js';

angular.module('app.module1', [])
    .controller('Module1Ctrl', controller)
    .controller('SubCtrl', subCtrl);

export default angular.module('app.module1');
