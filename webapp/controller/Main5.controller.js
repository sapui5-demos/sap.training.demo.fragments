sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.controller.Main5", {

		_getDialog: function() {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("myFrag", "sap.training.view.Dialog", this);
				this.getView().addDependent(this._oDialog);
			}

			return this._oDialog;
		},

		onOpenDialog: function(oEvent) {

			this._getDialog().open();
		},

		onCloseDialog: function(oEvent) {

			this._getDialog().close();

			var oTextField = sap.ui.core.Fragment.byId("myFrag", "myField");

			alert(oTextField.getValue());
		}

	});

});