 jQuery(document).ready(function(){
		var range = 50;             //距下边界长度/单位px  
		var pageNum = 1;
		var pageSize = 8;
		var total = jQuery("#total").val();
		var totalheight = 0;
		var state = 0;  
		var _srollPos = 0;
		jQuery(window).scroll(function(){
            if( Math.ceil(total/pageSize)<=pageNum ){
                return false;
            }
            var srollPos = jQuery(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)  
            if(srollPos<_srollPos){
                return;
            }else{
            	_srollPos = srollPos;
            }
			var replyMessage = jQuery(".replyMessage");
			var lastCh = replyMessage[replyMessage.length - 1];
			var lastid = jQuery(lastCh).attr("data-id");//最后一条记录
			var issuerId = jQuery("#issue").val();//发布人
            totalheight = parseFloat(jQuery(window).height()) + parseFloat(srollPos);  
            if(!state && ((jQuery(document).height()-range) <= totalheight) ) {
          	    loading(true);
            	state = 1;				
				jQuery.ajax({
					url: '/html/nds/oto/sendmessage/loadMessage.jsp?issueId='+issuerId+'&lastId='+lastid,
					type: 'post',
					success: function (data) {
					loading(false);
					//if(data.trim().length>0 && (data.trim()!="")){
					if(data.trim() != "nodata"){
						loading(false);
						jQuery("li:last").after(data);
						pageNum++;
						state=0;
						// bindEvent();
					}else{
						loading(false);
						state = 0;
						// alert("没有更多了...",true,1500);
					}					
					}					
				});
            }  
        }); 
});

function loading(type){
	if(type){
		window.loader = new iDialog();
		window.loader.open({
			classList: "loading",
			title:"",
			close:"",
			content:''
		});
	}else{		
		//setTimeout(function(){
			window.loader&&window.loader.die();
			delete window.loader;
		//}, 1000);
	}
}

function showTuwen(groupid){
		//jQuery("#dialog").attr("src","/html/nds/oto/js/artDialog4/jquery.artDialog.js?skin=simple");
		var w = window.opener;
		if(w==undefined || w == null)w= window.parent;
		if (w){//动态改变css
			w.jQuery("#dialog").attr("src","/html/nds/oto/js/artDialog4/jquery.artDialog.js?skin=simple");
			jQuery(w.jQuery("link")[0]).attr("href","http://172.18.34.81/html/nds/oto/js/artDialog4/skins/simple.css?4.1.6");
			jQuery(window.parent.parent.jQuery("link")[2]).attr("href","http://172.18.34.81/html/nds/oto/js/artDialog4/skins/simple.css?4.1.6");
		}		
		var url = "/html/nds/oto/sendmessage/getTuwenData.jsp?groupid="+groupid;
		var options={
			width:"auto",
			height:"auto",
			resize:false,
			drag:true,
			lock:true,
			esc:true,
			padding:0,
			ispop:false,
			title:"",
			close:function(){
				w.jQuery("#dialog").attr("src","/html/nds/oto/js/artDialog4/jquery.artDialog.js?skin=default");
				jQuery(w.jQuery("link")[0]).attr("href","http://172.18.34.81/html/nds/oto/js/artDialog4/skins/default.css?4.1.6");
				jQuery(window.parent.parent.jQuery("link")[2]).attr("href","http://172.18.34.81/html/nds/oto/js/artDialog4/skins/default.css?4.1.6");
			}
		};		 
		art.dialog.open(url,options);
}