<table border="0" cellpadding="0" cellspacing="2" id="q_result_table">
<tr>
<td><span id="qcsa"><input type="checkbox" id="q_chk_select_all" value="1" onclick="oq.selectAll()"> <%= PortletUtils.getMessage(pageContext, "select-all",null)%></span></td>
<td id="q_begin_btn" onaction="oq.scrollPage('q_begin_btn')"><img src="<%=NDS_PATH%>/images/begin.gif" width="16" height="16"></td>
<td id="q_prev_btn" onaction="oq.scrollPage('q_prev_btn')"><img src="<%=NDS_PATH%>/images/back.gif" width="16" height="16"></td>
<td id="q_next_btn" onaction="oq.scrollPage('q_next_btn')"><img src="<%=NDS_PATH%>/images/next.gif" width="16" height="16"></td>
<td id="q_end_btn" onaction="oq.scrollPage('q_end_btn')"><img src="<%=NDS_PATH%>/images/end.gif" width="16" height="16"></td>
<td>
<%= PortletUtils.getMessage(pageContext, "show-page-number",null)%>
<select size="1" id="q_range_select" onChange="oq.scrollPage('q_range_select')">
<%
int[] selectRanges= QueryUtils.SELECT_RANGES;
for(int i =0;i<selectRanges.length;i++){
	int t1=selectRanges[i];
%>
  <option value="<%=t1%>" <%=(t1==QueryUtils.DEFAULT_RANGE)?"selected":"" %>><%=t1%></option>
<%
}
%>
</select><%= PortletUtils.getMessage(pageContext, "show-page-number-end",null)%>,
<a href='javascript:oq.refreshGrid()'>[<span class="link_cn"><%= PortletUtils.getMessage(pageContext, "refresh",null)%></span>]</a>
<span id="q_txtRange"></span>
</td></tr></table>
<script>
	createButton(document.getElementById("q_begin_btn"));
	createButton(document.getElementById("q_prev_btn"));
	createButton(document.getElementById("q_next_btn"));
	createButton(document.getElementById("q_end_btn"));
</script>	
       
