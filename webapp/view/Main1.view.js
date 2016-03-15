sap.ui.jsview("sap.training.view.Main1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.Main1
	 */
	getControllerName: function() {
		return "sap.training.controller.Main1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.Main1
	 */
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