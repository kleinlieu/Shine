workspaceModule.controller('SummaryCtrl', ['$scope', '$http', '$compile', '$interpolate', function ($scope, $http,  $compile, $interpolate) {
  console.log('Controller initialized'); 
  
  // save entrypoint so that our app opens at the same point
  //Recipe 4.
  HPA.Interop.saveState({ viewMode: 'list' });

  $scope.openMainView = function() {
	  EE.Interop.openEntryPoint(EE.miniappId, 'open');
  };
  
  if(workspaceModule.entryPoint === 'SummaryEntryPoint') {
	  $scope.HelloWord = 'Hello World App Summary';
  } else {
	  $scope.HelloWord = 'Hello World app';  
  }
  
  $scope.displayName = HPA.Profile.getInfo().displayName;
  
  // Set the context object
  var contextObject = HPA.Framework.createContextObject(/**questionData, 'QUESTION', questionData.title, ''*/);
  HPA.Framework.setCurrentContext([contextObject]);
  
  // Add the app page to the activity context
  var entryPointObject = HPA.Framework.createEntryPointObject('events',
		  													  'QP_LIST',
		  													  HPA.I18n.localize('QP_LIST')
  );
  HPA.Framework.setCurrentContext([], entryPointObject);
  
}]);
workspaceModule.controller('ContentCtrl', ['$scope', '$http', '$compile', '$interpolate', '$location', function ($scope, $http,  $compile, $interpolate, $location) {
	  console.log('Controller initialized'); 
	  
	  var question1 = {
			  title: 'My question 1',
			  slots: 6,
			  filled: 2,
	  },
	  question2 = {
			  title: 'My question 2',
			  slots: 6,
			  filled: 1,
	  },
	  question3 = {
			  title: 'My question 3',
			  slots: 6,
			  filled: 6,
	  };
	  
	  $scope.questions = [question1, question2, question3];

	  $scope.openMainView = function() {
		  EE.Interop.openEntryPoint(EE.miniappId, 'open');
	  };
	  
	  if(workspaceModule.entryPoint === 'SummaryEntryPoint') {
		  $scope.HelloWord = 'Hello World App Summary';
	  } else {
		  $scope.HelloWord = 'Hello World app';  
	  }
	  
	  $scope.goToSummary = function() {
		  console.log('click');
		  $location.path('/summary');
	  }
	  
	  // save entrypoint so that our app opens at the same point
	  //Recipe 4.
	  HPA.Interop.saveState({ viewMode: 'list' });
	  
	  $scope.displayName = HPA.Profile.getInfo().displayName;
	  
	  // Set the context object
	  var contextObject = HPA.Framework.createContextObject(/**questionData, 'QUESTION', questionData.title, ''*/);
	  HPA.Framework.setCurrentContext([contextObject]);
	  
	  // Add the app page to the activity context
	  var entryPointObject = HPA.Framework.createEntryPointObject('events',
			  													  'QP_LIST',
			  													  HPA.I18n.localize('QP_LIST')
	  );
	  HPA.Framework.setCurrentContext([], entryPointObject);
	  
	}]);