sap.ui.jsview("sap.training.view.Main2", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sap.training.view.Main2
	 */
	getControllerName: function() {
		return "sap.training.controller.Main2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf sap.training.view.Main2
	 */
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