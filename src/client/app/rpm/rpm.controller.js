(function() {
    'use strict';

    angular
        .module('app.rpm')
        .controller('RpmController', RpmController);

    RpmController.$inject = ['$q', 'dataservice', 'logger', '$modal', '$scope'];
    /* @ngInject */
    function RpmController($q, dataservice, logger, $modal, $scope) {
        var vm = this,
            problemIndex = 0,
            thanksModal;

        thanksModal = $modal({
            scope: $scope.$new(),
            templateUrl: '/app/rpm/thanks-and-share.html',
            show: false
        });


        vm.news = {
            title: 'Concious Designs'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Raven\'s Progressive Matrices';

        vm.setNames = [
            'Basic Problems B',
            'Basic Problems C',
            'Basic Problems D',
            'Basic Problems E',
            'Challenge Problems B',
            'Challenge Problems C',
            'Challenge Problems D',
            'Challenge Problems E'
        ];

        vm.example = {
            image: 'example-problem'
        };

        vm.startTest = function(problemSet) {
            logger.info('problem set ' + problemSet + ' selected');
            vm.setName = problemSet;
            vm.problemSet = vm.problemSets[vm.setName];

            getNextProblem();
            vm.state = 'play';
        };



        vm.correctAnswers = [];
        vm.incorrectAnswers = [];

        vm.selectAnswer = function(selectedAnswer) {
            logger.log('selectedAnswer: ', selectedAnswer);
            vm.problem.selectedAnswer = selectedAnswer



            if (selectedAnswer == vm.problem.answer) {
                vm.correctAnswers.push(vm.problem.name);
            } else {
                vm.incorrectAnswers.push(vm.problem.name);
            }

            if (problemIndex == vm.problemSet.length - 1) {


                thanksModal.$promise.then(thanksModal.show);


            } else {
                getNextProblem();
            }




        };

        activate();

        function activate() {
            var promises = [];


            dataservice.getProblems().then(function(response) {
                vm.problemSets = response;
                vm.state = 'select';
            }, function(response) {
                logger.error('Error: ', response);
                vm.state = 'error'
            });

        }


        function getNextProblem() {

            problemIndex += 1;
            vm.problem = vm.problemSets[vm.setName][problemIndex]

            if (vm.problem.size == 2) {
                vm.problemFigures = [
                    ['A', 'B'],
                    ['C', 'question-mark']
                ];
            }

            if (vm.problem.size == 3) {
                vm.problemFigures = [
                    ['A', 'B', 'C'],
                    ['D', 'E', 'F'],
                    ['G', 'H', 'question-mark']
                ];
            }
        }
    }
})();
