/* jshint -W117, -W030 */
describe('rpm routes', function () {
    describe('state', function () {
        var view = 'app/rpm/rpm.html';

        beforeEach(function() {
            module('app.rpm', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state rpm to url /rpm ', function() {
            expect($state.href('rpm', {})).to.equal('/');
        });

        it('should map /rpm route to rpm View template', function () {
            expect($state.get('rpm').templateUrl).to.equal(view);
        });

        it('state of rpm should work with $state.go', function () {
            $state.go('rpm');
            $rootScope.$apply();
            expect($state.is('rpm'));
        });
    });
});
