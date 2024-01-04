In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function AY(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var K5=function(){},T0={},uo={},Ho=null,po={mark:K5,measure:K5};try{typeof window<"u"&&(T0=window),typeof document<"u"&&(uo=document),typeof MutationObserver<"u"&&(Ho=MutationObserver),typeof performance<"u"&&(po=performance)}catch{}var _Y=T0.navigator||{},Y5=_Y.userAgent,X5=Y5===void 0?"":Y5,v2=T0,r1=uo,J5=Ho,$3=po;v2.document;var e2=!!r1.documentElement&&!!r1.head&&typeof r1.addEventListener=="function"&&typeof r1.createElement=="function",Vo=~X5.indexOf("MSIE")||~X5.indexOf("Trident/"),K3,Y3,X3,J3,Q3,J1="___FONT_AWESOME___",a8=16,Mo="fa",Co="svg-inline--fa",_2="data-fa-i2svg",e8="data-fa-pseudo-element",PY="data-fa-pseudo-element-pending",R0="data-prefix",B0="data-icon",Q5="fontawesome-i2svg",TY="async",RY=["HTML","HEAD","STYLE","SCRIPT"],Lo=function(){try{return!0}catch{return!1}}(),e1="classic",o1="sharp",F0=[e1,o1];function T3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[e1]}})}var C3=T3((K3={},z1(K3,e1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),z1(K3,o1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),K3)),d3=T3((Y3={},z1(Y3,e1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),z1(Y3,o1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Y3)),L3=T3((X3={},z1(X3,e1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),z1(X3,o1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),X3)),BY=T3((J3={},z1(J3,e1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),z1(J3,o1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),J3)),FY=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,go="fa-layers-text",EY=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,DY=T3((Q3={},z1(Q3,e1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),z1(Q3,o1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Q3)),bo=[1,2,3,4,5,6,7,8,9,10],qY=bo.concat([11,12,13,14,15,16,17,18,19,20]),UY=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],x2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},g3=new Set;Object.keys(d3[e1]).map(g3.add.bind(g3));Object.keys(d3[o1]).map(g3.add.bind(g3));var OY=[].concat(F0,P3(g3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",x2.GROUP,x2.SWAP_OPACITY,x2.PRIMARY,x2.SECONDARY]).concat(bo.map(function(c){return"".concat(c,"x")})).concat(qY.map(function(c){return"w-".concat(c)})),v3=v2.FontAwesomeConfig||{};function IY(c){var a=r1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function jY(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(r1&&typeof r1.querySelector=="function"){var WY=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];WY.forEach(function(c){var a=P0(c,2),e=a[0],r=a[1],s=jY(IY(e));s!=null&&(v3[r]=s)})}var xo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Mo,replacementClass:Co,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};v3.familyPrefix&&(v3.cssPrefix=v3.familyPrefix);var J2=_(_({},xo),v3);J2.autoReplaceSvg||(J2.observeMutations=!1);var T={};Object.keys(xo).forEach(function(c){Object.defineProperty(T,c,{enumerable:!0,set:function(e){J2[c]=e,z3.forEach(function(r){return r(T)})},get:function(){return J2[c]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(a){J2.cssPrefix=a,z3.forEach(function(e){return e(T)})},get:function(){return J2.cssPrefix}});v2.FontAwesomeConfig=T;var z3=[];function GY(c){return z3.push(c),function(){z3.splice(z3.indexOf(c),1)}}var n2=a8,I1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ZY(c){if(!(!c||!e2)){var a=r1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=r1.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}return r1.head.insertBefore(a,r),c}}var $Y="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function b3(){for(var c=12,a="";c-- >0;)a+=$Y[Math.random()*62|0];return a}function r3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function E0(c){return c.classList?r3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function No(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function KY(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(No(c[e]),'" ')},"").trim()}function i6(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function D0(c){return c.size!==I1.size||c.x!==I1.x||c.y!==I1.y||c.rotate!==I1.rotate||c.flipX||c.flipY}function YY(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(i," ").concat(n," ").concat(l)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:o,path:t}}function XY(c){var a=c.transform,e=c.width,r=e===void 0?a8:e,s=c.height,i=s===void 0?a8:s,n=c.startCentered,l=n===void 0?!1:n,o="";return l&&Vo?o+="translate(".concat(a.x/n2-r/2,"em, ").concat(a.y/n2-i/2,"em) "):l?o+="translate(calc(-50% + ".concat(a.x/n2,"em), calc(-50% + ").concat(a.y/n2,"em)) "):o+="translate(".concat(a.x/n2,"em, ").concat(a.y/n2,"em) "),o+="scale(".concat(a.size/n2*(a.flipX?-1:1),", ").concat(a.size/n2*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var JY=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
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
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
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
}`;function yo(){var c=Mo,a=Co,e=T.cssPrefix,r=T.replacementClass,s=JY;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(l,".".concat(r))}return s}var c7=!1;function b6(){T.autoAddCss&&!c7&&(ZY(yo()),c7=!0)}var QY={mixout:function(){return{dom:{css:yo,insertCss:b6}}},hooks:function(){return{beforeDOMElementCreation:function(){b6()},beforeI2svg:function(){b6()}}}},Q1=v2||{};Q1[J1]||(Q1[J1]={});Q1[J1].styles||(Q1[J1].styles={});Q1[J1].hooks||(Q1[J1].hooks={});Q1[J1].shims||(Q1[J1].shims=[]);var B1=Q1[J1],So=[],cX=function c(){r1.removeEventListener("DOMContentLoaded",c),x4=1,So.map(function(a){return a()})},x4=!1;e2&&(x4=(r1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(r1.readyState),x4||r1.addEventListener("DOMContentLoaded",cX));function aX(c){e2&&(x4?setTimeout(c,0):So.push(c))}function R3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?No(c):"<".concat(a," ").concat(KY(r),">").concat(i.map(R3).join(""),"</").concat(a,">")}function a7(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var eX=function(a,e){return function(r,s,i,n){return a.call(e,r,s,i,n)}},x6=function(a,e,r,s){var i=Object.keys(a),n=i.length,l=s!==void 0?eX(e,s):e,o,t,f;for(r===void 0?(o=1,f=a[i[0]]):(o=0,f=r);o<n;o++)t=i[o],f=l(f,a[t],t,a);return f};function rX(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function r8(c){var a=rX(c);return a.length===1?a[0].toString(16):null}function sX(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function e7(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function s8(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=e7(a);typeof B1.hooks.addPack=="function"&&!s?B1.hooks.addPack(c,e7(a)):B1.styles[c]=_(_({},B1.styles[c]||{}),i),c==="fas"&&s8("fa",a)}var c4,a4,e4,D2=B1.styles,iX=B1.shims,nX=(c4={},z1(c4,e1,Object.values(L3[e1])),z1(c4,o1,Object.values(L3[o1])),c4),q0=null,wo={},ko={},Ao={},_o={},Po={},lX=(a4={},z1(a4,e1,Object.keys(C3[e1])),z1(a4,o1,Object.keys(C3[o1])),a4);function oX(c){return~OY.indexOf(c)}function fX(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!oX(s)?s:null}var To=function(){var a=function(i){return x6(D2,function(n,l,o){return n[o]=x6(l,i,{}),n},{})};wo=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var l=i[2].filter(function(o){return typeof o=="number"});l.forEach(function(o){s[o.toString(16)]=n})}return s}),ko=a(function(s,i,n){if(s[n]=n,i[2]){var l=i[2].filter(function(o){return typeof o=="string"});l.forEach(function(o){s[o]=n})}return s}),Po=a(function(s,i,n){var l=i[2];return s[n]=n,l.forEach(function(o){s[o]=n}),s});var e="far"in D2||T.autoFetchSvg,r=x6(iX,function(s,i){var n=i[0],l=i[1],o=i[2];return l==="far"&&!e&&(l="fas"),typeof n=="string"&&(s.names[n]={prefix:l,iconName:o}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:l,iconName:o}),s},{names:{},unicodes:{}});Ao=r.names,_o=r.unicodes,q0=n6(T.styleDefault,{family:T.familyDefault})};GY(function(c){q0=n6(c.styleDefault,{family:T.familyDefault})});To();function U0(c,a){return(wo[c]||{})[a]}function tX(c,a){return(ko[c]||{})[a]}function N2(c,a){return(Po[c]||{})[a]}function Ro(c){return Ao[c]||{prefix:null,iconName:null}}function mX(c){var a=_o[c],e=U0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function z2(){return q0}var O0=function(){return{prefix:null,iconName:null,rest:[]}};function n6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?e1:e,s=C3[r][c],i=d3[r][c]||d3[r][s],n=c in B1.styles?c:null;return i||n||null}var r7=(e4={},z1(e4,e1,Object.keys(L3[e1])),z1(e4,o1,Object.keys(L3[o1])),e4);function l6(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},z1(a,e1,"".concat(T.cssPrefix,"-").concat(e1)),z1(a,o1,"".concat(T.cssPrefix,"-").concat(o1)),a),n=null,l=e1;(c.includes(i[e1])||c.some(function(t){return r7[e1].includes(t)}))&&(l=e1),(c.includes(i[o1])||c.some(function(t){return r7[o1].includes(t)}))&&(l=o1);var o=c.reduce(function(t,f){var m=fX(T.cssPrefix,f);if(D2[f]?(f=nX[l].includes(f)?BY[l][f]:f,n=f,t.prefix=f):lX[l].indexOf(f)>-1?(n=f,t.prefix=n6(f,{family:l})):m?t.iconName=m:f!==T.replacementClass&&f!==i[e1]&&f!==i[o1]&&t.rest.push(f),!s&&t.prefix&&t.iconName){var v=n==="fa"?Ro(t.iconName):{},u=N2(t.prefix,t.iconName);v.prefix&&(n=null),t.iconName=v.iconName||u||t.iconName,t.prefix=v.prefix||t.prefix,t.prefix==="far"&&!D2.far&&D2.fas&&!T.autoFetchSvg&&(t.prefix="fas")}return t},O0());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&l===o1&&(D2.fass||T.autoFetchSvg)&&(o.prefix="fass",o.iconName=N2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=z2()||"fas"),o}var hX=function(){function c(){bY(this,c),this.definitions={}}return xY(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){e.definitions[l]=_(_({},e.definitions[l]||{}),n[l]),s8(l,n[l]);var o=L3[e1][l];o&&s8(o,n[l]),To()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var n=s[i],l=n.prefix,o=n.iconName,t=n.icon,f=t[2];e[l]||(e[l]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(e[l][m]=t)}),e[l][o]=t}),e}}]),c}(),s7=[],q2={},Z2={},vX=Object.keys(Z2);function zX(c,a){var e=a.mixoutsTo;return s7=c,q2={},Object.keys(Z2).forEach(function(r){vX.indexOf(r)===-1&&delete Z2[r]}),s7.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(e[n]=s[n]),b4(s[n])==="object"&&Object.keys(s[n]).forEach(function(l){e[n]||(e[n]={}),e[n][l]=s[n][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(n){q2[n]||(q2[n]=[]),q2[n].push(i[n])})}r.provides&&r.provides(Z2)}),e}function i8(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=q2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function P2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=q2[c]||[];s.forEach(function(i){i.apply(null,e)})}function c2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Z2[c]?Z2[c].apply(null,a):void 0}function n8(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||z2();if(a)return a=N2(e,a)||a,a7(Bo.definitions,e,a)||a7(B1.styles,e,a)}var Bo=new hX,uX=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,P2("noAuto")},HX={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e2?(P2("beforeI2svg",a),c2("pseudoElements2svg",a),c2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,aX(function(){VX({autoReplaceSvgRoot:e}),P2("watch",a)})}},pX={icon:function(a){if(a===null)return null;if(b4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:N2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=n6(a[0]);return{prefix:r,iconName:N2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(T.cssPrefix,"-"))>-1||a.match(FY))){var s=l6(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||z2(),iconName:N2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=z2();return{prefix:i,iconName:N2(i,a)||a}}}},w1={noAuto:uX,config:T,dom:HX,parse:pX,library:Bo,findIconDefinition:n8,toHtml:R3},VX=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?r1:e;(Object.keys(B1.styles).length>0||T.autoFetchSvg)&&e2&&T.autoReplaceSvg&&w1.dom.i2svg({node:r})};function o6(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return R3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(e2){var r=r1.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function MX(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(D0(n)&&e.found&&!r.found){var l=e.width,o=e.height,t={x:l/o/2,y:.5};s.style=i6(_(_({},i),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function CX(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(T.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_(_({},s),{},{id:n}),children:r}]}]}function I0(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,n=c.transform,l=c.symbol,o=c.title,t=c.maskId,f=c.titleId,m=c.extra,v=c.watchable,u=v===void 0?!1:v,C=r.found?r:e,S=C.width,F=C.height,x=s==="fak",b=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(j){return m.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(m.classes).join(" "),H={children:[],attributes:_(_({},m.attributes),{},{"data-prefix":s,"data-icon":i,class:b,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(F)})},p=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/F*16*.0625,"em")}:{};u&&(H.attributes[_2]=""),o&&(H.children.push({tag:"title",attributes:{id:H.attributes["aria-labelledby"]||"title-".concat(f||b3())},children:[o]}),delete H.attributes.title);var M=_(_({},H),{},{prefix:s,iconName:i,main:e,mask:r,maskId:t,transform:n,symbol:l,styles:_(_({},p),m.styles)}),R=r.found&&e.found?c2("generateAbstractMask",M)||{children:[],attributes:{}}:c2("generateAbstractIcon",M)||{children:[],attributes:{}},B=R.children,I=R.attributes;return M.children=B,M.attributes=I,l?CX(M):MX(M)}function i7(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,n=c.extra,l=c.watchable,o=l===void 0?!1:l,t=_(_(_({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});o&&(t[_2]="");var f=_({},n.styles);D0(s)&&(f.transform=XY({transform:s,startCentered:!0,width:e,height:r}),f["-webkit-transform"]=f.transform);var m=i6(f);m.length>0&&(t.style=m);var v=[];return v.push({tag:"span",attributes:t,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function dX(c){var a=c.content,e=c.title,r=c.extra,s=_(_(_({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=i6(r.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var N6=B1.styles;function l8(c){var a=c[0],e=c[1],r=c.slice(4),s=P0(r,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(x2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(x2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(x2.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var LX={found:!1,width:512,height:512};function gX(c,a){!Lo&&!T.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function o8(c,a){var e=a;return a==="fa"&&T.styleDefault!==null&&(a=z2()),new Promise(function(r,s){if(c2("missingIconAbstract"),e==="fa"){var i=Ro(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&N6[a]&&N6[a][c]){var n=N6[a][c];return r(l8(n))}gX(c,a),r(_(_({},LX),{},{icon:T.showMissingIcons&&c?c2("missingIconAbstract")||{}:{}}))})}var n7=function(){},f8=T.measurePerformance&&$3&&$3.mark&&$3.measure?$3:{mark:n7,measure:n7},n3='FA "6.5.1"',bX=function(a){return f8.mark("".concat(n3," ").concat(a," begins")),function(){return Fo(a)}},Fo=function(a){f8.mark("".concat(n3," ").concat(a," ends")),f8.measure("".concat(n3," ").concat(a),"".concat(n3," ").concat(a," begins"),"".concat(n3," ").concat(a," ends"))},j0={begin:bX,end:Fo},o4=function(){};function l7(c){var a=c.getAttribute?c.getAttribute(_2):null;return typeof a=="string"}function xX(c){var a=c.getAttribute?c.getAttribute(R0):null,e=c.getAttribute?c.getAttribute(B0):null;return a&&e}function NX(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(T.replacementClass)}function yX(){if(T.autoReplaceSvg===!0)return f4.replace;var c=f4[T.autoReplaceSvg];return c||f4.replace}function SX(c){return r1.createElementNS("http://www.w3.org/2000/svg",c)}function wX(c){return r1.createElement(c)}function Eo(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?SX:wX:e;if(typeof c=="string")return r1.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(Eo(n,{ceFn:r}))}),s}function kX(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var f4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(Eo(s),e)}),e.getAttribute(_2)===null&&T.keepOriginalSource){var r=r1.createComment(kX(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~E0(e).indexOf(T.replacementClass))return f4.replace(a);var s=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,o){return o===T.replacementClass||o.match(s)?l.toSvg.push(o):l.toNode.push(o),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=r.map(function(l){return R3(l)}).join(`
`);e.setAttribute(_2,""),e.innerHTML=n}};function o7(c){c()}function Do(c,a){var e=typeof a=="function"?a:o4;if(c.length===0)e();else{var r=o7;T.mutateApproach===TY&&(r=v2.requestAnimationFrame||o7),r(function(){var s=yX(),i=j0.begin("mutate");c.map(s),i(),e()})}}var W0=!1;function qo(){W0=!0}function t8(){W0=!1}var N4=null;function f7(c){if(J5&&T.observeMutations){var a=c.treeCallback,e=a===void 0?o4:a,r=c.nodeCallback,s=r===void 0?o4:r,i=c.pseudoElementsCallback,n=i===void 0?o4:i,l=c.observeMutationsRoot,o=l===void 0?r1:l;N4=new J5(function(t){if(!W0){var f=z2();r3(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!l7(m.addedNodes[0])&&(T.searchPseudoElements&&n(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&l7(m.target)&&~UY.indexOf(m.attributeName))if(m.attributeName==="class"&&xX(m.target)){var v=l6(E0(m.target)),u=v.prefix,C=v.iconName;m.target.setAttribute(R0,u||f),C&&m.target.setAttribute(B0,C)}else NX(m.target)&&s(m.target)})}}),e2&&N4.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function AX(){N4&&N4.disconnect()}function _X(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),n=i[0],l=i.slice(1);return n&&l.length>0&&(r[n]=l.join(":").trim()),r},{})),e}function PX(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=l6(E0(c));return s.prefix||(s.prefix=z2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=tX(s.prefix,c.innerText)||U0(s.prefix,r8(c.innerText))),!s.iconName&&T.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function TX(c){var a=r3(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return T.autoA11y&&(e?a["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||b3()):(a["aria-hidden"]="true",a.focusable="false")),a}function RX(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function t7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=PX(c),r=e.iconName,s=e.prefix,i=e.rest,n=TX(c),l=i8("parseNodeAttributes",{},c),o=a.styleParser?_X(c):[];return _({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:I1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:n}},l)}var BX=B1.styles;function Uo(c){var a=T.autoReplaceSvg==="nest"?t7(c,{styleParser:!1}):t7(c);return~a.extra.classes.indexOf(go)?c2("generateLayersText",c,a):c2("generateSvgReplacementMutation",c,a)}var u2=new Set;F0.map(function(c){u2.add("fa-".concat(c))});Object.keys(C3[e1]).map(u2.add.bind(u2));Object.keys(C3[o1]).map(u2.add.bind(u2));u2=P3(u2);function m7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!e2)return Promise.resolve();var e=r1.documentElement.classList,r=function(m){return e.add("".concat(Q5,"-").concat(m))},s=function(m){return e.remove("".concat(Q5,"-").concat(m))},i=T.autoFetchSvg?u2:F0.map(function(f){return"fa-".concat(f)}).concat(Object.keys(BX));i.includes("fa")||i.push("fa");var n=[".".concat(go,":not([").concat(_2,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(_2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=r3(c.querySelectorAll(n))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();var o=j0.begin("onTree"),t=l.reduce(function(f,m){try{var v=Uo(m);v&&f.push(v)}catch(u){Lo||u.name==="MissingIcon"&&console.error(u)}return f},[]);return new Promise(function(f,m){Promise.all(t).then(function(v){Do(v,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),o(),f()})}).catch(function(v){o(),m(v)})})}function FX(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Uo(c).then(function(e){e&&Do([e],a)})}function EX(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:n8(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:n8(s||{})),c(r,_(_({},e),{},{mask:s}))}}var DX=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?I1:r,i=e.symbol,n=i===void 0?!1:i,l=e.mask,o=l===void 0?null:l,t=e.maskId,f=t===void 0?null:t,m=e.title,v=m===void 0?null:m,u=e.titleId,C=u===void 0?null:u,S=e.classes,F=S===void 0?[]:S,x=e.attributes,b=x===void 0?{}:x,H=e.styles,p=H===void 0?{}:H;if(a){var M=a.prefix,R=a.iconName,B=a.icon;return o6(_({type:"icon"},a),function(){return P2("beforeDOMElementCreation",{iconDefinition:a,params:e}),T.autoA11y&&(v?b["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(C||b3()):(b["aria-hidden"]="true",b.focusable="false")),I0({icons:{main:l8(B),mask:o?l8(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:R,transform:_(_({},I1),s),symbol:n,title:v,maskId:f,titleId:C,extra:{attributes:b,styles:p,classes:F}})})}},qX={mixout:function(){return{icon:EX(DX)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=m7,e.nodeCallback=FX,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?r1:r,i=e.callback,n=i===void 0?function(){}:i;return m7(s,n)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,n=r.titleId,l=r.prefix,o=r.transform,t=r.symbol,f=r.mask,m=r.maskId,v=r.extra;return new Promise(function(u,C){Promise.all([o8(s,l),f.iconName?o8(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var F=P0(S,2),x=F[0],b=F[1];u([e,I0({icons:{main:x,mask:b},prefix:l,iconName:s,transform:o,symbol:t,maskId:m,title:i,titleId:n,extra:v,watchable:!0})])}).catch(C)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.transform,l=e.styles,o=i6(l);o.length>0&&(s.style=o);var t;return D0(n)&&(t=c2("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),r.push(t||i.icon),{children:r,attributes:s}}}},UX={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return o6({type:"layer"},function(){P2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(l){Array.isArray(l)?l.map(function(o){n=n.concat(o.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(P3(i)).join(" ")},children:n}]})}}}},OX={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,n=r.classes,l=n===void 0?[]:n,o=r.attributes,t=o===void 0?{}:o,f=r.styles,m=f===void 0?{}:f;return o6({type:"counter",content:e},function(){return P2("beforeDOMElementCreation",{content:e,params:r}),dX({content:e.toString(),title:i,extra:{attributes:t,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(P3(l))}})})}}}},IX={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?I1:s,n=r.title,l=n===void 0?null:n,o=r.classes,t=o===void 0?[]:o,f=r.attributes,m=f===void 0?{}:f,v=r.styles,u=v===void 0?{}:v;return o6({type:"text",content:e},function(){return P2("beforeDOMElementCreation",{content:e,params:r}),i7({content:e,transform:_(_({},I1),i),title:l,extra:{attributes:m,styles:u,classes:["".concat(T.cssPrefix,"-layers-text")].concat(P3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,n=r.extra,l=null,o=null;if(Vo){var t=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();l=f.width/t,o=f.height/t}return T.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,i7({content:e.innerHTML,width:l,height:o,transform:i,title:s,extra:n,watchable:!0})])}}},jX=new RegExp('"',"ug"),h7=[1105920,1112319];function WX(c){var a=c.replace(jX,""),e=sX(a,0),r=e>=h7[0]&&e<=h7[1],s=a.length===2?a[0]===a[1]:!1;return{value:r8(s?a[0]:a),isSecondary:r||s}}function v7(c,a){var e="".concat(PY).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=r3(c.children),n=i.filter(function(B){return B.getAttribute(e8)===a})[0],l=v2.getComputedStyle(c,a),o=l.getPropertyValue("font-family").match(EY),t=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(n&&!o)return c.removeChild(n),r();if(o&&f!=="none"&&f!==""){var m=l.getPropertyValue("content"),v=~["Sharp"].indexOf(o[2])?o1:e1,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?d3[v][o[2].toLowerCase()]:DY[v][t],C=WX(m),S=C.value,F=C.isSecondary,x=o[0].startsWith("FontAwesome"),b=U0(u,S),H=b;if(x){var p=mX(S);p.iconName&&p.prefix&&(b=p.iconName,u=p.prefix)}if(b&&!F&&(!n||n.getAttribute(R0)!==u||n.getAttribute(B0)!==H)){c.setAttribute(e,H),n&&c.removeChild(n);var M=RX(),R=M.extra;R.attributes[e8]=a,o8(b,u).then(function(B){var I=I0(_(_({},M),{},{icons:{main:B,mask:O0()},prefix:u,iconName:H,extra:R,watchable:!0})),j=r1.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(j,c.firstChild):c.appendChild(j),j.outerHTML=I.map(function(O){return R3(O)}).join(`
`),c.removeAttribute(e),r()}).catch(s)}else r()}else r()})}function GX(c){return Promise.all([v7(c,"::before"),v7(c,"::after")])}function ZX(c){return c.parentNode!==document.head&&!~RY.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(e8)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function z7(c){if(e2)return new Promise(function(a,e){var r=r3(c.querySelectorAll("*")).filter(ZX).map(GX),s=j0.begin("searchPseudoElements");qo(),Promise.all(r).then(function(){s(),t8(),a()}).catch(function(){s(),t8(),e()})})}var $X={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=z7,e}}},provides:function(a){a.pseudoElements2svg=function(e){var r=e.node,s=r===void 0?r1:r;T.searchPseudoElements&&z7(s)}}},u7=!1,KX={mixout:function(){return{dom:{unwatch:function(){qo(),u7=!0}}}},hooks:function(){return{bootstrap:function(){f7(i8("mutationObserverCallbacks",{}))},noAuto:function(){AX()},watch:function(e){var r=e.observeMutationsRoot;u7?t8():f7(i8("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},H7=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),n=i[0],l=i.slice(1).join("-");if(n&&l==="h")return r.flipX=!0,r;if(n&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(n){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},e)},YX={mixout:function(){return{parse:{transform:function(e){return H7(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-transform");return s&&(e.transform=H7(s)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,s=e.transform,i=e.containerWidth,n=e.iconWidth,l={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(s.x*32,", ").concat(s.y*32,") "),t="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),f="rotate(".concat(s.rotate," 0 0)"),m={transform:"".concat(o," ").concat(t," ").concat(f)},v={transform:"translate(".concat(n/2*-1," -256)")},u={outer:l,inner:m,path:v};return{tag:"g",attributes:_({},u.outer),children:[{tag:"g",attributes:_({},u.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:_(_({},r.icon.attributes),u.path)}]}]}}}},y6={x:0,y:0,width:"100%",height:"100%"};function p7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function XX(c){return c.tag==="g"?c.children:[c]}var JX={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-mask"),i=s?l6(s.split(" ").map(function(n){return n.trim()})):O0();return i.prefix||(i.prefix=z2()),e.mask=i,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.mask,l=e.maskId,o=e.transform,t=i.width,f=i.icon,m=n.width,v=n.icon,u=YY({transform:o,containerWidth:m,iconWidth:t}),C={tag:"rect",attributes:_(_({},y6),{},{fill:"white"})},S=f.children?{children:f.children.map(p7)}:{},F={tag:"g",attributes:_({},u.inner),children:[p7(_({tag:f.tag,attributes:_(_({},f.attributes),u.path)},S))]},x={tag:"g",attributes:_({},u.outer),children:[F]},b="mask-".concat(l||b3()),H="clip-".concat(l||b3()),p={tag:"mask",attributes:_(_({},y6),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,x]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:H},children:XX(v)},p]};return r.push(M,{tag:"rect",attributes:_({fill:"currentColor","clip-path":"url(#".concat(H,")"),mask:"url(#".concat(b,")")},y6)}),{children:r,attributes:s}}}},QX={provides:function(a){var e=!1;v2.matchMedia&&(e=v2.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:_(_({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=_(_({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:_(_({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||l.children.push({tag:"animate",attributes:_(_({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_(_({},n),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:_(_({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:_(_({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:_(_({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_(_({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},cJ={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return e.symbol=i,e}}}},aJ=[QY,qX,UX,OX,IX,$X,KX,YX,JX,QX,cJ];zX(aJ,{mixoutsTo:w1});w1.noAuto;w1.config;var eJ=w1.library;w1.dom;var m8=w1.parse;w1.findIconDefinition;w1.toHtml;var rJ=w1.icon;w1.layer;w1.text;w1.counter;function V7(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function K1(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?V7(Object(e),!0).forEach(function(r){g1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):V7(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function y4(c){"@babel/helpers - typeof";return y4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},y4(c)}function g1(c,a,e){return a=lJ(a),a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function sJ(c,a){if(c==null)return{};var e={},r=Object.keys(c),s,i;for(i=0;i<r.length;i++)s=r[i],!(a.indexOf(s)>=0)&&(e[s]=c[s]);return e}function iJ(c,a){if(c==null)return{};var e=sJ(c,a),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(s=0;s<i.length;s++)r=i[s],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(c,r)&&(e[r]=c[r])}return e}function nJ(c,a){if(typeof c!="object"||c===null)return c;var e=c[Symbol.toPrimitive];if(e!==void 0){var r=e.call(c,a||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function lJ(c){var a=nJ(c,"string");return typeof a=="symbol"?a:String(a)}var oJ=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Oo={exports:{}};(function(c){(function(a){var e=function(x,b,H){if(!t(b)||m(b)||v(b)||u(b)||o(b))return b;var p,M=0,R=0;if(f(b))for(p=[],R=b.length;M<R;M++)p.push(e(x,b[M],H));else{p={};for(var B in b)Object.prototype.hasOwnProperty.call(b,B)&&(p[x(B,H)]=e(x,b[B],H))}return p},r=function(x,b){b=b||{};var H=b.separator||"_",p=b.split||/(?=[A-Z])/;return x.split(p).join(H)},s=function(x){return C(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(b,H){return H?H.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var b=s(x);return b.substr(0,1).toUpperCase()+b.substr(1)},n=function(x,b){return r(x,b).toLowerCase()},l=Object.prototype.toString,o=function(x){return typeof x=="function"},t=function(x){return x===Object(x)},f=function(x){return l.call(x)=="[object Array]"},m=function(x){return l.call(x)=="[object Date]"},v=function(x){return l.call(x)=="[object RegExp]"},u=function(x){return l.call(x)=="[object Boolean]"},C=function(x){return x=x-0,x===x},S=function(x,b){var H=b&&"process"in b?b.process:b;return typeof H!="function"?x:function(p,M){return H(p,x,M)}},F={camelize:s,decamelize:n,pascalize:i,depascalize:n,camelizeKeys:function(x,b){return e(S(s,b),x)},decamelizeKeys:function(x,b){return e(S(n,b),x,b)},pascalizeKeys:function(x,b){return e(S(i,b),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};c.exports?c.exports=F:a.humps=F})(oJ)})(Oo);var fJ=Oo.exports,tJ=["class","style"];function mJ(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var r=e.indexOf(":"),s=fJ.camelize(e.slice(0,r)),i=e.slice(r+1).trim();return a[s]=i,a},{})}function hJ(c){return c.split(/\s+/).reduce(function(a,e){return a[e]=!0,a},{})}function Io(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof c=="string")return c;var r=(c.children||[]).map(function(o){return Io(o)}),s=Object.keys(c.attributes||{}).reduce(function(o,t){var f=c.attributes[t];switch(t){case"class":o.class=hJ(f);break;case"style":o.style=mJ(f);break;default:o.attrs[t]=f}return o},{attrs:{},class:{},style:{}});e.class;var i=e.style,n=i===void 0?{}:i,l=iJ(e,tJ);return N9(c.tag,K1(K1(K1({},a),{},{class:s.class,style:K1(K1({},s.style),n)},s.attrs),l),r)}var jo=!1;try{jo=!0}catch{}function vJ(){if(!jo&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}function S6(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?g1({},c,a):{}}function zJ(c){var a,e=(a={"fa-spin":c.spin,"fa-pulse":c.pulse,"fa-fw":c.fixedWidth,"fa-border":c.border,"fa-li":c.listItem,"fa-inverse":c.inverse,"fa-flip":c.flip===!0,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both"},g1(a,"fa-".concat(c.size),c.size!==null),g1(a,"fa-rotate-".concat(c.rotation),c.rotation!==null),g1(a,"fa-pull-".concat(c.pull),c.pull!==null),g1(a,"fa-swap-opacity",c.swapOpacity),g1(a,"fa-bounce",c.bounce),g1(a,"fa-shake",c.shake),g1(a,"fa-beat",c.beat),g1(a,"fa-fade",c.fade),g1(a,"fa-beat-fade",c.beatFade),g1(a,"fa-flash",c.flash),g1(a,"fa-spin-pulse",c.spinPulse),g1(a,"fa-spin-reverse",c.spinReverse),a);return Object.keys(e).map(function(r){return e[r]?r:null}).filter(function(r){return r})}function M7(c){if(c&&y4(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(m8.icon)return m8.icon(c);if(c===null)return null;if(y4(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}var uJ=F4({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(a){return[!0,!1,"horizontal","vertical","both"].indexOf(a)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(a){return["right","left"].indexOf(a)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(a){return[90,180,270].indexOf(Number.parseInt(a,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(a){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(a)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(a,e){var r=e.attrs,s=d2(function(){return M7(a.icon)}),i=d2(function(){return S6("classes",zJ(a))}),n=d2(function(){return S6("transform",typeof a.transform=="string"?m8.transform(a.transform):a.transform)}),l=d2(function(){return S6("mask",M7(a.mask))}),o=d2(function(){return rJ(s.value,K1(K1(K1(K1({},i.value),n.value),l.value),{},{symbol:a.symbol,title:a.title,titleId:a.titleId,maskId:a.maskId}))});r4(o,function(f){if(!f)return vJ("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var t=d2(function(){return o.value?Io(o.value.abstract[0],{},r):null});return function(){return t.value}}});const HJ=H2(c=>{eJ.add(gY,JL),c.vueApp.component("font-awesome-icon",uJ)}),pJ=[Ov,jv,Zv,$v,Kv,Yv,Jv,HJ],VJ=""+new URL("FS_hyousi_middle.baN5-Eiq.jpg",import.meta.url).href,MJ=""+new URL("book1.H73qznYF.jpg",import.meta.url).href,CJ=""+new URL("book2.FXkliYo8.jpg",import.meta.url).href,dJ=""+new URL("hyoushi.eyy8id6w.jpg",import.meta.url).href,LJ=""+new URL("map.1R7IEQB0.jpg",import.meta.url).href,gJ=""+new URL("postcard.KM8C1gXn.jpg",import.meta.url).href,bJ=""+new URL("01.Tbi6YKH_.jpg",import.meta.url).href,xJ=""+new URL("02.8djSG4VY.jpg",import.meta.url).href,NJ=""+new URL("03.FeQRUdLN.jpg",import.meta.url).href,yJ=""+new URL("04.agqB_PxS.jpg",import.meta.url).href,SJ=""+new URL("05.WrE4MbBp.jpg",import.meta.url).href,wJ=""+new URL("06.aeCpNUAe.jpg",import.meta.url).href,kJ=""+new URL("07.pba56mI5.jpg",import.meta.url).href,AJ=""+new URL("08.cu8oU1KI.jpg",import.meta.url).href,_J=""+new URL("09.XfkeYdyr.jpg",import.meta.url).href,PJ=""+new URL("10.g2nJaGjm.jpg",import.meta.url).href,TJ=""+new URL("11.EFEKq2ft.jpg",import.meta.url).href,RJ=""+new URL("01.hChrYr1g.jpg",import.meta.url).href,BJ=""+new URL("02.k6CuFHv1.jpg",import.meta.url).href,FJ=""+new URL("03.1I8DA-g7.jpg",import.meta.url).href,EJ=""+new URL("04.hzm9_TRs.jpg",import.meta.url).href,DJ=""+new URL("05._NG9LByi.jpg",import.meta.url).href,qJ=""+new URL("06.2U2CYqZS.jpg",import.meta.url).href,UJ=""+new URL("07.oK56M4Lo.jpg",import.meta.url).href,OJ=""+new URL("08.G7kXcpVI.jpg",import.meta.url).href,IJ=""+new URL("09.ESWHuGgk.jpg",import.meta.url).href,jJ=""+new URL("10.gY2UYjra.jpg",import.meta.url).href,WJ=""+new URL("11.bBJQhnrA.jpg",import.meta.url).href,GJ=F4({async setup(){const c=[{id:1,name:"あんじゅ",description:"説明1",twitter:"https://twitter.com/apple_pie_0321",src:"01",pixiv:"https://www.pixiv.net/users/4036156"},{id:2,name:"イセ",description:"説明2",twitter:"https://twitter.com/tasu_hiku_",src:"02",pixiv:"https://www.pixiv.net/users/3014124"},{id:3,name:"タクえもん",description:"説明3",twitter:"https://twitter.com/DoraTakubou",src:"03",pixiv:"https://www.pixiv.net/users/11660552"},{id:4,name:"ツイートおじさん",description:"説明4",twitter:"https://twitter.com/co9EZOLIX4dRRG0",src:"04",pixiv:"https://www.pixiv.net/users/12512382"},{id:5,name:"とりか",description:"説明5",twitter:"https://twitter.com/t0rika",src:"05",pixiv:"https://www.pixiv.net/users/2638861"},{id:6,name:"名無しのゴンスケ",description:"説明6",twitter:"https://twitter.com/nanashigonsuke",src:"06",pixiv:"https://www.pixiv.net/users/45100114"},{id:7,name:"マサえもん",description:"説明7",twitter:"https://twitter.com/masa7819",src:"07",pixiv:"https://www.pixiv.net/users/3942792"},{id:8,name:"枕さん",description:"説明8",twitter:"https://twitter.com/makura8711",src:"08",pixiv:"https://www.pixiv.net/users/3106182"},{id:9,name:"望月田吾作",description:"説明9",twitter:"https://twitter.com/mt_tg",src:"09",pixiv:"https://www.pixiv.net/users/415546"},{id:10,name:"矢島ともあき",description:"説明10",twitter:"https://twitter.com/yjmtomoaki",src:"10",pixiv:"https://www.pixiv.net/users/6451424"},{id:11,name:"楽来一知",description:"説明11",twitter:"https://twitter.com/rakurai_66UFO",src:"11",pixiv:"https://www.pixiv.net/users/474750"}],a=[{id:1,name:"夏色",description:"枕さん (@makura8711)による、Twitterに掲載した夏がテーマのイラストをポストカードにしました。1セット3枚入り。",subdescription:"",src:"postcard",url:"https://twitter.com/makura8711/status/1604460429945999362",new:!0,size:"ポストカード",pages:"",price:"100円",onlineOrderUrl:""},{id:2,name:"THE BOOK OF CIRCLES",description:"望月田吾作 (@mt_tg)によるフルカラードラえもんイラスト総集編",subdescription:"2018年-2022年に描かれた「ドラえもん」を中心としたイラストを収録。再録作も適宜加筆修正しています",src:"book1",url:"https://www.pixiv.net/artworks/103332022",new:!0,size:"B5",pages:"36ページ",price:"800円",onlineOrderUrl:"https://motitago.booth.pm/items/4441457"},{id:3,name:"Perfect Blue",description:"望月田吾作 (@mt_tg)がC93で頒布したフルカラードラえもんイラスト本",subdescription:"2017年までに描かれた「青背景ドラえもん」を中心としたイラストを収録",src:"book2",url:"https://www.pixiv.net/artworks/66256659",new:!1,size:"B5",pages:"32ページ",price:"700円",onlineOrderUrl:"https://motitago.booth.pm/items/4441438"}],e=w2(c.map(l=>!1));return{authorArr:c,contentArr:a,hoveredArr:e,scrollToTop:()=>{window.scrollTo({top:0,behavior:"smooth"})},getImageUrl:l=>new URL(Object.assign({"./assets/FS_hyousi_middle.jpg":VJ,"./assets/book1.jpg":MJ,"./assets/book2.jpg":CJ,"./assets/hyoushi.jpg":dJ,"./assets/map.jpg":LJ,"./assets/postcard.jpg":gJ})[`./assets/${l}.jpg`],import.meta.url).href,getAuthorImageUrl:l=>new URL(Object.assign({"./assets/authors/01.jpg":bJ,"./assets/authors/02.jpg":xJ,"./assets/authors/03.jpg":NJ,"./assets/authors/04.jpg":yJ,"./assets/authors/05.jpg":SJ,"./assets/authors/06.jpg":wJ,"./assets/authors/07.jpg":kJ,"./assets/authors/08.jpg":AJ,"./assets/authors/09.jpg":_J,"./assets/authors/10.jpg":PJ,"./assets/authors/11.jpg":TJ})[`./assets/authors/${l}.jpg`],import.meta.url).href,getAuthorAltImageUrl:l=>new URL(Object.assign({"./assets/authors-alt/01.jpg":RJ,"./assets/authors-alt/02.jpg":BJ,"./assets/authors-alt/03.jpg":FJ,"./assets/authors-alt/04.jpg":EJ,"./assets/authors-alt/05.jpg":DJ,"./assets/authors-alt/06.jpg":qJ,"./assets/authors-alt/07.jpg":UJ,"./assets/authors-alt/08.jpg":OJ,"./assets/authors-alt/09.jpg":IJ,"./assets/authors-alt/10.jpg":jJ,"./assets/authors-alt/11.jpg":WJ})[`./assets/authors-alt/${l}.jpg`],import.meta.url).href}}}),ZJ=""+new URL("FS_hyousi_middle.baN5-Eiq.jpg",import.meta.url).href,$J=""+new URL("hyoushi.eyy8id6w.jpg",import.meta.url).href,KJ=""+new URL("map.1R7IEQB0.jpg",import.meta.url).href,YJ=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e},XJ={ref:"scrollTopButton",class:"fixed w-full flex justify-end bottom-0 pb-3 pr-5 transition"},JJ={class:"text-gray-800 p-2 hover:text-blue-400 bg-white/50 rounded transition"},QJ=k("div",{class:"scroll-smooth"},[k("div",{class:"bg-blue-100 border-t-4 border-red-500 text-gray-700 px-4 py-3 my-2",role:"alert"},[k("p",{class:"font-bold"},"カンヅメカンからのお知らせ2"),k("p",{class:"text-sm"},[h1("FSの第二号をC103で出版しました! "),k("a",{class:"text-blue-600",href:"https://yjmtomoaki.booth.pm/items/5330491"},"[矢島ともあきのBOOTH]"),h1("より購入よろしくお願いします。 ")])]),k("div",{class:"bg-blue-100 border-t-4 border-blue-500 text-gray-700 px-4 py-3 my-2",role:"alert"},[k("p",{class:"font-bold"},"カンヅメカンからのお知らせ"),k("p",{class:"text-sm"},[h1("FSの通販を開始しました。 "),k("a",{class:"text-blue-600",href:"https://yjmtomoaki.booth.pm/items/4446490"},"[矢島ともあきのBOOTH]"),h1("より購入よろしくお願いします。 ")]),k("p",{class:"text-sm"},[h1("望月によるドラえもん本の通販を開始しました。 "),k("a",{class:"text-blue-600",href:"https://motitago.booth.pm/"},"[望月田吾作のBOOTH]"),h1("より購入よろしくお願いします。 ")])]),k("div",{class:"flex flex-row justify-center items-center",id:"abstract"},[k("div",{class:"grid grid-cols-1 sm:grid-cols-2"},[k("div",{class:"h-72 sm:h-screen items-center text-center"},[k("img",{class:"cover-img w-full h-full sm:h-screen object-center object-cover",loading:"lazy",src:ZJ,alt:"FS表紙画像"})]),k("div",{class:"p-6 mx-8 my-6 items-center align-middle bg-[url('~/assets/fs.svg')] bg-contain bg-no-repeat max-w-none"},[k("h2",{class:"text-lg md:text-2xl font-bold"},"藤子不二雄オマージュマガジン"),k("h1",{class:"text-2xl md:text-3xl font-bold"},"フジコ・スピリット"),k("p",{class:"text-right text-md md:text-lg font-semibold max-w-lg"},[h1("by "),k("a",{class:"text-blue-600",href:"https://webcatalog-free.circle.ms/Circle/16802791"},"カンヅメカン")]),k("blockquote",{class:"text-md text-gray-900 dark:text-white my-10"},[k("svg",{"aria-hidden":"true",class:"w-8 h-8 text-gray-400",viewBox:"0 0 24 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[k("path",{d:"M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z",fill:"currentColor"})]),k("p",{class:"text-justify text-sm font-semibold max-w-lg"},[h1(" 日本を代表するトップクリエイターの多くは、インタビュー等を通して「自分の創作活動の原体験は藤子不二雄作品にある」と語っています。"),k("br"),h1(" 本書「フジコ・スピリット」では、SNSで活動される藤子作品を愛してやまない11名の創作家による漫画・イラスト・小説をオムニバス形式で掲載させていただきました。 ")]),k("p",{class:"text-right text-md font-bold max-w-lg"},[h1(" ― 矢島ともあき ("),k("a",{class:"text-blue-600",href:"https://twitter.com/yjmtomoaki",target:"_blank"},"@yjmtomoaki"),h1(") ")])]),k("img",{class:"my-4 items-center text-center max-w-sm w-full object-full",src:$J,alt:"FSのと表紙/裏表紙"}),k("h2",{class:"my-4 text-xl md:text-2xl font-medium"}," 詳細情報 "),k("ul",{class:"space-y-1 max-w-md text-sm list-disc list-inside"},[k("li",null," コミックマーケット101 (C101) "),k("li",null,[h1(" 頒布場所: "),k("span",{class:"font-semibold"},"1日目 東ハ-50a カンヅメカン")]),k("li",null,[h1(" 頒布価格: "),k("span",{class:"font-semibold"},"500円")]),k("li",null,[h1(" 内容: "),k("span",{class:"font-semibold"},"A5 48ページ")]),k("li",null,[h1(" 通販: "),k("span",{class:"font-semibold"},[k("a",{class:"text-blue-600",href:"https://yjmtomoaki.booth.pm/items/4446490"},"[BOOTH]")])])])])])])],-1),cQ={class:"scroll-smooth my-8"},aQ={id:"authors"},eQ=k("div",{class:"my-4 text-center lign-middle"},[k("h1",null,[k("span",{class:"text-2xl md:text-3xl items-center font-medium"},"参加者一覧")])],-1),rQ={class:"flex justify-center items-center align-middle"},sQ={class:"mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center align-middle"},iQ=["src","alt","onMouseover","onMouseout","onTouchstart","onTouchend"],nQ={class:"mx-7 mt-5"},lQ={class:"font-bold text-xl mb-2"},oQ={class:"px-6 pt-4 pb-2"},fQ={key:0,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},tQ=["href"],mQ={key:1,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},hQ=["href"],vQ={class:"scroll-smooth my-8"},zQ={id:"distributions"},uQ={class:"mx-5 md:mx-15 my-12 text-center lign-middle"},HQ=k("h1",{class:"text-3xl items-center font-medium"},"その他の頒布物",-1),pQ={class:"flex justify-center items-center align-middle"},VQ={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch align-middle"},MQ=["href"],CQ=["src","alt"],dQ={class:"mx-5 mt-5"},LQ={class:"font-bold text-lg mb-2 text-left"},gQ={class:"text-gray-700 text-sm text-left"},bQ={key:0,class:"text-gray-700 text-sm text-left mt-2"},xQ={class:"text-gray-700 text-sm text-left"},NQ=["href"],yQ={key:1,class:"text-gray-700 text-sm text-left"},SQ=["href"],wQ={class:"px-6 pt-4 pb-2 text-left"},kQ={key:0,class:"inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"},AQ={key:1,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},_Q={key:2,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2"},PQ=Ft('<div class="flex flex-row min-h-screen justify-center items-center" id="access"><div class="items-center align-middle"><div class="relative top-48 left-5 right-5"><p class="text-2xl md:text-3xl text-white font-medium">2022/12/30 (金) 東京ビッグサイト</p><p class="text-2xl md:text-3xl text-white font-medium">東5ホール ハ-50a 「カンヅメカン」</p></div><img class="place-doraemon-img w-screen max-w-screen-xl h-screen object-cover" loading="lazy" src="'+KJ+'" alt="ドラえもんが空を飛んでいる背景画像"><div class="self-end space-y-4 bg-gray-800" id="footer"><p class="text-1xl inline-block align-bottom text-white">© 2022 Tagosaku Mochiduki</p></div></div></div>',1);function TQ(c,a,e,r,s,i){const n=Gf("font-awesome-icon");return m1(),k1(x1,null,[k("div",XJ,[k("div",JJ,[k("button",{id:"scrollToTopButton",onClick:a[0]||(a[0]=(...l)=>c.scrollToTop&&c.scrollToTop(...l))}," Scroll to top ")])],512),QJ,k("div",cQ,[k("div",aQ,[eQ,k("div",rQ,[k("div",sQ,[(m1(!0),k1(x1,null,m5(c.authorArr,(l,o)=>(m1(),k1("div",{class:"max-w-sm my-6 mx-4 rounded overflow-hidden shadow-lg",key:o},[k("img",{class:"author-img w-full h-48 object-cover",src:c.hoveredArr[o]?c.getAuthorAltImageUrl(l.src):c.getAuthorImageUrl(l.src),alt:l.name,loading:"lazy",onMouseover:t=>c.hoveredArr[o]=!0,onMouseout:t=>c.hoveredArr[o]=!1,onTouchstart:t=>c.hoveredArr[o]=!0,onTouchend:t=>c.hoveredArr[o]=!1},null,40,iQ),k("div",nQ,[k("div",lQ,V2(l.name),1)]),k("div",oQ,[l.twitter?(m1(),k1("span",fQ,[k("a",{href:l.twitter},[l1(n,{icon:"fa-brands fa-twitter"}),h1(" Twitter")],8,tQ)])):C2("",!0),l.pixiv?(m1(),k1("span",mQ,[k("a",{href:l.pixiv},[l1(n,{icon:["fas","image"]}),h1(" Pixiv ")],8,hQ)])):C2("",!0)])]))),128))])])])]),k("div",vQ,[k("div",zQ,[k("div",uQ,[HQ,k("div",pQ,[k("div",VQ,[(m1(!0),k1(x1,null,m5(c.contentArr,(l,o)=>(m1(),k1("div",{class:"max-w-sm my-6 mx-5 rounded overflow-hidden shadow-lg",key:o},[k("a",{href:l.url,target:"”_blank”"},[k("img",{class:"publish-content-img w-full h-84 max-h-84 object-cover",src:c.getImageUrl(l.src),alt:l.name,loading:"lazy"},null,8,CQ)],8,MQ),k("div",dQ,[k("div",LQ,V2(l.name),1),k("p",gQ,V2(l.description),1),l.subdescription?(m1(),k1("p",bQ,V2(l.subdescription),1)):C2("",!0),k("p",xQ,[k("a",{class:"text-blue-600",href:l.url,target:"”_blank”"},"[詳細情報]",8,NQ)]),l.onlineOrderUrl?(m1(),k1("p",yQ,[k("a",{class:"text-blue-600",href:l.onlineOrderUrl,target:"”_blank”"},"[オンライン販売]",8,SQ)])):C2("",!0)]),k("div",wQ,[l.new?(m1(),k1("span",kQ," 新刊 ")):C2("",!0),l.size||l.pages?(m1(),k1("span",AQ,V2(l.size)+" "+V2(l.pages),1)):C2("",!0),l.price?(m1(),k1("span",_Q,V2(l.price),1)):C2("",!0)])]))),128))])])])])]),PQ],64)}const RQ=YJ(GJ,[["render",TQ]]),BQ={__name:"nuxt-error-page",props:{error:Object},setup(c){const e=c.error;(e.stack||"").split(`
`).splice(1).map(m=>({text:m.replace("webpack:/","").replace(".vue",".js").trim(),internal:m.includes("node_modules")&&!m.includes(".cache")||m.includes("internal")||m.includes("new Promise")})).map(m=>`<span class="stack${m.internal?" internal":""}">${m.text}</span>`).join(`
`);const r=Number(e.statusCode||500),s=r===404,i=e.statusMessage??(s?"Page Not Found":"Internal Server Error"),n=e.message||e.toString(),l=void 0,f=s?t5(()=>B5(()=>import("./error-404.mw2Cbr04.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(m=>m.default||m)):t5(()=>B5(()=>import("./error-500.YNp5H2Uc.js"),__vite__mapDeps([3,1,4]),import.meta.url).then(m=>m.default||m));return(m,v)=>(m1(),b2(H1(f),sf(g9({statusCode:H1(r),statusMessage:H1(i),description:H1(n),stack:H1(l)})),null,16))}},C7={__name:"nuxt-root",setup(c){const a=()=>null,e=p1(),r=e.deferHydration(),s=!1;f9(Q9,ec()),e.hooks.callHookWith(l=>l.map(o=>o()),"vue:setup");const i=q8();n9((l,o,t)=>{if(e.hooks.callHook("vue:error",l,o,t).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),kv(l)&&(l.fatal||l.unhandled))return e.runWithContext(()=>Sv(l)),!1});const n=!1;return(l,o)=>(m1(),b2(Yf,{onResolve:H1(r)},{default:Q7(()=>[H1(i)?(m1(),b2(H1(BQ),{key:0,error:H1(i)},null,8,["error"])):H1(n)?(m1(),b2(H1(a),{key:1,context:H1(n)},null,8,["context"])):H1(s)?(m1(),b2(Zf(H1(s)),{key:2})):(m1(),b2(H1(RQ),{key:3}))]),_:1},8,["onResolve"]))}};let d7;{let c;d7=async function(){var n,l;if(c)return c;const r=!!((n=window.__NUXT__)!=null&&n.serverRendered||((l=document.getElementById("__NUXT_DATA__"))==null?void 0:l.dataset.ssr)==="true")?Mm(C7):Vm(C7),s=Lh({vueApp:r});async function i(o){await s.callHook("app:error",o),s.payload.error=s.payload.error||o}r.config.errorHandler=i;try{await bh(s,pJ)}catch(o){i(o)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(Bv),await s.hooks.callHook("app:mounted",r),await b8()}catch(o){i(o)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},c=d7().catch(a=>{throw console.error("Error while mounting app:",a),a})}export{Q7 as A,h1 as B,FQ as C,EQ as D,qQ as E,DQ as F,r4 as G,nt as H,it as I,$6 as J,Ot as K,YJ as _,lc as a,G5 as b,d2 as c,F4 as d,ht as e,OQ as f,N9 as g,q4 as h,Gf as i,e3 as j,A9 as k,L4 as l,p1 as m,UQ as n,ft as o,y3 as p,_v as q,w2 as r,B8 as s,m1 as t,U4 as u,k1 as v,W6 as w,k as x,V2 as y,l1 as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./error-404.mw2Cbr04.js","./vue.f36acd1f.PXcXSaUq.js","./error-404.TsBWxgAa.css","./error-500.YNp5H2Uc.js","./error-500.s2VBNbvW.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}