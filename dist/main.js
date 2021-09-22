(()=>{"use strict";var n={215:(n,e,t)=>{t.d(e,{Z:()=>r});var a=t(645),i=t.n(a)()((function(n){return n[1]}));i.push([n.id,".popup {\n  background-color: rgba(220, 220, 220, 0.707);\n  margin-left: auto;\n  margin-right: auto;\n  top: 0;\n  width: 60%;\n  z-index: 2000;\n  height: 120vh;\n}\n\n.flex-div {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n}\n\n.image-div {\n  text-align: center;\n  display: flex;\n  margin-top: 50px;\n}\n\n.image-container {\n  margin: 0 auto;\n  width: 100%;\n  color: black;\n}\n\n.image-container img {\n  width: 60%;\n}\n\n.comment-container {\n  padding: 10px;\n  text-align: center;\n}\n\n.form-control {\n  width: 50%;\n}\n\n.commentForm {\n  margin-left: 10px;\n}\n\n.close-btn {\n  display: block;\n  float: right;\n  margin-right: 1rem;\n  margin-top: 1rem;\n  width: 40px;\n  height: 40px;\n  background-color: #d5473d;\n  border: none;\n  font-weight: bold;\n  color: azure;\n  border-radius: 0.5rem;\n}\n",""]);const r=i},426:(n,e,t)=>{t.d(e,{Z:()=>r});var a=t(645),i=t.n(a)()((function(n){return n[1]}));i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,700&display=swap);"]),i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\nheader {\n  align-items: center;\n  padding: 10px 60px;\n  background-color: #d5473d;\n  font-weight: 500;\n  border-bottom: 2px solid #272727;\n}\n\n.title {\n  padding-right: 30px;\n  align-items: center;\n  color: azure;\n}\n\n.title h1 {\n  font-weight: 700;\n  font-style: italic;\n}\n\n.nav-links {\n  padding-right: 20px;\n  text-decoration: none;\n  color: rgb(255, 247, 247);\n}\n\n.fas {\n  font-size: 26px;\n  padding-right: 10px;\n  font-style: italic;\n}\n\n.page-footer {\n  margin: 0 auto;\n  width: 100%;\n  border: 2px solid #272727;\n  background-color: #d5473d;\n  text-align: center;\n  padding: 15px;\n  margin-top: 20px;\n  color: azure;\n}\n\n#tumericMeals,\n#garamMeals {\n  display: none;\n}\n\n.sections {\n  flex-wrap: wrap;\n  width: 80%;\n  margin: auto;\n  padding-top: 50px;\n  justify-content: space-around;\n}\n\n.mealCard {\n  flex-direction: column;\n  width: 28%;\n  text-align: center;\n}\n\n.mealCard img {\n  width: 100%;\n  height: 60%;\n}\n\n.mealName {\n  justify-content: space-around;\n  align-items: center;\n}\n\n.comment {\n  padding: 10px 60px;\n  margin-top: 6px;\n  border: 1px solid #d5473d;\n  background-color: #272727;\n  color: rgb(255, 247, 247);\n  border-radius: 0.5rem;\n  font-size: 0.9rem;\n}\n\n.likes {\n  margin-left: 150px;\n}\n",""]);const r=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(a)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);a&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var r={},o=[],s=0;s<n.length;s++){var l=n[s],d=a.base?l[0]+a.base:l[0],c=r[d]||0,m="".concat(d," ").concat(c);r[d]=c+1;var p=t(m),u={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(e[p].references++,e[p].updater(u)):e.push({identifier:m,updater:i(u,a),references:1}),o.push(m)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=a(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<r.length;o++){var s=t(r[o]);e[s].references--}for(var l=a(n,i),d=0;d<r.length;d++){var c=t(r[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=l}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a=t.css,i=t.media,r=t.sourceMap;i?n.setAttribute("media",i):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={id:a,exports:{}};return n[a](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),a=t(795),i=t.n(a),r=t(569),o=t.n(r),s=t(565),l=t.n(s),d=t(216),c=t.n(d),m=t(589),p=t.n(m),u=t(426),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=c(),e()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;var f=t(215),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=c(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v=async(n,e)=>{const t=await fetch(`${n}?${e}`);return await t.json()};class y{static async postComment(n,e,t){const a=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lCZQ9jd97Oj1oy24PzZg/comments",{method:"POST",body:JSON.stringify({item_id:n,username:e,comment:t}),headers:{"content-type":"application/json"}});if(201===a.status)return a}static async getComments(n){const e=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lCZQ9jd97Oj1oy24PzZg/comments?item_id=${n}`);return await e.json()}}const b=(n,e)=>{y.getComments(e).then((e=>{n.innerHTML="";const t=n.previousSibling.previousSibling,a=(n=>n.length)(e);a>0&&(t.innerHTML=`Comments (${a})`),e.length>0?e.forEach((e=>{n.innerHTML+=`${e.creation_date} ${e.username}: ${e.comment} <br>`})):n.innerHTML="No comments"}))},x=document.getElementById("home"),M=document.getElementById("main"),w=document.getElementsByTagName("header"),E=document.getElementsByTagName("footer"),T=(n,e,t)=>{(async n=>{const e=await fetch(n);return await e.json()})(n).then((n=>{n=n.filter((n=>n.item_id===t)),e.innerHTML=`${n[0].likes} likes`}))},I=document.getElementById("main"),k=document.getElementsByTagName("header"),$=document.getElementsByTagName("footer"),C="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7X6fjvwVL8rklkn24xVW/likes",L=(n,e)=>{n.innerHTML="",e.forEach((e=>{const t=e.idMeal+1,a=`<img src="${e.strMealThumb}" alt="Food">\n    <div class="mealName flex">\n      <p>${e.strMeal}</p>\n      <i class="far fa-heart" id="${e.strMeal}"></i>\n    </div>\n    <span class="likes" id="${t}">0 likes</span>\n    <button class="comment" id="${e.idMeal}">Comments</button>`,i=document.createElement("div");i.classList.add("mealCard"),i.innerHTML=a,n.appendChild(i);const r=document.getElementById(e.strMeal),o=document.getElementById(t);r.addEventListener("click",(()=>{(async(n,e)=>await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7X6fjvwVL8rklkn24xVW/likes",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:e})}))(0,e.idMeal).then((()=>T(C,o,e.idMeal)))})),T(C,o,e.idMeal),document.getElementById(e.idMeal).addEventListener("click",(()=>{var n;n=e.idMeal,v("https://www.themealdb.com/api/json/v1/1/lookup.php",`i=${n}`).then((n=>{const e=n.meals[0].idMeal+1;x.innerHTML="";const t=document.createElement("div");t.className="popup",t.innerHTML=`<button type='button' class='close-btn'>X</button>\n                            <div class='comment-container'>\n                              <div class='image-div'>\n                                <div class='image-container'><img src="${n.meals[0].strMealThumb}" class='img-fluid'></div>\n                              </div>\n                              <div class='meal-name'><h2>${n.meals[0].strMeal}</h2></div>\n                              <div class='cuisine'><b>Category:</b> ${n.meals[0].strCategory}</div>\n                              <div class='ingredients'><b> Ingredients:</b> ${n.meals[0].strIngredient1}, ${n.meals[0].strIngredient2}, ${n.meals[0].strIngredient3}, ${n.meals[0].strIngredient4}, ${n.meals[0].strIngredient5}</div>\n                              <div class='flex-div'>\n                              <div>\n                                <h3 class='counter'>Comments</h3>\n                                <div class='comment-list' id="${e}"> </div>\n                              </div>\n                              \n                              <div class="commentForm form-group">\n                                  <div class='add-comment'><h2>Add a comment:</h2></div>\n                                  <div><input type="text" id="${n.meals[0].strMeal}" name="name" class="comment-name" placeholder="Your Name"></div><br>\n                                  <div> <textarea id="${n.meals[0].strIngredient1}" name="comment-text" class="textarea-comment" placeholder="Your insight"></textarea></div><br>\n                                  <div><button type="button" id="${n.meals[0].idMeal}" >Submit</button></div>\n                              </div>\n                              </div>\n                            </div>`,x.appendChild(t),document.querySelector(".close-btn").addEventListener("click",(()=>{t.remove(),M.style.display="block",w[0].style.display="flex",E[0].style.display="block"}));const a=document.getElementById(n.meals[0].idMeal),i=document.getElementById(n.meals[0].strMeal),r=document.getElementById(n.meals[0].strIngredient1);a.addEventListener("click",(()=>{y.postComment(n.meals[0].idMeal,i.value,r.value).then((()=>b(o,n.meals[0].idMeal))),i.value="",r.value=""}));const o=document.getElementById(e);b(o,n.meals[0].idMeal)})),I.style.display="none",k[0].style.display="none",$[0].style.display="none"}))}))},j=n=>n.length,B=document.getElementById("allMeals"),S=document.getElementById("tumericMeals"),N=document.getElementById("garamMeals"),A=document.getElementById("indian"),H=document.getElementById("tumeric"),Z=document.getElementById("garam"),P="https://www.themealdb.com/api/json/v1/1/filter.php";v(P,"a=Indian").then((n=>{const e=j(n.meals);A.innerHTML+=`(${e})`,L(B,n.meals)})),v(P,"i=turmeric").then((n=>{const e=j(n.meals);H.innerHTML+=`(${e})`,L(S,n.meals)})),v(P,"i=garam_masala").then((n=>{const e=j(n.meals);Z.innerHTML+=`(${e})`,L(N,n.meals)})),A.addEventListener("click",(()=>{B.style.display="flex",S.style.display="none",N.style.display="none"})),H.addEventListener("click",(()=>{B.style.display="none",S.style.display="flex",N.style.display="none"})),Z.addEventListener("click",(()=>{B.style.display="none",S.style.display="none",N.style.display="flex"}))})()})();