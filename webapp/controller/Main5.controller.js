sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function(Controller, Device) {
	"use strict";

	return Controller.extend("sap.training.controller.Main5", {

		onInit: function() {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
		},

		_getDialog: function() {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("idFrag", "sap.training.view.Dialog", this);
				this.getView().addDependent(this._oDialog);
			}

			return this._oDialog;
		},

		onOpenDialog: function(oEvent) {
			this._getDialog().open();
		},

		onCloseDialog: function(oEvent) {
			this._getDialog().close();
			var oInput = sap.ui.core.Fragment.byId("idFrag", "idInput");
			alert(oInput.getValue());
		}

	});

});