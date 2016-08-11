// initial
import angular from 'angular';
import 'angular-ui-router';

import mainRouter from './main_router';

let application = angular.module('app', [
    'ui.router'
]);

application.config(mainRouter);
application.config(function ($controllerProvider, $compileProvider, $provide) {
    application.registerController = $controllerProvider.register;
    application.registerFactory = $provide.factory;
    application.registerComponent = $compileProvider.component;
    console.log(application.registerComponent)
});

console.log('app init');
