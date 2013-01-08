<%@ page language="java" import="nds.query.QueryEngine,java.util.regex.Matcher,java.util.regex.Pattern,org.json.JSONObject,java.util.List"  pageEncoding="utf-8"%>
<%
String cardno=request.getParameter("cn");
String storeid=request.getParameter("storeid");
String isvou=request.getParameter("isvou");
try{
if(null==cardno||cardno.trim().equals("")){
	out.print("错误：无卡号信息！");
	return;
}
if(null!=isvou&&!"".equals(isvou)){
	String sql="select c.is_list_limit,c.is_accpay_afterdis,nvl(c.ACCOUNT_LIMIT_DUE,0),nvl(c.vou_dis,0),nvl(c.amt_acount,0),c.VOUCHERS_NO,nvl(c.QTY_LIMIT,0)	"+
						"from C_VOUCHERS c where (exists(select 1 from C_VOUCHERS_STORE S where S.C_VOUCHERS_ID=C.ID AND S.C_STORE_ID="+storeid+") OR C.IS_ALLSTORE='Y')"+
						"AND upper(C.VOUCHERS_NO)=upper('"+cardno+"') "+ 
						"and c.is_valid='Y' and c.isactive='Y' and to_number(to_char(sysdate,'yyyyMMdd'))<=c.valid_date";
	List rl=QueryEngine.getInstance().doQueryList(sql);
	JSONObject ro=new JSONObject();
	if(null!=rl&&rl.size()>0){
		ro.put("code",200);
		List l=(List)rl.get(0);
		JSONObject mes=new JSONObject();
		mes.put("isListLimit",l.get(0));
		mes.put("isAccayAfterDis",l.get(1));
		mes.put("accountLimit",l.get(2));
		mes.put("vouDis",l.get(3));
		mes.put("amtAcount",l.get(4));
		mes.put("vouNo",l.get(5));
		mes.put("qtyLimit",l.get(6));
		ro.put("meg",mes);
	}else{
		ro.put("code",500);
		ro.put("meg","券号不存在，或不符合条件!");
	}
	out.print(ro.toString());
	return;
}
String r="cardinfo:";

String comp=String.valueOf(QueryEngine.getInstance().doQueryOne("select value from ad_param where name='webpos.ticketcustomer'"));
String columnName=String.valueOf(QueryEngine.getInstance().doQueryOne("SELECT NAME FROM ad_column WHERE NAME ='C_CONSUMECARD.CARDNO1'"));
String condition;
if(!"C_CONSUMECARD.CARDNO1".equals(columnName)){
	condition=" upper(t.CARDNO)=upper('"+cardno.trim()+"')";
}else{
	condition="(upper(t.CARDNO)=upper('"+cardno.trim()+"') or upper(t.CARDNO1)=upper('"+cardno.trim()+"')) ";
}


Object remain;
	if("true".equals(comp)){
	 	remain=QueryEngine.getInstance().doQueryOne("select t.REMAIN from c_consumecard t,c_store d,C_CSCARD_SALEITEM e, C_CSCARD_SALE f where "+condition+" and t.STATUS=2 and t.VERIFYED='N'"+
																								"AND t.id=e.c_consumecard_id AND e.c_cscard_sale_id=f.id AND f.c_store_id=d.id AND d.c_customer_id =(SELECT c_customer_id FROM c_store  WHERE ID="+storeid+")");
	}else{
		remain=QueryEngine.getInstance().doQueryOne("select t.REMAIN from c_consumecard t where "+condition+" and t.STATUS=2 and t.VERIFYED='N'");
	}
	if(null!=remain){
		//String rm=String.valueOf(remain);
		r+=remain;
		out.print(r);
		return;
	}else{
		out.print("错误：卡号 "+cardno+" 无效！");
	}
}catch(Throwable userWebException){
	Pattern p=Pattern.compile("[\u4e00-\u9fa5]+");
	Matcher m=p.matcher(userWebException.getMessage());
	String info="";
	if(m.find())
	info=m.group();
	if("".equals(info)){
		info="查询"+cardno+" 出现异常";
	}
	out.print(info);
}

%>





