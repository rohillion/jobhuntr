angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  $scope.cards = [
    {src:'img/logos/bistro.jpg'},
    {src:'img/logos/bushido.jpg'},
    {src:'img/logos/chickenrocks.jpg'},
    {src:'img/logos/cleaning.jpg'},
    {src:'img/logos/expresso.jpg'},
    {src:'img/logos/fornodolce.jpg'},
    {src:'img/logos/knoll.jpg'},
    {src:'img/logos/maxim.jpg'},
    {src:'img/logos/mopghost.jpg'},
    {src:'img/logos/spar.jpg'},
    {src:'img/logos/starbucks.jpg'},
    {src:'img/logos/sushi.jpg'},
    {src:'img/logos/tacotime.jpg'},
    {src:'img/logos/theeatery.jpg'},
    {src:'img/logos/vipgourmet.jpg'}
  ];

  $scope.cardDestroyed = function(index) {
    console.log(index)
    $scope.cards.splice(index, 1);
  };

  $scope.cardSwiped = function(index) {
    console.log(index)
    //var newCard = $scope.cards.push({src:'img/ionic.png'});
  };

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $state.go('app.jobs');
    }, 500);
  };
})

.controller('LoginCtrl', function($scope, $stateParams, $ionicHistory) {

  $ionicHistory.nextViewOptions({
    disableBack: true
  });

}).controller('SettingsCtrl', function($scope, $stateParams) {



}).controller('ProfileCtrl', function($scope, $stateParams) {



});
