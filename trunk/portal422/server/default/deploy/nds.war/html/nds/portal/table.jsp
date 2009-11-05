<%@page errorPage="/html/nds/error.jsp"%>
<%@ taglib uri='/WEB-INF/tld/filecache.tld' prefix='filecache' %>
<%@ include file="/html/nds/common/init.jsp" %>
<%@ page import="org.json.*"%>
<%!
/**
 Allow switch view in list scroll page
*/
private static boolean listEditable=Tools.getYesNo(((Configurations)WebUtils.getServletContextManager().getActor( nds.util.WebKeys.CONFIGURATIONS)).getProperty("list.editable","Y"),true);
%>

<%
 /**
	 List table, how query page and list box, param
	 	1. table -- table id or name
 */
String tn= request.getParameter("table");
//System.out.println(tn);
Table table;
int tableId=nds.util.Tools.getInt(tn,-1);
 //int tableId=10010;
if(tableId==-1){
	table=TableManager.getInstance().getTable(tn);
	tableId= table.getId();
}else{
	table= TableManager.getInstance().getTable(tableId);
}
//TableManager manager=TableManager.getInstance();
PairTable fixedColumns=new PairTable();
/**------check permission---**/
int perm= WebUtils.getDirectoryPermission(table.getSecurityDirectory(), request);
boolean isWriteEnabled= ( ((perm & 3 )==3));
boolean isSubmitEnabled= ( ((perm & 5 )==5));
boolean canExport= ( ((perm & 17 )==17));
boolean canDelete= table.isActionEnabled(Table.DELETE) && isWriteEnabled ;
boolean canAdd= table.isActionEnabled(Table.ADD) && isWriteEnabled ;
boolean canModify=listEditable&& table.isActionEnabled(Table.MODIFY) && isWriteEnabled ;
boolean canSubmit= table.isActionEnabled(Table.SUBMIT) && isSubmitEnabled ;

boolean hasCommand=  canDelete || canSubmit ; 
WebUtils.checkDirectoryReadPermission(table.getSecurityDirectory(), request);// -- This is commented by Tony
boolean isStatusValid= table.isActionEnabled(Table.SUBMIT);
boolean isModify=canModify;
/**------check permission end---**/

/** -- add support for webaction of listbutton --**/
  Connection actionEnvConnection=null;
  List<WebAction> waListButtons=new ArrayList<WebAction>(), waListMenuItems=new ArrayList<WebAction>();
  try{
  	actionEnvConnection=QueryEngine.getInstance().getConnection();
	HashMap actionEnv=new HashMap();
	actionEnv.put("httpservletrequest", request);
	actionEnv.put("userweb", userWeb);
	actionEnv.put("connection", actionEnvConnection);
		
  	List<WebAction> was=table.getWebActions(WebAction.DisplayTypeEnum.ListButton);
  	for(int wasi=0;wasi<was.size();wasi++){
  		WebAction wa=was.get(wasi);
  		if(wa.canDisplay(actionEnv)){
  			waListButtons.add(wa);
  		}
  	}
  	was=table.getWebActions(WebAction.DisplayTypeEnum.ListMenuItem);
  	for(int wasi=0;wasi<was.size();wasi++){
  		WebAction wa=was.get(wasi);
  		if(wa.canDisplay(actionEnv)){
  			waListMenuItems.add(wa);
  		}
  	}
  }finally{
  	if(actionEnvConnection!=null)try{actionEnvConnection.close();}catch(Throwable ace){}
  }
%>
<div id="page-table-query">
	<div id="page-table-query-tab">
		<ul><li><a href="#tab1"><span><%=PortletUtils.getMessage(pageContext, "query-setting",null)%>&nbsp;-&nbsp;<%=table.getDescription(locale)%></span></a></li></ul>
		<div id="tab1">
			<div id="query-content">
			<%@ include file="table_query.jsp" %>
			</div>
		</div>
  </div>
</div>  
  	<div id="page-nav-commands">
	</div>
  <div class="table-buttons">       	        	
	 &nbsp; <input type="button" class="cbutton" value="<%=PortletUtils.getMessage(pageContext, "object.search",null)%>" onclick="javascript:pc.queryList()"/>
<%
// these are list buttons of webaction
for(int wasi=0;wasi<waListButtons.size();wasi++){
	out.println(waListButtons.get(wasi).toHTML(locale,null));
}
%>
		<input type="button" class="cbutton" value="<%=PortletUtils.getMessage(pageContext, "help",null)%>" onclick="javascript:popup_window('/html/nds/help/index.jsp?table=<%=tableId%>')"/>
	</div>
	<div id="page-table-content">
	<%@ include file="table_list.js.jsp" %>
	<%@ include file="table_list.jsp" %>
  </div>
<script type="text/javascript">
jQuery('#page-table-query-tab ul').tabs();
<%
// these are list menuitems of webaction
StringBuffer waListMenuItemStr=new StringBuffer();
for(int wasi=0;wasi<waListMenuItems.size();wasi++){
	waListMenuItemStr.append(waListMenuItems.get(wasi).toHTML(locale,null));
}
if(waListMenuItems.size()>0){
System.out.println(StringUtils.replace(waListMenuItemStr.toString(), "\"", "\\\""));
%>

pc.addListMenuItems("<%=StringUtils.replace(waListMenuItemStr.toString(), "\"", "\\\"")%>");
<%}
%>
</script>  




