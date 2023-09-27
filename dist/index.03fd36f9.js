var e,t,r,n,i,o,a,s,c,u,l,d,p,h,f,g,m,v,y,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=b.parcelRequire3a11;null==E&&((E=function(e){if(e in w)return w[e].exports;if(e in k){var t=k[e];delete k[e];var r={id:e,exports:{}};return w[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){k[e]=t},b.parcelRequire3a11=E);var S={},F={},O=function(e){return e&&e.Math===Math&&e};F=O("object"==typeof globalThis&&globalThis)||O("object"==typeof window&&window)||O("object"==typeof self&&self)||O("object"==typeof b&&b)||function(){return this}()||F||Function("return this")();var j={},L={};j=!(L=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var M={},x={};x=!L(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var P=Function.prototype.call;M=x?P.bind(P):function(){return P.apply(P,arguments)};var $={}.propertyIsEnumerable,T=Object.getOwnPropertyDescriptor;o=T&&!$.call({1:2},1)?function(e){var t=T(this,e);return!!t&&t.enumerable}:$;var q={};q=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var I={},D={},H={},N=Function.prototype,A=N.call,R=x&&N.bind.bind(A,A),C={},U=(H=x?R:function(e){return function(){return A.apply(e,arguments)}})({}.toString),W=H("".slice);C=function(e){return W(U(e),8,-1)};var z=Object,B=H("".split);D=L(function(){return!z("z").propertyIsEnumerable(0)})?function(e){return"String"===C(e)?B(e,""):z(e)}:z;var G={},Q={};Q=function(e){return null==e};var J=TypeError;G=function(e){if(Q(e))throw J("Can't call method on "+e);return e},I=function(e){return D(G(e))};var Y={},V={},K={},X={},Z={},ee="object"==typeof document&&document.all,et=(Z={all:ee,IS_HTMLDDA:void 0===ee&&void 0!==ee}).all;X=Z.IS_HTMLDDA?function(e){return"function"==typeof e||e===et}:function(e){return"function"==typeof e};var er=Z.all;K=Z.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:X(e)||e===er}:function(e){return"object"==typeof e?null!==e:X(e)};var en={},ei={};ei=function(e,t){var r;return arguments.length<2?(r=F[e],X(r)?r:void 0):F[e]&&F[e][t]};var eo={};eo=H({}.isPrototypeOf);var ea={},es={},ec={},eu={};eu="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var el=F.process,ed=F.Deno,ep=el&&el.versions||ed&&ed.version,eh=ep&&ep.v8;eh&&(s=(a=eh.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&eu&&(!(a=eu.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=eu.match(/Chrome\/(\d+)/))&&(s=+a[1]),ec=s;var ef=F.String;ea=(es=!!Object.getOwnPropertySymbols&&!L(function(){var e=Symbol("symbol detection");return!ef(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&ec&&ec<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eg=Object;en=ea?function(e){return"symbol"==typeof e}:function(e){var t=ei("Symbol");return X(t)&&eo(t.prototype,eg(e))};var em={},ev={},ey={},eb=String;ey=function(e){try{return eb(e)}catch(e){return"Object"}};var e_=TypeError;ev=function(e){if(X(e))return e;throw e_(ey(e)+" is not a function")},em=function(e,t){var r=e[t];return Q(r)?void 0:ev(r)};var ew={},ek=TypeError;ew=function(e,t){var r,n;if("string"===t&&X(r=e.toString)&&!K(n=M(r,e))||X(r=e.valueOf)&&!K(n=M(r,e))||"string"!==t&&X(r=e.toString)&&!K(n=M(r,e)))return n;throw ek("Can't convert object to primitive value")};var eE={},eS={};eS=!1;var eF={},eO={},ej=Object.defineProperty;eO=function(e,t){try{ej(F,e,{value:t,configurable:!0,writable:!0})}catch(r){F[e]=t}return t};var eL="__core-js_shared__";eF=F[eL]||eO(eL,{}),(eE=function(e,t){return eF[e]||(eF[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.2",mode:eS?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var eM={},ex={},eP=Object;ex=function(e){return eP(G(e))};var e$=H({}.hasOwnProperty);eM=Object.hasOwn||function(e,t){return e$(ex(e),t)};var eT={},eq=0,eI=Math.random(),eD=H(1..toString);eT=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eD(++eq+eI,36)};var eH=F.Symbol,eN=eE("wks"),eA=ea?eH.for||eH:eH&&eH.withoutSetter||eT,eR=TypeError,eC=(eM(eN,e="toPrimitive")||(eN[e]=es&&eM(eH,e)?eH[e]:eA("Symbol."+e)),eN[e]);V=function(e,t){if(!K(e)||en(e))return e;var r,n=em(e,eC);if(n){if(void 0===t&&(t="default"),r=M(n,e,t),!K(r)||en(r))return r;throw eR("Can't convert object to primitive value")}return void 0===t&&(t="number"),ew(e,t)},Y=function(e){var t=V(e,"string");return en(t)?t:t+""};var eU={},eW={},ez=F.document,eB=K(ez)&&K(ez.createElement);eW=function(e){return eB?ez.createElement(e):{}},eU=!j&&!L(function(){return 7!==Object.defineProperty(eW("div"),"a",{get:function(){return 7}}).a});var eG=Object.getOwnPropertyDescriptor;i=j?eG:function(e,t){if(e=I(e),t=Y(t),eU)try{return eG(e,t)}catch(e){}if(eM(e,t))return q(!M(o,e,t),e[t])};var eQ={},eJ={};eJ=j&&L(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eY={},eV=String,eK=TypeError;eY=function(e){if(K(e))return e;throw eK(eV(e)+" is not an object")};var eX=TypeError,eZ=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,e1="enumerable",e2="configurable",e3="writable";c=j?eJ?function(e,t,r){if(eY(e),t=Y(t),eY(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e3 in r&&!r[e3]){var n=e0(e,t);n&&n[e3]&&(e[t]=r.value,r={configurable:e2 in r?r[e2]:n[e2],enumerable:e1 in r?r[e1]:n[e1],writable:!1})}return eZ(e,t,r)}:eZ:function(e,t,r){if(eY(e),t=Y(t),eY(r),eU)try{return eZ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eX("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eQ=j?function(e,t,r){return c(e,t,q(1,r))}:function(e,t,r){return e[t]=r,e};var e4={},e5={},e7=Function.prototype,e8=j&&Object.getOwnPropertyDescriptor,e6=eM(e7,"name")&&(!j||j&&e8(e7,"name").configurable),e9={},te=H(Function.toString);X(eF.inspectSource)||(eF.inspectSource=function(e){return te(e)}),e9=eF.inspectSource;var tt={},tr={},tn=F.WeakMap;tr=X(tn)&&/native code/.test(String(tn));var ti={},to=eE("keys");ti=function(e){return to[e]||(to[e]=eT(e))};var ta={};ta={};var ts="Object already initialized",tc=F.TypeError,tu=F.WeakMap;if(tr||eF.state){var tl=eF.state||(eF.state=new tu);tl.get=tl.get,tl.has=tl.has,tl.set=tl.set,u=function(e,t){if(tl.has(e))throw tc(ts);return t.facade=e,tl.set(e,t),t},l=function(e){return tl.get(e)||{}},d=function(e){return tl.has(e)}}else{var tp=ti("state");ta[tp]=!0,u=function(e,t){if(eM(e,tp))throw tc(ts);return t.facade=e,eQ(e,tp,t),t},l=function(e){return eM(e,tp)?e[tp]:{}},d=function(e){return eM(e,tp)}}var th=(tt={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!K(t)||(r=l(t)).type!==e)throw tc("Incompatible receiver, "+e+" required");return r}}}).enforce,tf=tt.get,tg=String,tm=Object.defineProperty,tv=H("".slice),ty=H("".replace),tb=H([].join),t_=j&&!L(function(){return 8!==tm(function(){},"length",{value:8}).length}),tw=String(String).split("String"),tk=e5=function(e,t,r){"Symbol("===tv(tg(t),0,7)&&(t="["+ty(tg(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eM(e,"name")||e6&&e.name!==t)&&(j?tm(e,"name",{value:t,configurable:!0}):e.name=t),t_&&r&&eM(r,"arity")&&e.length!==r.arity&&tm(e,"length",{value:r.arity});try{r&&eM(r,"constructor")&&r.constructor?j&&tm(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=th(e);return eM(n,"source")||(n.source=tb(tw,"string"==typeof t?t:"")),e};Function.prototype.toString=tk(function(){return X(this)&&tf(this).source||e9(this)},"toString"),e4=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(X(r)&&e5(r,o,n),n.global)i?e[t]=r:eO(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tE={},tS={},tF={},tO={},tj={},tL={},tM=Math.ceil,tx=Math.floor;tL=Math.trunc||function(e){var t=+e;return(t>0?tx:tM)(t)},tj=function(e){var t=+e;return t!=t||0===t?0:tL(t)};var tP=Math.max,t$=Math.min;tO=function(e,t){var r=tj(e);return r<0?tP(r+t,0):t$(r,t)};var tT={},tq={},tI=Math.min;tq=function(e){return e>0?tI(tj(e),9007199254740991):0},tT=function(e){return tq(e.length)};var tD=function(e){return function(t,r,n){var i,o=I(t),a=tT(o),s=tO(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tH={includes:tD(!0),indexOf:tD(!1)}.indexOf,tN=H([].push);tF=function(e,t){var r,n=I(e),i=0,o=[];for(r in n)!eM(ta,r)&&eM(n,r)&&tN(o,r);for(;t.length>i;)eM(n,r=t[i++])&&(~tH(o,r)||tN(o,r));return o};var tA=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tF(e,tA)},h=Object.getOwnPropertySymbols;var tR=H([].concat);tS=ei("Reflect","ownKeys")||function(e){var t=p(eY(e));return h?tR(t,h(e)):t},tE=function(e,t,r){for(var n=tS(t),o=0;o<n.length;o++){var a=n[o];eM(e,a)||r&&eM(r,a)||c(e,a,i(t,a))}};var tC={},tU=/#|\.prototype\./,tW=function(e,t){var r=tB[tz(e)];return r===tQ||r!==tG&&(X(t)?L(t):!!t)},tz=tW.normalize=function(e){return String(e).replace(tU,".").toLowerCase()},tB=tW.data={},tG=tW.NATIVE="N",tQ=tW.POLYFILL="P";tC=tW,S=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?F:l?F[c]||eO(c,{}):(F[c]||{}).prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tC(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tE(a,o)}(e.sham||o&&o.sham)&&eQ(a,"sham",!0),e4(r,n,a,e)}};var tJ={},tY={},tV=Function.prototype,tK=tV.apply,tX=tV.call;tY="object"==typeof Reflect&&Reflect.apply||(x?tX.bind(tK):function(){return tX.apply(tK,arguments)});var tZ={},t0={},t1=(t0=function(e){if("Function"===C(e))return H(e)})(t0.bind);tZ=function(e,t){return ev(e),void 0===t?e:x?t1(e,t):function(){return e.apply(t,arguments)}};var t2={};t2=ei("document","documentElement");var t3={};t3=H([].slice);var t4={},t5=TypeError;t4=function(e,t){if(e<t)throw t5("Not enough arguments");return e};var t7={};t7=/(?:ipad|iphone|ipod).*applewebkit/i.test(eu);var t8={};t8="process"===C(F.process);var t6=F.setImmediate,t9=F.clearImmediate,re=F.process,rt=F.Dispatch,rr=F.Function,rn=F.MessageChannel,ri=F.String,ro=0,ra={},rs="onreadystatechange";L(function(){f=F.location});var rc=function(e){if(eM(ra,e)){var t=ra[e];delete ra[e],t()}},ru=function(e){return function(){rc(e)}},rl=function(e){rc(e.data)},rd=function(e){F.postMessage(ri(e),f.protocol+"//"+f.host)};t6&&t9||(t6=function(e){t4(arguments.length,1);var t=X(e)?e:rr(e),r=t3(arguments,1);return ra[++ro]=function(){tY(t,void 0,r)},g(ro),ro},t9=function(e){delete ra[e]},t8?g=function(e){re.nextTick(ru(e))}:rt&&rt.now?g=function(e){rt.now(ru(e))}:rn&&!t7?(v=(m=new rn).port2,m.port1.onmessage=rl,g=tZ(v.postMessage,v)):F.addEventListener&&X(F.postMessage)&&!F.importScripts&&f&&"file:"!==f.protocol&&!L(rd)?(g=rd,F.addEventListener("message",rl,!1)):g=rs in eW("script")?function(e){t2.appendChild(eW("script"))[rs]=function(){t2.removeChild(this),rc(e)}}:function(e){setTimeout(ru(e),0)});var rp=(tJ={set:t6,clear:t9}).clear;S({global:!0,bind:!0,enumerable:!0,forced:F.clearImmediate!==rp},{clearImmediate:rp});var rh=tJ.set,rf={},rg={};rg="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rm=F.Function,rv=/MSIE .\./.test(eu)||rg&&((t=F.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rf=function(e,t){var r=t?2:1;return rv?function(n,i){var o=t4(arguments.length,1)>r,a=X(n)?n:rm(n),s=o?t3(arguments,r):[],c=o?function(){tY(a,this,s)}:a;return t?e(c,i):e(c)}:e};var ry=F.setImmediate?rf(rh,!1):rh;S({global:!0,bind:!0,enumerable:!0,forced:F.setImmediate!==ry},{setImmediate:ry});var rb=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return i(c,"_invoke",{value:(a=new j(o||[]),s=p,function(r,i){if(s===h)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=h;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?f:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=f,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",f="completed",g={};function m(){}function v(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function L(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return v.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rb}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rb:Function("r","regeneratorRuntime = r")(rb)}const r_="https://forkify-api.herokuapp.com/api/v2/recipes/",rw="8b6e6508-8a4e-453a-a653-c4757006865d",rk=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (error ${n.status})`);return i}catch(e){throw e}},rE={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},rS=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rF=async function(e){try{let t=await rk(`${r_}${e}?key=${rw}`);rE.recipe=rS(t),rE.bookmarks.some(t=>t.id===e)?rE.recipe.bookmarked=!0:rE.recipe.bookmarked=!1,console.log(rE.recipe)}catch(e){throw console.error(`${e} 💣💣💣`),e}},rO=async function(e){try{rE.search.query=e;let t=await rk(`${r_}?search=${e}&key=${rw}`);console.log(t),rE.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rE.search.page=1}catch(e){throw console.error(`${e} 💣💣💣`),e}},rj=function(e=rE.search.page){rE.search.page=e;let t=(e-1)*rE.search.resultsPerPage,r=e*rE.search.resultsPerPage;return rE.search.results.slice(t,r)},rL=function(e){rE.recipe.ingredients.forEach(t=>{t.quantity=t.quantity/rE.recipe.servings*e}),rE.recipe.servings=e},rM=function(){localStorage.setItem("bookmarks",JSON.stringify(rE.bookmarks))},rx=function(e){rE.bookmarks.push(e),e.id===rE.recipe.id&&(rE.recipe.bookmarked=!0),rM()},rP=function(e){let t=rE.bookmarks.findIndex(t=>t.id===e);rE.bookmarks.splice(t,1),e===rE.recipe.id&&(rE.recipe.bookmarked=!1),rM()};!function(){let e=localStorage.getItem("bookmarks");e&&(rE.bookmarks=JSON.parse(e))}(),console.log(rE.bookmarks);const r$=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format ⛔");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rk(`${r_}?key=${rw}`,r);rE.recipe=rS(n),rx(rE.recipe)}catch(e){throw e}};var rT={};rT=new URL(E("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rq{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
  <div class="spinner">
    <svg>
      <use href="${_(rT)}#icon-loader"></use>
    </svg>
  </div>
  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
    <div class="error">
      <div>
        <svg>
          <use href="${_(rT)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
    <div class="message">
      <div>
        <svg>
          <use href="${_(rT)}#icon-smile"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},y=Fraction;class rI extends rq{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;0!=+n&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_(rT)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_(rT)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings-1}>
                <svg>
                  <use href="${_(rT)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings+1}>
                <svg>
                  <use href="${_(rT)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${_(rT)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${_(rT)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
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
              <use href="${_(rT)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateMarkupIngredient(e){return`
              <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${_(rT)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>
              `}}var rD=new rI;class rH{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){let t=this.#e.querySelector(".search__btn");t.addEventListener("click",function(t){t.preventDefault(),e()})}}var rN=new rH,rA=new class extends rq{_parentElement="";_generateMarkup(e){let t=window.location.hash.slice(1);return`
    <li class="preview">
      <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
        <figure class="preview__fig">
          <img src="${this._data.image}" alt="${this._data.title}" />
        </figure>
              <div class="preview__data">
          <h4 class="preview__title">${this._data.title}</h4>
          <p class="preview__publisher">${this._data.publisher}</p>
          <div class="preview__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${_(rT)}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
    `}};class rR extends rq{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again!";_message="";_generateMarkup(){return this._data.map(e=>rA.render(e,!1)).join("")}}var rC=new rR;class rU extends rq{_parentElement=document.querySelector(".pagination");_errorMessage="";addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_curPage(){return this._data.page}_generateMarkupBtnPrev(){return`
          <button data-goto=${this._curPage()-1} class="btn--inline pagination__btn--prev">
           <svg class="search__icon">
            <use href="${_(rT)}#icon-arrow-left"></use>
           </svg>
           <span>Page ${this._curPage()-1}</span>
          </button>
          `}_generateMarkupBtnNext(){return`
         <button data-goto=${this._curPage()+1} class="btn--inline pagination__btn--next">
          <span>Page ${this._curPage()+1}</span>
          <svg class="search__icon">
           <use href="${_(rT)}#icon-arrow-right"></use>
          </svg>
         </button>
          `}_generateMarkup(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===this._curPage()&&e>1?this._generateMarkupBtnNext():this._curPage()<e?[this._generateMarkupBtnPrev(),this._generateMarkupBtnNext()].join(""):this._curPage()===e&&e>1?this._generateMarkupBtnPrev():""}}var rW=new rU;class rz extends rq{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rA.render(e,!1)).join("")}}var rB=new rz;class rG extends rq{_parentElement=document.querySelector(".upload");_message="Recipe successfully uploaded \uD83D\uDD12";_overlay=document.querySelector(".overlay");_window=document.querySelector(".add-recipe-window");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this)),[this._btnClose,this._overlay].forEach(e=>e.addEventListener("click",this._reRenderForm.bind(this)))}addHandlerUplaod(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);console.log(r),console.log(n),e(n)})}_reRenderForm(){let e=this._generateMarkup();this._window.style.opacity="0",setTimeout(()=>{this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e),this._window.style.opacity="1"},550)}_generateMarkup(){return`
      <form class="upload">
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST23" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST23" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST23" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST23" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>
        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>
        <button class="btn upload__btn">
          <svg>
            <use href="src/img/icons.svg#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>
    `}}var rQ=new rG;const rJ=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rD.renderSpinner(),rC.update(rj()),rB.update(rE.bookmarks),await rF(e),rD.render(rE.recipe)}catch(e){if(rF)return console.error(e),rD.renderError(e);rD.renderError(),console.error(e)}},rY=async function(){try{rC.renderSpinner();let e=rN.getQuery();if(!e)return;await rO(e),rC.render(rj()),rW.render(rE.search)}catch(e){rC.renderError(),console.err(e)}},rV=async function(e){try{rQ.renderSpinner(),await r$(e),console.log(rE.recipe),rD.render(rE.recipe),rQ.renderMessage(),rB.render(rE.bookmarks),window.history.pushState(null,"",`#${rE.recipe.id}`),setTimeout(function(){rQ.toggleWindow()},2e3),setTimeout(function(){rQ._reRenderForm()},2300)}catch(e){console.error(e),rQ.renderError(e)}};rB.addHandlerRender(function(){rB.render(rE.bookmarks)}),rD.addHandlerRender(rJ),rD.addHandlerUpdateServings(function(e){rL(e),rD.update(rE.recipe)}),rD.addHandlerAddBookmark(function(){rE.recipe.bookmarked?rP(rE.recipe.id):rx(rE.recipe),rD.update(rE.recipe),rB.render(rE.bookmarks)}),rN.addHandlerSearch(rY),rW.addHandlerClick(function(e){console.log("Pag Controller"),rC.render(rj(e)),rW.render(rE.search)}),rQ.addHandlerUplaod(rV);
//# sourceMappingURL=index.03fd36f9.js.map
