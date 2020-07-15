sap.ui.jsview("sap.training.view.Main2_async", {

	getControllerName: function () {
		return "sap.training.controller.Main2_async";
	},

	createContent: function (oController) {

		var oMyController = {

			onButtonPress: function (oEvent) {

				sap.ui.require(["sap/m/MessageBox"], function (MessageBox) {
					MessageBox.success("Handler in Custom Controller Object invoked");
				});

			}
		};

		var oLayout = new sap.ui.layout.HorizontalLayout();

		sap.ui.require(["sap/ui/core/Fragment"], function (Fragment) {

			Fragment.load({
				name: "sap.training.view.HtmlFrag",
				type: "HTML",
				controller: oMyController
			}).then(function (oButton) {
				oLayout.addContent(oButton);
			});

			Fragment.load({
				name: "sap.training.view.XmlFrag1",
				type: "XML",
				controller: oMyController
			}).then(function (oButton) {
				oLayout.addContent(oButton);
			});

			Fragment.load({
				name: "sap.training.view.JsFrag",
				type: "JS",
				controller: oMyController
			}).then(function (oButton) {
				oLayout.addContent(oButton);
			});

		});

		return oLayout;

	}
});