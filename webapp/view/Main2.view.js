sap.ui.jsview("sap.training.view.Main2", {

	getControllerName: function() {
		return "sap.training.controller.Main2";
	},

	createContent: function(oController) {

		var oMyController = {
			onButtonPress: function(oEvent) {
				alert("Handler in Custom Controller Object invoked");
			}
		};

		var oHtmlFragButton = sap.ui.htmlfragment("sap.training.view.HtmlFrag", oMyController);
		var oXmlFragButton = sap.ui.xmlfragment("sap.training.view.XmlFrag1", oMyController);
		var oJsFragButton = sap.ui.jsfragment("sap.training.view.JsFrag", oMyController);

		var oLayout = new sap.ui.layout.HorizontalLayout({
			content: [oHtmlFragButton, oXmlFragButton, oJsFragButton]
		});

		return oLayout;
	}
});