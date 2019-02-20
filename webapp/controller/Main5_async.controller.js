sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/ui/core/Fragment",
	"sap/m/MessageBox"
], function (Controller, Device, Fragment, MessageBox) {
	"use strict";

	return Controller.extend("sap.training.controller.Main5_async", {

		onInit: function () {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
		},

		onOpenDialog: function () {
			var oView = this.getView();

			// create dialog lazily
			if (!Fragment.byId("idFrag", "demoDialog")) {
				// load XML fragment asynchronously
				Fragment.load({
					id: "idFrag",
					name: "sap.training.view.Dialog",
					type: "XML",
					controller: this
				}).then(function (oDialog) {
					// connect dialog to the view (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				Fragment.byId("idFrag", "demoDialog").open();
			}
		},

		onCloseDialog: function (oEvent) {
			Fragment.byId("idFrag", "demoDialog").close();
			var oInput = Fragment.byId("idFrag", "idInput");
			MessageBox.show(oInput.getValue());
		}

	});

});