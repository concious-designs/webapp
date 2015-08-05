/* jshint -W117, -W030 */
describe('HomeController', function() {
    var controller;
    var problems = mockData.getMockProblems();

    beforeEach(function() {
        bard.appModule('app.home');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getProblems').returns($q.when(problems));
        controller = $controller('HomeController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('home controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of home', function () {
                expect(controller.title).to.equal('home');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should have news', function () {
                expect(controller.news).to.not.be.empty;
            });

            it('should have at least 1 person', function () {
                expect(controller.problem).to.have.length.above(0);
            });

            it('should have problem count of 5', function () {
                expect(controller.problem).to.have.length(7);
            });
        });
    });
});
