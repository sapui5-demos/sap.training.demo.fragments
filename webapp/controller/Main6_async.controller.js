sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/ui/core/Fragment",
	"sap/m/MessageBox"
], function (Controller, Device, Fragment, MessageBox) {
	"use strict";

	return Controller.extend("sap.training.controller.Main6_async", {

		onInit: function () {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
		},

		onOpenDialog: function () {
			var oView = this.getView();

			// create dialog lazily
			if (!sap.ui.getCore().byId("demoDialog")) {
				// load XML fragment asynchronously
				Fragment.load({
					name: "sap.training.view.Dialog",
					type: "XML",
					controller: this
				}).then(function (oDialog) {
					// connect dialog to the view (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				sap.ui.getCore().byId("demoDialog").open();
			}
		},

		onCloseDialog: function (oEvent) {
			sap.ui.getCore().byId("demoDialog").close();
			var oInput = sap.ui.getCore().byId("idInput");
			MessageBox.show(oInput.getValue());
		}

	});

});