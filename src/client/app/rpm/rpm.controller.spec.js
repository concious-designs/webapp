/* jshint -W117, -W030 */
describe('RpmController', function() {
    var controller;
    var problems = mockData.getMockProblems();

    beforeEach(function() {
        bard.appModule('app.rpm');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getProblems').returns($q.when(problems));
        controller = $controller('RpmController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

});
