newsApp.controller('BeatsCtrl', function BeatsCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beats = BeatsFactory.beats;
  $scope.BeatsFactory = BeatsFactory;
});
