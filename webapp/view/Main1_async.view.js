sap.ui.jsview("sap.training.view.Main1_async", {

	getControllerName: function () {
		return "sap.training.controller.Main1_async";
	},

	createContent: function (oController) {

		var oLayout = new sap.ui.layout.HorizontalLayout();

		sap.ui.require(["sap/ui/core/Fragment"], function (Fragment) {

			Fragment.load({
				name: "sap.training.view.HtmlFrag",
				type: "HTML",
				controller: oController
			}).then(function (oButton) {
				oLayout.addContent(oButton);
			});

			Fragment.load({
				name: "sap.training.view.XmlFrag1",
				type: "XML",
				controller: oController
			}).then(function (oButton) {
				oLayout.addContent(oButton);
			});

			Fragment.load({
				name: "sap.training.view.JsFrag",
				type: "JS",
				controller: oController
			}).then(function (oButton) {
				oLayout.addContent(oButton);
			});

		});

		return oLayout;
	}
});