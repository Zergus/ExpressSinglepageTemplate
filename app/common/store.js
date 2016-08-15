import ActionsWorker from 'worker!./actions.js';
import model from './model.js';

export default function ($timeout) {
    'ngInject';
    let store = {};

    store.model = model;

    store.worker = new ActionsWorker();

    store.worker.onmessage = function (e) {
        $timeout(function () {
            store.setModel(e.data.model);
        });
    };

    store.setModel = function (newModel) {
        store.model = newModel;
        return store.model;
    };

    store.getData = function () {
        store.worker.postMessage({ cmd: 'getData' });
    };

    store.updateAnother = function () {
        store.worker.postMessage({ cmd: 'updateAnother' });
    };

    store.testThis = function () {
        return 'okay';
    };

    return store;
}
