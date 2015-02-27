newsApp.controller('BeatsCtrl', function BeatsCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beats = BeatsFactory.beats;
  $scope.BeatsFactory = BeatsFactory;
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId);
});
