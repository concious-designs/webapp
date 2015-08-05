(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger', 'Restangular'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger, Restangular) {
        var service = {
                getProblems: getProblems
            },
            apiService = Restangular.all('api');

        return service;


        function getProblems() {
            return apiService.get('problems')
                .then(success, failure);


            function success(response) {
                logger.log('success response from getProblems: ', response);
                return response;
            }

            function failure(e) {
                return exception.catcher('XHR Failed for getProblems')(e);
            }
        }
    }
})();
