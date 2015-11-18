import angular from 'angular';
import 'angular-ui-router';

import './app-core/index';
import './app-layout/index';
import './app-images/index';

angular
  .module('app', ['app.core', 'app.layout', 'app.images']);
