sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function(Controller, Device) {
	"use strict";

	return Controller.extend("sap.training.controller.Main4", {

		onInit: function() {

			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");


			var oInput1 = this.getView().byId(sap.ui.core.Fragment.createId("idFrag", "idInput"));
			var oInput2 = this.getView().byId("idInput");

			oInput1.setValue('this.getView().byId(sap.ui.core.Fragment.createId("idFrag", "idInput"))');
			oInput2.setValue('this.getView().byId("idInput")');

		}

	});

});