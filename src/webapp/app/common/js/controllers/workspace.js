workspaceModule.controller('WorkspaceCtrl', ['$scope', '$http', '$compile', '$interpolate', function ($scope, $http,  $compile, $interpolate) {
  console.log('Controller initialized'); 

  $scope.openMainView = function() {
	  EE.Interop.openEntryPoint(EE.miniappId, 'open');
  };
  
  if(workspaceModule.entryPoint === 'SummaryEntryPoint') {
	  $scope.HelloWord = 'Hello World App Summary';
  } else {
	  $scope.HelloWord = 'Hello World app';  
  }
}]);