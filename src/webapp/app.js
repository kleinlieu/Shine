(function() {

	function onReady() {
		
		// After notifying the HPA framework the application is ready, it will
		// call our openEntryPoint.
	    EE.Interop.setReady(true);
	}
	
	window.openEntryPoint = function(entryPoint, params, cb, scope) {
		console.log('EntryPoint - demo app: ' + entryPoint);    
	    document.body.innerHTML = ('<div ng-view></div>');
	    
	    // Save the entry point for later use.
	    workspaceModule.entryPoint = entryPoint;
	    angular.bootstrap(document, ['WorkspaceModule']);
	};
	
	// Make sure to call 'onReady' after the document is ready.
	if (!document.body) { 
		window.addEventListener('load', onReady, false);
	} else {
		onReady();
	}
}());