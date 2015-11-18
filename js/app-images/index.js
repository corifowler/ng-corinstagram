import angular from 'angular';

import '../app-core/index';

import AddController from './controllers/addcontroller';

import AddService from './services/addservice';

angular
  .module('app.images', ['app.core'])
  .service('AddService', AddService)
  .controller('AddController', AddController)
;