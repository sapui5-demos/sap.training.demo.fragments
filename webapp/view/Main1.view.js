sap.ui.jsview("sap.training.view.Main1", {

	getControllerName: function() {
		return "sap.training.controller.Main1";
	},

	createContent: function(oController) {

		var oHtmlFragButton = sap.ui.htmlfragment("sap.training.view.HtmlFrag", oController);
		var oXmlFragButton = sap.ui.xmlfragment("sap.training.view.XmlFrag1", oController);
		var oJsFragButton = sap.ui.jsfragment("sap.training.view.JsFrag", oController);

		var oLayout = new sap.ui.layout.HorizontalLayout({
			content: [oHtmlFragButton, oXmlFragButton, oJsFragButton]
		});

		return oLayout;
	}
});