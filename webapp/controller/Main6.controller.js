sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/m/MessageBox"
], function (Controller, Device, MessageBox) {
	"use strict";

	return Controller.extend("sap.training.controller.Main6", {

		onInit: function () {
			// apply compact density for desktop, the standard cozy design otherwise
			var sClass = Device.system.desktop ? "sapUiSizeCompact" : "sapUiSizeCozy";
			this.getView().addStyleClass(sClass);
		},

		_getDialog: function () {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("sap.training.view.Dialog", this);
				this.getView().addDependent(this._oDialog);
			}

			return this._oDialog;
		},

		onOpenDialog: function (oEvent) {
			this._getDialog().open();
		},

		onCloseDialog: function (oEvent) {
			this._getDialog().close();
			var oInput = sap.ui.getCore().byId("idInput");
			MessageBox.show(oInput.getValue());
		}

	});

});