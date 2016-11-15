namespace app {
    'use strict';

    export interface IReaderApi {
        getReaderReviews(readerId: string): ng.IPromise<any>;
        getReaderInfo(readerId: string): ng.IPromise<any>;
    }
    
    class ReaderApi implements IReaderApi {

        static $inject = ['$http'];

        // @ngInject
        constructor(private $http) {}

        public getReaderReviews(readerId: string): ng.IPromise<any> {
            return this.$http({
                method: 'get',
                url: `/api/readers/${readerId}/reviews`
            }).then((result: { data: any }) => result.data);
        };

        public getReaderInfo(readerId: string): ng.IPromise<any> {
            return this.$http({
                method: 'get',
                url: `/api/readers/${readerId}`
            }).then((result: { data: any }) => result.data);
        };
    }

    angular
        .module('app')
        .service('readerApi', ReaderApi);
}
