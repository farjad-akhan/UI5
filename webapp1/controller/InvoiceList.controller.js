sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("UI5_new.controller.InvoiceList", {

		onInit: function () {
			// new sap.ui.model.json.JSONModel();
			var oViewModel = new JSONModel();
			oViewModel.setProperty("/Invoices",[{
				currency: "EUR",
				ProductName:"ABC",
				Quantity:"2",
				ExtendedPrice:"2353",
				Status:"Open"
			},{
				currency: "INR",
				ProductName:"DEF",
				Quantity:"68",
				ExtendedPrice:"453",
				Status:"Inprogrss"
			},
			{
				currency: "INR",
				ProductName:"DEF",
				Quantity:"618",
				ExtendedPrice:"453",
				Status:"Inprogrss"
			}])
			// sap.ui.getCore().setModel(oViewModel, "Main");
			this.getView().setModel(oViewModel, "Main");
		},

		onFilterInvoices: function (oEvent) {
			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},

		onPress: function (oEvent) {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail");
		}
	});

});