namespace app {
    'use strict';

    /**
    * Home view controller
    */
    class HomeController {
        public storage: ng.storage.IStorageService;

        // @ngInject
        constructor($localStorage: ng.storage.IStorageService) {
            this.storage = $localStorage;
        }
    }

    angular
        .module('app')
        .controller('HomeController', HomeController);
}
