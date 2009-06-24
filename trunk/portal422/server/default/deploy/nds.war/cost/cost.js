var cost;
var CostControl = Class.create();
// define constructor
CostControl.prototype = {
	initialize: function() {
		dwr.util.useLoadingMessage(gMessageHolder.LOADING)
		dwr.engine.setErrorHandler(function(message, ex) {
			if (message == null || message == "") {
				while(ex!=null && ex.cause!=null) ex=ex.cause;
				if(ex!=null)message=ex.javaClassName;
				alert(gMessageHolder.INTERNAL_ERROR+":"+ message);
			}
	  		else if (message.indexOf("0x80040111") != -1) dwr.engine._debug(message);
	  		else alert(message);
		});		
		application.addEventListener( "SELLRETAIL", this._onSellRetail, this);
		application.addEventListener( "COST_QUERY", this._onCost_query, this);
	},
	createretail: function(){
		if(confirm(gMessageHolder.CONFORM_CREATE_SELL)){
			var evt={};
			evt.command="DBJSONXML";
			evt.callbackEvent="SELLRETAIL";
			var param={"type":"a"};
			evt.param=Object.toJSON(param);
			evt.table="b_salepriceconf";
			evt.action="CREATRETAIL";
			evt.permission="r";		
			this._executeCommandEvent(evt);
		}			
	},
	updateretail: function(){
		if(confirm(gMessageHolder.CONFORM_UPDATE_SELL)){
			var evt={};
			evt.command="DBJSONXML";
			evt.callbackEvent="SELLRETAIL";
			var param={"type":"m"};
			evt.param=Object.toJSON(param);
			evt.table="b_salepriceconf";
			evt.action="UPRETAIL";
			evt.permission="r";		
			this._executeCommandEvent(evt);	
		}
	},
	_onSellRetail: function(e){
		var data=e.getUserData();
	//	if(data.code==0){
	//	var ret=data.data.jsonResult.evalJSON();
		alert(data.message);
	},
	_getInputs:function(form){
	    form = $(form);
	    var inputs = $A(form.getElementsByTagName('input'));
		inputs=inputs.concat($A(form.getElementsByTagName('textarea')));
		inputs=inputs.concat($A(form.getElementsByTagName('select')));
	    return inputs.map(Element.extend);
	},
	saveAll : function () {
		if(optionsave()==false) return;
		var evt={};
		evt.command="SaveOption";
		evt.params=$H(Form.serializeElements( this._getInputs("form1"),true));	
	    evt.callbackEvent="SaveOption";
		this._executeCommandEvent(evt);	
			
	 },
	 price_query:function (){
	 	var evt={};
		evt.command="DBJSONXML";
		evt.callbackEvent="COST_QUERY";
		var dealer_query_sql=$("dealer_query_sql").value;
		var product_query_sql=$("product_query_sql").value;
		if(dealer_query_sql==""){
			alert(gMessageHolder.RETAILER_NOT_EMPTY);	
		}else if(product_query_sql==""){
			alert(gMessageHolder.M_PRODUCT_NOT_EMPTY);
		}else{
			var param={"c_costum":dealer_query_sql,"m_product":product_query_sql};
			evt.param=Object.toJSON(param);
			evt.table="b_salepriceite";
			evt.action="pricelist";
			evt.permission="r";		
			this._executeCommandEvent(evt);	
		}
	},
	_onCost_query:function (e) {
		var data=e.getUserData(); 
    	var ret=data.data.jsonResult.evalJSON();
    	var costdata=ret.data;
    	if(costdata!=null&&this.checkvalue(costdata.length)!=""){    		
	    	var mid=1;
	    	for(var i=0;i<costdata.length;i++){
		    	 dwr.util.cloneNode("price_query_row",{idPrefix:mid+'_'});
		    	 $(mid+"_retailer_query").innerHTML=this.checkvalue(costdata[i].c_costum);
		    	 $(mid+"_productname_query").innerHTML=this.checkvalue(costdata[i].m_product);
		    	 $(mid+"_productvalue_query").innerHTML=this.checkvalue(costdata[i].m_product_value);
		    	 $(mid+"_price_query").innerHTML=this.checkvalue(costdata[i].price);
		    	 $(mid+"_pricelist_query").innerHTML=this.checkvaluelist(costdata[i].pricelist);
		    	 $(mid+"_price_query_row").style.display="";   
		    	  mid++;
	    	}
    	}else if(this.checkvalue(costdata.length)=="") {
    			dwr.util.cloneNode("price_query_row",{idPrefix:mid+'_'});
		    	$(mid+"_retailer_query").innerHTML=this.checkvalue(costdata.c_costum);
		    	$(mid+"_productname_query").innerHTML=this.checkvalue(costdata.m_product);
		    	$(mid+"_productvalue_query").innerHTML=this.checkvalue(costdata.m_product_value);
		    	$(mid+"_price_query").innerHTML=this.checkvalue(costdata.price);
		    	$(mid+"_pricelist_query").innerHTML=this.checkvaluelist(costdata.pricelist);
		    	$(mid+"_price_query_row").style.display="";   
    	}else{
    		alert(gMessageHolder.NO_DATA);
    	}
	},
	_onSaveOption : function (e) {
     var r=e.getUserData(); 
		
		if(r.code!=0){
			this._showMessage(r.message,true);
		}else{
			this._closeWindowOrShowMessage(r.message,true);

		}   
	},	
	_executeCommandEvent :function (evt) {
		Controller.handle( Object.toJSON(evt), function(r){
				//try{

					var result= r.evalJSON();
					var evt=new BiEvent(result.callbackEvent);
					evt.setUserData(result);
					application.dispatchEvent(evt);
					}
	  );
	},
	_showMessage:function(msg, bError){
			if(msg!=null&&bError){
				alert("msg");
		}
	},
  checkvalue:function(value){
		if(value==undefined){
			return "";
		}else{
			return value;
		}
	},
	checkvaluelist:function(value){
		if(value==undefined){
			return 0;
		}else{
			return value;
		}
	},
	tryClose:function(){
		// mandatory options should have data on it
		//if(optionsave()==false) return;
		this._closeWindowOrShowMessage(null,false);
	},
	 _closeWindowOrShowMessage:function(msg, bReload){
		var isclosed=false;
    	var w = window.opener;
    	if(w==undefined)w= window.parent;
    	if (w ){
			var iframe=w.document.getElementById("popup-iframe-0");
			if(iframe){
	    		w.setTimeout("Alerts.killAlert(document.getElementById('popup-iframe-0'))",1);
				//reload window
				if(bReload)w.location.reload();
	    		isclosed=true;
    		}
    	}
    	if(!isclosed && msg!=null){
				alert(msg);
    	}
    }
};

CostControl.main = function () {
	cost=new CostControl();
};

jQuery(document).ready(CostControl.main);

function showObject(url, theWidth, theHeight,option){
	if( theWidth==undefined || theWidth==null) theWidth=956;
    if( theHeight==undefined|| theHeight==null) theHeight=570;
	var options={width:theWidth,height:theHeight,title:gMessageHolder.IFRAME_TITLE, modal:true,centerMode:"x",noCenter:true,maxButton:true};
    if(option!=undefined) 
    	Object.extend(options, option);
	Alerts.popupIframe(url,options);
	Alerts.resizeIframe(options);
	Alerts.center();
}


