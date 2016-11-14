sap.ui.jsfragment("sap.training.view.JsFrag", {

	createContent: function(oController) {

		var oButton = new sap.m.Button({
			text: "Button on JavaScript Fragment",
			press: oController.onButtonPress
		});

		return oButton;
	}
});