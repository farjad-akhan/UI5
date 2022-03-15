sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "UI5_new.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
});
