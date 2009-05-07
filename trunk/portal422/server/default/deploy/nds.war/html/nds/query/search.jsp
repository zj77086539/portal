<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page errorPage="/html/nds/error.jsp"%>
<%@ include file="/html/nds/common/init.jsp" %>
<%@ page import="org.json.*" %>
<%
 /**
 * Do quick search in popup window. When table.isDropdown==true, will so data directly
 * param 
 *      table* - table id to be queried
 *      return_type*  - "m" for mutiple, and "s" for single, "f" for Filter
 			"f" - will create nds.schema.Filter object for that accepter.
 * 		accepter_id*  - element id of document to recieve the result
 *      qdata		- the default condition for AK column in search form, can be omitted. 
 					By default, user can input qdata in textbox, then presss query button to open search form, and in search form (this page),
 					qdata will appear in ak input position, user press find button and qdata will be constructed in query sql consequently.
 		fixedcolumns - columns that willl be fixed during query
 		column      - the column id that currently working on, if column has specifile filters defined, that filter will set in search codition
 		wfc_<columnid> - when column isFilteredByWildcard, values of those reference columns can be fetched here
  		mustbeactive - default to "Y", if "N", will include those records that has "isactive" set to "N"
*/
String returnType= request.getParameter("return_type");
String accepter_id= request.getParameter("accepter_id");
String qdata= request.getParameter("qdata");
String security= request.getParameter("security");
if(Validator.isNull(qdata))qdata="";
boolean mustBeActive=Tools.getYesNo(request.getParameter("mustbeactive"),true);
Column searchOnColumn= TableManager.getInstance().getColumn(Tools.getInt(request.getParameter("column"),-1));

Table table= TableManager.getInstance().getTable(Tools.getInt(request.getParameter("table"),-1));
if(table==null) table=TableManager.getInstance().getTable(request.getParameter("table"));
if(table==null) throw new NDSException("table not found");
int tableId= table.getId();
QueryRequestImpl qRequest=QueryEngine.getInstance().createRequest(userWeb.getSession());
qRequest.setMainTable(table.getId());
// show all columns 
qRequest.addAllShowableColumnsToSelection(Column.QUERY_LIST,false);
qRequest.setResultHandler(NDS_PATH+"/query/ajax_result.jsp");
Expression sexpr= userWeb.getSecurityFilter(table.getName(), 1);// read permission

PairTable fixedColumns=PairTable.parse(request.getParameter("fixedcolumns"), null);    // columnlink=value
Expression fixedExpr=Expression.parsePairTable(fixedColumns);// nerver null, maybe empty
if(mustBeActive && table.isAcitveFilterEnabled()) {
fixedExpr=new Expression(new ColumnLink(new int[]{table.getColumn("isactive").getId()}),"=Y",null).combine(fixedExpr,Expression.SQL_AND,null);
}

int[] columnMasks= new int[]{Column.MASK_QUERY_LIST};
int listViewPermissionType= 1;
JSONObject queryObj=new JSONObject();
queryObj.put("table", table.getName());
queryObj.put("table_id", table.getId());
queryObj.put("table_desc", table.getDescription(locale));
queryObj.put("column_masks", JSONUtils.toJSONArrayPrimitive(columnMasks));
queryObj.put("dir_perm",listViewPermissionType);
queryObj.put("init_query",true);
queryObj.put("start",0);
queryObj.put("must_be_active",mustBeActive);
queryObj.put("range",QueryUtils.DEFAULT_RANGE);
queryObj.put("resulthandler","/html/nds/query/search_result.jsp");
if(searchOnColumn!=null)queryObj.put("column", searchOnColumn.getId());
String singleObjectPageURL=(
	nds.util.Validator.isNotNull(table.getRowURL())? nds.util.WebKeys.NDS_URI +  table.getRowURL() +"?":
	nds.util.WebKeys.NDS_URI +"/object/object.jsp?table="+table.getId()
	)
	+"&"+WebUtils.getMainTableLink(request)+"&fixedcolumns="+ java.net.URLEncoder.encode(fixedColumns.toURLQueryString(""))+"&id=";

//only for single value return type, we will support first 5 columns in selection row returned to acceptor form
//			典型用例: 在运输单创建时，搜索地址后，返回选中地址信息的：联系人，电话，地址 等信息给界面，并设置到相应输入框中作为默认值
//			partialresult 在  noresult=true 时被识别
if("s".equals(returnType)){
	queryObj.put("noresult", false);
	queryObj.put("partialresult", true);
}

int tab_count= 1;
boolean firstDateColumnFound=false;
ArrayList qColumns=table.getIndexedColumns();
TableQueryModel model= new TableQueryModel(tableId,qColumns,false,false,locale);
int tabIdx=0;
int columnsPerRow=3;// 2 field per row
int widthPerColumn= (int)(100/(columnsPerRow*2));
%>
<%
if(!table.isDropdown()&&!returnType.equals("s")&&security==null){
%>
<table>
	<tr>
		<td width="1%" valign="top">
			<div>
			<table>
<tr><td>
	<div class="smalltab">
		 <ul class="gamma-tab">
			<li class="current"><%= PortletUtils.getMessage(pageContext, "multi-result",null)%></li>
		</ul>
		<div id="multi-content">		
			<div id="multi-list">
					<%@ include file="/html/nds/query/multiple_result.jsp" %>
				</div>
			</div>
			<div id="cont-multi-button">
				<input id="btn-remove-rows" type="button" class="cbutton" onclick="javascript:oq.remove_choosed_rows()" value="<%=PortletUtils.getMessage(pageContext, "remove-choosed-content",null)%>">&nbsp;
				<input id="btn-remove-all" type="button" class="cbutton" onclick="javascript:oq.remove_all()" value="<%=PortletUtils.getMessage(pageContext, "remove-all",null)%>">
			</div>
	</div>
</td></tr>
</table>
			</div>
		</td>
		<td width="99%" valign="top">
	<%}%>		
