import 'angular/angular.min.js';
import 'angular-ui-router/release/angular-ui-router.min.js';

import mainRouter from './main_router.js';
import mainConfig from './app_config.js';

import module1 from './module1/module1.js';
import module2 from './module2/module2.js';

let application = angular.module('app', [
    // 'oc.lazyLoad',
    'ui.router',
    module1.name,
    module2.name
]);

application.config(mainRouter);
application.run(mainConfig);
