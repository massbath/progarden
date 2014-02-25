/****
Module
****/
var galleryModule = angular.module('gallery' , ['ngAnimate', 'ngTouch']);
var contactModule = angular.module('contact' , ['ngResource']);
var proGardenModule = angular.module('proGarden', ['ngRoute', 'gallery', 'contact']);

proGardenModule.config(configRouteProvider);

