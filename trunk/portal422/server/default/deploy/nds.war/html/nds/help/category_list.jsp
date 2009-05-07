<%@ include file="/html/nds/help/init.jsp" %>
<%
  /**
  * @param table - table name
  */
  TableManager manager=TableManager.getInstance();
  String tableName= request.getParameter("table");
  Table table= manager.getTable(tableName);
  if(table ==null){
  	out.print("table not found.");
  	return;
  }
%>
<span class='tablehead'><%= PortletUtils.getMessage(pageContext, "same-category-items",null)%></span><p>
<%  
	CreatePortal cp=new CreatePortal();
	ArrayList rts= cp.getRelateTables(table.getId());
	for( int i=0;i< rts.size();i++){
		Table tb= (Table) rts.get(i);
%>
<a href="<%=WIKI_HELP_PATH%>/Wiki.jsp?page=Help_Table_<%=tb.getName()%>"><%=tb.getDescription(locale)%></a>&nbsp;&nbsp;
<%  	
  }
%>

