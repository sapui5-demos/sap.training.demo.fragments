sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.controller.Main4", {

		onInit: function() {
			
			var oField1 = this.getView().byId(sap.ui.core.Fragment.createId("myFrag", "myField"));
			var oField2 = this.getView().byId("myField");

			oField1.setValue('this.getView().byId(sap.ui.core.Fragment.createId("myFrag", "myField"))');
			oField2.setValue('this.getView().byId("myField")');

		}

	});

});