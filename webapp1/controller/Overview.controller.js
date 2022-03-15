sap.ui.define([
    "sap/ui/core/mvc/Controller",
],function(Controller){
    "use strict";

    return Controller.extend("UI5_new.controller.Overview",{
        goHome: function(oEvent){
            var oRouter=this.getOwnerComponent().getRouter();
            oRouter.navTo("overview");
     }
    });
})