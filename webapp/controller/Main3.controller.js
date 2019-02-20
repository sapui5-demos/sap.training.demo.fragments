sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/m/MessageBox"
], function (Controller, Device, MessageBox) {
	"use strict";

	return Controller.extend("sap.training.controller.Main3", {

		onInit: function () {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
		},

		onButtonPress: function () {
			MessageBox.show("Button pressed");
		}

	});

});