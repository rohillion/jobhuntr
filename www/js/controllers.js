angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  $scope.orientation;
  $scope.loading = true;
  $scope.inMotion = false;

  $scope.onSnapBack = function() {
    $scope.inMotion = false;
  };

  $scope.cardPartialSwipe = function(amt, index) {
    $scope.orientation = amt;
    $scope.inMotion = true;
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    $scope.inMotion = false;
    if($scope.orientation < 0)
    {
      console.log('Skip');
    }
    else {
      console.log('Apply!');
    }
  };

  $scope.toggleRadar = function(){
    $scope.loading = false;
  }

  $scope.showDetails = function(card_id){
    $state.go('app.details',card_id);
  }

  $scope.cards = [
    {
      id:'1',
      src:'img/logos/bistro.jpg',
      name:'Bistro',
      title:'Waitress',
      position:'Full-Time'
    },
    {
      id:'2',
      src:'img/logos/bushido.jpg',
      name:'Bushido',
      title:'Kitchen Porter',
      position:'Part-Time'
    },
    {
      src:'img/logos/chickenrocks.jpg',
      id:'2',
      name:'Chicken Rocks!',
      title:'Cashier',
      position:'Full-Time'
    },
    {
      src:'img/logos/cleaning.jpg',
      id:'2',
      name:'Cleaning',
      title:'Cleaner',
      position:'Part-Time'
    },
    {
      src:'img/logos/expresso.jpg',
      id:'2',
      name:'Expresso',
      title:'Barista',
      position:'Part-Time'
    },
    {
      src:'img/logos/fornodolce.jpg',
      id:'2',
      name:'Forno Dolce',
      title:'Cook',
      position:'Part-Time'
    },
    {
      src:'img/logos/knoll.jpg',
      id:'2',
      name:'Knoll',
      title:'Receptionist',
      position:'Part-Time'
    },
    {
      src:'img/logos/maxim.jpg',
      id:'2',
      name:'Maxim',
      title:'Waitress',
      position:'Part-Time'
    },
    {
      src:'img/logos/mopghost.jpg',
      id:'2',
      name:'Mop Ghost',
      title:'Receptionist',
      position:'Full-Time'
    },
    {
      src:'img/logos/spar.jpg',
      id:'2',
      name:'Spar',
      title:'Dely',
      position:'Part-Time'
    },
    {
      src:'img/logos/starbucks.jpg',
      id:'2',
      name:'Starbucks',
      title:'Barista',
      position:'Full-Time'
    },
    {
      src:'img/logos/sushi.jpg',
      id:'2',
      name:'Sushi Bar',
      title:'Cook',
      position:'Full-Time'
    },
    {
      src:'img/logos/tacotime.jpg',
      id:'2',
      name:'Tacotime',
      title:'Waitress',
      position:'Full-Time'
    },
    {
      src:'img/logos/theeatery.jpg',
      id:'2',
      name:'The Eatery',
      title:'Receptionist',
      position:'Part-Time'
    },
    {
      src:'img/logos/vipgourmet.jpg',
      id:'2',
      name:'VipGourmet',
      title:'Kitchen Porter',
      position:'Part-Time'
    }
  ];

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('LoginCtrl', function($scope, $stateParams, $ionicHistory) {

  $ionicHistory.nextViewOptions({
    disableBack: true
  });

}).controller('SettingsCtrl', function($scope, $stateParams) {



}).controller('ProfileCtrl', function($scope, $stateParams) {



}).controller('AppliedCtrl', function($scope, $stateParams) {



}).controller('DetailsCtrl', function($scope, $stateParams) {



});
