(()=>{"use strict";var e="",r="",t="",i=!1,u=["0","1","2","3","4","5","6","7","8","9","."],n=["/","*","-","+"],l=document.querySelector(".calc__result"),a=document.querySelectorAll(".calc__btn");document.getElementById("checkbox").addEventListener("click",(function(){document.querySelector(".page").classList.toggle("page-color"),document.querySelector(".header__title").classList.toggle("header__title-opacity"),document.querySelector(".header__subtitle").classList.toggle("header__subtitle-opacity"),document.querySelectorAll(".calc__btn-light-grey").forEach((function(e){e.classList.toggle("btn-blue")}))})),document.onkeydown=function(e){a.forEach((function(r){r.value==e.key&&r.click()}))},document.querySelector(".calc__btn-ac").addEventListener("click",(function(){e="",r="",t="",i=!1,l.value="0"})),document.querySelector(".calc__buttons").addEventListener("click",(function(c){if(a.forEach((function(e){e.classList.remove("active")})),c.target.classList.contains("calc__btn")&&!c.target.classList.contains("calc__btn-ac")){""===e&&""===r&&(l.value="");var o=c.target.value;if(u.includes(o)){if("0"===o&&""!==e&&""!==r&&""!==t&&i)return e=o,r="",t="",i=!1,void(l.value=e);if("0"===o&&"0"===e&&""===r)return void(l.value=e);if("0"===o&&""!==e&&"0"===r)return void(l.value=r);if("0"===o&&""===r&&""!==t)return""!==e&&String(e).length>=1?(r+=o,void(l.value=r)):(e="0",void(l.value=e));if("0"===o&&"0"!==e&&"0"!==r&&"0"!==t&&i)return e=o,l.value=e,void(i=!1);if("."===o&&"0"===e&&""===r)return e="0.",void(l.value=e);if("."===o&&""!==e&&""===r&&""!==t)return String(e).length>=1?(r="0.",void(l.value=r)):void(l.value=e);if("."===o&&""!==e&&String(r).includes(".")&&!i)return void(l.value=r);if("."===o&&""===e&&""===r&&""!==t)return e="0.",void(l.value=e);if("%"===t)return"."===o?(e="0.",r="",t="",i=!1,void(l.value=e)):(e=o,r="",t="",void(l.value=e));if(""!==e&&""!==r&&""!==t&&i)return"."===o?(e="0.",r="",t="",i=!1,void(l.value=e)):(e=o,r="",t="",i=!1,void(l.value=e));if(""===r&&""===t){if("."===o&&""===r&&""===t&&""===e)return e="0.",void(l.value=e);if("0"!==o&&String(e).startsWith("0")&&!String(e).startsWith("0."))return e=o,void(l.value=e);if("."===o&&String(e).includes("."))return void(l.value=e);if(e+=o,String(e).length>9)return e=o,void(l.value=e);l.value=e}else if(""!==e&&""!==r&&i){if("."===o&&""!==e&&""!==r)return e="0.",l.value=e,r="",void(i=!1);r=o,i=!1,l.value=r}else{if(""!==r&&String(r).startsWith("0")&&!String(r).includes("."))return"."===o&&String(r).startsWith("0")&&!String(r).includes(".")?(r="0.",void(l.value=r)):(r=o,void(l.value=r));if(r+=o,String(r).length>9)return r=o,void(l.value=r);l.value=r}}else{if("%"===o){if(""===e&&""===r&&!i)return;if(""!==e&&""!==r&&""!==t&&!i){switch(t){case"+":e=Number(e)+Number(e)*Number(r)/100;break;case"-":e=Number(e)-Number(e)*Number(r)/100;break;case"*":e=Number(e)*Number(r)/100;break;case"/":if("0"===r)return l.value="Error",e="",r="",void(t="");e=Number(e)/(Number(r)/100)}return r="",t=o,String(e).includes("e")&&String(e).length>7?e=Number(String(Number(String(e).split("e")[0]).toFixed(0))+"e"+String(e).split("e")[1]):String(e).includes(".")&&String(e).length>=9&&(e=Number(e.toFixed(7))),"Enter"===o&&""===r&&(r=e),void(l.value=e)}return t="%",e=Number(e)/100,String(e).includes("e")&&String(e).length>7?e=Number(String(Number(String(e).split("e")[0]).toFixed(0))+"e"+String(e).split("e")[1]):String(e).includes(".")&&String(e).length>=9&&(e=Number(e.toFixed(7))),"Enter"===o&&""===r&&(r=e),void(l.value=e)}if("+/-"===o){if(""===e&&""===r&&!i)return;if(""!==e&&""===r&&!i)return e=-1*Number(e),void(l.value=e);if(""!==e&&""!==r&&!i)return r=-1*Number(r),void(l.value=r);if(""!==e&&""!==r&&i)return e=-1*Number(e),void(l.value=e)}if(n.includes(o)){if(c.target.classList.add("active"),""===e&&""===r&&!i)return;if(""!==e&&""!==r&&i)r="",t=o,l.value=e;else if(""!==e&&""!==r&&""!==t){switch(t){case"+":e=Number(e)+Number(r);break;case"-":e-=r;break;case"*":e*=r;break;case"/":if("0"===r)return l.value="Error",e="",r="",void(t="");e/=r}r="",t=o}t=o,i=!1}if("Enter"===o){if(""===e&&""===r)return;if(""===t)return;switch(""===r&&(r=e),t){case"+":e=Number(e)+Number(r);break;case"-":e-=r;break;case"*":e*=r;break;case"/":if("0"===r)return l.value="Error",e="",r="",void(t="");e/=r}if(String(e).includes(".")&&String(e).includes("e")&&(e=Number(String(Number(String(e).split("e")[0]).toFixed(0))+"e"+String(e).split("e")[1])),console.log(e),String(e).includes(".")&&!String(e).includes("e")&&String(e).length>9){e=Number(e).toFixed(5);for(var s=0;s<=String(e).length;s++)String(e).endsWith("0")&&(e=e.slice(0,-1))}if(String(e).length>9)return e="Error",l.value=e,e="",r="",void(t="");i=!0,l.value=e}}}}))})();