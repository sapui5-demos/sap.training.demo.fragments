sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.controller.Main3", {

		onButtonPress: function() {
			alert("Button pressed");
		}

	});

});