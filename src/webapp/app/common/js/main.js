var workspaceModule = angular.module('WorkspaceModule', []).config(["$routeProvider", function($routeProvider) {    	
   $routeProvider.
   when('/' , {controller:"ContentCtrl", templateUrl:'app/common/views/content.html'}).
   when('/summary' , {controller:"SummaryCtrl", templateUrl:'app/common/views/summary.html'}).
   otherwise({ redirectTo: '/' });
}]);

workspaceModule.run(['$document', '$location', '$rootElement', function($document, $location, $rootElement) {	            
	if(workspaceModule.entryPoint  && workspaceModule.entryPoint === "SummaryEntryPoint"){
		$location.path('/summary');
	} else {
		$location.path('/');   
	}
}]);