var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,g,v,m,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=function(e){return e&&e.Math===Math&&e};k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof b&&b)||E("object"==typeof k&&k)||function(){return this}()||Function("return this")();var S={},$={};S=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var j={},F={};F=!$(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var O=Function.prototype.call;j=F?O.bind(O):function(){return O.apply(O,arguments)};var L={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;o=M&&!L.call({1:2},1)?function(e){var t=M(this,e);return!!t&&t.enumerable}:L;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var T={},x={},H={},I=Function.prototype,q=I.call,A=F&&I.bind.bind(q,q),N={},C=(H=F?A:function(e){return function(){return q.apply(e,arguments)}})({}.toString),D=H("".slice);N=function(e){return D(C(e),8,-1)};var R=Object,U=H("".split);x=$(function(){return!R("z").propertyIsEnumerable(0)})?function(e){return"String"===N(e)?U(e,""):R(e)}:R;var z={},W={};W=function(e){return null==e};var G=TypeError;z=function(e){if(W(e))throw new G("Can't call method on "+e);return e},T=function(e){return x(z(e))};var B={},J={},Y={},Q={},V={},K="object"==typeof document&&document.all,X=(V={all:K,IS_HTMLDDA:void 0===K&&void 0!==K}).all;Q=V.IS_HTMLDDA?function(e){return"function"==typeof e||e===X}:function(e){return"function"==typeof e};var Z=V.all;Y=V.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:Q(e)||e===Z}:function(e){return"object"==typeof e?null!==e:Q(e)};var ee={},et={};et=function(e,t){var r;return arguments.length<2?(r=k[e],Q(r)?r:void 0):k[e]&&k[e][t]};var er={};er=H({}.isPrototypeOf);var en={},ei={},eo={},ea={};ea="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var es=k.process,ec=k.Deno,eu=es&&es.versions||ec&&ec.version,el=eu&&eu.v8;el&&(s=(a=el.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&ea&&(!(a=ea.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=ea.match(/Chrome\/(\d+)/))&&(s=+a[1]),eo=s;var ed=k.String;en=(ei=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");return!ed(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&eo&&eo<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ep=Object;ee=en?function(e){return"symbol"==typeof e}:function(e){var t=et("Symbol");return Q(t)&&er(t.prototype,ep(e))};var ef={},eh={},eg={},ev=String;eg=function(e){try{return ev(e)}catch(e){return"Object"}};var em=TypeError;eh=function(e){if(Q(e))return e;throw new em(eg(e)+" is not a function")},ef=function(e,t){var r=e[t];return W(r)?void 0:eh(r)};var ey={},eb=TypeError;ey=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!Y(n=j(r,e))||Q(r=e.valueOf)&&!Y(n=j(r,e))||"string"!==t&&Q(r=e.toString)&&!Y(n=j(r,e)))return n;throw new eb("Can't convert object to primitive value")};var e_={},ew={};ew=!1;var ek={},eE={},eS=Object.defineProperty;eE=function(e,t){try{eS(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var e$="__core-js_shared__";ek=k[e$]||eE(e$,{}),(e_=function(e,t){return ek[e]||(ek[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.34.0",mode:ew?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",source:"https://github.com/zloirock/core-js"});var ej={},eF={},eO=Object;eF=function(e){return eO(z(e))};var eL=H({}.hasOwnProperty);ej=Object.hasOwn||function(e,t){return eL(eF(e),t)};var eM={},eP=0,eT=Math.random(),ex=H(1..toString);eM=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++eP+eT,36)};var eH=k.Symbol,eI=e_("wks"),eq=en?eH.for||eH:eH&&eH.withoutSetter||eM,eA=TypeError,eN=(ej(eI,e="toPrimitive")||(eI[e]=ei&&ej(eH,e)?eH[e]:eq("Symbol."+e)),eI[e]);J=function(e,t){if(!Y(e)||ee(e))return e;var r,n=ef(e,eN);if(n){if(void 0===t&&(t="default"),r=j(n,e,t),!Y(r)||ee(r))return r;throw new eA("Can't convert object to primitive value")}return void 0===t&&(t="number"),ey(e,t)},B=function(e){var t=J(e,"string");return ee(t)?t:t+""};var eC={},eD={},eR=k.document,eU=Y(eR)&&Y(eR.createElement);eD=function(e){return eU?eR.createElement(e):{}},eC=!S&&!$(function(){return 7!==Object.defineProperty(eD("div"),"a",{get:function(){return 7}}).a});var ez=Object.getOwnPropertyDescriptor;i=S?ez:function(e,t){if(e=T(e),t=B(t),eC)try{return ez(e,t)}catch(e){}if(ej(e,t))return P(!j(o,e,t),e[t])};var eW={},eG={};eG=S&&$(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eB={},eJ=String,eY=TypeError;eB=function(e){if(Y(e))return e;throw new eY(eJ(e)+" is not an object")};var eQ=TypeError,eV=Object.defineProperty,eK=Object.getOwnPropertyDescriptor,eX="enumerable",eZ="configurable",e0="writable";c=S?eG?function(e,t,r){if(eB(e),t=B(t),eB(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e0 in r&&!r[e0]){var n=eK(e,t);n&&n[e0]&&(e[t]=r.value,r={configurable:eZ in r?r[eZ]:n[eZ],enumerable:eX in r?r[eX]:n[eX],writable:!1})}return eV(e,t,r)}:eV:function(e,t,r){if(eB(e),t=B(t),eB(r),eC)try{return eV(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eW=S?function(e,t,r){return c(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var e1={},e2={},e4=Function.prototype,e9=S&&Object.getOwnPropertyDescriptor,e7=ej(e4,"name")&&(!S||S&&e9(e4,"name").configurable),e3={},e8=H(Function.toString);Q(ek.inspectSource)||(ek.inspectSource=function(e){return e8(e)}),e3=ek.inspectSource;var e6={},e5={},te=k.WeakMap;e5=Q(te)&&/native code/.test(String(te));var tt={},tr=e_("keys");tt=function(e){return tr[e]||(tr[e]=eM(e))};var tn={};tn={};var ti="Object already initialized",to=k.TypeError,ta=k.WeakMap;if(e5||ek.state){var ts=ek.state||(ek.state=new ta);ts.get=ts.get,ts.has=ts.has,ts.set=ts.set,u=function(e,t){if(ts.has(e))throw new to(ti);return t.facade=e,ts.set(e,t),t},l=function(e){return ts.get(e)||{}},d=function(e){return ts.has(e)}}else{var tc=tt("state");tn[tc]=!0,u=function(e,t){if(ej(e,tc))throw new to(ti);return t.facade=e,eW(e,tc,t),t},l=function(e){return ej(e,tc)?e[tc]:{}},d=function(e){return ej(e,tc)}}var tu=(e6={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!Y(t)||(r=l(t)).type!==e)throw new to("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e6.get,tp=String,tf=Object.defineProperty,th=H("".slice),tg=H("".replace),tv=H([].join),tm=S&&!$(function(){return 8!==tf(function(){},"length",{value:8}).length}),ty=String(String).split("String"),tb=e2=function(e,t,r){"Symbol("===th(tp(t),0,7)&&(t="["+tg(tp(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ej(e,"name")||e7&&e.name!==t)&&(S?tf(e,"name",{value:t,configurable:!0}):e.name=t),tm&&r&&ej(r,"arity")&&e.length!==r.arity&&tf(e,"length",{value:r.arity});try{r&&ej(r,"constructor")&&r.constructor?S&&tf(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tu(e);return ej(n,"source")||(n.source=tv(ty,"string"==typeof t?t:"")),e};Function.prototype.toString=tb(function(){return Q(this)&&tl(this).source||e3(this)},"toString"),e1=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Q(r)&&e2(r,o,n),n.global)i?e[t]=r:eE(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var t_={},tw={},tk={},tE={},tS={},t$={},tj=Math.ceil,tF=Math.floor;t$=Math.trunc||function(e){var t=+e;return(t>0?tF:tj)(t)},tS=function(e){var t=+e;return t!=t||0===t?0:t$(t)};var tO=Math.max,tL=Math.min;tE=function(e,t){var r=tS(e);return r<0?tO(r+t,0):tL(r,t)};var tM={},tP={},tT=Math.min;tP=function(e){return e>0?tT(tS(e),9007199254740991):0},tM=function(e){return tP(e.length)};var tx=function(e){return function(t,r,n){var i,o=T(t),a=tM(o),s=tE(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tH={includes:tx(!0),indexOf:tx(!1)}.indexOf,tI=H([].push);tk=function(e,t){var r,n=T(e),i=0,o=[];for(r in n)!ej(tn,r)&&ej(n,r)&&tI(o,r);for(;t.length>i;)ej(n,r=t[i++])&&(~tH(o,r)||tI(o,r));return o};var tq=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tk(e,tq)},f=Object.getOwnPropertySymbols;var tA=H([].concat);tw=et("Reflect","ownKeys")||function(e){var t=p(eB(e));return f?tA(t,f(e)):t},t_=function(e,t,r){for(var n=tw(t),o=0;o<n.length;o++){var a=n[o];ej(e,a)||r&&ej(r,a)||c(e,a,i(t,a))}};var tN={},tC=/#|\.prototype\./,tD=function(e,t){var r=tU[tR(e)];return r===tW||r!==tz&&(Q(t)?$(t):!!t)},tR=tD.normalize=function(e){return String(e).replace(tC,".").toLowerCase()},tU=tD.data={},tz=tD.NATIVE="N",tW=tD.POLYFILL="P";tN=tD,w=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?k:l?k[c]||eE(c,{}):(k[c]||{}).prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tN(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;t_(a,o)}(e.sham||o&&o.sham)&&eW(a,"sham",!0),e1(r,n,a,e)}};var tG={},tB={},tJ=Function.prototype,tY=tJ.apply,tQ=tJ.call;tB="object"==typeof Reflect&&Reflect.apply||(F?tQ.bind(tY):function(){return tQ.apply(tY,arguments)});var tV={},tK={},tX=(tK=function(e){if("Function"===N(e))return H(e)})(tK.bind);tV=function(e,t){return eh(e),void 0===t?e:F?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=et("document","documentElement");var t0={};t0=H([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw new t2("Not enough arguments");return e};var t4={};t4=/(?:ipad|iphone|ipod).*applewebkit/i.test(ea);var t9={};t9="process"===N(k.process);var t7=k.setImmediate,t3=k.clearImmediate,t8=k.process,t6=k.Dispatch,t5=k.Function,re=k.MessageChannel,rt=k.String,rr=0,rn={},ri="onreadystatechange";$(function(){h=k.location});var ro=function(e){if(ej(rn,e)){var t=rn[e];delete rn[e],t()}},ra=function(e){return function(){ro(e)}},rs=function(e){ro(e.data)},rc=function(e){k.postMessage(rt(e),h.protocol+"//"+h.host)};t7&&t3||(t7=function(e){t1(arguments.length,1);var t=Q(e)?e:t5(e),r=t0(arguments,1);return rn[++rr]=function(){tB(t,void 0,r)},g(rr),rr},t3=function(e){delete rn[e]},t9?g=function(e){t8.nextTick(ra(e))}:t6&&t6.now?g=function(e){t6.now(ra(e))}:re&&!t4?(m=(v=new re).port2,v.port1.onmessage=rs,g=tV(m.postMessage,m)):k.addEventListener&&Q(k.postMessage)&&!k.importScripts&&h&&"file:"!==h.protocol&&!$(rc)?(g=rc,k.addEventListener("message",rs,!1)):g=ri in eD("script")?function(e){tZ.appendChild(eD("script"))[ri]=function(){tZ.removeChild(this),ro(e)}}:function(e){setTimeout(ra(e),0)});var ru=(tG={set:t7,clear:t3}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==ru},{clearImmediate:ru});var rl=tG.set,rd={},rp={};rp="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rf=k.Function,rh=/MSIE .\./.test(ea)||rp&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rd=function(e,t){var r=t?2:1;return rh?function(n,i){var o=t1(arguments.length,1)>r,a=Q(n)?n:rf(n),s=o?t0(arguments,r):[],c=o?function(){tB(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rg=k.setImmediate?rd(rl,!1):rl;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rg},{setImmediate:rg});var rv={};rv=new URL("icons.c14567a0.svg",import.meta.url).toString();class rm{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}update(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}renderSpinner=function(){let e=` <div class="spinner">
      <svg>
        <use href="${_(rv)}#icon-loader">hjgjhgjhg</use>
      </svg>
    </div> `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){let t=` <div class="error">
              <div>
                <svg>
                  <use href="${_(rv)}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${e}</p>
            </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=` <div class="message">
              <div>
                <svg>
                  <use href="${_(rv)}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${e}</p>
            </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},y=Fraction;class ry extends rm{_parentElement=document.querySelector(".recipe");_errorMessage="we couldnot find that recipe ,please try another one ";addHandlerRendeer(e){["load","hashchange"].forEach(t=>window.addEventListener(t,e))}addHanlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerBookMarked(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`<figure class="recipe__fig">
    <img src="${this._data.imageUrl}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${_(rv)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${_(rv)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to ="${this._data.servings-1}">
          <svg>
            <use href="${_(rv)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to ="${this._data.servings+1}">
          <svg>
            <use href="${_(rv)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
    <svg>
      <use href="${_(rv)}#icon-user"></use>
    </svg>
  </div>
    
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${_(rv)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map(this._generateMarkupIngrediant).join("")}
        </ul>
        </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${_(rv)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`}_generateMarkupIngrediant(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${_(rv)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
        pasta
      </div>
      </li>`}}var rb=new ry;class r_{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rw=new r_,rk=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(a=new F(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(O([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function O(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rk}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rk:Function("r","regeneratorRuntime = r")(rk)}const rE="https://forkify-api.herokuapp.com/api/v2/recipes",rS="d7e9fa76-71bd-44c9-af24-f578c8ee0744",r$=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${n.message} (${n.status})`);return i}catch(e){throw e}},rj={recipe:{},search:{query:"",results:[],page:1,resultPerPage:15},bookmarks:[]},rF=async function(e){try{let{recipe:t}=(await r$(`${rE}/${e}?key=${rS}`)).data;console.log(t),rj.recipe={id:t.id,ingredients:t.ingredients,sourceUrl:t.source_url,imageUrl:t.image_url,publisher:t.publisher,servings:t.servings,title:t.title,cookingTime:t.cooking_time,...t.key&&{key:t.key}},rj.bookmarks.some(t=>t.id===e)?rj.recipe.bookmarked=!0:rj.recipe.bookmarked=!1}catch(e){throw console.error(`${e}\u{1F926}\u{200D}\u{2640}\u{FE0F}\u{1F926}\u{200D}\u{2640}\u{FE0F}\u{1F926}\u{200D}\u{2640}\u{FE0F}`),e}},rO=async function(e){try{rj.search.query=e;let t=await r$(`${rE}?search=${e}&key=${rS}`);console.log(t),rj.search.results=t.data.recipes.map(e=>({id:e.id,imageUrl:e.image_url,publisher:e.publisher,title:e.title,...e.key&&{key:e.key}})),rj.search.page=1}catch(e){throw console.error(e),e}},rL=function(e=rj.search.page){rj.search.page=e;let t=(e-1)*rj.search.resultPerPage,r=e*rj.search.resultPerPage;return rj.search.results.slice(t,r)},rM=function(e){rj.recipe.ingredients.forEach(t=>{t.quantity=e*t.quantity/rj.recipe.servings}),rj.recipe.servings=e},rP=function(){localStorage.setItem("bookmarks",JSON.stringify(rj.bookmarks))},rT=function(e){rj.bookmarks.push(e),e.id===rj.recipe.id&&(rj.recipe.bookmarked=!0),rP()},rx=function(e){let t=rj.bookmarks.findIndex(t=>t.id===e);rj.bookmarks.splice(t,1),e===rj.recipe.id&&(rj.recipe.bookmarked=!1),rP()};!function(){let e=localStorage.getItem("bookmarks");e&&(rj.bookmarks=JSON.parse(e))}();const rH=async function(e){try{console.log(e);let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");console.log(t);let[r,n,i]=t;if(3!==t.length)throw Error("wrong ingrediant format ! please use correct format");return{quantity:r?+r:null,unit:n,description:i}});console.log(t);let r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:e.cookingTime,id:e.id,servings:e.servings,ingredients:t},n=await r$(`${rE}?key=${rS}`,r);console.log(n);let{recipe:i}=n.data;rj.recipe={id:i.id,ingredients:i.ingredients,sourceUrl:i.source_url,imageUrl:i.image_url,publisher:i.publisher,servings:i.servings,title:i.title,cookingTime:i.cooking_time,...i.key&&{key:i.key}},console.log(rj.recipe),rT(rj.recipe)}catch(e){throw e}};var rI={};rI=new URL("icons.c14567a0.svg",import.meta.url).toString();class rq extends rm{_parentElement=document.querySelector(".results");_errorMessage="you don't search for recipe yet!";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`  <li class="preview">
    <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
      <figure class="preview__fig">
        <img src="${e.imageUrl}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${e.title}</h4>
        <p class="preview__publisher">${e.publisher}</p>
        <div class="preview__user-generated ${e.key?"":"hidden"}">
        <svg>
          <use href="${_(rI)}#icon-user"></use>
        </svg>
      </div>
      </div>
    </a>
  </li>`}}var rA=new rq;class rN extends rm{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){console.log(this._data);let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultPerPage);return(console.log(t),1===e&&t>1)?` <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
          <use href="${_(rv)}#icon-arrow-right"></use>
        </svg>
      </button>`:e===t&&t>1?`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${_(rv)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>`:e<t?`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${_(rv)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
          <use href="${_(rv)}#icon-arrow-right"></use>
        </svg>
      </button>
      `:void 0}}var rC=new rN;class rD extends rm{_parentElement=document.querySelector(".bookmarks__list");_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}addHandlerRender(e){window.addEventListener("load",e)}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`  <li class="preview">
    <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
      <figure class="preview__fig">
        <img src="${e.imageUrl}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${e.title}</h4>
        <p class="preview__publisher">${e.publisher}</p>
        <div class="preview__user-generated ${e.key?"":"hidden"}">
        <svg>
          <use href="${_(rI)}#icon-user"></use>
        </svg>
      </div>
      </div>
      
    </a>
  </li>`}}var rR=new rD;class rU extends rm{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnClose=document.querySelector(".btn--close-modal");_btnOpen=document.querySelector(".nav__btn--add-recipe");constructor(){super(),this._addHanlerShowWindow(),this._addHanlerHideWindow()}toggleWindow(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_addHanlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHanlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHanlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}}var rz=new rU;const rW=document.querySelector(".recipe"),rG=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rb.renderSpinner(rW),rA.update(rL()),rR.update(rj.bookmarks),await rF(e),rb.render(rj.recipe)}catch(e){rb.renderError()}},rB=async function(){try{let e=rw.getQuery();if(!e)return;await rO(e),rA.render(rL()),rC.render(rj.search)}catch(e){console.error(e)}},rJ=async function(e){try{rz.renderSpinner(),await rH(e),rb.render(rj.recipe),rR.render(rj.bookmarks),window.history.pushState(null,"",`#${rj.recipe.id}`),rz.renderMessage("Recipe was successfully uploaded"),setTimeout(function(){rz.toggleWindow()},2500)}catch(e){console.error(e),rz.renderError(e.message)}};rR.addHandlerRender(function(){rR.render(rj.bookmarks)}),rb.addHandlerRendeer(rG),rb.addHanlerUpdateServings(function(e){rM(e),rb.update(rj.recipe)}),rb.addHandlerBookMarked(function(){rj.recipe.bookmarked?rx(rj.recipe.id):(rT(rj.recipe),console.log(rj.bookmarks)),rb.update(rj.recipe),rR.render(rj.bookmarks)}),rw.addHandlerSearch(rB),rC.addHandlerClick(function(e){rA.render(rL(e)),rC.render(rj.search)}),rz.addHanlerUpload(rJ);
//# sourceMappingURL=index.e8094589.js.map
