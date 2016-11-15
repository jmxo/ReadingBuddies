namespace app {
    'use strict';

    /**
     * The latest book reviews for a reader
     * <latest-book-reviews reader-model="reader"/>
     */
    function latestBookReviewsDirective(readerApi: IReaderApi): ng.IDirective {
        return {
            restrict: 'EA',
            scope: {
                readerModel: '='
            },
            replace: false,
            templateUrl: '/app/latest-book-reviews.partial.html',
            link: latestBookReviewsLink
        };

        // @ngInject
        function latestBookReviewsLink(scope: any): void {

            scope.$watch('readerModel', fetchReaderData);

            function fetchReaderData() {
                scope.reader = null;
                scope.reviewData = null;

                if (scope.readerModel) {
                    readerApi
                        .getReaderReviews(scope.readerModel.id)
                        .then(data => {
                            console.log(data);
                            scope.reviewData = data;
                        });

                    readerApi
                        .getReaderInfo(scope.readerModel.id)
                        .then(data => {
                            console.log(data);
                            scope.reader = data;
                        });
                }
            }
        }
    }

    angular
        .module('app')
        .directive('latestBookReviews', latestBookReviewsDirective);
}
