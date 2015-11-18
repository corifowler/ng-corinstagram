import angular from 'angular';

import '../app-core/index';

import HomeController from './controllers/homecontroller';

import coriImage from './directives/imagedirective';

import GalleryService from './services/galleryservice';

angular
  .module('app.layout', ['app.core'])
  .service('GalleryService', GalleryService)
  .controller('HomeController', HomeController)
  .directive('coriImage', coriImage)
;