(function() {
    'use strict';

    angular
        .module('app.rpm')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'rpm',
                config: {
                    url: '/rpm',
                    templateUrl: 'app/rpm/rpm.html',
                    controller: 'RpmController',
                    controllerAs: 'vm',
                    title: 'Concious Design | RPM',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-dashboard"></i> RPM'
                    }
                }
            }
        ];
    }
})();
