var Zepto=function(){function _(e){return e==null?String(e):N[C.call(e)]||"object"}function D(e){return _(e)=="function"}function P(e){return e!=null&&e==e.window}function H(e){return e!=null&&e.nodeType==e.DOCUMENT_NODE}function B(e){return _(e)=="object"}function j(e){return B(e)&&!P(e)&&Object.getPrototypeOf(e)==Object.prototype}function F(e){return e instanceof Array}function I(e){return typeof e.length=="number"}function q(e){return o.call(e,function(e){return e!=null})}function R(e){return e.length>0?n.fn.concat.apply([],e):e}function U(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function z(e){return e in f?f[e]:f[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function W(e,t){return typeof t=="number"&&!l[U(e)]?t+"px":t}function X(e){var t,n;return a[e]||(t=u.createElement(e),u.body.appendChild(t),n=getComputedStyle(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),n=="none"&&(n="block"),a[e]=n),a[e]}function V(e){return"children"in e?s.call(e.children):n.map(e.childNodes,function(e){if(e.nodeType==1)return e})}function $(n,r,i){for(t in r)i&&(j(r[t])||F(r[t]))?(j(r[t])&&!j(n[t])&&(n[t]={}),F(r[t])&&!F(n[t])&&(n[t]=[]),$(n[t],r[t],i)):r[t]!==e&&(n[t]=r[t])}function J(e,t){return t==null?n(e):n(e).filter(t)}function K(e,t,n,r){return D(t)?t.call(e,n,r):t}function Q(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function G(t,n){var r=t.className,i=r&&r.baseVal!==e;if(n===e)return i?r.baseVal:r;i?r.baseVal=n:t.className=n}function Y(e){var t;try{return e?e=="true"||(e=="false"?!1:e=="null"?null:!/^0/.test(e)&&!isNaN(t=Number(e))?t:/^[\[\{]/.test(e)?n.parseJSON(e):e):e}catch(r){return e}}function Z(e,t){t(e);for(var n in e.childNodes)Z(e.childNodes[n],t)}var e,t,n,r,i=[],s=i.slice,o=i.filter,u=window.document,a={},f={},l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},c=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,d=/^(?:body|html)$/i,v=/([A-Z])/g,m=["val","css","html","text","data","width","height","offset"],g=["after","prepend","before","append"],y=u.createElement("table"),b=u.createElement("tr"),w={tr:u.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:b,th:b,"*":u.createElement("div")},E=/complete|loaded|interactive/,S=/^\.([\w-]+)$/,x=/^#([\w-]*)$/,T=/^[\w-]*$/,N={},C=N.toString,k={},L,A,O=u.createElement("div"),M={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"};return k.matches=function(e,t){if(!t||!e||e.nodeType!==1)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var r,i=e.parentNode,s=!i;return s&&(i=O).appendChild(e),r=~k.qsa(i,t).indexOf(e),s&&O.removeChild(e),r},L=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},A=function(e){return o.call(e,function(t,n){return e.indexOf(t)==n})},k.fragment=function(t,r,i){var o,a,f;return h.test(t)&&(o=n(u.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(p,"<$1></$2>")),r===e&&(r=c.test(t)&&RegExp.$1),r in w||(r="*"),f=w[r],f.innerHTML=""+t,o=n.each(s.call(f.childNodes),function(){f.removeChild(this)})),j(i)&&(a=n(o),n.each(i,function(e,t){m.indexOf(e)>-1?a[e](t):a.attr(e,t)})),o},k.Z=function(e,t){return e=e||[],e.__proto__=n.fn,e.selector=t||"",e},k.isZ=function(e){return e instanceof k.Z},k.init=function(t,r){var i;if(!t)return k.Z();if(typeof t=="string"){t=t.trim();if(t[0]=="<"&&c.test(t))i=k.fragment(t,RegExp.$1,r),t=null;else{if(r!==e)return n(r).find(t);i=k.qsa(u,t)}}else{if(D(t))return n(u).ready(t);if(k.isZ(t))return t;if(F(t))i=q(t);else if(B(t))i=[t],t=null;else if(c.test(t))i=k.fragment(t.trim(),RegExp.$1,r),t=null;else{if(r!==e)return n(r).find(t);i=k.qsa(u,t)}}return k.Z(i,t)},n=function(e,t){return k.init(e,t)},n.extend=function(e){var t,n=s.call(arguments,1);return typeof e=="boolean"&&(t=e,e=n.shift()),n.forEach(function(n){$(e,n,t)}),e},k.qsa=function(e,t){var n,r=t[0]=="#",i=!r&&t[0]==".",o=r||i?t.slice(1):t,u=T.test(o);return H(e)&&u&&r?(n=e.getElementById(o))?[n]:[]:e.nodeType!==1&&e.nodeType!==9?[]:s.call(u&&!r?i?e.getElementsByClassName(o):e.getElementsByTagName(t):e.querySelectorAll(t))},n.contains=function(e,t){return e!==t&&e.contains(t)},n.type=_,n.isFunction=D,n.isWindow=P,n.isArray=F,n.isPlainObject=j,n.isEmptyObject=function(e){var t;for(t in e)return!1;return!0},n.inArray=function(e,t,n){return i.indexOf.call(t,e,n)},n.camelCase=L,n.trim=function(e){return e==null?"":String.prototype.trim.call(e)},n.uuid=0,n.support={},n.expr={},n.map=function(e,t){var n,r=[],i,s;if(I(e))for(i=0;i<e.length;i++)n=t(e[i],i),n!=null&&r.push(n);else for(s in e)n=t(e[s],s),n!=null&&r.push(n);return R(r)},n.each=function(e,t){var n,r;if(I(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===!1)return e}else for(r in e)if(t.call(e[r],r,e[r])===!1)return e;return e},n.grep=function(e,t){return o.call(e,t)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){N["[object "+t+"]"]=t.toLowerCase()}),n.fn={forEach:i.forEach,reduce:i.reduce,push:i.push,sort:i.sort,indexOf:i.indexOf,concat:i.concat,map:function(e){return n(n.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return n(s.apply(this,arguments))},ready:function(e){return E.test(u.readyState)&&u.body?e(n):u.addEventListener("DOMContentLoaded",function(){e(n)},!1),this},get:function(t){return t===e?s.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(e){return i.every.call(this,function(t,n){return e.call(t,n,t)!==!1}),this},filter:function(e){return D(e)?this.not(this.not(e)):n(o.call(this,function(t){return k.matches(t,e)}))},add:function(e,t){return n(A(this.concat(n(e,t))))},is:function(e){return this.length>0&&k.matches(this[0],e)},not:function(t){var r=[];if(D(t)&&t.call!==e)this.each(function(e){t.call(this,e)||r.push(this)});else{var i=typeof t=="string"?this.filter(t):I(t)&&D(t.item)?s.call(t):n(t);this.forEach(function(e){i.indexOf(e)<0&&r.push(e)})}return n(r)},has:function(e){return this.filter(function(){return B(e)?n.contains(this,e):n(this).find(e).size()})},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!B(e)?e:n(e)},last:function(){var e=this[this.length-1];return e&&!B(e)?e:n(e)},find:function(e){var t,r=this;return typeof e=="object"?t=n(e).filter(function(){var e=this;return i.some.call(r,function(t){return n.contains(t,e)})}):this.length==1?t=n(k.qsa(this[0],e)):t=this.map(function(){return k.qsa(this,e)}),t},closest:function(e,t){var r=this[0],i=!1;typeof e=="object"&&(i=n(e));while(r&&!(i?i.indexOf(r)>=0:k.matches(r,e)))r=r!==t&&!H(r)&&r.parentNode;return n(r)},parents:function(e){var t=[],r=this;while(r.length>0)r=n.map(r,function(e){if((e=e.parentNode)&&!H(e)&&t.indexOf(e)<0)return t.push(e),e});return J(t,e)},parent:function(e){return J(A(this.pluck("parentNode")),e)},children:function(e){return J(this.map(function(){return V(this)}),e)},contents:function(){return this.map(function(){return s.call(this.childNodes)})},siblings:function(e){return J(this.map(function(e,t){return o.call(V(t.parentNode),function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return n.map(this,function(t){return t[e]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=""),getComputedStyle(this,"").getPropertyValue("display")=="none"&&(this.style.display=X(this.nodeName))})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){var t=D(e);if(this[0]&&!t)var r=n(e).get(0),i=r.parentNode||this.length>1;return this.each(function(s){n(this).wrapAll(t?e.call(this,s):i?r.cloneNode(!0):r)})},wrapAll:function(e){if(this[0]){n(this[0]).before(e=n(e));var t;while((t=e.children()).length)e=t.first();n(e).append(this)}return this},wrapInner:function(e){var t=D(e);return this.each(function(r){var i=n(this),s=i.contents(),o=t?e.call(this,r):e;s.length?s.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var r=n(this);(t===e?r.css("display")=="none":t)?r.show():r.hide()})},prev:function(e){return n(this.pluck("previousElementSibling")).filter(e||"*")},next:function(e){return n(this.pluck("nextElementSibling")).filter(e||"*")},html:function(e){return arguments.length===0?this.length>0?this[0].innerHTML:null:this.each(function(t){var r=this.innerHTML;n(this).empty().append(K(this,e,t,r))})},text:function(t){return arguments.length===0?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t===e?"":""+t})},attr:function(n,r){var i;return typeof n=="string"&&r===e?this.length==0||this[0].nodeType!==1?e:n=="value"&&this[0].nodeName=="INPUT"?this.val():!(i=this[0].getAttribute(n))&&n in this[0]?this[0][n]:i:this.each(function(e){if(this.nodeType!==1)return;if(B(n))for(t in n)Q(this,t,n[t]);else Q(this,n,K(this,r,e,this.getAttribute(n)))})},removeAttr:function(e){return this.each(function(){this.nodeType===1&&Q(this,e)})},prop:function(t,n){return t=M[t]||t,n===e?this[0]&&this[0][t]:this.each(function(e){this[t]=K(this,n,e,this[t])})},data:function(t,n){var r=this.attr("data-"+t.replace(v,"-$1").toLowerCase(),n);return r!==null?Y(r):e},val:function(e){return arguments.length===0?this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(t){this.value=K(this,e,t,this.value)})},offset:function(e){if(e)return this.each(function(t){var r=n(this),i=K(this,e,t,r.offset()),s=r.offsetParent().offset(),o={top:i.top-s.top,left:i.left-s.left};r.css("position")=="static"&&(o.position="relative"),r.css(o)});if(this.length==0)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(e,r){if(arguments.length<2){var i=this[0],s=getComputedStyle(i,"");if(!i)return;if(typeof e=="string")return i.style[L(e)]||s.getPropertyValue(e);if(F(e)){var o={};return n.each(F(e)?e:[e],function(e,t){o[t]=i.style[L(t)]||s.getPropertyValue(t)}),o}}var u="";if(_(e)=="string")!r&&r!==0?this.each(function(){this.style.removeProperty(U(e))}):u=U(e)+":"+W(e,r);else for(t in e)!e[t]&&e[t]!==0?this.each(function(){this.style.removeProperty(U(t))}):u+=U(t)+":"+W(t,e[t])+";";return this.each(function(){this.style.cssText+=";"+u})},index:function(e){return e?this.indexOf(n(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return e?i.some.call(this,function(e){return this.test(G(e))},z(e)):!1},addClass:function(e){return e?this.each(function(t){r=[];var i=G(this),s=K(this,e,t,i);s.split(/\s+/g).forEach(function(e){n(this).hasClass(e)||r.push(e)},this),r.length&&G(this,i+(i?" ":"")+r.join(" "))}):this},removeClass:function(t){return this.each(function(n){if(t===e)return G(this,"");r=G(this),K(this,t,n,r).split(/\s+/g).forEach(function(e){r=r.replace(z(e)," ")}),G(this,r.trim())})},toggleClass:function(t,r){return t?this.each(function(i){var s=n(this),o=K(this,t,i,G(this));o.split(/\s+/g).forEach(function(t){(r===e?!s.hasClass(t):r)?s.addClass(t):s.removeClass(t)})}):this},scrollTop:function(t){if(!this.length)return;var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})},scrollLeft:function(t){if(!this.length)return;var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})},position:function(){if(!this.length)return;var e=this[0],t=this.offsetParent(),r=this.offset(),i=d.test(t[0].nodeName)?{top:0,left:0}:t.offset();return r.top-=parseFloat(n(e).css("margin-top"))||0,r.left-=parseFloat(n(e).css("margin-left"))||0,i.top+=parseFloat(n(t[0]).css("border-top-width"))||0,i.left+=parseFloat(n(t[0]).css("border-left-width"))||0,{top:r.top-i.top,left:r.left-i.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||u.body;while(e&&!d.test(e.nodeName)&&n(e).css("position")=="static")e=e.offsetParent;return e})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(t){var r=t.replace(/./,function(e){return e[0].toUpperCase()});n.fn[t]=function(i){var s,o=this[0];return i===e?P(o)?o["inner"+r]:H(o)?o.documentElement["scroll"+r]:(s=this.offset())&&s[t]:this.each(function(e){o=n(this),o.css(t,K(this,i,e,o[t]()))})}}),g.forEach(function(e,t){var r=t%2;n.fn[e]=function(){var e,i=n.map(arguments,function(t){return e=_(t),e=="object"||e=="array"||t==null?t:k.fragment(t)}),s,o=this.length>1;return i.length<1?this:this.each(function(e,u){s=r?u:u.parentNode,u=t==0?u.nextSibling:t==1?u.firstChild:t==2?u:null,i.forEach(function(e){if(o)e=e.cloneNode(!0);else if(!s)return n(e).remove();Z(s.insertBefore(e,u),function(e){e.nodeName!=null&&e.nodeName.toUpperCase()==="SCRIPT"&&(!e.type||e.type==="text/javascript")&&!e.src&&window.eval.call(window,e.innerHTML)})})})},n.fn[r?e+"To":"insert"+(t?"Before":"After")]=function(t){return n(t)[e](this),this}}),k.Z.prototype=n.fn,k.uniq=A,k.deserializeValue=Y,n.zepto=k,n}();window.Zepto=Zepto,window.$===undefined&&(window.$=Zepto),function(e){function h(e){return e._zid||(e._zid=n++)}function p(e,t,n,r){t=d(t);if(t.ns)var i=v(t.ns);return(u[h(e)]||[]).filter(function(e){return e&&(!t.e||e.e==t.e)&&(!t.ns||i.test(e.ns))&&(!n||h(e.fn)===h(n))&&(!r||e.sel==r)})}function d(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function v(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function m(e,t){return e.del&&!f&&e.e in l||!!t}function g(e){return c[e]||f&&l[e]||e}function y(t,n,i,s,o,a,f){var l=h(t),p=u[l]||(u[l]=[]);n.split(/\s/).forEach(function(n){if(n=="ready")return e(document).ready(i);var u=d(n);u.fn=i,u.sel=o,u.e in c&&(i=function(t){var n=t.relatedTarget;if(!n||n!==this&&!e.contains(this,n))return u.fn.apply(this,arguments)}),u.del=a;var l=a||i;u.proxy=function(e){e=T(e);if(e.isImmediatePropagationStopped())return;e.data=s;var n=l.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n},u.i=p.length,p.push(u),"addEventListener"in t&&t.addEventListener(g(u.e),u.proxy,m(u,f))})}function b(e,t,n,r,i){var s=h(e);(t||"").split(/\s/).forEach(function(t){p(e,t,n,r).forEach(function(t){delete u[s][t.i],"removeEventListener"in e&&e.removeEventListener(g(t.e),t.proxy,m(t,i))})})}function T(t,n){if(n||!t.isDefaultPrevented){n||(n=t),e.each(x,function(e,r){var i=n[e];t[e]=function(){return this[r]=w,i&&i.apply(n,arguments)},t[r]=E});if(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())t.isDefaultPrevented=w}return t}function N(e){var t,n={originalEvent:e};for(t in e)!S.test(t)&&e[t]!==r&&(n[t]=e[t]);return T(n,e)}var t=e.zepto.qsa,n=1,r,i=Array.prototype.slice,s=e.isFunction,o=function(e){return typeof e=="string"},u={},a={},f="onfocusin"in window,l={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",e.event={add:y,remove:b},e.proxy=function(t,n){if(s(t)){var r=function(){return t.apply(n,arguments)};return r._zid=h(t),r}if(o(n))return e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(e,t,n){return this.on(e,t,n)},e.fn.unbind=function(e,t){return this.off(e,t)},e.fn.one=function(e,t,n,r){return this.on(e,t,n,r,1)};var w=function(){return!0},E=function(){return!1},S=/^([A-Z]|returnValue$|layer[XY]$)/,x={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(e,t,n){return this.on(t,e,n)},e.fn.undelegate=function(e,t,n){return this.off(t,e,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,u,a,f){var l,c,h=this;if(t&&!o(t))return e.each(t,function(e,t){h.on(e,n,u,t,f)}),h;!o(n)&&!s(a)&&a!==!1&&(a=u,u=n,n=r);if(s(u)||u===!1)a=u,u=r;return a===!1&&(a=E),h.each(function(r,s){f&&(l=function(e){return b(s,e.type,a),a.apply(this,arguments)}),n&&(c=function(t){var r,o=e(t.target).closest(n,s).get(0);if(o&&o!==s)return r=e.extend(N(t),{currentTarget:o,liveFired:s}),(l||a).apply(o,[r].concat(i.call(arguments,1)))}),y(s,t,a,u,n,c||l)})},e.fn.off=function(t,n,i){var u=this;return t&&!o(t)?(e.each(t,function(e,t){u.off(e,n,t)}),u):(!o(n)&&!s(i)&&i!==!1&&(i=n,n=r),i===!1&&(i=E),u.each(function(){b(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=o(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(s,u){r=N(o(t)?e.Event(t):t),r._args=n,r.target=u,e.each(p(u,t.type||t),function(e,t){i=t.proxy(r);if(r.isImmediatePropagationStopped())return!1})}),i},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),["focus","blur"].forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.each(function(){try{this[t]()}catch(e){}}),this}}),e.Event=function(e,t){o(e)||(t=e,e=t.type);var n=document.createEvent(a[e]||"Events"),r=!0;if(t)for(var i in t)i=="bubbles"?r=!!t[i]:n[i]=t[i];return n.initEvent(e,r,!0),T(n)}}(Zepto),function($){function triggerAndReturn(e,t,n){var r=$.Event(t);return $(e).trigger(r,n),!r.isDefaultPrevented()}function triggerGlobal(e,t,n,r){if(e.global)return triggerAndReturn(t||document,n,r)}function ajaxStart(e){e.global&&$.active++===0&&triggerGlobal(e,null,"ajaxStart")}function ajaxStop(e){e.global&&!--$.active&&triggerGlobal(e,null,"ajaxStop")}function ajaxBeforeSend(e,t){var n=t.context;if(t.beforeSend.call(n,e,t)===!1||triggerGlobal(t,n,"ajaxBeforeSend",[e,t])===!1)return!1;triggerGlobal(t,n,"ajaxSend",[e,t])}function ajaxSuccess(e,t,n,r){var i=n.context,s="success";n.success.call(i,e,s,t),r&&r.resolveWith(i,[e,s,t]),triggerGlobal(n,i,"ajaxSuccess",[t,n,e]),ajaxComplete(s,t,n)}function ajaxError(e,t,n,r,i){var s=r.context;r.error.call(s,n,t,e),i&&i.rejectWith(s,[n,t,e]),triggerGlobal(r,s,"ajaxError",[n,r,e||t]),ajaxComplete(t,n,r)}function ajaxComplete(e,t,n){var r=n.context;n.complete.call(r,t,e),triggerGlobal(n,r,"ajaxComplete",[t,n]),ajaxStop(n)}function empty(){}function mimeToDataType(e){return e&&(e=e.split(";",2)[0]),e&&(e==htmlType?"html":e==jsonType?"json":scriptTypeRE.test(e)?"script":xmlTypeRE.test(e)&&"xml")||"text"}function appendQuery(e,t){return t==""?e:(e+"&"+t).replace(/[&?]{1,2}/,"?")}function serializeData(e){e.processData&&e.data&&$.type(e.data)!="string"&&(e.data=$.param(e.data,e.traditional)),e.data&&(!e.type||e.type.toUpperCase()=="GET")&&(e.url=appendQuery(e.url,e.data),e.data=null)}function parseArguments(e,t,n,r){var i=!$.isFunction(t);return{url:e,data:i?t:undefined,success:i?$.isFunction(n)?n:undefined:t,dataType:i?r||n:n}}function serialize(e,t,n,r){var i,s=$.isArray(t),o=$.isPlainObject(t);$.each(t,function(t,u){i=$.type(u),r&&(t=n?r:r+"["+(o||i=="object"||i=="array"?t:"")+"]"),!r&&s?e.add(u.name,u.value):i=="array"||!n&&i=="object"?serialize(e,u,n,t):e.add(t,u)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(e,t){if("type"in e){var n=e.jsonpCallback,r=($.isFunction(n)?n():n)||"jsonp"+ ++jsonpID,i=document.createElement("script"),s=window[r],o,u=function(e){$(i).triggerHandler("error",e||"abort")},a={abort:u},f;return t&&t.promise(a),$(i).on("load error",function(n,u){clearTimeout(f),$(i).off().remove(),n.type=="error"||!o?ajaxError(null,u||"error",a,e,t):ajaxSuccess(o[0],a,e,t),window[r]=s,o&&$.isFunction(s)&&s(o[0]),s=o=undefined}),ajaxBeforeSend(a,e)===!1?(u("abort"),a):(window[r]=function(){o=arguments},i.src=e.url.replace(/=\?/,"="+r),document.head.appendChild(i),e.timeout>0&&(f=setTimeout(function(){u("timeout")},e.timeout)),a)}return $.ajax(e)},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(options){var settings=$.extend({},options||{}),deferred=$.Deferred&&$.Deferred();for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host),settings.url||(settings.url=window.location.toString()),serializeData(settings),settings.cache===!1&&(settings.url=appendQuery(settings.url,"_="+Date.now()));var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,settings.jsonp?settings.jsonp+"=?":settings.jsonp===!1?"":"callback=?")),$.ajaxJSONP(settings,deferred);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),abortTimeout;deferred&&deferred.promise(xhr),settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),baseHeaders.Accept=mime||"*/*";if(mime=settings.mimeType||mime)mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime);if(settings.contentType||settings.contentType!==!1&&settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(settings.mimeType||xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:$.parseJSON(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings,deferred):ajaxSuccess(result,xhr,settings,deferred)}else ajaxError(xhr.statusText||null,xhr.status?"error":"abort",xhr,settings,deferred)}};if(ajaxBeforeSend(xhr,settings)===!1)return xhr.abort(),ajaxError(null,"abort",xhr,settings,deferred),xhr;if(settings.xhrFields)for(name in settings.xhrFields)xhr[name]=settings.xhrFields[name];var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async,settings.username,settings.password);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings,deferred)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr},$.get=function(e,t,n,r){return $.ajax(parseArguments.apply(null,arguments))},$.post=function(e,t,n,r){var i=parseArguments.apply(null,arguments);return i.type="POST",$.ajax(i)},$.getJSON=function(e,t,n){var r=parseArguments.apply(null,arguments);return r.dataType="json",$.ajax(r)},$.fn.load=function(e,t,n){if(!this.length)return this;var r=this,i=e.split(/\s/),s,o=parseArguments(e,t,n),u=o.success;return i.length>1&&(o.url=i[0],s=i[1]),o.success=function(e){r.html(s?$("<div>").html(e.replace(rscript,"")).find(s):e),u&&u.apply(r,arguments)},$.ajax(o),this};var escape=encodeURIComponent;$.param=function(e,t){var n=[];return n.add=function(e,t){this.push(escape(e)+"="+escape(t))},serialize(n,e,t),n.join("&").replace(/%20/g,"+")}}(Zepto),function(e){e.fn.serializeArray=function(){var t=[],n;return e([].slice.call(this.get(0).elements)).each(function(){n=e(this);var r=n.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&r!="submit"&&r!="reset"&&r!="button"&&(r!="radio"&&r!="checkbox"||this.checked)&&t.push({name:n.attr("name"),value:n.val()})}),t},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},e.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(e){"__proto__"in{}||e.extend(e.zepto,{Z:function(t,n){return t=t||[],e.extend(t,e.fn),t.selector=n||"",t.__Z=!0,t},isZ:function(t){return e.type(t)==="array"&&"__Z"in t}});try{getComputedStyle(undefined)}catch(t){var n=getComputedStyle;window.getComputedStyle=function(e){try{return n(e)}catch(t){return null}}}}(Zepto),function(e){function a(e,t,n,r){return Math.abs(e-t)>=Math.abs(n-r)?e-t>0?"Left":"Right":n-r>0?"Up":"Down"}function f(){s=null,t.last&&(t.el.trigger("longTap"),t={})}function l(){s&&clearTimeout(s),s=null}function c(){n&&clearTimeout(n),r&&clearTimeout(r),i&&clearTimeout(i),s&&clearTimeout(s),n=r=i=s=null,t={}}function h(e){return(e.pointerType=="touch"||e.pointerType==e.MSPOINTER_TYPE_TOUCH)&&e.isPrimary}function p(e,t){return e.type=="pointer"+t||e.type.toLowerCase()=="mspointer"+t}var t={},n,r,i,s,o=750,u;e(document).ready(function(){var d,v,m=0,g=0,y,b;"MSGesture"in window&&(u=new MSGesture,u.target=document.body),e(document).bind("MSGestureEnd",function(e){var n=e.velocityX>1?"Right":e.velocityX<-1?"Left":e.velocityY>1?"Down":e.velocityY<-1?"Up":null;n&&(t.el.trigger("swipe"),t.el.trigger("swipe"+n))}).on("touchstart MSPointerDown pointerdown",function(r){if((b=p(r,"down"))&&!h(r))return;y=b?r:r.touches[0],r.touches&&r.touches.length===1&&t.x2&&(t.x2=undefined,t.y2=undefined),d=Date.now(),v=d-(t.last||d),t.el=e("tagName"in y.target?y.target:y.target.parentNode),n&&clearTimeout(n),t.x1=y.pageX,t.y1=y.pageY,v>0&&v<=250&&(t.isDoubleTap=!0),t.last=d,s=setTimeout(f,o),u&&b&&u.addPointer(r.pointerId)}).on("touchmove MSPointerMove pointermove",function(e){if((b=p(e,"move"))&&!h(e))return;y=b?e:e.touches[0],l(),t.x2=y.pageX,t.y2=y.pageY,m+=Math.abs(t.x1-t.x2),g+=Math.abs(t.y1-t.y2)}).on("touchend MSPointerUp pointerup",function(s){if((b=p(s,"up"))&&!h(s))return;l(),t.x2&&Math.abs(t.x1-t.x2)>30||t.y2&&Math.abs(t.y1-t.y2)>30?i=setTimeout(function(){t.el.trigger("swipe"),t.el.trigger("swipe"+a(t.x1,t.x2,t.y1,t.y2)),t={}},0):"last"in t&&(m<30&&g<30?r=setTimeout(function(){var r=e.Event("tap");r.cancelTouch=c,t.el.trigger(r),t.isDoubleTap?(t.el&&t.el.trigger("doubleTap"),t={}):n=setTimeout(function(){n=null,t.el&&t.el.trigger("singleTap"),t={}},250)},0):t={}),m=g=0}).on("touchcancel MSPointerCancel pointercancel",c),e(window).on("scroll",c)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.on(t,e)}})}(Zepto),function(e,t){function w(e){return e.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function E(e){return r?r+e:e.toLowerCase()}var n="",r,i,s,o={Webkit:"webkit",Moz:"",O:"o"},u=window.document,a=u.createElement("div"),f=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,l,c,h,p,d,v,m,g,y,b={};e.each(o,function(e,i){if(a.style[e+"TransitionProperty"]!==t)return n="-"+e.toLowerCase()+"-",r=i,!1}),l=n+"transform",b[c=n+"transition-property"]=b[h=n+"transition-duration"]=b[d=n+"transition-delay"]=b[p=n+"transition-timing-function"]=b[v=n+"animation-name"]=b[m=n+"animation-duration"]=b[y=n+"animation-delay"]=b[g=n+"animation-timing-function"]="",e.fx={off:r===t&&a.style.transitionProperty===t,speeds:{_default:400,fast:200,slow:600},cssPrefix:n,transitionEnd:E("TransitionEnd"),animationEnd:E("AnimationEnd")},e.fn.animate=function(n,r,i,s,o){return e.isFunction(r)&&(s=r,i=t,r=t),e.isFunction(i)&&(s=i,i=t),e.isPlainObject(r)&&(i=r.easing,s=r.complete,o=r.delay,r=r.duration),r&&(r=(typeof r=="number"?r:e.fx.speeds[r]||e.fx.speeds._default)/1e3),o&&(o=parseFloat(o)/1e3),this.anim(n,r,i,s,o)},e.fn.anim=function(n,r,i,s,o){var u,a={},E,S="",x=this,T,N=e.fx.transitionEnd,C=!1;r===t&&(r=e.fx.speeds._default/1e3),o===t&&(o=0),e.fx.off&&(r=0);if(typeof n=="string")a[v]=n,a[m]=r+"s",a[y]=o+"s",a[g]=i||"linear",N=e.fx.animationEnd;else{E=[];for(u in n)f.test(u)?S+=u+"("+n[u]+") ":(a[u]=n[u],E.push(w(u)));S&&(a[l]=S,E.push(l)),r>0&&typeof n=="object"&&(a[c]=E.join(", "),a[h]=r+"s",a[d]=o+"s",a[p]=i||"linear")}return T=function(t){if(typeof t!="undefined"){if(t.target!==t.currentTarget)return;e(t.target).unbind(N,T)}else e(this).unbind(N,T);C=!0,e(this).css(b),s&&s.call(this)},r>0&&(this.bind(N,T),setTimeout(function(){if(C)return;T.call(x)},r*1e3+25)),this.size()&&this.get(0).clientLeft,this.css(a),r<=0&&setTimeout(function(){x.each(function(){T.call(this)})},0),this},a=null}(Zepto);var loadlazy;(function(){loadlazy={init:function(){var e=this;e.onerrorImgUrl="http://s.mb-go.com/pub7/style/images/grey.gif",e.srcStore="original",e.class="lazy",e.sensitivity=100,minScroll=5,slowScrollTime=200,ios=navigator.appVersion.match(/(iPhone\sOS)\s([\d_]+)/),isIos=ios&&!0||!1,isoVersion=isIos&&ios[2].split("_"),isoVersion=isoVersion&&parseFloat(isoVersion.length>1?isoVersion.splice(0,2).join("."):isoVersion[0],10),isIos=e.isPhone=isIos&&isoVersion<6;if(isIos){var t,n;$(window).on("touchstart",function(){t={sy:window.scrollY,time:Date.now()},n&&clearTimeout(n)}).on("touchend",function(r){if(r&&r.changedTouches){var i=Math.abs(window.scrollY-t.sy);if(i>minScroll){var s=Date.now()-t.time;n=setTimeout(function(){e.changeimg(),t={},clearTimeout(n),n=null},s>slowScrollTime?0:200)}}else e.changeimg()}).on("touchcancel",function(){n&&clearTimeout(n),t={}})}else $(window).on("scroll",function(){e.changeimg()});setTimeout(function(){e.trigger()},90)},trigger:function(){var e=this;eventType=e.isPhone&&"touchend"||"scroll",e.imglist=$("img."+e.class+""),$(window).trigger(eventType)},changeimg:function(){function e(e){var t=window.pageYOffset,r=t+window.innerHeight,i=e.offset().top;return i>=t&&i-n.sensitivity<=r}function t(e,t){var r=e.attr(n.srcStore);e.attr("src",r),e[0].onload||(e[0].onload=function(){$(this).removeClass(n.class).removeAttr(n.srcStore),n.imglist[t]=null,this.onerror=this.onload=null},e[0].onerror=function(){this.src=n.onerrorImgUrl,$(this).removeClass(n.class).removeAttr(n.srcStore),n.imglist[t]=null,this.onerror=this.onload=null})}var n=this;n.imglist.each(function(r,i){if(!i)return;var s=$(i);if(!e(s))return;if(!s.attr(n.srcStore))return;t(s,r)})}}})(),$(document).ready(function(){loadlazy.init()});;function creaticon(obj,cicle){  
    var len = $("#"+obj).find("li").length;       
    for(i=0;i<len;i++){
      if(i==0){
        $("#"+obj).find(".iconDot").append('<p class="curt">'+i+'</p>');  
      }else{
        $("#"+obj).find(".iconDot").append('<p>'+i+'</p>'); 
      } 
    }
    if(cicle){ 
      $("#"+obj).find(".iconDot").css("margin-left",-(len/2+2)*$("#"+obj).find(".iconDot p").width());}
    else{
      var prencent = Math.round((10000/len))/100+'%';   
      $("#"+obj).find(".iconDot").find("p").css("width",prencent);} 
};function gotop(){$("#top").on("singleTap",function(){$("html, body").scrollTop(0)})}function Swipe(e,t){"use strict";function h(){o=s.children,f=o.length,o.length<2&&(t.continuous=!1),i.transitions&&t.continuous&&o.length<3&&(s.appendChild(o[0].cloneNode(!0)),s.appendChild(s.children[1].cloneNode(!0)),o=s.children),u=new Array(o.length),a=e.getBoundingClientRect().width||e.offsetWidth,s.style.width=o.length*a+"px";var n=o.length;while(n--){var r=o[n];r.style.width=a+"px",r.setAttribute("data-index",n),i.transitions&&(r.style.left=n*-a+"px",g(n,l>n?-a:l<n?a:0,0))}t.continuous&&i.transitions&&(g(v(l-1),-a,0),g(v(l+1),a,0)),i.transitions||(s.style.left=l*-a+"px"),e.style.visibility="visible"}function p(){t.continuous?m(l-1):l&&m(l-1)}function d(){t.continuous?m(l+1):l<o.length-1&&m(l+1)}function v(e){return(o.length+e%o.length)%o.length}function m(e,n){if(l==e)return;if(i.transitions){var s=Math.abs(l-e)/(l-e);if(t.continuous){var f=s;s=-u[v(e)]/a,s!==f&&(e=-s*o.length+e)}var h=Math.abs(l-e)-1;while(h--)g(v((e>l?e:l)-h-1),a*s,0);e=v(e),g(l,a*s,n||c),g(e,0,n||c),t.continuous&&g(v(e-s),-(a*s),0)}else e=v(e),b(l*-a,e*-a,n||c);l=e,r(t.callback&&t.callback(l,o[l]))}function g(e,t,n){y(e,t,n),u[e]=t}function y(e,t,n){var r=o[e],i=r&&r.style;if(!i)return;i.webkitTransitionDuration=i.MozTransitionDuration=i.msTransitionDuration=i.OTransitionDuration=i.transitionDuration=n+"ms",i.webkitTransform="translate("+t+"px,0)"+"translateZ(0)",i.msTransform=i.MozTransform=i.OTransform="translateX("+t+"px)"}function b(e,n,r){if(!r){s.style.left=n+"px";return}var i=+(new Date),u=setInterval(function(){var a=+(new Date)-i;if(a>r){s.style.left=n+"px",w&&S(),t.transitionEnd&&t.transitionEnd.call(event,l,o[l]),clearInterval(u);return}s.style.left=(n-e)*(Math.floor(a/r*100)/100)+e+"px"},4)}function S(){E=setTimeout(d,w)}function x(){t.auto>0?w=t.auto:w=0,clearTimeout(E)}var n=function(){},r=function(e){setTimeout(e||n,0)},i={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(e){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in t)if(e.style[t[n]]!==undefined)return!0;return!1}(document.createElement("swipe"))};if(!e)return;var s=e.children[0],o,u,a,f;t=t||{};var l=parseInt(t.startSlide,10)||0,c=t.speed||300;t.continuous=t.continuous!==undefined?t.continuous:!0;var w=t.auto||0,E,T={},N={},C,k={handleEvent:function(e){switch(e.type){case"touchstart":this.start(e);break;case"touchmove":this.move(e);break;case"touchend":r(this.end(e));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":r(this.transitionEnd(e));break;case"resize":r(h)}t.stopPropagation&&e.stopPropagation()},start:function(e){var t=e.touches[0];T={x:t.pageX,y:t.pageY,time:+(new Date)},C=undefined,N={},s.addEventListener("touchmove",this,!1),s.addEventListener("touchend",this,!1)},move:function(e){if(e.touches.length>1||e.scale&&e.scale!==1)return;t.disableScroll&&e.preventDefault();var n=e.touches[0];N={x:n.pageX-T.x,y:n.pageY-T.y},typeof C=="undefined"&&(C=!!(C||Math.abs(N.x)<Math.abs(N.y))),C||(e.preventDefault(),x(),t.continuous?(y(v(l-1),N.x+u[v(l-1)],0),y(l,N.x+u[l],0),y(v(l+1),N.x+u[v(l+1)],0)):(N.x=N.x/(!l&&N.x>0||l==o.length-1&&N.x<0?Math.abs(N.x)/a+1:1),y(l-1,N.x+u[l-1],0),y(l,N.x+u[l],0),y(l+1,N.x+u[l+1],0)))},end:function(e){var n=+(new Date)-T.time,r=Number(n)<250&&Math.abs(N.x)>20||Math.abs(N.x)>a/2,i=!l&&N.x>0||l==o.length-1&&N.x<0;t.continuous&&(i=!1);var f=N.x<0;C||(r&&!i?(f?(t.continuous?(g(v(l-1),-a,0),g(v(l+2),a,0)):g(l-1,-a,0),g(l,u[l]-a,c),g(v(l+1),u[v(l+1)]-a,c),l=v(l+1)):(t.continuous?(g(v(l+1),a,0),g(v(l-2),-a,0)):g(l+1,a,0),g(l,u[l]+a,c),g(v(l-1),u[v(l-1)]+a,c),l=v(l-1)),t.callback&&t.callback(l,o[l])):t.continuous?(g(v(l-1),-a,c),g(l,0,c),g(v(l+1),a,c)):(g(l-1,-a,c),g(l,0,c),g(l+1,a,c))),s.removeEventListener("touchmove",k,!1),s.removeEventListener("touchend",k,!1)},transitionEnd:function(e){parseInt(e.target.getAttribute("data-index"),10)==l&&(w&&S(),t.transitionEnd&&t.transitionEnd.call(e,l,o[l]))}};return h(),w&&S(),i.addEventListener?(i.touch&&s.addEventListener("touchstart",k,!1),i.transitions&&(s.addEventListener("webkitTransitionEnd",k,!1),s.addEventListener("msTransitionEnd",k,!1),s.addEventListener("oTransitionEnd",k,!1),s.addEventListener("otransitionend",k,!1),s.addEventListener("transitionend",k,!1)),window.addEventListener("resize",k,!1)):window.onresize=function(){h()},{setup:function(){h()},slide:function(e,t){x(),m(e,t)},prev:function(){x(),p()},next:function(){x(),d()},stop:function(){x()},getPos:function(){return l},getNumSlides:function(){return f},kill:function(){x(),s.style.width="",s.style.left="";var e=o.length;while(e--){var t=o[e];t.style.width="",t.style.left="",i.transitions&&y(e,0,0)}i.addEventListener?(s.removeEventListener("touchstart",k,!1),s.removeEventListener("webkitTransitionEnd",k,!1),s.removeEventListener("msTransitionEnd",k,!1),s.removeEventListener("oTransitionEnd",k,!1),s.removeEventListener("otransitionend",k,!1),s.removeEventListener("transitionend",k,!1),window.removeEventListener("resize",k,!1)):window.onresize=null}}}(window.jQuery||window.Zepto)&&function(e){e.fn.Swipe=function(t){return this.each(function(){e(this).data("Swipe",new Swipe(e(this)[0],t))})}}(window.jQuery||window.Zepto);