<%@ page language="java" import="nds.query.web.*,nds.control.web.*,nds.util.*,nds.schema.*,nds.query.*, java.io.*,java.util.*,nds.control.util.*" pageEncoding="utf-8"%>
<table cellpadding="0" cellspacing="0" width="100%">
<!--tr>
<div class="search">子系统查找</div>
<div id="searchform"> 
	<input type="text" id="pojam" class="pinput" name="pojam"/>
  <input type="submit" value="查找" class="pbutton" name="search"/>
</div></tr-->
<tr><td>
<%
String istree=userWeb.getUserOption("ISTREE","Y");
//System.out.println(istree);
if("N".equalsIgnoreCase(istree)){
//System.out.println("ASDFASDFASDF");
%>
<div><div id="rpt-list-outlook">
<%
}else{
%>
	<div class="smalltab">
		 <ul class="gamma-tab">
			<li class="current"><%= PortletUtils.getMessage(pageContext, "feature-list",null)%>
			</li>
		</ul>
		<div id="rpt-list-content" >
				<!--%//((Configurations)WebUtils.getServletContextManager().getActor( nds.util.WebKeys.CONFIGURATIONS)).getProperty("chatback","")%-->
<%
}
%>
			<div id="tree-list"></div>
				</div>
		</div>
	</div>
</td></tr>
<tr>
<td>
	<div id="dotred-ul">
<liferay-ui:tabs names="mynotice">
	<%
	request.setAttribute("nds.portal.listconfig", "mynotice");
	%>
	<jsp:include page="/html/nds/portal/portletlist/view.jsp" flush="true"/>

</liferay-ui:tabs>	
</div>
</td>
</tr>
</table>