(()=>{"use strict";var e=document.querySelector(".calc__result"),r=document.querySelectorAll(".calc__btn"),t=document.getElementById("checkbox"),i=document.querySelector(".calc__btn-ac"),n=document.querySelector(".page"),u=document.querySelector(".header__title"),l=document.querySelector(".header__subtitle"),a=document.querySelectorAll(".calc__btn-light-grey"),c=document.querySelector(".calc__buttons"),o="",s="",v="",d=!1,g=["0","1","2","3","4","5","6","7","8","9","."],f=["/","*","-","+"];t.addEventListener("click",(function(){n.classList.toggle("page-color"),u.classList.toggle("header__title-opacity"),l.classList.toggle("header__subtitle-opacity"),a.forEach((function(e){e.classList.toggle("btn-blue")}))})),document.onkeydown=function(e){r.forEach((function(r){r.value==e.key&&r.click()}))},i.addEventListener("click",(function(){o="",s="",v="",d=!1,e.value="0"})),c.addEventListener("click",(function(t){return function(t){if(r.forEach((function(e){e.classList.remove("active")})),t.target.classList.contains("calc__btn")&&!t.target.classList.contains("calc__btn-ac")){""===o&&""===s&&(e.value="");var i=t.target.value;if(g.includes(i)){if("0"===i&&""!==o&&""!==s&&""!==v&&d)return o=i,s="",v="",d=!1,void(e.value=o);if("0"===i&&"0"===o&&""===s)return void(e.value=o);if("0"===i&&""!==o&&"0"===s)return void(e.value=s);if("0"===i&&""===s&&""!==v)return""!==o&&String(o).length>=1?(s+=i,void(e.value=s)):(o="0",void(e.value=o));if("0"===i&&"0"!==o&&"0"!==s&&"0"!==v&&d)return o=i,e.value=o,void(d=!1);if("."===i&&"0"===o&&""===s)return o="0.",void(e.value=o);if("."===i&&""!==o&&""===s&&""!==v)return String(o).length>=1?(s="0.",void(e.value=s)):void(e.value=o);if("."===i&&""!==o&&String(s).includes(".")&&!d)return void(e.value=s);if("."===i&&""===o&&""===s&&""!==v)return o="0.",void(e.value=o);if("%"===v)return"."===i?(o="0.",s="",v="",d=!1,void(e.value=o)):(o=i,s="",v="",void(e.value=o));if(""!==o&&""!==s&&""!==v&&d)return"."===i?(o="0.",s="",v="",d=!1,void(e.value=o)):(o=i,s="",v="",d=!1,void(e.value=o));if(""===s&&""===v){if("."===i&&""===s&&""===v&&""===o)return o="0.",void(e.value=o);if("0"!==i&&String(o).startsWith("0")&&!String(o).startsWith("0."))return o=i,void(e.value=o);if("."===i&&String(o).includes("."))return void(e.value=o);if(o+=i,String(o).length>9)return o=i,void(e.value=o);e.value=o}else if(""!==o&&""!==s&&d){if("."===i&&""!==o&&""!==s)return o="0.",e.value=o,s="",void(d=!1);s=i,d=!1,e.value=s}else{if(""!==s&&String(s).startsWith("0")&&!String(s).includes("."))return"."===i&&String(s).startsWith("0")&&!String(s).includes(".")?(s="0.",void(e.value=s)):(s=i,void(e.value=s));if(s+=i,String(s).length>9)return s=i,void(e.value=s);e.value=s}}else{if("%"===i){if(""===o&&""===s&&!d)return;if(""!==o&&""!==s&&""!==v&&!d){switch(v){case"+":o=Number(o)+Number(o)*Number(s)/100;break;case"-":o=Number(o)-Number(o)*Number(s)/100;break;case"*":o=Number(o)*Number(s)/100;break;case"/":if("0"===s)return e.value="Error",o="",s="",void(v="");o=Number(o)/(Number(s)/100)}return s="",v=i,String(o).includes("e")&&String(o).length>7?o=Number(String(Number(String(o).split("e")[0]).toFixed(0))+"e"+String(o).split("e")[1]):String(o).includes(".")&&String(o).length>=9&&(o=Number(o.toFixed(7))),"Enter"===i&&""===s&&(s=o),void(e.value=o)}return v="%",o=Number(o)/100,String(o).includes("e")&&String(o).length>7?o=Number(String(Number(String(o).split("e")[0]).toFixed(0))+"e"+String(o).split("e")[1]):String(o).includes(".")&&String(o).length>=9&&(o=Number(o.toFixed(7))),"Enter"===i&&""===s&&(s=o),void(e.value=o)}if("+/-"===i){if(""===o&&""===s&&!d)return;if(""!==o&&""===s&&!d)return o=-1*Number(o),void(e.value=o);if(""!==o&&""!==s&&!d)return s=-1*Number(s),void(e.value=s);if(""!==o&&""!==s&&d)return o=-1*Number(o),void(e.value=o)}if(f.includes(i)){if(t.target.classList.add("active"),""===o&&""===s&&!d)return;if(""!==o&&""!==s&&d)s="",v=i,e.value=o;else if(""!==o&&""!==s&&""!==v){switch(v){case"+":o=Number(o)+Number(s);break;case"-":o-=s;break;case"*":o*=s;break;case"/":if("0"===s)return e.value="Error",o="",s="",void(v="");o/=s}s="",v=i}v=i,d=!1}if("Enter"===i){if(""===o&&""===s)return;if(""===v)return;switch(""===s&&(s=o),v){case"+":o=Number(o)+Number(s);break;case"-":o-=s;break;case"*":o*=s;break;case"/":if("0"===s)return e.value="Error",o="",s="",void(v="");o/=s}if(String(o).includes(".")&&String(o).includes("e")&&(o=Number(String(Number(String(o).split("e")[0]).toFixed(0))+"e"+String(o).split("e")[1])),String(o).includes(".")&&!String(o).includes("e")&&String(o).length>9){o=Number(o).toFixed(5);for(var n=0;n<=String(o).length;n++)String(o).endsWith("0")&&(o=o.slice(0,-1));String(o).endsWith(".")&&(o=o.slice(0,-1))}if(String(o).length>9)return o="Error",e.value=o,o="",s="",void(v="");d=!0,e.value=o}}}}(t)}))})();