import controller from './controller.js';
import subCtrl from './submodule/controller.js';

angular.module('app.module1', [])
    .controller('Module1Ctrl', controller)
    .controller('SubCtrl', subCtrl);

let MyWorker = require('worker!./factory.js');
let worker = new MyWorker();

worker.postMessage({a: 1});

worker.onmessage = function (e) {
    //
};

export default angular.module('app.module1');
