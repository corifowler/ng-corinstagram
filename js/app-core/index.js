import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import PARSE from './constants/parseconstant';

angular
  .module('app.core', ['ui.router'])
  .constant('PARSE', PARSE)
  .config(config)
;