<div id="query_content" align="right" <%=table.isDropdown()?"style='display:none'":""%>>
<%
	if(searchOnColumn!=null && searchOnColumn.isFilteredByWildcard()){
		Expression expr= WebUtils.parseWildcardFilter(searchOnColumn,request,userWeb);
%>
<input type='hidden' id="q_form_param_expr" name='param_expr' value='<%=expr.toHTMLInputElement()%>'>	
<%		
	}
%>	
<form id="q_form" name="q_form" method="post" action="/servlets/QueryInputHandler" onSubmit="oq.search();return false;" >
    <input type='hidden' name='tab_count' value='<%=tab_count%>'>
	<div id="query-search-content">
		<div id="query-search-tab">
			<ul><li><a href="#qtab1"><span><%=PortletUtils.getMessage(pageContext, "query-setting",null)%></span></a></li></ul>
			<div id="qtab1">
				<div id="q_search_condition">
				<%@ include file="inc_search_condition.jsp" %>
				</div>
			</div>      
		</div><%//end id="query-search-tab"%>
	</div>
</form>
<%
if(!table.isDropdown()&&!returnType.equals("s")&&security==null){
%>
<div id="multi-buttons">
<div id="qbtns-multi">
	<input id="btn-search" type="button" class="cbutton" onclick="javascript:oq.search()" value="<%=PortletUtils.getMessage(pageContext, "show-result",null)%>">&nbsp;
	<input id="btn-choose-set" type="button" class="cbutton" onclick="javascript:oq.return_set()" value="<%=PortletUtils.getMessage(pageContext, "add-all",null)%>">
	<input type="checkbox" name="condition" id="condition" value="" onclick="javascript:oq.reverse_condition()"><%=PortletUtils.getMessage(pageContext, "reverse",null)%>
</div>
<div id="qbtns">
	<span id="q_progress" style="display:none"><img src="/html/nds/images/progress.gif"></span>
	<input id="btn-return-result" type="button" class="cbutton" onclick="javascript:oq.return_result()" value="<%=PortletUtils.getMessage(pageContext, "return-multi-result",null)%>">
	<input id="btn-cancel" type="button" class="cbutton" onclick="javascript:oq.close()" value="<%=PortletUtils.getMessage(pageContext, "command.cancel",null)%>">
</div>
</div>
<%}else{%>
<div id="qbtns">
	<span id="q_progress" style="display:none"><img src="/html/nds/images/progress.gif"></span>
	<input id="btn-search" type="button" class="cbutton" onclick="javascript:oq.search()" value="<%=PortletUtils.getMessage(pageContext, "show-result",null)%>">&nbsp;
	<input id="btn-cancel" type="button" class="cbutton" onclick="javascript:oq.close()" value="<%=PortletUtils.getMessage(pageContext, "command.cancel",null)%>">
</div>
<%}%>
</div>
<%
if(!table.isDropdown()&&!returnType.equals("s")&&security==null){
%>
<div id="mulit-info" style="margin-top:30px">
</div>
<%}%>
<div id="query-data" align="right" style="display:none;">
		<div id="query-result">
			<%@ include file="inc_search_list.jsp" %>
		</div>
		<div id="q_result-scroll">
			<table border="0" width="100%"><tr><td>
		 		<%@ include file="/html/nds/query/inc_search_scroll.jsp" %>
			</td><td>
				<%
					if(!table.isDropdown()&&!returnType.equals("s")&&security==null){
				%>
			<div id="qbtns2" style="display:none;">
				<%
				}else{
				%>
				<div id="qbtns2">
				<%}%>
				<input id="btn-value" type="button" class="cbutton" onclick="javascript:oq.returnValue()" value="<%=PortletUtils.getMessage(pageContext, "return-value",null)%>">&nbsp;
				<input id="btn-sql" type="button" class="cbutton" onclick="javascript:oq.returnSQL()" value="<%=PortletUtils.getMessage(pageContext, "return-sql",null)%>">
			</div></td></tr>
			<tr><td>
		 		<font color='red'>*</font><%= PortletUtils.getMessage(pageContext, "current-filter",null)%>:
		 		 <span class=sqldesc id="q_filter_setting">
		     </span>
			</td><td>&nbsp;</td></tr>
			</table>
		</div>
</div>
<div id="q_eval" style="display:none;"></div>
<%
		if(!table.isDropdown()&&!returnType.equals("s")&&security==null){
%>
</td>
</tr>
</table>
<%}%>
<script>
	jQuery('#query-search-tab ul').tabs();
	oq.setQueryObject(<%=queryObj.toString()%>, "<%=singleObjectPageURL%>", "<%=returnType%>");
	<%
		if(!table.isDropdown()&&!returnType.equals("s")&&security==null){
	%>
		document.getElementById("mulit-info").innerHTML ="<%= PortletUtils.getMessage(pageContext, "mulit-info",null)%>";
	<%}%>
<%
	if(table.isDropdown() || (table.getRowCount()<100 && table.getRowCount()>0) ){
%>	
	oq.search(); 
<%}
%> 
</script>
