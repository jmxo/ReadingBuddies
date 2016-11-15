namespace app {
    'use strict';

    /**
    * Home view controller
    */
    class HomeController {
        static $inject = ['$localStorage'];

        // @ngInject
        constructor(private storage: ng.storage.IStorageService) {}
    }

    angular
        .module('app')
        .controller('HomeController', HomeController);
}
