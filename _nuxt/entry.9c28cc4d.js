In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var N0=function(){},p5={},bf={},xf=null,Nf={mark:N0,measure:N0};try{typeof window<"u"&&(p5=window),typeof document<"u"&&(bf=document),typeof MutationObserver<"u"&&(xf=MutationObserver),typeof performance<"u"&&(Nf=performance)}catch{}var U$=p5.navigator||{},S0=U$.userAgent,y0=S0===void 0?"":S0,m2=p5,e1=bf,w0=xf,Z3=Nf;m2.document;var a2=!!e1.documentElement&&!!e1.head&&typeof e1.addEventListener=="function"&&typeof e1.createElement=="function",Sf=~y0.indexOf("MSIE")||~y0.indexOf("Trident/"),$3,K3,Y3,X3,J3,Y1="___FONT_AWESOME___",D6=16,yf="fa",wf="svg-inline--fa",S2="data-fa-i2svg",q6="data-fa-pseudo-element",I$="data-fa-pseudo-element-pending",V5="data-prefix",M5="data-icon",k0="fontawesome-i2svg",W$="async",j$=["HTML","HEAD","STYLE","SCRIPT"],kf=function(){try{return!0}catch{return!1}}(),a1="classic",n1="sharp",C5=[a1,n1];function _3(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[a1]}})}var C3=_3(($3={},v1($3,a1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),v1($3,n1,{fa:"solid",fass:"solid","fa-solid":"solid"}),$3)),d3=_3((K3={},v1(K3,a1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),v1(K3,n1,{solid:"fass"}),K3)),L3=_3((Y3={},v1(Y3,a1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),v1(Y3,n1,{fass:"fa-solid"}),Y3)),G$=_3((X3={},v1(X3,a1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),v1(X3,n1,{"fa-solid":"fass"}),X3)),Z$=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Af="fa-layers-text",$$=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,K$=_3((J3={},v1(J3,a1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),v1(J3,n1,{900:"fass"}),J3)),Pf=[1,2,3,4,5,6,7,8,9,10],Y$=Pf.concat([11,12,13,14,15,16,17,18,19,20]),X$=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],d2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},g3=new Set;Object.keys(d3[a1]).map(g3.add.bind(g3));Object.keys(d3[n1]).map(g3.add.bind(g3));var J$=[].concat(C5,T3(g3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",d2.GROUP,d2.SWAP_OPACITY,d2.PRIMARY,d2.SECONDARY]).concat(Pf.map(function(c){return"".concat(c,"x")})).concat(Y$.map(function(c){return"w-".concat(c)})),m3=m2.FontAwesomeConfig||{};function Q$(c){var a=e1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function cK(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(e1&&typeof e1.querySelector=="function"){var aK=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];aK.forEach(function(c){var a=H5(c,2),e=a[0],s=a[1],r=cK(Q$(e));r!=null&&(m3[s]=r)})}var Tf={styleDefault:"solid",familyDefault:"classic",cssPrefix:yf,replacementClass:wf,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};m3.familyPrefix&&(m3.cssPrefix=m3.familyPrefix);var G2=k(k({},Tf),m3);G2.autoReplaceSvg||(G2.observeMutations=!1);var T={};Object.keys(Tf).forEach(function(c){Object.defineProperty(T,c,{enumerable:!0,set:function(e){G2[c]=e,v3.forEach(function(s){return s(T)})},get:function(){return G2[c]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(a){G2.cssPrefix=a,v3.forEach(function(e){return e(T)})},get:function(){return G2.cssPrefix}});m2.FontAwesomeConfig=T;var v3=[];function eK(c){return v3.push(c),function(){v3.splice(v3.indexOf(c),1)}}var r2=D6,W1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sK(c){if(!(!c||!a2)){var a=e1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=e1.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=i)}return e1.head.insertBefore(a,s),c}}var rK="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function b3(){for(var c=12,a="";c-- >0;)a+=rK[Math.random()*62|0];return a}function J2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function d5(c){return c.classList?J2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function _f(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function iK(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(_f(c[e]),'" ')},"").trim()}function J4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function L5(c){return c.size!==W1.size||c.x!==W1.x||c.y!==W1.y||c.rotate!==W1.rotate||c.flipX||c.flipY}function nK(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},o={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:o}}function fK(c){var a=c.transform,e=c.width,s=e===void 0?D6:e,r=c.height,i=r===void 0?D6:r,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&Sf?l+="translate(".concat(a.x/r2-s/2,"em, ").concat(a.y/r2-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/r2,"em), calc(-50% + ").concat(a.y/r2,"em)) "):l+="translate(".concat(a.x/r2,"em, ").concat(a.y/r2,"em) "),l+="scale(".concat(a.size/r2*(a.flipX?-1:1),", ").concat(a.size/r2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var lK=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Bf(){var c=yf,a=wf,e=T.cssPrefix,s=T.replacementClass,r=lK;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(s))}return r}var A0=!1;function p6(){T.autoAddCss&&!A0&&(sK(Bf()),A0=!0)}var oK={mixout:function(){return{dom:{css:Bf,insertCss:p6}}},hooks:function(){return{beforeDOMElementCreation:function(){p6()},beforeI2svg:function(){p6()}}}},X1=m2||{};X1[Y1]||(X1[Y1]={});X1[Y1].styles||(X1[Y1].styles={});X1[Y1].hooks||(X1[Y1].hooks={});X1[Y1].shims||(X1[Y1].shims=[]);var _1=X1[Y1],Ff=[],tK=function c(){e1.removeEventListener("DOMContentLoaded",c),V4=1,Ff.map(function(a){return a()})},V4=!1;a2&&(V4=(e1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(e1.readyState),V4||e1.addEventListener("DOMContentLoaded",tK));function mK(c){!a2||(V4?setTimeout(c,0):Ff.push(c))}function B3(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?_f(c):"<".concat(a," ").concat(iK(s),">").concat(i.map(B3).join(""),"</").concat(a,">")}function P0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var vK=function(a,e){return function(s,r,i,n){return a.call(e,s,r,i,n)}},V6=function(a,e,s,r){var i=Object.keys(a),n=i.length,f=r!==void 0?vK(e,r):e,l,o,t;for(s===void 0?(l=1,t=a[i[0]]):(l=0,t=s);l<n;l++)o=i[l],t=f(t,a[o],o,a);return t};function zK(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function O6(c){var a=zK(c);return a.length===1?a[0].toString(16):null}function hK(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function T0(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function U6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=T0(a);typeof _1.hooks.addPack=="function"&&!r?_1.hooks.addPack(c,T0(a)):_1.styles[c]=k(k({},_1.styles[c]||{}),i),c==="fas"&&U6("fa",a)}var Q3,c4,a4,P2=_1.styles,uK=_1.shims,HK=(Q3={},v1(Q3,a1,Object.values(L3[a1])),v1(Q3,n1,Object.values(L3[n1])),Q3),g5=null,Rf={},Ef={},Df={},qf={},Of={},pK=(c4={},v1(c4,a1,Object.keys(C3[a1])),v1(c4,n1,Object.keys(C3[n1])),c4);function VK(c){return~J$.indexOf(c)}function MK(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!VK(r)?r:null}var Uf=function(){var a=function(i){return V6(P2,function(n,f,l){return n[l]=V6(f,i,{}),n},{})};Rf=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){r[l.toString(16)]=n})}return r}),Ef=a(function(r,i,n){if(r[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){r[l]=n})}return r}),Of=a(function(r,i,n){var f=i[2];return r[n]=n,f.forEach(function(l){r[l]=n}),r});var e="far"in P2||T.autoFetchSvg,s=V6(uK,function(r,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(r.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});Df=s.names,qf=s.unicodes,g5=Q4(T.styleDefault,{family:T.familyDefault})};eK(function(c){g5=Q4(c.styleDefault,{family:T.familyDefault})});Uf();function b5(c,a){return(Rf[c]||{})[a]}function CK(c,a){return(Ef[c]||{})[a]}function L2(c,a){return(Of[c]||{})[a]}function If(c){return Df[c]||{prefix:null,iconName:null}}function dK(c){var a=qf[c],e=b5("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function v2(){return g5}var x5=function(){return{prefix:null,iconName:null,rest:[]}};function Q4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?a1:e,r=C3[s][c],i=d3[s][c]||d3[s][r],n=c in _1.styles?c:null;return i||n||null}var _0=(a4={},v1(a4,a1,Object.keys(L3[a1])),v1(a4,n1,Object.keys(L3[n1])),a4);function c6(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},v1(a,a1,"".concat(T.cssPrefix,"-").concat(a1)),v1(a,n1,"".concat(T.cssPrefix,"-").concat(n1)),a),n=null,f=a1;(c.includes(i[a1])||c.some(function(o){return _0[a1].includes(o)}))&&(f=a1),(c.includes(i[n1])||c.some(function(o){return _0[n1].includes(o)}))&&(f=n1);var l=c.reduce(function(o,t){var m=MK(T.cssPrefix,t);if(P2[t]?(t=HK[f].includes(t)?G$[f][t]:t,n=t,o.prefix=t):pK[f].indexOf(t)>-1?(n=t,o.prefix=Q4(t,{family:f})):m?o.iconName=m:t!==T.replacementClass&&t!==i[a1]&&t!==i[n1]&&o.rest.push(t),!r&&o.prefix&&o.iconName){var u=n==="fa"?If(o.iconName):{},H=L2(o.prefix,o.iconName);u.prefix&&(n=null),o.iconName=u.iconName||H||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!P2.far&&P2.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},x5());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===n1&&(P2.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=L2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=v2()||"fas"),l}var LK=function(){function c(){_$(this,c),this.definitions={}}return B$(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=k(k({},e.definitions[f]||{}),n[f]),U6(f,n[f]);var l=L3[a1][f];l&&U6(l,n[f]),Uf()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var n=r[i],f=n.prefix,l=n.iconName,o=n.icon,t=o[2];e[f]||(e[f]={}),t.length>0&&t.forEach(function(m){typeof m=="string"&&(e[f][m]=o)}),e[f][l]=o}),e}}]),c}(),B0=[],T2={},D2={},gK=Object.keys(D2);function bK(c,a){var e=a.mixoutsTo;return B0=c,T2={},Object.keys(D2).forEach(function(s){gK.indexOf(s)===-1&&delete D2[s]}),B0.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),p4(r[n])==="object"&&Object.keys(r[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=r[n][f]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(n){T2[n]||(T2[n]=[]),T2[n].push(i[n])})}s.provides&&s.provides(D2)}),e}function I6(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=T2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(s))}),a}function y2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=T2[c]||[];r.forEach(function(i){i.apply(null,e)})}function J1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return D2[c]?D2[c].apply(null,a):void 0}function W6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||v2();if(!!a)return a=L2(e,a)||a,P0(Wf.definitions,e,a)||P0(_1.styles,e,a)}var Wf=new LK,xK=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,y2("noAuto")},NK={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return a2?(y2("beforeI2svg",a),J1("pseudoElements2svg",a),J1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,mK(function(){yK({autoReplaceSvgRoot:e}),y2("watch",a)})}},SK={icon:function(a){if(a===null)return null;if(p4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:L2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=Q4(a[0]);return{prefix:s,iconName:L2(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(T.cssPrefix,"-"))>-1||a.match(Z$))){var r=c6(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||v2(),iconName:L2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=v2();return{prefix:i,iconName:L2(i,a)||a}}}},N1={noAuto:xK,config:T,dom:NK,parse:SK,library:Wf,findIconDefinition:W6,toHtml:B3},yK=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?e1:e;(Object.keys(_1.styles).length>0||T.autoFetchSvg)&&a2&&T.autoReplaceSvg&&N1.dom.i2svg({node:s})};function a6(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return B3(s)})}}),Object.defineProperty(c,"node",{get:function(){if(!!a2){var s=e1.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function wK(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(L5(n)&&e.found&&!s.found){var f=e.width,l=e.height,o={x:f/l/2,y:.5};r.style=J4(k(k({},i),{},{"transform-origin":"".concat(o.x+n.x/16,"em ").concat(o.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function kK(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(T.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},r),{},{id:n}),children:s}]}]}function N5(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,o=c.maskId,t=c.titleId,m=c.extra,u=c.watchable,H=u===void 0?!1:u,M=s.found?s:e,N=M.width,R=M.height,p=r==="fak",h=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(j){return m.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(m.classes).join(" "),C={children:[],attributes:k(k({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:h,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(R)})},w=p&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/R*16*.0625,"em")}:{};H&&(C.attributes[S2]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(t||b3())},children:[l]}),delete C.attributes.title);var A=k(k({},C),{},{prefix:r,iconName:i,main:e,mask:s,maskId:o,transform:n,symbol:f,styles:k(k({},w),m.styles)}),D=s.found&&e.found?J1("generateAbstractMask",A)||{children:[],attributes:{}}:J1("generateAbstractIcon",A)||{children:[],attributes:{}},q=D.children,F=D.attributes;return A.children=q,A.attributes=F,f?kK(A):wK(A)}function F0(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,o=k(k(k({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(o[S2]="");var t=k({},n.styles);L5(r)&&(t.transform=fK({transform:r,startCentered:!0,width:e,height:s}),t["-webkit-transform"]=t.transform);var m=J4(t);m.length>0&&(o.style=m);var u=[];return u.push({tag:"span",attributes:o,children:[a]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function AK(c){var a=c.content,e=c.title,s=c.extra,r=k(k(k({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=J4(s.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var M6=_1.styles;function j6(c){var a=c[0],e=c[1],s=c.slice(4),r=H5(s,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(d2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(d2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(d2.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var PK={found:!1,width:512,height:512};function TK(c,a){!kf&&!T.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function G6(c,a){var e=a;return a==="fa"&&T.styleDefault!==null&&(a=v2()),new Promise(function(s,r){if(J1("missingIconAbstract"),e==="fa"){var i=If(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&M6[a]&&M6[a][c]){var n=M6[a][c];return s(j6(n))}TK(c,a),s(k(k({},PK),{},{icon:T.showMissingIcons&&c?J1("missingIconAbstract")||{}:{}}))})}var R0=function(){},Z6=T.measurePerformance&&Z3&&Z3.mark&&Z3.measure?Z3:{mark:R0,measure:R0},e3='FA "6.2.1"',_K=function(a){return Z6.mark("".concat(e3," ").concat(a," begins")),function(){return jf(a)}},jf=function(a){Z6.mark("".concat(e3," ").concat(a," ends")),Z6.measure("".concat(e3," ").concat(a),"".concat(e3," ").concat(a," begins"),"".concat(e3," ").concat(a," ends"))},S5={begin:_K,end:jf},i4=function(){};function E0(c){var a=c.getAttribute?c.getAttribute(S2):null;return typeof a=="string"}function BK(c){var a=c.getAttribute?c.getAttribute(V5):null,e=c.getAttribute?c.getAttribute(M5):null;return a&&e}function FK(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(T.replacementClass)}function RK(){if(T.autoReplaceSvg===!0)return n4.replace;var c=n4[T.autoReplaceSvg];return c||n4.replace}function EK(c){return e1.createElementNS("http://www.w3.org/2000/svg",c)}function DK(c){return e1.createElement(c)}function Gf(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?EK:DK:e;if(typeof c=="string")return e1.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(Gf(n,{ceFn:s}))}),r}function qK(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var n4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(Gf(r),e)}),e.getAttribute(S2)===null&&T.keepOriginalSource){var s=e1.createComment(qK(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~d5(e).indexOf(T.replacementClass))return n4.replace(a);var r=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(f,l){return l===T.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=s.map(function(f){return B3(f)}).join(`
`);e.setAttribute(S2,""),e.innerHTML=n}};function D0(c){c()}function Zf(c,a){var e=typeof a=="function"?a:i4;if(c.length===0)e();else{var s=D0;T.mutateApproach===W$&&(s=m2.requestAnimationFrame||D0),s(function(){var r=RK(),i=S5.begin("mutate");c.map(r),i(),e()})}}var y5=!1;function $f(){y5=!0}function $6(){y5=!1}var M4=null;function q0(c){if(!!w0&&!!T.observeMutations){var a=c.treeCallback,e=a===void 0?i4:a,s=c.nodeCallback,r=s===void 0?i4:s,i=c.pseudoElementsCallback,n=i===void 0?i4:i,f=c.observeMutationsRoot,l=f===void 0?e1:f;M4=new w0(function(o){if(!y5){var t=v2();J2(o).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!E0(m.addedNodes[0])&&(T.searchPseudoElements&&n(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&E0(m.target)&&~X$.indexOf(m.attributeName))if(m.attributeName==="class"&&BK(m.target)){var u=c6(d5(m.target)),H=u.prefix,M=u.iconName;m.target.setAttribute(V5,H||t),M&&m.target.setAttribute(M5,M)}else FK(m.target)&&r(m.target)})}}),a2&&M4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function OK(){!M4||M4.disconnect()}function UK(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(s[n]=f.join(":").trim()),s},{})),e}function IK(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=c6(d5(c));return r.prefix||(r.prefix=v2()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=CK(r.prefix,c.innerText)||b5(r.prefix,O6(c.innerText))),!r.iconName&&T.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function WK(c){var a=J2(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return T.autoA11y&&(e?a["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(s||b3()):(a["aria-hidden"]="true",a.focusable="false")),a}function jK(){return{iconName:null,title:null,titleId:null,prefix:null,transform:W1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function O0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=IK(c),s=e.iconName,r=e.prefix,i=e.rest,n=WK(c),f=I6("parseNodeAttributes",{},c),l=a.styleParser?UK(c):[];return k({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:W1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var GK=_1.styles;function Kf(c){var a=T.autoReplaceSvg==="nest"?O0(c,{styleParser:!1}):O0(c);return~a.extra.classes.indexOf(Af)?J1("generateLayersText",c,a):J1("generateSvgReplacementMutation",c,a)}var z2=new Set;C5.map(function(c){z2.add("fa-".concat(c))});Object.keys(C3[a1]).map(z2.add.bind(z2));Object.keys(C3[n1]).map(z2.add.bind(z2));z2=T3(z2);function U0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!a2)return Promise.resolve();var e=e1.documentElement.classList,s=function(m){return e.add("".concat(k0,"-").concat(m))},r=function(m){return e.remove("".concat(k0,"-").concat(m))},i=T.autoFetchSvg?z2:C5.map(function(t){return"fa-".concat(t)}).concat(Object.keys(GK));i.includes("fa")||i.push("fa");var n=[".".concat(Af,":not([").concat(S2,"])")].concat(i.map(function(t){return".".concat(t,":not([").concat(S2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=J2(c.querySelectorAll(n))}catch{}if(f.length>0)s("pending"),r("complete");else return Promise.resolve();var l=S5.begin("onTree"),o=f.reduce(function(t,m){try{var u=Kf(m);u&&t.push(u)}catch(H){kf||H.name==="MissingIcon"&&console.error(H)}return t},[]);return new Promise(function(t,m){Promise.all(o).then(function(u){Zf(u,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),t()})}).catch(function(u){l(),m(u)})})}function ZK(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Kf(c).then(function(e){e&&Zf([e],a)})}function $K(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:W6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:W6(r||{})),c(s,k(k({},e),{},{mask:r}))}}var KK=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?W1:s,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,o=e.maskId,t=o===void 0?null:o,m=e.title,u=m===void 0?null:m,H=e.titleId,M=H===void 0?null:H,N=e.classes,R=N===void 0?[]:N,p=e.attributes,h=p===void 0?{}:p,C=e.styles,w=C===void 0?{}:C;if(!!a){var A=a.prefix,D=a.iconName,q=a.icon;return a6(k({type:"icon"},a),function(){return y2("beforeDOMElementCreation",{iconDefinition:a,params:e}),T.autoA11y&&(u?h["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(M||b3()):(h["aria-hidden"]="true",h.focusable="false")),N5({icons:{main:j6(q),mask:l?j6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:D,transform:k(k({},W1),r),symbol:n,title:u,maskId:t,titleId:M,extra:{attributes:h,styles:w,classes:R}})})}},YK={mixout:function(){return{icon:$K(KK)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=U0,e.nodeCallback=ZK,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?e1:s,i=e.callback,n=i===void 0?function(){}:i;return U0(r,n)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,n=s.titleId,f=s.prefix,l=s.transform,o=s.symbol,t=s.mask,m=s.maskId,u=s.extra;return new Promise(function(H,M){Promise.all([G6(r,f),t.iconName?G6(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var R=H5(N,2),p=R[0],h=R[1];H([e,N5({icons:{main:p,mask:h},prefix:f,iconName:r,transform:l,symbol:o,maskId:m,title:i,titleId:n,extra:u,watchable:!0})])}).catch(M)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.transform,f=e.styles,l=J4(f);l.length>0&&(r.style=l);var o;return L5(n)&&(o=J1("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),s.push(o||i.icon),{children:s,attributes:r}}}},XK={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return a6({type:"layer"},function(){y2("beforeDOMElementCreation",{assembler:e,params:s});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(T3(i)).join(" ")},children:n}]})}}}},JK={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,n=s.classes,f=n===void 0?[]:n,l=s.attributes,o=l===void 0?{}:l,t=s.styles,m=t===void 0?{}:t;return a6({type:"counter",content:e},function(){return y2("beforeDOMElementCreation",{content:e,params:s}),AK({content:e.toString(),title:i,extra:{attributes:o,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(T3(f))}})})}}}},QK={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?W1:r,n=s.title,f=n===void 0?null:n,l=s.classes,o=l===void 0?[]:l,t=s.attributes,m=t===void 0?{}:t,u=s.styles,H=u===void 0?{}:u;return a6({type:"text",content:e},function(){return y2("beforeDOMElementCreation",{content:e,params:s}),F0({content:e,transform:k(k({},W1),i),title:f,extra:{attributes:m,styles:H,classes:["".concat(T.cssPrefix,"-layers-text")].concat(T3(o))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,n=s.extra,f=null,l=null;if(Sf){var o=parseInt(getComputedStyle(e).fontSize,10),t=e.getBoundingClientRect();f=t.width/o,l=t.height/o}return T.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,F0({content:e.innerHTML,width:f,height:l,transform:i,title:r,extra:n,watchable:!0})])}}},cY=new RegExp('"',"ug"),I0=[1105920,1112319];function aY(c){var a=c.replace(cY,""),e=hK(a,0),s=e>=I0[0]&&e<=I0[1],r=a.length===2?a[0]===a[1]:!1;return{value:O6(r?a[0]:a),isSecondary:s||r}}function W0(c,a){var e="".concat(I$).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=J2(c.children),n=i.filter(function(q){return q.getAttribute(q6)===a})[0],f=m2.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match($$),o=f.getPropertyValue("font-weight"),t=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),s();if(l&&t!=="none"&&t!==""){var m=f.getPropertyValue("content"),u=~["Sharp"].indexOf(l[2])?n1:a1,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?d3[u][l[2].toLowerCase()]:K$[u][o],M=aY(m),N=M.value,R=M.isSecondary,p=l[0].startsWith("FontAwesome"),h=b5(H,N),C=h;if(p){var w=dK(N);w.iconName&&w.prefix&&(h=w.iconName,H=w.prefix)}if(h&&!R&&(!n||n.getAttribute(V5)!==H||n.getAttribute(M5)!==C)){c.setAttribute(e,C),n&&c.removeChild(n);var A=jK(),D=A.extra;D.attributes[q6]=a,G6(h,H).then(function(q){var F=N5(k(k({},A),{},{icons:{main:q,mask:x5()},prefix:H,iconName:C,extra:D,watchable:!0})),j=e1.createElement("svg");a==="::before"?c.insertBefore(j,c.firstChild):c.appendChild(j),j.outerHTML=F.map(function(Z){return B3(Z)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function eY(c){return Promise.all([W0(c,"::before"),W0(c,"::after")])}function sY(c){return c.parentNode!==document.head&&!~j$.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(q6)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function j0(c){if(!!a2)return new Promise(function(a,e){var s=J2(c.querySelectorAll("*")).filter(sY).map(eY),r=S5.begin("searchPseudoElements");$f(),Promise.all(s).then(function(){r(),$6(),a()}).catch(function(){r(),$6(),e()})})}var rY={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=j0,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?e1:s;T.searchPseudoElements&&j0(r)}}},G0=!1,iY={mixout:function(){return{dom:{unwatch:function(){$f(),G0=!0}}}},hooks:function(){return{bootstrap:function(){q0(I6("mutationObserverCallbacks",{}))},noAuto:function(){OK()},watch:function(e){var s=e.observeMutationsRoot;G0?$6():q0(I6("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},Z0=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return s.flipX=!0,s;if(n&&f==="v")return s.flipY=!0,s;if(f=parseFloat(f),isNaN(f))return s;switch(n){case"grow":s.size=s.size+f;break;case"shrink":s.size=s.size-f;break;case"left":s.x=s.x-f;break;case"right":s.x=s.x+f;break;case"up":s.y=s.y-f;break;case"down":s.y=s.y+f;break;case"rotate":s.rotate=s.rotate+f;break}return s},e)},nY={mixout:function(){return{parse:{transform:function(e){return Z0(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=Z0(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,i=e.containerWidth,n=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),t="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(o," ").concat(t)},u={transform:"translate(".concat(n/2*-1," -256)")},H={outer:f,inner:m,path:u};return{tag:"g",attributes:k({},H.outer),children:[{tag:"g",attributes:k({},H.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:k(k({},s.icon.attributes),H.path)}]}]}}}},C6={x:0,y:0,width:"100%",height:"100%"};function $0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function fY(c){return c.tag==="g"?c.children:[c]}var lY={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),i=r?c6(r.split(" ").map(function(n){return n.trim()})):x5();return i.prefix||(i.prefix=v2()),e.mask=i,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.mask,f=e.maskId,l=e.transform,o=i.width,t=i.icon,m=n.width,u=n.icon,H=nK({transform:l,containerWidth:m,iconWidth:o}),M={tag:"rect",attributes:k(k({},C6),{},{fill:"white"})},N=t.children?{children:t.children.map($0)}:{},R={tag:"g",attributes:k({},H.inner),children:[$0(k({tag:t.tag,attributes:k(k({},t.attributes),H.path)},N))]},p={tag:"g",attributes:k({},H.outer),children:[R]},h="mask-".concat(f||b3()),C="clip-".concat(f||b3()),w={tag:"mask",attributes:k(k({},C6),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,p]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:fY(u)},w]};return s.push(A,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(h,")")},C6)}),{children:s,attributes:r}}}},oY={provides:function(a){var e=!1;m2.matchMedia&&(e=m2.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:k(k({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=k(k({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:k(k({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:k(k({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(f),s.push({tag:"path",attributes:k(k({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:k(k({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:k(k({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},tY={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},mY=[oK,YK,XK,JK,QK,rY,iY,nY,lY,oY,tY];bK(mY,{mixoutsTo:N1});N1.noAuto;var Yf=N1.config,vY=N1.library;N1.dom;var C4=N1.parse;N1.findIconDefinition;N1.toHtml;var zY=N1.icon;N1.layer;var hY=N1.text;N1.counter;function K0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function T1(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?K0(Object(e),!0).forEach(function(s){C1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):K0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function d4(c){return d4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},d4(c)}function C1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function uY(c,a){if(c==null)return{};var e={},s=Object.keys(c),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(e[r]=c[r]);return e}function HY(c,a){if(c==null)return{};var e=uY(c,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,s)||(e[s]=c[s]))}return e}function K6(c){return pY(c)||VY(c)||MY(c)||CY()}function pY(c){if(Array.isArray(c))return Y6(c)}function VY(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function MY(c,a){if(!!c){if(typeof c=="string")return Y6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Y6(c,a)}}function Y6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function CY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dY=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xf={exports:{}};(function(c){(function(a){var e=function(p,h,C){if(!o(h)||m(h)||u(h)||H(h)||l(h))return h;var w,A=0,D=0;if(t(h))for(w=[],D=h.length;A<D;A++)w.push(e(p,h[A],C));else{w={};for(var q in h)Object.prototype.hasOwnProperty.call(h,q)&&(w[p(q,C)]=e(p,h[q],C))}return w},s=function(p,h){h=h||{};var C=h.separator||"_",w=h.split||/(?=[A-Z])/;return p.split(w).join(C)},r=function(p){return M(p)?p:(p=p.replace(/[\-_\s]+(.)?/g,function(h,C){return C?C.toUpperCase():""}),p.substr(0,1).toLowerCase()+p.substr(1))},i=function(p){var h=r(p);return h.substr(0,1).toUpperCase()+h.substr(1)},n=function(p,h){return s(p,h).toLowerCase()},f=Object.prototype.toString,l=function(p){return typeof p=="function"},o=function(p){return p===Object(p)},t=function(p){return f.call(p)=="[object Array]"},m=function(p){return f.call(p)=="[object Date]"},u=function(p){return f.call(p)=="[object RegExp]"},H=function(p){return f.call(p)=="[object Boolean]"},M=function(p){return p=p-0,p===p},N=function(p,h){var C=h&&"process"in h?h.process:h;return typeof C!="function"?p:function(w,A){return C(w,p,A)}},R={camelize:r,decamelize:n,pascalize:i,depascalize:n,camelizeKeys:function(p,h){return e(N(r,h),p)},decamelizeKeys:function(p,h){return e(N(n,h),p,h)},pascalizeKeys:function(p,h){return e(N(i,h),p)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};c.exports?c.exports=R:a.humps=R})(dY)})(Xf);var LY=Xf.exports,gY=["class","style"];function bY(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var s=e.indexOf(":"),r=LY.camelize(e.slice(0,s)),i=e.slice(s+1).trim();return a[r]=i,a},{})}function xY(c){return c.split(/\s+/).reduce(function(a,e){return a[e]=!0,a},{})}function w5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof c=="string")return c;var s=(c.children||[]).map(function(l){return w5(l)}),r=Object.keys(c.attributes||{}).reduce(function(l,o){var t=c.attributes[o];switch(o){case"class":l.class=xY(t);break;case"style":l.style=bY(t);break;default:l.attrs[o]=t}return l},{attrs:{},class:{},style:{}});e.class;var i=e.style,n=i===void 0?{}:i,f=HY(e,gY);return M3(c.tag,T1(T1(T1({},a),{},{class:r.class,style:T1(T1({},r.style),n)},r.attrs),f),s)}var Jf=!1;try{Jf=!0}catch{}function NY(){if(!Jf&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}function z3(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?C1({},c,a):{}}function SY(c){var a,e=(a={"fa-spin":c.spin,"fa-pulse":c.pulse,"fa-fw":c.fixedWidth,"fa-border":c.border,"fa-li":c.listItem,"fa-inverse":c.inverse,"fa-flip":c.flip===!0,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both"},C1(a,"fa-".concat(c.size),c.size!==null),C1(a,"fa-rotate-".concat(c.rotation),c.rotation!==null),C1(a,"fa-pull-".concat(c.pull),c.pull!==null),C1(a,"fa-swap-opacity",c.swapOpacity),C1(a,"fa-bounce",c.bounce),C1(a,"fa-shake",c.shake),C1(a,"fa-beat",c.beat),C1(a,"fa-fade",c.fade),C1(a,"fa-beat-fade",c.beatFade),C1(a,"fa-flash",c.flash),C1(a,"fa-spin-pulse",c.spinPulse),C1(a,"fa-spin-reverse",c.spinReverse),a);return Object.keys(e).map(function(s){return e[s]?s:null}).filter(function(s){return s})}function Y0(c){if(c&&d4(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(C4.icon)return C4.icon(c);if(c===null)return null;if(d4(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}var yY=p1({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(a){return[!0,!1,"horizontal","vertical","both"].indexOf(a)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(a){return["right","left"].indexOf(a)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(a){return[90,180,270].indexOf(Number.parseInt(a,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(a){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(a)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(a,e){var s=e.attrs,r=z1(function(){return Y0(a.icon)}),i=z1(function(){return z3("classes",SY(a))}),n=z1(function(){return z3("transform",typeof a.transform=="string"?C4.transform(a.transform):a.transform)}),f=z1(function(){return z3("mask",Y0(a.mask))}),l=z1(function(){return zY(r.value,T1(T1(T1(T1({},i.value),n.value),f.value),{},{symbol:a.symbol,title:a.title}))});e4(l,function(t){if(!t)return NY("Could not find one or more icon(s)",r.value,f.value)},{immediate:!0});var o=z1(function(){return l.value?w5(l.value.abstract[0],{},s):null});return function(){return o.value}}});p1({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(a,e){var s=e.slots,r=Yf.familyPrefix,i=z1(function(){return["".concat(r,"-layers")].concat(K6(a.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return M3("div",{class:i.value},s.default?s.default():[])}}});p1({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(a){return["bottom-left","bottom-right","top-left","top-right"].indexOf(a)>-1}}},setup:function(a,e){var s=e.attrs,r=Yf.familyPrefix,i=z1(function(){return z3("classes",[].concat(K6(a.counter?["".concat(r,"-layers-counter")]:[]),K6(a.position?["".concat(r,"-layers-").concat(a.position)]:[])))}),n=z1(function(){return z3("transform",typeof a.transform=="string"?C4.transform(a.transform):a.transform)}),f=z1(function(){var o=hY(a.value.toString(),T1(T1({},n.value),i.value)),t=o.abstract;return a.counter&&(t[0].attributes.class=t[0].attributes.class.replace("fa-layers-text","")),t[0]}),l=z1(function(){return w5(f.value,{},s)});return function(){return l.value}}});const wY=X2(c=>{vY.add(T$,fd),c.vueApp.component("font-awesome-icon",yY)}),kY=[Qm,ov,gv,xv,Nv,wY],X0={__name:"nuxt-root",setup(c){const a=mo(()=>h9(()=>import("./error-component.5e6ba30e.js"),[],import.meta.url).then(i=>i.default||i)),e=H1(),s=()=>e.callHook("app:suspense:resolve");A7("_route",Bm()),e.hooks.callHookWith(i=>i.map(n=>n()),"vue:setup");const r=d8();return F7((i,n,f)=>{e.hooks.callHook("vue:error",i,n,f).catch(l=>console.error("[nuxt] Error in `vue:error` hook",l)),Tm(i)&&(i.fatal||i.unhandled)&&t3(e,Am,[i])}),(i,n)=>{const f=E7("App");return I1(),s4(io,{onResolve:s},{default:w7(()=>[l2(r)?(I1(),s4(l2(a),{key:0,error:l2(r)},null,8,["error"])):(I1(),s4(f,{key:1}))]),_:1})}}},AY=""+new URL("01.4e5f4a56.jpg",import.meta.url).href,PY=""+new URL("02.ee0d9b4d.jpg",import.meta.url).href,TY=""+new URL("03.e35de865.jpg",import.meta.url).href,_Y=""+new URL("04.82e4fa3f.jpg",import.meta.url).href,BY=""+new URL("05.73b8432e.jpg",import.meta.url).href,FY=""+new URL("06.ffd0ec40.jpg",import.meta.url).href,RY=""+new URL("07.049bfe49.jpg",import.meta.url).href,EY=""+new URL("08.972f6209.jpg",import.meta.url).href,DY=""+new URL("09.f3666ce4.jpg",import.meta.url).href,qY=""+new URL("10.3251bfd8.jpg",import.meta.url).href,OY=""+new URL("11.1db8dc0c.jpg",import.meta.url).href,UY=p1({async setup(){const c=b2(0),a=[{id:1,name:"\u3042\u3093\u3058\u3085",description:"\u8AAC\u660E1",twitter:"https://twitter.com/apple_pie_0321",src:"01",pixiv:"https://www.pixiv.net/users/4036156"},{id:2,name:"\u30A4\u30BB",description:"\u8AAC\u660E2",twitter:"https://twitter.com/tasu_hiku_",src:"02",pixiv:"https://www.pixiv.net/users/3014124"},{id:3,name:"\u30BF\u30AF\u3048\u3082\u3093",description:"\u8AAC\u660E3",twitter:"https://twitter.com/DoraTakubou",src:"03",pixiv:"https://www.pixiv.net/users/11660552"},{id:4,name:"\u30C4\u30A4\u30FC\u30C8\u304A\u3058\u3055\u3093",description:"\u8AAC\u660E4",twitter:"https://twitter.com/co9EZOLIX4dRRG0",src:"04",pixiv:"https://www.pixiv.net/users/12512382"},{id:5,name:"\u3068\u308A\u304B",description:"\u8AAC\u660E5",twitter:"https://twitter.com/t0rika",src:"05",pixiv:"https://www.pixiv.net/users/2638861"},{id:6,name:"\u540D\u7121\u3057\u306E\u30B4\u30F3\u30B9\u30B1",description:"\u8AAC\u660E6",twitter:"https://twitter.com/nanashigonsuke",src:"06",pixiv:"https://www.pixiv.net/users/45100114"},{id:7,name:"\u30DE\u30B5\u3048\u3082\u3093",description:"\u8AAC\u660E7",twitter:"https://twitter.com/masa7819",src:"07",pixiv:"https://www.pixiv.net/users/3942792"},{id:8,name:"\u6795\u3055\u3093",description:"\u8AAC\u660E8",twitter:"https://twitter.com/makura8711",src:"08",pixiv:"https://www.pixiv.net/users/3106182"},{id:9,name:"\u671B\u6708\u7530\u543E\u4F5C",description:"\u8AAC\u660E9",twitter:"https://twitter.com/mt_tg",src:"09",pixiv:"https://www.pixiv.net/users/415546"},{id:10,name:"\u77E2\u5CF6\u3068\u3082\u3042\u304D",description:"\u8AAC\u660E10",twitter:"https://twitter.com/yjmtomoaki",src:"10",pixiv:"https://www.pixiv.net/users/6451424"},{id:11,name:"\u697D\u6765\u4E00\u77E5",description:"\u8AAC\u660E11",twitter:"https://twitter.com/rakurai_66UFO",src:"11",pixiv:"https://www.pixiv.net/users/474750"}],e=()=>{console.log("left"),c.value<a.length-1?c.value++:c.value=0},s=z1(()=>{const n=[],f=c.value-1,l=c.value+1;return f>=0?n.push(f):n.push(a.length-1),n.push(c.value),l<a.length?n.push(l):n.push(0),n});return{arr:a,currentIndex:c,currentIndexRange:s,scrollToTop:()=>{window.scrollTo({top:0,behavior:"smooth"})},handleKeyLeft:e,getImageUrl:n=>new URL(Object.assign({"./assets/authors/01.jpg":AY,"./assets/authors/02.jpg":PY,"./assets/authors/03.jpg":TY,"./assets/authors/04.jpg":_Y,"./assets/authors/05.jpg":BY,"./assets/authors/06.jpg":FY,"./assets/authors/07.jpg":RY,"./assets/authors/08.jpg":EY,"./assets/authors/09.jpg":DY,"./assets/authors/10.jpg":qY,"./assets/authors/11.jpg":OY})[`./assets/authors/${n}.jpg`],self.location).href}}}),IY=""+new URL("FS_hyousi_middle.eaaf5783.jpg",import.meta.url).href,WY=""+new URL("hyoushi.cd2abb63.jpg",import.meta.url).href;const jY=(c,a)=>{const e=c.__vccOpts||c;for(const[s,r]of a)e[s]=r;return e},GY={ref:"scrollTopButton",class:"fixed w-full flex justify-end bottom-0 pb-3 pr-5 transition"},ZY={class:"text-gray-800 p-2 hover:text-blue-400 bg-white/50 rounded transition"},$Y=jo('<div class="scroll-smooth"><div class="flex flex-row justify-center items-center" id="abstract"><div class="grid grid-cols-1 sm:grid-cols-2"><div class="h-96 sm:h-screen items-center text-center"><img class="h-full w-full sm:h-screen object-cover" loading="lazy" src="'+IY+'" alt="cover"></div><div class="p-6 mx-8 my-6 items-center align-middle bg-[url(&#39;~/assets/fs.svg&#39;)] bg-no-repeat"><h2 class="text-2xl font-bold">\u85E4\u5B50\u4E0D\u4E8C\u96C4\u30AA\u30DE\u30FC\u30B8\u30E5\u30DE\u30AC\u30B8\u30F3</h2><p class="text-3xl font-bold">\u30D5\u30B8\u30B3\u30FB\u30B9\u30D4\u30EA\u30C3\u30C8</p><p class="text-right text-xl">by <a class="text-blue-600" href="https://webcatalog-free.circle.ms/Circle/16802791">\u30AB\u30F3\u30C5\u30E1\u30AB\u30F3</a></p><p class="text-justify mt-12"> \u85E4\u5B50\u4E0D\u4E8C\u96C4\u3055\u3093\u306F\u3001\u65E5\u672C\u306E\u6F2B\u753B\u5BB6\u3067\u3059\u3002\u5F7C\u306F\u3001\u300C\u9244\u8155\u30A2\u30C8\u30E0\u300D\u300C\u9B54\u6CD5\u9A0E\u58EB\u30EC\u30A4\u30A2\u30FC\u30B9\u300D\u300C\u30AD\u30E3\u30D7\u30C6\u30F3\u7FFC\u300D\u306A\u3069\u306E\u4EBA\u6C17\u4F5C\u54C1\u3092\u751F\u307F\u51FA\u3057\u3001\u591A\u304F\u306E\u30D5\u30A1\u30F3\u3092\u6301\u3063\u3066\u3044\u307E\u3059\u3002\u300C\u30D5\u30B8\u30B3\u30FB\u30B9\u30D4\u30EA\u30C3\u30C8\u300D\u3068\u3044\u3046\u5408\u540C\u8A8C\u304C\u3042\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u304C\u3001\u8A73\u7D30\u306F\u5206\u304B\u308A\u307E\u305B\u3093\u3002\u79C1\u306F\u3001\u5927\u578B\u8A00\u8A9E\u30E2\u30C7\u30EB\u3067\u3042\u308A\u3001\u5177\u4F53\u7684\u306A\u5185\u5BB9\u3092\u304A\u4F3A\u3044\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u304A\u624B\u6570\u3067\u3059\u304C\u3001\u3082\u3046\u5C11\u3057\u60C5\u5831\u3092\u3054\u63D0\u4F9B\u3044\u305F\u3060\u3051\u308B\u3068\u3001\u3088\u308A\u8A73\u3057\u3044\u56DE\u7B54\u3092\u3055\u305B\u3066\u3044\u305F\u3060\u3051\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002 </p><img class="my-4 items-center text-center max-w-sm w-full object-full" src="'+WY+'" alt="\u8868\u7D19/\u88CF\u8868\u7D19"><p class="my-4 text-2xl font-medium"> \u8A73\u7D30\u60C5\u5831 </p><ul class="space-y-1 max-w-md list-disc list-inside"><li> \u30A4\u30D9\u30F3\u30C8: \u30B3\u30DF\u30C3\u30AF\u30DE\u30FC\u30B1\u30C3\u30C8101 (C101) </li><li> \u30B9\u30DA\u30FC\u30B9: \u6771\u306F-50a </li><li> \u30B5\u30FC\u30AF\u30EB: \u30AB\u30F3\u30C5\u30E1\u30AB\u30F3 </li><li> \u9812\u5E03\u4FA1\u683C: 500\u5186 </li><li> \u5185\u5BB9: A5 48\u30DA\u30FC\u30B8 </li></ul></div></div></div><div class="flex justify-center my-4 pb-3 pr-5 transition"><a class="text-gray-800 p-2 hover:text-blue-400 bg-gray-200/50 rounded transition" href="#authors"><button> Next-Section </button></a></div></div>',1),KY={class:"scroll-smooth"},YY={id:"authors"},XY=K("div",{class:"my-4 text-center lign-middle"},[K("h1",null,[K("span",{class:"text-3xl items-center font-medium"},"\u53C2\u52A0\u8005\u4E00\u89A7")])],-1),JY={class:"flex justify-center items-center align-middle"},QY={class:"mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center align-middle"},cX=["src","alt"],aX={class:"m-7"},eX={class:"font-bold text-xl mb-2"},sX={class:"text-gray-700 text-base"},rX={class:"px-6 pt-4 pb-2"},iX={key:0,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},nX=["href"],fX={key:1,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},lX=["href"],oX=K("div",{class:"flex justify-center my-4 pb-3 pr-5 transition"},[K("a",{class:"text-gray-800 p-2 hover:text-blue-400 bg-gray-200/50 rounded transition",href:"#access"},[K("button",{class:"rounded-full"}," Next-Section ")])],-1),tX=K("div",{class:"flex flex-row min-h-screen justify-center items-center",id:"access"},[K("div",{class:"items-center align-middle"},[K("div",{class:"relative top-48 left-5 right-5"},[K("p",{class:"text-2xl md:text-3xl text-white font-medium"},"2022/12/30 (\u91D1) \u6771\u4EAC\u30D3\u30C3\u30B0\u30B5\u30A4\u30C8"),K("p",{class:"text-2xl md:text-3xl text-white font-medium"},"\u30B9\u30DA\u30FC\u30B9: \u6771\u30CF-50a \u300C\u30AB\u30F3\u30C5\u30E1\u30AB\u30F3\u300D")]),K("iframe",{class:"w-screen h-screen pointer-events-none",id:"mapInlineFrame",loading:"lazy",src:"https://main--relaxed-lovelace-59e029.netlify.app/",frameborder:"0"},`
      `),K("div",{class:"self-end space-y-4 bg-gray-800"},[K("p",{class:"text-1xl inline-block align-bottom text-white"},"\xA9 2022 Tagosaku Mochiduki")])])],-1);function mX(c,a,e,s,r,i){return I1(),c3(b1,null,[K("div",GY,[K("div",ZY,[K("button",{onClick:a[0]||(a[0]=(...n)=>c.scrollToTop&&c.scrollToTop(...n))}," Scroll to top ")])],512),$Y,K("div",KY,[K("div",YY,[XY,K("div",JY,[K("div",QY,[(I1(!0),c3(b1,null,bo(c.arr,(n,f)=>(I1(),c3("div",{class:"max-w-sm my-6 mx-4 rounded overflow-hidden shadow-lg",key:f},[K("img",{class:"w-full h-48 object-cover",src:c.getImageUrl(n.src),alt:n.name},null,8,cX),K("div",aX,[K("div",eX,B5(n.name),1),K("p",sX,B5(n.description),1)]),K("div",rX,[n.twitter?(I1(),c3("span",iX,[K("a",{href:n.twitter},"Twitter",8,nX)])):e0("",!0),n.pixiv?(I1(),c3("span",fX,[K("a",{href:n.pixiv},"Pixiv",8,lX)])):e0("",!0)])]))),128))])])]),oX]),tX],64)}const vX=jY(UY,[["render",mX]]);globalThis.$fetch||(globalThis.$fetch=tm.create({baseURL:vm()}));let J0;const zX=Sm(kY);J0=async function(){var r;const e=Boolean((r=window.__NUXT__)==null?void 0:r.serverRendered)?xt(X0):bt(X0);e.component("App",vX);const s=bm({vueApp:e});s.hooks.hookOnce("app:suspense:resolve",()=>{s.isHydrating=!1});try{await Nm(s,zX)}catch(i){await s.callHook("app:error",i),s.payload.error=s.payload.error||i}try{await s.hooks.callHook("app:created",e),await s.hooks.callHook("app:beforeMount",e),e.mount("#__nuxt"),await s.hooks.callHook("app:mounted",e),await b7()}catch(i){await s.callHook("app:error",i),s.payload.error=s.payload.error||i}},J0().catch(c=>{console.error("Error while mounting app:",c)});export{h9 as _,jY as a,L8 as b,s4 as c,mo as d,c3 as e,K as f,Wo as g,l1 as h,X7 as i,pX as j,HX as k,hX as n,I1 as o,uX as p,B5 as t,l2 as u,w7 as w};