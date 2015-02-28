newsApp.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId);
  $scope.addReporter = function() {
    $scope.beat.reporters.push({name: $scope.reporterName, birthDay: $scope.birthDay, timeEmployed: $scope.timeEmployed });
    $scope.reporterName = null;
    $scope.birthDay = null;
    $scope.timeEmployed = null;
  }
});
