sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/m/MessageBox"
], function (Controller, Device, MessageBox) {
	"use strict";

	return Controller.extend("sap.training.controller.Main1", {

		onInit: function () {
			// apply compact density for desktop, the standard cozy design otherwise
			var sClass = Device.system.desktop ? "sapUiSizeCompact" : "sapUiSizeCozy";
			this.getView().addStyleClass(sClass);
		},

		onButtonPress: function () {
			MessageBox.success("Button pressed");
		}

	});

});