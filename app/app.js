import 'angular/angular.min.js';
import 'angular-ui-router/release/angular-ui-router.min.js';
import 'oclazyload/dist/ocLazyLoad.min.js';

import mainRouter from './main_router';
import mainConfig from './app_config.js';

let application = angular.module('app', [
    'oc.lazyLoad',
    'ui.router'
]);

application.config(mainRouter);
application.run(mainConfig);
