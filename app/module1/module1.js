import controller from './controller.js';
import subCtrl from './submodule/controller.js';

import store from '../common/store.js';

angular.module('app.module1', [])
    .controller('Module1Ctrl', controller)
    .controller('SubCtrl', subCtrl)
    .factory('Factory', store);

export default angular.module('app.module1');
