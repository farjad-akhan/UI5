sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
 ], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("UI5_new.Component", {
       metadata : {
             interfaces: ["sap.ui.core.IAsyncContentCreation"],
             manifest: "json"
       },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          // set data model
         //  var oData = {
         //     recipient : {
         //        name : "World"
         //     }
         //  };
         //  var oModel = new JSONModel(oData);
         //  sap.ui.getCore().setModel(oModel, "Main");
          this.getRouter().initialize();
        //   var oResourceModel = new sap.ui.model.resource.ResourceModel({
        //     bundleName: "Seam.i18n.i18n",async:true
        // });
        // oResourceModel._oPromise.then(function(){
        //     oComponent.getRouter().initialize();
        // }).catch(function(){
        //     oComponent.getRouter().initialize();
        // })
       }
    });
 });