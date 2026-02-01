export const id = 772;
export const ids = [772];
export const modules = {

/***/ 1772:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  render: () => (/* binding */ node_render)
});

// UNUSED EXPORTS: plainTextSelectors, pretty, toPlainText

// NAMESPACE OBJECT: ./node_modules/prettier/plugins/html.mjs
var html_namespaceObject = {};
__webpack_require__.r(html_namespaceObject);
__webpack_require__.d(html_namespaceObject, {
  "default": () => (ws),
  languages: () => (ms),
  options: () => (ds),
  parsers: () => (Qr),
  printers: () => (Ll)
});

;// CONCATENATED MODULE: ./node_modules/prettier/plugins/html.mjs
var Jr=Object.defineProperty;var Zr=e=>{throw TypeError(e)};var ks=(e,t,r)=>t in e?Jr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var en=(e,t)=>{for(var r in t)Jr(e,r,{get:t[r],enumerable:!0})};var ir=(e,t,r)=>ks(e,typeof t!="symbol"?t+"":t,r),xs=(e,t,r)=>t.has(e)||Zr("Cannot "+r);var $e=(e,t,r)=>(xs(e,t,"read from private field"),r?r.call(e):t.get(e)),tn=(e,t,r)=>t.has(e)?Zr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);var ws={};en(ws,{languages:()=>ms,options:()=>ds,parsers:()=>Qr,printers:()=>Ll});var xe=(e,t)=>(r,n,...i)=>r|1&&n==null?void 0:(t.call(n)??n[e]).apply(n,i);var As=String.prototype.replaceAll??function(e,t){return e.global?this.replace(e,t):this.split(e).join(t)},ys=xe("replaceAll",function(){if(typeof this=="string")return As}),w=ys;function Ns(e){return this[e<0?this.length+e:e]}var Ls=xe("at",function(){if(Array.isArray(this)||typeof this=="string")return Ns}),F=Ls;var Ps=()=>{},ze=Ps;var Ye="string",je="array",St="cursor",Ae="indent",ye="align",Et="trim",Ne="group",Le="fill",Pe="if-break",Oe="indent-if-break",Ct="line-suffix",vt="line-suffix-boundary",Y="line",Tt="label",De="break-parent",bt=new Set([St,Ae,ye,Et,Ne,Le,Pe,Oe,Ct,vt,Y,Tt,De]);function Os(e){if(typeof e=="string")return Ye;if(Array.isArray(e))return je;if(!e)return;let{type:t}=e;if(bt.has(t))return t}var wt=Os;var Ds=e=>new Intl.ListFormat("en-US",{type:"disjunction"}).format(e);function Is(e){let t=e===null?"null":typeof e;if(t!=="string"&&t!=="object")return`Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;if(wt(e))throw new Error("doc is valid.");let r=Object.prototype.toString.call(e);if(r!=="[object Object]")return`Unexpected doc '${r}'.`;let n=Ds([...bt].map(i=>`'${i}'`));return`Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`}var sr=class extends Error{name="InvalidDocError";constructor(t){super(Is(t)),this.doc=t}},rn=sr;function ar(e,t){if(typeof e=="string")return t(e);let r=new Map;return n(e);function n(s){if(r.has(s))return r.get(s);let a=i(s);return r.set(s,a),a}function i(s){switch(wt(s)){case je:return t(s.map(n));case Le:return t({...s,parts:s.parts.map(n)});case Pe:return t({...s,breakContents:n(s.breakContents),flatContents:n(s.flatContents)});case Ne:{let{expandedStates:a,contents:o}=s;return a?(a=a.map(n),o=a[0]):o=n(o),t({...s,contents:o,expandedStates:a})}case ye:case Ae:case Oe:case Tt:case Ct:return t({...s,contents:n(s.contents)});case Ye:case St:case Et:case vt:case Y:case De:return t(s);default:throw new rn(s)}}}function L(e,t=nn){return ar(e,r=>typeof r=="string"?q(t,r.split(`
`)):r)}var D=ze,kt=ze,sn=ze,an=ze;function A(e){return D(e),{type:Ae,contents:e}}function Rs(e,t){return an(e),D(t),{type:ye,contents:t,n:e}}function on(e){return Rs(Number.NEGATIVE_INFINITY,e)}var j={type:De};function xt(e){return sn(e),{type:Le,parts:e}}function C(e,t={}){return D(e),kt(t.expandedStates,!0),{type:Ne,id:t.id,contents:e,break:!!t.shouldBreak,expandedStates:t.expandedStates}}function X(e,t="",r={}){return D(e),t!==""&&D(t),{type:Pe,breakContents:e,flatContents:t,groupId:r.groupId}}function ln(e,t){return D(e),{type:Oe,contents:e,groupId:t.groupId,negate:t.negate}}function q(e,t){D(e),kt(t);let r=[];for(let n=0;n<t.length;n++)n!==0&&r.push(e),r.push(t[n]);return r}var _={type:Y},k={type:Y,soft:!0},Ms={type:Y,hard:!0},v=[Ms,j],Bs={type:Y,hard:!0,literal:!0},nn=[Bs,j];var cn=Object.freeze({character:"'",codePoint:39}),un=Object.freeze({character:'"',codePoint:34}),Fs=Object.freeze({preferred:cn,alternate:un}),qs=Object.freeze({preferred:un,alternate:cn});function Hs(e,t){let{preferred:r,alternate:n}=t===!0||t==="'"?Fs:qs,{length:i}=e,s=0,a=0;for(let o=0;o<i;o++){let c=e.charCodeAt(o);c===r.codePoint?s++:c===n.codePoint&&a++}return(s>a?n:r).character}var pn=Hs;function or(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var lr=class{#e;constructor(t){this.#e=new Set(t)}getLeadingWhitespaceCount(t){let r=this.#e,n=0;for(let i=0;i<t.length&&r.has(t.charAt(i));i++)n++;return n}getTrailingWhitespaceCount(t){let r=this.#e,n=0;for(let i=t.length-1;i>=0&&r.has(t.charAt(i));i--)n++;return n}getLeadingWhitespace(t){let r=this.getLeadingWhitespaceCount(t);return t.slice(0,r)}getTrailingWhitespace(t){let r=this.getTrailingWhitespaceCount(t);return t.slice(t.length-r)}hasLeadingWhitespace(t){return this.#e.has(t.charAt(0))}hasTrailingWhitespace(t){return this.#e.has(F(0,t,-1))}trimStart(t){let r=this.getLeadingWhitespaceCount(t);return t.slice(r)}trimEnd(t){let r=this.getTrailingWhitespaceCount(t);return t.slice(0,t.length-r)}trim(t){return this.trimEnd(this.trimStart(t))}split(t,r=!1){let n=`[${or([...this.#e].join(""))}]+`,i=new RegExp(r?`(${n})`:n,"u");return t.split(i)}hasWhitespaceCharacter(t){let r=this.#e;return Array.prototype.some.call(t,n=>r.has(n))}hasNonWhitespaceCharacter(t){let r=this.#e;return Array.prototype.some.call(t,n=>!r.has(n))}isWhitespaceOnly(t){let r=this.#e;return Array.prototype.every.call(t,n=>r.has(n))}#t(t){let r=Number.POSITIVE_INFINITY;for(let n of t.split(`
`)){if(n.length===0)continue;let i=this.getLeadingWhitespaceCount(n);if(i===0)return 0;n.length!==i&&i<r&&(r=i)}return r===Number.POSITIVE_INFINITY?0:r}dedentString(t){let r=this.#t(t);return r===0?t:t.split(`
`).map(n=>n.slice(r)).join(`
`)}},hn=lr;var Vs=["	",`
`,"\f","\r"," "],Us=new hn(Vs),y=Us;var cr=class extends Error{name="UnexpectedNodeError";constructor(t,r,n="type"){super(`Unexpected ${r} node ${n}: ${JSON.stringify(t[n])}.`),this.node=t}},mn=cr;var Ws=new Set(["sourceSpan","startSourceSpan","endSourceSpan","nameSpan","valueSpan","keySpan","tagDefinition","tokens","valueTokens","switchValueSourceSpan","expSourceSpan","valueSourceSpan"]),Gs=new Set(["if","else if","for","switch","case"]);function fn(e,t,r){if(e.kind==="text"||e.kind==="comment")return null;if(e.kind==="yaml"&&delete t.value,e.kind==="attribute"){let{fullName:n,value:i}=e;n==="style"||n==="class"||n==="srcset"&&(r.fullName==="img"||r.fullName==="source")||n==="allow"&&r.fullName==="iframe"||n.startsWith("on")||n.startsWith("@")||n.startsWith(":")||n.startsWith(".")||n.startsWith("#")||n.startsWith("v-")||n==="vars"&&r.fullName==="style"||(n==="setup"||n==="generic")&&r.fullName==="script"||n==="slot-scope"||n.startsWith("(")||n.startsWith("[")||n.startsWith("*")||n.startsWith("bind")||n.startsWith("i18n")||n.startsWith("on-")||n.startsWith("ng-")||i?.includes("{{")?delete t.value:i&&(t.value=w(0,i,/'|&quot;|&apos;/gu,'"'))}if(e.kind==="docType"&&(t.value=w(0,e.value.toLowerCase(),/\s+/gu," ")),e.kind==="angularControlFlowBlock"&&e.parameters?.children)for(let n of t.parameters.children)Gs.has(e.name)?delete n.expression:n.expression=n.expression.trim();e.kind==="angularIcuExpression"&&(t.switchValue=e.switchValue.trim()),e.kind==="angularLetDeclarationInitializer"&&delete t.value,e.kind==="element"&&e.isVoid&&!e.isSelfClosing&&(t.isSelfClosing=!0)}fn.ignoredProperties=Ws;var dn=fn;function K(e,t=!0){return[A([k,e]),t?k:""]}function W(e,t){let r=e.type==="NGRoot"?e.node.type==="NGMicrosyntax"&&e.node.body.length===1&&e.node.body[0].type==="NGMicrosyntaxExpression"?e.node.body[0].expression:e.node:e.type==="JsExpressionRoot"?e.node:e;return r&&(r.type==="ObjectExpression"||r.type==="ArrayExpression"||(t.parser==="__vue_expression"||t.parser==="__vue_ts_expression"||t.parser==="__ng_binding"||t.parser==="__ng_directive")&&(r.type==="TemplateLiteral"||r.type==="StringLiteral"))}async function x(e,t,r,n){r={__isInHtmlAttribute:!0,__embeddedInHtml:!0,...r};let i=!0;n&&(r.__onHtmlBindingRoot=(a,o)=>{i=n(a,o)});let s=await t(e,r,t);return i?C(s):K(s)}function $s(e,t,r,n){let{node:i}=r,s=n.originalText.slice(i.sourceSpan.start.offset,i.sourceSpan.end.offset);return/^\s*$/u.test(s)?"":x(s,e,{parser:"__ng_directive",__isInHtmlAttribute:!1},W)}var gn=$s;var zs=Array.prototype.toReversed??function(){return[...this].reverse()},Ys=xe("toReversed",function(){if(Array.isArray(this))return zs}),_n=Ys;function js(){let e=globalThis,t=e.Deno?.build?.os;return typeof t=="string"?t==="windows":e.navigator?.platform?.startsWith("Win")??e.process?.platform?.startsWith("win")??!1}var Xs=js();function Sn(e){if(e=e instanceof URL?e:new URL(e),e.protocol!=="file:")throw new TypeError(`URL must be a file URL: received "${e.protocol}"`);return e}function Ks(e){return e=Sn(e),decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g,"%25"))}function Qs(e){e=Sn(e);let t=decodeURIComponent(e.pathname.replace(/\//g,"\\").replace(/%(?![0-9A-Fa-f]{2})/g,"%25")).replace(/^\\*([A-Za-z]:)(\\|$)/,"$1\\");return e.hostname!==""&&(t=`\\\\${e.hostname}${t}`),t}function ur(e){return Xs?Qs(e):Ks(e)}var En=e=>String(e).split(/[/\\]/u).pop(),Cn=e=>String(e).startsWith("file:");function Js(e){return Array.isArray(e)&&e.length>0}var Ie=Js;function vn(e,t){if(!t)return;let r=En(t).toLowerCase();return e.find(({filenames:n})=>n?.some(i=>i.toLowerCase()===r))??e.find(({extensions:n})=>n?.some(i=>r.endsWith(i)))}function Zs(e,t){if(t)return e.find(({name:r})=>r.toLowerCase()===t)??e.find(({aliases:r})=>r?.includes(t))??e.find(({extensions:r})=>r?.includes(`.${t}`))}var ea=void 0;function Tn(e,t){if(t){if(Cn(t))try{t=ur(t)}catch{return}if(typeof t=="string")return e.find(({isSupported:r})=>r?.({filepath:t}))}}function ta(e,t){let r=_n(0,e.plugins).flatMap(i=>i.languages??[]);return(Zs(r,t.language)??vn(r,t.physicalFile)??vn(r,t.file)??Tn(r,t.physicalFile)??Tn(r,t.file)??ea?.(r,t.physicalFile))?.parsers[0]}var At=ta;var yt=Symbol.for("PRETTIER_IS_FRONT_MATTER");function ra(e){return!!e?.[yt]}var ce=ra;var Xe=3;function na(e){let t=e.slice(0,Xe);if(t!=="---"&&t!=="+++")return;let r=e.indexOf(`
`,Xe);if(r===-1)return;let n=e.slice(Xe,r).trim(),i=e.indexOf(`
${t}`,r),s=n;if(s||(s=t==="+++"?"toml":"yaml"),i===-1&&t==="---"&&s==="yaml"&&(i=e.indexOf(`
...`,r)),i===-1)return;let a=i+1+Xe,o=e.charAt(a+1);if(!/\s?/u.test(o))return;let c=e.slice(0,a),u;return{language:s,explicitLanguage:n||null,value:e.slice(r+1,i),startDelimiter:t,endDelimiter:c.slice(-Xe),raw:c,start:{line:1,column:0,index:0},end:{index:c.length,get line(){return u??(u=c.split(`
`)),u.length},get column(){return u??(u=c.split(`
`)),F(0,u,-1).length}},[yt]:!0}}function ia(e){let t=na(e);return t?{frontMatter:t,get content(){let{raw:r}=t;return w(0,r,/[^\n]/gu," ")+e.slice(r.length)}}:{content:e}}var pr=ia;var bn="inline",hr={area:"none",base:"none",basefont:"none",datalist:"none",head:"none",link:"none",meta:"none",noembed:"none",noframes:"none",param:"block",rp:"none",script:"block",style:"none",template:"inline",title:"none",html:"block",body:"block",address:"block",blockquote:"block",center:"block",dialog:"block",div:"block",figure:"block",figcaption:"block",footer:"block",form:"block",header:"block",hr:"block",legend:"block",listing:"block",main:"block",p:"block",plaintext:"block",pre:"block",search:"block",xmp:"block",slot:"contents",ruby:"ruby",rt:"ruby-text",article:"block",aside:"block",h1:"block",h2:"block",h3:"block",h4:"block",h5:"block",h6:"block",hgroup:"block",nav:"block",section:"block",dir:"block",dd:"block",dl:"block",dt:"block",menu:"block",ol:"block",ul:"block",li:"list-item",table:"table",caption:"table-caption",colgroup:"table-column-group",col:"table-column",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",td:"table-cell",th:"table-cell",input:"inline-block",button:"inline-block",fieldset:"block",details:"block",summary:"block",marquee:"inline-block",select:"inline-block",source:"block",track:"block",meter:"inline-block",progress:"inline-block",object:"inline-block",video:"inline-block",audio:"inline-block",option:"block",optgroup:"block"},wn="normal",mr={listing:"pre",plaintext:"pre",pre:"pre",xmp:"pre",nobr:"nowrap",table:"initial",textarea:"pre-wrap"};function sa(e){return e.kind==="element"&&!e.hasExplicitNamespace&&!["html","svg"].includes(e.namespace)}var ue=sa;var aa=e=>w(0,e,/^[\t\f\r ]*\n/gu,""),fr=e=>aa(y.trimEnd(e)),kn=e=>{let t=e,r=y.getLeadingWhitespace(t);r&&(t=t.slice(r.length));let n=y.getTrailingWhitespace(t);return n&&(t=t.slice(0,-n.length)),{leadingWhitespace:r,trailingWhitespace:n,text:t}};function Nt(e,t){return!!(e.kind==="ieConditionalComment"&&e.lastChild&&!e.lastChild.isSelfClosing&&!e.lastChild.endSourceSpan||e.kind==="ieConditionalComment"&&!e.complete||pe(e)&&e.children.some(r=>r.kind!=="text"&&r.kind!=="interpolation")||Ot(e,t)&&!H(e,t)&&e.kind!=="interpolation")}function he(e){return e.kind==="attribute"||!e.parent||!e.prev?!1:oa(e.prev)}function oa(e){return e.kind==="comment"&&e.value.trim()==="prettier-ignore"}function O(e){return e.kind==="text"||e.kind==="comment"}function H(e,t){return e.kind==="element"&&(e.fullName==="script"||e.fullName==="style"||e.fullName==="svg:style"||e.fullName==="svg:script"||e.fullName==="mj-style"&&t.parser==="mjml"||ue(e)&&(e.name==="script"||e.name==="style"))}function xn(e,t){return e.children&&!H(e,t)}function An(e,t){return H(e,t)||e.kind==="interpolation"||dr(e)}function dr(e){return Fn(e).startsWith("pre")}function yn(e,t){let r=n();if(r&&!e.prev&&e.parent?.tagDefinition?.ignoreFirstLf)return e.kind==="interpolation";return r;function n(){return ce(e)||e.kind==="angularControlFlowBlock"?!1:(e.kind==="text"||e.kind==="interpolation")&&e.prev&&(e.prev.kind==="text"||e.prev.kind==="interpolation")?!0:!e.parent||e.parent.cssDisplay==="none"?!1:pe(e.parent)?!0:!(!e.prev&&(e.parent.kind==="root"||pe(e)&&e.parent||H(e.parent,t)||Je(e.parent,t)||!ma(e.parent.cssDisplay))||e.prev&&!ga(e.prev.cssDisplay))}}function Nn(e,t){return ce(e)||e.kind==="angularControlFlowBlock"?!1:(e.kind==="text"||e.kind==="interpolation")&&e.next&&(e.next.kind==="text"||e.next.kind==="interpolation")?!0:!e.parent||e.parent.cssDisplay==="none"?!1:pe(e.parent)?!0:!(!e.next&&(e.parent.kind==="root"||pe(e)&&e.parent||H(e.parent,t)||Je(e.parent,t)||!fa(e.parent.cssDisplay))||e.next&&!da(e.next.cssDisplay))}function Ln(e,t){return _a(e.cssDisplay)&&!H(e,t)}function Ke(e){return ce(e)||e.next&&e.sourceSpan.end&&e.sourceSpan.end.line+1<e.next.sourceSpan.start.line}function Pn(e){return gr(e)||e.kind==="element"&&e.children.length>0&&(["body","script","style"].includes(e.name)||e.children.some(t=>ca(t)))||e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.kind!=="text"&&Dn(e.firstChild)&&(!e.lastChild.isTrailingSpaceSensitive||In(e.lastChild))}function gr(e){return e.kind==="element"&&e.children.length>0&&(["html","head","ul","ol","select"].includes(e.name)||e.cssDisplay.startsWith("table")&&e.cssDisplay!=="table-cell")}function Lt(e){return Rn(e)||e.prev&&la(e.prev)||On(e)}function la(e){return Rn(e)||e.kind==="element"&&e.fullName==="br"||On(e)}function On(e){return Dn(e)&&In(e)}function Dn(e){return e.hasLeadingSpaces&&(e.prev?e.prev.sourceSpan.end.line<e.sourceSpan.start.line:e.parent.kind==="root"||e.parent.startSourceSpan.end.line<e.sourceSpan.start.line)}function In(e){return e.hasTrailingSpaces&&(e.next?e.next.sourceSpan.start.line>e.sourceSpan.end.line:e.parent.kind==="root"||e.parent.endSourceSpan&&e.parent.endSourceSpan.start.line>e.sourceSpan.end.line)}function Rn(e){switch(e.kind){case"ieConditionalComment":case"comment":case"directive":return!0;case"element":return["script","select"].includes(e.name)}return!1}function Pt(e){return e.lastChild?Pt(e.lastChild):e}function ca(e){return e.children?.some(t=>t.kind!=="text")}function Mn(e){if(e)switch(e){case"module":case"text/javascript":case"text/babel":case"text/jsx":case"application/javascript":return"babel";case"application/x-typescript":return"typescript";case"text/markdown":return"markdown";case"text/html":return"html";case"text/x-handlebars-template":return"glimmer";default:if(e.endsWith("json")||e.endsWith("importmap")||e==="speculationrules")return"json"}}function ua(e,t){let{name:r,attrMap:n}=e;if(r!=="script"||Object.prototype.hasOwnProperty.call(n,"src"))return;let{type:i,lang:s}=e.attrMap;return!s&&!i?"babel":At(t,{language:s})??Mn(i)}function pa(e,t){if(!Ot(e,t))return;let{attrMap:r}=e;if(Object.prototype.hasOwnProperty.call(r,"src"))return;let{type:n,lang:i}=r;return At(t,{language:i})??Mn(n)}function ha(e,t){if(e.name==="style"){let{lang:r}=e.attrMap;return r?At(t,{language:r}):"css"}if(e.name==="mj-style"&&t.parser==="mjml")return"css"}function _r(e,t){return ua(e,t)??ha(e,t)??pa(e,t)}function Qe(e){return e==="block"||e==="list-item"||e.startsWith("table")}function ma(e){return!Qe(e)&&e!=="inline-block"}function fa(e){return!Qe(e)&&e!=="inline-block"}function da(e){return!Qe(e)}function ga(e){return!Qe(e)}function _a(e){return!Qe(e)&&e!=="inline-block"}function pe(e){return Fn(e).startsWith("pre")}function Sa(e,t){let r=e;for(;r;){if(t(r))return!0;r=r.parent}return!1}function Bn(e,t){if(me(e,t))return"block";if(e.prev?.kind==="comment"){let n=e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);if(n)return n[1]}let r=!1;if(e.kind==="element"&&e.namespace==="svg")if(Sa(e,n=>n.fullName==="svg:foreignObject"))r=!0;else return e.name==="svg"?"inline-block":"block";switch(t.htmlWhitespaceSensitivity){case"strict":return"inline";case"ignore":return"block";default:if(e.kind==="element"&&(!e.namespace||r||ue(e))&&Object.prototype.hasOwnProperty.call(hr,e.name))return hr[e.name]}return bn}function Fn(e){return e.kind==="element"&&(!e.namespace||ue(e))&&Object.prototype.hasOwnProperty.call(mr,e.name)?mr[e.name]:wn}function Sr(e){return w(0,w(0,e,"&apos;","'"),"&quot;",'"')}function b(e){return Sr(e.value)}var Ea=new Set(["template","style","script"]);function Je(e,t){return me(e,t)&&!Ea.has(e.fullName)}function me(e,t){return t.parser==="vue"&&e.kind==="element"&&e.parent.kind==="root"&&e.fullName.toLowerCase()!=="html"}function Ot(e,t){return me(e,t)&&(Je(e,t)||e.attrMap.lang&&e.attrMap.lang!=="html")}function qn(e){let t=e.fullName;return t.charAt(0)==="#"||t==="slot-scope"||t==="v-slot"||t.startsWith("v-slot:")}function Hn(e,t){let r=e.parent;if(!me(r,t))return!1;let n=r.fullName,i=e.fullName;return n==="script"&&i==="setup"||n==="style"&&i==="vars"}function Dt(e,t=e.value){return e.parent.isWhitespaceSensitive?e.parent.isIndentationSensitive?L(t):L(y.dedentString(fr(t)),v):q(_,y.split(t))}function It(e,t){return me(e,t)&&e.name==="script"}function Ca(e){let{valueSpan:t,value:r}=e;return t.end.offset-t.start.offset===r.length+2}function Rt(e,t){if(Ca(e))return!1;let{value:r}=e;return/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(r)||t.parser==="lwc"&&r.startsWith("{")&&r.endsWith("}")}var Vn=/\{\{(.+?)\}\}/su,Un=({node:{value:e}})=>Vn.test(e);async function Wn(e,t,r){let n=b(r.node),i=[];for(let[s,a]of n.split(Vn).entries())if(s%2===0)i.push(L(a));else try{i.push(C(["{{",A([_,await x(a,e,{parser:"__ng_interpolation",__isInHtmlInterpolation:!0})]),_,"}}"]))}catch{i.push("{{",L(a),"}}")}return i}var Er=e=>(t,r,n)=>x(b(n.node),t,{parser:e},W),va=[{test(e){let t=e.node.fullName;return t.startsWith("(")&&t.endsWith(")")||t.startsWith("on-")},print:Er("__ng_action")},{test(e){let t=e.node.fullName;return t.startsWith("[")&&t.endsWith("]")||/^bind(?:on)?-/u.test(t)||/^ng-(?:if|show|hide|class|style)$/u.test(t)},print:Er("__ng_binding")},{test:e=>e.node.fullName.startsWith("*"),print:Er("__ng_directive")},{test:e=>/^i18n(?:-.+)?$/u.test(e.node.fullName),print:Ta},{test:Un,print:Wn}].map(({test:e,print:t})=>({test:(r,n)=>n.parser==="angular"&&e(r),print:t}));function Ta(e,t,{node:r}){let n=b(r);return K(xt(Dt(r,n.trim())),!n.includes("@@"))}var Gn=va;var $n=({node:e},t)=>!t.parentParser&&e.fullName==="class"&&!e.value.includes("{{"),zn=(e,t,r)=>b(r.node).trim().split(/\s+/u).join(" ");var Cr=["onabort","onafterprint","onauxclick","onbeforeinput","onbeforematch","onbeforeprint","onbeforetoggle","onbeforeunload","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncommand","oncontextlost","oncontextmenu","oncontextrestored","oncopy","oncuechange","oncut","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","onformdata","onhashchange","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onlanguagechange","onload","onloadeddata","onloadedmetadata","onloadstart","onmessage","onmessageerror","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onoffline","ononline","onpagehide","onpagereveal","onpageshow","onpageswap","onpaste","onpause","onplay","onplaying","onpopstate","onprogress","onratechange","onrejectionhandled","onreset","onresize","onscroll","onscrollend","onsecuritypolicyviolation","onseeked","onseeking","onselect","onslotchange","onstalled","onstorage","onsubmit","onsuspend","ontimeupdate","ontoggle","onunhandledrejection","onunload","onvolumechange","onwaiting","onwheel"];var wa=new Set(Cr),Yn=({node:e},t)=>wa.has(e.fullName)&&!t.parentParser&&!e.value.includes("{{"),jn=(e,t,r)=>x(b(r.node),e,{parser:"babel",__isHtmlInlineEventHandler:!0},()=>!1);function ka(e){let t=[];for(let r of e.split(";")){if(r=y.trim(r),!r)continue;let[n,...i]=y.split(r);t.push({name:n,value:i})}return t}var Xn=ka;var Kn=({node:e},t)=>e.fullName==="allow"&&!t.parentParser&&e.parent.fullName==="iframe"&&!e.value.includes("{{");function Qn(e,t,r){let{node:n}=r,i=Xn(b(n));return i.length===0?[""]:K(i.map(({name:s,value:a},o)=>[[s,...a].join(" "),o===i.length-1?X(";"):[";",_]]))}function Jn(e){return e==="	"||e===`
`||e==="\f"||e==="\r"||e===" "}var xa=/^[ \t\n\r\u000c]+/,Aa=/^[, \t\n\r\u000c]+/,ya=/^[^ \t\n\r\u000c]+/,Na=/[,]+$/,Zn=/^\d+$/,La=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;function Pa(e){let t=e.length,r,n,i,s,a,o=0,c;function u(m){let g,E=m.exec(e.substring(o));if(E)return[g]=E,o+=g.length,g}let p=[];for(;;){if(u(Aa),o>=t){if(p.length===0)throw new Error("Must contain one or more image candidate strings.");return p}c=o,r=u(ya),n=[],r.slice(-1)===","?(r=r.replace(Na,""),S()):d()}function d(){for(u(xa),i="",s="in descriptor";;){if(a=e.charAt(o),s==="in descriptor")if(Jn(a))i&&(n.push(i),i="",s="after descriptor");else if(a===","){o+=1,i&&n.push(i),S();return}else if(a==="(")i+=a,s="in parens";else if(a===""){i&&n.push(i),S();return}else i+=a;else if(s==="in parens")if(a===")")i+=a,s="in descriptor";else if(a===""){n.push(i),S();return}else i+=a;else if(s==="after descriptor"&&!Jn(a))if(a===""){S();return}else s="in descriptor",o-=1;o+=1}}function S(){let m=!1,g,E,P,z,le={},ee,_t,ke,Ge,nr;for(z=0;z<n.length;z++)ee=n[z],_t=ee[ee.length-1],ke=ee.substring(0,ee.length-1),Ge=parseInt(ke,10),nr=parseFloat(ke),Zn.test(ke)&&_t==="w"?((g||E)&&(m=!0),Ge===0?m=!0:g=Ge):La.test(ke)&&_t==="x"?((g||E||P)&&(m=!0),nr<0?m=!0:E=nr):Zn.test(ke)&&_t==="h"?((P||E)&&(m=!0),Ge===0?m=!0:P=Ge):m=!0;if(!m)le.source={value:r,startOffset:c},g&&(le.width={value:g}),E&&(le.density={value:E}),P&&(le.height={value:P}),p.push(le);else throw new Error(`Invalid srcset descriptor found in "${e}" at "${ee}".`)}}var ei=Pa;var ti=e=>e.node.fullName==="srcset"&&(e.parent.fullName==="img"||e.parent.fullName==="source"),ri={width:"w",height:"h",density:"x"},Oa=Object.keys(ri);function ni(e,t,r){let n=b(r.node),i=ei(n),s=Oa.filter(m=>i.some(g=>Object.prototype.hasOwnProperty.call(g,m)));if(s.length>1)throw new Error("Mixed descriptor in srcset is not supported");let[a]=s,o=ri[a],c=i.map(m=>m.source.value),u=Math.max(...c.map(m=>m.length)),p=i.map(m=>m[a]?String(m[a].value):""),d=p.map(m=>{let g=m.indexOf(".");return g===-1?m.length:g}),S=Math.max(...d);return K(q([",",_],c.map((m,g)=>{let E=[m],P=p[g];if(P){let z=u-m.length+1,le=S-d[g],ee=" ".repeat(z+le);E.push(X(ee," "),P+o)}return E})))}var ii=({node:e},t)=>e.fullName==="style"&&!t.parentParser&&!e.value.includes("{{"),si=async(e,t,r)=>K(await e(b(r.node),{parser:"css",__isHTMLStyleAttribute:!0}));var vr=new WeakMap;function Da(e,t){let{root:r}=e;return vr.has(r)||vr.set(r,r.children.some(n=>It(n,t)&&["ts","typescript"].includes(n.attrMap.lang))),vr.get(r)}var G=Da;function ai(e,t,r){let n=b(r.node);return x(`type T<${n}> = any`,e,{parser:"babel-ts",__isEmbeddedTypescriptGenericParameters:!0},W)}function oi(e,t,r,n){let i=b(r.node),s=G(r,n)?"babel-ts":"babel";return x(`function _(${i}) {}`,e,{parser:s,__isVueBindings:!0})}async function li(e,t,r,n){let i=b(r.node),{left:s,operator:a,right:o}=Ia(i),c=G(r,n);return[C(await x(`function _(${s}) {}`,e,{parser:c?"babel-ts":"babel",__isVueForBindingLeft:!0}))," ",a," ",await x(o,e,{parser:c?"__ts_expression":"__js_expression"})]}function Ia(e){let t=/(.*?)\s+(in|of)\s+(.*)/su,r=/,([^,\]}]*)(?:,([^,\]}]*))?$/u,n=/^\(|\)$/gu,i=e.match(t);if(!i)return;let s={for:i[3].trim()};if(!s.for)return;let a=w(0,i[1].trim(),n,""),o=a.match(r);o?(s.alias=a.replace(r,""),s.iterator1=o[1].trim(),o[2]&&(s.iterator2=o[2].trim())):s.alias=a;let c=[s.alias,s.iterator1,s.iterator2];if(!c.some((u,p)=>!u&&(p===0||c.slice(p+1).some(Boolean))))return{left:c.filter(Boolean).join(","),operator:i[2],right:s.for}}var Ra=[{test:e=>e.node.fullName==="v-for",print:li},{test:(e,t)=>e.node.fullName==="generic"&&It(e.parent,t),print:ai},{test:({node:e},t)=>qn(e)||Hn(e,t),print:oi},{test(e){let t=e.node.fullName;return t.startsWith("@")||t.startsWith("v-on:")},print:Ma},{test(e){let t=e.node.fullName;return t.startsWith(":")||t.startsWith(".")||t.startsWith("v-bind:")},print:Ba},{test:e=>e.node.fullName.startsWith("v-"),print:ci}].map(({test:e,print:t})=>({test:(r,n)=>n.parser==="vue"&&e(r,n),print:t}));async function Ma(e,t,r,n){try{return await ci(e,t,r,n)}catch(a){if(a.cause?.code!=="BABEL_PARSER_SYNTAX_ERROR")throw a}let i=b(r.node),s=G(r,n)?"__vue_ts_event_binding":"__vue_event_binding";return x(i,e,{parser:s},W)}function Ba(e,t,r,n){let i=b(r.node),s=G(r,n)?"__vue_ts_expression":"__vue_expression";return x(i,e,{parser:s},W)}function ci(e,t,r,n){let i=b(r.node),s=G(r,n)?"__ts_expression":"__js_expression";return x(i,e,{parser:s},W)}var ui=Ra;var Fa=[{test:ti,print:ni},{test:ii,print:si},{test:Yn,print:jn},{test:$n,print:zn},{test:Kn,print:Qn},...ui,...Gn].map(({test:e,print:t})=>({test:e,print:Ha(t)}));function qa(e,t){let{node:r}=e,{value:n}=r;if(n)return Rt(r,t)?[r.rawName,"=",n]:Fa.find(({test:i})=>i(e,t))?.print}function Ha(e){return async(t,r,n,i)=>{let s=await e(t,r,n,i);if(s)return s=ar(s,a=>typeof a=="string"?w(0,a,'"',"&quot;"):a),[n.node.rawName,'="',C(s),'"']}}var pi=qa;var Q=e=>e.sourceSpan.start.offset,te=e=>e.sourceSpan.end.offset;function Ze(e,t){return[e.isSelfClosing?"":Va(e,t),fe(e,t)]}function Va(e,t){return e.lastChild&&_e(e.lastChild)?"":[Ua(e,t),Mt(e,t)]}function fe(e,t){return(e.next?$(e.next):ge(e.parent))?"":[de(e,t),V(e,t)]}function Ua(e,t){return ge(e)?de(e.lastChild,t):""}function V(e,t){return _e(e)?Mt(e.parent,t):et(e)?Bt(e.next,t):""}function Mt(e,t){if(mi(e,t))return"";switch(e.kind){case"ieConditionalComment":return"<!";case"element":if(e.hasHtmComponentClosingTag)return"<//";default:return`</${e.rawName}`}}function de(e,t){if(mi(e,t))return"";switch(e.kind){case"ieConditionalComment":case"ieConditionalEndComment":return"[endif]-->";case"ieConditionalStartComment":return"]><!-->";case"interpolation":return"}}";case"angularIcuExpression":return"}";case"element":if(e.isSelfClosing)return"/>";default:return">"}}function mi(e,t){return!e.isSelfClosing&&!e.endSourceSpan&&(he(e)||Nt(e.parent,t))}function $(e){return e.prev&&e.prev.kind!=="docType"&&e.kind!=="angularControlFlowBlock"&&!O(e.prev)&&e.isLeadingSpaceSensitive&&!e.hasLeadingSpaces}function ge(e){return e.lastChild?.isTrailingSpaceSensitive&&!e.lastChild.hasTrailingSpaces&&!O(Pt(e.lastChild))&&!pe(e)}function _e(e){return!e.next&&!e.hasTrailingSpaces&&e.isTrailingSpaceSensitive&&O(Pt(e))}function et(e){return e.next&&!O(e.next)&&O(e)&&e.isTrailingSpaceSensitive&&!e.hasTrailingSpaces}function Wa(e){let t=e.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);return t?t[1]?t[1].split(/\s+/u):!0:!1}function tt(e){return!e.prev&&e.isLeadingSpaceSensitive&&!e.hasLeadingSpaces}function Ga(e,t,r){let{node:n}=e;if(!Ie(n.attrs))return n.isSelfClosing?" ":"";let i=n.prev?.kind==="comment"&&Wa(n.prev.value),s=typeof i=="boolean"?()=>i:Array.isArray(i)?d=>i.includes(d.rawName):()=>!1,a=e.map(({node:d})=>s(d)?L(t.originalText.slice(Q(d),te(d))):r(),"attrs"),o=n.kind==="element"&&n.fullName==="script"&&n.attrs.length===1&&n.attrs[0].fullName==="src"&&n.children.length===0,u=t.singleAttributePerLine&&n.attrs.length>1&&!me(n,t)?v:_,p=[A([o?" ":_,q(u,a)])];return n.firstChild&&tt(n.firstChild)||n.isSelfClosing&&ge(n.parent)||o?p.push(n.isSelfClosing?" ":""):p.push(t.bracketSameLine?n.isSelfClosing?" ":"":n.isSelfClosing?_:k),p}function $a(e){return e.firstChild&&tt(e.firstChild)?"":Ft(e)}function rt(e,t,r){let{node:n}=e;return[Se(n,t),Ga(e,t,r),n.isSelfClosing?"":$a(n)]}function Se(e,t){return e.prev&&et(e.prev)?"":[U(e,t),Bt(e,t)]}function U(e,t){return tt(e)?Ft(e.parent):$(e)?de(e.prev,t):""}var hi="<!doctype";function Bt(e,t){switch(e.kind){case"ieConditionalComment":case"ieConditionalStartComment":return`<!--[if ${e.condition}`;case"ieConditionalEndComment":return"<!--<!";case"interpolation":return"{{";case"docType":{if(e.value==="html"){let{filepath:n}=t;if(n&&/\.html?$/u.test(n))return hi}let r=Q(e);return t.originalText.slice(r,r+hi.length)}case"angularIcuExpression":return"{";case"element":if(e.condition)return`<!--[if ${e.condition}]><!--><${e.rawName}`;default:return`<${e.rawName}`}}function Ft(e){switch(e.kind){case"ieConditionalComment":return"]>";case"element":if(e.condition)return"><!--<![endif]-->";default:return">"}}function za(e,t){if(!e.endSourceSpan)return"";let r=e.startSourceSpan.end.offset;e.firstChild&&tt(e.firstChild)&&(r-=Ft(e).length);let n=e.endSourceSpan.start.offset;return e.lastChild&&_e(e.lastChild)?n+=Mt(e,t).length:ge(e)&&(n-=de(e.lastChild,t).length),t.originalText.slice(r,n)}var qt=za;var Ya=new Set(["if","else if","for","switch","case"]);function ja(e,t){let{node:r}=e;switch(r.kind){case"element":if(H(r,t)||r.kind==="interpolation")return;if(!r.isSelfClosing&&Ot(r,t)){let n=_r(r,t);return n?async(i,s)=>{let a=qt(r,t),o=/^\s*$/u.test(a),c="";return o||(c=await i(fr(a),{parser:n,__embeddedInHtml:!0}),o=c===""),[U(r,t),C(rt(e,t,s)),o?"":v,c,o?"":v,Ze(r,t),V(r,t)]}:void 0}break;case"text":if(H(r.parent,t)){let n=_r(r.parent,t);if(n)return async i=>{let s=n==="markdown"?y.dedentString(r.value.replace(/^[^\S\n]*\n/u,"")):r.value,a={parser:n,__embeddedInHtml:!0};if(t.parser==="html"&&n==="babel"){let o="script",{attrMap:c}=r.parent;c&&(c.type==="module"||(c.type==="text/babel"||c.type==="text/jsx")&&c["data-type"]==="module")&&(o="module"),a.__babelSourceType=o}return[j,U(r,t),await i(s,a),V(r,t)]}}else if(r.parent.kind==="interpolation")return async n=>{let i={__isInHtmlInterpolation:!0,__embeddedInHtml:!0};return t.parser==="angular"?i.parser="__ng_interpolation":t.parser==="vue"?i.parser=G(e,t)?"__vue_ts_expression":"__vue_expression":i.parser="__js_expression",[A([_,await n(r.value,i)]),r.parent.next&&$(r.parent.next)?" ":_]};break;case"attribute":return pi(e,t);case"angularControlFlowBlockParameters":return Ya.has(e.parent.name)?gn:void 0;case"angularLetDeclarationInitializer":return n=>x(r.value,n,{parser:"__ng_binding",__isInHtmlAttribute:!1})}}var fi=ja;var nt=null;function it(e){if(nt!==null&&typeof nt.property){let t=nt;return nt=it.prototype=null,t}return nt=it.prototype=e??Object.create(null),new it}var Xa=10;for(let e=0;e<=Xa;e++)it();function Tr(e){return it(e)}function Ka(e,t="type"){Tr(e);function r(n){let i=n[t],s=e[i];if(!Array.isArray(s))throw Object.assign(new Error(`Missing visitor keys for '${i}'.`),{node:n});return s}return r}var di=Ka;var I=[["children"],[]],gi={root:I[0],element:["attrs","children"],ieConditionalComment:I[0],ieConditionalStartComment:I[1],ieConditionalEndComment:I[1],interpolation:I[0],text:I[0],docType:I[1],comment:I[1],attribute:I[1],cdata:I[1],angularControlFlowBlock:["children","parameters"],angularControlFlowBlockParameters:I[0],angularControlFlowBlockParameter:I[1],angularLetDeclaration:["init"],angularLetDeclarationInitializer:I[1],angularIcuExpression:["cases"],angularIcuCase:["expression"]};var Qa=di(gi,"kind"),_i=Qa;var Si="format";var Ei=/^\s*<!--\s*@(?:noformat|noprettier)\s*-->/u,Ci=/^\s*<!--\s*@(?:format|prettier)\s*-->/u;var vi=e=>Ci.test(e),Ti=e=>Ei.test(e),bi=e=>`<!-- @${Si} -->

${e}`;var wi=new Map([["if",new Set(["else if","else"])],["else if",new Set(["else if","else"])],["for",new Set(["empty"])],["defer",new Set(["placeholder","error","loading"])],["placeholder",new Set(["placeholder","error","loading"])],["error",new Set(["placeholder","error","loading"])],["loading",new Set(["placeholder","error","loading"])]]);function ki(e){let t=te(e);return e.kind==="element"&&!e.endSourceSpan&&Ie(e.children)?Math.max(t,ki(F(0,e.children,-1))):t}function st(e,t,r){let n=e.node;if(he(n)){let i=ki(n);return[U(n,t),L(y.trimEnd(t.originalText.slice(Q(n)+(n.prev&&et(n.prev)?Bt(n).length:0),i-(n.next&&$(n.next)?de(n,t).length:0)))),V(n,t)]}return r()}function Ht(e,t){return O(e)&&O(t)?e.isTrailingSpaceSensitive?e.hasTrailingSpaces?Lt(t)?v:_:"":Lt(t)?v:k:et(e)&&(he(t)||t.firstChild||t.isSelfClosing||t.kind==="element"&&t.attrs.length>0)||e.kind==="element"&&e.isSelfClosing&&$(t)?"":!t.isLeadingSpaceSensitive||Lt(t)||$(t)&&e.lastChild&&_e(e.lastChild)&&e.lastChild.lastChild&&_e(e.lastChild.lastChild)?v:t.hasLeadingSpaces?_:k}function Re(e,t,r){let{node:n}=e;if(gr(n))return[j,...e.map(()=>{let s=e.node,a=s.prev?Ht(s.prev,s):"";return[a?[a,Ke(s.prev)?v:""]:"",st(e,t,r)]},"children")];let i=n.children.map(()=>Symbol(""));return e.map(({node:s,index:a})=>{if(O(s)){if(s.prev&&O(s.prev)){let m=Ht(s.prev,s);if(m)return Ke(s.prev)?[v,v,st(e,t,r)]:[m,st(e,t,r)]}return st(e,t,r)}let o=[],c=[],u=[],p=[],d=s.prev?Ht(s.prev,s):"",S=s.next?Ht(s,s.next):"";return d&&(Ke(s.prev)?o.push(v,v):d===v?o.push(v):O(s.prev)?c.push(d):c.push(X("",k,{groupId:i[a-1]}))),S&&(Ke(s)?O(s.next)&&p.push(v,v):S===v?O(s.next)&&p.push(v):u.push(S)),[...o,C([...c,C([st(e,t,r),...u],{id:i[a]})]),...p]},"children")}function xi(e,t,r){let{node:n}=e,i=[];if(eo(e)&&i.push("} "),i.push("@",n.name),n.parameters&&i.push(" (",C(r("parameters")),")"),!Za(n)){i.push(" {");let s=Ai(n);n.children.length>0?(n.firstChild.hasLeadingSpaces=!0,n.lastChild.hasTrailingSpaces=!0,i.push(A([v,Re(e,t,r)])),s&&i.push(v,"}")):s&&i.push("}")}return C(i,{shouldBreak:!0})}function Ai(e){return!(e.next?.kind==="angularControlFlowBlock"&&wi.get(e.name)?.has(e.next.name))}var Ja=e=>e?.kind==="angularControlFlowBlock"&&(e.name==="case"||e.name==="default");function Za(e){return Ja(e)&&e.endSourceSpan&&e.endSourceSpan.start.offset===e.endSourceSpan.end.offset}function eo(e){let{previous:t}=e;return t?.kind==="angularControlFlowBlock"&&!he(t)&&!Ai(t)}function yi(e,t,r){return[A([k,q([";",_],e.map(r,"children"))]),k]}function Ni(e,t,r){let{node:n}=e;return[Se(n,t),C([n.switchValue.trim(),", ",n.type,n.cases.length>0?[",",A([_,q(_,e.map(r,"cases"))])]:"",k]),fe(n,t)]}function Li(e,t,r){let{node:n}=e;return[n.value," {",C([A([k,e.map(({node:i,isLast:s})=>{let a=[r()];return i.kind==="text"&&(i.hasLeadingSpaces&&a.unshift(_),i.hasTrailingSpaces&&!s&&a.push(_)),a},"expression")]),k]),"}"]}function Pi(e,t,r){let{node:n}=e;if(Nt(n,t))return[U(n,t),C(rt(e,t,r)),L(qt(n,t)),...Ze(n,t),V(n,t)];let i=n.children.length===1&&(n.firstChild.kind==="interpolation"||n.firstChild.kind==="angularIcuExpression")&&n.firstChild.isLeadingSpaceSensitive&&!n.firstChild.hasLeadingSpaces&&n.lastChild.isTrailingSpaceSensitive&&!n.lastChild.hasTrailingSpaces,s=Symbol("element-attr-group-id"),a=p=>C([C(rt(e,t,r),{id:s}),p,Ze(n,t)]),o=p=>i?ln(p,{groupId:s}):(H(n,t)||Je(n,t))&&n.parent.kind==="root"&&t.parser==="vue"&&!t.vueIndentScriptAndStyle?p:A(p),c=()=>i?X(k,"",{groupId:s}):n.firstChild.hasLeadingSpaces&&n.firstChild.isLeadingSpaceSensitive?_:n.firstChild.kind==="text"&&n.isWhitespaceSensitive&&n.isIndentationSensitive?on(k):k,u=()=>(n.next?$(n.next):ge(n.parent))?n.lastChild.hasTrailingSpaces&&n.lastChild.isTrailingSpaceSensitive?" ":"":i?X(k,"",{groupId:s}):n.lastChild.hasTrailingSpaces&&n.lastChild.isTrailingSpaceSensitive?_:(n.lastChild.kind==="comment"||n.lastChild.kind==="text"&&n.isWhitespaceSensitive&&n.isIndentationSensitive)&&new RegExp(`\\n[\\t ]{${t.tabWidth*(e.ancestors.length-1)}}$`,"u").test(n.lastChild.value)?"":k;return n.children.length===0?a(n.hasDanglingSpaces&&n.isDanglingSpaceSensitive?_:""):a([Pn(n)?j:"",o([c(),Re(e,t,r)]),u()])}var R=(function(e){return e[e.RAW_TEXT=0]="RAW_TEXT",e[e.ESCAPABLE_RAW_TEXT=1]="ESCAPABLE_RAW_TEXT",e[e.PARSABLE_DATA=2]="PARSABLE_DATA",e})({});function at(e,t=!0){if(e[0]!=":")return[null,e];let r=e.indexOf(":",1);if(r===-1){if(t)throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);return[null,e]}return[e.slice(1,r),e.slice(r+1)]}function br(e){return at(e)[1]==="ng-container"}function wr(e){return at(e)[1]==="ng-content"}function Me(e){return e===null?null:at(e)[0]}function Ee(e,t){return e?`:${e}:${t}`:t}var kr={name:"custom-elements"},xr={name:"no-errors-schema"},re=(function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e[e.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",e})({});var to=/-+([a-z0-9])/g;function Oi(e){return e.replace(to,(...t)=>t[1].toUpperCase())}var Vt;function Ar(){return Vt||(Vt={},ot(re.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]),ot(re.STYLE,["*|style"]),ot(re.URL,["*|formAction","area|href","a|href","a|xlink:href","form|action","annotation|href","annotation|xlink:href","annotation-xml|href","annotation-xml|xlink:href","maction|href","maction|xlink:href","malignmark|href","malignmark|xlink:href","math|href","math|xlink:href","mroot|href","mroot|xlink:href","msqrt|href","msqrt|xlink:href","merror|href","merror|xlink:href","mfrac|href","mfrac|xlink:href","mglyph|href","mglyph|xlink:href","msub|href","msub|xlink:href","msup|href","msup|xlink:href","msubsup|href","msubsup|xlink:href","mmultiscripts|href","mmultiscripts|xlink:href","mprescripts|href","mprescripts|xlink:href","mi|href","mi|xlink:href","mn|href","mn|xlink:href","mo|href","mo|xlink:href","mpadded|href","mpadded|xlink:href","mphantom|href","mphantom|xlink:href","mrow|href","mrow|xlink:href","ms|href","ms|xlink:href","mspace|href","mspace|xlink:href","mstyle|href","mstyle|xlink:href","mtable|href","mtable|xlink:href","mtd|href","mtd|xlink:href","mtr|href","mtr|xlink:href","mtext|href","mtext|xlink:href","mover|href","mover|xlink:href","munder|href","munder|xlink:href","munderover|href","munderover|xlink:href","semantics|href","semantics|xlink:href","none|href","none|xlink:href","img|src","video|src"]),ot(re.RESOURCE_URL,["base|href","embed|src","frame|src","iframe|src","link|href","object|codebase","object|data","script|src","script|href","script|xlink:href"]),ot(re.ATTRIBUTE_NO_BINDING,["animate|attributeName","set|attributeName","animateMotion|attributeName","animateTransform|attributeName","unknown|attributeName","iframe|sandbox","iframe|allow","iframe|allowFullscreen","iframe|referrerPolicy","iframe|csp","iframe|fetchPriority","unknown|sandbox","unknown|allow","unknown|allowFullscreen","unknown|referrerPolicy","unknown|csp","unknown|fetchPriority"])),Vt}function ot(e,t){for(let r of t)Vt[r.toLowerCase()]=e}var Di=class{};var ro="boolean",no="number",io="string",so="object",ao=["[Element]|textContent,%ariaActiveDescendantElement,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColIndexText,%ariaColSpan,%ariaControlsElements,%ariaCurrent,%ariaDescribedByElements,%ariaDescription,%ariaDetailsElements,%ariaDisabled,%ariaErrorMessageElements,%ariaExpanded,%ariaFlowToElements,%ariaHasPopup,%ariaHidden,%ariaInvalid,%ariaKeyShortcuts,%ariaLabel,%ariaLabelledByElements,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaOwnsElements,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowIndexText,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored","[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy","abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,search,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy","media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume",":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",":svg:graphics^:svg:|",":svg:animation^:svg:|*begin,*end,*repeat",":svg:geometry^:svg:|",":svg:componentTransferFunction^:svg:|",":svg:gradient^:svg:|",":svg:textContent^:svg:graphics|",":svg:textPositioning^:svg:textContent|","a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username","area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username","audio^media|","br^[HTMLElement]|clear","base^[HTMLElement]|href,target","body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink","button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value","canvas^[HTMLElement]|#height,#width","content^[HTMLElement]|select","dl^[HTMLElement]|!compact","data^[HTMLElement]|value","datalist^[HTMLElement]|","details^[HTMLElement]|!open","dialog^[HTMLElement]|!open,returnValue","dir^[HTMLElement]|!compact","div^[HTMLElement]|align","embed^[HTMLElement]|align,height,name,src,type,width","fieldset^[HTMLElement]|!disabled,name","font^[HTMLElement]|color,face,size","form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target","frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src","frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows","hr^[HTMLElement]|align,color,!noShade,size,width","head^[HTMLElement]|","h1,h2,h3,h4,h5,h6^[HTMLElement]|align","html^[HTMLElement]|version","iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width","img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width","input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width","li^[HTMLElement]|type,#value","label^[HTMLElement]|htmlFor","legend^[HTMLElement]|align","link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type","map^[HTMLElement]|name","marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width","menu^[HTMLElement]|!compact","meta^[HTMLElement]|content,httpEquiv,media,name,scheme","meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value","ins,del^[HTMLElement]|cite,dateTime","ol^[HTMLElement]|!compact,!reversed,#start,type","object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width","optgroup^[HTMLElement]|!disabled,label","option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value","output^[HTMLElement]|defaultValue,%htmlFor,name,value","p^[HTMLElement]|align","param^[HTMLElement]|name,type,value,valueType","picture^[HTMLElement]|","pre^[HTMLElement]|#width","progress^[HTMLElement]|#max,#value","q,blockquote,cite^[HTMLElement]|","script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type","select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value","selectedcontent^[HTMLElement]|","slot^[HTMLElement]|name","source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width","span^[HTMLElement]|","style^[HTMLElement]|!disabled,media,type","search^[HTMLELement]|","caption^[HTMLElement]|align","th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width","col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width","table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width","tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign","tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign","template^[HTMLElement]|","textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap","time^[HTMLElement]|dateTime","title^[HTMLElement]|text","track^[HTMLElement]|!default,kind,label,src,srclang","ul^[HTMLElement]|!compact,type","unknown^[HTMLElement]|","video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width",":svg:a^:svg:graphics|",":svg:animate^:svg:animation|",":svg:animateMotion^:svg:animation|",":svg:animateTransform^:svg:animation|",":svg:circle^:svg:geometry|",":svg:clipPath^:svg:graphics|",":svg:defs^:svg:graphics|",":svg:desc^:svg:|",":svg:discard^:svg:|",":svg:ellipse^:svg:geometry|",":svg:feBlend^:svg:|",":svg:feColorMatrix^:svg:|",":svg:feComponentTransfer^:svg:|",":svg:feComposite^:svg:|",":svg:feConvolveMatrix^:svg:|",":svg:feDiffuseLighting^:svg:|",":svg:feDisplacementMap^:svg:|",":svg:feDistantLight^:svg:|",":svg:feDropShadow^:svg:|",":svg:feFlood^:svg:|",":svg:feFuncA^:svg:componentTransferFunction|",":svg:feFuncB^:svg:componentTransferFunction|",":svg:feFuncG^:svg:componentTransferFunction|",":svg:feFuncR^:svg:componentTransferFunction|",":svg:feGaussianBlur^:svg:|",":svg:feImage^:svg:|",":svg:feMerge^:svg:|",":svg:feMergeNode^:svg:|",":svg:feMorphology^:svg:|",":svg:feOffset^:svg:|",":svg:fePointLight^:svg:|",":svg:feSpecularLighting^:svg:|",":svg:feSpotLight^:svg:|",":svg:feTile^:svg:|",":svg:feTurbulence^:svg:|",":svg:filter^:svg:|",":svg:foreignObject^:svg:graphics|",":svg:g^:svg:graphics|",":svg:image^:svg:graphics|decoding",":svg:line^:svg:geometry|",":svg:linearGradient^:svg:gradient|",":svg:mpath^:svg:|",":svg:marker^:svg:|",":svg:mask^:svg:|",":svg:metadata^:svg:|",":svg:path^:svg:geometry|",":svg:pattern^:svg:|",":svg:polygon^:svg:geometry|",":svg:polyline^:svg:geometry|",":svg:radialGradient^:svg:gradient|",":svg:rect^:svg:geometry|",":svg:svg^:svg:graphics|#currentScale,#zoomAndPan",":svg:script^:svg:|type",":svg:set^:svg:animation|",":svg:stop^:svg:|",":svg:style^:svg:|!disabled,media,title,type",":svg:switch^:svg:graphics|",":svg:symbol^:svg:|",":svg:tspan^:svg:textPositioning|",":svg:text^:svg:textPositioning|",":svg:textPath^:svg:textContent|",":svg:title^:svg:|",":svg:use^:svg:graphics|",":svg:view^:svg:|#zoomAndPan","data^[HTMLElement]|value","keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name","menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default","summary^[HTMLElement]|","time^[HTMLElement]|dateTime",":svg:cursor^:svg:|",":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",":math:math^:math:|",":math:maction^:math:|",":math:menclose^:math:|",":math:merror^:math:|",":math:mfenced^:math:|",":math:mfrac^:math:|",":math:mi^:math:|",":math:mmultiscripts^:math:|",":math:mn^:math:|",":math:mo^:math:|",":math:mover^:math:|",":math:mpadded^:math:|",":math:mphantom^:math:|",":math:mroot^:math:|",":math:mrow^:math:|",":math:ms^:math:|",":math:mspace^:math:|",":math:msqrt^:math:|",":math:mstyle^:math:|",":math:msub^:math:|",":math:msubsup^:math:|",":math:msup^:math:|",":math:mtable^:math:|",":math:mtd^:math:|",":math:mtext^:math:|",":math:mtr^:math:|",":math:munder^:math:|",":math:munderover^:math:|",":math:semantics^:math:|"],Ii=new Map(Object.entries({class:"className",for:"htmlFor",formaction:"formAction",innerHtml:"innerHTML",readonly:"readOnly",tabindex:"tabIndex","aria-activedescendant":"ariaActiveDescendantElement","aria-atomic":"ariaAtomic","aria-autocomplete":"ariaAutoComplete","aria-busy":"ariaBusy","aria-checked":"ariaChecked","aria-colcount":"ariaColCount","aria-colindex":"ariaColIndex","aria-colindextext":"ariaColIndexText","aria-colspan":"ariaColSpan","aria-controls":"ariaControlsElements","aria-current":"ariaCurrent","aria-describedby":"ariaDescribedByElements","aria-description":"ariaDescription","aria-details":"ariaDetailsElements","aria-disabled":"ariaDisabled","aria-errormessage":"ariaErrorMessageElements","aria-expanded":"ariaExpanded","aria-flowto":"ariaFlowToElements","aria-haspopup":"ariaHasPopup","aria-hidden":"ariaHidden","aria-invalid":"ariaInvalid","aria-keyshortcuts":"ariaKeyShortcuts","aria-label":"ariaLabel","aria-labelledby":"ariaLabelledByElements","aria-level":"ariaLevel","aria-live":"ariaLive","aria-modal":"ariaModal","aria-multiline":"ariaMultiLine","aria-multiselectable":"ariaMultiSelectable","aria-orientation":"ariaOrientation","aria-owns":"ariaOwnsElements","aria-placeholder":"ariaPlaceholder","aria-posinset":"ariaPosInSet","aria-pressed":"ariaPressed","aria-readonly":"ariaReadOnly","aria-required":"ariaRequired","aria-roledescription":"ariaRoleDescription","aria-rowcount":"ariaRowCount","aria-rowindex":"ariaRowIndex","aria-rowindextext":"ariaRowIndexText","aria-rowspan":"ariaRowSpan","aria-selected":"ariaSelected","aria-setsize":"ariaSetSize","aria-sort":"ariaSort","aria-valuemax":"ariaValueMax","aria-valuemin":"ariaValueMin","aria-valuenow":"ariaValueNow","aria-valuetext":"ariaValueText"})),oo=Array.from(Ii).reduce((e,[t,r])=>(e.set(t,r),e),new Map),Ri=class extends Di{constructor(){super(),this._schema=new Map,this._eventSchema=new Map,ao.forEach(e=>{let t=new Map,r=new Set,[n,i]=e.split("|"),s=i.split(","),[a,o]=n.split("^");a.split(",").forEach(u=>{this._schema.set(u.toLowerCase(),t),this._eventSchema.set(u.toLowerCase(),r)});let c=o&&this._schema.get(o.toLowerCase());if(c){for(let[u,p]of c)t.set(u,p);for(let u of this._eventSchema.get(o.toLowerCase()))r.add(u)}s.forEach(u=>{if(u.length>0)switch(u[0]){case"*":r.add(u.substring(1));break;case"!":t.set(u.substring(1),ro);break;case"#":t.set(u.substring(1),no);break;case"%":t.set(u.substring(1),so);break;default:t.set(u,io)}})})}hasProperty(e,t,r){if(r.some(n=>n.name===xr.name))return!0;if(e.indexOf("-")>-1){if(br(e)||wr(e))return!1;if(r.some(n=>n.name===kr.name))return!0}return(this._schema.get(e.toLowerCase())||this._schema.get("unknown")).has(t)}hasElement(e,t){return t.some(r=>r.name===xr.name)||e.indexOf("-")>-1&&(br(e)||wr(e)||t.some(r=>r.name===kr.name))?!0:this._schema.has(e.toLowerCase())}securityContext(e,t,r){r&&(t=this.getMappedPropName(t)),e=e.toLowerCase(),t=t.toLowerCase();let n=Ar()[e+"|"+t];return n||(n=Ar()["*|"+t],n||re.NONE)}getMappedPropName(e){return Ii.get(e)??e}getDefaultComponentElementName(){return"ng-component"}validateProperty(e){return e.toLowerCase().startsWith("on")?{error:!0,msg:`Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.`}:{error:!1}}validateAttribute(e){return e.toLowerCase().startsWith("on")?{error:!0,msg:`Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...`}:{error:!1}}allKnownElementNames(){return Array.from(this._schema.keys())}allKnownAttributesOfElement(e){let t=this._schema.get(e.toLowerCase())||this._schema.get("unknown");return Array.from(t.keys()).map(r=>oo.get(r)??r)}allKnownEventsOfElement(e){return Array.from(this._eventSchema.get(e.toLowerCase())??[])}normalizeAnimationStyleProperty(e){return Oi(e)}normalizeAnimationStyleValue(e,t,r){let n="",i=r.toString().trim(),s=null;if(lo(e)&&r!==0&&r!=="0")if(typeof r=="number")n="px";else{let a=r.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&(s=`Please provide a CSS unit value for ${t}:${r}`)}return{error:s,value:i+n}}};function lo(e){switch(e){case"width":case"height":case"minWidth":case"minHeight":case"maxWidth":case"maxHeight":case"left":case"top":case"bottom":case"right":case"fontSize":case"outlineWidth":case"outlineOffset":case"paddingTop":case"paddingLeft":case"paddingBottom":case"paddingRight":case"marginTop":case"marginLeft":case"marginBottom":case"marginRight":case"borderRadius":case"borderWidth":case"borderTopWidth":case"borderLeftWidth":case"borderRightWidth":case"borderBottomWidth":case"textIndent":return!0;default:return!1}}var f=class{constructor({closedByChildren:e,implicitNamespacePrefix:t,contentType:r=R.PARSABLE_DATA,closedByParent:n=!1,isVoid:i=!1,ignoreFirstLf:s=!1,preventNamespaceInheritance:a=!1,canSelfClose:o=!1}={}){this.closedByChildren={},this.closedByParent=!1,e&&e.length>0&&e.forEach(c=>this.closedByChildren[c]=!0),this.isVoid=i,this.closedByParent=n||i,this.implicitNamespacePrefix=t||null,this.contentType=r,this.ignoreFirstLf=s,this.preventNamespaceInheritance=a,this.canSelfClose=o??i}isClosedByChild(e){return this.isVoid||e.toLowerCase()in this.closedByChildren}getContentType(e){return typeof this.contentType=="object"?(e===void 0?void 0:this.contentType[e])??this.contentType.default:this.contentType}},Mi,lt;function Be(e){return lt||(Mi=new f({canSelfClose:!0}),lt=Object.assign(Object.create(null),{base:new f({isVoid:!0}),meta:new f({isVoid:!0}),area:new f({isVoid:!0}),embed:new f({isVoid:!0}),link:new f({isVoid:!0}),img:new f({isVoid:!0}),input:new f({isVoid:!0}),param:new f({isVoid:!0}),hr:new f({isVoid:!0}),br:new f({isVoid:!0}),source:new f({isVoid:!0}),track:new f({isVoid:!0}),wbr:new f({isVoid:!0}),p:new f({closedByChildren:["address","article","aside","blockquote","div","dl","fieldset","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","main","nav","ol","p","pre","section","table","ul"],closedByParent:!0}),thead:new f({closedByChildren:["tbody","tfoot"]}),tbody:new f({closedByChildren:["tbody","tfoot"],closedByParent:!0}),tfoot:new f({closedByChildren:["tbody"],closedByParent:!0}),tr:new f({closedByChildren:["tr"],closedByParent:!0}),td:new f({closedByChildren:["td","th"],closedByParent:!0}),th:new f({closedByChildren:["td","th"],closedByParent:!0}),col:new f({isVoid:!0}),svg:new f({implicitNamespacePrefix:"svg"}),foreignObject:new f({implicitNamespacePrefix:"svg",preventNamespaceInheritance:!0}),math:new f({implicitNamespacePrefix:"math"}),li:new f({closedByChildren:["li"],closedByParent:!0}),dt:new f({closedByChildren:["dt","dd"]}),dd:new f({closedByChildren:["dt","dd"],closedByParent:!0}),rb:new f({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rt:new f({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),rtc:new f({closedByChildren:["rb","rtc","rp"],closedByParent:!0}),rp:new f({closedByChildren:["rb","rt","rtc","rp"],closedByParent:!0}),optgroup:new f({closedByChildren:["optgroup"],closedByParent:!0}),option:new f({closedByChildren:["option","optgroup"],closedByParent:!0}),pre:new f({ignoreFirstLf:!0}),listing:new f({ignoreFirstLf:!0}),style:new f({contentType:R.RAW_TEXT}),script:new f({contentType:R.RAW_TEXT}),title:new f({contentType:{default:R.ESCAPABLE_RAW_TEXT,svg:R.PARSABLE_DATA}}),textarea:new f({contentType:R.ESCAPABLE_RAW_TEXT,ignoreFirstLf:!0})}),new Ri().allKnownElementNames().forEach(t=>{!lt[t]&&Me(t)===null&&(lt[t]=new f({canSelfClose:!1}))})),lt[e]??Mi}function ct(e){return e>=9&&e<=32||e==160}function ut(e){return 48<=e&&e<=57}function Fe(e){return e>=97&&e<=122||e>=65&&e<=90}function Bi(e){return e>=97&&e<=102||e>=65&&e<=70||ut(e)}function pt(e){return e===10||e===13}function yr(e){return 48<=e&&e<=55}function Ut(e){return e===39||e===34||e===96}var qe=class qi{constructor(t,r,n,i){this.file=t,this.offset=r,this.line=n,this.col=i}toString(){return this.offset!=null?`${this.file.url}@${this.line}:${this.col}`:this.file.url}moveBy(t){let r=this.file.content,n=r.length,i=this.offset,s=this.line,a=this.col;for(;i>0&&t<0;)if(i--,t++,r.charCodeAt(i)==10){s--;let o=r.substring(0,i-1).lastIndexOf(String.fromCharCode(10));a=o>0?i-o:i}else a--;for(;i<n&&t>0;){let o=r.charCodeAt(i);i++,t--,o==10?(s++,a=0):a++}return new qi(this.file,i,s,a)}getContext(t,r){let n=this.file.content,i=this.offset;if(i!=null){i>n.length-1&&(i=n.length-1);let s=i,a=0,o=0;for(;a<t&&i>0&&(i--,a++,!(n[i]==`
`&&++o==r)););for(a=0,o=0;a<t&&s<n.length-1&&(s++,a++,!(n[s]==`
`&&++o==r)););return{before:n.substring(i,this.offset),after:n.substring(this.offset,s+1)}}return null}},mt=class{constructor(e,t){this.content=e,this.url=t}},h=class{constructor(e,t,r=e,n=null){this.start=e,this.end=t,this.fullStart=r,this.details=n}toString(){return this.start.file.content.substring(this.start.offset,this.end.offset)}},Fi=(function(e){return e[e.WARNING=0]="WARNING",e[e.ERROR=1]="ERROR",e})({}),ne=class extends Error{constructor(e,t,r=Fi.ERROR,n){super(t),this.span=e,this.msg=t,this.level=r,this.relatedError=n,Object.setPrototypeOf(this,new.target.prototype)}contextualMessage(){let e=this.span.start.getContext(100,3);return e?`${this.msg} ("${e.before}[${Fi[this.level]} ->]${e.after}")`:this.msg}toString(){let e=this.span.details?`, ${this.span.details}`:"";return`${this.contextualMessage()}: ${this.span.start}${e}`}};var Ce=class{constructor(e,t){this.sourceSpan=e,this.i18n=t}},Hi=class extends Ce{constructor(e,t,r,n){super(t,n),this.value=e,this.tokens=r,this.kind="text"}visit(e,t){return e.visitText(this,t)}},Vi=class extends Ce{constructor(e,t,r,n){super(t,n),this.value=e,this.tokens=r,this.kind="cdata"}visit(e,t){return e.visitCdata(this,t)}},Ui=class extends Ce{constructor(e,t,r,n,i,s){super(n,s),this.switchValue=e,this.type=t,this.cases=r,this.switchValueSourceSpan=i,this.kind="expansion"}visit(e,t){return e.visitExpansion(this,t)}},Wi=class{constructor(e,t,r,n,i){this.value=e,this.expression=t,this.sourceSpan=r,this.valueSourceSpan=n,this.expSourceSpan=i,this.kind="expansionCase"}visit(e,t){return e.visitExpansionCase(this,t)}},Gi=class extends Ce{constructor(e,t,r,n,i,s,a){super(r,a),this.name=e,this.value=t,this.keySpan=n,this.valueSpan=i,this.valueTokens=s,this.kind="attribute"}visit(e,t){return e.visitAttribute(this,t)}get nameSpan(){return this.keySpan}},ie=class extends Ce{constructor(e,t,r,n,i,s,a,o=null,c=null,u,p){super(s,p),this.name=e,this.attrs=t,this.directives=r,this.children=n,this.isSelfClosing=i,this.startSourceSpan=a,this.endSourceSpan=o,this.nameSpan=c,this.isVoid=u,this.kind="element"}visit(e,t){return e.visitElement(this,t)}},$i=class{constructor(e,t){this.value=e,this.sourceSpan=t,this.kind="comment"}visit(e,t){return e.visitComment(this,t)}},zi=class{constructor(e,t){this.value=e,this.sourceSpan=t,this.kind="docType"}visit(e,t){return e.visitDocType(this,t)}},ve=class extends Ce{constructor(e,t,r,n,i,s,a=null,o){super(n,o),this.name=e,this.parameters=t,this.children=r,this.nameSpan=i,this.startSourceSpan=s,this.endSourceSpan=a,this.kind="block"}visit(e,t){return e.visitBlock(this,t)}},J=class extends Ce{constructor(e,t,r,n,i,s,a,o,c,u=null,p){super(o,p),this.componentName=e,this.tagName=t,this.fullName=r,this.attrs=n,this.directives=i,this.children=s,this.isSelfClosing=a,this.startSourceSpan=c,this.endSourceSpan=u,this.kind="component"}visit(e,t){return e.visitComponent(this,t)}},Yi=class{constructor(e,t,r,n,i=null){this.name=e,this.attrs=t,this.sourceSpan=r,this.startSourceSpan=n,this.endSourceSpan=i,this.kind="directive"}visit(e,t){return e.visitDirective(this,t)}},Nr=class{constructor(e,t){this.expression=e,this.sourceSpan=t,this.kind="blockParameter",this.startSourceSpan=null,this.endSourceSpan=null}visit(e,t){return e.visitBlockParameter(this,t)}},Lr=class{constructor(e,t,r,n,i){this.name=e,this.value=t,this.sourceSpan=r,this.nameSpan=n,this.valueSpan=i,this.kind="letDeclaration",this.startSourceSpan=null,this.endSourceSpan=null}visit(e,t){return e.visitLetDeclaration(this,t)}};function Wt(e,t,r=null){let n=[],i=e.visit?s=>e.visit(s,r)||s.visit(e,r):s=>s.visit(e,r);return t.forEach(s=>{let a=i(s);a&&n.push(a)}),n}var Pr=class{constructor(){}visitElement(e,t){this.visitChildren(t,r=>{r(e.attrs),r(e.directives),r(e.children)})}visitAttribute(e,t){}visitText(e,t){}visitCdata(e,t){}visitComment(e,t){}visitDocType(e,t){}visitExpansion(e,t){return this.visitChildren(t,r=>{r(e.cases)})}visitExpansionCase(e,t){}visitBlock(e,t){this.visitChildren(t,r=>{r(e.parameters),r(e.children)})}visitBlockParameter(e,t){}visitLetDeclaration(e,t){}visitComponent(e,t){this.visitChildren(t,r=>{r(e.attrs),r(e.children)})}visitDirective(e,t){this.visitChildren(t,r=>{r(e.attrs)})}visitChildren(e,t){let r=[],n=this;function i(s){s&&r.push(Wt(n,s,e))}return t(i),Array.prototype.concat.apply([],r)}};var Te={AElig:"\xC6",AMP:"&",amp:"&",Aacute:"\xC1",Abreve:"\u0102",Acirc:"\xC2",Acy:"\u0410",Afr:"\u{1D504}",Agrave:"\xC0",Alpha:"\u0391",Amacr:"\u0100",And:"\u2A53",Aogon:"\u0104",Aopf:"\u{1D538}",ApplyFunction:"\u2061",af:"\u2061",Aring:"\xC5",angst:"\xC5",Ascr:"\u{1D49C}",Assign:"\u2254",colone:"\u2254",coloneq:"\u2254",Atilde:"\xC3",Auml:"\xC4",Backslash:"\u2216",setminus:"\u2216",setmn:"\u2216",smallsetminus:"\u2216",ssetmn:"\u2216",Barv:"\u2AE7",Barwed:"\u2306",doublebarwedge:"\u2306",Bcy:"\u0411",Because:"\u2235",becaus:"\u2235",because:"\u2235",Bernoullis:"\u212C",Bscr:"\u212C",bernou:"\u212C",Beta:"\u0392",Bfr:"\u{1D505}",Bopf:"\u{1D539}",Breve:"\u02D8",breve:"\u02D8",Bumpeq:"\u224E",HumpDownHump:"\u224E",bump:"\u224E",CHcy:"\u0427",COPY:"\xA9",copy:"\xA9",Cacute:"\u0106",Cap:"\u22D2",CapitalDifferentialD:"\u2145",DD:"\u2145",Cayleys:"\u212D",Cfr:"\u212D",Ccaron:"\u010C",Ccedil:"\xC7",Ccirc:"\u0108",Cconint:"\u2230",Cdot:"\u010A",Cedilla:"\xB8",cedil:"\xB8",CenterDot:"\xB7",centerdot:"\xB7",middot:"\xB7",Chi:"\u03A7",CircleDot:"\u2299",odot:"\u2299",CircleMinus:"\u2296",ominus:"\u2296",CirclePlus:"\u2295",oplus:"\u2295",CircleTimes:"\u2297",otimes:"\u2297",ClockwiseContourIntegral:"\u2232",cwconint:"\u2232",CloseCurlyDoubleQuote:"\u201D",rdquo:"\u201D",rdquor:"\u201D",CloseCurlyQuote:"\u2019",rsquo:"\u2019",rsquor:"\u2019",Colon:"\u2237",Proportion:"\u2237",Colone:"\u2A74",Congruent:"\u2261",equiv:"\u2261",Conint:"\u222F",DoubleContourIntegral:"\u222F",ContourIntegral:"\u222E",conint:"\u222E",oint:"\u222E",Copf:"\u2102",complexes:"\u2102",Coproduct:"\u2210",coprod:"\u2210",CounterClockwiseContourIntegral:"\u2233",awconint:"\u2233",Cross:"\u2A2F",Cscr:"\u{1D49E}",Cup:"\u22D3",CupCap:"\u224D",asympeq:"\u224D",DDotrahd:"\u2911",DJcy:"\u0402",DScy:"\u0405",DZcy:"\u040F",Dagger:"\u2021",ddagger:"\u2021",Darr:"\u21A1",Dashv:"\u2AE4",DoubleLeftTee:"\u2AE4",Dcaron:"\u010E",Dcy:"\u0414",Del:"\u2207",nabla:"\u2207",Delta:"\u0394",Dfr:"\u{1D507}",DiacriticalAcute:"\xB4",acute:"\xB4",DiacriticalDot:"\u02D9",dot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",dblac:"\u02DD",DiacriticalGrave:"`",grave:"`",DiacriticalTilde:"\u02DC",tilde:"\u02DC",Diamond:"\u22C4",diam:"\u22C4",diamond:"\u22C4",DifferentialD:"\u2146",dd:"\u2146",Dopf:"\u{1D53B}",Dot:"\xA8",DoubleDot:"\xA8",die:"\xA8",uml:"\xA8",DotDot:"\u20DC",DotEqual:"\u2250",doteq:"\u2250",esdot:"\u2250",DoubleDownArrow:"\u21D3",Downarrow:"\u21D3",dArr:"\u21D3",DoubleLeftArrow:"\u21D0",Leftarrow:"\u21D0",lArr:"\u21D0",DoubleLeftRightArrow:"\u21D4",Leftrightarrow:"\u21D4",hArr:"\u21D4",iff:"\u21D4",DoubleLongLeftArrow:"\u27F8",Longleftarrow:"\u27F8",xlArr:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",Longleftrightarrow:"\u27FA",xhArr:"\u27FA",DoubleLongRightArrow:"\u27F9",Longrightarrow:"\u27F9",xrArr:"\u27F9",DoubleRightArrow:"\u21D2",Implies:"\u21D2",Rightarrow:"\u21D2",rArr:"\u21D2",DoubleRightTee:"\u22A8",vDash:"\u22A8",DoubleUpArrow:"\u21D1",Uparrow:"\u21D1",uArr:"\u21D1",DoubleUpDownArrow:"\u21D5",Updownarrow:"\u21D5",vArr:"\u21D5",DoubleVerticalBar:"\u2225",par:"\u2225",parallel:"\u2225",shortparallel:"\u2225",spar:"\u2225",DownArrow:"\u2193",ShortDownArrow:"\u2193",darr:"\u2193",downarrow:"\u2193",DownArrowBar:"\u2913",DownArrowUpArrow:"\u21F5",duarr:"\u21F5",DownBreve:"\u0311",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVector:"\u21BD",leftharpoondown:"\u21BD",lhard:"\u21BD",DownLeftVectorBar:"\u2956",DownRightTeeVector:"\u295F",DownRightVector:"\u21C1",rhard:"\u21C1",rightharpoondown:"\u21C1",DownRightVectorBar:"\u2957",DownTee:"\u22A4",top:"\u22A4",DownTeeArrow:"\u21A7",mapstodown:"\u21A7",Dscr:"\u{1D49F}",Dstrok:"\u0110",ENG:"\u014A",ETH:"\xD0",Eacute:"\xC9",Ecaron:"\u011A",Ecirc:"\xCA",Ecy:"\u042D",Edot:"\u0116",Efr:"\u{1D508}",Egrave:"\xC8",Element:"\u2208",in:"\u2208",isin:"\u2208",isinv:"\u2208",Emacr:"\u0112",EmptySmallSquare:"\u25FB",EmptyVerySmallSquare:"\u25AB",Eogon:"\u0118",Eopf:"\u{1D53C}",Epsilon:"\u0395",Equal:"\u2A75",EqualTilde:"\u2242",eqsim:"\u2242",esim:"\u2242",Equilibrium:"\u21CC",rightleftharpoons:"\u21CC",rlhar:"\u21CC",Escr:"\u2130",expectation:"\u2130",Esim:"\u2A73",Eta:"\u0397",Euml:"\xCB",Exists:"\u2203",exist:"\u2203",ExponentialE:"\u2147",ee:"\u2147",exponentiale:"\u2147",Fcy:"\u0424",Ffr:"\u{1D509}",FilledSmallSquare:"\u25FC",FilledVerySmallSquare:"\u25AA",blacksquare:"\u25AA",squarf:"\u25AA",squf:"\u25AA",Fopf:"\u{1D53D}",ForAll:"\u2200",forall:"\u2200",Fouriertrf:"\u2131",Fscr:"\u2131",GJcy:"\u0403",GT:">",gt:">",Gamma:"\u0393",Gammad:"\u03DC",Gbreve:"\u011E",Gcedil:"\u0122",Gcirc:"\u011C",Gcy:"\u0413",Gdot:"\u0120",Gfr:"\u{1D50A}",Gg:"\u22D9",ggg:"\u22D9",Gopf:"\u{1D53E}",GreaterEqual:"\u2265",ge:"\u2265",geq:"\u2265",GreaterEqualLess:"\u22DB",gel:"\u22DB",gtreqless:"\u22DB",GreaterFullEqual:"\u2267",gE:"\u2267",geqq:"\u2267",GreaterGreater:"\u2AA2",GreaterLess:"\u2277",gl:"\u2277",gtrless:"\u2277",GreaterSlantEqual:"\u2A7E",geqslant:"\u2A7E",ges:"\u2A7E",GreaterTilde:"\u2273",gsim:"\u2273",gtrsim:"\u2273",Gscr:"\u{1D4A2}",Gt:"\u226B",NestedGreaterGreater:"\u226B",gg:"\u226B",HARDcy:"\u042A",Hacek:"\u02C7",caron:"\u02C7",Hat:"^",Hcirc:"\u0124",Hfr:"\u210C",Poincareplane:"\u210C",HilbertSpace:"\u210B",Hscr:"\u210B",hamilt:"\u210B",Hopf:"\u210D",quaternions:"\u210D",HorizontalLine:"\u2500",boxh:"\u2500",Hstrok:"\u0126",HumpEqual:"\u224F",bumpe:"\u224F",bumpeq:"\u224F",IEcy:"\u0415",IJlig:"\u0132",IOcy:"\u0401",Iacute:"\xCD",Icirc:"\xCE",Icy:"\u0418",Idot:"\u0130",Ifr:"\u2111",Im:"\u2111",image:"\u2111",imagpart:"\u2111",Igrave:"\xCC",Imacr:"\u012A",ImaginaryI:"\u2148",ii:"\u2148",Int:"\u222C",Integral:"\u222B",int:"\u222B",Intersection:"\u22C2",bigcap:"\u22C2",xcap:"\u22C2",InvisibleComma:"\u2063",ic:"\u2063",InvisibleTimes:"\u2062",it:"\u2062",Iogon:"\u012E",Iopf:"\u{1D540}",Iota:"\u0399",Iscr:"\u2110",imagline:"\u2110",Itilde:"\u0128",Iukcy:"\u0406",Iuml:"\xCF",Jcirc:"\u0134",Jcy:"\u0419",Jfr:"\u{1D50D}",Jopf:"\u{1D541}",Jscr:"\u{1D4A5}",Jsercy:"\u0408",Jukcy:"\u0404",KHcy:"\u0425",KJcy:"\u040C",Kappa:"\u039A",Kcedil:"\u0136",Kcy:"\u041A",Kfr:"\u{1D50E}",Kopf:"\u{1D542}",Kscr:"\u{1D4A6}",LJcy:"\u0409",LT:"<",lt:"<",Lacute:"\u0139",Lambda:"\u039B",Lang:"\u27EA",Laplacetrf:"\u2112",Lscr:"\u2112",lagran:"\u2112",Larr:"\u219E",twoheadleftarrow:"\u219E",Lcaron:"\u013D",Lcedil:"\u013B",Lcy:"\u041B",LeftAngleBracket:"\u27E8",lang:"\u27E8",langle:"\u27E8",LeftArrow:"\u2190",ShortLeftArrow:"\u2190",larr:"\u2190",leftarrow:"\u2190",slarr:"\u2190",LeftArrowBar:"\u21E4",larrb:"\u21E4",LeftArrowRightArrow:"\u21C6",leftrightarrows:"\u21C6",lrarr:"\u21C6",LeftCeiling:"\u2308",lceil:"\u2308",LeftDoubleBracket:"\u27E6",lobrk:"\u27E6",LeftDownTeeVector:"\u2961",LeftDownVector:"\u21C3",dharl:"\u21C3",downharpoonleft:"\u21C3",LeftDownVectorBar:"\u2959",LeftFloor:"\u230A",lfloor:"\u230A",LeftRightArrow:"\u2194",harr:"\u2194",leftrightarrow:"\u2194",LeftRightVector:"\u294E",LeftTee:"\u22A3",dashv:"\u22A3",LeftTeeArrow:"\u21A4",mapstoleft:"\u21A4",LeftTeeVector:"\u295A",LeftTriangle:"\u22B2",vartriangleleft:"\u22B2",vltri:"\u22B2",LeftTriangleBar:"\u29CF",LeftTriangleEqual:"\u22B4",ltrie:"\u22B4",trianglelefteq:"\u22B4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVector:"\u21BF",uharl:"\u21BF",upharpoonleft:"\u21BF",LeftUpVectorBar:"\u2958",LeftVector:"\u21BC",leftharpoonup:"\u21BC",lharu:"\u21BC",LeftVectorBar:"\u2952",LessEqualGreater:"\u22DA",leg:"\u22DA",lesseqgtr:"\u22DA",LessFullEqual:"\u2266",lE:"\u2266",leqq:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",lg:"\u2276",LessLess:"\u2AA1",LessSlantEqual:"\u2A7D",leqslant:"\u2A7D",les:"\u2A7D",LessTilde:"\u2272",lesssim:"\u2272",lsim:"\u2272",Lfr:"\u{1D50F}",Ll:"\u22D8",Lleftarrow:"\u21DA",lAarr:"\u21DA",Lmidot:"\u013F",LongLeftArrow:"\u27F5",longleftarrow:"\u27F5",xlarr:"\u27F5",LongLeftRightArrow:"\u27F7",longleftrightarrow:"\u27F7",xharr:"\u27F7",LongRightArrow:"\u27F6",longrightarrow:"\u27F6",xrarr:"\u27F6",Lopf:"\u{1D543}",LowerLeftArrow:"\u2199",swarr:"\u2199",swarrow:"\u2199",LowerRightArrow:"\u2198",searr:"\u2198",searrow:"\u2198",Lsh:"\u21B0",lsh:"\u21B0",Lstrok:"\u0141",Lt:"\u226A",NestedLessLess:"\u226A",ll:"\u226A",Map:"\u2905",Mcy:"\u041C",MediumSpace:"\u205F",Mellintrf:"\u2133",Mscr:"\u2133",phmmat:"\u2133",Mfr:"\u{1D510}",MinusPlus:"\u2213",mnplus:"\u2213",mp:"\u2213",Mopf:"\u{1D544}",Mu:"\u039C",NJcy:"\u040A",Nacute:"\u0143",Ncaron:"\u0147",Ncedil:"\u0145",Ncy:"\u041D",NegativeMediumSpace:"\u200B",NegativeThickSpace:"\u200B",NegativeThinSpace:"\u200B",NegativeVeryThinSpace:"\u200B",ZeroWidthSpace:"\u200B",NewLine:`
`,Nfr:"\u{1D511}",NoBreak:"\u2060",NonBreakingSpace:"\xA0",nbsp:"\xA0",Nopf:"\u2115",naturals:"\u2115",Not:"\u2AEC",NotCongruent:"\u2262",nequiv:"\u2262",NotCupCap:"\u226D",NotDoubleVerticalBar:"\u2226",npar:"\u2226",nparallel:"\u2226",nshortparallel:"\u2226",nspar:"\u2226",NotElement:"\u2209",notin:"\u2209",notinva:"\u2209",NotEqual:"\u2260",ne:"\u2260",NotEqualTilde:"\u2242\u0338",nesim:"\u2242\u0338",NotExists:"\u2204",nexist:"\u2204",nexists:"\u2204",NotGreater:"\u226F",ngt:"\u226F",ngtr:"\u226F",NotGreaterEqual:"\u2271",nge:"\u2271",ngeq:"\u2271",NotGreaterFullEqual:"\u2267\u0338",ngE:"\u2267\u0338",ngeqq:"\u2267\u0338",NotGreaterGreater:"\u226B\u0338",nGtv:"\u226B\u0338",NotGreaterLess:"\u2279",ntgl:"\u2279",NotGreaterSlantEqual:"\u2A7E\u0338",ngeqslant:"\u2A7E\u0338",nges:"\u2A7E\u0338",NotGreaterTilde:"\u2275",ngsim:"\u2275",NotHumpDownHump:"\u224E\u0338",nbump:"\u224E\u0338",NotHumpEqual:"\u224F\u0338",nbumpe:"\u224F\u0338",NotLeftTriangle:"\u22EA",nltri:"\u22EA",ntriangleleft:"\u22EA",NotLeftTriangleBar:"\u29CF\u0338",NotLeftTriangleEqual:"\u22EC",nltrie:"\u22EC",ntrianglelefteq:"\u22EC",NotLess:"\u226E",nless:"\u226E",nlt:"\u226E",NotLessEqual:"\u2270",nle:"\u2270",nleq:"\u2270",NotLessGreater:"\u2278",ntlg:"\u2278",NotLessLess:"\u226A\u0338",nLtv:"\u226A\u0338",NotLessSlantEqual:"\u2A7D\u0338",nleqslant:"\u2A7D\u0338",nles:"\u2A7D\u0338",NotLessTilde:"\u2274",nlsim:"\u2274",NotNestedGreaterGreater:"\u2AA2\u0338",NotNestedLessLess:"\u2AA1\u0338",NotPrecedes:"\u2280",npr:"\u2280",nprec:"\u2280",NotPrecedesEqual:"\u2AAF\u0338",npre:"\u2AAF\u0338",npreceq:"\u2AAF\u0338",NotPrecedesSlantEqual:"\u22E0",nprcue:"\u22E0",NotReverseElement:"\u220C",notni:"\u220C",notniva:"\u220C",NotRightTriangle:"\u22EB",nrtri:"\u22EB",ntriangleright:"\u22EB",NotRightTriangleBar:"\u29D0\u0338",NotRightTriangleEqual:"\u22ED",nrtrie:"\u22ED",ntrianglerighteq:"\u22ED",NotSquareSubset:"\u228F\u0338",NotSquareSubsetEqual:"\u22E2",nsqsube:"\u22E2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22E3",nsqsupe:"\u22E3",NotSubset:"\u2282\u20D2",nsubset:"\u2282\u20D2",vnsub:"\u2282\u20D2",NotSubsetEqual:"\u2288",nsube:"\u2288",nsubseteq:"\u2288",NotSucceeds:"\u2281",nsc:"\u2281",nsucc:"\u2281",NotSucceedsEqual:"\u2AB0\u0338",nsce:"\u2AB0\u0338",nsucceq:"\u2AB0\u0338",NotSucceedsSlantEqual:"\u22E1",nsccue:"\u22E1",NotSucceedsTilde:"\u227F\u0338",NotSuperset:"\u2283\u20D2",nsupset:"\u2283\u20D2",vnsup:"\u2283\u20D2",NotSupersetEqual:"\u2289",nsupe:"\u2289",nsupseteq:"\u2289",NotTilde:"\u2241",nsim:"\u2241",NotTildeEqual:"\u2244",nsime:"\u2244",nsimeq:"\u2244",NotTildeFullEqual:"\u2247",ncong:"\u2247",NotTildeTilde:"\u2249",nap:"\u2249",napprox:"\u2249",NotVerticalBar:"\u2224",nmid:"\u2224",nshortmid:"\u2224",nsmid:"\u2224",Nscr:"\u{1D4A9}",Ntilde:"\xD1",Nu:"\u039D",OElig:"\u0152",Oacute:"\xD3",Ocirc:"\xD4",Ocy:"\u041E",Odblac:"\u0150",Ofr:"\u{1D512}",Ograve:"\xD2",Omacr:"\u014C",Omega:"\u03A9",ohm:"\u03A9",Omicron:"\u039F",Oopf:"\u{1D546}",OpenCurlyDoubleQuote:"\u201C",ldquo:"\u201C",OpenCurlyQuote:"\u2018",lsquo:"\u2018",Or:"\u2A54",Oscr:"\u{1D4AA}",Oslash:"\xD8",Otilde:"\xD5",Otimes:"\u2A37",Ouml:"\xD6",OverBar:"\u203E",oline:"\u203E",OverBrace:"\u23DE",OverBracket:"\u23B4",tbrk:"\u23B4",OverParenthesis:"\u23DC",PartialD:"\u2202",part:"\u2202",Pcy:"\u041F",Pfr:"\u{1D513}",Phi:"\u03A6",Pi:"\u03A0",PlusMinus:"\xB1",plusmn:"\xB1",pm:"\xB1",Popf:"\u2119",primes:"\u2119",Pr:"\u2ABB",Precedes:"\u227A",pr:"\u227A",prec:"\u227A",PrecedesEqual:"\u2AAF",pre:"\u2AAF",preceq:"\u2AAF",PrecedesSlantEqual:"\u227C",prcue:"\u227C",preccurlyeq:"\u227C",PrecedesTilde:"\u227E",precsim:"\u227E",prsim:"\u227E",Prime:"\u2033",Product:"\u220F",prod:"\u220F",Proportional:"\u221D",prop:"\u221D",propto:"\u221D",varpropto:"\u221D",vprop:"\u221D",Pscr:"\u{1D4AB}",Psi:"\u03A8",QUOT:'"',quot:'"',Qfr:"\u{1D514}",Qopf:"\u211A",rationals:"\u211A",Qscr:"\u{1D4AC}",RBarr:"\u2910",drbkarow:"\u2910",REG:"\xAE",circledR:"\xAE",reg:"\xAE",Racute:"\u0154",Rang:"\u27EB",Rarr:"\u21A0",twoheadrightarrow:"\u21A0",Rarrtl:"\u2916",Rcaron:"\u0158",Rcedil:"\u0156",Rcy:"\u0420",Re:"\u211C",Rfr:"\u211C",real:"\u211C",realpart:"\u211C",ReverseElement:"\u220B",SuchThat:"\u220B",ni:"\u220B",niv:"\u220B",ReverseEquilibrium:"\u21CB",leftrightharpoons:"\u21CB",lrhar:"\u21CB",ReverseUpEquilibrium:"\u296F",duhar:"\u296F",Rho:"\u03A1",RightAngleBracket:"\u27E9",rang:"\u27E9",rangle:"\u27E9",RightArrow:"\u2192",ShortRightArrow:"\u2192",rarr:"\u2192",rightarrow:"\u2192",srarr:"\u2192",RightArrowBar:"\u21E5",rarrb:"\u21E5",RightArrowLeftArrow:"\u21C4",rightleftarrows:"\u21C4",rlarr:"\u21C4",RightCeiling:"\u2309",rceil:"\u2309",RightDoubleBracket:"\u27E7",robrk:"\u27E7",RightDownTeeVector:"\u295D",RightDownVector:"\u21C2",dharr:"\u21C2",downharpoonright:"\u21C2",RightDownVectorBar:"\u2955",RightFloor:"\u230B",rfloor:"\u230B",RightTee:"\u22A2",vdash:"\u22A2",RightTeeArrow:"\u21A6",map:"\u21A6",mapsto:"\u21A6",RightTeeVector:"\u295B",RightTriangle:"\u22B3",vartriangleright:"\u22B3",vrtri:"\u22B3",RightTriangleBar:"\u29D0",RightTriangleEqual:"\u22B5",rtrie:"\u22B5",trianglerighteq:"\u22B5",RightUpDownVector:"\u294F",RightUpTeeVector:"\u295C",RightUpVector:"\u21BE",uharr:"\u21BE",upharpoonright:"\u21BE",RightUpVectorBar:"\u2954",RightVector:"\u21C0",rharu:"\u21C0",rightharpoonup:"\u21C0",RightVectorBar:"\u2953",Ropf:"\u211D",reals:"\u211D",RoundImplies:"\u2970",Rrightarrow:"\u21DB",rAarr:"\u21DB",Rscr:"\u211B",realine:"\u211B",Rsh:"\u21B1",rsh:"\u21B1",RuleDelayed:"\u29F4",SHCHcy:"\u0429",SHcy:"\u0428",SOFTcy:"\u042C",Sacute:"\u015A",Sc:"\u2ABC",Scaron:"\u0160",Scedil:"\u015E",Scirc:"\u015C",Scy:"\u0421",Sfr:"\u{1D516}",ShortUpArrow:"\u2191",UpArrow:"\u2191",uarr:"\u2191",uparrow:"\u2191",Sigma:"\u03A3",SmallCircle:"\u2218",compfn:"\u2218",Sopf:"\u{1D54A}",Sqrt:"\u221A",radic:"\u221A",Square:"\u25A1",squ:"\u25A1",square:"\u25A1",SquareIntersection:"\u2293",sqcap:"\u2293",SquareSubset:"\u228F",sqsub:"\u228F",sqsubset:"\u228F",SquareSubsetEqual:"\u2291",sqsube:"\u2291",sqsubseteq:"\u2291",SquareSuperset:"\u2290",sqsup:"\u2290",sqsupset:"\u2290",SquareSupersetEqual:"\u2292",sqsupe:"\u2292",sqsupseteq:"\u2292",SquareUnion:"\u2294",sqcup:"\u2294",Sscr:"\u{1D4AE}",Star:"\u22C6",sstarf:"\u22C6",Sub:"\u22D0",Subset:"\u22D0",SubsetEqual:"\u2286",sube:"\u2286",subseteq:"\u2286",Succeeds:"\u227B",sc:"\u227B",succ:"\u227B",SucceedsEqual:"\u2AB0",sce:"\u2AB0",succeq:"\u2AB0",SucceedsSlantEqual:"\u227D",sccue:"\u227D",succcurlyeq:"\u227D",SucceedsTilde:"\u227F",scsim:"\u227F",succsim:"\u227F",Sum:"\u2211",sum:"\u2211",Sup:"\u22D1",Supset:"\u22D1",Superset:"\u2283",sup:"\u2283",supset:"\u2283",SupersetEqual:"\u2287",supe:"\u2287",supseteq:"\u2287",THORN:"\xDE",TRADE:"\u2122",trade:"\u2122",TSHcy:"\u040B",TScy:"\u0426",Tab:"	",Tau:"\u03A4",Tcaron:"\u0164",Tcedil:"\u0162",Tcy:"\u0422",Tfr:"\u{1D517}",Therefore:"\u2234",there4:"\u2234",therefore:"\u2234",Theta:"\u0398",ThickSpace:"\u205F\u200A",ThinSpace:"\u2009",thinsp:"\u2009",Tilde:"\u223C",sim:"\u223C",thicksim:"\u223C",thksim:"\u223C",TildeEqual:"\u2243",sime:"\u2243",simeq:"\u2243",TildeFullEqual:"\u2245",cong:"\u2245",TildeTilde:"\u2248",ap:"\u2248",approx:"\u2248",asymp:"\u2248",thickapprox:"\u2248",thkap:"\u2248",Topf:"\u{1D54B}",TripleDot:"\u20DB",tdot:"\u20DB",Tscr:"\u{1D4AF}",Tstrok:"\u0166",Uacute:"\xDA",Uarr:"\u219F",Uarrocir:"\u2949",Ubrcy:"\u040E",Ubreve:"\u016C",Ucirc:"\xDB",Ucy:"\u0423",Udblac:"\u0170",Ufr:"\u{1D518}",Ugrave:"\xD9",Umacr:"\u016A",UnderBar:"_",lowbar:"_",UnderBrace:"\u23DF",UnderBracket:"\u23B5",bbrk:"\u23B5",UnderParenthesis:"\u23DD",Union:"\u22C3",bigcup:"\u22C3",xcup:"\u22C3",UnionPlus:"\u228E",uplus:"\u228E",Uogon:"\u0172",Uopf:"\u{1D54C}",UpArrowBar:"\u2912",UpArrowDownArrow:"\u21C5",udarr:"\u21C5",UpDownArrow:"\u2195",updownarrow:"\u2195",varr:"\u2195",UpEquilibrium:"\u296E",udhar:"\u296E",UpTee:"\u22A5",bot:"\u22A5",bottom:"\u22A5",perp:"\u22A5",UpTeeArrow:"\u21A5",mapstoup:"\u21A5",UpperLeftArrow:"\u2196",nwarr:"\u2196",nwarrow:"\u2196",UpperRightArrow:"\u2197",nearr:"\u2197",nearrow:"\u2197",Upsi:"\u03D2",upsih:"\u03D2",Upsilon:"\u03A5",Uring:"\u016E",Uscr:"\u{1D4B0}",Utilde:"\u0168",Uuml:"\xDC",VDash:"\u22AB",Vbar:"\u2AEB",Vcy:"\u0412",Vdash:"\u22A9",Vdashl:"\u2AE6",Vee:"\u22C1",bigvee:"\u22C1",xvee:"\u22C1",Verbar:"\u2016",Vert:"\u2016",VerticalBar:"\u2223",mid:"\u2223",shortmid:"\u2223",smid:"\u2223",VerticalLine:"|",verbar:"|",vert:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",wr:"\u2240",wreath:"\u2240",VeryThinSpace:"\u200A",hairsp:"\u200A",Vfr:"\u{1D519}",Vopf:"\u{1D54D}",Vscr:"\u{1D4B1}",Vvdash:"\u22AA",Wcirc:"\u0174",Wedge:"\u22C0",bigwedge:"\u22C0",xwedge:"\u22C0",Wfr:"\u{1D51A}",Wopf:"\u{1D54E}",Wscr:"\u{1D4B2}",Xfr:"\u{1D51B}",Xi:"\u039E",Xopf:"\u{1D54F}",Xscr:"\u{1D4B3}",YAcy:"\u042F",YIcy:"\u0407",YUcy:"\u042E",Yacute:"\xDD",Ycirc:"\u0176",Ycy:"\u042B",Yfr:"\u{1D51C}",Yopf:"\u{1D550}",Yscr:"\u{1D4B4}",Yuml:"\u0178",ZHcy:"\u0416",Zacute:"\u0179",Zcaron:"\u017D",Zcy:"\u0417",Zdot:"\u017B",Zeta:"\u0396",Zfr:"\u2128",zeetrf:"\u2128",Zopf:"\u2124",integers:"\u2124",Zscr:"\u{1D4B5}",aacute:"\xE1",abreve:"\u0103",ac:"\u223E",mstpos:"\u223E",acE:"\u223E\u0333",acd:"\u223F",acirc:"\xE2",acy:"\u0430",aelig:"\xE6",afr:"\u{1D51E}",agrave:"\xE0",alefsym:"\u2135",aleph:"\u2135",alpha:"\u03B1",amacr:"\u0101",amalg:"\u2A3F",and:"\u2227",wedge:"\u2227",andand:"\u2A55",andd:"\u2A5C",andslope:"\u2A58",andv:"\u2A5A",ang:"\u2220",angle:"\u2220",ange:"\u29A4",angmsd:"\u2221",measuredangle:"\u2221",angmsdaa:"\u29A8",angmsdab:"\u29A9",angmsdac:"\u29AA",angmsdad:"\u29AB",angmsdae:"\u29AC",angmsdaf:"\u29AD",angmsdag:"\u29AE",angmsdah:"\u29AF",angrt:"\u221F",angrtvb:"\u22BE",angrtvbd:"\u299D",angsph:"\u2222",angzarr:"\u237C",aogon:"\u0105",aopf:"\u{1D552}",apE:"\u2A70",apacir:"\u2A6F",ape:"\u224A",approxeq:"\u224A",apid:"\u224B",apos:"'",aring:"\xE5",ascr:"\u{1D4B6}",ast:"*",midast:"*",atilde:"\xE3",auml:"\xE4",awint:"\u2A11",bNot:"\u2AED",backcong:"\u224C",bcong:"\u224C",backepsilon:"\u03F6",bepsi:"\u03F6",backprime:"\u2035",bprime:"\u2035",backsim:"\u223D",bsim:"\u223D",backsimeq:"\u22CD",bsime:"\u22CD",barvee:"\u22BD",barwed:"\u2305",barwedge:"\u2305",bbrktbrk:"\u23B6",bcy:"\u0431",bdquo:"\u201E",ldquor:"\u201E",bemptyv:"\u29B0",beta:"\u03B2",beth:"\u2136",between:"\u226C",twixt:"\u226C",bfr:"\u{1D51F}",bigcirc:"\u25EF",xcirc:"\u25EF",bigodot:"\u2A00",xodot:"\u2A00",bigoplus:"\u2A01",xoplus:"\u2A01",bigotimes:"\u2A02",xotime:"\u2A02",bigsqcup:"\u2A06",xsqcup:"\u2A06",bigstar:"\u2605",starf:"\u2605",bigtriangledown:"\u25BD",xdtri:"\u25BD",bigtriangleup:"\u25B3",xutri:"\u25B3",biguplus:"\u2A04",xuplus:"\u2A04",bkarow:"\u290D",rbarr:"\u290D",blacklozenge:"\u29EB",lozf:"\u29EB",blacktriangle:"\u25B4",utrif:"\u25B4",blacktriangledown:"\u25BE",dtrif:"\u25BE",blacktriangleleft:"\u25C2",ltrif:"\u25C2",blacktriangleright:"\u25B8",rtrif:"\u25B8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20E5",bnequiv:"\u2261\u20E5",bnot:"\u2310",bopf:"\u{1D553}",bowtie:"\u22C8",boxDL:"\u2557",boxDR:"\u2554",boxDl:"\u2556",boxDr:"\u2553",boxH:"\u2550",boxHD:"\u2566",boxHU:"\u2569",boxHd:"\u2564",boxHu:"\u2567",boxUL:"\u255D",boxUR:"\u255A",boxUl:"\u255C",boxUr:"\u2559",boxV:"\u2551",boxVH:"\u256C",boxVL:"\u2563",boxVR:"\u2560",boxVh:"\u256B",boxVl:"\u2562",boxVr:"\u255F",boxbox:"\u29C9",boxdL:"\u2555",boxdR:"\u2552",boxdl:"\u2510",boxdr:"\u250C",boxhD:"\u2565",boxhU:"\u2568",boxhd:"\u252C",boxhu:"\u2534",boxminus:"\u229F",minusb:"\u229F",boxplus:"\u229E",plusb:"\u229E",boxtimes:"\u22A0",timesb:"\u22A0",boxuL:"\u255B",boxuR:"\u2558",boxul:"\u2518",boxur:"\u2514",boxv:"\u2502",boxvH:"\u256A",boxvL:"\u2561",boxvR:"\u255E",boxvh:"\u253C",boxvl:"\u2524",boxvr:"\u251C",brvbar:"\xA6",bscr:"\u{1D4B7}",bsemi:"\u204F",bsol:"\\",bsolb:"\u29C5",bsolhsub:"\u27C8",bull:"\u2022",bullet:"\u2022",bumpE:"\u2AAE",cacute:"\u0107",cap:"\u2229",capand:"\u2A44",capbrcup:"\u2A49",capcap:"\u2A4B",capcup:"\u2A47",capdot:"\u2A40",caps:"\u2229\uFE00",caret:"\u2041",ccaps:"\u2A4D",ccaron:"\u010D",ccedil:"\xE7",ccirc:"\u0109",ccups:"\u2A4C",ccupssm:"\u2A50",cdot:"\u010B",cemptyv:"\u29B2",cent:"\xA2",cfr:"\u{1D520}",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",chi:"\u03C7",cir:"\u25CB",cirE:"\u29C3",circ:"\u02C6",circeq:"\u2257",cire:"\u2257",circlearrowleft:"\u21BA",olarr:"\u21BA",circlearrowright:"\u21BB",orarr:"\u21BB",circledS:"\u24C8",oS:"\u24C8",circledast:"\u229B",oast:"\u229B",circledcirc:"\u229A",ocir:"\u229A",circleddash:"\u229D",odash:"\u229D",cirfnint:"\u2A10",cirmid:"\u2AEF",cirscir:"\u29C2",clubs:"\u2663",clubsuit:"\u2663",colon:":",comma:",",commat:"@",comp:"\u2201",complement:"\u2201",congdot:"\u2A6D",copf:"\u{1D554}",copysr:"\u2117",crarr:"\u21B5",cross:"\u2717",cscr:"\u{1D4B8}",csub:"\u2ACF",csube:"\u2AD1",csup:"\u2AD0",csupe:"\u2AD2",ctdot:"\u22EF",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22DE",curlyeqprec:"\u22DE",cuesc:"\u22DF",curlyeqsucc:"\u22DF",cularr:"\u21B6",curvearrowleft:"\u21B6",cularrp:"\u293D",cup:"\u222A",cupbrcap:"\u2A48",cupcap:"\u2A46",cupcup:"\u2A4A",cupdot:"\u228D",cupor:"\u2A45",cups:"\u222A\uFE00",curarr:"\u21B7",curvearrowright:"\u21B7",curarrm:"\u293C",curlyvee:"\u22CE",cuvee:"\u22CE",curlywedge:"\u22CF",cuwed:"\u22CF",curren:"\xA4",cwint:"\u2231",cylcty:"\u232D",dHar:"\u2965",dagger:"\u2020",daleth:"\u2138",dash:"\u2010",hyphen:"\u2010",dbkarow:"\u290F",rBarr:"\u290F",dcaron:"\u010F",dcy:"\u0434",ddarr:"\u21CA",downdownarrows:"\u21CA",ddotseq:"\u2A77",eDDot:"\u2A77",deg:"\xB0",delta:"\u03B4",demptyv:"\u29B1",dfisht:"\u297F",dfr:"\u{1D521}",diamondsuit:"\u2666",diams:"\u2666",digamma:"\u03DD",gammad:"\u03DD",disin:"\u22F2",div:"\xF7",divide:"\xF7",divideontimes:"\u22C7",divonx:"\u22C7",djcy:"\u0452",dlcorn:"\u231E",llcorner:"\u231E",dlcrop:"\u230D",dollar:"$",dopf:"\u{1D555}",doteqdot:"\u2251",eDot:"\u2251",dotminus:"\u2238",minusd:"\u2238",dotplus:"\u2214",plusdo:"\u2214",dotsquare:"\u22A1",sdotb:"\u22A1",drcorn:"\u231F",lrcorner:"\u231F",drcrop:"\u230C",dscr:"\u{1D4B9}",dscy:"\u0455",dsol:"\u29F6",dstrok:"\u0111",dtdot:"\u22F1",dtri:"\u25BF",triangledown:"\u25BF",dwangle:"\u29A6",dzcy:"\u045F",dzigrarr:"\u27FF",eacute:"\xE9",easter:"\u2A6E",ecaron:"\u011B",ecir:"\u2256",eqcirc:"\u2256",ecirc:"\xEA",ecolon:"\u2255",eqcolon:"\u2255",ecy:"\u044D",edot:"\u0117",efDot:"\u2252",fallingdotseq:"\u2252",efr:"\u{1D522}",eg:"\u2A9A",egrave:"\xE8",egs:"\u2A96",eqslantgtr:"\u2A96",egsdot:"\u2A98",el:"\u2A99",elinters:"\u23E7",ell:"\u2113",els:"\u2A95",eqslantless:"\u2A95",elsdot:"\u2A97",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",emptyv:"\u2205",varnothing:"\u2205",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",eng:"\u014B",ensp:"\u2002",eogon:"\u0119",eopf:"\u{1D556}",epar:"\u22D5",eparsl:"\u29E3",eplus:"\u2A71",epsi:"\u03B5",epsilon:"\u03B5",epsiv:"\u03F5",straightepsilon:"\u03F5",varepsilon:"\u03F5",equals:"=",equest:"\u225F",questeq:"\u225F",equivDD:"\u2A78",eqvparsl:"\u29E5",erDot:"\u2253",risingdotseq:"\u2253",erarr:"\u2971",escr:"\u212F",eta:"\u03B7",eth:"\xF0",euml:"\xEB",euro:"\u20AC",excl:"!",fcy:"\u0444",female:"\u2640",ffilig:"\uFB03",fflig:"\uFB00",ffllig:"\uFB04",ffr:"\u{1D523}",filig:"\uFB01",fjlig:"fj",flat:"\u266D",fllig:"\uFB02",fltns:"\u25B1",fnof:"\u0192",fopf:"\u{1D557}",fork:"\u22D4",pitchfork:"\u22D4",forkv:"\u2AD9",fpartint:"\u2A0D",frac12:"\xBD",half:"\xBD",frac13:"\u2153",frac14:"\xBC",frac15:"\u2155",frac16:"\u2159",frac18:"\u215B",frac23:"\u2154",frac25:"\u2156",frac34:"\xBE",frac35:"\u2157",frac38:"\u215C",frac45:"\u2158",frac56:"\u215A",frac58:"\u215D",frac78:"\u215E",frasl:"\u2044",frown:"\u2322",sfrown:"\u2322",fscr:"\u{1D4BB}",gEl:"\u2A8C",gtreqqless:"\u2A8C",gacute:"\u01F5",gamma:"\u03B3",gap:"\u2A86",gtrapprox:"\u2A86",gbreve:"\u011F",gcirc:"\u011D",gcy:"\u0433",gdot:"\u0121",gescc:"\u2AA9",gesdot:"\u2A80",gesdoto:"\u2A82",gesdotol:"\u2A84",gesl:"\u22DB\uFE00",gesles:"\u2A94",gfr:"\u{1D524}",gimel:"\u2137",gjcy:"\u0453",glE:"\u2A92",gla:"\u2AA5",glj:"\u2AA4",gnE:"\u2269",gneqq:"\u2269",gnap:"\u2A8A",gnapprox:"\u2A8A",gne:"\u2A88",gneq:"\u2A88",gnsim:"\u22E7",gopf:"\u{1D558}",gscr:"\u210A",gsime:"\u2A8E",gsiml:"\u2A90",gtcc:"\u2AA7",gtcir:"\u2A7A",gtdot:"\u22D7",gtrdot:"\u22D7",gtlPar:"\u2995",gtquest:"\u2A7C",gtrarr:"\u2978",gvertneqq:"\u2269\uFE00",gvnE:"\u2269\uFE00",hardcy:"\u044A",harrcir:"\u2948",harrw:"\u21AD",leftrightsquigarrow:"\u21AD",hbar:"\u210F",hslash:"\u210F",planck:"\u210F",plankv:"\u210F",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",mldr:"\u2026",hercon:"\u22B9",hfr:"\u{1D525}",hksearow:"\u2925",searhk:"\u2925",hkswarow:"\u2926",swarhk:"\u2926",hoarr:"\u21FF",homtht:"\u223B",hookleftarrow:"\u21A9",larrhk:"\u21A9",hookrightarrow:"\u21AA",rarrhk:"\u21AA",hopf:"\u{1D559}",horbar:"\u2015",hscr:"\u{1D4BD}",hstrok:"\u0127",hybull:"\u2043",iacute:"\xED",icirc:"\xEE",icy:"\u0438",iecy:"\u0435",iexcl:"\xA1",ifr:"\u{1D526}",igrave:"\xEC",iiiint:"\u2A0C",qint:"\u2A0C",iiint:"\u222D",tint:"\u222D",iinfin:"\u29DC",iiota:"\u2129",ijlig:"\u0133",imacr:"\u012B",imath:"\u0131",inodot:"\u0131",imof:"\u22B7",imped:"\u01B5",incare:"\u2105",infin:"\u221E",infintie:"\u29DD",intcal:"\u22BA",intercal:"\u22BA",intlarhk:"\u2A17",intprod:"\u2A3C",iprod:"\u2A3C",iocy:"\u0451",iogon:"\u012F",iopf:"\u{1D55A}",iota:"\u03B9",iquest:"\xBF",iscr:"\u{1D4BE}",isinE:"\u22F9",isindot:"\u22F5",isins:"\u22F4",isinsv:"\u22F3",itilde:"\u0129",iukcy:"\u0456",iuml:"\xEF",jcirc:"\u0135",jcy:"\u0439",jfr:"\u{1D527}",jmath:"\u0237",jopf:"\u{1D55B}",jscr:"\u{1D4BF}",jsercy:"\u0458",jukcy:"\u0454",kappa:"\u03BA",kappav:"\u03F0",varkappa:"\u03F0",kcedil:"\u0137",kcy:"\u043A",kfr:"\u{1D528}",kgreen:"\u0138",khcy:"\u0445",kjcy:"\u045C",kopf:"\u{1D55C}",kscr:"\u{1D4C0}",lAtail:"\u291B",lBarr:"\u290E",lEg:"\u2A8B",lesseqqgtr:"\u2A8B",lHar:"\u2962",lacute:"\u013A",laemptyv:"\u29B4",lambda:"\u03BB",langd:"\u2991",lap:"\u2A85",lessapprox:"\u2A85",laquo:"\xAB",larrbfs:"\u291F",larrfs:"\u291D",larrlp:"\u21AB",looparrowleft:"\u21AB",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21A2",leftarrowtail:"\u21A2",lat:"\u2AAB",latail:"\u2919",late:"\u2AAD",lates:"\u2AAD\uFE00",lbarr:"\u290C",lbbrk:"\u2772",lbrace:"{",lcub:"{",lbrack:"[",lsqb:"[",lbrke:"\u298B",lbrksld:"\u298F",lbrkslu:"\u298D",lcaron:"\u013E",lcedil:"\u013C",lcy:"\u043B",ldca:"\u2936",ldrdhar:"\u2967",ldrushar:"\u294B",ldsh:"\u21B2",le:"\u2264",leq:"\u2264",leftleftarrows:"\u21C7",llarr:"\u21C7",leftthreetimes:"\u22CB",lthree:"\u22CB",lescc:"\u2AA8",lesdot:"\u2A7F",lesdoto:"\u2A81",lesdotor:"\u2A83",lesg:"\u22DA\uFE00",lesges:"\u2A93",lessdot:"\u22D6",ltdot:"\u22D6",lfisht:"\u297C",lfr:"\u{1D529}",lgE:"\u2A91",lharul:"\u296A",lhblk:"\u2584",ljcy:"\u0459",llhard:"\u296B",lltri:"\u25FA",lmidot:"\u0140",lmoust:"\u23B0",lmoustache:"\u23B0",lnE:"\u2268",lneqq:"\u2268",lnap:"\u2A89",lnapprox:"\u2A89",lne:"\u2A87",lneq:"\u2A87",lnsim:"\u22E6",loang:"\u27EC",loarr:"\u21FD",longmapsto:"\u27FC",xmap:"\u27FC",looparrowright:"\u21AC",rarrlp:"\u21AC",lopar:"\u2985",lopf:"\u{1D55D}",loplus:"\u2A2D",lotimes:"\u2A34",lowast:"\u2217",loz:"\u25CA",lozenge:"\u25CA",lpar:"(",lparlt:"\u2993",lrhard:"\u296D",lrm:"\u200E",lrtri:"\u22BF",lsaquo:"\u2039",lscr:"\u{1D4C1}",lsime:"\u2A8D",lsimg:"\u2A8F",lsquor:"\u201A",sbquo:"\u201A",lstrok:"\u0142",ltcc:"\u2AA6",ltcir:"\u2A79",ltimes:"\u22C9",ltlarr:"\u2976",ltquest:"\u2A7B",ltrPar:"\u2996",ltri:"\u25C3",triangleleft:"\u25C3",lurdshar:"\u294A",luruhar:"\u2966",lvertneqq:"\u2268\uFE00",lvnE:"\u2268\uFE00",mDDot:"\u223A",macr:"\xAF",strns:"\xAF",male:"\u2642",malt:"\u2720",maltese:"\u2720",marker:"\u25AE",mcomma:"\u2A29",mcy:"\u043C",mdash:"\u2014",mfr:"\u{1D52A}",mho:"\u2127",micro:"\xB5",midcir:"\u2AF0",minus:"\u2212",minusdu:"\u2A2A",mlcp:"\u2ADB",models:"\u22A7",mopf:"\u{1D55E}",mscr:"\u{1D4C2}",mu:"\u03BC",multimap:"\u22B8",mumap:"\u22B8",nGg:"\u22D9\u0338",nGt:"\u226B\u20D2",nLeftarrow:"\u21CD",nlArr:"\u21CD",nLeftrightarrow:"\u21CE",nhArr:"\u21CE",nLl:"\u22D8\u0338",nLt:"\u226A\u20D2",nRightarrow:"\u21CF",nrArr:"\u21CF",nVDash:"\u22AF",nVdash:"\u22AE",nacute:"\u0144",nang:"\u2220\u20D2",napE:"\u2A70\u0338",napid:"\u224B\u0338",napos:"\u0149",natur:"\u266E",natural:"\u266E",ncap:"\u2A43",ncaron:"\u0148",ncedil:"\u0146",ncongdot:"\u2A6D\u0338",ncup:"\u2A42",ncy:"\u043D",ndash:"\u2013",neArr:"\u21D7",nearhk:"\u2924",nedot:"\u2250\u0338",nesear:"\u2928",toea:"\u2928",nfr:"\u{1D52B}",nharr:"\u21AE",nleftrightarrow:"\u21AE",nhpar:"\u2AF2",nis:"\u22FC",nisd:"\u22FA",njcy:"\u045A",nlE:"\u2266\u0338",nleqq:"\u2266\u0338",nlarr:"\u219A",nleftarrow:"\u219A",nldr:"\u2025",nopf:"\u{1D55F}",not:"\xAC",notinE:"\u22F9\u0338",notindot:"\u22F5\u0338",notinvb:"\u22F7",notinvc:"\u22F6",notnivb:"\u22FE",notnivc:"\u22FD",nparsl:"\u2AFD\u20E5",npart:"\u2202\u0338",npolint:"\u2A14",nrarr:"\u219B",nrightarrow:"\u219B",nrarrc:"\u2933\u0338",nrarrw:"\u219D\u0338",nscr:"\u{1D4C3}",nsub:"\u2284",nsubE:"\u2AC5\u0338",nsubseteqq:"\u2AC5\u0338",nsup:"\u2285",nsupE:"\u2AC6\u0338",nsupseteqq:"\u2AC6\u0338",ntilde:"\xF1",nu:"\u03BD",num:"#",numero:"\u2116",numsp:"\u2007",nvDash:"\u22AD",nvHarr:"\u2904",nvap:"\u224D\u20D2",nvdash:"\u22AC",nvge:"\u2265\u20D2",nvgt:">\u20D2",nvinfin:"\u29DE",nvlArr:"\u2902",nvle:"\u2264\u20D2",nvlt:"<\u20D2",nvltrie:"\u22B4\u20D2",nvrArr:"\u2903",nvrtrie:"\u22B5\u20D2",nvsim:"\u223C\u20D2",nwArr:"\u21D6",nwarhk:"\u2923",nwnear:"\u2927",oacute:"\xF3",ocirc:"\xF4",ocy:"\u043E",odblac:"\u0151",odiv:"\u2A38",odsold:"\u29BC",oelig:"\u0153",ofcir:"\u29BF",ofr:"\u{1D52C}",ogon:"\u02DB",ograve:"\xF2",ogt:"\u29C1",ohbar:"\u29B5",olcir:"\u29BE",olcross:"\u29BB",olt:"\u29C0",omacr:"\u014D",omega:"\u03C9",omicron:"\u03BF",omid:"\u29B6",oopf:"\u{1D560}",opar:"\u29B7",operp:"\u29B9",or:"\u2228",vee:"\u2228",ord:"\u2A5D",order:"\u2134",orderof:"\u2134",oscr:"\u2134",ordf:"\xAA",ordm:"\xBA",origof:"\u22B6",oror:"\u2A56",orslope:"\u2A57",orv:"\u2A5B",oslash:"\xF8",osol:"\u2298",otilde:"\xF5",otimesas:"\u2A36",ouml:"\xF6",ovbar:"\u233D",para:"\xB6",parsim:"\u2AF3",parsl:"\u2AFD",pcy:"\u043F",percnt:"%",period:".",permil:"\u2030",pertenk:"\u2031",pfr:"\u{1D52D}",phi:"\u03C6",phiv:"\u03D5",straightphi:"\u03D5",varphi:"\u03D5",phone:"\u260E",pi:"\u03C0",piv:"\u03D6",varpi:"\u03D6",planckh:"\u210E",plus:"+",plusacir:"\u2A23",pluscir:"\u2A22",plusdu:"\u2A25",pluse:"\u2A72",plussim:"\u2A26",plustwo:"\u2A27",pointint:"\u2A15",popf:"\u{1D561}",pound:"\xA3",prE:"\u2AB3",prap:"\u2AB7",precapprox:"\u2AB7",precnapprox:"\u2AB9",prnap:"\u2AB9",precneqq:"\u2AB5",prnE:"\u2AB5",precnsim:"\u22E8",prnsim:"\u22E8",prime:"\u2032",profalar:"\u232E",profline:"\u2312",profsurf:"\u2313",prurel:"\u22B0",pscr:"\u{1D4C5}",psi:"\u03C8",puncsp:"\u2008",qfr:"\u{1D52E}",qopf:"\u{1D562}",qprime:"\u2057",qscr:"\u{1D4C6}",quatint:"\u2A16",quest:"?",rAtail:"\u291C",rHar:"\u2964",race:"\u223D\u0331",racute:"\u0155",raemptyv:"\u29B3",rangd:"\u2992",range:"\u29A5",raquo:"\xBB",rarrap:"\u2975",rarrbfs:"\u2920",rarrc:"\u2933",rarrfs:"\u291E",rarrpl:"\u2945",rarrsim:"\u2974",rarrtl:"\u21A3",rightarrowtail:"\u21A3",rarrw:"\u219D",rightsquigarrow:"\u219D",ratail:"\u291A",ratio:"\u2236",rbbrk:"\u2773",rbrace:"}",rcub:"}",rbrack:"]",rsqb:"]",rbrke:"\u298C",rbrksld:"\u298E",rbrkslu:"\u2990",rcaron:"\u0159",rcedil:"\u0157",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdsh:"\u21B3",rect:"\u25AD",rfisht:"\u297D",rfr:"\u{1D52F}",rharul:"\u296C",rho:"\u03C1",rhov:"\u03F1",varrho:"\u03F1",rightrightarrows:"\u21C9",rrarr:"\u21C9",rightthreetimes:"\u22CC",rthree:"\u22CC",ring:"\u02DA",rlm:"\u200F",rmoust:"\u23B1",rmoustache:"\u23B1",rnmid:"\u2AEE",roang:"\u27ED",roarr:"\u21FE",ropar:"\u2986",ropf:"\u{1D563}",roplus:"\u2A2E",rotimes:"\u2A35",rpar:")",rpargt:"\u2994",rppolint:"\u2A12",rsaquo:"\u203A",rscr:"\u{1D4C7}",rtimes:"\u22CA",rtri:"\u25B9",triangleright:"\u25B9",rtriltri:"\u29CE",ruluhar:"\u2968",rx:"\u211E",sacute:"\u015B",scE:"\u2AB4",scap:"\u2AB8",succapprox:"\u2AB8",scaron:"\u0161",scedil:"\u015F",scirc:"\u015D",scnE:"\u2AB6",succneqq:"\u2AB6",scnap:"\u2ABA",succnapprox:"\u2ABA",scnsim:"\u22E9",succnsim:"\u22E9",scpolint:"\u2A13",scy:"\u0441",sdot:"\u22C5",sdote:"\u2A66",seArr:"\u21D8",sect:"\xA7",semi:";",seswar:"\u2929",tosa:"\u2929",sext:"\u2736",sfr:"\u{1D530}",sharp:"\u266F",shchcy:"\u0449",shcy:"\u0448",shy:"\xAD",sigma:"\u03C3",sigmaf:"\u03C2",sigmav:"\u03C2",varsigma:"\u03C2",simdot:"\u2A6A",simg:"\u2A9E",simgE:"\u2AA0",siml:"\u2A9D",simlE:"\u2A9F",simne:"\u2246",simplus:"\u2A24",simrarr:"\u2972",smashp:"\u2A33",smeparsl:"\u29E4",smile:"\u2323",ssmile:"\u2323",smt:"\u2AAA",smte:"\u2AAC",smtes:"\u2AAC\uFE00",softcy:"\u044C",sol:"/",solb:"\u29C4",solbar:"\u233F",sopf:"\u{1D564}",spades:"\u2660",spadesuit:"\u2660",sqcaps:"\u2293\uFE00",sqcups:"\u2294\uFE00",sscr:"\u{1D4C8}",star:"\u2606",sub:"\u2282",subset:"\u2282",subE:"\u2AC5",subseteqq:"\u2AC5",subdot:"\u2ABD",subedot:"\u2AC3",submult:"\u2AC1",subnE:"\u2ACB",subsetneqq:"\u2ACB",subne:"\u228A",subsetneq:"\u228A",subplus:"\u2ABF",subrarr:"\u2979",subsim:"\u2AC7",subsub:"\u2AD5",subsup:"\u2AD3",sung:"\u266A",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",supE:"\u2AC6",supseteqq:"\u2AC6",supdot:"\u2ABE",supdsub:"\u2AD8",supedot:"\u2AC4",suphsol:"\u27C9",suphsub:"\u2AD7",suplarr:"\u297B",supmult:"\u2AC2",supnE:"\u2ACC",supsetneqq:"\u2ACC",supne:"\u228B",supsetneq:"\u228B",supplus:"\u2AC0",supsim:"\u2AC8",supsub:"\u2AD4",supsup:"\u2AD6",swArr:"\u21D9",swnwar:"\u292A",szlig:"\xDF",target:"\u2316",tau:"\u03C4",tcaron:"\u0165",tcedil:"\u0163",tcy:"\u0442",telrec:"\u2315",tfr:"\u{1D531}",theta:"\u03B8",thetasym:"\u03D1",thetav:"\u03D1",vartheta:"\u03D1",thorn:"\xFE",times:"\xD7",timesbar:"\u2A31",timesd:"\u2A30",topbot:"\u2336",topcir:"\u2AF1",topf:"\u{1D565}",topfork:"\u2ADA",tprime:"\u2034",triangle:"\u25B5",utri:"\u25B5",triangleq:"\u225C",trie:"\u225C",tridot:"\u25EC",triminus:"\u2A3A",triplus:"\u2A39",trisb:"\u29CD",tritime:"\u2A3B",trpezium:"\u23E2",tscr:"\u{1D4C9}",tscy:"\u0446",tshcy:"\u045B",tstrok:"\u0167",uHar:"\u2963",uacute:"\xFA",ubrcy:"\u045E",ubreve:"\u016D",ucirc:"\xFB",ucy:"\u0443",udblac:"\u0171",ufisht:"\u297E",ufr:"\u{1D532}",ugrave:"\xF9",uhblk:"\u2580",ulcorn:"\u231C",ulcorner:"\u231C",ulcrop:"\u230F",ultri:"\u25F8",umacr:"\u016B",uogon:"\u0173",uopf:"\u{1D566}",upsi:"\u03C5",upsilon:"\u03C5",upuparrows:"\u21C8",uuarr:"\u21C8",urcorn:"\u231D",urcorner:"\u231D",urcrop:"\u230E",uring:"\u016F",urtri:"\u25F9",uscr:"\u{1D4CA}",utdot:"\u22F0",utilde:"\u0169",uuml:"\xFC",uwangle:"\u29A7",vBar:"\u2AE8",vBarv:"\u2AE9",vangrt:"\u299C",varsubsetneq:"\u228A\uFE00",vsubne:"\u228A\uFE00",varsubsetneqq:"\u2ACB\uFE00",vsubnE:"\u2ACB\uFE00",varsupsetneq:"\u228B\uFE00",vsupne:"\u228B\uFE00",varsupsetneqq:"\u2ACC\uFE00",vsupnE:"\u2ACC\uFE00",vcy:"\u0432",veebar:"\u22BB",veeeq:"\u225A",vellip:"\u22EE",vfr:"\u{1D533}",vopf:"\u{1D567}",vscr:"\u{1D4CB}",vzigzag:"\u299A",wcirc:"\u0175",wedbar:"\u2A5F",wedgeq:"\u2259",weierp:"\u2118",wp:"\u2118",wfr:"\u{1D534}",wopf:"\u{1D568}",wscr:"\u{1D4CC}",xfr:"\u{1D535}",xi:"\u03BE",xnis:"\u22FB",xopf:"\u{1D569}",xscr:"\u{1D4CD}",yacute:"\xFD",yacy:"\u044F",ycirc:"\u0177",ycy:"\u044B",yen:"\xA5",yfr:"\u{1D536}",yicy:"\u0457",yopf:"\u{1D56A}",yscr:"\u{1D4CE}",yucy:"\u044E",yuml:"\xFF",zacute:"\u017A",zcaron:"\u017E",zcy:"\u0437",zdot:"\u017C",zeta:"\u03B6",zfr:"\u{1D537}",zhcy:"\u0436",zigrarr:"\u21DD",zopf:"\u{1D56B}",zscr:"\u{1D4CF}",zwj:"\u200D",zwnj:"\u200C"},co="\uE500";Te.ngsp=co;var l=(function(e){return e[e.TAG_OPEN_START=0]="TAG_OPEN_START",e[e.TAG_OPEN_END=1]="TAG_OPEN_END",e[e.TAG_OPEN_END_VOID=2]="TAG_OPEN_END_VOID",e[e.TAG_CLOSE=3]="TAG_CLOSE",e[e.INCOMPLETE_TAG_OPEN=4]="INCOMPLETE_TAG_OPEN",e[e.TEXT=5]="TEXT",e[e.ESCAPABLE_RAW_TEXT=6]="ESCAPABLE_RAW_TEXT",e[e.RAW_TEXT=7]="RAW_TEXT",e[e.INTERPOLATION=8]="INTERPOLATION",e[e.ENCODED_ENTITY=9]="ENCODED_ENTITY",e[e.COMMENT_START=10]="COMMENT_START",e[e.COMMENT_END=11]="COMMENT_END",e[e.CDATA_START=12]="CDATA_START",e[e.CDATA_END=13]="CDATA_END",e[e.ATTR_NAME=14]="ATTR_NAME",e[e.ATTR_QUOTE=15]="ATTR_QUOTE",e[e.ATTR_VALUE_TEXT=16]="ATTR_VALUE_TEXT",e[e.ATTR_VALUE_INTERPOLATION=17]="ATTR_VALUE_INTERPOLATION",e[e.DOC_TYPE_START=18]="DOC_TYPE_START",e[e.DOC_TYPE_END=19]="DOC_TYPE_END",e[e.EXPANSION_FORM_START=20]="EXPANSION_FORM_START",e[e.EXPANSION_CASE_VALUE=21]="EXPANSION_CASE_VALUE",e[e.EXPANSION_CASE_EXP_START=22]="EXPANSION_CASE_EXP_START",e[e.EXPANSION_CASE_EXP_END=23]="EXPANSION_CASE_EXP_END",e[e.EXPANSION_FORM_END=24]="EXPANSION_FORM_END",e[e.BLOCK_OPEN_START=25]="BLOCK_OPEN_START",e[e.BLOCK_OPEN_END=26]="BLOCK_OPEN_END",e[e.BLOCK_CLOSE=27]="BLOCK_CLOSE",e[e.BLOCK_PARAMETER=28]="BLOCK_PARAMETER",e[e.INCOMPLETE_BLOCK_OPEN=29]="INCOMPLETE_BLOCK_OPEN",e[e.LET_START=30]="LET_START",e[e.LET_VALUE=31]="LET_VALUE",e[e.LET_END=32]="LET_END",e[e.INCOMPLETE_LET=33]="INCOMPLETE_LET",e[e.COMPONENT_OPEN_START=34]="COMPONENT_OPEN_START",e[e.COMPONENT_OPEN_END=35]="COMPONENT_OPEN_END",e[e.COMPONENT_OPEN_END_VOID=36]="COMPONENT_OPEN_END_VOID",e[e.COMPONENT_CLOSE=37]="COMPONENT_CLOSE",e[e.INCOMPLETE_COMPONENT_OPEN=38]="INCOMPLETE_COMPONENT_OPEN",e[e.DIRECTIVE_NAME=39]="DIRECTIVE_NAME",e[e.DIRECTIVE_OPEN=40]="DIRECTIVE_OPEN",e[e.DIRECTIVE_CLOSE=41]="DIRECTIVE_CLOSE",e[e.EOF=42]="EOF",e})({});var Lo=class{constructor(e,t,r){this.tokens=e,this.errors=t,this.nonNormalizedIcuExpressions=r}};function ns(e,t,r,n={}){let i=new Io(new mt(e,t),r,n);return i.tokenize(),new Lo(Vo(i.tokens),i.errors,i.nonNormalizedIcuExpressions)}var Po=/\r\n?/g;function be(e){return`Unexpected character "${e===0?"EOF":String.fromCharCode(e)}"`}function Qi(e){return`Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`}function Oo(e,t){return`Unable to parse entity "${t}" - ${e} character reference entities must end with ";"`}var Mr=(function(e){return e.HEX="hexadecimal",e.DEC="decimal",e})(Mr||{}),Do=["@if","@else","@for","@switch","@case","@default","@empty","@defer","@placeholder","@loading","@error"],ft={start:"{{",end:"}}"},Io=class{constructor(e,t,r){this._getTagContentType=t,this._currentTokenStart=null,this._currentTokenType=null,this._expansionCaseStack=[],this._openDirectiveCount=0,this._inInterpolation=!1,this._fullNameStack=[],this.tokens=[],this.errors=[],this.nonNormalizedIcuExpressions=[],this._tokenizeIcu=r.tokenizeExpansionForms||!1,this._leadingTriviaCodePoints=r.leadingTriviaChars&&r.leadingTriviaChars.map(i=>i.codePointAt(0)||0),this._canSelfClose=r.canSelfClose||!1,this._allowHtmComponentClosingTags=r.allowHtmComponentClosingTags||!1;let n=r.range||{endPos:e.content.length,startPos:0,startLine:0,startCol:0};this._cursor=r.escapedString?new Uo(e,n):new is(e,n),this._preserveLineEndings=r.preserveLineEndings||!1,this._i18nNormalizeLineEndingsInICUs=r.i18nNormalizeLineEndingsInICUs||!1,this._tokenizeBlocks=r.tokenizeBlocks??!0,this._tokenizeLet=r.tokenizeLet??!0,this._selectorlessEnabled=r.selectorlessEnabled??!1;try{this._cursor.init()}catch(i){this.handleError(i)}}_processCarriageReturns(e){return this._preserveLineEndings?e:e.replace(Po,`
`)}tokenize(){for(;this._cursor.peek()!==0;){let e=this._cursor.clone();try{if(this._attemptCharCode(60))if(this._attemptCharCode(33))this._attemptStr("[CDATA[")?this._consumeCdata(e):this._attemptStr("--")?this._consumeComment(e):this._attemptStrCaseInsensitive("doctype")?this._consumeDocType(e):this._consumeBogusComment(e);else if(this._attemptCharCode(47))this._consumeTagClose(e);else{let t=this._cursor.clone();this._attemptCharCode(63)?(this._cursor=t,this._consumeBogusComment(e)):this._consumeTagOpen(e)}else this._tokenizeLet&&this._cursor.peek()===64&&!this._inInterpolation&&this._isLetStart()?this._consumeLetDeclaration(e):this._tokenizeBlocks&&this._isBlockStart()?this._consumeBlockStart(e):this._tokenizeBlocks&&!this._inInterpolation&&!this._isInExpansionCase()&&!this._isInExpansionForm()&&this._attemptCharCode(125)?this._consumeBlockEnd(e):this._tokenizeIcu&&this._tokenizeExpansionForm()||this._consumeWithInterpolation(l.TEXT,l.INTERPOLATION,()=>this._isTextEnd(),()=>this._isTagStart())}catch(t){this.handleError(t)}}this._beginToken(l.EOF),this._endToken([])}_getBlockName(){let e=!1,t=this._cursor.clone();return this._attemptCharCodeUntilFn(r=>ct(r)?!e:Ho(r)?(e=!0,!1):!0),this._cursor.getChars(t).trim()}_consumeBlockStart(e){this._requireCharCode(64),this._beginToken(l.BLOCK_OPEN_START,e);let t=this._endToken([this._getBlockName()]);if(this._cursor.peek()===40)if(this._cursor.advance(),this._consumeBlockParameters(),this._attemptCharCodeUntilFn(T),this._attemptCharCode(41))this._attemptCharCodeUntilFn(T);else{t.type=l.INCOMPLETE_BLOCK_OPEN;return}this._attemptCharCode(123)?(this._beginToken(l.BLOCK_OPEN_END),this._endToken([])):this._isBlockStart()&&(t.parts[0]==="case"||t.parts[0]==="default")?(this._beginToken(l.BLOCK_OPEN_END),this._endToken([]),this._beginToken(l.BLOCK_CLOSE),this._endToken([])):t.type=l.INCOMPLETE_BLOCK_OPEN}_consumeBlockEnd(e){this._beginToken(l.BLOCK_CLOSE,e),this._endToken([])}_consumeBlockParameters(){for(this._attemptCharCodeUntilFn(Zi);this._cursor.peek()!==41&&this._cursor.peek()!==0;){this._beginToken(l.BLOCK_PARAMETER);let e=this._cursor.clone(),t=null,r=0;for(;this._cursor.peek()!==59&&this._cursor.peek()!==0||t!==null;){let n=this._cursor.peek();if(n===92)this._cursor.advance();else if(n===t)t=null;else if(t===null&&Ut(n))t=n;else if(n===40&&t===null)r++;else if(n===41&&t===null){if(r===0)break;r>0&&r--}this._cursor.advance()}this._endToken([this._cursor.getChars(e)]),this._attemptCharCodeUntilFn(Zi)}}_consumeLetDeclaration(e){if(this._requireStr("@let"),this._beginToken(l.LET_START,e),ct(this._cursor.peek()))this._attemptCharCodeUntilFn(T);else{let r=this._endToken([this._cursor.getChars(e)]);r.type=l.INCOMPLETE_LET;return}let t=this._endToken([this._getLetDeclarationName()]);if(this._attemptCharCodeUntilFn(T),!this._attemptCharCode(61)){t.type=l.INCOMPLETE_LET;return}this._attemptCharCodeUntilFn(r=>T(r)&&!pt(r)),this._consumeLetDeclarationValue(),this._cursor.peek()===59?(this._beginToken(l.LET_END),this._endToken([]),this._cursor.advance()):(t.type=l.INCOMPLETE_LET,t.sourceSpan=this._cursor.getSpan(e))}_getLetDeclarationName(){let e=this._cursor.clone(),t=!1;return this._attemptCharCodeUntilFn(r=>Fe(r)||r===36||r===95||t&&ut(r)?(t=!0,!1):!0),this._cursor.getChars(e).trim()}_consumeLetDeclarationValue(){let e=this._cursor.clone();for(this._beginToken(l.LET_VALUE,e);this._cursor.peek()!==0;){let t=this._cursor.peek();if(t===59)break;Ut(t)&&(this._cursor.advance(),this._attemptCharCodeUntilFn(r=>r===92?(this._cursor.advance(),!1):r===t)),this._cursor.advance()}this._endToken([this._cursor.getChars(e)])}_tokenizeExpansionForm(){if(this.isExpansionFormStart())return this._consumeExpansionFormStart(),!0;if(Fo(this._cursor.peek())&&this._isInExpansionForm())return this._consumeExpansionCaseStart(),!0;if(this._cursor.peek()===125){if(this._isInExpansionCase())return this._consumeExpansionCaseEnd(),!0;if(this._isInExpansionForm())return this._consumeExpansionFormEnd(),!0}return!1}_beginToken(e,t=this._cursor.clone()){this._currentTokenStart=t,this._currentTokenType=e}_endToken(e,t){if(this._currentTokenStart===null)throw new ne(this._cursor.getSpan(t),"Programming error - attempted to end a token when there was no start to the token");if(this._currentTokenType===null)throw new ne(this._cursor.getSpan(this._currentTokenStart),"Programming error - attempted to end a token which has no token type");let r={type:this._currentTokenType,parts:e,sourceSpan:(t??this._cursor).getSpan(this._currentTokenStart,this._leadingTriviaCodePoints)};return this.tokens.push(r),this._currentTokenStart=null,this._currentTokenType=null,r}_createError(e,t){this._isInExpansionForm()&&(e+=` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);let r=new ne(t,e);return this._currentTokenStart=null,this._currentTokenType=null,r}handleError(e){if(e instanceof Vr&&(e=this._createError(e.msg,this._cursor.getSpan(e.cursor))),e instanceof ne)this.errors.push(e);else throw e}_attemptCharCode(e){return this._cursor.peek()===e?(this._cursor.advance(),!0):!1}_attemptCharCodeCaseInsensitive(e){return qo(this._cursor.peek(),e)?(this._cursor.advance(),!0):!1}_requireCharCode(e){let t=this._cursor.clone();if(!this._attemptCharCode(e))throw this._createError(be(this._cursor.peek()),this._cursor.getSpan(t))}_attemptStr(e){let t=e.length;if(this._cursor.charsLeft()<t)return!1;let r=this._cursor.clone();for(let n=0;n<t;n++)if(!this._attemptCharCode(e.charCodeAt(n)))return this._cursor=r,!1;return!0}_attemptStrCaseInsensitive(e){for(let t=0;t<e.length;t++)if(!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t)))return!1;return!0}_requireStr(e){let t=this._cursor.clone();if(!this._attemptStr(e))throw this._createError(be(this._cursor.peek()),this._cursor.getSpan(t))}_requireStrCaseInsensitive(e){let t=this._cursor.clone();if(!this._attemptStrCaseInsensitive(e))throw this._createError(be(this._cursor.peek()),this._cursor.getSpan(t))}_attemptCharCodeUntilFn(e){for(;!e(this._cursor.peek());)this._cursor.advance()}_requireCharCodeUntilFn(e,t){let r=this._cursor.clone();if(this._attemptCharCodeUntilFn(e),this._cursor.diff(r)<t)throw this._createError(be(this._cursor.peek()),this._cursor.getSpan(r))}_attemptUntilChar(e){for(;this._cursor.peek()!==e;)this._cursor.advance()}_readChar(){let e=String.fromCodePoint(this._cursor.peek());return this._cursor.advance(),e}_peekStr(e){let t=e.length;if(this._cursor.charsLeft()<t)return!1;let r=this._cursor.clone();for(let n=0;n<t;n++){if(r.peek()!==e.charCodeAt(n))return!1;r.advance()}return!0}_isBlockStart(){return this._cursor.peek()===64&&Do.some(e=>this._peekStr(e))}_isLetStart(){return this._cursor.peek()===64&&this._peekStr("@let")}_consumeEntity(e){this._beginToken(l.ENCODED_ENTITY);let t=this._cursor.clone();if(this._cursor.advance(),this._attemptCharCode(35)){let r=this._attemptCharCode(120)||this._attemptCharCode(88),n=this._cursor.clone();if(this._attemptCharCodeUntilFn(Mo),this._cursor.peek()!=59){this._cursor.advance();let s=r?Mr.HEX:Mr.DEC;throw this._createError(Oo(s,this._cursor.getChars(t)),this._cursor.getSpan())}let i=this._cursor.getChars(n);this._cursor.advance();try{let s=parseInt(i,r?16:10);this._endToken([String.fromCodePoint(s),this._cursor.getChars(t)])}catch{throw this._createError(Qi(this._cursor.getChars(t)),this._cursor.getSpan())}}else{let r=this._cursor.clone();if(this._attemptCharCodeUntilFn(Bo),this._cursor.peek()!=59)this._beginToken(e,t),this._cursor=r,this._endToken(["&"]);else{let n=this._cursor.getChars(r);this._cursor.advance();let i=Te.hasOwnProperty(n)&&Te[n];if(!i)throw this._createError(Qi(n),this._cursor.getSpan(t));this._endToken([i,`&${n};`])}}}_consumeRawText(e,t){this._beginToken(e?l.ESCAPABLE_RAW_TEXT:l.RAW_TEXT);let r=[];for(;;){let n=this._cursor.clone(),i=t();if(this._cursor=n,i)break;e&&this._cursor.peek()===38?(this._endToken([this._processCarriageReturns(r.join(""))]),r.length=0,this._consumeEntity(l.ESCAPABLE_RAW_TEXT),this._beginToken(l.ESCAPABLE_RAW_TEXT)):r.push(this._readChar())}this._endToken([this._processCarriageReturns(r.join(""))])}_consumeComment(e){this._beginToken(l.COMMENT_START,e),this._endToken([]),this._consumeRawText(!1,()=>this._attemptStr("-->")),this._beginToken(l.COMMENT_END),this._requireStr("-->"),this._endToken([])}_consumeBogusComment(e){this._beginToken(l.COMMENT_START,e),this._endToken([]),this._consumeRawText(!1,()=>this._cursor.peek()===62),this._beginToken(l.COMMENT_END),this._cursor.advance(),this._endToken([])}_consumeCdata(e){this._beginToken(l.CDATA_START,e),this._endToken([]),this._consumeRawText(!1,()=>this._attemptStr("]]>")),this._beginToken(l.CDATA_END),this._requireStr("]]>"),this._endToken([])}_consumeDocType(e){this._beginToken(l.DOC_TYPE_START,e),this._endToken([]),this._consumeRawText(!1,()=>this._cursor.peek()===62),this._beginToken(l.DOC_TYPE_END),this._cursor.advance(),this._endToken([])}_consumePrefixAndName(e){let t=this._cursor.clone(),r="";for(;this._cursor.peek()!==58&&!Ro(this._cursor.peek());)this._cursor.advance();let n;this._cursor.peek()===58?(r=this._cursor.getChars(t),this._cursor.advance(),n=this._cursor.clone()):n=t,this._requireCharCodeUntilFn(e,r===""?0:1);let i=this._cursor.getChars(n);return[r,i]}_consumeTagOpen(e){let t,r,n,i,s=[];try{if(this._selectorlessEnabled&&zt(this._cursor.peek()))i=this._consumeComponentOpenStart(e),[n,r,t]=i.parts,r&&(n+=`:${r}`),t&&(n+=`:${t}`),this._attemptCharCodeUntilFn(T);else{if(!Fe(this._cursor.peek()))throw this._createError(be(this._cursor.peek()),this._cursor.getSpan(e));i=this._consumeTagOpenStart(e),r=i.parts[0],t=n=i.parts[1],this._attemptCharCodeUntilFn(T)}for(;!ts(this._cursor.peek());)if(this._selectorlessEnabled&&this._cursor.peek()===64){let o=this._cursor.clone(),c=o.clone();c.advance(),zt(c.peek())&&this._consumeDirective(o,c)}else{let o=this._consumeAttribute();s.push(o)}i.type===l.COMPONENT_OPEN_START?this._consumeComponentOpenEnd():this._consumeTagOpenEnd()}catch(o){if(o instanceof ne){i?i.type=i.type===l.COMPONENT_OPEN_START?l.INCOMPLETE_COMPONENT_OPEN:l.INCOMPLETE_TAG_OPEN:(this._beginToken(l.TEXT,e),this._endToken(["<"]));return}throw o}if(this._canSelfClose&&this.tokens[this.tokens.length-1].type===l.TAG_OPEN_END_VOID)return;let a=this._getTagContentType(t,r,this._fullNameStack.length>0,s);this._handleFullNameStackForTagOpen(r,t),a===R.RAW_TEXT?this._consumeRawTextWithTagClose(r,i,n,!1):a===R.ESCAPABLE_RAW_TEXT&&this._consumeRawTextWithTagClose(r,i,n,!0)}_consumeRawTextWithTagClose(e,t,r,n){this._consumeRawText(n,()=>!this._attemptCharCode(60)||!this._attemptCharCode(47)||(this._attemptCharCodeUntilFn(T),!this._attemptStrCaseInsensitive(e&&t.type!==l.COMPONENT_OPEN_START?`${e}:${r}`:r))?!1:(this._attemptCharCodeUntilFn(T),this._attemptCharCode(62))),this._beginToken(t.type===l.COMPONENT_OPEN_START?l.COMPONENT_CLOSE:l.TAG_CLOSE),this._requireCharCodeUntilFn(i=>i===62,3),this._cursor.advance(),this._endToken(t.parts),this._handleFullNameStackForTagClose(e,r)}_consumeTagOpenStart(e){this._beginToken(l.TAG_OPEN_START,e);let t=this._consumePrefixAndName(we);return this._endToken(t)}_consumeComponentOpenStart(e){this._beginToken(l.COMPONENT_OPEN_START,e);let t=this._consumeComponentName();return this._endToken(t)}_consumeComponentName(){let e=this._cursor.clone();for(;es(this._cursor.peek());)this._cursor.advance();let t=this._cursor.getChars(e),r="",n="";return this._cursor.peek()===58&&(this._cursor.advance(),[r,n]=this._consumePrefixAndName(we)),[t,r,n]}_consumeAttribute(){let[e,t]=this._consumeAttributeName(),r;return this._attemptCharCodeUntilFn(T),this._attemptCharCode(61)&&(this._attemptCharCodeUntilFn(T),r=this._consumeAttributeValue()),this._attemptCharCodeUntilFn(T),{prefix:e,name:t,value:r}}_consumeAttributeName(){let e=this._cursor.peek();if(e===39||e===34)throw this._createError(be(e),this._cursor.getSpan());this._beginToken(l.ATTR_NAME);let t;if(this._openDirectiveCount>0){let n=0;t=i=>{if(this._openDirectiveCount>0){if(i===40)n++;else if(i===41){if(n===0)return!0;n--}}return we(i)}}else if(e===91){let n=0;t=i=>(i===91?n++:i===93&&n--,n<=0?we(i):pt(i))}else t=we;let r=this._consumePrefixAndName(t);return this._endToken(r),r}_consumeAttributeValue(){let e;if(this._cursor.peek()===39||this._cursor.peek()===34){let t=this._cursor.peek();this._consumeQuote(t);let r=()=>this._cursor.peek()===t;e=this._consumeWithInterpolation(l.ATTR_VALUE_TEXT,l.ATTR_VALUE_INTERPOLATION,r,r),this._consumeQuote(t)}else{let t=()=>we(this._cursor.peek());e=this._consumeWithInterpolation(l.ATTR_VALUE_TEXT,l.ATTR_VALUE_INTERPOLATION,t,t)}return e}_consumeQuote(e){this._beginToken(l.ATTR_QUOTE),this._requireCharCode(e),this._endToken([String.fromCodePoint(e)])}_consumeTagOpenEnd(){let e=this._attemptCharCode(47)?l.TAG_OPEN_END_VOID:l.TAG_OPEN_END;this._beginToken(e),this._requireCharCode(62),this._endToken([])}_consumeComponentOpenEnd(){let e=this._attemptCharCode(47)?l.COMPONENT_OPEN_END_VOID:l.COMPONENT_OPEN_END;this._beginToken(e),this._requireCharCode(62),this._endToken([])}_consumeTagClose(e){if(this._selectorlessEnabled){let t=e.clone();for(;t.peek()!==62&&!zt(t.peek());)t.advance();if(zt(t.peek())){this._beginToken(l.COMPONENT_CLOSE,e);let r=this._consumeComponentName();this._attemptCharCodeUntilFn(T),this._requireCharCode(62),this._endToken(r);return}}if(this._beginToken(l.TAG_CLOSE,e),this._attemptCharCodeUntilFn(T),this._allowHtmComponentClosingTags&&this._attemptCharCode(47))this._attemptCharCodeUntilFn(T),this._requireCharCode(62),this._endToken([]);else{let[t,r]=this._consumePrefixAndName(we);this._attemptCharCodeUntilFn(T),this._requireCharCode(62),this._endToken([t,r]),this._handleFullNameStackForTagClose(t,r)}}_consumeExpansionFormStart(){this._beginToken(l.EXPANSION_FORM_START),this._requireCharCode(123),this._endToken([]),this._expansionCaseStack.push(l.EXPANSION_FORM_START),this._beginToken(l.RAW_TEXT);let e=this._readUntil(44),t=this._processCarriageReturns(e);if(this._i18nNormalizeLineEndingsInICUs)this._endToken([t]);else{let n=this._endToken([e]);t!==e&&this.nonNormalizedIcuExpressions.push(n)}this._requireCharCode(44),this._attemptCharCodeUntilFn(T),this._beginToken(l.RAW_TEXT);let r=this._readUntil(44);this._endToken([r]),this._requireCharCode(44),this._attemptCharCodeUntilFn(T)}_consumeExpansionCaseStart(){this._beginToken(l.EXPANSION_CASE_VALUE);let e=this._readUntil(123).trim();this._endToken([e]),this._attemptCharCodeUntilFn(T),this._beginToken(l.EXPANSION_CASE_EXP_START),this._requireCharCode(123),this._endToken([]),this._attemptCharCodeUntilFn(T),this._expansionCaseStack.push(l.EXPANSION_CASE_EXP_START)}_consumeExpansionCaseEnd(){this._beginToken(l.EXPANSION_CASE_EXP_END),this._requireCharCode(125),this._endToken([]),this._attemptCharCodeUntilFn(T),this._expansionCaseStack.pop()}_consumeExpansionFormEnd(){this._beginToken(l.EXPANSION_FORM_END),this._requireCharCode(125),this._endToken([]),this._expansionCaseStack.pop()}_consumeWithInterpolation(e,t,r,n){this._beginToken(e);let i=[];for(;!r();){let a=this._cursor.clone();this._attemptStr(ft.start)?(this._endToken([this._processCarriageReturns(i.join(""))],a),i.length=0,this._consumeInterpolation(t,a,n),this._beginToken(e)):this._cursor.peek()===38?(this._endToken([this._processCarriageReturns(i.join(""))]),i.length=0,this._consumeEntity(e),this._beginToken(e)):i.push(this._readChar())}this._inInterpolation=!1;let s=this._processCarriageReturns(i.join(""));return this._endToken([s]),s}_consumeInterpolation(e,t,r){let n=[];this._beginToken(e,t),n.push(ft.start);let i=this._cursor.clone(),s=null,a=!1;for(;this._cursor.peek()!==0&&(r===null||!r());){let o=this._cursor.clone();if(this._isTagStart()){this._cursor=o,n.push(this._getProcessedChars(i,o)),this._endToken(n);return}if(s===null)if(this._attemptStr(ft.end)){n.push(this._getProcessedChars(i,o)),n.push(ft.end),this._endToken(n);return}else this._attemptStr("//")&&(a=!0);let c=this._cursor.peek();this._cursor.advance(),c===92?this._cursor.advance():c===s?s=null:!a&&s===null&&Ut(c)&&(s=c)}n.push(this._getProcessedChars(i,this._cursor)),this._endToken(n)}_consumeDirective(e,t){for(this._requireCharCode(64),this._cursor.advance();es(this._cursor.peek());)this._cursor.advance();this._beginToken(l.DIRECTIVE_NAME,e);let r=this._cursor.getChars(t);if(this._endToken([r]),this._attemptCharCodeUntilFn(T),this._cursor.peek()===40){for(this._openDirectiveCount++,this._beginToken(l.DIRECTIVE_OPEN),this._cursor.advance(),this._endToken([]),this._attemptCharCodeUntilFn(T);!ts(this._cursor.peek())&&this._cursor.peek()!==41;)this._consumeAttribute();if(this._attemptCharCodeUntilFn(T),this._openDirectiveCount--,this._cursor.peek()!==41){if(this._cursor.peek()===62||this._cursor.peek()===47)return;throw this._createError(be(this._cursor.peek()),this._cursor.getSpan(e))}this._beginToken(l.DIRECTIVE_CLOSE),this._cursor.advance(),this._endToken([]),this._attemptCharCodeUntilFn(T)}}_getProcessedChars(e,t){return this._processCarriageReturns(t.getChars(e))}_isTextEnd(){return!!(this._isTagStart()||this._cursor.peek()===0||this._tokenizeIcu&&!this._inInterpolation&&(this.isExpansionFormStart()||this._cursor.peek()===125&&this._isInExpansionCase())||this._tokenizeBlocks&&!this._inInterpolation&&!this._isInExpansion()&&(this._isBlockStart()||this._isLetStart()||this._cursor.peek()===125))}_isTagStart(){if(this._cursor.peek()===60){let e=this._cursor.clone();e.advance();let t=e.peek();if(97<=t&&t<=122||65<=t&&t<=90||t===47||t===33)return!0}return!1}_readUntil(e){let t=this._cursor.clone();return this._attemptUntilChar(e),this._cursor.getChars(t)}_isInExpansion(){return this._isInExpansionCase()||this._isInExpansionForm()}_isInExpansionCase(){return this._expansionCaseStack.length>0&&this._expansionCaseStack[this._expansionCaseStack.length-1]===l.EXPANSION_CASE_EXP_START}_isInExpansionForm(){return this._expansionCaseStack.length>0&&this._expansionCaseStack[this._expansionCaseStack.length-1]===l.EXPANSION_FORM_START}isExpansionFormStart(){if(this._cursor.peek()!==123)return!1;let e=this._cursor.clone(),t=this._attemptStr(ft.start);return this._cursor=e,!t}_handleFullNameStackForTagOpen(e,t){let r=Ee(e,t);(this._fullNameStack.length===0||this._fullNameStack[this._fullNameStack.length-1]===r)&&this._fullNameStack.push(r)}_handleFullNameStackForTagClose(e,t){let r=Ee(e,t);this._fullNameStack.length!==0&&this._fullNameStack[this._fullNameStack.length-1]===r&&this._fullNameStack.pop()}};function T(e){return!ct(e)||e===0}function we(e){return ct(e)||e===62||e===60||e===47||e===39||e===34||e===61||e===0}function Ro(e){return(e<97||122<e)&&(e<65||90<e)&&(e<48||e>57)}function Mo(e){return e===59||e===0||!Bi(e)}function Bo(e){return e===59||e===0||!Fe(e)}function Fo(e){return e!==125}function qo(e,t){return Ji(e)===Ji(t)}function Ji(e){return e>=97&&e<=122?e-97+65:e}function Ho(e){return Fe(e)||ut(e)||e===95}function Zi(e){return e!==59&&T(e)}function zt(e){return e===95||e>=65&&e<=90}function es(e){return Fe(e)||ut(e)||e===95}function ts(e){return e===47||e===62||e===60||e===0}function Vo(e){let t=[],r;for(let n=0;n<e.length;n++){let i=e[n];r&&r.type===l.TEXT&&i.type===l.TEXT||r&&r.type===l.ATTR_VALUE_TEXT&&i.type===l.ATTR_VALUE_TEXT?(r.parts[0]+=i.parts[0],r.sourceSpan.end=i.sourceSpan.end):(r=i,t.push(r))}return t}var is=class Br{constructor(t,r){if(t instanceof Br){this.file=t.file,this.input=t.input,this.end=t.end;let n=t.state;this.state={peek:n.peek,offset:n.offset,line:n.line,column:n.column}}else{if(!r)throw new Error("Programming error: the range argument must be provided with a file argument.");this.file=t,this.input=t.content,this.end=r.endPos,this.state={peek:-1,offset:r.startPos,line:r.startLine,column:r.startCol}}}clone(){return new Br(this)}peek(){return this.state.peek}charsLeft(){return this.end-this.state.offset}diff(t){return this.state.offset-t.state.offset}advance(){this.advanceState(this.state)}init(){this.updatePeek(this.state)}getSpan(t,r){t=t||this;let n=t;if(r)for(;this.diff(t)>0&&r.indexOf(t.peek())!==-1;)n===t&&(t=t.clone()),t.advance();let i=this.locationFromCursor(t);return new h(i,this.locationFromCursor(this),n!==t?this.locationFromCursor(n):i)}getChars(t){return this.input.substring(t.state.offset,this.state.offset)}charAt(t){return this.input.charCodeAt(t)}advanceState(t){if(t.offset>=this.end)throw this.state=t,new Vr('Unexpected character "EOF"',this);let r=this.charAt(t.offset);r===10?(t.line++,t.column=0):pt(r)||t.column++,t.offset++,this.updatePeek(t)}updatePeek(t){t.peek=t.offset>=this.end?0:this.charAt(t.offset)}locationFromCursor(t){return new qe(t.file,t.state.offset,t.state.line,t.state.column)}},Uo=class Fr extends is{constructor(t,r){t instanceof Fr?(super(t),this.internalState={...t.internalState}):(super(t,r),this.internalState=this.state)}advance(){this.state=this.internalState,super.advance(),this.processEscapeSequence()}init(){super.init(),this.processEscapeSequence()}clone(){return new Fr(this)}getChars(t){let r=t.clone(),n="";for(;r.internalState.offset<this.internalState.offset;)n+=String.fromCodePoint(r.peek()),r.advance();return n}processEscapeSequence(){let t=()=>this.internalState.peek;if(t()===92)if(this.internalState={...this.state},this.advanceState(this.internalState),t()===110)this.state.peek=10;else if(t()===114)this.state.peek=13;else if(t()===118)this.state.peek=11;else if(t()===116)this.state.peek=9;else if(t()===98)this.state.peek=8;else if(t()===102)this.state.peek=12;else if(t()===117)if(this.advanceState(this.internalState),t()===123){this.advanceState(this.internalState);let r=this.clone(),n=0;for(;t()!==125;)this.advanceState(this.internalState),n++;this.state.peek=this.decodeHexDigits(r,n)}else{let r=this.clone();this.advanceState(this.internalState),this.advanceState(this.internalState),this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(r,4)}else if(t()===120){this.advanceState(this.internalState);let r=this.clone();this.advanceState(this.internalState),this.state.peek=this.decodeHexDigits(r,2)}else if(yr(t())){let r="",n=0,i=this.clone();for(;yr(t())&&n<3;)i=this.clone(),r+=String.fromCodePoint(t()),this.advanceState(this.internalState),n++;this.state.peek=parseInt(r,8),this.internalState=i.internalState}else pt(this.internalState.peek)?(this.advanceState(this.internalState),this.state=this.internalState):this.state.peek=this.internalState.peek}decodeHexDigits(t,r){let n=this.input.slice(t.internalState.offset,t.internalState.offset+r),i=parseInt(n,16);if(isNaN(i))throw t.state=t.internalState,new Vr("Invalid hexadecimal escape sequence",t);return i}},Vr=class extends Error{constructor(e,t){super(e),this.msg=e,this.cursor=t,Object.setPrototypeOf(this,new.target.prototype)}};var N=class os extends ne{static create(t,r,n){return new os(t,r,n)}constructor(t,r,n){super(r,n),this.elementName=t}},Wo=class{constructor(e,t){this.rootNodes=e,this.errors=t}},ls=class{constructor(e){this.getTagDefinition=e}parse(e,t,r,n=!1,i){let s=m=>(g,...E)=>m(g.toLowerCase(),...E),a=n?this.getTagDefinition:s(this.getTagDefinition),o=m=>a(m).getContentType(),c=n?i:s(i),u=ns(e,t,i?(m,g,E,P)=>{let z=c(m,g,E,P);return z!==void 0?z:o(m)}:o,r),p=r&&r.canSelfClose||!1,d=r&&r.allowHtmComponentClosingTags||!1,S=new Go(u.tokens,a,p,d,n);return S.build(),new Wo(S.rootNodes,[...u.errors,...S.errors])}},Go=class cs{constructor(t,r,n,i,s){this.tokens=t,this.tagDefinitionResolver=r,this.canSelfClose=n,this.allowHtmComponentClosingTags=i,this.isTagNameCaseSensitive=s,this._index=-1,this._containerStack=[],this.rootNodes=[],this.errors=[],this._advance()}build(){for(;this._peek.type!==l.EOF;)this._peek.type===l.TAG_OPEN_START||this._peek.type===l.INCOMPLETE_TAG_OPEN?this._consumeElementStartTag(this._advance()):this._peek.type===l.TAG_CLOSE?(this._closeVoidElement(),this._consumeElementEndTag(this._advance())):this._peek.type===l.CDATA_START?(this._closeVoidElement(),this._consumeCdata(this._advance())):this._peek.type===l.COMMENT_START?(this._closeVoidElement(),this._consumeComment(this._advance())):this._peek.type===l.TEXT||this._peek.type===l.RAW_TEXT||this._peek.type===l.ESCAPABLE_RAW_TEXT?(this._closeVoidElement(),this._consumeText(this._advance())):this._peek.type===l.EXPANSION_FORM_START?this._consumeExpansion(this._advance()):this._peek.type===l.BLOCK_OPEN_START?(this._closeVoidElement(),this._consumeBlockOpen(this._advance())):this._peek.type===l.BLOCK_CLOSE?(this._closeVoidElement(),this._consumeBlockClose(this._advance())):this._peek.type===l.INCOMPLETE_BLOCK_OPEN?(this._closeVoidElement(),this._consumeIncompleteBlock(this._advance())):this._peek.type===l.LET_START?(this._closeVoidElement(),this._consumeLet(this._advance())):this._peek.type===l.DOC_TYPE_START?this._consumeDocType(this._advance()):this._peek.type===l.INCOMPLETE_LET?(this._closeVoidElement(),this._consumeIncompleteLet(this._advance())):this._peek.type===l.COMPONENT_OPEN_START||this._peek.type===l.INCOMPLETE_COMPONENT_OPEN?this._consumeComponentStartTag(this._advance()):this._peek.type===l.COMPONENT_CLOSE?this._consumeComponentEndTag(this._advance()):this._advance();for(let t of this._containerStack)t instanceof ve&&this.errors.push(N.create(t.name,t.sourceSpan,`Unclosed block "${t.name}"`))}_advance(){let t=this._peek;return this._index<this.tokens.length-1&&this._index++,this._peek=this.tokens[this._index],t}_advanceIf(t){return this._peek.type===t?this._advance():null}_consumeCdata(t){let r=this._advance(),n=this._getText(r),i=this._advanceIf(l.CDATA_END);this._addToParent(new Vi(n,new h(t.sourceSpan.start,(i||r).sourceSpan.end),[r]))}_consumeComment(t){let r=this._advanceIf(l.RAW_TEXT),n=this._advanceIf(l.COMMENT_END),i=r!=null?r.parts[0].trim():null,s=n==null?t.sourceSpan:new h(t.sourceSpan.start,n.sourceSpan.end,t.sourceSpan.fullStart);this._addToParent(new $i(i,s))}_consumeDocType(t){let r=this._advanceIf(l.RAW_TEXT),n=this._advanceIf(l.DOC_TYPE_END),i=r!=null?r.parts[0].trim():null,s=new h(t.sourceSpan.start,(n||r||t).sourceSpan.end);this._addToParent(new zi(i,s))}_consumeExpansion(t){let r=this._advance(),n=this._advance(),i=[];for(;this._peek.type===l.EXPANSION_CASE_VALUE;){let a=this._parseExpansionCase();if(!a)return;i.push(a)}if(this._peek.type!==l.EXPANSION_FORM_END){this.errors.push(N.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '}'."));return}let s=new h(t.sourceSpan.start,this._peek.sourceSpan.end,t.sourceSpan.fullStart);this._addToParent(new Ui(r.parts[0],n.parts[0],i,s,r.sourceSpan)),this._advance()}_parseExpansionCase(){let t=this._advance();if(this._peek.type!==l.EXPANSION_CASE_EXP_START)return this.errors.push(N.create(null,this._peek.sourceSpan,"Invalid ICU message. Missing '{'.")),null;let r=this._advance(),n=this._collectExpansionExpTokens(r);if(!n)return null;let i=this._advance();n.push({type:l.EOF,parts:[],sourceSpan:i.sourceSpan});let s=new cs(n,this.tagDefinitionResolver,this.canSelfClose,this.allowHtmComponentClosingTags,this.isTagNameCaseSensitive);if(s.build(),s.errors.length>0)return this.errors=this.errors.concat(s.errors),null;let a=new h(t.sourceSpan.start,i.sourceSpan.end,t.sourceSpan.fullStart),o=new h(r.sourceSpan.start,i.sourceSpan.end,r.sourceSpan.fullStart);return new Wi(t.parts[0],s.rootNodes,a,t.sourceSpan,o)}_collectExpansionExpTokens(t){let r=[],n=[l.EXPANSION_CASE_EXP_START];for(;;){if((this._peek.type===l.EXPANSION_FORM_START||this._peek.type===l.EXPANSION_CASE_EXP_START)&&n.push(this._peek.type),this._peek.type===l.EXPANSION_CASE_EXP_END)if(ss(n,l.EXPANSION_CASE_EXP_START)){if(n.pop(),n.length===0)return r}else return this.errors.push(N.create(null,t.sourceSpan,"Invalid ICU message. Missing '}'.")),null;if(this._peek.type===l.EXPANSION_FORM_END)if(ss(n,l.EXPANSION_FORM_START))n.pop();else return this.errors.push(N.create(null,t.sourceSpan,"Invalid ICU message. Missing '}'.")),null;if(this._peek.type===l.EOF)return this.errors.push(N.create(null,t.sourceSpan,"Invalid ICU message. Missing '}'.")),null;r.push(this._advance())}}_getText(t){let r=t.parts[0];if(r.length>0&&r[0]==`
`){var n;let i=this._getClosestElementLikeParent();i!=null&&i.children.length==0&&(!((n=this._getTagDefinition(i))===null||n===void 0)&&n.ignoreFirstLf)&&(r=r.substring(1))}return r}_consumeText(t){let r=[t],n=t.sourceSpan,i=t.parts[0];if(i.length>0&&i[0]===`
`){var s;let a=this._getContainer();a!=null&&a.children.length===0&&(!((s=this._getTagDefinition(a))===null||s===void 0)&&s.ignoreFirstLf)&&(i=i.substring(1),r[0]={type:t.type,sourceSpan:t.sourceSpan,parts:[i]})}for(;this._peek.type===l.INTERPOLATION||this._peek.type===l.TEXT||this._peek.type===l.ENCODED_ENTITY;)t=this._advance(),r.push(t),t.type===l.INTERPOLATION?i+=t.parts.join("").replace(/&([^;]+);/g,as):t.type===l.ENCODED_ENTITY?i+=t.parts[0]:i+=t.parts.join("");if(i.length>0){let a=t.sourceSpan;this._addToParent(new Hi(i,new h(n.start,a.end,n.fullStart,n.details),r))}}_closeVoidElement(){var t;let r=this._getContainer();r!==null&&(!((t=this._getTagDefinition(r))===null||t===void 0)&&t.isVoid)&&this._containerStack.pop()}_consumeElementStartTag(t){var r;let n=[],i=[];this._consumeAttributesAndDirectives(n,i);let s=this._getElementFullName(t,this._getClosestElementLikeParent()),a=this._getTagDefinition(s),o=!1;if(this._peek.type===l.TAG_OPEN_END_VOID){this._advance(),o=!0;let E=this._getTagDefinition(s);this.canSelfClose||E?.canSelfClose||Me(s)!==null||E?.isVoid||this.errors.push(N.create(s,t.sourceSpan,`Only void, custom and foreign elements can be self closed "${t.parts[1]}"`))}else this._peek.type===l.TAG_OPEN_END&&(this._advance(),o=!1);let c=this._peek.sourceSpan.fullStart,u=new h(t.sourceSpan.start,c,t.sourceSpan.fullStart),p=new h(t.sourceSpan.start,c,t.sourceSpan.fullStart),d=new h(t.sourceSpan.start.moveBy(1),t.sourceSpan.end),S=new ie(s,n,i,[],o,u,p,void 0,d,a?.isVoid??!1),m=this._getContainer(),g=m!==null&&!!(!((r=this._getTagDefinition(m))===null||r===void 0)&&r.isClosedByChild(S.name));this._pushContainer(S,g),o?this._popContainer(s,ie,u):t.type===l.INCOMPLETE_TAG_OPEN&&(this._popContainer(s,ie,null),this.errors.push(N.create(s,u,`Opening tag "${s}" not terminated.`)))}_consumeComponentStartTag(t){var r;let n=t.parts[0],i=[],s=[];this._consumeAttributesAndDirectives(i,s);let a=this._getClosestElementLikeParent(),o=this._getComponentTagName(t,a),c=this._getComponentFullName(t,a),u=this._peek.type===l.COMPONENT_OPEN_END_VOID;this._advance();let p=this._peek.sourceSpan.fullStart,d=new h(t.sourceSpan.start,p,t.sourceSpan.fullStart),S=new h(t.sourceSpan.start,p,t.sourceSpan.fullStart),m=new J(n,o,c,i,s,[],u,d,S,void 0),g=this._getContainer(),E=g!==null&&m.tagName!==null&&!!(!((r=this._getTagDefinition(g))===null||r===void 0)&&r.isClosedByChild(m.tagName));this._pushContainer(m,E),u?this._popContainer(c,J,d):t.type===l.INCOMPLETE_COMPONENT_OPEN&&(this._popContainer(c,J,null),this.errors.push(N.create(c,d,`Opening tag "${c}" not terminated.`)))}_consumeAttributesAndDirectives(t,r){for(;this._peek.type===l.ATTR_NAME||this._peek.type===l.DIRECTIVE_NAME;)this._peek.type===l.DIRECTIVE_NAME?r.push(this._consumeDirective(this._peek)):t.push(this._consumeAttr(this._advance()))}_consumeComponentEndTag(t){let r=this._getComponentFullName(t,this._getClosestElementLikeParent());if(!this._popContainer(r,J,t.sourceSpan)){let n=this._containerStack[this._containerStack.length-1],i;n instanceof J&&n.componentName===t.parts[0]?i=`, did you mean "${n.fullName}"?`:i=". It may happen when the tag has already been closed by another tag.";let s=`Unexpected closing tag "${r}"${i}`;this.errors.push(N.create(r,t.sourceSpan,s))}}_getTagDefinition(t){return typeof t=="string"?this.tagDefinitionResolver(t):t instanceof ie?this.tagDefinitionResolver(t.name):t instanceof J&&t.tagName!==null?this.tagDefinitionResolver(t.tagName):null}_pushContainer(t,r){r&&this._containerStack.pop(),this._addToParent(t),this._containerStack.push(t)}_consumeElementEndTag(t){var r;let n=this.allowHtmComponentClosingTags&&t.parts.length===0?null:this._getElementFullName(t,this._getClosestElementLikeParent());if(n&&(!((r=this._getTagDefinition(n))===null||r===void 0)&&r.isVoid))this.errors.push(N.create(n,t.sourceSpan,`Void elements do not have end tags "${t.parts[1]}"`));else if(!this._popContainer(n,ie,t.sourceSpan)){let i=`Unexpected closing tag "${n}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;this.errors.push(N.create(n,t.sourceSpan,i))}}_popContainer(t,r,n){let i=!1;for(let a=this._containerStack.length-1;a>=0;a--){var s;let o=this._containerStack[a],c=o instanceof J?o.fullName:o.name;if(Me(c)?c===t:(c===t||t===null)&&o instanceof r)return o.endSourceSpan=n,o.sourceSpan.end=n!==null?n.end:o.sourceSpan.end,this._containerStack.splice(a,this._containerStack.length-a),!i;(o instanceof ve||!(!((s=this._getTagDefinition(o))===null||s===void 0)&&s.closedByParent))&&(i=!0)}return!1}_consumeAttr(t){let r=Ee(t.parts[0],t.parts[1]),n=t.sourceSpan.end,i;this._peek.type===l.ATTR_QUOTE&&(i=this._advance());let s="",a=[],o,c;if(this._peek.type===l.ATTR_VALUE_TEXT)for(o=this._peek.sourceSpan,c=this._peek.sourceSpan.end;this._peek.type===l.ATTR_VALUE_TEXT||this._peek.type===l.ATTR_VALUE_INTERPOLATION||this._peek.type===l.ENCODED_ENTITY;){let p=this._advance();a.push(p),p.type===l.ATTR_VALUE_INTERPOLATION?s+=p.parts.join("").replace(/&([^;]+);/g,as):p.type===l.ENCODED_ENTITY?s+=p.parts[0]:s+=p.parts.join(""),c=n=p.sourceSpan.end}this._peek.type===l.ATTR_QUOTE&&(c=n=this._advance().sourceSpan.end);let u=o&&c&&new h(i?.sourceSpan.start??o.start,c,i?.sourceSpan.fullStart??o.fullStart);return new Gi(r,s,new h(t.sourceSpan.start,n,t.sourceSpan.fullStart),t.sourceSpan,u,a.length>0?a:void 0,void 0)}_consumeDirective(t){let r=[],n=t.sourceSpan.end,i=null;if(this._advance(),this._peek.type===l.DIRECTIVE_OPEN){for(n=this._peek.sourceSpan.end,this._advance();this._peek.type===l.ATTR_NAME;)r.push(this._consumeAttr(this._advance()));this._peek.type===l.DIRECTIVE_CLOSE?(i=this._peek.sourceSpan,this._advance()):this.errors.push(N.create(null,t.sourceSpan,"Unterminated directive definition"))}let s=new h(t.sourceSpan.start,n,t.sourceSpan.fullStart),a=new h(s.start,i===null?t.sourceSpan.end:i.end,s.fullStart);return new Yi(t.parts[0],r,a,s,i)}_consumeBlockOpen(t){let r=[];for(;this._peek.type===l.BLOCK_PARAMETER;){let o=this._advance();r.push(new Nr(o.parts[0],o.sourceSpan))}this._peek.type===l.BLOCK_OPEN_END&&this._advance();let n=this._peek.sourceSpan.fullStart,i=new h(t.sourceSpan.start,n,t.sourceSpan.fullStart),s=new h(t.sourceSpan.start,n,t.sourceSpan.fullStart),a=new ve(t.parts[0],r,[],i,t.sourceSpan,s);this._pushContainer(a,!1)}_consumeBlockClose(t){this._popContainer(null,ve,t.sourceSpan)||this.errors.push(N.create(null,t.sourceSpan,'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'))}_consumeIncompleteBlock(t){let r=[];for(;this._peek.type===l.BLOCK_PARAMETER;){let o=this._advance();r.push(new Nr(o.parts[0],o.sourceSpan))}let n=this._peek.sourceSpan.fullStart,i=new h(t.sourceSpan.start,n,t.sourceSpan.fullStart),s=new h(t.sourceSpan.start,n,t.sourceSpan.fullStart),a=new ve(t.parts[0],r,[],i,t.sourceSpan,s);this._pushContainer(a,!1),this._popContainer(null,ve,null),this.errors.push(N.create(t.parts[0],i,`Incomplete block "${t.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`))}_consumeLet(t){let r=t.parts[0],n,i;if(this._peek.type!==l.LET_VALUE){this.errors.push(N.create(t.parts[0],t.sourceSpan,`Invalid @let declaration "${r}". Declaration must have a value.`));return}else n=this._advance();if(this._peek.type!==l.LET_END){this.errors.push(N.create(t.parts[0],t.sourceSpan,`Unterminated @let declaration "${r}". Declaration must be terminated with a semicolon.`));return}else i=this._advance();let s=i.sourceSpan.fullStart,a=new h(t.sourceSpan.start,s,t.sourceSpan.fullStart),o=t.sourceSpan.toString().lastIndexOf(r),c=new h(t.sourceSpan.start.moveBy(o),t.sourceSpan.end),u=new Lr(r,n.parts[0],a,c,n.sourceSpan);this._addToParent(u)}_consumeIncompleteLet(t){let r=t.parts[0]??"",n=r?` "${r}"`:"";if(r.length>0){let i=t.sourceSpan.toString().lastIndexOf(r),s=new h(t.sourceSpan.start.moveBy(i),t.sourceSpan.end),a=new h(t.sourceSpan.start,t.sourceSpan.start.moveBy(0)),o=new Lr(r,"",t.sourceSpan,s,a);this._addToParent(o)}this.errors.push(N.create(t.parts[0],t.sourceSpan,`Incomplete @let declaration${n}. @let declarations must be written as \`@let <name> = <value>;\``))}_getContainer(){return this._containerStack.length>0?this._containerStack[this._containerStack.length-1]:null}_getClosestElementLikeParent(){for(let t=this._containerStack.length-1;t>-1;t--){let r=this._containerStack[t];if(r instanceof ie||r instanceof J)return r}return null}_addToParent(t){let r=this._getContainer();r===null?this.rootNodes.push(t):r.children.push(t)}_getElementFullName(t,r){return Ee(this._getPrefix(t,r),t.parts[1])}_getComponentFullName(t,r){let n=t.parts[0],i=this._getComponentTagName(t,r);return i===null?n:i.startsWith(":")?n+i:`${n}:${i}`}_getComponentTagName(t,r){let n=this._getPrefix(t,r),i=t.parts[2];return!n&&!i?null:!n&&i?i:Ee(n,i||"ng-component")}_getPrefix(t,r){var n;let i,s;if(t.type===l.COMPONENT_OPEN_START||t.type===l.INCOMPLETE_COMPONENT_OPEN||t.type===l.COMPONENT_CLOSE?(i=t.parts[1],s=t.parts[2]):(i=t.parts[0],s=t.parts[1]),i=i||((n=this._getTagDefinition(s))===null||n===void 0?void 0:n.implicitNamespacePrefix)||"",!i&&r){let a=r instanceof ie?r.name:r.tagName;if(a!==null){let o=at(a)[1],c=this._getTagDefinition(o);c!==null&&!c.preventNamespaceInheritance&&(i=Me(a))}}return i}};function ss(e,t){return e.length>0&&e[e.length-1]===t}function as(e,t){return Te[t]!==void 0?Te[t]||e:/^#x[a-f0-9]+$/i.test(t)?String.fromCodePoint(parseInt(t.slice(2),16)):/^#\d+$/.test(t)?String.fromCodePoint(parseInt(t.slice(1),10)):e}var us=class extends ls{constructor(){super(Be)}parse(e,t,r,n=!1,i){return super.parse(e,t,r,n,i)}};var Ur=null,$o=()=>(Ur||(Ur=new us),Ur);function Qt(e,t={}){let{canSelfClose:r=!1,allowHtmComponentClosingTags:n=!1,isTagNameCaseSensitive:i=!1,getTagContentType:s,tokenizeAngularBlocks:a=!1,tokenizeAngularLetDeclaration:o=!1,enableAngularSelectorlessSyntax:c=!1}=t;return $o().parse(e,"angular-html-parser",{tokenizeExpansionForms:a,canSelfClose:r,allowHtmComponentClosingTags:n,tokenizeBlocks:a,tokenizeLet:o,selectorlessEnabled:c},i,s)}var zo=[jo,Xo,Qo,Zo,el,nl,tl,rl,il,Jo];function Yo(e,t){for(let r of zo)r(e,t);return e}function jo(e){e.walk(t=>{if(t.kind==="element"&&t.tagDefinition.ignoreFirstLf&&t.children.length>0&&t.children[0].kind==="text"&&t.children[0].value[0]===`
`){let r=t.children[0];r.value.length===1?t.removeChild(r):r.value=r.value.slice(1)}})}function Xo(e){let t=r=>r.kind==="element"&&r.prev?.kind==="ieConditionalStartComment"&&r.prev.sourceSpan.end.offset===r.startSourceSpan.start.offset&&r.firstChild?.kind==="ieConditionalEndComment"&&r.firstChild.sourceSpan.start.offset===r.startSourceSpan.end.offset;e.walk(r=>{if(r.children)for(let n=0;n<r.children.length;n++){let i=r.children[n];if(!t(i))continue;let s=i.prev,a=i.firstChild;r.removeChild(s),n--;let o=new h(s.sourceSpan.start,a.sourceSpan.end),c=new h(o.start,i.sourceSpan.end);i.condition=s.condition,i.sourceSpan=c,i.startSourceSpan=o,i.removeChild(a)}})}function Ko(e,t,r){e.walk(n=>{if(n.children)for(let i=0;i<n.children.length;i++){let s=n.children[i];if(s.kind!=="text"&&!t(s))continue;s.kind!=="text"&&(s.kind="text",s.value=r(s));let a=s.prev;!a||a.kind!=="text"||(a.value+=s.value,a.sourceSpan=new h(a.sourceSpan.start,s.sourceSpan.end),n.removeChild(s),i--)}})}function Qo(e){return Ko(e,t=>t.kind==="cdata",t=>`<![CDATA[${t.value}]]>`)}function Jo(e){let t=r=>r.kind==="element"&&r.attrs.length===0&&r.children.length===1&&r.firstChild.kind==="text"&&!y.hasWhitespaceCharacter(r.children[0].value)&&!r.firstChild.hasLeadingSpaces&&!r.firstChild.hasTrailingSpaces&&r.isLeadingSpaceSensitive&&!r.hasLeadingSpaces&&r.isTrailingSpaceSensitive&&!r.hasTrailingSpaces&&r.prev?.kind==="text"&&r.next?.kind==="text";e.walk(r=>{if(r.children)for(let n=0;n<r.children.length;n++){let i=r.children[n];if(!t(i))continue;let s=i.prev,a=i.next;s.value+=`<${i.rawName}>`+i.firstChild.value+`</${i.rawName}>`+a.value,s.sourceSpan=new h(s.sourceSpan.start,a.sourceSpan.end),s.isTrailingSpaceSensitive=a.isTrailingSpaceSensitive,s.hasTrailingSpaces=a.hasTrailingSpaces,r.removeChild(i),n--,r.removeChild(a)}})}function Zo(e,t){if(t.parser==="html")return;let r=/\{\{(.+?)\}\}/su;e.walk(n=>{if(xn(n,t))for(let i of n.children){if(i.kind!=="text")continue;let s=i.sourceSpan.start,a=null,o=i.value.split(r);for(let c=0;c<o.length;c++,s=a){let u=o[c];if(c%2===0){a=s.moveBy(u.length),u.length>0&&n.insertChildBefore(i,{kind:"text",value:u,sourceSpan:new h(s,a)});continue}a=s.moveBy(u.length+4),n.insertChildBefore(i,{kind:"interpolation",sourceSpan:new h(s,a),children:u.length===0?[]:[{kind:"text",value:u,sourceSpan:new h(s.moveBy(2),a.moveBy(-2))}]})}n.removeChild(i)}})}function el(e,t){e.walk(r=>{let n=r.$children;if(!n)return;if(n.length===0||n.length===1&&n[0].kind==="text"&&y.trim(n[0].value).length===0){r.hasDanglingSpaces=n.length>0,r.$children=[];return}let i=An(r,t),s=dr(r);if(!i)for(let a=0;a<n.length;a++){let o=n[a];if(o.kind!=="text")continue;let{leadingWhitespace:c,text:u,trailingWhitespace:p}=kn(o.value),d=o.prev,S=o.next;u?(o.value=u,o.sourceSpan=new h(o.sourceSpan.start.moveBy(c.length),o.sourceSpan.end.moveBy(-p.length)),c&&(d&&(d.hasTrailingSpaces=!0),o.hasLeadingSpaces=!0),p&&(o.hasTrailingSpaces=!0,S&&(S.hasLeadingSpaces=!0))):(r.removeChild(o),a--,(c||p)&&(d&&(d.hasTrailingSpaces=!0),S&&(S.hasLeadingSpaces=!0)))}r.isWhitespaceSensitive=i,r.isIndentationSensitive=s})}function tl(e){e.walk(t=>{t.isSelfClosing=!t.children||t.kind==="element"&&(t.tagDefinition.isVoid||t.endSourceSpan&&t.startSourceSpan.start===t.endSourceSpan.start&&t.startSourceSpan.end===t.endSourceSpan.end)})}function rl(e,t){e.walk(r=>{r.kind==="element"&&(r.hasHtmComponentClosingTag=r.endSourceSpan&&/^<\s*\/\s*\/\s*>$/u.test(t.originalText.slice(r.endSourceSpan.start.offset,r.endSourceSpan.end.offset)))})}function nl(e,t){e.walk(r=>{r.cssDisplay=Bn(r,t)})}function il(e,t){e.walk(r=>{let{children:n}=r;if(n){if(n.length===0){r.isDanglingSpaceSensitive=Ln(r,t);return}for(let i of n)i.isLeadingSpaceSensitive=yn(i,t),i.isTrailingSpaceSensitive=Nn(i,t);for(let i=0;i<n.length;i++){let s=n[i];s.isLeadingSpaceSensitive=(i===0||s.prev.isTrailingSpaceSensitive)&&s.isLeadingSpaceSensitive,s.isTrailingSpaceSensitive=(i===n.length-1||s.next.isLeadingSpaceSensitive)&&s.isTrailingSpaceSensitive}}})}var ps=Yo;function sl(e,t,r){let{node:n}=e;switch(n.kind){case"root":return t.__onHtmlRoot&&t.__onHtmlRoot(n),[C(Re(e,t,r)),v];case"element":case"ieConditionalComment":return Pi(e,t,r);case"angularControlFlowBlock":return xi(e,t,r);case"angularControlFlowBlockParameters":return yi(e,t,r);case"angularControlFlowBlockParameter":return y.trim(n.expression);case"angularLetDeclaration":return C(["@let ",C([n.id," =",C(A([_,r("init")]))]),";"]);case"angularLetDeclarationInitializer":return n.value;case"angularIcuExpression":return Ni(e,t,r);case"angularIcuCase":return Li(e,t,r);case"ieConditionalStartComment":case"ieConditionalEndComment":return[Se(n),fe(n)];case"interpolation":return[Se(n,t),...e.map(r,"children"),fe(n,t)];case"text":{if(n.parent.kind==="interpolation"){let o=/\n[^\S\n]*$/u,c=o.test(n.value),u=c?n.value.replace(o,""):n.value;return[L(u),c?v:""]}let i=U(n,t),s=Dt(n),a=V(n,t);return s[0]=[i,s[0]],s.push([s.pop(),a]),xt(s)}case"docType":return[C([Se(n,t)," ",w(0,n.value.replace(/^html\b/iu,"html"),/\s+/gu," ")]),fe(n,t)];case"comment":return[U(n,t),L(t.originalText.slice(Q(n),te(n))),V(n,t)];case"attribute":{if(n.value===null)return n.rawName;let i=Sr(n.value),s=Rt(n,t)?"":pn(i,'"');return[n.rawName,"=",s,L(s==='"'?w(0,i,'"',"&quot;"):w(0,i,"'","&apos;")),s]}case"frontMatter":case"cdata":default:throw new mn(n,"HTML")}}var al={features:{experimental_frontMatterSupport:{massageAstNode:!0,embed:!0,print:!0}},preprocess:ps,print:sl,insertPragma:bi,massageAstNode:dn,embed:fi,getVisitorKeys:_i},hs=al;var ms=[{name:"Angular",type:"markup",aceMode:"html",extensions:[".component.html"],tmScope:"text.html.basic",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["angular"],vscodeLanguageIds:["html"],filenames:[],linguistLanguageId:146},{name:"HTML",type:"markup",aceMode:"html",extensions:[".html",".hta",".htm",".html.hl",".inc",".xht",".xhtml"],tmScope:"text.html.basic",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["html"],vscodeLanguageIds:["html"],linguistLanguageId:146},{name:"Lightning Web Components",type:"markup",aceMode:"html",extensions:[],tmScope:"text.html.basic",aliases:["xhtml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["lwc"],vscodeLanguageIds:["html"],filenames:[],linguistLanguageId:146},{name:"MJML",type:"markup",aceMode:"html",extensions:[".mjml"],tmScope:"text.mjml.basic",aliases:["MJML","mjml"],codemirrorMode:"htmlmixed",codemirrorMimeType:"text/html",parsers:["mjml"],filenames:[],vscodeLanguageIds:["mjml"],linguistLanguageId:146},{name:"Vue",type:"markup",aceMode:"vue",extensions:[".vue"],tmScope:"source.vue",codemirrorMode:"vue",codemirrorMimeType:"text/x-vue",parsers:["vue"],vscodeLanguageIds:["vue"],linguistLanguageId:391}];var Wr={bracketSpacing:{category:"Common",type:"boolean",default:!0,description:"Print spaces between brackets.",oppositeDescription:"Do not print spaces between brackets."},objectWrap:{category:"Common",type:"choice",default:"preserve",description:"How to wrap object literals.",choices:[{value:"preserve",description:"Keep as multi-line, if there is a newline between the opening brace and first property."},{value:"collapse",description:"Fit to a single line when possible."}]},singleQuote:{category:"Common",type:"boolean",default:!1,description:"Use single quotes instead of double quotes."},proseWrap:{category:"Common",type:"choice",default:"preserve",description:"How to wrap prose.",choices:[{value:"always",description:"Wrap prose if it exceeds the print width."},{value:"never",description:"Do not wrap prose."},{value:"preserve",description:"Wrap prose as-is."}]},bracketSameLine:{category:"Common",type:"boolean",default:!1,description:"Put > of opening tags on the last line instead of on a new line."},singleAttributePerLine:{category:"Common",type:"boolean",default:!1,description:"Enforce single attribute per line in HTML, Vue and JSX."}};var fs="HTML",ol={bracketSameLine:Wr.bracketSameLine,htmlWhitespaceSensitivity:{category:fs,type:"choice",default:"css",description:"How to handle whitespaces in HTML.",choices:[{value:"css",description:"Respect the default value of CSS display property."},{value:"strict",description:"Whitespaces are considered sensitive."},{value:"ignore",description:"Whitespaces are considered insensitive."}]},singleAttributePerLine:Wr.singleAttributePerLine,vueIndentScriptAndStyle:{category:fs,type:"boolean",default:!1,description:"Indent script and style tags in Vue files."}},ds=ol;var Qr={};en(Qr,{angular:()=>Al,html:()=>wl,lwc:()=>Nl,mjml:()=>xl,vue:()=>yl});function ll(e,t){let r=new SyntaxError(e+" ("+t.loc.start.line+":"+t.loc.start.column+")");return Object.assign(r,t)}var gs=ll;var cl={canSelfClose:!0,normalizeTagName:!1,normalizeAttributeName:!1,allowHtmComponentClosingTags:!1,isTagNameCaseSensitive:!1,shouldParseFrontMatter:!0};function Jt(e){return{...cl,...e}}function Gr(e){let{canSelfClose:t,allowHtmComponentClosingTags:r,isTagNameCaseSensitive:n,shouldParseAsRawText:i,tokenizeAngularBlocks:s,tokenizeAngularLetDeclaration:a}=e;return{canSelfClose:t,allowHtmComponentClosingTags:r,isTagNameCaseSensitive:n,getTagContentType:i?(...o)=>i(...o)?R.RAW_TEXT:void 0:void 0,tokenizeAngularBlocks:s,tokenizeAngularLetDeclaration:a}}var Zt=new Map([["*",new Set(["accesskey","autocapitalize","autocorrect","autofocus","class","contenteditable","dir","draggable","enterkeyhint","exportparts","hidden","id","inert","inputmode","is","itemid","itemprop","itemref","itemscope","itemtype","lang","nonce","part","popover","slot","spellcheck","style","tabindex","title","translate","writingsuggestions"])],["a",new Set(["charset","coords","download","href","hreflang","name","ping","referrerpolicy","rel","rev","shape","target","type"])],["applet",new Set(["align","alt","archive","code","codebase","height","hspace","name","object","vspace","width"])],["area",new Set(["alt","coords","download","href","hreflang","nohref","ping","referrerpolicy","rel","shape","target","type"])],["audio",new Set(["autoplay","controls","crossorigin","loop","muted","preload","src"])],["base",new Set(["href","target"])],["basefont",new Set(["color","face","size"])],["blockquote",new Set(["cite"])],["body",new Set(["alink","background","bgcolor","link","text","vlink"])],["br",new Set(["clear"])],["button",new Set(["command","commandfor","disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","name","popovertarget","popovertargetaction","type","value"])],["canvas",new Set(["height","width"])],["caption",new Set(["align"])],["col",new Set(["align","char","charoff","span","valign","width"])],["colgroup",new Set(["align","char","charoff","span","valign","width"])],["data",new Set(["value"])],["del",new Set(["cite","datetime"])],["details",new Set(["name","open"])],["dialog",new Set(["closedby","open"])],["dir",new Set(["compact"])],["div",new Set(["align"])],["dl",new Set(["compact"])],["embed",new Set(["height","src","type","width"])],["fieldset",new Set(["disabled","form","name"])],["font",new Set(["color","face","size"])],["form",new Set(["accept","accept-charset","action","autocomplete","enctype","method","name","novalidate","target"])],["frame",new Set(["frameborder","longdesc","marginheight","marginwidth","name","noresize","scrolling","src"])],["frameset",new Set(["cols","rows"])],["h1",new Set(["align"])],["h2",new Set(["align"])],["h3",new Set(["align"])],["h4",new Set(["align"])],["h5",new Set(["align"])],["h6",new Set(["align"])],["head",new Set(["profile"])],["hr",new Set(["align","noshade","size","width"])],["html",new Set(["manifest","version"])],["iframe",new Set(["align","allow","allowfullscreen","allowpaymentrequest","allowusermedia","frameborder","height","loading","longdesc","marginheight","marginwidth","name","referrerpolicy","sandbox","scrolling","src","srcdoc","width"])],["img",new Set(["align","alt","border","crossorigin","decoding","fetchpriority","height","hspace","ismap","loading","longdesc","name","referrerpolicy","sizes","src","srcset","usemap","vspace","width"])],["input",new Set(["accept","align","alpha","alt","autocomplete","checked","colorspace","dirname","disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","height","ismap","list","max","maxlength","min","minlength","multiple","name","pattern","placeholder","popovertarget","popovertargetaction","readonly","required","size","src","step","type","usemap","value","width"])],["ins",new Set(["cite","datetime"])],["isindex",new Set(["prompt"])],["label",new Set(["for","form"])],["legend",new Set(["align"])],["li",new Set(["type","value"])],["link",new Set(["as","blocking","charset","color","crossorigin","disabled","fetchpriority","href","hreflang","imagesizes","imagesrcset","integrity","media","referrerpolicy","rel","rev","sizes","target","type"])],["map",new Set(["name"])],["menu",new Set(["compact"])],["meta",new Set(["charset","content","http-equiv","media","name","scheme"])],["meter",new Set(["high","low","max","min","optimum","value"])],["object",new Set(["align","archive","border","classid","codebase","codetype","data","declare","form","height","hspace","name","standby","type","typemustmatch","usemap","vspace","width"])],["ol",new Set(["compact","reversed","start","type"])],["optgroup",new Set(["disabled","label"])],["option",new Set(["disabled","label","selected","value"])],["output",new Set(["for","form","name"])],["p",new Set(["align"])],["param",new Set(["name","type","value","valuetype"])],["pre",new Set(["width"])],["progress",new Set(["max","value"])],["q",new Set(["cite"])],["script",new Set(["async","blocking","charset","crossorigin","defer","fetchpriority","integrity","language","nomodule","referrerpolicy","src","type"])],["select",new Set(["autocomplete","disabled","form","multiple","name","required","size"])],["slot",new Set(["name"])],["source",new Set(["height","media","sizes","src","srcset","type","width"])],["style",new Set(["blocking","media","type"])],["table",new Set(["align","bgcolor","border","cellpadding","cellspacing","frame","rules","summary","width"])],["tbody",new Set(["align","char","charoff","valign"])],["td",new Set(["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"])],["template",new Set(["shadowrootclonable","shadowrootcustomelementregistry","shadowrootdelegatesfocus","shadowrootmode","shadowrootserializable"])],["textarea",new Set(["autocomplete","cols","dirname","disabled","form","maxlength","minlength","name","placeholder","readonly","required","rows","wrap"])],["tfoot",new Set(["align","char","charoff","valign"])],["th",new Set(["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"])],["thead",new Set(["align","char","charoff","valign"])],["time",new Set(["datetime"])],["tr",new Set(["align","bgcolor","char","charoff","valign"])],["track",new Set(["default","kind","label","src","srclang"])],["ul",new Set(["compact","type"])],["video",new Set(["autoplay","controls","crossorigin","height","loop","muted","playsinline","poster","preload","src","width"])]]);var _s=new Set(["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fencedframe","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","search","section","select","selectedcontent","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]);var er={attrs:!0,children:!0,cases:!0,expression:!0},Ss=new Set(["parent"]),oe,$r,zr,We=class We{constructor(t={}){tn(this,oe);ir(this,"kind");ir(this,"parent");for(let r of new Set([...Ss,...Object.keys(t)]))this.setProperty(r,t[r]);if(ce(t))for(let r of Object.getOwnPropertySymbols(t))this.setProperty(r,t[r])}setProperty(t,r){if(this[t]!==r){if(t in er&&(r=r.map(n=>this.createChild(n))),!Ss.has(t)){this[t]=r;return}Object.defineProperty(this,t,{value:r,enumerable:!1,configurable:!0})}}map(t){let r;for(let n in er){let i=this[n];if(i){let s=ul(i,a=>a.map(t));r!==i&&(r||(r=new We({parent:this.parent})),r.setProperty(n,s))}}if(r)for(let n in this)n in er||(r[n]=this[n]);return t(r||this)}walk(t){for(let r in er){let n=this[r];if(n)for(let i=0;i<n.length;i++)n[i].walk(t)}t(this)}createChild(t){let r=t instanceof We?t.clone():new We(t);return r.setProperty("parent",this),r}insertChildBefore(t,r){let n=this.$children;n.splice(n.indexOf(t),0,this.createChild(r))}removeChild(t){let r=this.$children;r.splice(r.indexOf(t),1)}replaceChild(t,r){let n=this.$children;n[n.indexOf(t)]=this.createChild(r)}clone(){return new We(this)}get $children(){return this[$e(this,oe,$r)]}set $children(t){this[$e(this,oe,$r)]=t}get firstChild(){return this.$children?.[0]}get lastChild(){return F(1,this.$children,-1)}get prev(){let t=$e(this,oe,zr);return t[t.indexOf(this)-1]}get next(){let t=$e(this,oe,zr);return t[t.indexOf(this)+1]}get rawName(){return this.hasExplicitNamespace?this.fullName:this.name}get fullName(){return this.namespace?this.namespace+":"+this.name:this.name}get attrMap(){return Object.fromEntries(this.attrs.map(t=>[t.fullName,t.value]))}};oe=new WeakSet,$r=function(){return this.kind==="angularIcuCase"?"expression":this.kind==="angularIcuExpression"?"cases":"children"},zr=function(){return this.parent?.$children??[]};var tr=We;function ul(e,t){let r=e.map(t);return r.some((n,i)=>n!==e[i])?r:e}var pl=[{regex:/^(?<openingTagSuffix>\[if(?<condition>[^\]]*)\]>)(?<data>.*?)<!\s*\[endif\]$/su,parse:hl},{regex:/^\[if(?<condition>[^\]]*)\]><!$/u,parse:ml},{regex:/^<!\s*\[endif\]$/u,parse:fl}];function Es(e,t){if(e.value)for(let{regex:r,parse:n}of pl){let i=e.value.match(r);if(i)return n(e,i,t)}return null}function hl(e,t,r){let{openingTagSuffix:n,condition:i,data:s}=t.groups,a=4+n.length,o=e.sourceSpan.start.moveBy(a),c=o.moveBy(s.length),[u,p]=(()=>{try{return[!0,r(s,o).children]}catch{return[!1,[{kind:"text",value:s,sourceSpan:new h(o,c)}]]}})();return{kind:"ieConditionalComment",complete:u,children:p,condition:w(0,i.trim(),/\s+/gu," "),sourceSpan:e.sourceSpan,startSourceSpan:new h(e.sourceSpan.start,o),endSourceSpan:new h(c,e.sourceSpan.end)}}function ml(e,t){let{condition:r}=t.groups;return{kind:"ieConditionalStartComment",condition:w(0,r.trim(),/\s+/gu," "),sourceSpan:e.sourceSpan}}function fl(e){return{kind:"ieConditionalEndComment",sourceSpan:e.sourceSpan}}var Yr=class extends Pr{visitExpansionCase(t,r){r.parseOptions.name==="angular"&&this.visitChildren(r,n=>{n(t.expression)})}visit(t,{parseOptions:r}){Sl(t),El(t,r),vl(t,r),Cl(t)}};function Ts(e,t,r,n){Wt(new Yr,e.children,{parseOptions:r}),t&&e.children.unshift(t);let i=new tr(e);return i.walk(s=>{if(s.kind==="comment"){let a=Es(s,n);a&&s.parent.replaceChild(s,a)}dl(s),gl(s),_l(s)}),i}function dl(e){if(e.kind==="block"){if(e.name=w(0,e.name.toLowerCase(),/\s+/gu," ").trim(),e.kind="angularControlFlowBlock",!Ie(e.parameters)){delete e.parameters;return}for(let t of e.parameters)t.kind="angularControlFlowBlockParameter";e.parameters={kind:"angularControlFlowBlockParameters",children:e.parameters,sourceSpan:new h(e.parameters[0].sourceSpan.start,F(0,e.parameters,-1).sourceSpan.end)}}}function gl(e){e.kind==="letDeclaration"&&(e.kind="angularLetDeclaration",e.id=e.name,e.init={kind:"angularLetDeclarationInitializer",sourceSpan:new h(e.valueSpan.start,e.valueSpan.end),value:e.value},delete e.name,delete e.value)}function _l(e){e.kind==="expansion"&&(e.kind="angularIcuExpression"),e.kind==="expansionCase"&&(e.kind="angularIcuCase")}function Cs(e,t){let r=e.toLowerCase();return t(r)?r:e}function vs(e){let t=e.name.startsWith(":")?e.name.slice(1).split(":")[0]:null,r=e.nameSpan.toString(),n=t!==null&&r.startsWith(`${t}:`),i=n?r.slice(t.length+1):r;e.name=i,e.namespace=t,e.hasExplicitNamespace=n}function Sl(e){switch(e.kind){case"element":vs(e);for(let t of e.attrs)vs(t),t.valueSpan?(t.value=t.valueSpan.toString(),/["']/u.test(t.value[0])&&(t.value=t.value.slice(1,-1))):t.value=null;break;case"comment":e.value=e.sourceSpan.toString().slice(4,-3);break;case"text":e.value=e.sourceSpan.toString();break}}function El(e,t){if(e.kind==="element"){let r=Be(t.isTagNameCaseSensitive?e.name:e.name.toLowerCase());!e.namespace||e.namespace===r.implicitNamespacePrefix||ue(e)?e.tagDefinition=r:e.tagDefinition=Be("")}}function Cl(e){e.sourceSpan&&e.endSourceSpan&&(e.sourceSpan=new h(e.sourceSpan.start,e.endSourceSpan.end))}function vl(e,t){if(e.kind==="element"&&(t.normalizeTagName&&(!e.namespace||e.namespace===e.tagDefinition.implicitNamespacePrefix||ue(e))&&(e.name=Cs(e.name,r=>_s.has(r))),t.normalizeAttributeName))for(let r of e.attrs)r.namespace||(r.name=Cs(r.name,n=>Zt.has(e.name)&&(Zt.get("*").has(n)||Zt.get(e.name).has(n))))}function Xr(e,t){let{rootNodes:r,errors:n}=Qt(e,Gr(t));return n.length>0&&jr(n[0]),{parseOptions:t,rootNodes:r}}function bs(e,t){let r=Gr(t),{rootNodes:n,errors:i}=Qt(e,r);if(n.some(u=>u.kind==="docType"&&u.value==="html"||u.kind==="element"&&u.name.toLowerCase()==="html"))return Xr(e,rr);let a,o=()=>a??(a=Qt(e,{...r,getTagContentType:void 0})),c=u=>{let{offset:p}=u.startSourceSpan.start;return o().rootNodes.find(d=>d.kind==="element"&&d.startSourceSpan.start.offset===p)??u};for(let[u,p]of n.entries())if(p.kind==="element"){if(p.isVoid)i=o().errors,n[u]=c(p);else if(Tl(p)){let{endSourceSpan:d,startSourceSpan:S}=p,m=o().errors.find(g=>g.span.start.offset>S.start.offset&&g.span.start.offset<d.end.offset);m&&jr(m),n[u]=c(p)}}return i.length>0&&jr(i[0]),{parseOptions:t,rootNodes:n}}function Tl(e){if(e.kind!=="element"||e.name!=="template")return!1;let t=e.attrs.find(r=>r.name==="lang")?.value;return!t||t==="html"}function jr(e){let{msg:t,span:{start:r,end:n}}=e;throw gs(t,{loc:{start:{line:r.line+1,column:r.col+1},end:{line:n.line+1,column:n.col+1}},cause:e})}function bl(e,t,r,n,i,s){let{offset:a}=n,o=w(0,t.slice(0,a),/[^\n]/gu," ")+r,c=Kr(o,e,{...i,shouldParseFrontMatter:!1},s);c.sourceSpan=new h(n,F(0,c.children,-1).sourceSpan.end);let u=c.children[0];return u.length===a?c.children.shift():(u.sourceSpan=new h(u.sourceSpan.start.moveBy(a),u.sourceSpan.end),u.value=u.value.slice(a)),c}function Kr(e,t,r,n={}){let{frontMatter:i,content:s}=r.shouldParseFrontMatter?pr(e):{content:e},a=new mt(e,n.filepath),o=new qe(a,0,0,0),c=o.moveBy(e.length),{parseOptions:u,rootNodes:p}=t(s,r),d={kind:"root",sourceSpan:new h(o,c),children:p},S;if(i){let[g,E]=[i.start,i.end].map(P=>new qe(a,P.index,P.line-1,P.column));S={...i,kind:"frontMatter",sourceSpan:new h(g,E)}}return Ts(d,S,u,(g,E)=>bl(t,e,g,E,u,n))}var rr=Jt({name:"html",normalizeTagName:!0,normalizeAttributeName:!0,allowHtmComponentClosingTags:!0});function gt(e){let t=Jt(e),r=t.name==="vue"?bs:Xr;return{parse:(n,i)=>Kr(n,r,t,i),hasPragma:vi,hasIgnorePragma:Ti,astFormat:"html",locStart:Q,locEnd:te}}var wl=gt(rr),kl=new Set(["mj-style","mj-raw"]),xl=gt({...rr,name:"mjml",shouldParseAsRawText:e=>kl.has(e)}),Al=gt({name:"angular",tokenizeAngularBlocks:!0,tokenizeAngularLetDeclaration:!0}),yl=gt({name:"vue",isTagNameCaseSensitive:!0,shouldParseAsRawText(e,t,r,n){return e.toLowerCase()!=="html"&&!r&&(e!=="template"||n.some(({name:i,value:s})=>i==="lang"&&s!=="html"&&s!==""&&s!==void 0))}}),Nl=gt({name:"lwc",canSelfClose:!1});var Ll={html:hs};

;// CONCATENATED MODULE: ./node_modules/prettier/standalone.mjs
var standalone_Zn=Object.create;var standalone_Mt=Object.defineProperty;var standalone_eo=Object.getOwnPropertyDescriptor;var standalone_to=Object.getOwnPropertyNames;var uo=Object.getPrototypeOf,standalone_ro=Object.prototype.hasOwnProperty;var standalone_no=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Yt=(e,t)=>{for(var u in t)standalone_Mt(e,u,{get:t[u],enumerable:!0})},standalone_oo=(e,t,u,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of standalone_to(t))!standalone_ro.call(e,o)&&o!==u&&standalone_Mt(e,o,{get:()=>t[o],enumerable:!(r=standalone_eo(t,o))||r.enumerable});return e};var standalone_ao=(e,t,u)=>(u=e!=null?standalone_Zn(uo(e)):{},standalone_oo(t||!e||!e.__esModule?standalone_Mt(u,"default",{value:e,enumerable:!0}):u,e));var standalone_dn=standalone_no((of,ln)=>{var yt,bt,At,_t,xt,$e,bu,Ke,Bt,cn,Tt,Ve,Nt,St,wt,pe,fn,Ot,Pt,Aa;Nt=/\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]|[^\/\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;Ve=/--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;yt=/(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;wt=/(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y;Tt=/(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;pe=/[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y;Pt=/[\t\v\f\ufeff\p{Zs}]+/yu;Ke=/\r?\n|[\r\u2028\u2029]/y;Bt=/\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y;St=/\/\/.*/y;At=/[<>.:={}]|\/(?![\/*])/y;bt=/[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;_t=/(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y;xt=/[^<>{}]+/y;Ot=/^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;fn=/^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;$e=/^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;bu=/^(?:return|throw|yield)$/;cn=RegExp(Ke.source);ln.exports=Aa=function*(e,{jsx:t=!1}={}){var u,r,o,n,a,s,i,D,f,l,d,c,p,F;for({length:s}=e,n=0,a="",F=[{tag:"JS"}],u=[],d=0,c=!1;n<s;){switch(D=F[F.length-1],D.tag){case"JS":case"JSNonExpressionParen":case"InterpolationInTemplate":case"InterpolationInJSX":if(e[n]==="/"&&(Ot.test(a)||$e.test(a))&&(Nt.lastIndex=n,i=Nt.exec(e))){n=Nt.lastIndex,a=i[0],c=!0,yield{type:"RegularExpressionLiteral",value:i[0],closed:i[1]!==void 0&&i[1]!=="\\"};continue}if(Ve.lastIndex=n,i=Ve.exec(e)){switch(p=i[0],f=Ve.lastIndex,l=p,p){case"(":a==="?NonExpressionParenKeyword"&&F.push({tag:"JSNonExpressionParen",nesting:d}),d++,c=!1;break;case")":d--,c=!0,D.tag==="JSNonExpressionParen"&&d===D.nesting&&(F.pop(),l="?NonExpressionParenEnd",c=!1);break;case"{":Ve.lastIndex=0,o=!fn.test(a)&&(Ot.test(a)||$e.test(a)),u.push(o),c=!1;break;case"}":switch(D.tag){case"InterpolationInTemplate":if(u.length===D.nesting){pe.lastIndex=n,i=pe.exec(e),n=pe.lastIndex,a=i[0],i[1]==="${"?(a="?InterpolationInTemplate",c=!1,yield{type:"TemplateMiddle",value:i[0]}):(F.pop(),c=!0,yield{type:"TemplateTail",value:i[0],closed:i[1]==="`"});continue}break;case"InterpolationInJSX":if(u.length===D.nesting){F.pop(),n+=1,a="}",yield{type:"JSXPunctuator",value:"}"};continue}}c=u.pop(),l=c?"?ExpressionBraceEnd":"}";break;case"]":c=!0;break;case"++":case"--":l=c?"?PostfixIncDec":"?UnaryIncDec";break;case"<":if(t&&(Ot.test(a)||$e.test(a))){F.push({tag:"JSXTag"}),n+=1,a="<",yield{type:"JSXPunctuator",value:p};continue}c=!1;break;default:c=!1}n=f,a=l,yield{type:"Punctuator",value:p};continue}if(yt.lastIndex=n,i=yt.exec(e)){switch(n=yt.lastIndex,l=i[0],i[0]){case"for":case"if":case"while":case"with":a!=="."&&a!=="?."&&(l="?NonExpressionParenKeyword")}a=l,c=!$e.test(i[0]),yield{type:i[1]==="#"?"PrivateIdentifier":"IdentifierName",value:i[0]};continue}if(wt.lastIndex=n,i=wt.exec(e)){n=wt.lastIndex,a=i[0],c=!0,yield{type:"StringLiteral",value:i[0],closed:i[2]!==void 0};continue}if(Tt.lastIndex=n,i=Tt.exec(e)){n=Tt.lastIndex,a=i[0],c=!0,yield{type:"NumericLiteral",value:i[0]};continue}if(pe.lastIndex=n,i=pe.exec(e)){n=pe.lastIndex,a=i[0],i[1]==="${"?(a="?InterpolationInTemplate",F.push({tag:"InterpolationInTemplate",nesting:u.length}),c=!1,yield{type:"TemplateHead",value:i[0]}):(c=!0,yield{type:"NoSubstitutionTemplate",value:i[0],closed:i[1]==="`"});continue}break;case"JSXTag":case"JSXTagEnd":if(At.lastIndex=n,i=At.exec(e)){switch(n=At.lastIndex,l=i[0],i[0]){case"<":F.push({tag:"JSXTag"});break;case">":F.pop(),a==="/"||D.tag==="JSXTagEnd"?(l="?JSX",c=!0):F.push({tag:"JSXChildren"});break;case"{":F.push({tag:"InterpolationInJSX",nesting:u.length}),l="?InterpolationInJSX",c=!1;break;case"/":a==="<"&&(F.pop(),F[F.length-1].tag==="JSXChildren"&&F.pop(),F.push({tag:"JSXTagEnd"}))}a=l,yield{type:"JSXPunctuator",value:i[0]};continue}if(bt.lastIndex=n,i=bt.exec(e)){n=bt.lastIndex,a=i[0],yield{type:"JSXIdentifier",value:i[0]};continue}if(_t.lastIndex=n,i=_t.exec(e)){n=_t.lastIndex,a=i[0],yield{type:"JSXString",value:i[0],closed:i[2]!==void 0};continue}break;case"JSXChildren":if(xt.lastIndex=n,i=xt.exec(e)){n=xt.lastIndex,a=i[0],yield{type:"JSXText",value:i[0]};continue}switch(e[n]){case"<":F.push({tag:"JSXTag"}),n++,a="<",yield{type:"JSXPunctuator",value:"<"};continue;case"{":F.push({tag:"InterpolationInJSX",nesting:u.length}),n++,a="?InterpolationInJSX",c=!1,yield{type:"JSXPunctuator",value:"{"};continue}}if(Pt.lastIndex=n,i=Pt.exec(e)){n=Pt.lastIndex,yield{type:"WhiteSpace",value:i[0]};continue}if(Ke.lastIndex=n,i=Ke.exec(e)){n=Ke.lastIndex,c=!1,bu.test(a)&&(a="?NoLineTerminatorHere"),yield{type:"LineTerminatorSequence",value:i[0]};continue}if(Bt.lastIndex=n,i=Bt.exec(e)){n=Bt.lastIndex,cn.test(i[0])&&(c=!1,bu.test(a)&&(a="?NoLineTerminatorHere")),yield{type:"MultiLineComment",value:i[0],closed:i[1]!==void 0};continue}if(St.lastIndex=n,i=St.exec(e)){n=St.lastIndex,c=!1,yield{type:"SingleLineComment",value:i[0]};continue}r=String.fromCodePoint(e.codePointAt(n)),n+=r.length,a=r,c=!1,yield{type:D.tag.startsWith("JSX")?"JSXInvalid":"Invalid",value:r}}}});var standalone_Hn={};Yt(standalone_Hn,{__debug:()=>standalone_li,check:()=>standalone_ci,doc:()=>wu,format:()=>standalone_Jn,formatWithCursor:()=>standalone_zn,getSupportInfo:()=>standalone_fi,util:()=>Pu,version:()=>standalone_Mn});var standalone_X=(e,t)=>(u,r,...o)=>u|1&&r==null?void 0:(t.call(r)??r[e]).apply(r,o);var standalone_io=String.prototype.replaceAll??function(e,t){return e.global?this.replace(e,t):this.split(e).join(t)},standalone_so=standalone_X("replaceAll",function(){if(typeof this=="string")return standalone_io}),standalone_oe=standalone_so;var standalone_Ne=class{diff(t,u,r={}){let o;typeof r=="function"?(o=r,r={}):"callback"in r&&(o=r.callback);let n=this.castInput(t,r),a=this.castInput(u,r),s=this.removeEmpty(this.tokenize(n,r)),i=this.removeEmpty(this.tokenize(a,r));return this.diffWithOptionsObj(s,i,r,o)}diffWithOptionsObj(t,u,r,o){var n;let a=m=>{if(m=this.postProcess(m,r),o){setTimeout(function(){o(m)},0);return}else return m},s=u.length,i=t.length,D=1,f=s+i;r.maxEditLength!=null&&(f=Math.min(f,r.maxEditLength));let l=(n=r.timeout)!==null&&n!==void 0?n:1/0,d=Date.now()+l,c=[{oldPos:-1,lastComponent:void 0}],p=this.extractCommon(c[0],u,t,0,r);if(c[0].oldPos+1>=i&&p+1>=s)return a(this.buildValues(c[0].lastComponent,u,t));let F=-1/0,C=1/0,y=()=>{for(let m=Math.max(F,-D);m<=Math.min(C,D);m+=2){let h,E=c[m-1],g=c[m+1];E&&(c[m-1]=void 0);let A=!1;if(g){let Q=g.oldPos-m;A=g&&0<=Q&&Q<s}let J=E&&E.oldPos+1<i;if(!A&&!J){c[m]=void 0;continue}if(!J||A&&E.oldPos<g.oldPos?h=this.addToPath(g,!0,!1,0,r):h=this.addToPath(E,!1,!0,1,r),p=this.extractCommon(h,u,t,m,r),h.oldPos+1>=i&&p+1>=s)return a(this.buildValues(h.lastComponent,u,t))||!0;c[m]=h,h.oldPos+1>=i&&(C=Math.min(C,m-1)),p+1>=s&&(F=Math.max(F,m+1))}D++};if(o)(function m(){setTimeout(function(){if(D>f||Date.now()>d)return o(void 0);y()||m()},0)})();else for(;D<=f&&Date.now()<=d;){let m=y();if(m)return m}}addToPath(t,u,r,o,n){let a=t.lastComponent;return a&&!n.oneChangePerToken&&a.added===u&&a.removed===r?{oldPos:t.oldPos+o,lastComponent:{count:a.count+1,added:u,removed:r,previousComponent:a.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:u,removed:r,previousComponent:a}}}extractCommon(t,u,r,o,n){let a=u.length,s=r.length,i=t.oldPos,D=i-o,f=0;for(;D+1<a&&i+1<s&&this.equals(r[i+1],u[D+1],n);)D++,i++,f++,n.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return f&&!n.oneChangePerToken&&(t.lastComponent={count:f,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=i,D}equals(t,u,r){return r.comparator?r.comparator(t,u):t===u||!!r.ignoreCase&&t.toLowerCase()===u.toLowerCase()}removeEmpty(t){let u=[];for(let r=0;r<t.length;r++)t[r]&&u.push(t[r]);return u}castInput(t,u){return t}tokenize(t,u){return Array.from(t)}join(t){return t.join("")}postProcess(t,u){return t}get useLongestToken(){return!1}buildValues(t,u,r){let o=[],n;for(;t;)o.push(t),n=t.previousComponent,delete t.previousComponent,t=n;o.reverse();let a=o.length,s=0,i=0,D=0;for(;s<a;s++){let f=o[s];if(f.removed)f.value=this.join(r.slice(D,D+f.count)),D+=f.count;else{if(!f.added&&this.useLongestToken){let l=u.slice(i,i+f.count);l=l.map(function(d,c){let p=r[D+c];return p.length>d.length?p:d}),f.value=this.join(l)}else f.value=this.join(u.slice(i,i+f.count));i+=f.count,f.added||(D+=f.count)}}return o}};var jt=class extends standalone_Ne{tokenize(t){return t.slice()}join(t){return t}removeEmpty(t){return t}},ku=new jt;function standalone_Ut(e,t,u){return ku.diff(e,t,u)}var standalone_Do=()=>{},P=standalone_Do;var Ru="cr",Lu="crlf",standalone_co="lf",fo=standalone_co,standalone_Wt="\r",Mu=`\r
`,standalone_Je=`
`,standalone_lo=standalone_Je;function Yu(e){let t=e.indexOf(standalone_Wt);return t!==-1?e.charAt(t+1)===standalone_Je?Lu:Ru:fo}function standalone_Se(e){return e===Ru?standalone_Wt:e===Lu?Mu:standalone_lo}var po=new Map([[standalone_Je,/\n/gu],[standalone_Wt,/\r/gu],[Mu,/\r\n/gu]]);function $t(e,t){let u=po.get(t);return e.match(u)?.length??0}var standalone_Fo=/\r\n?/gu;function ju(e){return standalone_oe(0,e,standalone_Fo,standalone_Je)}function mo(e){return this[e<0?this.length+e:e]}var Eo=standalone_X("at",function(){if(Array.isArray(this)||typeof this=="string")return mo}),standalone_b=Eo;var standalone_G="string",standalone_j="array",standalone_U="cursor",standalone_I="indent",standalone_k="align",standalone_v="trim",standalone_x="group",standalone_w="fill",B="if-break",standalone_R="indent-if-break",standalone_L="line-suffix",M="line-suffix-boundary",standalone_="line",standalone_O="label",standalone_T="break-parent",He=new Set([standalone_U,standalone_I,standalone_k,standalone_v,standalone_x,standalone_w,B,standalone_R,standalone_L,M,standalone_,standalone_O,standalone_T]);function Uu(e){let t=e.length;for(;t>0&&(e[t-1]==="\r"||e[t-1]===`
`);)t--;return t<e.length?e.slice(0,t):e}function Co(e){if(typeof e=="string")return standalone_G;if(Array.isArray(e))return standalone_j;if(!e)return;let{type:t}=e;if(He.has(t))return t}var standalone_H=Co;var ho=e=>new Intl.ListFormat("en-US",{type:"disjunction"}).format(e);function go(e){let t=e===null?"null":typeof e;if(t!=="string"&&t!=="object")return`Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;if(standalone_H(e))throw new Error("doc is valid.");let u=Object.prototype.toString.call(e);if(u!=="[object Object]")return`Unexpected doc '${u}'.`;let r=ho([...He].map(o=>`'${o}'`));return`Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`}var standalone_Vt=class extends Error{name="InvalidDocError";constructor(t){super(go(t)),this.doc=t}},Z=standalone_Vt;var Wu={};function yo(e,t,u,r){let o=[e];for(;o.length>0;){let n=o.pop();if(n===Wu){u(o.pop());continue}u&&o.push(n,Wu);let a=standalone_H(n);if(!a)throw new Z(n);if(t?.(n)!==!1)switch(a){case standalone_j:case standalone_w:{let s=a===standalone_j?n:n.parts;for(let i=s.length,D=i-1;D>=0;--D)o.push(s[D]);break}case B:o.push(n.flatContents,n.breakContents);break;case standalone_x:if(r&&n.expandedStates)for(let s=n.expandedStates.length,i=s-1;i>=0;--i)o.push(n.expandedStates[i]);else o.push(n.contents);break;case standalone_k:case standalone_I:case standalone_R:case standalone_O:case standalone_L:o.push(n.contents);break;case standalone_G:case standalone_U:case standalone_v:case M:case standalone_:case standalone_T:break;default:throw new Z(n)}}}var standalone_we=yo;function standalone_Pe(e,t){if(typeof e=="string")return t(e);let u=new Map;return r(e);function r(n){if(u.has(n))return u.get(n);let a=o(n);return u.set(n,a),a}function o(n){switch(standalone_H(n)){case standalone_j:return t(n.map(r));case standalone_w:return t({...n,parts:n.parts.map(r)});case B:return t({...n,breakContents:r(n.breakContents),flatContents:r(n.flatContents)});case standalone_x:{let{expandedStates:a,contents:s}=n;return a?(a=a.map(r),s=a[0]):s=r(s),t({...n,contents:s,expandedStates:a})}case standalone_k:case standalone_I:case standalone_R:case standalone_O:case standalone_L:return t({...n,contents:r(n.contents)});case standalone_G:case standalone_U:case standalone_v:case M:case standalone_:case standalone_T:return t(n);default:throw new Z(n)}}}function standalone_Xe(e,t,u){let r=u,o=!1;function n(a){if(o)return!1;let s=t(a);s!==void 0&&(o=!0,r=s)}return standalone_we(e,n),r}function bo(e){if(e.type===standalone_x&&e.break||e.type===standalone_&&e.hard||e.type===standalone_T)return!0}function Ku(e){return standalone_Xe(e,bo,!1)}function $u(e){if(e.length>0){let t=standalone_b(0,e,-1);!t.expandedStates&&!t.break&&(t.break="propagated")}return null}function Gu(e){let t=new Set,u=[];function r(n){if(n.type===standalone_T&&$u(u),n.type===standalone_x){if(u.push(n),t.has(n))return!1;t.add(n)}}function o(n){n.type===standalone_x&&u.pop().break&&$u(u)}standalone_we(e,r,o,!0)}function Ao(e){return e.type===standalone_&&!e.hard?e.soft?"":" ":e.type===B?e.flatContents:e}function zu(e){return standalone_Pe(e,Ao)}function Vu(e){for(e=[...e];e.length>=2&&standalone_b(0,e,-2).type===standalone_&&standalone_b(0,e,-1).type===standalone_T;)e.length-=2;if(e.length>0){let t=standalone_Oe(standalone_b(0,e,-1));e[e.length-1]=t}return e}function standalone_Oe(e){switch(standalone_H(e)){case standalone_I:case standalone_R:case standalone_x:case standalone_L:case standalone_O:{let t=standalone_Oe(e.contents);return{...e,contents:t}}case B:return{...e,breakContents:standalone_Oe(e.breakContents),flatContents:standalone_Oe(e.flatContents)};case standalone_w:return{...e,parts:Vu(e.parts)};case standalone_j:return Vu(e);case standalone_G:return Uu(e);case standalone_k:case standalone_U:case standalone_v:case M:case standalone_:case standalone_T:break;default:throw new Z(e)}return e}function standalone_qe(e){return standalone_Oe(xo(e))}function _o(e){switch(standalone_H(e)){case standalone_w:if(e.parts.every(t=>t===""))return"";break;case standalone_x:if(!e.contents&&!e.id&&!e.break&&!e.expandedStates)return"";if(e.contents.type===standalone_x&&e.contents.id===e.id&&e.contents.break===e.break&&e.contents.expandedStates===e.expandedStates)return e.contents;break;case standalone_k:case standalone_I:case standalone_R:case standalone_L:if(!e.contents)return"";break;case B:if(!e.flatContents&&!e.breakContents)return"";break;case standalone_j:{let t=[];for(let u of e){if(!u)continue;let[r,...o]=Array.isArray(u)?u:[u];typeof r=="string"&&typeof standalone_b(0,t,-1)=="string"?t[t.length-1]+=r:t.push(r),t.push(...o)}return t.length===0?"":t.length===1?t[0]:t}case standalone_G:case standalone_U:case standalone_v:case M:case standalone_:case standalone_O:case standalone_T:break;default:throw new Z(e)}return e}function xo(e){return standalone_Pe(e,t=>_o(t))}function Ju(e,t=standalone_Qe){return standalone_Pe(e,u=>typeof u=="string"?standalone_Ie(t,u.split(`
`)):u)}function standalone_Bo(e){if(e.type===standalone_)return!0}function Hu(e){return standalone_Xe(e,standalone_Bo,!1)}function standalone_Ee(e,t){return e.type===standalone_O?{...e,contents:t(e.contents)}:t(e)}var standalone_N=P,standalone_Ze=P,Xu=P,qu=P;function ae(e){return standalone_N(e),{type:standalone_I,contents:e}}function standalone_De(e,t){return qu(e),standalone_N(t),{type:standalone_k,contents:t,n:e}}function Qu(e){return standalone_De(Number.NEGATIVE_INFINITY,e)}function standalone_et(e){return standalone_De({type:"root"},e)}function Zu(e){return standalone_De(-1,e)}function standalone_tt(e,t,u){standalone_N(e);let r=e;if(t>0){for(let o=0;o<Math.floor(t/u);++o)r=ae(r);r=standalone_De(t%u,r),r=standalone_De(Number.NEGATIVE_INFINITY,r)}return r}var standalone_ce={type:standalone_T};var ee={type:standalone_U};function standalone_er(e){return Xu(e),{type:standalone_w,parts:e}}function Kt(e,t={}){return standalone_N(e),standalone_Ze(t.expandedStates,!0),{type:standalone_x,id:t.id,contents:e,break:!!t.shouldBreak,expandedStates:t.expandedStates}}function standalone_tr(e,t){return Kt(e[0],{...t,expandedStates:e})}function standalone_ur(e,t="",u={}){return standalone_N(e),t!==""&&standalone_N(t),{type:B,breakContents:e,flatContents:t,groupId:u.groupId}}function standalone_rr(e,t){return standalone_N(e),{type:standalone_R,contents:e,groupId:t.groupId,negate:t.negate}}function standalone_Ie(e,t){standalone_N(e),standalone_Ze(t);let u=[];for(let r=0;r<t.length;r++)r!==0&&u.push(e),u.push(t[r]);return u}function nr(e,t){return standalone_N(t),e?{type:standalone_O,label:e,contents:t}:t}var standalone_ut={type:standalone_},standalone_or={type:standalone_,soft:!0},ke={type:standalone_,hard:!0},standalone_V=[ke,standalone_ce],Gt={type:standalone_,hard:!0,literal:!0},standalone_Qe=[Gt,standalone_ce];function standalone_ve(e){return standalone_N(e),{type:standalone_L,contents:e}}var standalone_ar={type:M};var standalone_ir={type:standalone_v};function standalone_te(e){if(!e)return"";if(Array.isArray(e)){let t=[];for(let u of e)if(Array.isArray(u))t.push(...standalone_te(u));else{let r=standalone_te(u);r!==""&&t.push(r)}return t}return e.type===B?{...e,breakContents:standalone_te(e.breakContents),flatContents:standalone_te(e.flatContents)}:e.type===standalone_x?{...e,contents:standalone_te(e.contents),expandedStates:e.expandedStates?.map(standalone_te)}:e.type===standalone_w?{type:"fill",parts:e.parts.map(standalone_te)}:e.contents?{...e,contents:standalone_te(e.contents)}:e}function standalone_sr(e){let t=Object.create(null),u=new Set;return r(standalone_te(e));function r(n,a,s){if(typeof n=="string")return JSON.stringify(n);if(Array.isArray(n)){let i=n.map(r).filter(Boolean);return i.length===1?i[0]:`[${i.join(", ")}]`}if(n.type===standalone_){let i=s?.[a+1]?.type===standalone_T;return n.literal?i?"literalline":"literallineWithoutBreakParent":n.hard?i?"hardline":"hardlineWithoutBreakParent":n.soft?"softline":"line"}if(n.type===standalone_T)return s?.[a-1]?.type===standalone_&&s[a-1].hard?void 0:"breakParent";if(n.type===standalone_v)return"trim";if(n.type===standalone_I)return"indent("+r(n.contents)+")";if(n.type===standalone_k)return n.n===Number.NEGATIVE_INFINITY?"dedentToRoot("+r(n.contents)+")":n.n<0?"dedent("+r(n.contents)+")":n.n.type==="root"?"markAsRoot("+r(n.contents)+")":"align("+JSON.stringify(n.n)+", "+r(n.contents)+")";if(n.type===B)return"ifBreak("+r(n.breakContents)+(n.flatContents?", "+r(n.flatContents):"")+(n.groupId?(n.flatContents?"":', ""')+`, { groupId: ${o(n.groupId)} }`:"")+")";if(n.type===standalone_R){let i=[];n.negate&&i.push("negate: true"),n.groupId&&i.push(`groupId: ${o(n.groupId)}`);let D=i.length>0?`, { ${i.join(", ")} }`:"";return`indentIfBreak(${r(n.contents)}${D})`}if(n.type===standalone_x){let i=[];n.break&&n.break!=="propagated"&&i.push("shouldBreak: true"),n.id&&i.push(`id: ${o(n.id)}`);let D=i.length>0?`, { ${i.join(", ")} }`:"";return n.expandedStates?`conditionalGroup([${n.expandedStates.map(f=>r(f)).join(",")}]${D})`:`group(${r(n.contents)}${D})`}if(n.type===standalone_w)return`fill([${n.parts.map(i=>r(i)).join(", ")}])`;if(n.type===standalone_L)return"lineSuffix("+r(n.contents)+")";if(n.type===M)return"lineSuffixBoundary";if(n.type===standalone_O)return`label(${JSON.stringify(n.label)}, ${r(n.contents)})`;if(n.type===standalone_U)return"cursor";throw new Error("Unknown doc type "+n.type)}function o(n){if(typeof n!="symbol")return JSON.stringify(String(n));if(n in t)return t[n];let a=n.description||"symbol";for(let s=0;;s++){let i=a+(s>0?` #${s}`:"");if(!u.has(i))return u.add(i),t[n]=`Symbol.for(${JSON.stringify(i)})`}}}var Dr=()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;function standalone_zt(e){return e===12288||e>=65281&&e<=65376||e>=65504&&e<=65510}function standalone_Jt(e){return e>=4352&&e<=4447||e===8986||e===8987||e===9001||e===9002||e>=9193&&e<=9196||e===9200||e===9203||e===9725||e===9726||e===9748||e===9749||e>=9776&&e<=9783||e>=9800&&e<=9811||e===9855||e>=9866&&e<=9871||e===9875||e===9889||e===9898||e===9899||e===9917||e===9918||e===9924||e===9925||e===9934||e===9940||e===9962||e===9970||e===9971||e===9973||e===9978||e===9981||e===9989||e===9994||e===9995||e===10024||e===10060||e===10062||e>=10067&&e<=10069||e===10071||e>=10133&&e<=10135||e===10160||e===10175||e===11035||e===11036||e===11088||e===11093||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12773||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||e>=94192&&e<=94198||e>=94208&&e<=101589||e>=101631&&e<=101662||e>=101760&&e<=101874||e>=110576&&e<=110579||e>=110581&&e<=110587||e===110589||e===110590||e>=110592&&e<=110882||e===110898||e>=110928&&e<=110930||e===110933||e>=110948&&e<=110951||e>=110960&&e<=111355||e>=119552&&e<=119638||e>=119648&&e<=119670||e===126980||e===127183||e===127374||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||e===127568||e===127569||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||e===127988||e>=127992&&e<=128062||e===128064||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||e===128378||e===128405||e===128406||e===128420||e>=128507&&e<=128591||e>=128640&&e<=128709||e===128716||e>=128720&&e<=128722||e>=128725&&e<=128728||e>=128732&&e<=128735||e===128747||e===128748||e>=128756&&e<=128764||e>=128992&&e<=129003||e===129008||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129674||e>=129678&&e<=129734||e===129736||e>=129741&&e<=129756||e>=129759&&e<=129770||e>=129775&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}var standalone_cr="\xA9\xAE\u203C\u2049\u2122\u2139\u2194\u2195\u2196\u2197\u2198\u2199\u21A9\u21AA\u2328\u23CF\u23F1\u23F2\u23F8\u23F9\u23FA\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600\u2601\u2602\u2603\u2604\u260E\u2611\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694\u2695\u2696\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F1\u26F7\u26F8\u26F9\u2702\u2708\u2709\u270C\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u2764\u27A1\u2934\u2935\u2B05\u2B06\u2B07";var To=/[^\x20-\x7F]/u,No=new Set(standalone_cr);function So(e){if(!e)return 0;if(!To.test(e))return e.length;e=e.replace(Dr(),u=>No.has(u)?" ":"  ");let t=0;for(let u of e){let r=u.codePointAt(0);r<=31||r>=127&&r<=159||r>=768&&r<=879||r>=65024&&r<=65039||(t+=standalone_zt(r)||standalone_Jt(r)?2:1)}return t}var standalone_Re=So;var wo={type:0},standalone_Oo={type:1},standalone_Ht={value:"",length:0,queue:[],get root(){return standalone_Ht}};function standalone_fr(e,t,u){let r=t.type===1?e.queue.slice(0,-1):[...e.queue,t],o="",n=0,a=0,s=0;for(let p of r)switch(p.type){case 0:f(),u.useTabs?i(1):D(u.tabWidth);break;case 3:{let{string:F}=p;f(),o+=F,n+=F.length;break}case 2:{let{width:F}=p;a+=1,s+=F;break}default:throw new Error(`Unexpected indent comment '${p.type}'.`)}return d(),{...e,value:o,length:n,queue:r};function i(p){o+="	".repeat(p),n+=u.tabWidth*p}function D(p){o+=" ".repeat(p),n+=p}function f(){u.useTabs?l():d()}function l(){a>0&&i(a),c()}function d(){s>0&&D(s),c()}function c(){a=0,s=0}}function standalone_lr(e,t,u){if(!t)return e;if(t.type==="root")return{...e,root:e};if(t===Number.NEGATIVE_INFINITY)return e.root;let r;return typeof t=="number"?t<0?r=standalone_Oo:r={type:2,width:t}:r={type:3,string:t},standalone_fr(e,r,u)}function standalone_dr(e,t){return standalone_fr(e,wo,t)}function standalone_Po(e){let t=0;for(let u=e.length-1;u>=0;u--){let r=e[u];if(r===" "||r==="	")t++;else break}return t}function Xt(e){let t=standalone_Po(e);return{text:t===0?e:e.slice(0,e.length-t),count:t}}var standalone_W=Symbol("MODE_BREAK"),standalone_q=Symbol("MODE_FLAT"),standalone_qt=Symbol("DOC_FILL_PRINTED_LENGTH");function standalone_rt(e,t,u,r,o,n){if(u===Number.POSITIVE_INFINITY)return!0;let a=t.length,s=!1,i=[e],D="";for(;u>=0;){if(i.length===0){if(a===0)return!0;i.push(t[--a]);continue}let{mode:f,doc:l}=i.pop(),d=standalone_H(l);switch(d){case standalone_G:l&&(s&&(D+=" ",u-=1,s=!1),D+=l,u-=standalone_Re(l));break;case standalone_j:case standalone_w:{let c=d===standalone_j?l:l.parts,p=l[standalone_qt]??0;for(let F=c.length-1;F>=p;F--)i.push({mode:f,doc:c[F]});break}case standalone_I:case standalone_k:case standalone_R:case standalone_O:i.push({mode:f,doc:l.contents});break;case standalone_v:{let{text:c,count:p}=Xt(D);D=c,u+=p;break}case standalone_x:{if(n&&l.break)return!1;let c=l.break?standalone_W:f,p=l.expandedStates&&c===standalone_W?standalone_b(0,l.expandedStates,-1):l.contents;i.push({mode:c,doc:p});break}case B:{let p=(l.groupId?o[l.groupId]||standalone_q:f)===standalone_W?l.breakContents:l.flatContents;p&&i.push({mode:f,doc:p});break}case standalone_:if(f===standalone_W||l.hard)return!0;l.soft||(s=!0);break;case standalone_L:r=!0;break;case M:if(r)return!1;break}}return!1}function standalone_Ce(e,t){let u=Object.create(null),r=t.printWidth,o=standalone_Se(t.endOfLine),n=0,a=[{indent:standalone_Ht,mode:standalone_W,doc:e}],s="",i=!1,D=[],f=[],l=[],d=[],c=0;for(Gu(e);a.length>0;){let{indent:m,mode:h,doc:E}=a.pop();switch(standalone_H(E)){case standalone_G:{let g=o!==`
`?standalone_oe(0,E,`
`,o):E;g&&(s+=g,a.length>0&&(n+=standalone_Re(g)));break}case standalone_j:for(let g=E.length-1;g>=0;g--)a.push({indent:m,mode:h,doc:E[g]});break;case standalone_U:if(f.length>=2)throw new Error("There are too many 'cursor' in doc.");f.push(c+s.length);break;case standalone_I:a.push({indent:standalone_dr(m,t),mode:h,doc:E.contents});break;case standalone_k:a.push({indent:standalone_lr(m,E.n,t),mode:h,doc:E.contents});break;case standalone_v:y();break;case standalone_x:switch(h){case standalone_q:if(!i){a.push({indent:m,mode:E.break?standalone_W:standalone_q,doc:E.contents});break}case standalone_W:{i=!1;let g={indent:m,mode:standalone_q,doc:E.contents},A=r-n,J=D.length>0;if(!E.break&&standalone_rt(g,a,A,J,u))a.push(g);else if(E.expandedStates){let Q=standalone_b(0,E.expandedStates,-1);if(E.break){a.push({indent:m,mode:standalone_W,doc:Q});break}else for(let re=1;re<E.expandedStates.length+1;re++)if(re>=E.expandedStates.length){a.push({indent:m,mode:standalone_W,doc:Q});break}else{let Te=E.expandedStates[re],ne={indent:m,mode:standalone_q,doc:Te};if(standalone_rt(ne,a,A,J,u)){a.push(ne);break}}}else a.push({indent:m,mode:standalone_W,doc:E.contents});break}}E.id&&(u[E.id]=standalone_b(0,a,-1).mode);break;case standalone_w:{let g=r-n,A=E[standalone_qt]??0,{parts:J}=E,Q=J.length-A;if(Q===0)break;let re=J[A+0],Te=J[A+1],ne={indent:m,mode:standalone_q,doc:re},vt={indent:m,mode:standalone_W,doc:re},Rt=standalone_rt(ne,[],g,D.length>0,u,!0);if(Q===1){Rt?a.push(ne):a.push(vt);break}let Iu={indent:m,mode:standalone_q,doc:Te},Lt={indent:m,mode:standalone_W,doc:Te};if(Q===2){Rt?a.push(Iu,ne):a.push(Lt,vt);break}let Xn=J[A+2],qn={indent:m,mode:h,doc:{...E,[standalone_qt]:A+2}},Qn=standalone_rt({indent:m,mode:standalone_q,doc:[re,Te,Xn]},[],g,D.length>0,u,!0);a.push(qn),Qn?a.push(Iu,ne):Rt?a.push(Lt,ne):a.push(Lt,vt);break}case B:case standalone_R:{let g=E.groupId?u[E.groupId]:h;if(g===standalone_W){let A=E.type===B?E.breakContents:E.negate?E.contents:ae(E.contents);A&&a.push({indent:m,mode:h,doc:A})}if(g===standalone_q){let A=E.type===B?E.flatContents:E.negate?ae(E.contents):E.contents;A&&a.push({indent:m,mode:h,doc:A})}break}case standalone_L:D.push({indent:m,mode:h,doc:E.contents});break;case M:D.length>0&&a.push({indent:m,mode:h,doc:ke});break;case standalone_:switch(h){case standalone_q:if(E.hard)i=!0;else{E.soft||(s+=" ",n+=1);break}case standalone_W:if(D.length>0){a.push({indent:m,mode:h,doc:E},...D.reverse()),D.length=0;break}E.literal?(s+=o,n=0,m.root&&(m.root.value&&(s+=m.root.value),n=m.root.length)):(y(),s+=o+m.value,n=m.length);break}break;case standalone_O:a.push({indent:m,mode:h,doc:E.contents});break;case standalone_T:break;default:throw new Z(E)}a.length===0&&D.length>0&&(a.push(...D.reverse()),D.length=0)}let p=l.join("")+s,F=[...d,...f];if(F.length!==2)return{formatted:p};let C=F[0];return{formatted:p,cursorNodeStart:C,cursorNodeText:p.slice(C,standalone_b(0,F,-1))};function y(){let{text:m,count:h}=Xt(s);m&&(l.push(m),c+=m.length),s="",n-=h,f.length>0&&(d.push(...f.map(E=>Math.min(E,c))),f.length=0)}}function standalone_Io(e,t,u=0){let r=0;for(let o=u;o<e.length;++o)e[o]==="	"?r=r+t-r%t:r++;return r}var standalone_he=standalone_Io;var standalone_Qt=class{constructor(t){this.stack=[t]}get key(){let{stack:t,siblings:u}=this;return standalone_b(0,t,u===null?-2:-4)??null}get index(){return this.siblings===null?null:standalone_b(0,this.stack,-2)}get node(){return standalone_b(0,this.stack,-1)}get parent(){return this.getNode(1)}get grandparent(){return this.getNode(2)}get isInArray(){return this.siblings!==null}get siblings(){let{stack:t}=this,u=standalone_b(0,t,-3);return Array.isArray(u)?u:null}get next(){let{siblings:t}=this;return t===null?null:t[this.index+1]}get previous(){let{siblings:t}=this;return t===null?null:t[this.index-1]}get isFirst(){return this.index===0}get isLast(){let{siblings:t,index:u}=this;return t!==null&&u===t.length-1}get isRoot(){return this.stack.length===1}get root(){return this.stack[0]}get ancestors(){return[...this.#e()]}getName(){let{stack:t}=this,{length:u}=t;return u>1?standalone_b(0,t,-2):null}getValue(){return standalone_b(0,this.stack,-1)}getNode(t=0){let u=this.#t(t);return u===-1?null:this.stack[u]}getParentNode(t=0){return this.getNode(t+1)}#t(t){let{stack:u}=this;for(let r=u.length-1;r>=0;r-=2)if(!Array.isArray(u[r])&&--t<0)return r;return-1}call(t,...u){let{stack:r}=this,{length:o}=r,n=standalone_b(0,r,-1);for(let a of u)n=n?.[a],r.push(a,n);try{return t(this)}finally{r.length=o}}callParent(t,u=0){let r=this.#t(u+1),o=this.stack.splice(r+1);try{return t(this)}finally{this.stack.push(...o)}}each(t,...u){let{stack:r}=this,{length:o}=r,n=standalone_b(0,r,-1);for(let a of u)n=n[a],r.push(a,n);try{for(let a=0;a<n.length;++a)r.push(a,n[a]),t(this,a,n),r.length-=2}finally{r.length=o}}map(t,...u){let r=[];return this.each((o,n,a)=>{r[n]=t(o,n,a)},...u),r}match(...t){let u=this.stack.length-1,r=null,o=this.stack[u--];for(let n of t){if(o===void 0)return!1;let a=null;if(typeof r=="number"&&(a=r,r=this.stack[u--],o=this.stack[u--]),n&&!n(o,r,a))return!1;r=this.stack[u--],o=this.stack[u--]}return!0}findAncestor(t){for(let u of this.#e())if(t(u))return u}hasAncestor(t){for(let u of this.#e())if(t(u))return!0;return!1}*#e(){let{stack:t}=this;for(let u=t.length-3;u>=0;u-=2){let r=t[u];Array.isArray(r)||(yield r)}}},standalone_pr=standalone_Qt;function ko(e){return e!==null&&typeof e=="object"}var standalone_ge=ko;function standalone_ye(e){return(t,u,r)=>{let o=!!r?.backwards;if(u===!1)return!1;let{length:n}=t,a=u;for(;a>=0&&a<n;){let s=t.charAt(a);if(e instanceof RegExp){if(!e.test(s))return a}else if(!e.includes(s))return a;o?a--:a++}return a===-1||a===n?a:!1}}var Fr=standalone_ye(/\s/u),standalone_Y=standalone_ye(" 	"),standalone_nt=standalone_ye(",; 	"),standalone_ot=standalone_ye(/[^\n\r]/u);var standalone_mr=e=>e===`
`||e==="\r"||e==="\u2028"||e==="\u2029";function vo(e,t,u){let r=!!u?.backwards;if(t===!1)return!1;let o=e.charAt(t);if(r){if(e.charAt(t-1)==="\r"&&o===`
`)return t-2;if(standalone_mr(o))return t-1}else{if(o==="\r"&&e.charAt(t+1)===`
`)return t+2;if(standalone_mr(o))return t+1}return t}var standalone_K=vo;function standalone_Ro(e,t,u={}){let r=standalone_Y(e,u.backwards?t-1:t,u),o=standalone_K(e,r,u);return r!==o}var z=standalone_Ro;function standalone_Lo(e){return Array.isArray(e)&&e.length>0}var standalone_Er=standalone_Lo;function*standalone_be(e,t){let{getVisitorKeys:u,filter:r=()=>!0}=t,o=n=>standalone_ge(n)&&r(n);for(let n of u(e)){let a=e[n];if(Array.isArray(a))for(let s of a)o(s)&&(yield s);else o(a)&&(yield a)}}function*standalone_Cr(e,t){let u=[e];for(let r=0;r<u.length;r++){let o=u[r];for(let n of standalone_be(o,t))yield n,u.push(n)}}function standalone_hr(e,t){return standalone_be(e,t).next().done}function standalone_gr(e,t,u){let{cache:r}=u;if(r.has(e))return r.get(e);let{filter:o}=u;if(!o)return[];let n,a=(u.getChildren?.(e,u)??[...standalone_be(e,{getVisitorKeys:u.getVisitorKeys})]).flatMap(D=>(n??(n=[e,...t]),o(D,n)?[D]:standalone_gr(D,n,u))),{locStart:s,locEnd:i}=u;return a.sort((D,f)=>s(D)-s(f)||i(D)-i(f)),r.set(e,a),a}var standalone_at=standalone_gr;function standalone_Mo(e){let t=e.type||e.kind||"(unknown type)",u=String(e.name||e.id&&(typeof e.id=="object"?e.id.name:e.id)||e.key&&(typeof e.key=="object"?e.key.name:e.key)||e.value&&(typeof e.value=="object"?"":String(e.value))||e.operator||"");return u.length>20&&(u=u.slice(0,19)+"\u2026"),t+(u?" "+u:"")}function standalone_Zt(e,t){(e.comments??(e.comments=[])).push(t),t.printed=!1,t.nodeDescription=standalone_Mo(e)}function standalone_fe(e,t){t.leading=!0,t.trailing=!1,standalone_Zt(e,t)}function standalone_ue(e,t,u){t.leading=!1,t.trailing=!1,u&&(t.marker=u),standalone_Zt(e,t)}function le(e,t){t.leading=!1,t.trailing=!0,standalone_Zt(e,t)}var uu=new WeakMap;function standalone_br(e,t,u,r,o=[]){let{locStart:n,locEnd:a}=u,s=n(t),i=a(t),D=standalone_at(e,o,{cache:uu,locStart:n,locEnd:a,getVisitorKeys:u.getVisitorKeys,filter:u.printer.canAttachComment,getChildren:u.printer.getCommentChildNodes}),f,l,d=0,c=D.length;for(;d<c;){let p=d+c>>1,F=D[p],C=n(F),y=a(F);if(C<=s&&i<=y)return standalone_br(F,t,u,F,[F,...o]);if(y<=s){f=F,d=p+1;continue}if(i<=C){l=F,c=p;continue}throw new Error("Comment location overlaps with node location")}if(r?.type==="TemplateLiteral"){let{quasis:p}=r,F=tu(p,t,u);f&&tu(p,f,u)!==F&&(f=null),l&&tu(p,l,u)!==F&&(l=null)}return{enclosingNode:r,precedingNode:f,followingNode:l}}var eu=()=>!1;function standalone_Ar(e,t){let{comments:u}=e;if(delete e.comments,!standalone_Er(u)||!t.printer.canAttachComment)return;let r=[],{printer:{features:{experimental_avoidAstMutation:o},handleComments:n={}},originalText:a}=t,{ownLine:s=eu,endOfLine:i=eu,remaining:D=eu}=n,f=u.map((l,d)=>({...standalone_br(e,l,t),comment:l,text:a,options:t,ast:e,isLastComment:u.length-1===d}));for(let[l,d]of f.entries()){let{comment:c,precedingNode:p,enclosingNode:F,followingNode:C,text:y,options:m,ast:h,isLastComment:E}=d,g;if(o?g=[d]:(c.enclosingNode=F,c.precedingNode=p,c.followingNode=C,g=[c,y,m,h,E]),standalone_Yo(y,m,f,l))c.placement="ownLine",s(...g)||(C?standalone_fe(C,c):p?le(p,c):F?standalone_ue(F,c):standalone_ue(h,c));else if(standalone_jo(y,m,f,l))c.placement="endOfLine",i(...g)||(p?le(p,c):C?standalone_fe(C,c):F?standalone_ue(F,c):standalone_ue(h,c));else if(c.placement="remaining",!D(...g))if(p&&C){let A=r.length;A>0&&r[A-1].followingNode!==C&&standalone_yr(r,m),r.push(d)}else p?le(p,c):C?standalone_fe(C,c):F?standalone_ue(F,c):standalone_ue(h,c)}if(standalone_yr(r,t),!o)for(let l of u)delete l.precedingNode,delete l.enclosingNode,delete l.followingNode}var standalone_r=e=>!/[\S\n\u2028\u2029]/u.test(e);function standalone_Yo(e,t,u,r){let{comment:o,precedingNode:n}=u[r],{locStart:a,locEnd:s}=t,i=a(o);if(n)for(let D=r-1;D>=0;D--){let{comment:f,precedingNode:l}=u[D];if(l!==n||!standalone_r(e.slice(s(f),i)))break;i=a(f)}return z(e,i,{backwards:!0})}function standalone_jo(e,t,u,r){let{comment:o,followingNode:n}=u[r],{locStart:a,locEnd:s}=t,i=s(o);if(n)for(let D=r+1;D<u.length;D++){let{comment:f,followingNode:l}=u[D];if(l!==n||!standalone_r(e.slice(i,a(f))))break;i=s(f)}return z(e,i)}function standalone_yr(e,t){let u=e.length;if(u===0)return;let{precedingNode:r,followingNode:o}=e[0],n=t.locStart(o),a;for(a=u;a>0;--a){let{comment:s,precedingNode:i,followingNode:D}=e[a-1];P(i,r),P(D,o);let f=t.originalText.slice(t.locEnd(s),n);if(t.printer.isGap?.(f,t)??/^[\s(]*$/u.test(f))n=t.locStart(s);else break}for(let[s,{comment:i}]of e.entries())s<a?le(r,i):standalone_fe(o,i);for(let s of[r,o])s.comments&&s.comments.length>1&&s.comments.sort((i,D)=>t.locStart(i)-t.locStart(D));e.length=0}function tu(e,t,u){let r=u.locStart(t)-1;for(let o=1;o<e.length;++o)if(r<u.locStart(e[o]))return o-1;return 0}function standalone_Uo(e,t){let u=t-1;u=standalone_Y(e,u,{backwards:!0}),u=standalone_K(e,u,{backwards:!0}),u=standalone_Y(e,u,{backwards:!0});let r=standalone_K(e,u,{backwards:!0});return u!==r}var standalone_Le=standalone_Uo;function standalone_xr(e,t){let u=e.node;return u.printed=!0,t.printer.printComment(e,t)}function standalone_Wo(e,t){let u=e.node,r=[standalone_xr(e,t)],{printer:o,originalText:n,locStart:a,locEnd:s}=t;if(o.isBlockComment?.(u)){let f=z(n,s(u))?z(n,a(u),{backwards:!0})?standalone_V:standalone_ut:" ";r.push(f)}else r.push(standalone_V);let D=standalone_K(n,standalone_Y(n,s(u)));return D!==!1&&z(n,D)&&r.push(standalone_V),r}function standalone_$o(e,t,u){let r=e.node,o=standalone_xr(e,t),{printer:n,originalText:a,locStart:s}=t,i=n.isBlockComment?.(r);if(u?.hasLineSuffix&&!u?.isBlock||z(a,s(r),{backwards:!0})){let D=standalone_Le(a,s(r));return{doc:standalone_ve([standalone_V,D?standalone_V:"",o]),isBlock:i,hasLineSuffix:!0}}return!i||u?.hasLineSuffix?{doc:[standalone_ve([" ",o]),standalone_ce],isBlock:i,hasLineSuffix:!0}:{doc:[" ",o],isBlock:i,hasLineSuffix:!1}}function standalone_Vo(e,t){let u=e.node;if(!u)return{};let r=t[Symbol.for("printedComments")];if((u.comments||[]).filter(i=>!r.has(i)).length===0)return{leading:"",trailing:""};let n=[],a=[],s;return e.each(()=>{let i=e.node;if(r?.has(i))return;let{leading:D,trailing:f}=i;D?n.push(standalone_Wo(e,t)):f&&(s=standalone_$o(e,t,s),a.push(s.doc))},"comments"),{leading:n,trailing:a}}function Br(e,t,u){let{leading:r,trailing:o}=standalone_Vo(e,u);return!r&&!o?t:standalone_Ee(t,n=>[r,n,o])}function standalone_Tr(e){let{[Symbol.for("comments")]:t,[Symbol.for("printedComments")]:u}=e;for(let r of t){if(!r.printed&&!u.has(r))throw new Error('Comment "'+r.value.trim()+'" was not printed. Please report this error!');delete r.printed}}var standalone_Nr=()=>P;var standalone_Me=class extends Error{name="ConfigError"},standalone_Ye=class extends Error{name="UndefinedParserError"};var standalone_Sr={checkIgnorePragma:{category:"Special",type:"boolean",default:!1,description:"Check whether the file's first docblock comment contains '@noprettier' or '@noformat' to determine if it should be formatted.",cliCategory:"Other"},cursorOffset:{category:"Special",type:"int",default:-1,range:{start:-1,end:1/0,step:1},description:"Print (to stderr) where a cursor at the given position would move to after formatting.",cliCategory:"Editor"},endOfLine:{category:"Global",type:"choice",default:"lf",description:"Which end of line characters to apply.",choices:[{value:"lf",description:"Line Feed only (\\n), common on Linux and macOS as well as inside git repos"},{value:"crlf",description:"Carriage Return + Line Feed characters (\\r\\n), common on Windows"},{value:"cr",description:"Carriage Return character only (\\r), used very rarely"},{value:"auto",description:`Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`}]},filepath:{category:"Special",type:"path",description:"Specify the input filepath. This will be used to do parser inference.",cliName:"stdin-filepath",cliCategory:"Other",cliDescription:"Path to the file to pretend that stdin comes from."},insertPragma:{category:"Special",type:"boolean",default:!1,description:"Insert @format pragma into file's first docblock comment.",cliCategory:"Other"},parser:{category:"Global",type:"choice",default:void 0,description:"Which parser to use.",exception:e=>typeof e=="string"||typeof e=="function",choices:[{value:"flow",description:"Flow"},{value:"babel",description:"JavaScript"},{value:"babel-flow",description:"Flow"},{value:"babel-ts",description:"TypeScript"},{value:"typescript",description:"TypeScript"},{value:"acorn",description:"JavaScript"},{value:"espree",description:"JavaScript"},{value:"meriyah",description:"JavaScript"},{value:"css",description:"CSS"},{value:"less",description:"Less"},{value:"scss",description:"SCSS"},{value:"json",description:"JSON"},{value:"json5",description:"JSON5"},{value:"jsonc",description:"JSON with Comments"},{value:"json-stringify",description:"JSON.stringify"},{value:"graphql",description:"GraphQL"},{value:"markdown",description:"Markdown"},{value:"mdx",description:"MDX"},{value:"vue",description:"Vue"},{value:"yaml",description:"YAML"},{value:"glimmer",description:"Ember / Handlebars"},{value:"html",description:"HTML"},{value:"angular",description:"Angular"},{value:"lwc",description:"Lightning Web Components"},{value:"mjml",description:"MJML"}]},plugins:{type:"path",array:!0,default:[{value:[]}],category:"Global",description:"Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",exception:e=>typeof e=="string"||typeof e=="object",cliName:"plugin",cliCategory:"Config"},printWidth:{category:"Global",type:"int",default:80,description:"The line length where Prettier will try wrap.",range:{start:0,end:1/0,step:1}},rangeEnd:{category:"Special",type:"int",default:1/0,range:{start:0,end:1/0,step:1},description:`Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,cliCategory:"Editor"},rangeStart:{category:"Special",type:"int",default:0,range:{start:0,end:1/0,step:1},description:`Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`,cliCategory:"Editor"},requirePragma:{category:"Special",type:"boolean",default:!1,description:"Require either '@prettier' or '@format' to be present in the file's first docblock comment in order for it to be formatted.",cliCategory:"Other"},tabWidth:{type:"int",category:"Global",default:2,description:"Number of spaces per indentation level.",range:{start:0,end:1/0,step:1}},useTabs:{category:"Global",type:"boolean",default:!1,description:"Indent with tabs instead of spaces."},embeddedLanguageFormatting:{category:"Global",type:"choice",default:"auto",description:"Control how Prettier formats quoted code embedded in the file.",choices:[{value:"auto",description:"Format embedded code if Prettier can automatically identify it."},{value:"off",description:"Never automatically format embedded code."}]}};function standalone_it({plugins:e=[],showDeprecated:t=!1}={}){let u=e.flatMap(o=>o.languages??[]),r=[];for(let o of standalone_Go(Object.assign({},...e.map(({options:n})=>n),standalone_Sr)))!t&&o.deprecated||(Array.isArray(o.choices)&&(t||(o.choices=o.choices.filter(n=>!n.deprecated)),o.name==="parser"&&(o.choices=[...o.choices,...standalone_Ko(o.choices,u,e)])),o.pluginDefaults=Object.fromEntries(e.filter(n=>n.defaultOptions?.[o.name]!==void 0).map(n=>[n.name,n.defaultOptions[o.name]])),r.push(o));return{languages:u,options:r}}function*standalone_Ko(e,t,u){let r=new Set(e.map(o=>o.value));for(let o of t)if(o.parsers){for(let n of o.parsers)if(!r.has(n)){r.add(n);let a=u.find(i=>i.parsers&&Object.prototype.hasOwnProperty.call(i.parsers,n)),s=o.name;a?.name&&(s+=` (plugin: ${a.name})`),yield{value:n,description:s}}}}function standalone_Go(e){let t=[];for(let[u,r]of Object.entries(e)){let o={name:u,...r};Array.isArray(o.default)&&(o.default=standalone_b(0,o.default,-1).value),t.push(o)}return t}var standalone_zo=Array.prototype.toReversed??function(){return[...this].reverse()},standalone_Jo=standalone_X("toReversed",function(){if(Array.isArray(this))return standalone_zo}),standalone_wr=standalone_Jo;function standalone_Ho(){let e=globalThis,t=e.Deno?.build?.os;return typeof t=="string"?t==="windows":e.navigator?.platform?.startsWith("Win")??e.process?.platform?.startsWith("win")??!1}var standalone_Xo=standalone_Ho();function Or(e){if(e=e instanceof URL?e:new URL(e),e.protocol!=="file:")throw new TypeError(`URL must be a file URL: received "${e.protocol}"`);return e}function standalone_qo(e){return e=Or(e),decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g,"%25"))}function standalone_Qo(e){e=Or(e);let t=decodeURIComponent(e.pathname.replace(/\//g,"\\").replace(/%(?![0-9A-Fa-f]{2})/g,"%25")).replace(/^\\*([A-Za-z]:)(\\|$)/,"$1\\");return e.hostname!==""&&(t=`\\\\${e.hostname}${t}`),t}function ru(e){return standalone_Xo?standalone_Qo(e):standalone_qo(e)}var standalone_Pr=e=>String(e).split(/[/\\]/u).pop(),Ir=e=>String(e).startsWith("file:");function standalone_kr(e,t){if(!t)return;let u=standalone_Pr(t).toLowerCase();return e.find(({filenames:r})=>r?.some(o=>o.toLowerCase()===u))??e.find(({extensions:r})=>r?.some(o=>u.endsWith(o)))}function standalone_Zo(e,t){if(t)return e.find(({name:u})=>u.toLowerCase()===t)??e.find(({aliases:u})=>u?.includes(t))??e.find(({extensions:u})=>u?.includes(`.${t}`))}var standalone_ea=void 0;function standalone_vr(e,t){if(t){if(Ir(t))try{t=ru(t)}catch{return}if(typeof t=="string")return e.find(({isSupported:u})=>u?.({filepath:t}))}}function standalone_ta(e,t){let u=standalone_wr(0,e.plugins).flatMap(o=>o.languages??[]);return(standalone_Zo(u,t.language)??standalone_kr(u,t.physicalFile)??standalone_kr(u,t.file)??standalone_vr(u,t.physicalFile)??standalone_vr(u,t.file)??standalone_ea?.(u,t.physicalFile))?.parsers[0]}var standalone_st=standalone_ta;var standalone_ie={key:e=>/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e)?e:JSON.stringify(e),value(e){if(e===null||typeof e!="object")return JSON.stringify(e);if(Array.isArray(e))return`[${e.map(u=>standalone_ie.value(u)).join(", ")}]`;let t=Object.keys(e);return t.length===0?"{}":`{ ${t.map(u=>`${standalone_ie.key(u)}: ${standalone_ie.value(e[u])}`).join(", ")} }`},pair:({key:e,value:t})=>standalone_ie.value({[e]:t})};var nu=new Proxy(String,{get:()=>nu}),standalone_$=nu,ou=()=>nu;var Rr=(e,t,{descriptor:u})=>{let r=[`${standalone_$.yellow(typeof e=="string"?u.key(e):u.pair(e))} is deprecated`];return t&&r.push(`we now treat it as ${standalone_$.blue(typeof t=="string"?u.key(t):u.pair(t))}`),r.join("; ")+"."};var standalone_Dt=Symbol.for("vnopts.VALUE_NOT_EXIST"),standalone_Ae=Symbol.for("vnopts.VALUE_UNCHANGED");var standalone_Lr=" ".repeat(2),standalone_Yr=(e,t,u)=>{let{text:r,list:o}=u.normalizeExpectedResult(u.schemas[e].expected(u)),n=[];return r&&n.push(standalone_Mr(e,t,r,u.descriptor)),o&&n.push([standalone_Mr(e,t,o.title,u.descriptor)].concat(o.values.map(a=>standalone_jr(a,u.loggerPrintWidth))).join(`
`)),standalone_Ur(n,u.loggerPrintWidth)};function standalone_Mr(e,t,u,r){return[`Invalid ${standalone_$.red(r.key(e))} value.`,`Expected ${standalone_$.blue(u)},`,`but received ${t===standalone_Dt?standalone_$.gray("nothing"):standalone_$.red(r.value(t))}.`].join(" ")}function standalone_jr({text:e,list:t},u){let r=[];return e&&r.push(`- ${standalone_$.blue(e)}`),t&&r.push([`- ${standalone_$.blue(t.title)}:`].concat(t.values.map(o=>standalone_jr(o,u-standalone_Lr.length).replace(/^|\n/g,`$&${standalone_Lr}`))).join(`
`)),standalone_Ur(r,u)}function standalone_Ur(e,t){if(e.length===1)return e[0];let[u,r]=e,[o,n]=e.map(a=>a.split(`
`,1)[0].length);return o>t&&o>n?r:u}var standalone_e=[],au=[];function standalone_ct(e,t,u){if(e===t)return 0;let r=u?.maxDistance,o=e;e.length>t.length&&(e=t,t=o);let n=e.length,a=t.length;for(;n>0&&e.charCodeAt(~-n)===t.charCodeAt(~-a);)n--,a--;let s=0;for(;s<n&&e.charCodeAt(s)===t.charCodeAt(s);)s++;if(n-=s,a-=s,r!==void 0&&a-n>r)return r;if(n===0)return r!==void 0&&a>r?r:a;let i,D,f,l,d=0,c=0;for(;d<n;)au[d]=e.charCodeAt(s+d),standalone_e[d]=++d;for(;c<a;){for(i=t.charCodeAt(s+c),f=c++,D=c,d=0;d<n;d++)l=i===au[d]?f:f+1,f=standalone_e[d],D=standalone_e[d]=f>D?l>D?D+1:l:l>f?f+1:l;if(r!==void 0){let p=D;for(d=0;d<n;d++)standalone_e[d]<p&&(p=standalone_e[d]);if(p>r)return r}}return standalone_e.length=n,au.length=n,r!==void 0&&D>r?r:D}function standalone_Wr(e,t,u){if(!Array.isArray(t)||t.length===0)return;let r=u?.maxDistance,o=e.length;for(let i of t)if(i===e)return i;if(r===0)return;let n,a=Number.POSITIVE_INFINITY,s=new Set;for(let i of t){if(s.has(i))continue;s.add(i);let D=Math.abs(i.length-o);if(D>=a||r!==void 0&&D>r)continue;let f=Number.isFinite(a)?r===void 0?a:Math.min(a,r):r,l=f===void 0?standalone_ct(e,i):standalone_ct(e,i,{maxDistance:f});if(r!==void 0&&l>r)continue;let d=l;if(f!==void 0&&l===f&&f===r&&(d=standalone_ct(e,i)),d<a&&(a=d,n=i,a===0))break}if(!(r!==void 0&&a>r))return n}var standalone_ft=(e,t,{descriptor:u,logger:r,schemas:o})=>{let n=[`Ignored unknown option ${standalone_$.yellow(u.pair({key:e,value:t}))}.`],a=standalone_Wr(e,Object.keys(o),{maxDistance:3});a&&n.push(`Did you mean ${standalone_$.blue(u.key(a))}?`),r.warn(n.join(" "))};var standalone_ua=["default","expected","validate","deprecated","forward","redirect","overlap","preprocess","postprocess"];function standalone_ra(e,t){let u=new e(t),r=Object.create(u);for(let o of standalone_ua)o in t&&(r[o]=standalone_na(t[o],u,S.prototype[o].length));return r}var S=class{static create(t){return standalone_ra(this,t)}constructor(t){this.name=t.name}default(t){}expected(t){return"nothing"}validate(t,u){return!1}deprecated(t,u){return!1}forward(t,u){}redirect(t,u){}overlap(t,u,r){return t}preprocess(t,u){return t}postprocess(t,u){return standalone_Ae}};function standalone_na(e,t,u){return typeof e=="function"?(...r)=>e(...r.slice(0,u-1),t,...r.slice(u-1)):()=>e}var standalone_lt=class extends S{constructor(t){super(t),this._sourceName=t.sourceName}expected(t){return t.schemas[this._sourceName].expected(t)}validate(t,u){return u.schemas[this._sourceName].validate(t,u)}redirect(t,u){return this._sourceName}};var dt=class extends S{expected(){return"anything"}validate(){return!0}};var standalone_pt=class extends S{constructor({valueSchema:t,name:u=t.name,...r}){super({...r,name:u}),this._valueSchema=t}expected(t){let{text:u,list:r}=t.normalizeExpectedResult(this._valueSchema.expected(t));return{text:u&&`an array of ${u}`,list:r&&{title:"an array of the following values",values:[{list:r}]}}}validate(t,u){if(!Array.isArray(t))return!1;let r=[];for(let o of t){let n=u.normalizeValidateResult(this._valueSchema.validate(o,u),o);n!==!0&&r.push(n.value)}return r.length===0?!0:{value:r}}deprecated(t,u){let r=[];for(let o of t){let n=u.normalizeDeprecatedResult(this._valueSchema.deprecated(o,u),o);n!==!1&&r.push(...n.map(({value:a})=>({value:[a]})))}return r}forward(t,u){let r=[];for(let o of t){let n=u.normalizeForwardResult(this._valueSchema.forward(o,u),o);r.push(...n.map(standalone_$r))}return r}redirect(t,u){let r=[],o=[];for(let n of t){let a=u.normalizeRedirectResult(this._valueSchema.redirect(n,u),n);"remain"in a&&r.push(a.remain),o.push(...a.redirect.map(standalone_$r))}return r.length===0?{redirect:o}:{redirect:o,remain:r}}overlap(t,u){return t.concat(u)}};function standalone_$r({from:e,to:t}){return{from:[e],to:t}}var standalone_Ft=class extends S{expected(){return"true or false"}validate(t){return typeof t=="boolean"}};function standalone_Kr(e,t){let u=Object.create(null);for(let r of e){let o=r[t];if(u[o])throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);u[o]=r}return u}function standalone_Gr(e,t){let u=new Map;for(let r of e){let o=r[t];if(u.has(o))throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);u.set(o,r)}return u}function standalone_zr(){let e=Object.create(null);return t=>{let u=JSON.stringify(t);return e[u]?!0:(e[u]=!0,!1)}}function standalone_Jr(e,t){let u=[],r=[];for(let o of e)t(o)?u.push(o):r.push(o);return[u,r]}function Hr(e){return e===Math.floor(e)}function standalone_Xr(e,t){if(e===t)return 0;let u=typeof e,r=typeof t,o=["undefined","object","boolean","number","string"];return u!==r?o.indexOf(u)-o.indexOf(r):u!=="string"?Number(e)-Number(t):e.localeCompare(t)}function qr(e){return(...t)=>{let u=e(...t);return typeof u=="string"?new Error(u):u}}function iu(e){return e===void 0?{}:e}function su(e){if(typeof e=="string")return{text:e};let{text:t,list:u}=e;return standalone_oa((t||u)!==void 0,"Unexpected `expected` result, there should be at least one field."),u?{text:t,list:{title:u.title,values:u.values.map(su)}}:{text:t}}function Du(e,t){return e===!0?!0:e===!1?{value:t}:e}function cu(e,t,u=!1){return e===!1?!1:e===!0?u?!0:[{value:t}]:"value"in e?[e]:e.length===0?!1:e}function standalone_Vr(e,t){return typeof e=="string"||"key"in e?{from:t,to:e}:"from"in e?{from:e.from,to:e.to}:{from:t,to:e.to}}function standalone_mt(e,t){return e===void 0?[]:Array.isArray(e)?e.map(u=>standalone_Vr(u,t)):[standalone_Vr(e,t)]}function fu(e,t){let u=standalone_mt(typeof e=="object"&&"redirect"in e?e.redirect:e,t);return u.length===0?{remain:t,redirect:u}:typeof e=="object"&&"remain"in e?{remain:e.remain,redirect:u}:{redirect:u}}function standalone_oa(e,t){if(!e)throw new Error(t)}var standalone_Et=class extends S{constructor(t){super(t),this._choices=standalone_Gr(t.choices.map(u=>u&&typeof u=="object"?u:{value:u}),"value")}expected({descriptor:t}){let u=Array.from(this._choices.keys()).map(a=>this._choices.get(a)).filter(({hidden:a})=>!a).map(a=>a.value).sort(standalone_Xr).map(t.value),r=u.slice(0,-2),o=u.slice(-2);return{text:r.concat(o.join(" or ")).join(", "),list:{title:"one of the following values",values:u}}}validate(t){return this._choices.has(t)}deprecated(t){let u=this._choices.get(t);return u&&u.deprecated?{value:t}:!1}forward(t){let u=this._choices.get(t);return u?u.forward:void 0}redirect(t){let u=this._choices.get(t);return u?u.redirect:void 0}};var standalone_Ct=class extends S{expected(){return"a number"}validate(t,u){return typeof t=="number"}};var ht=class extends standalone_Ct{expected(){return"an integer"}validate(t,u){return u.normalizeValidateResult(super.validate(t,u),t)===!0&&Hr(t)}};var standalone_je=class extends S{expected(){return"a string"}validate(t){return typeof t=="string"}};var standalone_Qr=standalone_ie,standalone_Zr=standalone_ft,standalone_en=standalone_Yr,standalone_tn=Rr;var standalone_gt=class{constructor(t,u){let{logger:r=console,loggerPrintWidth:o=80,descriptor:n=standalone_Qr,unknown:a=standalone_Zr,invalid:s=standalone_en,deprecated:i=standalone_tn,missing:D=()=>!1,required:f=()=>!1,preprocess:l=c=>c,postprocess:d=()=>standalone_Ae}=u||{};this._utils={descriptor:n,logger:r||{warn:()=>{}},loggerPrintWidth:o,schemas:standalone_Kr(t,"name"),normalizeDefaultResult:iu,normalizeExpectedResult:su,normalizeDeprecatedResult:cu,normalizeForwardResult:standalone_mt,normalizeRedirectResult:fu,normalizeValidateResult:Du},this._unknownHandler=a,this._invalidHandler=qr(s),this._deprecatedHandler=i,this._identifyMissing=(c,p)=>!(c in p)||D(c,p),this._identifyRequired=f,this._preprocess=l,this._postprocess=d,this.cleanHistory()}cleanHistory(){this._hasDeprecationWarned=standalone_zr()}normalize(t){let u={},o=[this._preprocess(t,this._utils)],n=()=>{for(;o.length!==0;){let a=o.shift(),s=this._applyNormalization(a,u);o.push(...s)}};n();for(let a of Object.keys(this._utils.schemas)){let s=this._utils.schemas[a];if(!(a in u)){let i=iu(s.default(this._utils));"value"in i&&o.push({[a]:i.value})}}n();for(let a of Object.keys(this._utils.schemas)){if(!(a in u))continue;let s=this._utils.schemas[a],i=u[a],D=s.postprocess(i,this._utils);D!==standalone_Ae&&(this._applyValidation(D,a,s),u[a]=D)}return this._applyPostprocess(u),this._applyRequiredCheck(u),u}_applyNormalization(t,u){let r=[],{knownKeys:o,unknownKeys:n}=this._partitionOptionKeys(t);for(let a of o){let s=this._utils.schemas[a],i=s.preprocess(t[a],this._utils);this._applyValidation(i,a,s);let D=({from:c,to:p})=>{r.push(typeof p=="string"?{[p]:c}:{[p.key]:p.value})},f=({value:c,redirectTo:p})=>{let F=cu(s.deprecated(c,this._utils),i,!0);if(F!==!1)if(F===!0)this._hasDeprecationWarned(a)||this._utils.logger.warn(this._deprecatedHandler(a,p,this._utils));else for(let{value:C}of F){let y={key:a,value:C};if(!this._hasDeprecationWarned(y)){let m=typeof p=="string"?{key:p,value:C}:p;this._utils.logger.warn(this._deprecatedHandler(y,m,this._utils))}}};standalone_mt(s.forward(i,this._utils),i).forEach(D);let d=fu(s.redirect(i,this._utils),i);if(d.redirect.forEach(D),"remain"in d){let c=d.remain;u[a]=a in u?s.overlap(u[a],c,this._utils):c,f({value:c})}for(let{from:c,to:p}of d.redirect)f({value:c,redirectTo:p})}for(let a of n){let s=t[a];this._applyUnknownHandler(a,s,u,(i,D)=>{r.push({[i]:D})})}return r}_applyRequiredCheck(t){for(let u of Object.keys(this._utils.schemas))if(this._identifyMissing(u,t)&&this._identifyRequired(u))throw this._invalidHandler(u,standalone_Dt,this._utils)}_partitionOptionKeys(t){let[u,r]=standalone_Jr(Object.keys(t).filter(o=>!this._identifyMissing(o,t)),o=>o in this._utils.schemas);return{knownKeys:u,unknownKeys:r}}_applyValidation(t,u,r){let o=Du(r.validate(t,this._utils),t);if(o!==!0)throw this._invalidHandler(u,o.value,this._utils)}_applyUnknownHandler(t,u,r,o){let n=this._unknownHandler(t,u,this._utils);if(n)for(let a of Object.keys(n)){if(this._identifyMissing(a,n))continue;let s=n[a];a in this._utils.schemas?o(a,s):r[a]=s}}_applyPostprocess(t){let u=this._postprocess(t,this._utils);if(u!==standalone_Ae){if(u.delete)for(let r of u.delete)delete t[r];if(u.override){let{knownKeys:r,unknownKeys:o}=this._partitionOptionKeys(u.override);for(let n of r){let a=u.override[n];this._applyValidation(a,n,this._utils.schemas[n]),t[n]=a}for(let n of o){let a=u.override[n];this._applyUnknownHandler(n,a,t,(s,i)=>{let D=this._utils.schemas[s];this._applyValidation(i,s,D),t[s]=i})}}}}};var lu;function standalone_ia(e,t,{logger:u=!1,isCLI:r=!1,passThrough:o=!1,FlagSchema:n,descriptor:a}={}){if(r){if(!n)throw new Error("'FlagSchema' option is required.");if(!a)throw new Error("'descriptor' option is required.")}else a=standalone_ie;let s=o?Array.isArray(o)?(d,c)=>o.includes(d)?{[d]:c}:void 0:(d,c)=>({[d]:c}):(d,c,p)=>{let{_:F,...C}=p.schemas;return standalone_ft(d,c,{...p,schemas:C})},i=standalone_sa(t,{isCLI:r,FlagSchema:n}),D=new standalone_gt(i,{logger:u,unknown:s,descriptor:a}),f=u!==!1;f&&lu&&(D._hasDeprecationWarned=lu);let l=D.normalize(e);return f&&(lu=D._hasDeprecationWarned),l}function standalone_sa(e,{isCLI:t,FlagSchema:u}){let r=[];t&&r.push(dt.create({name:"_"}));for(let o of e)r.push(standalone_Da(o,{isCLI:t,optionInfos:e,FlagSchema:u})),o.alias&&t&&r.push(standalone_lt.create({name:o.alias,sourceName:o.name}));return r}function standalone_Da(e,{isCLI:t,optionInfos:u,FlagSchema:r}){let{name:o}=e,n={name:o},a,s={};switch(e.type){case"int":a=ht,t&&(n.preprocess=Number);break;case"string":a=standalone_je;break;case"choice":a=standalone_Et,n.choices=e.choices.map(i=>i?.redirect?{...i,redirect:{to:{key:e.name,value:i.redirect}}}:i);break;case"boolean":a=standalone_Ft;break;case"flag":a=r,n.flags=u.flatMap(i=>[i.alias,i.description&&i.name,i.oppositeDescription&&`no-${i.name}`].filter(Boolean));break;case"path":a=standalone_je;break;default:throw new Error(`Unexpected type ${e.type}`)}if(e.exception?n.validate=(i,D,f)=>e.exception(i)||D.validate(i,f):n.validate=(i,D,f)=>i===void 0||D.validate(i,f),e.redirect&&(s.redirect=i=>i?{to:typeof e.redirect=="string"?e.redirect:{key:e.redirect.option,value:e.redirect.value}}:void 0),e.deprecated&&(s.deprecated=!0),t&&!e.array){let i=n.preprocess||(D=>D);n.preprocess=(D,f,l)=>f.preprocess(i(Array.isArray(D)?standalone_b(0,D,-1):D),l)}return e.array?standalone_pt.create({...t?{preprocess:i=>Array.isArray(i)?i:[i]}:{},...s,valueSchema:a.create(n)}):a.create({...n,...s})}var standalone_un=standalone_ia;var standalone_ca=Array.prototype.findLast??function(e){for(let t=this.length-1;t>=0;t--){let u=this[t];if(e(u,t,this))return u}},standalone_fa=standalone_X("findLast",function(){if(Array.isArray(this))return standalone_ca}),du=standalone_fa;var standalone_rn=Symbol.for("PRETTIER_IS_FRONT_MATTER"),pu=[];function standalone_la(e){return!!e?.[standalone_rn]}var standalone_de=standalone_la;var standalone_nn=new Set(["yaml","toml"]),Ue=({node:e})=>standalone_de(e)&&standalone_nn.has(e.language);async function Fu(e,t,u,r){let{node:o}=u,{language:n}=o;if(!standalone_nn.has(n))return;let a=o.value.trim(),s;if(a){let i=n==="yaml"?n:standalone_st(r,{language:n});if(!i)return;s=a?await e(a,{parser:i}):""}else s=a;return standalone_et([o.startDelimiter,o.explicitLanguage??"",standalone_V,s,s?standalone_V:"",o.endDelimiter])}function standalone_da(e,t){return Ue({node:e})&&(delete t.end,delete t.raw,delete t.value),t}var mu=standalone_da;function standalone_pa({node:e}){return e.raw}var Eu=standalone_pa;var standalone_on=new Set(["tokens","comments","parent","enclosingNode","precedingNode","followingNode"]),standalone_Fa=e=>Object.keys(e).filter(t=>!standalone_on.has(t));function standalone_ma(e,t){let u=e?r=>e(r,standalone_on):standalone_Fa;return t?new Proxy(u,{apply:(r,o,n)=>standalone_de(n[0])?pu:Reflect.apply(r,o,n)}):u}var Cu=standalone_ma;function gu(e,t){if(!t)throw new Error("parserName is required.");let u=du(0,e,o=>o.parsers&&Object.prototype.hasOwnProperty.call(o.parsers,t));if(u)return u;let r=`Couldn't resolve parser "${t}".`;throw r+=" Plugins must be explicitly added to the standalone bundle.",new standalone_Me(r)}function standalone_an(e,t){if(!t)throw new Error("astFormat is required.");let u=du(0,e,o=>o.printers&&Object.prototype.hasOwnProperty.call(o.printers,t));if(u)return u;let r=`Couldn't find plugin for AST format "${t}".`;throw r+=" Plugins must be explicitly added to the standalone bundle.",new standalone_Me(r)}function standalone_We({plugins:e,parser:t}){let u=gu(e,t);return yu(u,t)}function yu(e,t){let u=e.parsers[t];return typeof u=="function"?u():u}async function standalone_sn(e,t){let u=e.printers[t],r=typeof u=="function"?await u():u;return standalone_Ea(r)}var hu=new WeakMap,q0=Symbol("PRINTER_NORMALIZED_MARK");function standalone_Ea(e){if(hu.has(e))return hu.get(e);let{features:t,getVisitorKeys:u,embed:r,massageAstNode:o,print:n,...a}=e;t=standalone_ya(t);let s=t.experimental_frontMatterSupport;u=Cu(u,s.massageAstNode||s.embed||s.print);let i=o;o&&s.massageAstNode&&(i=new Proxy(o,{apply(d,c,p){return mu(...p),Reflect.apply(d,c,p)}}));let D=r;if(r){let d;D=new Proxy(r,{get(c,p,F){return p==="getVisitorKeys"?(d??(d=r.getVisitorKeys?Cu(r.getVisitorKeys,s.massageAstNode||s.embed):u),d):Reflect.get(c,p,F)},apply:(c,p,F)=>s.embed&&Ue(...F)?Fu:Reflect.apply(c,p,F)})}let f=n;s.print&&(f=new Proxy(n,{apply(d,c,p){let[F]=p;return standalone_de(F.node)?Eu(F):Reflect.apply(d,c,p)}}));let l={features:t,getVisitorKeys:u,embed:D,massageAstNode:i,print:f,...a};return hu.set(e,l),l}var standalone_Ca=["clean","embed","print"],standalone_ha=Object.fromEntries(standalone_Ca.map(e=>[e,!1]));function standalone_ga(e){return{...standalone_ha,...e}}function standalone_ya(e){return{experimental_avoidAstMutation:!1,...e,experimental_frontMatterSupport:standalone_ga(e?.experimental_frontMatterSupport)}}var standalone_Dn={astFormat:"estree",printer:{},originalText:void 0,locStart:null,locEnd:null,getVisitorKeys:null};async function ba(e,t={}){let u={...e};if(!u.parser)if(u.filepath){if(u.parser=standalone_st(u,{physicalFile:u.filepath}),!u.parser)throw new standalone_Ye(`No parser could be inferred for file "${u.filepath}".`)}else throw new standalone_Ye("No parser and no file path given, couldn't infer a parser.");let r=standalone_it({plugins:e.plugins,showDeprecated:!0}).options,o={...standalone_Dn,...Object.fromEntries(r.filter(l=>l.default!==void 0).map(l=>[l.name,l.default]))},n=gu(u.plugins,u.parser),a=await yu(n,u.parser);u.astFormat=a.astFormat,u.locEnd=a.locEnd,u.locStart=a.locStart;let s=n.printers?.[a.astFormat]?n:standalone_an(u.plugins,a.astFormat),i=await standalone_sn(s,a.astFormat);u.printer=i,u.getVisitorKeys=i.getVisitorKeys;let D=s.defaultOptions?Object.fromEntries(Object.entries(s.defaultOptions).filter(([,l])=>l!==void 0)):{},f={...o,...D};for(let[l,d]of Object.entries(f))(u[l]===null||u[l]===void 0)&&(u[l]=d);return u.parser==="json"&&(u.trailingComma="none"),standalone_un(u,r,{passThrough:Object.keys(standalone_Dn),...t})}var se=ba;var pf=standalone_ao(standalone_dn(),1);var Au="\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",standalone_pn="\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65",af=new RegExp("["+Au+"]"),sf=new RegExp("["+Au+standalone_pn+"]");Au=standalone_pn=null;var _u={keyword:["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"],strict:["implements","interface","let","package","private","protected","public","static","yield"],strictBind:["eval","arguments"]},Df=new Set(_u.keyword),cf=new Set(_u.strict),ff=new Set(_u.strictBind);var standalone_It=(e,t)=>u=>e(t(u));function standalone_mn(e){return{keyword:e.cyan,capitalized:e.yellow,jsxIdentifier:e.yellow,punctuator:e.yellow,number:e.magenta,string:e.green,regex:e.magenta,comment:e.gray,invalid:standalone_It(standalone_It(e.white,e.bgRed),e.bold),gutter:e.gray,marker:standalone_It(e.red,e.bold),message:standalone_It(e.red,e.bold),reset:e.reset}}var hf=standalone_mn(ou(!0)),gf=standalone_mn(ou(!1));function standalone_a(){return new Proxy({},{get:()=>e=>e})}var standalone_Fn=/\r\n|[\n\r\u2028\u2029]/;function standalone_xa(e,t,u){let r=Object.assign({column:0,line:-1},e.start),o=Object.assign({},r,e.end),{linesAbove:n=2,linesBelow:a=3}=u||{},s=r.line,i=r.column,D=o.line,f=o.column,l=Math.max(s-(n+1),0),d=Math.min(t.length,D+a);s===-1&&(l=0),D===-1&&(d=t.length);let c=D-s,p={};if(c)for(let F=0;F<=c;F++){let C=F+s;if(!i)p[C]=!0;else if(F===0){let y=t[C-1].length;p[C]=[i,y-i+1]}else if(F===c)p[C]=[0,f];else{let y=t[C-F].length;p[C]=[0,y]}}else i===f?i?p[s]=[i,0]:p[s]=!0:p[s]=[i,f-i];return{start:l,end:d,markerLines:p}}function standalone_En(e,t,u={}){let o=standalone_a(!1),n=e.split(standalone_Fn),{start:a,end:s,markerLines:i}=standalone_xa(t,n,u),D=t.start&&typeof t.start.column=="number",f=String(s).length,d=e.split(standalone_Fn,s).slice(a,s).map((c,p)=>{let F=a+1+p,y=` ${` ${F}`.slice(-f)} |`,m=i[F],h=!i[F+1];if(m){let E="";if(Array.isArray(m)){let g=c.slice(0,Math.max(m[0]-1,0)).replace(/[^\t]/g," "),A=m[1]||1;E=[`
 `,o.gutter(y.replace(/\d/g," "))," ",g,o.marker("^").repeat(A)].join(""),h&&u.message&&(E+=" "+o.message(u.message))}return[o.marker(">"),o.gutter(y),c.length>0?` ${c}`:"",E].join("")}else return` ${o.gutter(y)}${c.length>0?` ${c}`:""}`}).join(`
`);return u.message&&!D&&(d=`${" ".repeat(f+1)}${u.message}
${d}`),d}async function standalone_Ba(e,t){let u=await standalone_We(t),r=u.preprocess?await u.preprocess(e,t):e;t.originalText=r;let o;try{o=await u.parse(r,t,t)}catch(n){standalone_Ta(n,e)}return{text:r,ast:o}}function standalone_Ta(e,t){let{loc:u}=e;if(u){let r=standalone_En(t,u,{highlightCode:!0});throw e.message+=`
`+r,e.codeFrame=r,e}throw e}var standalone_Fe=standalone_Ba;async function standalone_Cn(e,t,u,r,o){if(u.embeddedLanguageFormatting!=="auto")return;let{printer:n}=u,{embed:a}=n;if(!a)return;if(a.length>2)throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");let{hasPrettierIgnore:s}=n,{getVisitorKeys:i}=a,D=[];d();let f=e.stack;for(let{print:c,node:p,pathStack:F}of D)try{e.stack=F;let C=await c(l,t,e,u);C&&o.set(p,C)}catch(C){if(globalThis.PRETTIER_DEBUG)throw C}e.stack=f;function l(c,p){return standalone_Na(c,p,u,r)}function d(){let{node:c}=e;if(c===null||typeof c!="object"||s?.(e))return;for(let F of i(c))Array.isArray(c[F])?e.each(d,F):e.call(d,F);let p=a(e,u);if(p){if(typeof p=="function"){D.push({print:p,node:c,pathStack:[...e.stack]});return}o.set(c,p)}}}async function standalone_Na(e,t,u,r){let o=await se({...u,...t,parentParser:u.parser,originalText:e,cursorOffset:void 0,rangeStart:void 0,rangeEnd:void 0},{passThrough:!0}),{ast:n}=await standalone_Fe(e,o),a=await r(n,o);return standalone_qe(a)}function standalone_Sa(e,t,u,r){let{originalText:o,[Symbol.for("comments")]:n,locStart:a,locEnd:s,[Symbol.for("printedComments")]:i}=t,{node:D}=e,f=a(D),l=s(D);for(let c of n)a(c)>=f&&s(c)<=l&&i.add(c);let{printPrettierIgnored:d}=t.printer;return d?d(e,t,u,r):o.slice(f,l)}var standalone_hn=standalone_Sa;async function Ge(e,t){({ast:e}=await xu(e,t));let u=new Map,r=new standalone_pr(e),o=standalone_Nr(t),n=new Map;await standalone_Cn(r,s,t,Ge,n);let a=await standalone_gn(r,t,s,void 0,n);if(standalone_Tr(t),t.cursorOffset>=0){if(t.nodeAfterCursor&&!t.nodeBeforeCursor)return[ee,a];if(t.nodeBeforeCursor&&!t.nodeAfterCursor)return[a,ee]}return a;function s(D,f){return D===void 0||D===r?i(f):Array.isArray(D)?r.call(()=>i(f),...D):r.call(()=>i(f),D)}function i(D){o(r);let f=r.node;if(f==null)return"";let l=standalone_ge(f)&&D===void 0;if(l&&u.has(f))return u.get(f);let d=standalone_gn(r,t,s,D,n);return l&&u.set(f,d),d}}function standalone_gn(e,t,u,r,o){let{node:n}=e,{printer:a}=t,s;switch(a.hasPrettierIgnore?.(e)?s=standalone_hn(e,t,u,r):o.has(n)?s=o.get(n):s=a.print(e,t,u,r),n){case t.cursorNode:s=standalone_Ee(s,i=>[ee,i,ee]);break;case t.nodeBeforeCursor:s=standalone_Ee(s,i=>[i,ee]);break;case t.nodeAfterCursor:s=standalone_Ee(s,i=>[ee,i]);break}return a.printComment&&!a.willPrintOwnComments?.(e,t)&&(s=Br(e,s,t)),s}async function xu(e,t){let u=e.comments??[];t[Symbol.for("comments")]=u,t[Symbol.for("printedComments")]=new Set,standalone_Ar(e,t);let{printer:{preprocess:r}}=t;return e=r?await r(e,t):e,{ast:e,comments:u}}function standalone_wa(e,t){let{cursorOffset:u,locStart:r,locEnd:o,getVisitorKeys:n}=t,a=c=>r(c)<=u&&o(c)>=u,s=e,i=[e];for(let c of standalone_Cr(e,{getVisitorKeys:n,filter:a}))i.push(c),s=c;if(standalone_hr(s,{getVisitorKeys:n}))return{cursorNode:s};let D,f,l=-1,d=Number.POSITIVE_INFINITY;for(;i.length>0&&(D===void 0||f===void 0);){s=i.pop();let c=D!==void 0,p=f!==void 0;for(let F of standalone_be(s,{getVisitorKeys:n})){if(!c){let C=o(F);C<=u&&C>l&&(D=F,l=C)}if(!p){let C=r(F);C>=u&&C<d&&(f=F,d=C)}}}return{nodeBeforeCursor:D,nodeAfterCursor:f}}var Bu=standalone_wa;function standalone_Oa(e,t){let{printer:u}=t,r=u.massageAstNode;if(!r)return e;let{getVisitorKeys:o}=u,{ignoredProperties:n}=r;return a(e);function a(s,i){if(!standalone_ge(s))return s;if(Array.isArray(s))return s.map(d=>a(d,i)).filter(Boolean);let D={},f=new Set(o(s));for(let d in s)!Object.prototype.hasOwnProperty.call(s,d)||n?.has(d)||(f.has(d)?D[d]=a(s[d],s):D[d]=s[d]);let l=r(s,D,i);if(l!==null)return l??D}}var standalone_yn=standalone_Oa;var standalone_Pa=Array.prototype.findLastIndex??function(e){for(let t=this.length-1;t>=0;t--){let u=this[t];if(e(u,t,this))return t}return-1},standalone_Ia=standalone_X("findLastIndex",function(){if(Array.isArray(this))return standalone_Pa}),standalone_bn=standalone_Ia;var standalone_ka=({parser:e})=>e==="json"||e==="json5"||e==="jsonc"||e==="json-stringify";function standalone_va(e,t){return t=new Set(t),e.find(u=>standalone_xn.has(u.type)&&t.has(u))}function standalone_An(e){let t=standalone_bn(0,e,u=>u.type!=="Program"&&u.type!=="File");return t===-1?e:e.slice(0,t+1)}function standalone_Ra(e,t,{locStart:u,locEnd:r}){let[o,...n]=e,[a,...s]=t;if(o===a)return[o,a];let i=u(o);for(let f of standalone_An(s))if(u(f)>=i)a=f;else break;let D=r(a);for(let f of standalone_An(n)){if(r(f)<=D)o=f;else break;if(o===a)break}return[o,a]}function Tu(e,t,u,r,o=[],n){let{locStart:a,locEnd:s}=u,i=a(e),D=s(e);if(t>D||t<i||n==="rangeEnd"&&t===i||n==="rangeStart"&&t===D)return;let f=[e,...o],l=standalone_at(e,f,{cache:uu,locStart:a,locEnd:s,getVisitorKeys:u.getVisitorKeys,filter:u.printer.canAttachComment,getChildren:u.printer.getCommentChildNodes});for(let d of l){let c=Tu(d,t,u,r,f,n);if(c)return c}if(r(e,o[0]))return f}function standalone_La(e,t){return t!=="DeclareExportDeclaration"&&e!=="TypeParameterDeclaration"&&(e==="Directive"||e==="TypeAlias"||e==="TSExportAssignment"||e.startsWith("Declare")||e.startsWith("TSDeclare")||e.endsWith("Statement")||e.endsWith("Declaration"))}var standalone_xn=new Set(["JsonRoot","ObjectExpression","ArrayExpression","StringLiteral","NumericLiteral","BooleanLiteral","NullLiteral","UnaryExpression","TemplateLiteral"]),standalone_Ma=new Set(["OperationDefinition","FragmentDefinition","VariableDefinition","TypeExtensionDefinition","ObjectTypeDefinition","FieldDefinition","DirectiveDefinition","EnumTypeDefinition","EnumValueDefinition","InputValueDefinition","InputObjectTypeDefinition","SchemaDefinition","OperationTypeDefinition","InterfaceTypeDefinition","UnionTypeDefinition","ScalarTypeDefinition"]);function standalone_n(e,t,u){if(!t)return!1;switch(e.parser){case"flow":case"hermes":case"babel":case"babel-flow":case"babel-ts":case"typescript":case"acorn":case"espree":case"meriyah":case"oxc":case"oxc-ts":case"__babel_estree":return standalone_La(t.type,u?.type);case"json":case"json5":case"jsonc":case"json-stringify":return standalone_xn.has(t.type);case"graphql":return standalone_Ma.has(t.kind);case"vue":return t.tag!=="root"}return!1}function standalone_Bn(e,t,u){let{rangeStart:r,rangeEnd:o,locStart:n,locEnd:a}=t;P(o>r);let s=e.slice(r,o).search(/\S/u),i=s===-1;if(!i)for(r+=s;o>r&&!/\S/u.test(e[o-1]);--o);let D=Tu(u,r,t,(c,p)=>standalone_n(t,c,p),[],"rangeStart");if(!D)return;let f=i?D:Tu(u,o,t,c=>standalone_n(t,c),[],"rangeEnd");if(!f)return;let l,d;if(standalone_ka(t)){let c=standalone_va(D,f);l=c,d=c}else[l,d]=standalone_Ra(D,f,t);return[Math.min(n(l),n(d)),Math.max(a(l),a(d))]}var standalone_wn="\uFEFF",standalone_Tn=Symbol("cursor");async function standalone_On(e,t,u=0){if(!e||e.trim().length===0)return{formatted:"",cursorOffset:-1,comments:[]};let{ast:r,text:o}=await standalone_Fe(e,t);t.cursorOffset>=0&&(t={...t,...Bu(r,t)});let n=await Ge(r,t,u);u>0&&(n=standalone_tt([standalone_V,n],u,t.tabWidth));let a=standalone_Ce(n,t);if(u>0){let i=a.formatted.trim();a.cursorNodeStart!==void 0&&(a.cursorNodeStart-=a.formatted.indexOf(i),a.cursorNodeStart<0&&(a.cursorNodeStart=0,a.cursorNodeText=a.cursorNodeText.trimStart()),a.cursorNodeStart+a.cursorNodeText.length>i.length&&(a.cursorNodeText=a.cursorNodeText.trimEnd())),a.formatted=i+standalone_Se(t.endOfLine)}let s=t[Symbol.for("comments")];if(t.cursorOffset>=0){let i,D,f,l;if((t.cursorNode||t.nodeBeforeCursor||t.nodeAfterCursor)&&a.cursorNodeText)if(f=a.cursorNodeStart,l=a.cursorNodeText,t.cursorNode)i=t.locStart(t.cursorNode),D=o.slice(i,t.locEnd(t.cursorNode));else{if(!t.nodeBeforeCursor&&!t.nodeAfterCursor)throw new Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");i=t.nodeBeforeCursor?t.locEnd(t.nodeBeforeCursor):0;let y=t.nodeAfterCursor?t.locStart(t.nodeAfterCursor):o.length;D=o.slice(i,y)}else i=0,D=o,f=0,l=a.formatted;let d=t.cursorOffset-i;if(D===l)return{formatted:a.formatted,cursorOffset:f+d,comments:s};let c=D.split("");c.splice(d,0,standalone_Tn);let p=l.split(""),F=standalone_Ut(c,p),C=f;for(let y of F)if(y.removed){if(y.value.includes(standalone_Tn))break}else C+=y.count;return{formatted:a.formatted,cursorOffset:C,comments:s}}return{formatted:a.formatted,cursorOffset:-1,comments:s}}async function standalone_Ya(e,t){let{ast:u,text:r}=await standalone_Fe(e,t),[o,n]=standalone_Bn(r,t,u)??[0,0],a=r.slice(o,n),s=Math.min(o,r.lastIndexOf(`
`,o)+1),i=r.slice(s,o).match(/^\s*/u)[0],D=standalone_he(i,t.tabWidth),f=await standalone_On(a,{...t,rangeStart:0,rangeEnd:Number.POSITIVE_INFINITY,cursorOffset:t.cursorOffset>o&&t.cursorOffset<=n?t.cursorOffset-o:-1,endOfLine:"lf"},D),l=f.formatted.trimEnd(),{cursorOffset:d}=t;d>n?d+=l.length-a.length:f.cursorOffset>=0&&(d=f.cursorOffset+o);let c=r.slice(0,o)+l+r.slice(n);if(t.endOfLine!=="lf"){let p=standalone_Se(t.endOfLine);d>=0&&p===`\r
`&&(d+=$t(c.slice(0,d),`
`)),c=standalone_oe(0,c,`
`,p)}return{formatted:c,cursorOffset:d,comments:f.comments}}function Nu(e,t,u){return typeof t!="number"||Number.isNaN(t)||t<0||t>e.length?u:t}function standalone_Nn(e,t){let{cursorOffset:u,rangeStart:r,rangeEnd:o}=t;return u=Nu(e,u,-1),r=Nu(e,r,0),o=Nu(e,o,e.length),{...t,cursorOffset:u,rangeStart:r,rangeEnd:o}}function standalone_Pn(e,t){let{cursorOffset:u,rangeStart:r,rangeEnd:o,endOfLine:n}=standalone_Nn(e,t),a=e.charAt(0)===standalone_wn;if(a&&(e=e.slice(1),u--,r--,o--),n==="auto"&&(n=Yu(e)),e.includes("\r")){let s=i=>$t(e.slice(0,Math.max(i,0)),`\r
`);u-=s(u),r-=s(r),o-=s(o),e=ju(e)}return{hasBOM:a,text:e,options:standalone_Nn(e,{...t,cursorOffset:u,rangeStart:r,rangeEnd:o,endOfLine:n})}}async function standalone_Sn(e,t){let u=await standalone_We(t);return!u.hasPragma||u.hasPragma(e)}async function standalone_ja(e,t){return(await standalone_We(t)).hasIgnorePragma?.(e)}async function Su(e,t){let{hasBOM:u,text:r,options:o}=standalone_Pn(e,await se(t));if(o.rangeStart>=o.rangeEnd&&r!==""||o.requirePragma&&!await standalone_Sn(r,o)||o.checkIgnorePragma&&await standalone_ja(r,o))return{formatted:e,cursorOffset:t.cursorOffset,comments:[]};let n;return o.rangeStart>0||o.rangeEnd<r.length?n=await standalone_Ya(r,o):(!o.requirePragma&&o.insertPragma&&o.printer.insertPragma&&!await standalone_Sn(r,o)&&(r=o.printer.insertPragma(r)),n=await standalone_On(r,o)),u&&(n.formatted=standalone_wn+n.formatted,n.cursorOffset>=0&&n.cursorOffset++),n}async function standalone_In(e,t,u){let{text:r,options:o}=standalone_Pn(e,await se(t)),n=await standalone_Fe(r,o);return u&&(u.preprocessForPrint&&(n.ast=await xu(n.ast,o)),u.massage&&(n.ast=standalone_yn(n.ast,o))),n}async function standalone_kn(e,t){t=await se(t);let u=await Ge(e,t);return standalone_Ce(u,t)}async function standalone_vn(e,t){let u=standalone_sr(e),{formatted:r}=await Su(u,{...t,parser:"__js_expression"});return r}async function standalone_Rn(e,t){t=await se(t);let{ast:u}=await standalone_Fe(e,t);return t.cursorOffset>=0&&(t={...t,...Bu(u,t)}),Ge(u,t)}async function standalone_Ln(e,t){return standalone_Ce(e,await se(t))}var wu={};Yt(wu,{builders:()=>standalone_Wa,printer:()=>standalone_$a,utils:()=>standalone_Va});var standalone_Wa={join:standalone_Ie,line:standalone_ut,softline:standalone_or,hardline:standalone_V,literalline:standalone_Qe,group:Kt,conditionalGroup:standalone_tr,fill:standalone_er,lineSuffix:standalone_ve,lineSuffixBoundary:standalone_ar,cursor:ee,breakParent:standalone_ce,ifBreak:standalone_ur,trim:standalone_ir,indent:ae,indentIfBreak:standalone_rr,align:standalone_De,addAlignmentToDoc:standalone_tt,markAsRoot:standalone_et,dedentToRoot:Qu,dedent:Zu,hardlineWithoutBreakParent:ke,literallineWithoutBreakParent:Gt,label:nr,concat:e=>e},standalone_$a={printDocToString:standalone_Ce},standalone_Va={willBreak:Ku,traverseDoc:standalone_we,findInDoc:standalone_Xe,mapDoc:standalone_Pe,removeLines:zu,stripTrailingHardline:standalone_qe,replaceEndOfLine:Ju,canBreak:Hu};var standalone_Mn="3.8.1";var Pu={};Yt(Pu,{addDanglingComment:()=>standalone_ue,addLeadingComment:()=>standalone_fe,addTrailingComment:()=>le,getAlignmentSize:()=>standalone_he,getIndentSize:()=>standalone_Yn,getMaxContinuousCount:()=>standalone_jn,getNextNonSpaceNonCommentCharacter:()=>standalone_Un,getNextNonSpaceNonCommentCharacterIndex:()=>standalone_ni,getPreferredQuote:()=>standalone_Vn,getStringWidth:()=>standalone_Re,hasNewline:()=>z,hasNewlineInRange:()=>standalone_Kn,hasSpaces:()=>standalone_Gn,isNextLineEmpty:()=>standalone_Di,isNextLineEmptyAfterIndex:()=>standalone_kt,isPreviousLineEmpty:()=>standalone_ai,makeString:()=>standalone_si,skip:()=>standalone_ye,skipEverythingButNewLine:()=>standalone_ot,skipInlineComment:()=>standalone_xe,skipNewline:()=>standalone_K,skipSpaces:()=>standalone_Y,skipToLineEnd:()=>standalone_nt,skipTrailingComment:()=>standalone_Be,skipWhitespace:()=>Fr});function standalone_Ka(e,t){if(t===!1)return!1;if(e.charAt(t)==="/"&&e.charAt(t+1)==="*"){for(let u=t+2;u<e.length;++u)if(e.charAt(u)==="*"&&e.charAt(u+1)==="/")return u+2}return t}var standalone_xe=standalone_Ka;function standalone_Ga(e,t){return t===!1?!1:e.charAt(t)==="/"&&e.charAt(t+1)==="/"?standalone_ot(e,t):t}var standalone_Be=standalone_Ga;function standalone_za(e,t){let u=null,r=t;for(;r!==u;)u=r,r=standalone_Y(e,r),r=standalone_xe(e,r),r=standalone_Be(e,r),r=standalone_K(e,r);return r}var standalone_ze=standalone_za;function standalone_Ja(e,t){let u=null,r=t;for(;r!==u;)u=r,r=standalone_nt(e,r),r=standalone_xe(e,r),r=standalone_Y(e,r);return r=standalone_Be(e,r),r=standalone_K(e,r),r!==!1&&z(e,r)}var standalone_kt=standalone_Ja;function standalone_Ha(e,t){let u=e.lastIndexOf(`
`);return u===-1?0:standalone_he(e.slice(u+1).match(/^[\t ]*/u)[0],t)}var standalone_Yn=standalone_Ha;function Ou(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function standalone_Xa(e,t){let u=e.matchAll(new RegExp(`(?:${Ou(t)})+`,"gu"));return u.reduce||(u=[...u]),u.reduce((r,[o])=>Math.max(r,o.length),0)/t.length}var standalone_jn=standalone_Xa;function standalone_qa(e,t){let u=standalone_ze(e,t);return u===!1?"":e.charAt(u)}var standalone_Un=standalone_qa;var standalone_Wn=Object.freeze({character:"'",codePoint:39}),standalone_$n=Object.freeze({character:'"',codePoint:34}),standalone_Qa=Object.freeze({preferred:standalone_Wn,alternate:standalone_$n}),standalone_Za=Object.freeze({preferred:standalone_$n,alternate:standalone_Wn});function standalone_ei(e,t){let{preferred:u,alternate:r}=t===!0||t==="'"?standalone_Qa:standalone_Za,{length:o}=e,n=0,a=0;for(let s=0;s<o;s++){let i=e.charCodeAt(s);i===u.codePoint?n++:i===r.codePoint&&a++}return(n>a?r:u).character}var standalone_Vn=standalone_ei;function standalone_ti(e,t,u){for(let r=t;r<u;++r)if(e.charAt(r)===`
`)return!0;return!1}var standalone_Kn=standalone_ti;function standalone_ui(e,t,u={}){return standalone_Y(e,u.backwards?t-1:t,u)!==t}var standalone_Gn=standalone_ui;function standalone_ri(e,t,u){return standalone_ze(e,u(t))}function standalone_ni(e,t){return arguments.length===2||typeof t=="number"?standalone_ze(e,t):standalone_ri(...arguments)}function standalone_oi(e,t,u){return standalone_Le(e,u(t))}function standalone_ai(e,t){return arguments.length===2||typeof t=="number"?standalone_Le(e,t):standalone_oi(...arguments)}function standalone_ii(e,t,u){return standalone_kt(e,u(t))}function standalone_si(e,t,u){let r=t==='"'?"'":'"',n=standalone_oe(0,e,/\\(.)|(["'])/gsu,(a,s,i)=>s===r?s:i===t?"\\"+i:i||(u&&/^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s)?s:"\\"+s));return t+n+t}function standalone_Di(e,t){return arguments.length===2||typeof t=="number"?standalone_kt(e,t):standalone_ii(...arguments)}function standalone_me(e,t=1){return async(...u)=>{let r=u[t]??{},o=r.plugins??[];return u[t]={...r,plugins:Array.isArray(o)?o:Object.values(o)},e(...u)}}var standalone_zn=standalone_me(Su);async function standalone_Jn(e,t){let{formatted:u}=await standalone_zn(e,{...t,cursorOffset:-1});return u}async function standalone_ci(e,t){return await standalone_Jn(e,t)===e}var standalone_fi=standalone_me(standalone_it,0),standalone_li={parse:standalone_me(standalone_In),formatAST:standalone_me(standalone_kn),formatDoc:standalone_me(standalone_vn),printToDoc:standalone_me(standalone_Rn),printDocToString:standalone_me(standalone_Ln)};

;// CONCATENATED MODULE: ./node_modules/domelementtype/lib/esm/index.js
/** Types of elements found in htmlparser2's DOM */
var esm_ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(esm_ElementType || (esm_ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function esm_isTag(elem) {
    return (elem.type === esm_ElementType.Tag ||
        elem.type === esm_ElementType.Script ||
        elem.type === esm_ElementType.Style);
}
// Exports for backwards compatibility
/** Type for the root element of a document */
const Root = esm_ElementType.Root;
/** Type for Text */
const Text = esm_ElementType.Text;
/** Type for <? ... ?> */
const Directive = esm_ElementType.Directive;
/** Type for <!-- ... --> */
const Comment = esm_ElementType.Comment;
/** Type for <script> tags */
const Script = esm_ElementType.Script;
/** Type for <style> tags */
const Style = esm_ElementType.Style;
/** Type for Any tag */
const Tag = esm_ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
const CDATA = esm_ElementType.CDATA;
/** Type for <!doctype ...> */
const Doctype = esm_ElementType.Doctype;

;// CONCATENATED MODULE: ./node_modules/domhandler/lib/esm/node.js

/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
class Node {
    constructor() {
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    // Read-write aliases for properties
    /**
     * Same as {@link parent}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get parentNode() {
        return this.parent;
    }
    set parentNode(parent) {
        this.parent = parent;
    }
    /**
     * Same as {@link prev}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get previousSibling() {
        return this.prev;
    }
    set previousSibling(prev) {
        this.prev = prev;
    }
    /**
     * Same as {@link next}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get nextSibling() {
        return this.next;
    }
    set nextSibling(next) {
        this.next = next;
    }
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    cloneNode(recursive = false) {
        return cloneNode(this, recursive);
    }
}
/**
 * A node that contains some data.
 */
class DataNode extends Node {
    /**
     * @param data The content of the data node
     */
    constructor(data) {
        super();
        this.data = data;
    }
    /**
     * Same as {@link data}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get nodeValue() {
        return this.data;
    }
    set nodeValue(data) {
        this.data = data;
    }
}
/**
 * Text within the document.
 */
class node_Text extends DataNode {
    constructor() {
        super(...arguments);
        this.type = esm_ElementType.Text;
    }
    get nodeType() {
        return 3;
    }
}
/**
 * Comments within the document.
 */
class node_Comment extends DataNode {
    constructor() {
        super(...arguments);
        this.type = esm_ElementType.Comment;
    }
    get nodeType() {
        return 8;
    }
}
/**
 * Processing instructions, including doc types.
 */
class ProcessingInstruction extends DataNode {
    constructor(name, data) {
        super(data);
        this.name = name;
        this.type = esm_ElementType.Directive;
    }
    get nodeType() {
        return 1;
    }
}
/**
 * A `Node` that can have children.
 */
class NodeWithChildren extends Node {
    /**
     * @param children Children of the node. Only certain node types can have children.
     */
    constructor(children) {
        super();
        this.children = children;
    }
    // Aliases
    /** First child of the node. */
    get firstChild() {
        var _a;
        return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
    }
    /** Last child of the node. */
    get lastChild() {
        return this.children.length > 0
            ? this.children[this.children.length - 1]
            : null;
    }
    /**
     * Same as {@link children}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get childNodes() {
        return this.children;
    }
    set childNodes(children) {
        this.children = children;
    }
}
class node_CDATA extends NodeWithChildren {
    constructor() {
        super(...arguments);
        this.type = esm_ElementType.CDATA;
    }
    get nodeType() {
        return 4;
    }
}
/**
 * The root node of the document.
 */
class Document extends NodeWithChildren {
    constructor() {
        super(...arguments);
        this.type = esm_ElementType.Root;
    }
    get nodeType() {
        return 9;
    }
}
/**
 * An element within the DOM.
 */
class Element extends NodeWithChildren {
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    constructor(name, attribs, children = [], type = name === "script"
        ? esm_ElementType.Script
        : name === "style"
            ? esm_ElementType.Style
            : esm_ElementType.Tag) {
        super(children);
        this.name = name;
        this.attribs = attribs;
        this.type = type;
    }
    get nodeType() {
        return 1;
    }
    // DOM Level 1 aliases
    /**
     * Same as {@link name}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get tagName() {
        return this.name;
    }
    set tagName(name) {
        this.name = name;
    }
    get attributes() {
        return Object.keys(this.attribs).map((name) => {
            var _a, _b;
            return ({
                name,
                value: this.attribs[name],
                namespace: (_a = this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
            });
        });
    }
}
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function node_isTag(node) {
    return esm_isTag(node);
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function node_isCDATA(node) {
    return node.type === esm_ElementType.CDATA;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function node_isText(node) {
    return node.type === esm_ElementType.Text;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function node_isComment(node) {
    return node.type === esm_ElementType.Comment;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === esm_ElementType.Directive;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === esm_ElementType.Root;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */
function node_hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive = false) {
    let result;
    if (node_isText(node)) {
        result = new node_Text(node.data);
    }
    else if (node_isComment(node)) {
        result = new node_Comment(node.data);
    }
    else if (node_isTag(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Element(node.name, { ...node.attribs }, children);
        children.forEach((child) => (child.parent = clone));
        if (node.namespace != null) {
            clone.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone["x-attribsNamespace"] = { ...node["x-attribsNamespace"] };
        }
        if (node["x-attribsPrefix"]) {
            clone["x-attribsPrefix"] = { ...node["x-attribsPrefix"] };
        }
        result = clone;
    }
    else if (node_isCDATA(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new node_CDATA(children);
        children.forEach((child) => (child.parent = clone));
        result = clone;
    }
    else if (isDocument(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Document(children);
        children.forEach((child) => (child.parent = clone));
        if (node["x-mode"]) {
            clone["x-mode"] = node["x-mode"];
        }
        result = clone;
    }
    else if (isDirective(node)) {
        const instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error(`Not implemented yet: ${node.type}`);
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
function cloneChildren(childs) {
    const children = childs.map((child) => cloneNode(child, true));
    for (let i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}

;// CONCATENATED MODULE: ./node_modules/domhandler/lib/esm/index.js



// Default options
const defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false,
};
class esm_DomHandler {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    constructor(callback, options, elementCB) {
        /** The elements of the DOM */
        this.dom = [];
        /** The root element for the DOM */
        this.root = new Document(this.dom);
        /** Indicated whether parsing has been completed. */
        this.done = false;
        /** Stack of open tags. */
        this.tagStack = [this.root];
        /** A data node that is still being written to. */
        this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */
        this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    onparserinit(parser) {
        this.parser = parser;
    }
    // Resets the handler back to starting state
    onreset() {
        this.dom = [];
        this.root = new Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
    }
    // Signals the handler that parsing is done
    onend() {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    }
    onerror(error) {
        this.handleCallback(error);
    }
    onclosetag() {
        this.lastNode = null;
        const elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    }
    onopentag(name, attribs) {
        const type = this.options.xmlMode ? esm_ElementType.Tag : undefined;
        const element = new Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    }
    ontext(data) {
        const { lastNode } = this;
        if (lastNode && lastNode.type === esm_ElementType.Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        }
        else {
            const node = new node_Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    }
    oncomment(data) {
        if (this.lastNode && this.lastNode.type === esm_ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        const node = new node_Comment(data);
        this.addNode(node);
        this.lastNode = node;
    }
    oncommentend() {
        this.lastNode = null;
    }
    oncdatastart() {
        const text = new node_Text("");
        const node = new node_CDATA([text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    }
    oncdataend() {
        this.lastNode = null;
    }
    onprocessinginstruction(name, data) {
        const node = new ProcessingInstruction(name, data);
        this.addNode(node);
    }
    handleCallback(error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    }
    addNode(node) {
        const parent = this.tagStack[this.tagStack.length - 1];
        const previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    }
}
/* harmony default export */ const esm = ((/* unused pure expression or super */ null && (esm_DomHandler)));

;// CONCATENATED MODULE: ./node_modules/leac/lib/leac.mjs
const e=/\n/g;function n(n){const o=[...n.matchAll(e)].map((e=>e.index||0));o.unshift(-1);const s=t(o,0,o.length);return e=>r(s,e)}function t(e,n,r){if(r-n==1)return{offset:e[n],index:n+1};const o=Math.ceil((n+r)/2),s=t(e,n,o),l=t(e,o,r);return{offset:s.offset,low:s,high:l}}function r(e,n){return function(e){return Object.prototype.hasOwnProperty.call(e,"index")}(e)?{line:e.index,column:n-e.offset}:r(e.high.offset<n?e.high:e.low,n)}function o(e,t="",r={}){const o="string"!=typeof t?t:r,l="string"==typeof t?t:"",c=e.map(s),f=!!o.lineNumbers;return function(e,t=0){const r=f?n(e):()=>({line:0,column:0});let o=t;const s=[];e:for(;o<e.length;){let n=!1;for(const t of c){t.regex.lastIndex=o;const c=t.regex.exec(e);if(c&&c[0].length>0){if(!t.discard){const e=r(o),n="string"==typeof t.replace?c[0].replace(new RegExp(t.regex.source,t.regex.flags),t.replace):c[0];s.push({state:l,name:t.name,text:n,offset:o,len:c[0].length,line:e.line,column:e.column})}if(o=t.regex.lastIndex,n=!0,t.push){const n=t.push(e,o);s.push(...n.tokens),o=n.offset}if(t.pop)break e;break}}if(!n)break}return{tokens:s,offset:o,complete:e.length<=o}}}function s(e,n){return{...e,regex:leac_l(e,n)}}function leac_l(e,n){if(0===e.name.length)throw new Error(`Rule #${n} has empty name, which is not allowed.`);if(function(e){return Object.prototype.hasOwnProperty.call(e,"regex")}(e))return function(e){if(e.global)throw new Error(`Regular expression /${e.source}/${e.flags} contains the global flag, which is not allowed.`);return e.sticky?e:new RegExp(e.source,e.flags+"y")}(e.regex);if(function(e){return Object.prototype.hasOwnProperty.call(e,"str")}(e)){if(0===e.str.length)throw new Error(`Rule #${n} ("${e.name}") has empty "str" property, which is not allowed.`);return new RegExp(c(e.str),"y")}return new RegExp(c(e.name),"y")}function c(e){return e.replace(/[-[\]{}()*+!<=:?./\\^$|#\s,]/g,"\\$&")}

;// CONCATENATED MODULE: ./node_modules/peberminta/lib/core.mjs


function emit(value) {
    return (data, i) => ({
        matched: true,
        position: i,
        value: value
    });
}
function make(
f) {
    return (data, i) => ({
        matched: true,
        position: i,
        value: f(data, i)
    });
}
function action(
f) {
    return (data, i) => {
        f(data, i);
        return {
            matched: true,
            position: i,
            value: null
        };
    };
}
function fail(
data, i) {
    return { matched: false };
}
function error(message) {
    return (data, i) => {
        throw new Error((message instanceof Function) ? message(data, i) : message);
    };
}
function token(
onToken,
onEnd) {
    return (data, i) => {
        let position = i;
        let value = undefined;
        if (i < data.tokens.length) {
            value = onToken(data.tokens[i], data, i);
            if (value !== undefined) {
                position++;
            }
        }
        else {
            onEnd?.(data, i);
        }
        return (value === undefined)
            ? { matched: false }
            : {
                matched: true,
                position: position,
                value: value
            };
    };
}
function any(data, i) {
    return (i < data.tokens.length)
        ? {
            matched: true,
            position: i + 1,
            value: data.tokens[i]
        }
        : { matched: false };
}
function satisfy(
test) {
    return (data, i) => (i < data.tokens.length && test(data.tokens[i], data, i))
        ? {
            matched: true,
            position: i + 1,
            value: data.tokens[i]
        }
        : { matched: false };
}
function mapInner(r, f) {
    return (r.matched) ? ({
        matched: true,
        position: r.position,
        value: f(r.value, r.position)
    }) : r;
}
function mapOuter(r, f) {
    return (r.matched) ? f(r) : r;
}
function map(p, mapper) {
    return (data, i) => mapInner(p(data, i), (v, j) => mapper(v, data, i, j));
}
function map1(p,
mapper) {
    return (data, i) => mapOuter(p(data, i), (m) => mapper(m, data, i));
}
function peek(p, f) {
    return (data, i) => {
        const r = p(data, i);
        f(r, data, i);
        return r;
    };
}
function core_option(p, def) {
    return (data, i) => {
        const r = p(data, i);
        return (r.matched)
            ? r
            : {
                matched: true,
                position: i,
                value: def
            };
    };
}
function not(p) {
    return (data, i) => {
        const r = p(data, i);
        return (r.matched)
            ? { matched: false }
            : {
                matched: true,
                position: i,
                value: true
            };
    };
}
function choice(...ps) {
    return (data, i) => {
        for (const p of ps) {
            const result = p(data, i);
            if (result.matched) {
                return result;
            }
        }
        return { matched: false };
    };
}
function otherwise(pa, pb) {
    return (data, i) => {
        const r1 = pa(data, i);
        return (r1.matched)
            ? r1
            : pb(data, i);
    };
}
function longest(...ps) {
    return (data, i) => {
        let match = undefined;
        for (const p of ps) {
            const result = p(data, i);
            if (result.matched && (!match || match.position < result.position)) {
                match = result;
            }
        }
        return match || { matched: false };
    };
}
function takeWhile(p,
test) {
    return (data, i) => {
        const values = [];
        let success = true;
        do {
            const r = p(data, i);
            if (r.matched && test(r.value, values.length + 1, data, i, r.position)) {
                values.push(r.value);
                i = r.position;
            }
            else {
                success = false;
            }
        } while (success);
        return {
            matched: true,
            position: i,
            value: values
        };
    };
}
function takeUntil(p,
test) {
    return takeWhile(p, (value, n, data, i, j) => !test(value, n, data, i, j));
}
function takeWhileP(pValue, pTest) {
    return takeWhile(pValue, (value, n, data, i) => pTest(data, i).matched);
}
function takeUntilP(pValue, pTest) {
    return takeWhile(pValue, (value, n, data, i) => !pTest(data, i).matched);
}
function many(p) {
    return takeWhile(p, () => true);
}
function many1(p) {
    return ab(p, many(p), (head, tail) => [head, ...tail]);
}
function ab(pa, pb, join) {
    return (data, i) => mapOuter(pa(data, i), (ma) => mapInner(pb(data, ma.position), (vb, j) => join(ma.value, vb, data, i, j)));
}
function left(pa, pb) {
    return ab(pa, pb, (va) => va);
}
function right(pa, pb) {
    return ab(pa, pb, (va, vb) => vb);
}
function abc(pa, pb, pc, join) {
    return (data, i) => mapOuter(pa(data, i), (ma) => mapOuter(pb(data, ma.position), (mb) => mapInner(pc(data, mb.position), (vc, j) => join(ma.value, mb.value, vc, data, i, j))));
}
function middle(pa, pb, pc) {
    return abc(pa, pb, pc, (ra, rb) => rb);
}
function core_all(...ps) {
    return (data, i) => {
        const result = [];
        let position = i;
        for (const p of ps) {
            const r1 = p(data, position);
            if (r1.matched) {
                result.push(r1.value);
                position = r1.position;
            }
            else {
                return { matched: false };
            }
        }
        return {
            matched: true,
            position: position,
            value: result
        };
    };
}
function skip(...ps) {
    return map(core_all(...ps), () => null);
}
function flatten(...ps) {
    return flatten1(core_all(...ps));
}
function flatten1(p) {
    return map(p, (vs) => vs.flatMap((v) => v));
}
function sepBy1(pValue, pSep) {
    return ab(pValue, many(right(pSep, pValue)), (head, tail) => [head, ...tail]);
}
function sepBy(pValue, pSep) {
    return otherwise(sepBy1(pValue, pSep), emit([]));
}
function chainReduce(acc,
f) {
    return (data, i) => {
        let loop = true;
        let acc1 = acc;
        let pos = i;
        do {
            const r = f(acc1, data, pos)(data, pos);
            if (r.matched) {
                acc1 = r.value;
                pos = r.position;
            }
            else {
                loop = false;
            }
        } while (loop);
        return {
            matched: true,
            position: pos,
            value: acc1
        };
    };
}
function reduceLeft(acc, p,
reducer) {
    return chainReduce(acc, (acc) => map(p, (v, data, i, j) => reducer(acc, v, data, i, j)));
}
function reduceRight(p, acc,
reducer) {
    return map(many(p), (vs, data, i, j) => vs.reduceRight((acc, v) => reducer(v, acc, data, i, j), acc));
}
function leftAssoc1(pLeft, pOper) {
    return chain(pLeft, (v0) => reduceLeft(v0, pOper, (acc, f) => f(acc)));
}
function rightAssoc1(pOper, pRight) {
    return ab(reduceRight(pOper, (y) => y, (f, acc) => (y) => f(acc(y))), pRight, (f, v) => f(v));
}
function leftAssoc2(pLeft, pOper, pRight) {
    return chain(pLeft, (v0) => reduceLeft(v0, ab(pOper, pRight, (f, y) => [f, y]), (acc, [f, y]) => f(acc, y)));
}
function rightAssoc2(pLeft, pOper, pRight) {
    return ab(reduceRight(ab(pLeft, pOper, (x, f) => [x, f]), (y) => y, ([x, f], acc) => (y) => f(x, acc(y))), pRight, (f, v) => f(v));
}
function condition(cond, pTrue, pFalse) {
    return (data, i) => (cond(data, i))
        ? pTrue(data, i)
        : pFalse(data, i);
}
function decide(p) {
    return (data, i) => mapOuter(p(data, i), (m1) => m1.value(data, m1.position));
}
function chain(p,
f) {
    return (data, i) => mapOuter(p(data, i), (m1) => f(m1.value, data, i, m1.position)(data, m1.position));
}
function ahead(p) {
    return (data, i) => mapOuter(p(data, i), (m1) => ({
        matched: true,
        position: i,
        value: m1.value
    }));
}
function recursive(f) {
    return function (data, i) {
        return f()(data, i);
    };
}
function start(data, i) {
    return (i !== 0)
        ? { matched: false }
        : {
            matched: true,
            position: i,
            value: true
        };
}
function end(data, i) {
    return (i < data.tokens.length)
        ? { matched: false }
        : {
            matched: true,
            position: i,
            value: true
        };
}
function remainingTokensNumber(data, i) {
    return data.tokens.length - i;
}
function parserPosition(data, i, formatToken, contextTokens = 3) {
    const len = data.tokens.length;
    const lowIndex = clamp(0, i - contextTokens, len - contextTokens);
    const highIndex = clamp(contextTokens, i + 1 + contextTokens, len);
    const tokensSlice = data.tokens.slice(lowIndex, highIndex);
    const lines = [];
    const indexWidth = String(highIndex - 1).length + 1;
    if (i < 0) {
        lines.push(`${String(i).padStart(indexWidth)} >>`);
    }
    if (0 < lowIndex) {
        lines.push('...'.padStart(indexWidth + 6));
    }
    for (let j = 0; j < tokensSlice.length; j++) {
        const index = lowIndex + j;
        lines.push(`${String(index).padStart(indexWidth)} ${(index === i ? '>' : ' ')} ${escapeWhitespace(formatToken(tokensSlice[j]))}`);
    }
    if (highIndex < len) {
        lines.push('...'.padStart(indexWidth + 6));
    }
    if (len <= i) {
        lines.push(`${String(i).padStart(indexWidth)} >>`);
    }
    return lines.join('\n');
}
function parse(parser, tokens, options, formatToken = JSON.stringify) {
    const data = { tokens: tokens, options: options };
    const result = parser(data, 0);
    if (!result.matched) {
        throw new Error('No match');
    }
    if (result.position < data.tokens.length) {
        throw new Error(`Partial match. Parsing stopped at:\n${parserPosition(data, result.position, formatToken)}`);
    }
    return result.value;
}
function tryParse(parser, tokens, options) {
    const result = parser({ tokens: tokens, options: options }, 0);
    return (result.matched)
        ? result.value
        : undefined;
}
function match(matcher, tokens, options) {
    const result = matcher({ tokens: tokens, options: options }, 0);
    return result.value;
}



;// CONCATENATED MODULE: ./node_modules/parseley/lib/parseley.mjs



var ast = /*#__PURE__*/Object.freeze({
    __proto__: null
});

const parseley_ws = `(?:[ \\t\\r\\n\\f]*)`;
const parseley_nl = `(?:\\n|\\r\\n|\\r|\\f)`;
const nonascii = `[^\\x00-\\x7F]`;
const unicode = `(?:\\\\[0-9a-f]{1,6}(?:\\r\\n|[ \\n\\r\\t\\f])?)`;
const parseley_escape = `(?:\\\\[^\\n\\r\\f0-9a-f])`;
const nmstart = `(?:[_a-z]|${nonascii}|${unicode}|${parseley_escape})`;
const nmchar = `(?:[_a-z0-9-]|${nonascii}|${unicode}|${parseley_escape})`;
const parseley_name = `(?:${nmchar}+)`;
const ident = `(?:[-]?${nmstart}${nmchar}*)`;
const string1 = `'([^\\n\\r\\f\\\\']|\\\\${parseley_nl}|${nonascii}|${unicode}|${parseley_escape})*'`;
const string2 = `"([^\\n\\r\\f\\\\"]|\\\\${parseley_nl}|${nonascii}|${unicode}|${parseley_escape})*"`;
const lexSelector = o([
    { name: 'ws', regex: new RegExp(parseley_ws) },
    { name: 'hash', regex: new RegExp(`#${parseley_name}`, 'i') },
    { name: 'ident', regex: new RegExp(ident, 'i') },
    { name: 'str1', regex: new RegExp(string1, 'i') },
    { name: 'str2', regex: new RegExp(string2, 'i') },
    { name: '*' },
    { name: '.' },
    { name: ',' },
    { name: '[' },
    { name: ']' },
    { name: '=' },
    { name: '>' },
    { name: '|' },
    { name: '+' },
    { name: '~' },
    { name: '^' },
    { name: '$' },
]);
const lexEscapedString = o([
    { name: 'unicode', regex: new RegExp(unicode, 'i') },
    { name: 'escape', regex: new RegExp(parseley_escape, 'i') },
    { name: 'any', regex: new RegExp('[\\s\\S]', 'i') }
]);
function sumSpec([a0, a1, a2], [b0, b1, b2]) {
    return [a0 + b0, a1 + b1, a2 + b2];
}
function sumAllSpec(ss) {
    return ss.reduce(sumSpec, [0, 0, 0]);
}
const unicodeEscapedSequence_ = token((t) => t.name === 'unicode' ? String.fromCodePoint(parseInt(t.text.slice(1), 16)) : undefined);
const escapedSequence_ = token((t) => t.name === 'escape' ? t.text.slice(1) : undefined);
const anyChar_ = token((t) => t.name === 'any' ? t.text : undefined);
const escapedString_ = map(many(choice(unicodeEscapedSequence_, escapedSequence_, anyChar_)), (cs) => cs.join(''));
function parseley_unescape(escapedString) {
    const lexerResult = lexEscapedString(escapedString);
    const result = escapedString_({ tokens: lexerResult.tokens, options: undefined }, 0);
    return result.value;
}
function literal(name) {
    return token((t) => t.name === name ? true : undefined);
}
const whitespace_ = token((t) => t.name === 'ws' ? null : undefined);
const optionalWhitespace_ = core_option(whitespace_, null);
function optionallySpaced(parser) {
    return middle(optionalWhitespace_, parser, optionalWhitespace_);
}
const identifier_ = token((t) => t.name === 'ident' ? parseley_unescape(t.text) : undefined);
const hashId_ = token((t) => t.name === 'hash' ? parseley_unescape(t.text.slice(1)) : undefined);
const string_ = token((t) => t.name.startsWith('str') ? parseley_unescape(t.text.slice(1, -1)) : undefined);
const namespace_ = left(core_option(identifier_, ''), literal('|'));
const qualifiedName_ = otherwise(ab(namespace_, identifier_, (ns, name) => ({ name: name, namespace: ns })), map(identifier_, (name) => ({ name: name, namespace: null })));
const uniSelector_ = otherwise(ab(namespace_, literal('*'), (ns) => ({ type: 'universal', namespace: ns, specificity: [0, 0, 0] })), map(literal('*'), () => ({ type: 'universal', namespace: null, specificity: [0, 0, 0] })));
const tagSelector_ = map(qualifiedName_, ({ name, namespace }) => ({
    type: 'tag',
    name: name,
    namespace: namespace,
    specificity: [0, 0, 1]
}));
const classSelector_ = ab(literal('.'), identifier_, (fullstop, name) => ({
    type: 'class',
    name: name,
    specificity: [0, 1, 0]
}));
const idSelector_ = map(hashId_, (name) => ({
    type: 'id',
    name: name,
    specificity: [1, 0, 0]
}));
const attrModifier_ = token((t) => {
    if (t.name === 'ident') {
        if (t.text === 'i' || t.text === 'I') {
            return 'i';
        }
        if (t.text === 's' || t.text === 'S') {
            return 's';
        }
    }
    return undefined;
});
const attrValue_ = otherwise(ab(string_, core_option(right(optionalWhitespace_, attrModifier_), null), (v, mod) => ({ value: v, modifier: mod })), ab(identifier_, core_option(right(whitespace_, attrModifier_), null), (v, mod) => ({ value: v, modifier: mod })));
const attrMatcher_ = choice(map(literal('='), () => '='), ab(literal('~'), literal('='), () => '~='), ab(literal('|'), literal('='), () => '|='), ab(literal('^'), literal('='), () => '^='), ab(literal('$'), literal('='), () => '$='), ab(literal('*'), literal('='), () => '*='));
const attrPresenceSelector_ = abc(literal('['), optionallySpaced(qualifiedName_), literal(']'), (lbr, { name, namespace }) => ({
    type: 'attrPresence',
    name: name,
    namespace: namespace,
    specificity: [0, 1, 0]
}));
const attrValueSelector_ = middle(literal('['), abc(optionallySpaced(qualifiedName_), attrMatcher_, optionallySpaced(attrValue_), ({ name, namespace }, matcher, { value, modifier }) => ({
    type: 'attrValue',
    name: name,
    namespace: namespace,
    matcher: matcher,
    value: value,
    modifier: modifier,
    specificity: [0, 1, 0]
})), literal(']'));
const attrSelector_ = otherwise(attrPresenceSelector_, attrValueSelector_);
const typeSelector_ = otherwise(uniSelector_, tagSelector_);
const subclassSelector_ = choice(idSelector_, classSelector_, attrSelector_);
const compoundSelector_ = map(otherwise(flatten(typeSelector_, many(subclassSelector_)), many1(subclassSelector_)), (ss) => {
    return {
        type: 'compound',
        list: ss,
        specificity: sumAllSpec(ss.map(s => s.specificity))
    };
});
const combinator_ = choice(map(literal('>'), () => '>'), map(literal('+'), () => '+'), map(literal('~'), () => '~'), ab(literal('|'), literal('|'), () => '||'));
const combinatorSeparator_ = otherwise(optionallySpaced(combinator_), map(whitespace_, () => ' '));
const complexSelector_ = leftAssoc2(compoundSelector_, map(combinatorSeparator_, (c) => (left, right) => ({
    type: 'compound',
    list: [...right.list, { type: 'combinator', combinator: c, left: left, specificity: left.specificity }],
    specificity: sumSpec(left.specificity, right.specificity)
})), compoundSelector_);
const listSelector_ = leftAssoc2(map(complexSelector_, (s) => ({ type: 'list', list: [s] })), map(optionallySpaced(literal(',')), () => (acc, next) => ({ type: 'list', list: [...acc.list, next] })), complexSelector_);
function parse_(parser, str) {
    if (!(typeof str === 'string' || str instanceof String)) {
        throw new Error('Expected a selector string. Actual input is not a string!');
    }
    const lexerResult = lexSelector(str);
    if (!lexerResult.complete) {
        throw new Error(`The input "${str}" was only partially tokenized, stopped at offset ${lexerResult.offset}!\n` +
            prettyPrintPosition(str, lexerResult.offset));
    }
    const result = optionallySpaced(parser)({ tokens: lexerResult.tokens, options: undefined }, 0);
    if (!result.matched) {
        throw new Error(`No match for "${str}" input!`);
    }
    if (result.position < lexerResult.tokens.length) {
        const token = lexerResult.tokens[result.position];
        throw new Error(`The input "${str}" was only partially parsed, stopped at offset ${token.offset}!\n` +
            prettyPrintPosition(str, token.offset, token.len));
    }
    return result.value;
}
function prettyPrintPosition(str, offset, len = 1) {
    return `${str.replace(/(\t)|(\r)|(\n)/g, (m, t, r) => t ? '\u2409' : r ? '\u240d' : '\u240a')}\n${''.padEnd(offset)}${'^'.repeat(len)}`;
}
function parseley_parse(str) {
    return parse_(listSelector_, str);
}
function parse1(str) {
    return parse_(complexSelector_, str);
}

function serialize(selector) {
    if (!selector.type) {
        throw new Error('This is not an AST node.');
    }
    switch (selector.type) {
        case 'universal':
            return _serNs(selector.namespace) + '*';
        case 'tag':
            return _serNs(selector.namespace) + _serIdent(selector.name);
        case 'class':
            return '.' + _serIdent(selector.name);
        case 'id':
            return '#' + _serIdent(selector.name);
        case 'attrPresence':
            return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}]`;
        case 'attrValue':
            return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}${selector.matcher}"${_serStr(selector.value)}"${(selector.modifier ? selector.modifier : '')}]`;
        case 'combinator':
            return serialize(selector.left) + selector.combinator;
        case 'compound':
            return selector.list.reduce((acc, node) => {
                if (node.type === 'combinator') {
                    return serialize(node) + acc;
                }
                else {
                    return acc + serialize(node);
                }
            }, '');
        case 'list':
            return selector.list.map(serialize).join(',');
    }
}
function _serNs(ns) {
    return (ns || ns === '')
        ? _serIdent(ns) + '|'
        : '';
}
function _codePoint(char) {
    return `\\${char.codePointAt(0).toString(16)} `;
}
function _serIdent(str) {
    return str.replace(
    /(^[0-9])|(^-[0-9])|(^-$)|([-0-9a-zA-Z_]|[^\x00-\x7F])|(\x00)|([\x01-\x1f]|\x7f)|([\s\S])/g, (m, d1, d2, hy, safe, nl, ctrl, other) => d1 ? _codePoint(d1) :
        d2 ? '-' + _codePoint(d2.slice(1)) :
            hy ? '\\-' :
                safe ? safe :
                    nl ? '\ufffd' :
                        ctrl ? _codePoint(ctrl) :
                            '\\' + other);
}
function _serStr(str) {
    return str.replace(
    /(")|(\\)|(\x00)|([\x01-\x1f]|\x7f)/g, (m, dq, bs, nl, ctrl) => dq ? '\\"' :
        bs ? '\\\\' :
            nl ? '\ufffd' :
                _codePoint(ctrl));
}
function normalize(selector) {
    if (!selector.type) {
        throw new Error('This is not an AST node.');
    }
    switch (selector.type) {
        case 'compound': {
            selector.list.forEach(normalize);
            selector.list.sort((a, b) => _compareArrays(_getSelectorPriority(a), _getSelectorPriority(b)));
            break;
        }
        case 'combinator': {
            normalize(selector.left);
            break;
        }
        case 'list': {
            selector.list.forEach(normalize);
            selector.list.sort((a, b) => (serialize(a) < serialize(b)) ? -1 : 1);
            break;
        }
    }
    return selector;
}
function _getSelectorPriority(selector) {
    switch (selector.type) {
        case 'universal':
            return [1];
        case 'tag':
            return [1];
        case 'id':
            return [2];
        case 'class':
            return [3, selector.name];
        case 'attrPresence':
            return [4, serialize(selector)];
        case 'attrValue':
            return [5, serialize(selector)];
        case 'combinator':
            return [15, serialize(selector)];
    }
}
function compareSelectors(a, b) {
    return _compareArrays(a.specificity, b.specificity);
}
function compareSpecificity(a, b) {
    return _compareArrays(a, b);
}
function _compareArrays(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        throw new Error('Arguments must be arrays.');
    }
    const shorter = (a.length < b.length) ? a.length : b.length;
    for (let i = 0; i < shorter; i++) {
        if (a[i] === b[i]) {
            continue;
        }
        return (a[i] < b[i]) ? -1 : 1;
    }
    return a.length - b.length;
}



;// CONCATENATED MODULE: ./node_modules/selderee/lib/selderee.mjs



var Ast = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var Types = /*#__PURE__*/Object.freeze({
    __proto__: null
});

const treeify = (nodes) => '▽\n' + treeifyArray(nodes, thinLines);
const thinLines = [['├─', '│ '], ['└─', '  ']];
const heavyLines = [['┠─', '┃ '], ['┖─', '  ']];
const doubleLines = [['╟─', '║ '], ['╙─', '  ']];
function treeifyArray(nodes, tpl = heavyLines) {
    return prefixItems(tpl, nodes.map(n => treeifyNode(n)));
}
function treeifyNode(node) {
    switch (node.type) {
        case 'terminal': {
            const vctr = node.valueContainer;
            return `◁ #${vctr.index} ${JSON.stringify(vctr.specificity)} ${vctr.value}`;
        }
        case 'tagName':
            return `◻ Tag name\n${treeifyArray(node.variants, doubleLines)}`;
        case 'attrValue':
            return `▣ Attr value: ${node.name}\n${treeifyArray(node.matchers, doubleLines)}`;
        case 'attrPresence':
            return `◨ Attr presence: ${node.name}\n${treeifyArray(node.cont)}`;
        case 'pushElement':
            return `◉ Push element: ${node.combinator}\n${treeifyArray(node.cont, thinLines)}`;
        case 'popElement':
            return `◌ Pop element\n${treeifyArray(node.cont, thinLines)}`;
        case 'variant':
            return `◇ = ${node.value}\n${treeifyArray(node.cont)}`;
        case 'matcher':
            return `◈ ${node.matcher} "${node.value}"${node.modifier || ''}\n${treeifyArray(node.cont)}`;
    }
}
function prefixItems(tpl, items) {
    return items
        .map((item, i, { length }) => prefixItem(tpl, item, i === length - 1))
        .join('\n');
}
function prefixItem(tpl, item, tail = true) {
    const tpl1 = tpl[tail ? 1 : 0];
    return tpl1[0] + item.split('\n').join('\n' + tpl1[1]);
}

var TreeifyBuilder = /*#__PURE__*/Object.freeze({
    __proto__: null,
    treeify: treeify
});

class DecisionTree {
    constructor(input) {
        this.branches = weave(toAstTerminalPairs(input));
    }
    build(builder) {
        return builder(this.branches);
    }
}
function toAstTerminalPairs(array) {
    const len = array.length;
    const results = new Array(len);
    for (let i = 0; i < len; i++) {
        const [selectorString, val] = array[i];
        const ast = preprocess(parse1(selectorString));
        results[i] = {
            ast: ast,
            terminal: {
                type: 'terminal',
                valueContainer: { index: i, value: val, specificity: ast.specificity }
            }
        };
    }
    return results;
}
function preprocess(ast) {
    reduceSelectorVariants(ast);
    normalize(ast);
    return ast;
}
function reduceSelectorVariants(ast) {
    const newList = [];
    ast.list.forEach(sel => {
        switch (sel.type) {
            case 'class':
                newList.push({
                    matcher: '~=',
                    modifier: null,
                    name: 'class',
                    namespace: null,
                    specificity: sel.specificity,
                    type: 'attrValue',
                    value: sel.name,
                });
                break;
            case 'id':
                newList.push({
                    matcher: '=',
                    modifier: null,
                    name: 'id',
                    namespace: null,
                    specificity: sel.specificity,
                    type: 'attrValue',
                    value: sel.name,
                });
                break;
            case 'combinator':
                reduceSelectorVariants(sel.left);
                newList.push(sel);
                break;
            case 'universal':
                break;
            default:
                newList.push(sel);
                break;
        }
    });
    ast.list = newList;
}
function weave(items) {
    const branches = [];
    while (items.length) {
        const topKind = findTopKey(items, (sel) => true, getSelectorKind);
        const { matches, nonmatches, empty } = breakByKind(items, topKind);
        items = nonmatches;
        if (matches.length) {
            branches.push(branchOfKind(topKind, matches));
        }
        if (empty.length) {
            branches.push(...terminate(empty));
        }
    }
    return branches;
}
function terminate(items) {
    const results = [];
    for (const item of items) {
        const terminal = item.terminal;
        if (terminal.type === 'terminal') {
            results.push(terminal);
        }
        else {
            const { matches, rest } = partition(terminal.cont, (node) => node.type === 'terminal');
            matches.forEach((node) => results.push(node));
            if (rest.length) {
                terminal.cont = rest;
                results.push(terminal);
            }
        }
    }
    return results;
}
function breakByKind(items, selectedKind) {
    const matches = [];
    const nonmatches = [];
    const empty = [];
    for (const item of items) {
        const simpsels = item.ast.list;
        if (simpsels.length) {
            const isMatch = simpsels.some(node => getSelectorKind(node) === selectedKind);
            (isMatch ? matches : nonmatches).push(item);
        }
        else {
            empty.push(item);
        }
    }
    return { matches, nonmatches, empty };
}
function getSelectorKind(sel) {
    switch (sel.type) {
        case 'attrPresence':
            return `attrPresence ${sel.name}`;
        case 'attrValue':
            return `attrValue ${sel.name}`;
        case 'combinator':
            return `combinator ${sel.combinator}`;
        default:
            return sel.type;
    }
}
function branchOfKind(kind, items) {
    if (kind === 'tag') {
        return tagNameBranch(items);
    }
    if (kind.startsWith('attrValue ')) {
        return attrValueBranch(kind.substring(10), items);
    }
    if (kind.startsWith('attrPresence ')) {
        return attrPresenceBranch(kind.substring(13), items);
    }
    if (kind === 'combinator >') {
        return combinatorBranch('>', items);
    }
    if (kind === 'combinator +') {
        return combinatorBranch('+', items);
    }
    throw new Error(`Unsupported selector kind: ${kind}`);
}
function tagNameBranch(items) {
    const groups = spliceAndGroup(items, (x) => x.type === 'tag', (x) => x.name);
    const variants = Object.entries(groups).map(([name, group]) => ({
        type: 'variant',
        value: name,
        cont: weave(group.items)
    }));
    return {
        type: 'tagName',
        variants: variants
    };
}
function attrPresenceBranch(name, items) {
    for (const item of items) {
        spliceSimpleSelector(item, (x) => (x.type === 'attrPresence') && (x.name === name));
    }
    return {
        type: 'attrPresence',
        name: name,
        cont: weave(items)
    };
}
function attrValueBranch(name, items) {
    const groups = spliceAndGroup(items, (x) => (x.type === 'attrValue') && (x.name === name), (x) => `${x.matcher} ${x.modifier || ''} ${x.value}`);
    const matchers = [];
    for (const group of Object.values(groups)) {
        const sel = group.oneSimpleSelector;
        const predicate = getAttrPredicate(sel);
        const continuation = weave(group.items);
        matchers.push({
            type: 'matcher',
            matcher: sel.matcher,
            modifier: sel.modifier,
            value: sel.value,
            predicate: predicate,
            cont: continuation
        });
    }
    return {
        type: 'attrValue',
        name: name,
        matchers: matchers
    };
}
function getAttrPredicate(sel) {
    if (sel.modifier === 'i') {
        const expected = sel.value.toLowerCase();
        switch (sel.matcher) {
            case '=':
                return (actual) => expected === actual.toLowerCase();
            case '~=':
                return (actual) => actual.toLowerCase().split(/[ \t]+/).includes(expected);
            case '^=':
                return (actual) => actual.toLowerCase().startsWith(expected);
            case '$=':
                return (actual) => actual.toLowerCase().endsWith(expected);
            case '*=':
                return (actual) => actual.toLowerCase().includes(expected);
            case '|=':
                return (actual) => {
                    const lower = actual.toLowerCase();
                    return (expected === lower) || (lower.startsWith(expected) && lower[expected.length] === '-');
                };
        }
    }
    else {
        const expected = sel.value;
        switch (sel.matcher) {
            case '=':
                return (actual) => expected === actual;
            case '~=':
                return (actual) => actual.split(/[ \t]+/).includes(expected);
            case '^=':
                return (actual) => actual.startsWith(expected);
            case '$=':
                return (actual) => actual.endsWith(expected);
            case '*=':
                return (actual) => actual.includes(expected);
            case '|=':
                return (actual) => (expected === actual) || (actual.startsWith(expected) && actual[expected.length] === '-');
        }
    }
}
function combinatorBranch(combinator, items) {
    const groups = spliceAndGroup(items, (x) => (x.type === 'combinator') && (x.combinator === combinator), (x) => serialize(x.left));
    const leftItems = [];
    for (const group of Object.values(groups)) {
        const rightCont = weave(group.items);
        const leftAst = group.oneSimpleSelector.left;
        leftItems.push({
            ast: leftAst,
            terminal: { type: 'popElement', cont: rightCont }
        });
    }
    return {
        type: 'pushElement',
        combinator: combinator,
        cont: weave(leftItems)
    };
}
function spliceAndGroup(items, predicate, keyCallback) {
    const groups = {};
    while (items.length) {
        const bestKey = findTopKey(items, predicate, keyCallback);
        const bestKeyPredicate = (sel) => predicate(sel) && keyCallback(sel) === bestKey;
        const hasBestKeyPredicate = (item) => item.ast.list.some(bestKeyPredicate);
        const { matches, rest } = partition1(items, hasBestKeyPredicate);
        let oneSimpleSelector = null;
        for (const item of matches) {
            const splicedNode = spliceSimpleSelector(item, bestKeyPredicate);
            if (!oneSimpleSelector) {
                oneSimpleSelector = splicedNode;
            }
        }
        if (oneSimpleSelector == null) {
            throw new Error('No simple selector is found.');
        }
        groups[bestKey] = { oneSimpleSelector: oneSimpleSelector, items: matches };
        items = rest;
    }
    return groups;
}
function spliceSimpleSelector(item, predicate) {
    const simpsels = item.ast.list;
    const matches = new Array(simpsels.length);
    let firstIndex = -1;
    for (let i = simpsels.length; i-- > 0;) {
        if (predicate(simpsels[i])) {
            matches[i] = true;
            firstIndex = i;
        }
    }
    if (firstIndex == -1) {
        throw new Error(`Couldn't find the required simple selector.`);
    }
    const result = simpsels[firstIndex];
    item.ast.list = simpsels.filter((sel, i) => !matches[i]);
    return result;
}
function findTopKey(items, predicate, keyCallback) {
    const candidates = {};
    for (const item of items) {
        const candidates1 = {};
        for (const node of item.ast.list.filter(predicate)) {
            candidates1[keyCallback(node)] = true;
        }
        for (const key of Object.keys(candidates1)) {
            if (candidates[key]) {
                candidates[key]++;
            }
            else {
                candidates[key] = 1;
            }
        }
    }
    let topKind = '';
    let topCounter = 0;
    for (const entry of Object.entries(candidates)) {
        if (entry[1] > topCounter) {
            topKind = entry[0];
            topCounter = entry[1];
        }
    }
    return topKind;
}
function partition(src, predicate) {
    const matches = [];
    const rest = [];
    for (const x of src) {
        if (predicate(x)) {
            matches.push(x);
        }
        else {
            rest.push(x);
        }
    }
    return { matches, rest };
}
function partition1(src, predicate) {
    const matches = [];
    const rest = [];
    for (const x of src) {
        if (predicate(x)) {
            matches.push(x);
        }
        else {
            rest.push(x);
        }
    }
    return { matches, rest };
}

class Picker {
    constructor(f) {
        this.f = f;
    }
    pickAll(el) {
        return this.f(el);
    }
    pick1(el, preferFirst = false) {
        const results = this.f(el);
        const len = results.length;
        if (len === 0) {
            return null;
        }
        if (len === 1) {
            return results[0].value;
        }
        const comparator = (preferFirst)
            ? comparatorPreferFirst
            : comparatorPreferLast;
        let result = results[0];
        for (let i = 1; i < len; i++) {
            const next = results[i];
            if (comparator(result, next)) {
                result = next;
            }
        }
        return result.value;
    }
}
function comparatorPreferFirst(acc, next) {
    const diff = compareSpecificity(next.specificity, acc.specificity);
    return diff > 0 || (diff === 0 && next.index < acc.index);
}
function comparatorPreferLast(acc, next) {
    const diff = compareSpecificity(next.specificity, acc.specificity);
    return diff > 0 || (diff === 0 && next.index > acc.index);
}



;// CONCATENATED MODULE: ./node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.mjs



function hp2Builder(nodes) {
    return new Picker(handleArray(nodes));
}
function handleArray(nodes) {
    const matchers = nodes.map(handleNode);
    return (el, ...tail) => matchers.flatMap(m => m(el, ...tail));
}
function handleNode(node) {
    switch (node.type) {
        case 'terminal': {
            const result = [node.valueContainer];
            return (el, ...tail) => result;
        }
        case 'tagName':
            return handleTagName(node);
        case 'attrValue':
            return handleAttrValueName(node);
        case 'attrPresence':
            return handleAttrPresenceName(node);
        case 'pushElement':
            return handlePushElementNode(node);
        case 'popElement':
            return handlePopElementNode(node);
    }
}
function handleTagName(node) {
    const variants = {};
    for (const variant of node.variants) {
        variants[variant.value] = handleArray(variant.cont);
    }
    return (el, ...tail) => {
        const continuation = variants[el.name];
        return (continuation) ? continuation(el, ...tail) : [];
    };
}
function handleAttrPresenceName(node) {
    const attrName = node.name;
    const continuation = handleArray(node.cont);
    return (el, ...tail) => (Object.prototype.hasOwnProperty.call(el.attribs, attrName))
        ? continuation(el, ...tail)
        : [];
}
function handleAttrValueName(node) {
    const callbacks = [];
    for (const matcher of node.matchers) {
        const predicate = matcher.predicate;
        const continuation = handleArray(matcher.cont);
        callbacks.push((attr, el, ...tail) => (predicate(attr) ? continuation(el, ...tail) : []));
    }
    const attrName = node.name;
    return (el, ...tail) => {
        const attr = el.attribs[attrName];
        return (attr || attr === '')
            ? callbacks.flatMap(cb => cb(attr, el, ...tail))
            : [];
    };
}
function handlePushElementNode(node) {
    const continuation = handleArray(node.cont);
    const leftElementGetter = (node.combinator === '+')
        ? getPrecedingElement
        : getParentElement;
    return (el, ...tail) => {
        const next = leftElementGetter(el);
        if (next === null) {
            return [];
        }
        return continuation(next, el, ...tail);
    };
}
const getPrecedingElement = (el) => {
    const prev = el.prev;
    if (prev === null) {
        return null;
    }
    return (node_isTag(prev)) ? prev : getPrecedingElement(prev);
};
const getParentElement = (el) => {
    const parent = el.parent;
    return (parent && node_isTag(parent)) ? parent : null;
};
function handlePopElementNode(node) {
    const continuation = handleArray(node.cont);
    return (el, next, ...tail) => continuation(next, ...tail);
}



;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/generated/decode-data-html.js
// Generated using scripts/write-decode-map.ts
/* harmony default export */ const decode_data_html = (new Uint16Array(
// prettier-ignore
"\u1d41<\xd5\u0131\u028a\u049d\u057b\u05d0\u0675\u06de\u07a2\u07d6\u080f\u0a4a\u0a91\u0da1\u0e6d\u0f09\u0f26\u10ca\u1228\u12e1\u1415\u149d\u14c3\u14df\u1525\0\0\0\0\0\0\u156b\u16cd\u198d\u1c12\u1ddd\u1f7e\u2060\u21b0\u228d\u23c0\u23fb\u2442\u2824\u2912\u2d08\u2e48\u2fce\u3016\u32ba\u3639\u37ac\u38fe\u3a28\u3a71\u3ae0\u3b2e\u0800EMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig\u803b\xc6\u40c6P\u803b&\u4026cute\u803b\xc1\u40c1reve;\u4102\u0100iyx}rc\u803b\xc2\u40c2;\u4410r;\uc000\ud835\udd04rave\u803b\xc0\u40c0pha;\u4391acr;\u4100d;\u6a53\u0100gp\x9d\xa1on;\u4104f;\uc000\ud835\udd38plyFunction;\u6061ing\u803b\xc5\u40c5\u0100cs\xbe\xc3r;\uc000\ud835\udc9cign;\u6254ilde\u803b\xc3\u40c3ml\u803b\xc4\u40c4\u0400aceforsu\xe5\xfb\xfe\u0117\u011c\u0122\u0127\u012a\u0100cr\xea\xf2kslash;\u6216\u0176\xf6\xf8;\u6ae7ed;\u6306y;\u4411\u0180crt\u0105\u010b\u0114ause;\u6235noullis;\u612ca;\u4392r;\uc000\ud835\udd05pf;\uc000\ud835\udd39eve;\u42d8c\xf2\u0113mpeq;\u624e\u0700HOacdefhilorsu\u014d\u0151\u0156\u0180\u019e\u01a2\u01b5\u01b7\u01ba\u01dc\u0215\u0273\u0278\u027ecy;\u4427PY\u803b\xa9\u40a9\u0180cpy\u015d\u0162\u017aute;\u4106\u0100;i\u0167\u0168\u62d2talDifferentialD;\u6145leys;\u612d\u0200aeio\u0189\u018e\u0194\u0198ron;\u410cdil\u803b\xc7\u40c7rc;\u4108nint;\u6230ot;\u410a\u0100dn\u01a7\u01adilla;\u40b8terDot;\u40b7\xf2\u017fi;\u43a7rcle\u0200DMPT\u01c7\u01cb\u01d1\u01d6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01e2\u01f8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020foubleQuote;\u601duote;\u6019\u0200lnpu\u021e\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6a74\u0180git\u022f\u0236\u023aruent;\u6261nt;\u622fourIntegral;\u622e\u0100fr\u024c\u024e;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6a2fcr;\uc000\ud835\udc9ep\u0100;C\u0284\u0285\u62d3ap;\u624d\u0580DJSZacefios\u02a0\u02ac\u02b0\u02b4\u02b8\u02cb\u02d7\u02e1\u02e6\u0333\u048d\u0100;o\u0179\u02a5trahd;\u6911cy;\u4402cy;\u4405cy;\u440f\u0180grs\u02bf\u02c4\u02c7ger;\u6021r;\u61a1hv;\u6ae4\u0100ay\u02d0\u02d5ron;\u410e;\u4414l\u0100;t\u02dd\u02de\u6207a;\u4394r;\uc000\ud835\udd07\u0100af\u02eb\u0327\u0100cm\u02f0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031ccute;\u40b4o\u0174\u030b\u030d;\u42d9bleAcute;\u42ddrave;\u4060ilde;\u42dcond;\u62c4ferentialD;\u6146\u0470\u033d\0\0\0\u0342\u0354\0\u0405f;\uc000\ud835\udd3b\u0180;DE\u0348\u0349\u034d\u40a8ot;\u60dcqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03cf\u03e2\u03f8ontourIntegra\xec\u0239o\u0274\u0379\0\0\u037b\xbb\u0349nArrow;\u61d3\u0100eo\u0387\u03a4ft\u0180ART\u0390\u0396\u03a1rrow;\u61d0ightArrow;\u61d4e\xe5\u02cang\u0100LR\u03ab\u03c4eft\u0100AR\u03b3\u03b9rrow;\u67f8ightArrow;\u67faightArrow;\u67f9ight\u0100AT\u03d8\u03derrow;\u61d2ee;\u62a8p\u0241\u03e9\0\0\u03efrrow;\u61d1ownArrow;\u61d5erticalBar;\u6225n\u0300ABLRTa\u0412\u042a\u0430\u045e\u047f\u037crrow\u0180;BU\u041d\u041e\u0422\u6193ar;\u6913pArrow;\u61f5reve;\u4311eft\u02d2\u043a\0\u0446\0\u0450ightVector;\u6950eeVector;\u695eector\u0100;B\u0459\u045a\u61bdar;\u6956ight\u01d4\u0467\0\u0471eeVector;\u695fector\u0100;B\u047a\u047b\u61c1ar;\u6957ee\u0100;A\u0486\u0487\u62a4rrow;\u61a7\u0100ct\u0492\u0497r;\uc000\ud835\udc9frok;\u4110\u0800NTacdfglmopqstux\u04bd\u04c0\u04c4\u04cb\u04de\u04e2\u04e7\u04ee\u04f5\u0521\u052f\u0536\u0552\u055d\u0560\u0565G;\u414aH\u803b\xd0\u40d0cute\u803b\xc9\u40c9\u0180aiy\u04d2\u04d7\u04dcron;\u411arc\u803b\xca\u40ca;\u442dot;\u4116r;\uc000\ud835\udd08rave\u803b\xc8\u40c8ement;\u6208\u0100ap\u04fa\u04fecr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65fberySmallSquare;\u65ab\u0100gp\u0526\u052aon;\u4118f;\uc000\ud835\udd3csilon;\u4395u\u0100ai\u053c\u0549l\u0100;T\u0542\u0543\u6a75ilde;\u6242librium;\u61cc\u0100ci\u0557\u055ar;\u6130m;\u6a73a;\u4397ml\u803b\xcb\u40cb\u0100ip\u056a\u056fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058d\u05b2\u05ccy;\u4424r;\uc000\ud835\udd09lled\u0253\u0597\0\0\u05a3mallSquare;\u65fcerySmallSquare;\u65aa\u0370\u05ba\0\u05bf\0\0\u05c4f;\uc000\ud835\udd3dAll;\u6200riertrf;\u6131c\xf2\u05cb\u0600JTabcdfgorst\u05e8\u05ec\u05ef\u05fa\u0600\u0612\u0616\u061b\u061d\u0623\u066c\u0672cy;\u4403\u803b>\u403emma\u0100;d\u05f7\u05f8\u4393;\u43dcreve;\u411e\u0180eiy\u0607\u060c\u0610dil;\u4122rc;\u411c;\u4413ot;\u4120r;\uc000\ud835\udd0a;\u62d9pf;\uc000\ud835\udd3eeater\u0300EFGLST\u0635\u0644\u064e\u0656\u065b\u0666qual\u0100;L\u063e\u063f\u6265ess;\u62dbullEqual;\u6267reater;\u6aa2ess;\u6277lantEqual;\u6a7eilde;\u6273cr;\uc000\ud835\udca2;\u626b\u0400Aacfiosu\u0685\u068b\u0696\u069b\u069e\u06aa\u06be\u06caRDcy;\u442a\u0100ct\u0690\u0694ek;\u42c7;\u405eirc;\u4124r;\u610clbertSpace;\u610b\u01f0\u06af\0\u06b2f;\u610dizontalLine;\u6500\u0100ct\u06c3\u06c5\xf2\u06a9rok;\u4126mp\u0144\u06d0\u06d8ownHum\xf0\u012fqual;\u624f\u0700EJOacdfgmnostu\u06fa\u06fe\u0703\u0707\u070e\u071a\u071e\u0721\u0728\u0744\u0778\u078b\u078f\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803b\xcd\u40cd\u0100iy\u0713\u0718rc\u803b\xce\u40ce;\u4418ot;\u4130r;\u6111rave\u803b\xcc\u40cc\u0180;ap\u0720\u072f\u073f\u0100cg\u0734\u0737r;\u412ainaryI;\u6148lie\xf3\u03dd\u01f4\u0749\0\u0762\u0100;e\u074d\u074e\u622c\u0100gr\u0753\u0758ral;\u622bsection;\u62c2isible\u0100CT\u076c\u0772omma;\u6063imes;\u6062\u0180gpt\u077f\u0783\u0788on;\u412ef;\uc000\ud835\udd40a;\u4399cr;\u6110ilde;\u4128\u01eb\u079a\0\u079ecy;\u4406l\u803b\xcf\u40cf\u0280cfosu\u07ac\u07b7\u07bc\u07c2\u07d0\u0100iy\u07b1\u07b5rc;\u4134;\u4419r;\uc000\ud835\udd0dpf;\uc000\ud835\udd41\u01e3\u07c7\0\u07ccr;\uc000\ud835\udca5rcy;\u4408kcy;\u4404\u0380HJacfos\u07e4\u07e8\u07ec\u07f1\u07fd\u0802\u0808cy;\u4425cy;\u440cppa;\u439a\u0100ey\u07f6\u07fbdil;\u4136;\u441ar;\uc000\ud835\udd0epf;\uc000\ud835\udd42cr;\uc000\ud835\udca6\u0580JTaceflmost\u0825\u0829\u082c\u0850\u0863\u09b3\u09b8\u09c7\u09cd\u0a37\u0a47cy;\u4409\u803b<\u403c\u0280cmnpr\u0837\u083c\u0841\u0844\u084dute;\u4139bda;\u439bg;\u67ealacetrf;\u6112r;\u619e\u0180aey\u0857\u085c\u0861ron;\u413ddil;\u413b;\u441b\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087e\u08a9\u08b1\u08e0\u08e6\u08fc\u092f\u095b\u0390\u096a\u0100nr\u0883\u088fgleBracket;\u67e8row\u0180;BR\u0899\u089a\u089e\u6190ar;\u61e4ightArrow;\u61c6eiling;\u6308o\u01f5\u08b7\0\u08c3bleBracket;\u67e6n\u01d4\u08c8\0\u08d2eeVector;\u6961ector\u0100;B\u08db\u08dc\u61c3ar;\u6959loor;\u630aight\u0100AV\u08ef\u08f5rrow;\u6194ector;\u694e\u0100er\u0901\u0917e\u0180;AV\u0909\u090a\u0910\u62a3rrow;\u61a4ector;\u695aiangle\u0180;BE\u0924\u0925\u0929\u62b2ar;\u69cfqual;\u62b4p\u0180DTV\u0937\u0942\u094cownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61bfar;\u6958ector\u0100;B\u0965\u0966\u61bcar;\u6952ight\xe1\u039cs\u0300EFGLST\u097e\u098b\u0995\u099d\u09a2\u09adqualGreater;\u62daullEqual;\u6266reater;\u6276ess;\u6aa1lantEqual;\u6a7dilde;\u6272r;\uc000\ud835\udd0f\u0100;e\u09bd\u09be\u62d8ftarrow;\u61daidot;\u413f\u0180npw\u09d4\u0a16\u0a1bg\u0200LRlr\u09de\u09f7\u0a02\u0a10eft\u0100AR\u09e6\u09ecrrow;\u67f5ightArrow;\u67f7ightArrow;\u67f6eft\u0100ar\u03b3\u0a0aight\xe1\u03bfight\xe1\u03caf;\uc000\ud835\udd43er\u0100LR\u0a22\u0a2ceftArrow;\u6199ightArrow;\u6198\u0180cht\u0a3e\u0a40\u0a42\xf2\u084c;\u61b0rok;\u4141;\u626a\u0400acefiosu\u0a5a\u0a5d\u0a60\u0a77\u0a7c\u0a85\u0a8b\u0a8ep;\u6905y;\u441c\u0100dl\u0a65\u0a6fiumSpace;\u605flintrf;\u6133r;\uc000\ud835\udd10nusPlus;\u6213pf;\uc000\ud835\udd44c\xf2\u0a76;\u439c\u0480Jacefostu\u0aa3\u0aa7\u0aad\u0ac0\u0b14\u0b19\u0d91\u0d97\u0d9ecy;\u440acute;\u4143\u0180aey\u0ab4\u0ab9\u0aberon;\u4147dil;\u4145;\u441d\u0180gsw\u0ac7\u0af0\u0b0eative\u0180MTV\u0ad3\u0adf\u0ae8ediumSpace;\u600bhi\u0100cn\u0ae6\u0ad8\xeb\u0ad9eryThi\xee\u0ad9ted\u0100GL\u0af8\u0b06reaterGreate\xf2\u0673essLes\xf3\u0a48Line;\u400ar;\uc000\ud835\udd11\u0200Bnpt\u0b22\u0b28\u0b37\u0b3areak;\u6060BreakingSpace;\u40a0f;\u6115\u0680;CDEGHLNPRSTV\u0b55\u0b56\u0b6a\u0b7c\u0ba1\u0beb\u0c04\u0c5e\u0c84\u0ca6\u0cd8\u0d61\u0d85\u6aec\u0100ou\u0b5b\u0b64ngruent;\u6262pCap;\u626doubleVerticalBar;\u6226\u0180lqx\u0b83\u0b8a\u0b9bement;\u6209ual\u0100;T\u0b92\u0b93\u6260ilde;\uc000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0bb6\u0bb7\u0bbd\u0bc9\u0bd3\u0bd8\u0be5\u626fqual;\u6271ullEqual;\uc000\u2267\u0338reater;\uc000\u226b\u0338ess;\u6279lantEqual;\uc000\u2a7e\u0338ilde;\u6275ump\u0144\u0bf2\u0bfdownHump;\uc000\u224e\u0338qual;\uc000\u224f\u0338e\u0100fs\u0c0a\u0c27tTriangle\u0180;BE\u0c1a\u0c1b\u0c21\u62eaar;\uc000\u29cf\u0338qual;\u62ecs\u0300;EGLST\u0c35\u0c36\u0c3c\u0c44\u0c4b\u0c58\u626equal;\u6270reater;\u6278ess;\uc000\u226a\u0338lantEqual;\uc000\u2a7d\u0338ilde;\u6274ested\u0100GL\u0c68\u0c79reaterGreater;\uc000\u2aa2\u0338essLess;\uc000\u2aa1\u0338recedes\u0180;ES\u0c92\u0c93\u0c9b\u6280qual;\uc000\u2aaf\u0338lantEqual;\u62e0\u0100ei\u0cab\u0cb9verseElement;\u620cghtTriangle\u0180;BE\u0ccb\u0ccc\u0cd2\u62ebar;\uc000\u29d0\u0338qual;\u62ed\u0100qu\u0cdd\u0d0cuareSu\u0100bp\u0ce8\u0cf9set\u0100;E\u0cf0\u0cf3\uc000\u228f\u0338qual;\u62e2erset\u0100;E\u0d03\u0d06\uc000\u2290\u0338qual;\u62e3\u0180bcp\u0d13\u0d24\u0d4eset\u0100;E\u0d1b\u0d1e\uc000\u2282\u20d2qual;\u6288ceeds\u0200;EST\u0d32\u0d33\u0d3b\u0d46\u6281qual;\uc000\u2ab0\u0338lantEqual;\u62e1ilde;\uc000\u227f\u0338erset\u0100;E\u0d58\u0d5b\uc000\u2283\u20d2qual;\u6289ilde\u0200;EFT\u0d6e\u0d6f\u0d75\u0d7f\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uc000\ud835\udca9ilde\u803b\xd1\u40d1;\u439d\u0700Eacdfgmoprstuv\u0dbd\u0dc2\u0dc9\u0dd5\u0ddb\u0de0\u0de7\u0dfc\u0e02\u0e20\u0e22\u0e32\u0e3f\u0e44lig;\u4152cute\u803b\xd3\u40d3\u0100iy\u0dce\u0dd3rc\u803b\xd4\u40d4;\u441eblac;\u4150r;\uc000\ud835\udd12rave\u803b\xd2\u40d2\u0180aei\u0dee\u0df2\u0df6cr;\u414cga;\u43a9cron;\u439fpf;\uc000\ud835\udd46enCurly\u0100DQ\u0e0e\u0e1aoubleQuote;\u601cuote;\u6018;\u6a54\u0100cl\u0e27\u0e2cr;\uc000\ud835\udcaaash\u803b\xd8\u40d8i\u016c\u0e37\u0e3cde\u803b\xd5\u40d5es;\u6a37ml\u803b\xd6\u40d6er\u0100BP\u0e4b\u0e60\u0100ar\u0e50\u0e53r;\u603eac\u0100ek\u0e5a\u0e5c;\u63deet;\u63b4arenthesis;\u63dc\u0480acfhilors\u0e7f\u0e87\u0e8a\u0e8f\u0e92\u0e94\u0e9d\u0eb0\u0efcrtialD;\u6202y;\u441fr;\uc000\ud835\udd13i;\u43a6;\u43a0usMinus;\u40b1\u0100ip\u0ea2\u0eadncareplan\xe5\u069df;\u6119\u0200;eio\u0eb9\u0eba\u0ee0\u0ee4\u6abbcedes\u0200;EST\u0ec8\u0ec9\u0ecf\u0eda\u627aqual;\u6aaflantEqual;\u627cilde;\u627eme;\u6033\u0100dp\u0ee9\u0eeeuct;\u620fortion\u0100;a\u0225\u0ef9l;\u621d\u0100ci\u0f01\u0f06r;\uc000\ud835\udcab;\u43a8\u0200Ufos\u0f11\u0f16\u0f1b\u0f1fOT\u803b\"\u4022r;\uc000\ud835\udd14pf;\u611acr;\uc000\ud835\udcac\u0600BEacefhiorsu\u0f3e\u0f43\u0f47\u0f60\u0f73\u0fa7\u0faa\u0fad\u1096\u10a9\u10b4\u10bearr;\u6910G\u803b\xae\u40ae\u0180cnr\u0f4e\u0f53\u0f56ute;\u4154g;\u67ebr\u0100;t\u0f5c\u0f5d\u61a0l;\u6916\u0180aey\u0f67\u0f6c\u0f71ron;\u4158dil;\u4156;\u4420\u0100;v\u0f78\u0f79\u611cerse\u0100EU\u0f82\u0f99\u0100lq\u0f87\u0f8eement;\u620builibrium;\u61cbpEquilibrium;\u696fr\xbb\u0f79o;\u43a1ght\u0400ACDFTUVa\u0fc1\u0feb\u0ff3\u1022\u1028\u105b\u1087\u03d8\u0100nr\u0fc6\u0fd2gleBracket;\u67e9row\u0180;BL\u0fdc\u0fdd\u0fe1\u6192ar;\u61e5eftArrow;\u61c4eiling;\u6309o\u01f5\u0ff9\0\u1005bleBracket;\u67e7n\u01d4\u100a\0\u1014eeVector;\u695dector\u0100;B\u101d\u101e\u61c2ar;\u6955loor;\u630b\u0100er\u102d\u1043e\u0180;AV\u1035\u1036\u103c\u62a2rrow;\u61a6ector;\u695biangle\u0180;BE\u1050\u1051\u1055\u62b3ar;\u69d0qual;\u62b5p\u0180DTV\u1063\u106e\u1078ownVector;\u694feeVector;\u695cector\u0100;B\u1082\u1083\u61bear;\u6954ector\u0100;B\u1091\u1092\u61c0ar;\u6953\u0100pu\u109b\u109ef;\u611dndImplies;\u6970ightarrow;\u61db\u0100ch\u10b9\u10bcr;\u611b;\u61b1leDelayed;\u69f4\u0680HOacfhimoqstu\u10e4\u10f1\u10f7\u10fd\u1119\u111e\u1151\u1156\u1161\u1167\u11b5\u11bb\u11bf\u0100Cc\u10e9\u10eeHcy;\u4429y;\u4428FTcy;\u442ccute;\u415a\u0280;aeiy\u1108\u1109\u110e\u1113\u1117\u6abcron;\u4160dil;\u415erc;\u415c;\u4421r;\uc000\ud835\udd16ort\u0200DLRU\u112a\u1134\u113e\u1149ownArrow\xbb\u041eeftArrow\xbb\u089aightArrow\xbb\u0fddpArrow;\u6191gma;\u43a3allCircle;\u6218pf;\uc000\ud835\udd4a\u0272\u116d\0\0\u1170t;\u621aare\u0200;ISU\u117b\u117c\u1189\u11af\u65a1ntersection;\u6293u\u0100bp\u118f\u119eset\u0100;E\u1197\u1198\u628fqual;\u6291erset\u0100;E\u11a8\u11a9\u6290qual;\u6292nion;\u6294cr;\uc000\ud835\udcaear;\u62c6\u0200bcmp\u11c8\u11db\u1209\u120b\u0100;s\u11cd\u11ce\u62d0et\u0100;E\u11cd\u11d5qual;\u6286\u0100ch\u11e0\u1205eeds\u0200;EST\u11ed\u11ee\u11f4\u11ff\u627bqual;\u6ab0lantEqual;\u627dilde;\u627fTh\xe1\u0f8c;\u6211\u0180;es\u1212\u1213\u1223\u62d1rset\u0100;E\u121c\u121d\u6283qual;\u6287et\xbb\u1213\u0580HRSacfhiors\u123e\u1244\u1249\u1255\u125e\u1271\u1276\u129f\u12c2\u12c8\u12d1ORN\u803b\xde\u40deADE;\u6122\u0100Hc\u124e\u1252cy;\u440by;\u4426\u0100bu\u125a\u125c;\u4009;\u43a4\u0180aey\u1265\u126a\u126fron;\u4164dil;\u4162;\u4422r;\uc000\ud835\udd17\u0100ei\u127b\u1289\u01f2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128e\u1298kSpace;\uc000\u205f\u200aSpace;\u6009lde\u0200;EFT\u12ab\u12ac\u12b2\u12bc\u623cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uc000\ud835\udd4bipleDot;\u60db\u0100ct\u12d6\u12dbr;\uc000\ud835\udcafrok;\u4166\u0ae1\u12f7\u130e\u131a\u1326\0\u132c\u1331\0\0\0\0\0\u1338\u133d\u1377\u1385\0\u13ff\u1404\u140a\u1410\u0100cr\u12fb\u1301ute\u803b\xda\u40dar\u0100;o\u1307\u1308\u619fcir;\u6949r\u01e3\u1313\0\u1316y;\u440eve;\u416c\u0100iy\u131e\u1323rc\u803b\xdb\u40db;\u4423blac;\u4170r;\uc000\ud835\udd18rave\u803b\xd9\u40d9acr;\u416a\u0100di\u1341\u1369er\u0100BP\u1348\u135d\u0100ar\u134d\u1350r;\u405fac\u0100ek\u1357\u1359;\u63dfet;\u63b5arenthesis;\u63ddon\u0100;P\u1370\u1371\u62c3lus;\u628e\u0100gp\u137b\u137fon;\u4172f;\uc000\ud835\udd4c\u0400ADETadps\u1395\u13ae\u13b8\u13c4\u03e8\u13d2\u13d7\u13f3rrow\u0180;BD\u1150\u13a0\u13a4ar;\u6912ownArrow;\u61c5ownArrow;\u6195quilibrium;\u696eee\u0100;A\u13cb\u13cc\u62a5rrow;\u61a5own\xe1\u03f3er\u0100LR\u13de\u13e8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13f9\u13fa\u43d2on;\u43a5ing;\u416ecr;\uc000\ud835\udcb0ilde;\u4168ml\u803b\xdc\u40dc\u0480Dbcdefosv\u1427\u142c\u1430\u1433\u143e\u1485\u148a\u1490\u1496ash;\u62abar;\u6aeby;\u4412ash\u0100;l\u143b\u143c\u62a9;\u6ae6\u0100er\u1443\u1445;\u62c1\u0180bty\u144c\u1450\u147aar;\u6016\u0100;i\u144f\u1455cal\u0200BLST\u1461\u1465\u146a\u1474ar;\u6223ine;\u407ceparator;\u6758ilde;\u6240ThinSpace;\u600ar;\uc000\ud835\udd19pf;\uc000\ud835\udd4dcr;\uc000\ud835\udcb1dash;\u62aa\u0280cefos\u14a7\u14ac\u14b1\u14b6\u14bcirc;\u4174dge;\u62c0r;\uc000\ud835\udd1apf;\uc000\ud835\udd4ecr;\uc000\ud835\udcb2\u0200fios\u14cb\u14d0\u14d2\u14d8r;\uc000\ud835\udd1b;\u439epf;\uc000\ud835\udd4fcr;\uc000\ud835\udcb3\u0480AIUacfosu\u14f1\u14f5\u14f9\u14fd\u1504\u150f\u1514\u151a\u1520cy;\u442fcy;\u4407cy;\u442ecute\u803b\xdd\u40dd\u0100iy\u1509\u150drc;\u4176;\u442br;\uc000\ud835\udd1cpf;\uc000\ud835\udd50cr;\uc000\ud835\udcb4ml;\u4178\u0400Hacdefos\u1535\u1539\u153f\u154b\u154f\u155d\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417d;\u4417ot;\u417b\u01f2\u1554\0\u155boWidt\xe8\u0ad9a;\u4396r;\u6128pf;\u6124cr;\uc000\ud835\udcb5\u0be1\u1583\u158a\u1590\0\u15b0\u15b6\u15bf\0\0\0\0\u15c6\u15db\u15eb\u165f\u166d\0\u1695\u169b\u16b2\u16b9\0\u16becute\u803b\xe1\u40e1reve;\u4103\u0300;Ediuy\u159c\u159d\u15a1\u15a3\u15a8\u15ad\u623e;\uc000\u223e\u0333;\u623frc\u803b\xe2\u40e2te\u80bb\xb4\u0306;\u4430lig\u803b\xe6\u40e6\u0100;r\xb2\u15ba;\uc000\ud835\udd1erave\u803b\xe0\u40e0\u0100ep\u15ca\u15d6\u0100fp\u15cf\u15d4sym;\u6135\xe8\u15d3ha;\u43b1\u0100ap\u15dfc\u0100cl\u15e4\u15e7r;\u4101g;\u6a3f\u0264\u15f0\0\0\u160a\u0280;adsv\u15fa\u15fb\u15ff\u1601\u1607\u6227nd;\u6a55;\u6a5clope;\u6a58;\u6a5a\u0380;elmrsz\u1618\u1619\u161b\u161e\u163f\u164f\u1659\u6220;\u69a4e\xbb\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163a\u163c\u163e;\u69a8;\u69a9;\u69aa;\u69ab;\u69ac;\u69ad;\u69ae;\u69aft\u0100;v\u1645\u1646\u621fb\u0100;d\u164c\u164d\u62be;\u699d\u0100pt\u1654\u1657h;\u6222\xbb\xb9arr;\u637c\u0100gp\u1663\u1667on;\u4105f;\uc000\ud835\udd52\u0380;Eaeiop\u12c1\u167b\u167d\u1682\u1684\u1687\u168a;\u6a70cir;\u6a6f;\u624ad;\u624bs;\u4027rox\u0100;e\u12c1\u1692\xf1\u1683ing\u803b\xe5\u40e5\u0180cty\u16a1\u16a6\u16a8r;\uc000\ud835\udcb6;\u402amp\u0100;e\u12c1\u16af\xf1\u0288ilde\u803b\xe3\u40e3ml\u803b\xe4\u40e4\u0100ci\u16c2\u16c8onin\xf4\u0272nt;\u6a11\u0800Nabcdefiklnoprsu\u16ed\u16f1\u1730\u173c\u1743\u1748\u1778\u177d\u17e0\u17e6\u1839\u1850\u170d\u193d\u1948\u1970ot;\u6aed\u0100cr\u16f6\u171ek\u0200ceps\u1700\u1705\u170d\u1713ong;\u624cpsilon;\u43f6rime;\u6035im\u0100;e\u171a\u171b\u623dq;\u62cd\u0176\u1722\u1726ee;\u62bded\u0100;g\u172c\u172d\u6305e\xbb\u172drk\u0100;t\u135c\u1737brk;\u63b6\u0100oy\u1701\u1741;\u4431quo;\u601e\u0280cmprt\u1753\u175b\u1761\u1764\u1768aus\u0100;e\u010a\u0109ptyv;\u69b0s\xe9\u170cno\xf5\u0113\u0180ahw\u176f\u1771\u1773;\u43b2;\u6136een;\u626cr;\uc000\ud835\udd1fg\u0380costuvw\u178d\u179d\u17b3\u17c1\u17d5\u17db\u17de\u0180aiu\u1794\u1796\u179a\xf0\u0760rc;\u65efp\xbb\u1371\u0180dpt\u17a4\u17a8\u17adot;\u6a00lus;\u6a01imes;\u6a02\u0271\u17b9\0\0\u17becup;\u6a06ar;\u6605riangle\u0100du\u17cd\u17d2own;\u65bdp;\u65b3plus;\u6a04e\xe5\u1444\xe5\u14adarow;\u690d\u0180ako\u17ed\u1826\u1835\u0100cn\u17f2\u1823k\u0180lst\u17fa\u05ab\u1802ozenge;\u69ebriangle\u0200;dlr\u1812\u1813\u1818\u181d\u65b4own;\u65beeft;\u65c2ight;\u65b8k;\u6423\u01b1\u182b\0\u1833\u01b2\u182f\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183e\u184d\u0100;q\u1843\u1846\uc000=\u20e5uiv;\uc000\u2261\u20e5t;\u6310\u0200ptwx\u1859\u185e\u1867\u186cf;\uc000\ud835\udd53\u0100;t\u13cb\u1863om\xbb\u13cctie;\u62c8\u0600DHUVbdhmptuv\u1885\u1896\u18aa\u18bb\u18d7\u18db\u18ec\u18ff\u1905\u190a\u1910\u1921\u0200LRlr\u188e\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18a1\u18a2\u18a4\u18a6\u18a8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18b3\u18b5\u18b7\u18b9;\u655d;\u655a;\u655c;\u6559\u0380;HLRhlr\u18ca\u18cb\u18cd\u18cf\u18d1\u18d3\u18d5\u6551;\u656c;\u6563;\u6560;\u656b;\u6562;\u655fox;\u69c9\u0200LRlr\u18e4\u18e6\u18e8\u18ea;\u6555;\u6552;\u6510;\u650c\u0280;DUdu\u06bd\u18f7\u18f9\u18fb\u18fd;\u6565;\u6568;\u652c;\u6534inus;\u629flus;\u629eimes;\u62a0\u0200LRlr\u1919\u191b\u191d\u191f;\u655b;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193b\u6502;\u656a;\u6561;\u655e;\u653c;\u6524;\u651c\u0100ev\u0123\u1942bar\u803b\xa6\u40a6\u0200ceio\u1951\u1956\u195a\u1960r;\uc000\ud835\udcb7mi;\u604fm\u0100;e\u171a\u171cl\u0180;bh\u1968\u1969\u196b\u405c;\u69c5sub;\u67c8\u016c\u1974\u197el\u0100;e\u1979\u197a\u6022t\xbb\u197ap\u0180;Ee\u012f\u1985\u1987;\u6aae\u0100;q\u06dc\u06db\u0ce1\u19a7\0\u19e8\u1a11\u1a15\u1a32\0\u1a37\u1a50\0\0\u1ab4\0\0\u1ac1\0\0\u1b21\u1b2e\u1b4d\u1b52\0\u1bfd\0\u1c0c\u0180cpr\u19ad\u19b2\u19ddute;\u4107\u0300;abcds\u19bf\u19c0\u19c4\u19ca\u19d5\u19d9\u6229nd;\u6a44rcup;\u6a49\u0100au\u19cf\u19d2p;\u6a4bp;\u6a47ot;\u6a40;\uc000\u2229\ufe00\u0100eo\u19e2\u19e5t;\u6041\xee\u0693\u0200aeiu\u19f0\u19fb\u1a01\u1a05\u01f0\u19f5\0\u19f8s;\u6a4don;\u410ddil\u803b\xe7\u40e7rc;\u4109ps\u0100;s\u1a0c\u1a0d\u6a4cm;\u6a50ot;\u410b\u0180dmn\u1a1b\u1a20\u1a26il\u80bb\xb8\u01adptyv;\u69b2t\u8100\xa2;e\u1a2d\u1a2e\u40a2r\xe4\u01b2r;\uc000\ud835\udd20\u0180cei\u1a3d\u1a40\u1a4dy;\u4447ck\u0100;m\u1a47\u1a48\u6713ark\xbb\u1a48;\u43c7r\u0380;Ecefms\u1a5f\u1a60\u1a62\u1a6b\u1aa4\u1aaa\u1aae\u65cb;\u69c3\u0180;el\u1a69\u1a6a\u1a6d\u42c6q;\u6257e\u0261\u1a74\0\0\u1a88rrow\u0100lr\u1a7c\u1a81eft;\u61baight;\u61bb\u0280RSacd\u1a92\u1a94\u1a96\u1a9a\u1a9f\xbb\u0f47;\u64c8st;\u629birc;\u629aash;\u629dnint;\u6a10id;\u6aefcir;\u69c2ubs\u0100;u\u1abb\u1abc\u6663it\xbb\u1abc\u02ec\u1ac7\u1ad4\u1afa\0\u1b0aon\u0100;e\u1acd\u1ace\u403a\u0100;q\xc7\xc6\u026d\u1ad9\0\0\u1ae2a\u0100;t\u1ade\u1adf\u402c;\u4040\u0180;fl\u1ae8\u1ae9\u1aeb\u6201\xee\u1160e\u0100mx\u1af1\u1af6ent\xbb\u1ae9e\xf3\u024d\u01e7\u1afe\0\u1b07\u0100;d\u12bb\u1b02ot;\u6a6dn\xf4\u0246\u0180fry\u1b10\u1b14\u1b17;\uc000\ud835\udd54o\xe4\u0254\u8100\xa9;s\u0155\u1b1dr;\u6117\u0100ao\u1b25\u1b29rr;\u61b5ss;\u6717\u0100cu\u1b32\u1b37r;\uc000\ud835\udcb8\u0100bp\u1b3c\u1b44\u0100;e\u1b41\u1b42\u6acf;\u6ad1\u0100;e\u1b49\u1b4a\u6ad0;\u6ad2dot;\u62ef\u0380delprvw\u1b60\u1b6c\u1b77\u1b82\u1bac\u1bd4\u1bf9arr\u0100lr\u1b68\u1b6a;\u6938;\u6935\u0270\u1b72\0\0\u1b75r;\u62dec;\u62dfarr\u0100;p\u1b7f\u1b80\u61b6;\u693d\u0300;bcdos\u1b8f\u1b90\u1b96\u1ba1\u1ba5\u1ba8\u622arcap;\u6a48\u0100au\u1b9b\u1b9ep;\u6a46p;\u6a4aot;\u628dr;\u6a45;\uc000\u222a\ufe00\u0200alrv\u1bb5\u1bbf\u1bde\u1be3rr\u0100;m\u1bbc\u1bbd\u61b7;\u693cy\u0180evw\u1bc7\u1bd4\u1bd8q\u0270\u1bce\0\0\u1bd2re\xe3\u1b73u\xe3\u1b75ee;\u62ceedge;\u62cfen\u803b\xa4\u40a4earrow\u0100lr\u1bee\u1bf3eft\xbb\u1b80ight\xbb\u1bbde\xe4\u1bdd\u0100ci\u1c01\u1c07onin\xf4\u01f7nt;\u6231lcty;\u632d\u0980AHabcdefhijlorstuwz\u1c38\u1c3b\u1c3f\u1c5d\u1c69\u1c75\u1c8a\u1c9e\u1cac\u1cb7\u1cfb\u1cff\u1d0d\u1d7b\u1d91\u1dab\u1dbb\u1dc6\u1dcdr\xf2\u0381ar;\u6965\u0200glrs\u1c48\u1c4d\u1c52\u1c54ger;\u6020eth;\u6138\xf2\u1133h\u0100;v\u1c5a\u1c5b\u6010\xbb\u090a\u016b\u1c61\u1c67arow;\u690fa\xe3\u0315\u0100ay\u1c6e\u1c73ron;\u410f;\u4434\u0180;ao\u0332\u1c7c\u1c84\u0100gr\u02bf\u1c81r;\u61catseq;\u6a77\u0180glm\u1c91\u1c94\u1c98\u803b\xb0\u40b0ta;\u43b4ptyv;\u69b1\u0100ir\u1ca3\u1ca8sht;\u697f;\uc000\ud835\udd21ar\u0100lr\u1cb3\u1cb5\xbb\u08dc\xbb\u101e\u0280aegsv\u1cc2\u0378\u1cd6\u1cdc\u1ce0m\u0180;os\u0326\u1cca\u1cd4nd\u0100;s\u0326\u1cd1uit;\u6666amma;\u43ddin;\u62f2\u0180;io\u1ce7\u1ce8\u1cf8\u40f7de\u8100\xf7;o\u1ce7\u1cf0ntimes;\u62c7n\xf8\u1cf7cy;\u4452c\u026f\u1d06\0\0\u1d0arn;\u631eop;\u630d\u0280lptuw\u1d18\u1d1d\u1d22\u1d49\u1d55lar;\u4024f;\uc000\ud835\udd55\u0280;emps\u030b\u1d2d\u1d37\u1d3d\u1d42q\u0100;d\u0352\u1d33ot;\u6251inus;\u6238lus;\u6214quare;\u62a1blebarwedg\xe5\xfan\u0180adh\u112e\u1d5d\u1d67ownarrow\xf3\u1c83arpoon\u0100lr\u1d72\u1d76ef\xf4\u1cb4igh\xf4\u1cb6\u0162\u1d7f\u1d85karo\xf7\u0f42\u026f\u1d8a\0\0\u1d8ern;\u631fop;\u630c\u0180cot\u1d98\u1da3\u1da6\u0100ry\u1d9d\u1da1;\uc000\ud835\udcb9;\u4455l;\u69f6rok;\u4111\u0100dr\u1db0\u1db4ot;\u62f1i\u0100;f\u1dba\u1816\u65bf\u0100ah\u1dc0\u1dc3r\xf2\u0429a\xf2\u0fa6angle;\u69a6\u0100ci\u1dd2\u1dd5y;\u445fgrarr;\u67ff\u0900Dacdefglmnopqrstux\u1e01\u1e09\u1e19\u1e38\u0578\u1e3c\u1e49\u1e61\u1e7e\u1ea5\u1eaf\u1ebd\u1ee1\u1f2a\u1f37\u1f44\u1f4e\u1f5a\u0100Do\u1e06\u1d34o\xf4\u1c89\u0100cs\u1e0e\u1e14ute\u803b\xe9\u40e9ter;\u6a6e\u0200aioy\u1e22\u1e27\u1e31\u1e36ron;\u411br\u0100;c\u1e2d\u1e2e\u6256\u803b\xea\u40ealon;\u6255;\u444dot;\u4117\u0100Dr\u1e41\u1e45ot;\u6252;\uc000\ud835\udd22\u0180;rs\u1e50\u1e51\u1e57\u6a9aave\u803b\xe8\u40e8\u0100;d\u1e5c\u1e5d\u6a96ot;\u6a98\u0200;ils\u1e6a\u1e6b\u1e72\u1e74\u6a99nters;\u63e7;\u6113\u0100;d\u1e79\u1e7a\u6a95ot;\u6a97\u0180aps\u1e85\u1e89\u1e97cr;\u4113ty\u0180;sv\u1e92\u1e93\u1e95\u6205et\xbb\u1e93p\u01001;\u1e9d\u1ea4\u0133\u1ea1\u1ea3;\u6004;\u6005\u6003\u0100gs\u1eaa\u1eac;\u414bp;\u6002\u0100gp\u1eb4\u1eb8on;\u4119f;\uc000\ud835\udd56\u0180als\u1ec4\u1ece\u1ed2r\u0100;s\u1eca\u1ecb\u62d5l;\u69e3us;\u6a71i\u0180;lv\u1eda\u1edb\u1edf\u43b5on\xbb\u1edb;\u43f5\u0200csuv\u1eea\u1ef3\u1f0b\u1f23\u0100io\u1eef\u1e31rc\xbb\u1e2e\u0269\u1ef9\0\0\u1efb\xed\u0548ant\u0100gl\u1f02\u1f06tr\xbb\u1e5dess\xbb\u1e7a\u0180aei\u1f12\u1f16\u1f1als;\u403dst;\u625fv\u0100;D\u0235\u1f20D;\u6a78parsl;\u69e5\u0100Da\u1f2f\u1f33ot;\u6253rr;\u6971\u0180cdi\u1f3e\u1f41\u1ef8r;\u612fo\xf4\u0352\u0100ah\u1f49\u1f4b;\u43b7\u803b\xf0\u40f0\u0100mr\u1f53\u1f57l\u803b\xeb\u40ebo;\u60ac\u0180cip\u1f61\u1f64\u1f67l;\u4021s\xf4\u056e\u0100eo\u1f6c\u1f74ctatio\xee\u0559nential\xe5\u0579\u09e1\u1f92\0\u1f9e\0\u1fa1\u1fa7\0\0\u1fc6\u1fcc\0\u1fd3\0\u1fe6\u1fea\u2000\0\u2008\u205allingdotse\xf1\u1e44y;\u4444male;\u6640\u0180ilr\u1fad\u1fb3\u1fc1lig;\u8000\ufb03\u0269\u1fb9\0\0\u1fbdg;\u8000\ufb00ig;\u8000\ufb04;\uc000\ud835\udd23lig;\u8000\ufb01lig;\uc000fj\u0180alt\u1fd9\u1fdc\u1fe1t;\u666dig;\u8000\ufb02ns;\u65b1of;\u4192\u01f0\u1fee\0\u1ff3f;\uc000\ud835\udd57\u0100ak\u05bf\u1ff7\u0100;v\u1ffc\u1ffd\u62d4;\u6ad9artint;\u6a0d\u0100ao\u200c\u2055\u0100cs\u2011\u2052\u03b1\u201a\u2030\u2038\u2045\u2048\0\u2050\u03b2\u2022\u2025\u2027\u202a\u202c\0\u202e\u803b\xbd\u40bd;\u6153\u803b\xbc\u40bc;\u6155;\u6159;\u615b\u01b3\u2034\0\u2036;\u6154;\u6156\u02b4\u203e\u2041\0\0\u2043\u803b\xbe\u40be;\u6157;\u615c5;\u6158\u01b6\u204c\0\u204e;\u615a;\u615d8;\u615el;\u6044wn;\u6322cr;\uc000\ud835\udcbb\u0880Eabcdefgijlnorstv\u2082\u2089\u209f\u20a5\u20b0\u20b4\u20f0\u20f5\u20fa\u20ff\u2103\u2112\u2138\u0317\u213e\u2152\u219e\u0100;l\u064d\u2087;\u6a8c\u0180cmp\u2090\u2095\u209dute;\u41f5ma\u0100;d\u209c\u1cda\u43b3;\u6a86reve;\u411f\u0100iy\u20aa\u20aerc;\u411d;\u4433ot;\u4121\u0200;lqs\u063e\u0642\u20bd\u20c9\u0180;qs\u063e\u064c\u20c4lan\xf4\u0665\u0200;cdl\u0665\u20d2\u20d5\u20e5c;\u6aa9ot\u0100;o\u20dc\u20dd\u6a80\u0100;l\u20e2\u20e3\u6a82;\u6a84\u0100;e\u20ea\u20ed\uc000\u22db\ufe00s;\u6a94r;\uc000\ud835\udd24\u0100;g\u0673\u061bmel;\u6137cy;\u4453\u0200;Eaj\u065a\u210c\u210e\u2110;\u6a92;\u6aa5;\u6aa4\u0200Eaes\u211b\u211d\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6a8arox\xbb\u2124\u0100;q\u212e\u212f\u6a88\u0100;q\u212e\u211bim;\u62e7pf;\uc000\ud835\udd58\u0100ci\u2143\u2146r;\u610am\u0180;el\u066b\u214e\u2150;\u6a8e;\u6a90\u8300>;cdlqr\u05ee\u2160\u216a\u216e\u2173\u2179\u0100ci\u2165\u2167;\u6aa7r;\u6a7aot;\u62d7Par;\u6995uest;\u6a7c\u0280adels\u2184\u216a\u2190\u0656\u219b\u01f0\u2189\0\u218epro\xf8\u209er;\u6978q\u0100lq\u063f\u2196les\xf3\u2088i\xed\u066b\u0100en\u21a3\u21adrtneqq;\uc000\u2269\ufe00\xc5\u21aa\u0500Aabcefkosy\u21c4\u21c7\u21f1\u21f5\u21fa\u2218\u221d\u222f\u2268\u227dr\xf2\u03a0\u0200ilmr\u21d0\u21d4\u21d7\u21dbrs\xf0\u1484f\xbb\u2024il\xf4\u06a9\u0100dr\u21e0\u21e4cy;\u444a\u0180;cw\u08f4\u21eb\u21efir;\u6948;\u61adar;\u610firc;\u4125\u0180alr\u2201\u220e\u2213rts\u0100;u\u2209\u220a\u6665it\xbb\u220alip;\u6026con;\u62b9r;\uc000\ud835\udd25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223a\u223e\u2243\u225e\u2263rr;\u61fftht;\u623bk\u0100lr\u2249\u2253eftarrow;\u61a9ightarrow;\u61aaf;\uc000\ud835\udd59bar;\u6015\u0180clt\u226f\u2274\u2278r;\uc000\ud835\udcbdas\xe8\u21f4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xbb\u1c5b\u0ae1\u22a3\0\u22aa\0\u22b8\u22c5\u22ce\0\u22d5\u22f3\0\0\u22f8\u2322\u2367\u2362\u237f\0\u2386\u23aa\u23b4cute\u803b\xed\u40ed\u0180;iy\u0771\u22b0\u22b5rc\u803b\xee\u40ee;\u4438\u0100cx\u22bc\u22bfy;\u4435cl\u803b\xa1\u40a1\u0100fr\u039f\u22c9;\uc000\ud835\udd26rave\u803b\xec\u40ec\u0200;ino\u073e\u22dd\u22e9\u22ee\u0100in\u22e2\u22e6nt;\u6a0ct;\u622dfin;\u69dcta;\u6129lig;\u4133\u0180aop\u22fe\u231a\u231d\u0180cgt\u2305\u2308\u2317r;\u412b\u0180elp\u071f\u230f\u2313in\xe5\u078ear\xf4\u0720h;\u4131f;\u62b7ed;\u41b5\u0280;cfot\u04f4\u232c\u2331\u233d\u2341are;\u6105in\u0100;t\u2338\u2339\u621eie;\u69dddo\xf4\u2319\u0280;celp\u0757\u234c\u2350\u235b\u2361al;\u62ba\u0100gr\u2355\u2359er\xf3\u1563\xe3\u234darhk;\u6a17rod;\u6a3c\u0200cgpt\u236f\u2372\u2376\u237by;\u4451on;\u412ff;\uc000\ud835\udd5aa;\u43b9uest\u803b\xbf\u40bf\u0100ci\u238a\u238fr;\uc000\ud835\udcben\u0280;Edsv\u04f4\u239b\u239d\u23a1\u04f3;\u62f9ot;\u62f5\u0100;v\u23a6\u23a7\u62f4;\u62f3\u0100;i\u0777\u23aelde;\u4129\u01eb\u23b8\0\u23bccy;\u4456l\u803b\xef\u40ef\u0300cfmosu\u23cc\u23d7\u23dc\u23e1\u23e7\u23f5\u0100iy\u23d1\u23d5rc;\u4135;\u4439r;\uc000\ud835\udd27ath;\u4237pf;\uc000\ud835\udd5b\u01e3\u23ec\0\u23f1r;\uc000\ud835\udcbfrcy;\u4458kcy;\u4454\u0400acfghjos\u240b\u2416\u2422\u2427\u242d\u2431\u2435\u243bppa\u0100;v\u2413\u2414\u43ba;\u43f0\u0100ey\u241b\u2420dil;\u4137;\u443ar;\uc000\ud835\udd28reen;\u4138cy;\u4445cy;\u445cpf;\uc000\ud835\udd5ccr;\uc000\ud835\udcc0\u0b80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248d\u2491\u250e\u253d\u255a\u2580\u264e\u265e\u2665\u2679\u267d\u269a\u26b2\u26d8\u275d\u2768\u278b\u27c0\u2801\u2812\u0180art\u2477\u247a\u247cr\xf2\u09c6\xf2\u0395ail;\u691barr;\u690e\u0100;g\u0994\u248b;\u6a8bar;\u6962\u0963\u24a5\0\u24aa\0\u24b1\0\0\0\0\0\u24b5\u24ba\0\u24c6\u24c8\u24cd\0\u24f9ute;\u413amptyv;\u69b4ra\xee\u084cbda;\u43bbg\u0180;dl\u088e\u24c1\u24c3;\u6991\xe5\u088e;\u6a85uo\u803b\xab\u40abr\u0400;bfhlpst\u0899\u24de\u24e6\u24e9\u24eb\u24ee\u24f1\u24f5\u0100;f\u089d\u24e3s;\u691fs;\u691d\xeb\u2252p;\u61abl;\u6939im;\u6973l;\u61a2\u0180;ae\u24ff\u2500\u2504\u6aabil;\u6919\u0100;s\u2509\u250a\u6aad;\uc000\u2aad\ufe00\u0180abr\u2515\u2519\u251drr;\u690crk;\u6772\u0100ak\u2522\u252cc\u0100ek\u2528\u252a;\u407b;\u405b\u0100es\u2531\u2533;\u698bl\u0100du\u2539\u253b;\u698f;\u698d\u0200aeuy\u2546\u254b\u2556\u2558ron;\u413e\u0100di\u2550\u2554il;\u413c\xec\u08b0\xe2\u2529;\u443b\u0200cqrs\u2563\u2566\u256d\u257da;\u6936uo\u0100;r\u0e19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694bh;\u61b2\u0280;fgqs\u258b\u258c\u0989\u25f3\u25ff\u6264t\u0280ahlrt\u2598\u25a4\u25b7\u25c2\u25e8rrow\u0100;t\u0899\u25a1a\xe9\u24f6arpoon\u0100du\u25af\u25b4own\xbb\u045ap\xbb\u0966eftarrows;\u61c7ight\u0180ahs\u25cd\u25d6\u25derrow\u0100;s\u08f4\u08a7arpoon\xf3\u0f98quigarro\xf7\u21f0hreetimes;\u62cb\u0180;qs\u258b\u0993\u25falan\xf4\u09ac\u0280;cdgs\u09ac\u260a\u260d\u261d\u2628c;\u6aa8ot\u0100;o\u2614\u2615\u6a7f\u0100;r\u261a\u261b\u6a81;\u6a83\u0100;e\u2622\u2625\uc000\u22da\ufe00s;\u6a93\u0280adegs\u2633\u2639\u263d\u2649\u264bppro\xf8\u24c6ot;\u62d6q\u0100gq\u2643\u2645\xf4\u0989gt\xf2\u248c\xf4\u099bi\xed\u09b2\u0180ilr\u2655\u08e1\u265asht;\u697c;\uc000\ud835\udd29\u0100;E\u099c\u2663;\u6a91\u0161\u2669\u2676r\u0100du\u25b2\u266e\u0100;l\u0965\u2673;\u696alk;\u6584cy;\u4459\u0280;acht\u0a48\u2688\u268b\u2691\u2696r\xf2\u25c1orne\xf2\u1d08ard;\u696bri;\u65fa\u0100io\u269f\u26a4dot;\u4140ust\u0100;a\u26ac\u26ad\u63b0che\xbb\u26ad\u0200Eaes\u26bb\u26bd\u26c9\u26d4;\u6268p\u0100;p\u26c3\u26c4\u6a89rox\xbb\u26c4\u0100;q\u26ce\u26cf\u6a87\u0100;q\u26ce\u26bbim;\u62e6\u0400abnoptwz\u26e9\u26f4\u26f7\u271a\u272f\u2741\u2747\u2750\u0100nr\u26ee\u26f1g;\u67ecr;\u61fdr\xeb\u08c1g\u0180lmr\u26ff\u270d\u2714eft\u0100ar\u09e6\u2707ight\xe1\u09f2apsto;\u67fcight\xe1\u09fdparrow\u0100lr\u2725\u2729ef\xf4\u24edight;\u61ac\u0180afl\u2736\u2739\u273dr;\u6985;\uc000\ud835\udd5dus;\u6a2dimes;\u6a34\u0161\u274b\u274fst;\u6217\xe1\u134e\u0180;ef\u2757\u2758\u1800\u65cange\xbb\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277c\u2785\u2787r\xf2\u08a8orne\xf2\u1d8car\u0100;d\u0f98\u2783;\u696d;\u600eri;\u62bf\u0300achiqt\u2798\u279d\u0a40\u27a2\u27ae\u27bbquo;\u6039r;\uc000\ud835\udcc1m\u0180;eg\u09b2\u27aa\u27ac;\u6a8d;\u6a8f\u0100bu\u252a\u27b3o\u0100;r\u0e1f\u27b9;\u601arok;\u4142\u8400<;cdhilqr\u082b\u27d2\u2639\u27dc\u27e0\u27e5\u27ea\u27f0\u0100ci\u27d7\u27d9;\u6aa6r;\u6a79re\xe5\u25f2mes;\u62c9arr;\u6976uest;\u6a7b\u0100Pi\u27f5\u27f9ar;\u6996\u0180;ef\u2800\u092d\u181b\u65c3r\u0100du\u2807\u280dshar;\u694ahar;\u6966\u0100en\u2817\u2821rtneqq;\uc000\u2268\ufe00\xc5\u281e\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288e\u2893\u28a0\u28a5\u28a8\u28da\u28e2\u28e4\u0a83\u28f3\u2902Dot;\u623a\u0200clpr\u284e\u2852\u2863\u287dr\u803b\xaf\u40af\u0100et\u2857\u2859;\u6642\u0100;e\u285e\u285f\u6720se\xbb\u285f\u0100;s\u103b\u2868to\u0200;dlu\u103b\u2873\u2877\u287bow\xee\u048cef\xf4\u090f\xf0\u13d1ker;\u65ae\u0100oy\u2887\u288cmma;\u6a29;\u443cash;\u6014asuredangle\xbb\u1626r;\uc000\ud835\udd2ao;\u6127\u0180cdn\u28af\u28b4\u28c9ro\u803b\xb5\u40b5\u0200;acd\u1464\u28bd\u28c0\u28c4s\xf4\u16a7ir;\u6af0ot\u80bb\xb7\u01b5us\u0180;bd\u28d2\u1903\u28d3\u6212\u0100;u\u1d3c\u28d8;\u6a2a\u0163\u28de\u28e1p;\u6adb\xf2\u2212\xf0\u0a81\u0100dp\u28e9\u28eeels;\u62a7f;\uc000\ud835\udd5e\u0100ct\u28f8\u28fdr;\uc000\ud835\udcc2pos\xbb\u159d\u0180;lm\u2909\u290a\u290d\u43bctimap;\u62b8\u0c00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297e\u2989\u2998\u29da\u29e9\u2a15\u2a1a\u2a58\u2a5d\u2a83\u2a95\u2aa4\u2aa8\u2b04\u2b07\u2b44\u2b7f\u2bae\u2c34\u2c67\u2c7c\u2ce9\u0100gt\u2947\u294b;\uc000\u22d9\u0338\u0100;v\u2950\u0bcf\uc000\u226b\u20d2\u0180elt\u295a\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61cdightarrow;\u61ce;\uc000\u22d8\u0338\u0100;v\u297b\u0c47\uc000\u226a\u20d2ightarrow;\u61cf\u0100Dd\u298e\u2993ash;\u62afash;\u62ae\u0280bcnpt\u29a3\u29a7\u29ac\u29b1\u29ccla\xbb\u02deute;\u4144g;\uc000\u2220\u20d2\u0280;Eiop\u0d84\u29bc\u29c0\u29c5\u29c8;\uc000\u2a70\u0338d;\uc000\u224b\u0338s;\u4149ro\xf8\u0d84ur\u0100;a\u29d3\u29d4\u666el\u0100;s\u29d3\u0b38\u01f3\u29df\0\u29e3p\u80bb\xa0\u0b37mp\u0100;e\u0bf9\u0c00\u0280aeouy\u29f4\u29fe\u2a03\u2a10\u2a13\u01f0\u29f9\0\u29fb;\u6a43on;\u4148dil;\u4146ng\u0100;d\u0d7e\u2a0aot;\uc000\u2a6d\u0338p;\u6a42;\u443dash;\u6013\u0380;Aadqsx\u0b92\u2a29\u2a2d\u2a3b\u2a41\u2a45\u2a50rr;\u61d7r\u0100hr\u2a33\u2a36k;\u6924\u0100;o\u13f2\u13f0ot;\uc000\u2250\u0338ui\xf6\u0b63\u0100ei\u2a4a\u2a4ear;\u6928\xed\u0b98ist\u0100;s\u0ba0\u0b9fr;\uc000\ud835\udd2b\u0200Eest\u0bc5\u2a66\u2a79\u2a7c\u0180;qs\u0bbc\u2a6d\u0be1\u0180;qs\u0bbc\u0bc5\u2a74lan\xf4\u0be2i\xed\u0bea\u0100;r\u0bb6\u2a81\xbb\u0bb7\u0180Aap\u2a8a\u2a8d\u2a91r\xf2\u2971rr;\u61aear;\u6af2\u0180;sv\u0f8d\u2a9c\u0f8c\u0100;d\u2aa1\u2aa2\u62fc;\u62facy;\u445a\u0380AEadest\u2ab7\u2aba\u2abe\u2ac2\u2ac5\u2af6\u2af9r\xf2\u2966;\uc000\u2266\u0338rr;\u619ar;\u6025\u0200;fqs\u0c3b\u2ace\u2ae3\u2aeft\u0100ar\u2ad4\u2ad9rro\xf7\u2ac1ightarro\xf7\u2a90\u0180;qs\u0c3b\u2aba\u2aealan\xf4\u0c55\u0100;s\u0c55\u2af4\xbb\u0c36i\xed\u0c5d\u0100;r\u0c35\u2afei\u0100;e\u0c1a\u0c25i\xe4\u0d90\u0100pt\u2b0c\u2b11f;\uc000\ud835\udd5f\u8180\xac;in\u2b19\u2b1a\u2b36\u40acn\u0200;Edv\u0b89\u2b24\u2b28\u2b2e;\uc000\u22f9\u0338ot;\uc000\u22f5\u0338\u01e1\u0b89\u2b33\u2b35;\u62f7;\u62f6i\u0100;v\u0cb8\u2b3c\u01e1\u0cb8\u2b41\u2b43;\u62fe;\u62fd\u0180aor\u2b4b\u2b63\u2b69r\u0200;ast\u0b7b\u2b55\u2b5a\u2b5flle\xec\u0b7bl;\uc000\u2afd\u20e5;\uc000\u2202\u0338lint;\u6a14\u0180;ce\u0c92\u2b70\u2b73u\xe5\u0ca5\u0100;c\u0c98\u2b78\u0100;e\u0c92\u2b7d\xf1\u0c98\u0200Aait\u2b88\u2b8b\u2b9d\u2ba7r\xf2\u2988rr\u0180;cw\u2b94\u2b95\u2b99\u619b;\uc000\u2933\u0338;\uc000\u219d\u0338ghtarrow\xbb\u2b95ri\u0100;e\u0ccb\u0cd6\u0380chimpqu\u2bbd\u2bcd\u2bd9\u2b04\u0b78\u2be4\u2bef\u0200;cer\u0d32\u2bc6\u0d37\u2bc9u\xe5\u0d45;\uc000\ud835\udcc3ort\u026d\u2b05\0\0\u2bd6ar\xe1\u2b56m\u0100;e\u0d6e\u2bdf\u0100;q\u0d74\u0d73su\u0100bp\u2beb\u2bed\xe5\u0cf8\xe5\u0d0b\u0180bcp\u2bf6\u2c11\u2c19\u0200;Ees\u2bff\u2c00\u0d22\u2c04\u6284;\uc000\u2ac5\u0338et\u0100;e\u0d1b\u2c0bq\u0100;q\u0d23\u2c00c\u0100;e\u0d32\u2c17\xf1\u0d38\u0200;Ees\u2c22\u2c23\u0d5f\u2c27\u6285;\uc000\u2ac6\u0338et\u0100;e\u0d58\u2c2eq\u0100;q\u0d60\u2c23\u0200gilr\u2c3d\u2c3f\u2c45\u2c47\xec\u0bd7lde\u803b\xf1\u40f1\xe7\u0c43iangle\u0100lr\u2c52\u2c5ceft\u0100;e\u0c1a\u2c5a\xf1\u0c26ight\u0100;e\u0ccb\u2c65\xf1\u0cd7\u0100;m\u2c6c\u2c6d\u43bd\u0180;es\u2c74\u2c75\u2c79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2c8f\u2c94\u2c99\u2c9e\u2ca3\u2cb0\u2cb6\u2cd3\u2ce3ash;\u62adarr;\u6904p;\uc000\u224d\u20d2ash;\u62ac\u0100et\u2ca8\u2cac;\uc000\u2265\u20d2;\uc000>\u20d2nfin;\u69de\u0180Aet\u2cbd\u2cc1\u2cc5rr;\u6902;\uc000\u2264\u20d2\u0100;r\u2cca\u2ccd\uc000<\u20d2ie;\uc000\u22b4\u20d2\u0100At\u2cd8\u2cdcrr;\u6903rie;\uc000\u22b5\u20d2im;\uc000\u223c\u20d2\u0180Aan\u2cf0\u2cf4\u2d02rr;\u61d6r\u0100hr\u2cfa\u2cfdk;\u6923\u0100;o\u13e7\u13e5ear;\u6927\u1253\u1a95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2d2d\0\u2d38\u2d48\u2d60\u2d65\u2d72\u2d84\u1b07\0\0\u2d8d\u2dab\0\u2dc8\u2dce\0\u2ddc\u2e19\u2e2b\u2e3e\u2e43\u0100cs\u2d31\u1a97ute\u803b\xf3\u40f3\u0100iy\u2d3c\u2d45r\u0100;c\u1a9e\u2d42\u803b\xf4\u40f4;\u443e\u0280abios\u1aa0\u2d52\u2d57\u01c8\u2d5alac;\u4151v;\u6a38old;\u69bclig;\u4153\u0100cr\u2d69\u2d6dir;\u69bf;\uc000\ud835\udd2c\u036f\u2d79\0\0\u2d7c\0\u2d82n;\u42dbave\u803b\xf2\u40f2;\u69c1\u0100bm\u2d88\u0df4ar;\u69b5\u0200acit\u2d95\u2d98\u2da5\u2da8r\xf2\u1a80\u0100ir\u2d9d\u2da0r;\u69beoss;\u69bbn\xe5\u0e52;\u69c0\u0180aei\u2db1\u2db5\u2db9cr;\u414dga;\u43c9\u0180cdn\u2dc0\u2dc5\u01cdron;\u43bf;\u69b6pf;\uc000\ud835\udd60\u0180ael\u2dd4\u2dd7\u01d2r;\u69b7rp;\u69b9\u0380;adiosv\u2dea\u2deb\u2dee\u2e08\u2e0d\u2e10\u2e16\u6228r\xf2\u1a86\u0200;efm\u2df7\u2df8\u2e02\u2e05\u6a5dr\u0100;o\u2dfe\u2dff\u6134f\xbb\u2dff\u803b\xaa\u40aa\u803b\xba\u40bagof;\u62b6r;\u6a56lope;\u6a57;\u6a5b\u0180clo\u2e1f\u2e21\u2e27\xf2\u2e01ash\u803b\xf8\u40f8l;\u6298i\u016c\u2e2f\u2e34de\u803b\xf5\u40f5es\u0100;a\u01db\u2e3as;\u6a36ml\u803b\xf6\u40f6bar;\u633d\u0ae1\u2e5e\0\u2e7d\0\u2e80\u2e9d\0\u2ea2\u2eb9\0\0\u2ecb\u0e9c\0\u2f13\0\0\u2f2b\u2fbc\0\u2fc8r\u0200;ast\u0403\u2e67\u2e72\u0e85\u8100\xb6;l\u2e6d\u2e6e\u40b6le\xec\u0403\u0269\u2e78\0\0\u2e7bm;\u6af3;\u6afdy;\u443fr\u0280cimpt\u2e8b\u2e8f\u2e93\u1865\u2e97nt;\u4025od;\u402eil;\u6030enk;\u6031r;\uc000\ud835\udd2d\u0180imo\u2ea8\u2eb0\u2eb4\u0100;v\u2ead\u2eae\u43c6;\u43d5ma\xf4\u0a76ne;\u660e\u0180;tv\u2ebf\u2ec0\u2ec8\u43c0chfork\xbb\u1ffd;\u43d6\u0100au\u2ecf\u2edfn\u0100ck\u2ed5\u2eddk\u0100;h\u21f4\u2edb;\u610e\xf6\u21f4s\u0480;abcdemst\u2ef3\u2ef4\u1908\u2ef9\u2efd\u2f04\u2f06\u2f0a\u2f0e\u402bcir;\u6a23ir;\u6a22\u0100ou\u1d40\u2f02;\u6a25;\u6a72n\u80bb\xb1\u0e9dim;\u6a26wo;\u6a27\u0180ipu\u2f19\u2f20\u2f25ntint;\u6a15f;\uc000\ud835\udd61nd\u803b\xa3\u40a3\u0500;Eaceinosu\u0ec8\u2f3f\u2f41\u2f44\u2f47\u2f81\u2f89\u2f92\u2f7e\u2fb6;\u6ab3p;\u6ab7u\xe5\u0ed9\u0100;c\u0ece\u2f4c\u0300;acens\u0ec8\u2f59\u2f5f\u2f66\u2f68\u2f7eppro\xf8\u2f43urlye\xf1\u0ed9\xf1\u0ece\u0180aes\u2f6f\u2f76\u2f7approx;\u6ab9qq;\u6ab5im;\u62e8i\xed\u0edfme\u0100;s\u2f88\u0eae\u6032\u0180Eas\u2f78\u2f90\u2f7a\xf0\u2f75\u0180dfp\u0eec\u2f99\u2faf\u0180als\u2fa0\u2fa5\u2faalar;\u632eine;\u6312urf;\u6313\u0100;t\u0efb\u2fb4\xef\u0efbrel;\u62b0\u0100ci\u2fc0\u2fc5r;\uc000\ud835\udcc5;\u43c8ncsp;\u6008\u0300fiopsu\u2fda\u22e2\u2fdf\u2fe5\u2feb\u2ff1r;\uc000\ud835\udd2epf;\uc000\ud835\udd62rime;\u6057cr;\uc000\ud835\udcc6\u0180aeo\u2ff8\u3009\u3013t\u0100ei\u2ffe\u3005rnion\xf3\u06b0nt;\u6a16st\u0100;e\u3010\u3011\u403f\xf1\u1f19\xf4\u0f14\u0a80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30e0\u310e\u312b\u3147\u3162\u3172\u318e\u3206\u3215\u3224\u3229\u3258\u326e\u3272\u3290\u32b0\u32b7\u0180art\u3047\u304a\u304cr\xf2\u10b3\xf2\u03ddail;\u691car\xf2\u1c65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307f\u308f\u3094\u30cc\u0100eu\u306d\u3071;\uc000\u223d\u0331te;\u4155i\xe3\u116emptyv;\u69b3g\u0200;del\u0fd1\u3089\u308b\u308d;\u6992;\u69a5\xe5\u0fd1uo\u803b\xbb\u40bbr\u0580;abcfhlpstw\u0fdc\u30ac\u30af\u30b7\u30b9\u30bc\u30be\u30c0\u30c3\u30c7\u30cap;\u6975\u0100;f\u0fe0\u30b4s;\u6920;\u6933s;\u691e\xeb\u225d\xf0\u272el;\u6945im;\u6974l;\u61a3;\u619d\u0100ai\u30d1\u30d5il;\u691ao\u0100;n\u30db\u30dc\u6236al\xf3\u0f1e\u0180abr\u30e7\u30ea\u30eer\xf2\u17e5rk;\u6773\u0100ak\u30f3\u30fdc\u0100ek\u30f9\u30fb;\u407d;\u405d\u0100es\u3102\u3104;\u698cl\u0100du\u310a\u310c;\u698e;\u6990\u0200aeuy\u3117\u311c\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xec\u0ff2\xe2\u30fa;\u4440\u0200clqs\u3134\u3137\u313d\u3144a;\u6937dhar;\u6969uo\u0100;r\u020e\u020dh;\u61b3\u0180acg\u314e\u315f\u0f44l\u0200;ips\u0f78\u3158\u315b\u109cn\xe5\u10bbar\xf4\u0fa9t;\u65ad\u0180ilr\u3169\u1023\u316esht;\u697d;\uc000\ud835\udd2f\u0100ao\u3177\u3186r\u0100du\u317d\u317f\xbb\u047b\u0100;l\u1091\u3184;\u696c\u0100;v\u318b\u318c\u43c1;\u43f1\u0180gns\u3195\u31f9\u31fcht\u0300ahlrst\u31a4\u31b0\u31c2\u31d8\u31e4\u31eerrow\u0100;t\u0fdc\u31ada\xe9\u30c8arpoon\u0100du\u31bb\u31bfow\xee\u317ep\xbb\u1092eft\u0100ah\u31ca\u31d0rrow\xf3\u0feaarpoon\xf3\u0551ightarrows;\u61c9quigarro\xf7\u30cbhreetimes;\u62ccg;\u42daingdotse\xf1\u1f32\u0180ahm\u320d\u3210\u3213r\xf2\u0feaa\xf2\u0551;\u600foust\u0100;a\u321e\u321f\u63b1che\xbb\u321fmid;\u6aee\u0200abpt\u3232\u323d\u3240\u3252\u0100nr\u3237\u323ag;\u67edr;\u61fer\xeb\u1003\u0180afl\u3247\u324a\u324er;\u6986;\uc000\ud835\udd63us;\u6a2eimes;\u6a35\u0100ap\u325d\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6a12ar\xf2\u31e3\u0200achq\u327b\u3280\u10bc\u3285quo;\u603ar;\uc000\ud835\udcc7\u0100bu\u30fb\u328ao\u0100;r\u0214\u0213\u0180hir\u3297\u329b\u32a0re\xe5\u31f8mes;\u62cai\u0200;efl\u32aa\u1059\u1821\u32ab\u65b9tri;\u69celuhar;\u6968;\u611e\u0d61\u32d5\u32db\u32df\u332c\u3338\u3371\0\u337a\u33a4\0\0\u33ec\u33f0\0\u3428\u3448\u345a\u34ad\u34b1\u34ca\u34f1\0\u3616\0\0\u3633cute;\u415bqu\xef\u27ba\u0500;Eaceinpsy\u11ed\u32f3\u32f5\u32ff\u3302\u330b\u330f\u331f\u3326\u3329;\u6ab4\u01f0\u32fa\0\u32fc;\u6ab8on;\u4161u\xe5\u11fe\u0100;d\u11f3\u3307il;\u415frc;\u415d\u0180Eas\u3316\u3318\u331b;\u6ab6p;\u6abaim;\u62e9olint;\u6a13i\xed\u1204;\u4441ot\u0180;be\u3334\u1d47\u3335\u62c5;\u6a66\u0380Aacmstx\u3346\u334a\u3357\u335b\u335e\u3363\u336drr;\u61d8r\u0100hr\u3350\u3352\xeb\u2228\u0100;o\u0a36\u0a34t\u803b\xa7\u40a7i;\u403bwar;\u6929m\u0100in\u3369\xf0nu\xf3\xf1t;\u6736r\u0100;o\u3376\u2055\uc000\ud835\udd30\u0200acoy\u3382\u3386\u3391\u33a0rp;\u666f\u0100hy\u338b\u338fcy;\u4449;\u4448rt\u026d\u3399\0\0\u339ci\xe4\u1464ara\xec\u2e6f\u803b\xad\u40ad\u0100gm\u33a8\u33b4ma\u0180;fv\u33b1\u33b2\u33b2\u43c3;\u43c2\u0400;deglnpr\u12ab\u33c5\u33c9\u33ce\u33d6\u33de\u33e1\u33e6ot;\u6a6a\u0100;q\u12b1\u12b0\u0100;E\u33d3\u33d4\u6a9e;\u6aa0\u0100;E\u33db\u33dc\u6a9d;\u6a9fe;\u6246lus;\u6a24arr;\u6972ar\xf2\u113d\u0200aeit\u33f8\u3408\u340f\u3417\u0100ls\u33fd\u3404lsetm\xe9\u336ahp;\u6a33parsl;\u69e4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341c\u341d\u6aaa\u0100;s\u3422\u3423\u6aac;\uc000\u2aac\ufe00\u0180flp\u342e\u3433\u3442tcy;\u444c\u0100;b\u3438\u3439\u402f\u0100;a\u343e\u343f\u69c4r;\u633ff;\uc000\ud835\udd64a\u0100dr\u344d\u0402es\u0100;u\u3454\u3455\u6660it\xbb\u3455\u0180csu\u3460\u3479\u349f\u0100au\u3465\u346fp\u0100;s\u1188\u346b;\uc000\u2293\ufe00p\u0100;s\u11b4\u3475;\uc000\u2294\ufe00u\u0100bp\u347f\u348f\u0180;es\u1197\u119c\u3486et\u0100;e\u1197\u348d\xf1\u119d\u0180;es\u11a8\u11ad\u3496et\u0100;e\u11a8\u349d\xf1\u11ae\u0180;af\u117b\u34a6\u05b0r\u0165\u34ab\u05b1\xbb\u117car\xf2\u1148\u0200cemt\u34b9\u34be\u34c2\u34c5r;\uc000\ud835\udcc8tm\xee\xf1i\xec\u3415ar\xe6\u11be\u0100ar\u34ce\u34d5r\u0100;f\u34d4\u17bf\u6606\u0100an\u34da\u34edight\u0100ep\u34e3\u34eapsilo\xee\u1ee0h\xe9\u2eafs\xbb\u2852\u0280bcmnp\u34fb\u355e\u1209\u358b\u358e\u0480;Edemnprs\u350e\u350f\u3511\u3515\u351e\u3523\u352c\u3531\u3536\u6282;\u6ac5ot;\u6abd\u0100;d\u11da\u351aot;\u6ac3ult;\u6ac1\u0100Ee\u3528\u352a;\u6acb;\u628alus;\u6abfarr;\u6979\u0180eiu\u353d\u3552\u3555t\u0180;en\u350e\u3545\u354bq\u0100;q\u11da\u350feq\u0100;q\u352b\u3528m;\u6ac7\u0100bp\u355a\u355c;\u6ad5;\u6ad3c\u0300;acens\u11ed\u356c\u3572\u3579\u357b\u3326ppro\xf8\u32faurlye\xf1\u11fe\xf1\u11f3\u0180aes\u3582\u3588\u331bppro\xf8\u331aq\xf1\u3317g;\u666a\u0680123;Edehlmnps\u35a9\u35ac\u35af\u121c\u35b2\u35b4\u35c0\u35c9\u35d5\u35da\u35df\u35e8\u35ed\u803b\xb9\u40b9\u803b\xb2\u40b2\u803b\xb3\u40b3;\u6ac6\u0100os\u35b9\u35bct;\u6abeub;\u6ad8\u0100;d\u1222\u35c5ot;\u6ac4s\u0100ou\u35cf\u35d2l;\u67c9b;\u6ad7arr;\u697bult;\u6ac2\u0100Ee\u35e4\u35e6;\u6acc;\u628blus;\u6ac0\u0180eiu\u35f4\u3609\u360ct\u0180;en\u121c\u35fc\u3602q\u0100;q\u1222\u35b2eq\u0100;q\u35e7\u35e4m;\u6ac8\u0100bp\u3611\u3613;\u6ad4;\u6ad6\u0180Aan\u361c\u3620\u362drr;\u61d9r\u0100hr\u3626\u3628\xeb\u222e\u0100;o\u0a2b\u0a29war;\u692alig\u803b\xdf\u40df\u0be1\u3651\u365d\u3660\u12ce\u3673\u3679\0\u367e\u36c2\0\0\0\0\0\u36db\u3703\0\u3709\u376c\0\0\0\u3787\u0272\u3656\0\0\u365bget;\u6316;\u43c4r\xeb\u0e5f\u0180aey\u3666\u366b\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uc000\ud835\udd31\u0200eiko\u3686\u369d\u36b5\u36bc\u01f2\u368b\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369b\u43b8ym;\u43d1\u0100cn\u36a2\u36b2k\u0100as\u36a8\u36aeppro\xf8\u12c1im\xbb\u12acs\xf0\u129e\u0100as\u36ba\u36ae\xf0\u12c1rn\u803b\xfe\u40fe\u01ec\u031f\u36c6\u22e7es\u8180\xd7;bd\u36cf\u36d0\u36d8\u40d7\u0100;a\u190f\u36d5r;\u6a31;\u6a30\u0180eps\u36e1\u36e3\u3700\xe1\u2a4d\u0200;bcf\u0486\u36ec\u36f0\u36f4ot;\u6336ir;\u6af1\u0100;o\u36f9\u36fc\uc000\ud835\udd65rk;\u6ada\xe1\u3362rime;\u6034\u0180aip\u370f\u3712\u3764d\xe5\u1248\u0380adempst\u3721\u374d\u3740\u3751\u3757\u375c\u375fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65b5own\xbb\u1dbbeft\u0100;e\u2800\u373e\xf1\u092e;\u625cight\u0100;e\u32aa\u374b\xf1\u105aot;\u65ecinus;\u6a3alus;\u6a39b;\u69cdime;\u6a3bezium;\u63e2\u0180cht\u3772\u377d\u3781\u0100ry\u3777\u377b;\uc000\ud835\udcc9;\u4446cy;\u445brok;\u4167\u0100io\u378b\u378ex\xf4\u1777head\u0100lr\u3797\u37a0eftarro\xf7\u084fightarrow\xbb\u0f5d\u0900AHabcdfghlmoprstuw\u37d0\u37d3\u37d7\u37e4\u37f0\u37fc\u380e\u381c\u3823\u3834\u3851\u385d\u386b\u38a9\u38cc\u38d2\u38ea\u38f6r\xf2\u03edar;\u6963\u0100cr\u37dc\u37e2ute\u803b\xfa\u40fa\xf2\u1150r\u01e3\u37ea\0\u37edy;\u445eve;\u416d\u0100iy\u37f5\u37farc\u803b\xfb\u40fb;\u4443\u0180abh\u3803\u3806\u380br\xf2\u13adlac;\u4171a\xf2\u13c3\u0100ir\u3813\u3818sht;\u697e;\uc000\ud835\udd32rave\u803b\xf9\u40f9\u0161\u3827\u3831r\u0100lr\u382c\u382e\xbb\u0957\xbb\u1083lk;\u6580\u0100ct\u3839\u384d\u026f\u383f\0\0\u384arn\u0100;e\u3845\u3846\u631cr\xbb\u3846op;\u630fri;\u65f8\u0100al\u3856\u385acr;\u416b\u80bb\xa8\u0349\u0100gp\u3862\u3866on;\u4173f;\uc000\ud835\udd66\u0300adhlsu\u114b\u3878\u387d\u1372\u3891\u38a0own\xe1\u13b3arpoon\u0100lr\u3888\u388cef\xf4\u382digh\xf4\u382fi\u0180;hl\u3899\u389a\u389c\u43c5\xbb\u13faon\xbb\u389aparrows;\u61c8\u0180cit\u38b0\u38c4\u38c8\u026f\u38b6\0\0\u38c1rn\u0100;e\u38bc\u38bd\u631dr\xbb\u38bdop;\u630eng;\u416fri;\u65f9cr;\uc000\ud835\udcca\u0180dir\u38d9\u38dd\u38e2ot;\u62f0lde;\u4169i\u0100;f\u3730\u38e8\xbb\u1813\u0100am\u38ef\u38f2r\xf2\u38a8l\u803b\xfc\u40fcangle;\u69a7\u0780ABDacdeflnoprsz\u391c\u391f\u3929\u392d\u39b5\u39b8\u39bd\u39df\u39e4\u39e8\u39f3\u39f9\u39fd\u3a01\u3a20r\xf2\u03f7ar\u0100;v\u3926\u3927\u6ae8;\u6ae9as\xe8\u03e1\u0100nr\u3932\u3937grt;\u699c\u0380eknprst\u34e3\u3946\u394b\u3952\u395d\u3964\u3996app\xe1\u2415othin\xe7\u1e96\u0180hir\u34eb\u2ec8\u3959op\xf4\u2fb5\u0100;h\u13b7\u3962\xef\u318d\u0100iu\u3969\u396dgm\xe1\u33b3\u0100bp\u3972\u3984setneq\u0100;q\u397d\u3980\uc000\u228a\ufe00;\uc000\u2acb\ufe00setneq\u0100;q\u398f\u3992\uc000\u228b\ufe00;\uc000\u2acc\ufe00\u0100hr\u399b\u399fet\xe1\u369ciangle\u0100lr\u39aa\u39afeft\xbb\u0925ight\xbb\u1051y;\u4432ash\xbb\u1036\u0180elr\u39c4\u39d2\u39d7\u0180;be\u2dea\u39cb\u39cfar;\u62bbq;\u625alip;\u62ee\u0100bt\u39dc\u1468a\xf2\u1469r;\uc000\ud835\udd33tr\xe9\u39aesu\u0100bp\u39ef\u39f1\xbb\u0d1c\xbb\u0d59pf;\uc000\ud835\udd67ro\xf0\u0efbtr\xe9\u39b4\u0100cu\u3a06\u3a0br;\uc000\ud835\udccb\u0100bp\u3a10\u3a18n\u0100Ee\u3980\u3a16\xbb\u397en\u0100Ee\u3992\u3a1e\xbb\u3990igzag;\u699a\u0380cefoprs\u3a36\u3a3b\u3a56\u3a5b\u3a54\u3a61\u3a6airc;\u4175\u0100di\u3a40\u3a51\u0100bg\u3a45\u3a49ar;\u6a5fe\u0100;q\u15fa\u3a4f;\u6259erp;\u6118r;\uc000\ud835\udd34pf;\uc000\ud835\udd68\u0100;e\u1479\u3a66at\xe8\u1479cr;\uc000\ud835\udccc\u0ae3\u178e\u3a87\0\u3a8b\0\u3a90\u3a9b\0\0\u3a9d\u3aa8\u3aab\u3aaf\0\0\u3ac3\u3ace\0\u3ad8\u17dc\u17dftr\xe9\u17d1r;\uc000\ud835\udd35\u0100Aa\u3a94\u3a97r\xf2\u03c3r\xf2\u09f6;\u43be\u0100Aa\u3aa1\u3aa4r\xf2\u03b8r\xf2\u09eba\xf0\u2713is;\u62fb\u0180dpt\u17a4\u3ab5\u3abe\u0100fl\u3aba\u17a9;\uc000\ud835\udd69im\xe5\u17b2\u0100Aa\u3ac7\u3acar\xf2\u03cer\xf2\u0a01\u0100cq\u3ad2\u17b8r;\uc000\ud835\udccd\u0100pt\u17d6\u3adcr\xe9\u17d4\u0400acefiosu\u3af0\u3afd\u3b08\u3b0c\u3b11\u3b15\u3b1b\u3b21c\u0100uy\u3af6\u3afbte\u803b\xfd\u40fd;\u444f\u0100iy\u3b02\u3b06rc;\u4177;\u444bn\u803b\xa5\u40a5r;\uc000\ud835\udd36cy;\u4457pf;\uc000\ud835\udd6acr;\uc000\ud835\udcce\u0100cm\u3b26\u3b29y;\u444el\u803b\xff\u40ff\u0500acdefhiosw\u3b42\u3b48\u3b54\u3b58\u3b64\u3b69\u3b6d\u3b74\u3b7a\u3b80cute;\u417a\u0100ay\u3b4d\u3b52ron;\u417e;\u4437ot;\u417c\u0100et\u3b5d\u3b61tr\xe6\u155fa;\u43b6r;\uc000\ud835\udd37cy;\u4436grarr;\u61ddpf;\uc000\ud835\udd6bcr;\uc000\ud835\udccf\u0100jn\u3b85\u3b87;\u600dj;\u600c"
    .split("")
    .map((c) => c.charCodeAt(0))));
//# sourceMappingURL=decode-data-html.js.map
;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/generated/decode-data-xml.js
// Generated using scripts/write-decode-map.ts
/* harmony default export */ const decode_data_xml = (new Uint16Array(
// prettier-ignore
"\u0200aglq\t\x15\x18\x1b\u026d\x0f\0\0\x12p;\u4026os;\u4027t;\u403et;\u403cuot;\u4022"
    .split("")
    .map((c) => c.charCodeAt(0))));
//# sourceMappingURL=decode-data-xml.js.map
;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/decode_codepoint.js
// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
var decode_codepoint_a;
const decodeMap = new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376],
]);
/**
 * Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
 */
const fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
(decode_codepoint_a = String.fromCodePoint) !== null && decode_codepoint_a !== void 0 ? decode_codepoint_a : function (codePoint) {
    let output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }
    output += String.fromCharCode(codePoint);
    return output;
};
/**
 * Replace the given code point with a replacement character if it is a
 * surrogate or is outside the valid range. Otherwise return the code
 * point unchanged.
 */
function replaceCodePoint(codePoint) {
    var _a;
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return 0xfffd;
    }
    return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
}
/**
 * Replace the code point if relevant, then convert it to a string.
 *
 * @deprecated Use `fromCodePoint(replaceCodePoint(codePoint))` instead.
 * @param codePoint The code point to decode.
 * @returns The decoded code point.
 */
function decodeCodePoint(codePoint) {
    return fromCodePoint(replaceCodePoint(codePoint));
}
//# sourceMappingURL=decode_codepoint.js.map
;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/decode.js



// Re-export for use by eg. htmlparser2


var CharCodes;
(function (CharCodes) {
    CharCodes[CharCodes["NUM"] = 35] = "NUM";
    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
    CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
    CharCodes[CharCodes["NINE"] = 57] = "NINE";
    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
    CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
    CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
    CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
    CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */
const TO_LOWER_BIT = 0b100000;
var BinTrieFlags;
(function (BinTrieFlags) {
    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code) {
    return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
    return ((code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F) ||
        (code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F));
}
function isAsciiAlphaNumeric(code) {
    return ((code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z) ||
        (code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z) ||
        isNumber(code));
}
/**
 * Checks if the given character is a valid end character for an entity in an attribute.
 *
 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
 */
function isEntityInAttributeInvalidEnd(code) {
    return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function (EntityDecoderState) {
    EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
    EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
    EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
    EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
    EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var decode_DecodingMode;
(function (DecodingMode) {
    /** Entities in text nodes that can end with any character. */
    DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
    /** Only allow entities terminated with a semicolon. */
    DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
    /** Entities in attributes have limitations on ending characters. */
    DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
})(decode_DecodingMode || (decode_DecodingMode = {}));
/**
 * Token decoder with support of writing partial entities.
 */
class EntityDecoder {
    constructor(
    /** The tree used to decode entities. */
    decodeTree, 
    /**
     * The function that is called when a codepoint is decoded.
     *
     * For multi-byte named entities, this will be called multiple times,
     * with the second codepoint, and the same `consumed` value.
     *
     * @param codepoint The decoded codepoint.
     * @param consumed The number of bytes consumed by the decoder.
     */
    emitCodePoint, 
    /** An object that is used to produce errors. */
    errors) {
        this.decodeTree = decodeTree;
        this.emitCodePoint = emitCodePoint;
        this.errors = errors;
        /** The current state of the decoder. */
        this.state = EntityDecoderState.EntityStart;
        /** Characters that were consumed while parsing an entity. */
        this.consumed = 1;
        /**
         * The result of the entity.
         *
         * Either the result index of a numeric entity, or the codepoint of a
         * numeric entity.
         */
        this.result = 0;
        /** The current index in the decode tree. */
        this.treeIndex = 0;
        /** The number of characters that were consumed in excess. */
        this.excess = 1;
        /** The mode in which the decoder is operating. */
        this.decodeMode = decode_DecodingMode.Strict;
    }
    /** Resets the instance to make it reusable. */
    startEntity(decodeMode) {
        this.decodeMode = decodeMode;
        this.state = EntityDecoderState.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param string The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    write(str, offset) {
        switch (this.state) {
            case EntityDecoderState.EntityStart: {
                if (str.charCodeAt(offset) === CharCodes.NUM) {
                    this.state = EntityDecoderState.NumericStart;
                    this.consumed += 1;
                    return this.stateNumericStart(str, offset + 1);
                }
                this.state = EntityDecoderState.NamedEntity;
                return this.stateNamedEntity(str, offset);
            }
            case EntityDecoderState.NumericStart: {
                return this.stateNumericStart(str, offset);
            }
            case EntityDecoderState.NumericDecimal: {
                return this.stateNumericDecimal(str, offset);
            }
            case EntityDecoderState.NumericHex: {
                return this.stateNumericHex(str, offset);
            }
            case EntityDecoderState.NamedEntity: {
                return this.stateNamedEntity(str, offset);
            }
        }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericStart(str, offset) {
        if (offset >= str.length) {
            return -1;
        }
        if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
            this.state = EntityDecoderState.NumericHex;
            this.consumed += 1;
            return this.stateNumericHex(str, offset + 1);
        }
        this.state = EntityDecoderState.NumericDecimal;
        return this.stateNumericDecimal(str, offset);
    }
    addToNumericResult(str, start, end, base) {
        if (start !== end) {
            const digitCount = end - start;
            this.result =
                this.result * Math.pow(base, digitCount) +
                    parseInt(str.substr(start, digitCount), base);
            this.consumed += digitCount;
        }
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericHex(str, offset) {
        const startIdx = offset;
        while (offset < str.length) {
            const char = str.charCodeAt(offset);
            if (isNumber(char) || isHexadecimalCharacter(char)) {
                offset += 1;
            }
            else {
                this.addToNumericResult(str, startIdx, offset, 16);
                return this.emitNumericEntity(char, 3);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 16);
        return -1;
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericDecimal(str, offset) {
        const startIdx = offset;
        while (offset < str.length) {
            const char = str.charCodeAt(offset);
            if (isNumber(char)) {
                offset += 1;
            }
            else {
                this.addToNumericResult(str, startIdx, offset, 10);
                return this.emitNumericEntity(char, 2);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 10);
        return -1;
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */
    emitNumericEntity(lastCp, expectedLength) {
        var _a;
        // Ensure we consumed at least one digit.
        if (this.consumed <= expectedLength) {
            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
        }
        // Figure out if this is a legit end of the entity
        if (lastCp === CharCodes.SEMI) {
            this.consumed += 1;
        }
        else if (this.decodeMode === decode_DecodingMode.Strict) {
            return 0;
        }
        this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
        if (this.errors) {
            if (lastCp !== CharCodes.SEMI) {
                this.errors.missingSemicolonAfterCharacterReference();
            }
            this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNamedEntity(str, offset) {
        const { decodeTree } = this;
        let current = decodeTree[this.treeIndex];
        // The mask is the number of bytes of the value, including the current byte.
        let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        for (; offset < str.length; offset++, this.excess++) {
            const char = str.charCodeAt(offset);
            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
            if (this.treeIndex < 0) {
                return this.result === 0 ||
                    // If we are parsing an attribute
                    (this.decodeMode === decode_DecodingMode.Attribute &&
                        // We shouldn't have consumed any characters after the entity,
                        (valueLength === 0 ||
                            // And there should be no invalid characters.
                            isEntityInAttributeInvalidEnd(char)))
                    ? 0
                    : this.emitNotTerminatedNamedEntity();
            }
            current = decodeTree[this.treeIndex];
            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
            // If the branch is a value, store it and continue
            if (valueLength !== 0) {
                // If the entity is terminated by a semicolon, we are done.
                if (char === CharCodes.SEMI) {
                    return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                }
                // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
                if (this.decodeMode !== decode_DecodingMode.Strict) {
                    this.result = this.treeIndex;
                    this.consumed += this.excess;
                    this.excess = 0;
                }
            }
        }
        return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */
    emitNotTerminatedNamedEntity() {
        var _a;
        const { result, decodeTree } = this;
        const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result, valueLength, this.consumed);
        (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
        return this.consumed;
    }
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */
    emitNamedEntityData(result, valueLength, consumed) {
        const { decodeTree } = this;
        this.emitCodePoint(valueLength === 1
            ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH
            : decodeTree[result + 1], consumed);
        if (valueLength === 3) {
            // For multi-byte values, we need to emit the second byte.
            this.emitCodePoint(decodeTree[result + 2], consumed);
        }
        return consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */
    end() {
        var _a;
        switch (this.state) {
            case EntityDecoderState.NamedEntity: {
                // Emit a named entity if we have one.
                return this.result !== 0 &&
                    (this.decodeMode !== decode_DecodingMode.Attribute ||
                        this.result === this.treeIndex)
                    ? this.emitNotTerminatedNamedEntity()
                    : 0;
            }
            // Otherwise, emit a numeric entity if we have one.
            case EntityDecoderState.NumericDecimal: {
                return this.emitNumericEntity(0, 2);
            }
            case EntityDecoderState.NumericHex: {
                return this.emitNumericEntity(0, 3);
            }
            case EntityDecoderState.NumericStart: {
                (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
                return 0;
            }
            case EntityDecoderState.EntityStart: {
                // Return 0 if we have no entity.
                return 0;
            }
        }
    }
}
/**
 * Creates a function that decodes entities in a string.
 *
 * @param decodeTree The decode tree.
 * @returns A function that decodes entities in a string.
 */
function getDecoder(decodeTree) {
    let ret = "";
    const decoder = new EntityDecoder(decodeTree, (str) => (ret += fromCodePoint(str)));
    return function decodeWithTrie(str, decodeMode) {
        let lastIndex = 0;
        let offset = 0;
        while ((offset = str.indexOf("&", offset)) >= 0) {
            ret += str.slice(lastIndex, offset);
            decoder.startEntity(decodeMode);
            const len = decoder.write(str, 
            // Skip the "&"
            offset + 1);
            if (len < 0) {
                lastIndex = offset + decoder.end();
                break;
            }
            lastIndex = offset + len;
            // If `len` is 0, skip the current `&` and continue.
            offset = len === 0 ? lastIndex + 1 : lastIndex;
        }
        const result = ret + str.slice(lastIndex);
        // Make sure we don't keep a reference to the final string.
        ret = "";
        return result;
    };
}
/**
 * Determines the branch of the current node that is taken given the current
 * character. This function is used to traverse the trie.
 *
 * @param decodeTree The trie.
 * @param current The current node.
 * @param nodeIdx The index right after the current node and its value.
 * @param char The current character.
 * @returns The index of the next node, or -1 if no branch is taken.
 */
function determineBranch(decodeTree, current, nodeIdx, char) {
    const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
    const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
    // Case 1: Single branch encoded in jump offset
    if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
    }
    // Case 2: Multiple branches encoded in jump table
    if (jumpOffset) {
        const value = char - jumpOffset;
        return value < 0 || value >= branchCount
            ? -1
            : decodeTree[nodeIdx + value] - 1;
    }
    // Case 3: Multiple branches encoded in dictionary
    // Binary search for the character.
    let lo = nodeIdx;
    let hi = lo + branchCount - 1;
    while (lo <= hi) {
        const mid = (lo + hi) >>> 1;
        const midVal = decodeTree[mid];
        if (midVal < char) {
            lo = mid + 1;
        }
        else if (midVal > char) {
            hi = mid - 1;
        }
        else {
            return decodeTree[mid + branchCount];
        }
    }
    return -1;
}
const htmlDecoder = getDecoder(decode_data_html);
const xmlDecoder = getDecoder(decode_data_xml);
/**
 * Decodes an HTML string.
 *
 * @param str The string to decode.
 * @param mode The decoding mode.
 * @returns The decoded string.
 */
function decode_decodeHTML(str, mode = decode_DecodingMode.Legacy) {
    return htmlDecoder(str, mode);
}
/**
 * Decodes an HTML string in an attribute.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */
function decodeHTMLAttribute(str) {
    return htmlDecoder(str, decode_DecodingMode.Attribute);
}
/**
 * Decodes an HTML string, requiring all entities to be terminated by a semicolon.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */
function decodeHTMLStrict(str) {
    return htmlDecoder(str, decode_DecodingMode.Strict);
}
/**
 * Decodes an XML string, requiring all entities to be terminated by a semicolon.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */
function decode_decodeXML(str) {
    return xmlDecoder(str, decode_DecodingMode.Strict);
}
//# sourceMappingURL=decode.js.map
;// CONCATENATED MODULE: ./node_modules/htmlparser2/lib/esm/Tokenizer.js

var Tokenizer_CharCodes;
(function (CharCodes) {
    CharCodes[CharCodes["Tab"] = 9] = "Tab";
    CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
    CharCodes[CharCodes["Space"] = 32] = "Space";
    CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
    CharCodes[CharCodes["Number"] = 35] = "Number";
    CharCodes[CharCodes["Amp"] = 38] = "Amp";
    CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
    CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
    CharCodes[CharCodes["Dash"] = 45] = "Dash";
    CharCodes[CharCodes["Slash"] = 47] = "Slash";
    CharCodes[CharCodes["Zero"] = 48] = "Zero";
    CharCodes[CharCodes["Nine"] = 57] = "Nine";
    CharCodes[CharCodes["Semi"] = 59] = "Semi";
    CharCodes[CharCodes["Lt"] = 60] = "Lt";
    CharCodes[CharCodes["Eq"] = 61] = "Eq";
    CharCodes[CharCodes["Gt"] = 62] = "Gt";
    CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
    CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
    CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
    CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
    CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
    CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
    CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
    CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
    CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(Tokenizer_CharCodes || (Tokenizer_CharCodes = {}));
/** All the states the tokenizer can be in. */
var State;
(function (State) {
    State[State["Text"] = 1] = "Text";
    State[State["BeforeTagName"] = 2] = "BeforeTagName";
    State[State["InTagName"] = 3] = "InTagName";
    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
    State[State["InClosingTagName"] = 6] = "InClosingTagName";
    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
    // Attributes
    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
    State[State["InAttributeName"] = 9] = "InAttributeName";
    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
    // Declarations
    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
    State[State["InDeclaration"] = 16] = "InDeclaration";
    // Processing instructions
    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
    // Comments & CDATA
    State[State["BeforeComment"] = 18] = "BeforeComment";
    State[State["CDATASequence"] = 19] = "CDATASequence";
    State[State["InSpecialComment"] = 20] = "InSpecialComment";
    State[State["InCommentLike"] = 21] = "InCommentLike";
    // Special tags
    State[State["BeforeSpecialS"] = 22] = "BeforeSpecialS";
    State[State["SpecialStartSequence"] = 23] = "SpecialStartSequence";
    State[State["InSpecialTag"] = 24] = "InSpecialTag";
    State[State["BeforeEntity"] = 25] = "BeforeEntity";
    State[State["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
    State[State["InNamedEntity"] = 27] = "InNamedEntity";
    State[State["InNumericEntity"] = 28] = "InNumericEntity";
    State[State["InHexEntity"] = 29] = "InHexEntity";
})(State || (State = {}));
function isWhitespace(c) {
    return (c === Tokenizer_CharCodes.Space ||
        c === Tokenizer_CharCodes.NewLine ||
        c === Tokenizer_CharCodes.Tab ||
        c === Tokenizer_CharCodes.FormFeed ||
        c === Tokenizer_CharCodes.CarriageReturn);
}
function isEndOfTagSection(c) {
    return c === Tokenizer_CharCodes.Slash || c === Tokenizer_CharCodes.Gt || isWhitespace(c);
}
function Tokenizer_isNumber(c) {
    return c >= Tokenizer_CharCodes.Zero && c <= Tokenizer_CharCodes.Nine;
}
function isASCIIAlpha(c) {
    return ((c >= Tokenizer_CharCodes.LowerA && c <= Tokenizer_CharCodes.LowerZ) ||
        (c >= Tokenizer_CharCodes.UpperA && c <= Tokenizer_CharCodes.UpperZ));
}
function isHexDigit(c) {
    return ((c >= Tokenizer_CharCodes.UpperA && c <= Tokenizer_CharCodes.UpperF) ||
        (c >= Tokenizer_CharCodes.LowerA && c <= Tokenizer_CharCodes.LowerF));
}
var QuoteType;
(function (QuoteType) {
    QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
    QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
    QuoteType[QuoteType["Single"] = 2] = "Single";
    QuoteType[QuoteType["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
/**
 * Sequences used to match longer strings.
 *
 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
 * sequences with an increased offset.
 */
const Sequences = {
    Cdata: new Uint8Array([0x43, 0x44, 0x41, 0x54, 0x41, 0x5b]),
    CdataEnd: new Uint8Array([0x5d, 0x5d, 0x3e]),
    CommentEnd: new Uint8Array([0x2d, 0x2d, 0x3e]),
    ScriptEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74]),
    StyleEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65]),
    TitleEnd: new Uint8Array([0x3c, 0x2f, 0x74, 0x69, 0x74, 0x6c, 0x65]), // `</title`
};
class Tokenizer {
    constructor({ xmlMode = false, decodeEntities = true, }, cbs) {
        this.cbs = cbs;
        /** The current state the tokenizer is in. */
        this.state = State.Text;
        /** The read buffer. */
        this.buffer = "";
        /** The beginning of the section that is currently being read. */
        this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */
        this.index = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
        this.baseState = State.Text;
        /** For special parsing behavior inside of script and style tags. */
        this.isSpecial = false;
        /** Indicates whether the tokenizer has been paused. */
        this.running = true;
        /** The offset of the current buffer. */
        this.offset = 0;
        this.currentSequence = undefined;
        this.sequenceIndex = 0;
        this.trieIndex = 0;
        this.trieCurrent = 0;
        /** For named entities, the index of the value. For numeric entities, the code point. */
        this.entityResult = 0;
        this.entityExcess = 0;
        this.xmlMode = xmlMode;
        this.decodeEntities = decodeEntities;
        this.entityTrie = xmlMode ? decode_data_xml : decode_data_html;
    }
    reset() {
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = State.Text;
        this.currentSequence = undefined;
        this.running = true;
        this.offset = 0;
    }
    write(chunk) {
        this.offset += this.buffer.length;
        this.buffer = chunk;
        this.parse();
    }
    end() {
        if (this.running)
            this.finish();
    }
    pause() {
        this.running = false;
    }
    resume() {
        this.running = true;
        if (this.index < this.buffer.length + this.offset) {
            this.parse();
        }
    }
    /**
     * The current index within all of the written data.
     */
    getIndex() {
        return this.index;
    }
    /**
     * The start of the current section.
     */
    getSectionStart() {
        return this.sectionStart;
    }
    stateText(c) {
        if (c === Tokenizer_CharCodes.Lt ||
            (!this.decodeEntities && this.fastForwardTo(Tokenizer_CharCodes.Lt))) {
            if (this.index > this.sectionStart) {
                this.cbs.ontext(this.sectionStart, this.index);
            }
            this.state = State.BeforeTagName;
            this.sectionStart = this.index;
        }
        else if (this.decodeEntities && c === Tokenizer_CharCodes.Amp) {
            this.state = State.BeforeEntity;
        }
    }
    stateSpecialStartSequence(c) {
        const isEnd = this.sequenceIndex === this.currentSequence.length;
        const isMatch = isEnd
            ? // If we are at the end of the sequence, make sure the tag name has ended
                isEndOfTagSection(c)
            : // Otherwise, do a case-insensitive comparison
                (c | 0x20) === this.currentSequence[this.sequenceIndex];
        if (!isMatch) {
            this.isSpecial = false;
        }
        else if (!isEnd) {
            this.sequenceIndex++;
            return;
        }
        this.sequenceIndex = 0;
        this.state = State.InTagName;
        this.stateInTagName(c);
    }
    /** Look for an end tag. For <title> tags, also decode entities. */
    stateInSpecialTag(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (c === Tokenizer_CharCodes.Gt || isWhitespace(c)) {
                const endOfText = this.index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                    // Spoof the index so that reported locations match up.
                    const actualIndex = this.index;
                    this.index = endOfText;
                    this.cbs.ontext(this.sectionStart, endOfText);
                    this.index = actualIndex;
                }
                this.isSpecial = false;
                this.sectionStart = endOfText + 2; // Skip over the `</`
                this.stateInClosingTagName(c);
                return; // We are done; skip the rest of the function.
            }
            this.sequenceIndex = 0;
        }
        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
            this.sequenceIndex += 1;
        }
        else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd) {
                // We have to parse entities in <title> tags.
                if (this.decodeEntities && c === Tokenizer_CharCodes.Amp) {
                    this.state = State.BeforeEntity;
                }
            }
            else if (this.fastForwardTo(Tokenizer_CharCodes.Lt)) {
                // Outside of <title> tags, we can fast-forward.
                this.sequenceIndex = 1;
            }
        }
        else {
            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
            this.sequenceIndex = Number(c === Tokenizer_CharCodes.Lt);
        }
    }
    stateCDATASequence(c) {
        if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
                this.state = State.InCommentLike;
                this.currentSequence = Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
            }
        }
        else {
            this.sequenceIndex = 0;
            this.state = State.InDeclaration;
            this.stateInDeclaration(c); // Reconsume the character
        }
    }
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */
    fastForwardTo(c) {
        while (++this.index < this.buffer.length + this.offset) {
            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
                return true;
            }
        }
        /*
         * We increment the index at the end of the `parse` loop,
         * so set it to `buffer.length - 1` here.
         *
         * TODO: Refactor `parse` to increment index before calling states.
         */
        this.index = this.buffer.length + this.offset - 1;
        return false;
    }
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     */
    stateInCommentLike(c) {
        if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
                if (this.currentSequence === Sequences.CdataEnd) {
                    this.cbs.oncdata(this.sectionStart, this.index, 2);
                }
                else {
                    this.cbs.oncomment(this.sectionStart, this.index, 2);
                }
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
                this.state = State.Text;
            }
        }
        else if (this.sequenceIndex === 0) {
            // Fast-forward to the first character of the sequence
            if (this.fastForwardTo(this.currentSequence[0])) {
                this.sequenceIndex = 1;
            }
        }
        else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
            // Allow long sequences, eg. --->, ]]]>
            this.sequenceIndex = 0;
        }
    }
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */
    isTagStartChar(c) {
        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
    }
    startSpecial(sequence, offset) {
        this.isSpecial = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
        this.state = State.SpecialStartSequence;
    }
    stateBeforeTagName(c) {
        if (c === Tokenizer_CharCodes.ExclamationMark) {
            this.state = State.BeforeDeclaration;
            this.sectionStart = this.index + 1;
        }
        else if (c === Tokenizer_CharCodes.Questionmark) {
            this.state = State.InProcessingInstruction;
            this.sectionStart = this.index + 1;
        }
        else if (this.isTagStartChar(c)) {
            const lower = c | 0x20;
            this.sectionStart = this.index;
            if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
                this.startSpecial(Sequences.TitleEnd, 3);
            }
            else {
                this.state =
                    !this.xmlMode && lower === Sequences.ScriptEnd[2]
                        ? State.BeforeSpecialS
                        : State.InTagName;
            }
        }
        else if (c === Tokenizer_CharCodes.Slash) {
            this.state = State.BeforeClosingTagName;
        }
        else {
            this.state = State.Text;
            this.stateText(c);
        }
    }
    stateInTagName(c) {
        if (isEndOfTagSection(c)) {
            this.cbs.onopentagname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateBeforeClosingTagName(c) {
        if (isWhitespace(c)) {
            // Ignore
        }
        else if (c === Tokenizer_CharCodes.Gt) {
            this.state = State.Text;
        }
        else {
            this.state = this.isTagStartChar(c)
                ? State.InClosingTagName
                : State.InSpecialComment;
            this.sectionStart = this.index;
        }
    }
    stateInClosingTagName(c) {
        if (c === Tokenizer_CharCodes.Gt || isWhitespace(c)) {
            this.cbs.onclosetag(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterClosingTagName;
            this.stateAfterClosingTagName(c);
        }
    }
    stateAfterClosingTagName(c) {
        // Skip everything until ">"
        if (c === Tokenizer_CharCodes.Gt || this.fastForwardTo(Tokenizer_CharCodes.Gt)) {
            this.state = State.Text;
            this.baseState = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeAttributeName(c) {
        if (c === Tokenizer_CharCodes.Gt) {
            this.cbs.onopentagend(this.index);
            if (this.isSpecial) {
                this.state = State.InSpecialTag;
                this.sequenceIndex = 0;
            }
            else {
                this.state = State.Text;
            }
            this.baseState = this.state;
            this.sectionStart = this.index + 1;
        }
        else if (c === Tokenizer_CharCodes.Slash) {
            this.state = State.InSelfClosingTag;
        }
        else if (!isWhitespace(c)) {
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateInSelfClosingTag(c) {
        if (c === Tokenizer_CharCodes.Gt) {
            this.cbs.onselfclosingtag(this.index);
            this.state = State.Text;
            this.baseState = State.Text;
            this.sectionStart = this.index + 1;
            this.isSpecial = false; // Reset special state, in case of self-closing special tags
        }
        else if (!isWhitespace(c)) {
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateInAttributeName(c) {
        if (c === Tokenizer_CharCodes.Eq || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterAttributeName;
            this.stateAfterAttributeName(c);
        }
    }
    stateAfterAttributeName(c) {
        if (c === Tokenizer_CharCodes.Eq) {
            this.state = State.BeforeAttributeValue;
        }
        else if (c === Tokenizer_CharCodes.Slash || c === Tokenizer_CharCodes.Gt) {
            this.cbs.onattribend(QuoteType.NoValue, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
        else if (!isWhitespace(c)) {
            this.cbs.onattribend(QuoteType.NoValue, this.index);
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateBeforeAttributeValue(c) {
        if (c === Tokenizer_CharCodes.DoubleQuote) {
            this.state = State.InAttributeValueDq;
            this.sectionStart = this.index + 1;
        }
        else if (c === Tokenizer_CharCodes.SingleQuote) {
            this.state = State.InAttributeValueSq;
            this.sectionStart = this.index + 1;
        }
        else if (!isWhitespace(c)) {
            this.sectionStart = this.index;
            this.state = State.InAttributeValueNq;
            this.stateInAttributeValueNoQuotes(c); // Reconsume token
        }
    }
    handleInAttributeValue(c, quote) {
        if (c === quote ||
            (!this.decodeEntities && this.fastForwardTo(quote))) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(quote === Tokenizer_CharCodes.DoubleQuote
                ? QuoteType.Double
                : QuoteType.Single, this.index);
            this.state = State.BeforeAttributeName;
        }
        else if (this.decodeEntities && c === Tokenizer_CharCodes.Amp) {
            this.baseState = this.state;
            this.state = State.BeforeEntity;
        }
    }
    stateInAttributeValueDoubleQuotes(c) {
        this.handleInAttributeValue(c, Tokenizer_CharCodes.DoubleQuote);
    }
    stateInAttributeValueSingleQuotes(c) {
        this.handleInAttributeValue(c, Tokenizer_CharCodes.SingleQuote);
    }
    stateInAttributeValueNoQuotes(c) {
        if (isWhitespace(c) || c === Tokenizer_CharCodes.Gt) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(QuoteType.Unquoted, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
        else if (this.decodeEntities && c === Tokenizer_CharCodes.Amp) {
            this.baseState = this.state;
            this.state = State.BeforeEntity;
        }
    }
    stateBeforeDeclaration(c) {
        if (c === Tokenizer_CharCodes.OpeningSquareBracket) {
            this.state = State.CDATASequence;
            this.sequenceIndex = 0;
        }
        else {
            this.state =
                c === Tokenizer_CharCodes.Dash
                    ? State.BeforeComment
                    : State.InDeclaration;
        }
    }
    stateInDeclaration(c) {
        if (c === Tokenizer_CharCodes.Gt || this.fastForwardTo(Tokenizer_CharCodes.Gt)) {
            this.cbs.ondeclaration(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateInProcessingInstruction(c) {
        if (c === Tokenizer_CharCodes.Gt || this.fastForwardTo(Tokenizer_CharCodes.Gt)) {
            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeComment(c) {
        if (c === Tokenizer_CharCodes.Dash) {
            this.state = State.InCommentLike;
            this.currentSequence = Sequences.CommentEnd;
            // Allow short comments (eg. <!-->)
            this.sequenceIndex = 2;
            this.sectionStart = this.index + 1;
        }
        else {
            this.state = State.InDeclaration;
        }
    }
    stateInSpecialComment(c) {
        if (c === Tokenizer_CharCodes.Gt || this.fastForwardTo(Tokenizer_CharCodes.Gt)) {
            this.cbs.oncomment(this.sectionStart, this.index, 0);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeSpecialS(c) {
        const lower = c | 0x20;
        if (lower === Sequences.ScriptEnd[3]) {
            this.startSpecial(Sequences.ScriptEnd, 4);
        }
        else if (lower === Sequences.StyleEnd[3]) {
            this.startSpecial(Sequences.StyleEnd, 4);
        }
        else {
            this.state = State.InTagName;
            this.stateInTagName(c); // Consume the token again
        }
    }
    stateBeforeEntity(c) {
        // Start excess with 1 to include the '&'
        this.entityExcess = 1;
        this.entityResult = 0;
        if (c === Tokenizer_CharCodes.Number) {
            this.state = State.BeforeNumericEntity;
        }
        else if (c === Tokenizer_CharCodes.Amp) {
            // We have two `&` characters in a row. Stay in the current state.
        }
        else {
            this.trieIndex = 0;
            this.trieCurrent = this.entityTrie[0];
            this.state = State.InNamedEntity;
            this.stateInNamedEntity(c);
        }
    }
    stateInNamedEntity(c) {
        this.entityExcess += 1;
        this.trieIndex = determineBranch(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
        if (this.trieIndex < 0) {
            this.emitNamedEntity();
            this.index--;
            return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        const masked = this.trieCurrent & BinTrieFlags.VALUE_LENGTH;
        // If the branch is a value, store it and continue
        if (masked) {
            // The mask is the number of bytes of the value, including the current byte.
            const valueLength = (masked >> 14) - 1;
            // If we have a legacy entity while parsing strictly, just skip the number of bytes
            if (!this.allowLegacyEntity() && c !== Tokenizer_CharCodes.Semi) {
                this.trieIndex += valueLength;
            }
            else {
                // Add 1 as we have already incremented the excess
                const entityStart = this.index - this.entityExcess + 1;
                if (entityStart > this.sectionStart) {
                    this.emitPartial(this.sectionStart, entityStart);
                }
                // If this is a surrogate pair, consume the next two bytes
                this.entityResult = this.trieIndex;
                this.trieIndex += valueLength;
                this.entityExcess = 0;
                this.sectionStart = this.index + 1;
                if (valueLength === 0) {
                    this.emitNamedEntity();
                }
            }
        }
    }
    emitNamedEntity() {
        this.state = this.baseState;
        if (this.entityResult === 0) {
            return;
        }
        const valueLength = (this.entityTrie[this.entityResult] & BinTrieFlags.VALUE_LENGTH) >>
            14;
        switch (valueLength) {
            case 1: {
                this.emitCodePoint(this.entityTrie[this.entityResult] &
                    ~BinTrieFlags.VALUE_LENGTH);
                break;
            }
            case 2: {
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                break;
            }
            case 3: {
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
            }
        }
    }
    stateBeforeNumericEntity(c) {
        if ((c | 0x20) === Tokenizer_CharCodes.LowerX) {
            this.entityExcess++;
            this.state = State.InHexEntity;
        }
        else {
            this.state = State.InNumericEntity;
            this.stateInNumericEntity(c);
        }
    }
    emitNumericEntity(strict) {
        const entityStart = this.index - this.entityExcess - 1;
        const numberStart = entityStart + 2 + Number(this.state === State.InHexEntity);
        if (numberStart !== this.index) {
            // Emit leading data if any
            if (entityStart > this.sectionStart) {
                this.emitPartial(this.sectionStart, entityStart);
            }
            this.sectionStart = this.index + Number(strict);
            this.emitCodePoint(replaceCodePoint(this.entityResult));
        }
        this.state = this.baseState;
    }
    stateInNumericEntity(c) {
        if (c === Tokenizer_CharCodes.Semi) {
            this.emitNumericEntity(true);
        }
        else if (Tokenizer_isNumber(c)) {
            this.entityResult = this.entityResult * 10 + (c - Tokenizer_CharCodes.Zero);
            this.entityExcess++;
        }
        else {
            if (this.allowLegacyEntity()) {
                this.emitNumericEntity(false);
            }
            else {
                this.state = this.baseState;
            }
            this.index--;
        }
    }
    stateInHexEntity(c) {
        if (c === Tokenizer_CharCodes.Semi) {
            this.emitNumericEntity(true);
        }
        else if (Tokenizer_isNumber(c)) {
            this.entityResult = this.entityResult * 16 + (c - Tokenizer_CharCodes.Zero);
            this.entityExcess++;
        }
        else if (isHexDigit(c)) {
            this.entityResult =
                this.entityResult * 16 + ((c | 0x20) - Tokenizer_CharCodes.LowerA + 10);
            this.entityExcess++;
        }
        else {
            if (this.allowLegacyEntity()) {
                this.emitNumericEntity(false);
            }
            else {
                this.state = this.baseState;
            }
            this.index--;
        }
    }
    allowLegacyEntity() {
        return (!this.xmlMode &&
            (this.baseState === State.Text ||
                this.baseState === State.InSpecialTag));
    }
    /**
     * Remove data that has already been consumed from the buffer.
     */
    cleanup() {
        // If we are inside of text or attributes, emit what we already have.
        if (this.running && this.sectionStart !== this.index) {
            if (this.state === State.Text ||
                (this.state === State.InSpecialTag && this.sequenceIndex === 0)) {
                this.cbs.ontext(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
            else if (this.state === State.InAttributeValueDq ||
                this.state === State.InAttributeValueSq ||
                this.state === State.InAttributeValueNq) {
                this.cbs.onattribdata(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
        }
    }
    shouldContinue() {
        return this.index < this.buffer.length + this.offset && this.running;
    }
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */
    parse() {
        while (this.shouldContinue()) {
            const c = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
                case State.Text: {
                    this.stateText(c);
                    break;
                }
                case State.SpecialStartSequence: {
                    this.stateSpecialStartSequence(c);
                    break;
                }
                case State.InSpecialTag: {
                    this.stateInSpecialTag(c);
                    break;
                }
                case State.CDATASequence: {
                    this.stateCDATASequence(c);
                    break;
                }
                case State.InAttributeValueDq: {
                    this.stateInAttributeValueDoubleQuotes(c);
                    break;
                }
                case State.InAttributeName: {
                    this.stateInAttributeName(c);
                    break;
                }
                case State.InCommentLike: {
                    this.stateInCommentLike(c);
                    break;
                }
                case State.InSpecialComment: {
                    this.stateInSpecialComment(c);
                    break;
                }
                case State.BeforeAttributeName: {
                    this.stateBeforeAttributeName(c);
                    break;
                }
                case State.InTagName: {
                    this.stateInTagName(c);
                    break;
                }
                case State.InClosingTagName: {
                    this.stateInClosingTagName(c);
                    break;
                }
                case State.BeforeTagName: {
                    this.stateBeforeTagName(c);
                    break;
                }
                case State.AfterAttributeName: {
                    this.stateAfterAttributeName(c);
                    break;
                }
                case State.InAttributeValueSq: {
                    this.stateInAttributeValueSingleQuotes(c);
                    break;
                }
                case State.BeforeAttributeValue: {
                    this.stateBeforeAttributeValue(c);
                    break;
                }
                case State.BeforeClosingTagName: {
                    this.stateBeforeClosingTagName(c);
                    break;
                }
                case State.AfterClosingTagName: {
                    this.stateAfterClosingTagName(c);
                    break;
                }
                case State.BeforeSpecialS: {
                    this.stateBeforeSpecialS(c);
                    break;
                }
                case State.InAttributeValueNq: {
                    this.stateInAttributeValueNoQuotes(c);
                    break;
                }
                case State.InSelfClosingTag: {
                    this.stateInSelfClosingTag(c);
                    break;
                }
                case State.InDeclaration: {
                    this.stateInDeclaration(c);
                    break;
                }
                case State.BeforeDeclaration: {
                    this.stateBeforeDeclaration(c);
                    break;
                }
                case State.BeforeComment: {
                    this.stateBeforeComment(c);
                    break;
                }
                case State.InProcessingInstruction: {
                    this.stateInProcessingInstruction(c);
                    break;
                }
                case State.InNamedEntity: {
                    this.stateInNamedEntity(c);
                    break;
                }
                case State.BeforeEntity: {
                    this.stateBeforeEntity(c);
                    break;
                }
                case State.InHexEntity: {
                    this.stateInHexEntity(c);
                    break;
                }
                case State.InNumericEntity: {
                    this.stateInNumericEntity(c);
                    break;
                }
                default: {
                    // `this._state === State.BeforeNumericEntity`
                    this.stateBeforeNumericEntity(c);
                }
            }
            this.index++;
        }
        this.cleanup();
    }
    finish() {
        if (this.state === State.InNamedEntity) {
            this.emitNamedEntity();
        }
        // If there is remaining data, emit it in a reasonable way
        if (this.sectionStart < this.index) {
            this.handleTrailingData();
        }
        this.cbs.onend();
    }
    /** Handle any trailing data. */
    handleTrailingData() {
        const endIndex = this.buffer.length + this.offset;
        if (this.state === State.InCommentLike) {
            if (this.currentSequence === Sequences.CdataEnd) {
                this.cbs.oncdata(this.sectionStart, endIndex, 0);
            }
            else {
                this.cbs.oncomment(this.sectionStart, endIndex, 0);
            }
        }
        else if (this.state === State.InNumericEntity &&
            this.allowLegacyEntity()) {
            this.emitNumericEntity(false);
            // All trailing data will have been consumed
        }
        else if (this.state === State.InHexEntity &&
            this.allowLegacyEntity()) {
            this.emitNumericEntity(false);
            // All trailing data will have been consumed
        }
        else if (this.state === State.InTagName ||
            this.state === State.BeforeAttributeName ||
            this.state === State.BeforeAttributeValue ||
            this.state === State.AfterAttributeName ||
            this.state === State.InAttributeName ||
            this.state === State.InAttributeValueSq ||
            this.state === State.InAttributeValueDq ||
            this.state === State.InAttributeValueNq ||
            this.state === State.InClosingTagName) {
            /*
             * If we are currently in an opening or closing tag, us not calling the
             * respective callback signals that the tag should be ignored.
             */
        }
        else {
            this.cbs.ontext(this.sectionStart, endIndex);
        }
    }
    emitPartial(start, endIndex) {
        if (this.baseState !== State.Text &&
            this.baseState !== State.InSpecialTag) {
            this.cbs.onattribdata(start, endIndex);
        }
        else {
            this.cbs.ontext(start, endIndex);
        }
    }
    emitCodePoint(cp) {
        if (this.baseState !== State.Text &&
            this.baseState !== State.InSpecialTag) {
            this.cbs.onattribentity(cp);
        }
        else {
            this.cbs.ontextentity(cp);
        }
    }
}
//# sourceMappingURL=Tokenizer.js.map
;// CONCATENATED MODULE: ./node_modules/htmlparser2/lib/esm/Parser.js


const formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea",
]);
const pTag = new Set(["p"]);
const tableSectionTags = new Set(["thead", "tbody"]);
const ddtTags = new Set(["dd", "dt"]);
const rtpTags = new Set(["rt", "rp"]);
const openImpliesClose = new Map([
    ["tr", new Set(["tr", "th", "td"])],
    ["th", new Set(["th"])],
    ["td", new Set(["thead", "th", "td"])],
    ["body", new Set(["head", "link", "script"])],
    ["li", new Set(["li"])],
    ["p", pTag],
    ["h1", pTag],
    ["h2", pTag],
    ["h3", pTag],
    ["h4", pTag],
    ["h5", pTag],
    ["h6", pTag],
    ["select", formTags],
    ["input", formTags],
    ["output", formTags],
    ["button", formTags],
    ["datalist", formTags],
    ["textarea", formTags],
    ["option", new Set(["option"])],
    ["optgroup", new Set(["optgroup", "option"])],
    ["dd", ddtTags],
    ["dt", ddtTags],
    ["address", pTag],
    ["article", pTag],
    ["aside", pTag],
    ["blockquote", pTag],
    ["details", pTag],
    ["div", pTag],
    ["dl", pTag],
    ["fieldset", pTag],
    ["figcaption", pTag],
    ["figure", pTag],
    ["footer", pTag],
    ["form", pTag],
    ["header", pTag],
    ["hr", pTag],
    ["main", pTag],
    ["nav", pTag],
    ["ol", pTag],
    ["pre", pTag],
    ["section", pTag],
    ["table", pTag],
    ["ul", pTag],
    ["rt", rtpTags],
    ["rp", rtpTags],
    ["tbody", tableSectionTags],
    ["tfoot", tableSectionTags],
]);
const voidElements = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
const foreignContextElements = new Set(["math", "svg"]);
const htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title",
]);
const reNameEnd = /\s|\//;
class Parser_Parser {
    constructor(cbs, options = {}) {
        var _a, _b, _c, _d, _e;
        this.options = options;
        /** The start index of the last event. */
        this.startIndex = 0;
        /** The end index of the last event. */
        this.endIndex = 0;
        /**
         * Store the start index of the current open tag,
         * so we can update the start index for attributes.
         */
        this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.buffers = [];
        this.bufferOffset = 0;
        /** The index of the last written buffer. Used when resuming after a `pause()`. */
        this.writeIndex = 0;
        /** Indicates whether the parser has finished running / `.end` has been called. */
        this.ended = false;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
        this.lowerCaseAttributeNames =
            (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer)(this.options, this);
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
    }
    // Tokenizer event handlers
    /** @internal */
    ontext(start, endIndex) {
        var _a, _b;
        const data = this.getSlice(start, endIndex);
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        this.startIndex = endIndex;
    }
    /** @internal */
    ontextentity(cp) {
        var _a, _b;
        /*
         * Entities can be emitted on the character, or directly after.
         * We use the section start here to get accurate indices.
         */
        const index = this.tokenizer.getSectionStart();
        this.endIndex = index - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, fromCodePoint(cp));
        this.startIndex = index;
    }
    isVoidElement(name) {
        return !this.options.xmlMode && voidElements.has(name);
    }
    /** @internal */
    onopentagname(start, endIndex) {
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this.emitOpenTag(name);
    }
    emitOpenTag(name) {
        var _a, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name;
        const impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
        if (impliesClose) {
            while (this.stack.length > 0 &&
                impliesClose.has(this.stack[this.stack.length - 1])) {
                const element = this.stack.pop();
                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, true);
            }
        }
        if (!this.isVoidElement(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) {
                this.foreignContext.push(true);
            }
            else if (htmlIntegrationElements.has(name)) {
                this.foreignContext.push(false);
            }
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
        if (this.cbs.onopentag)
            this.attribs = {};
    }
    endOpenTag(isImplied) {
        var _a, _b;
        this.startIndex = this.openTagStart;
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
    }
    /** @internal */
    onopentagend(endIndex) {
        this.endIndex = endIndex;
        this.endOpenTag(false);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onclosetag(start, endIndex) {
        var _a, _b, _c, _d, _e, _f;
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (foreignContextElements.has(name) ||
            htmlIntegrationElements.has(name)) {
            this.foreignContext.pop();
        }
        if (!this.isVoidElement(name)) {
            const pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
                if (this.cbs.onclosetag) {
                    let count = this.stack.length - pos;
                    while (count--) {
                        // We know the stack has sufficient elements.
                        this.cbs.onclosetag(this.stack.pop(), count !== 0);
                    }
                }
                else
                    this.stack.length = pos;
            }
            else if (!this.options.xmlMode && name === "p") {
                // Implicit open before close
                this.emitOpenTag("p");
                this.closeCurrentTag(true);
            }
        }
        else if (!this.options.xmlMode && name === "br") {
            // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
            (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, "br");
            (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, "br", {}, true);
            (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", false);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onselfclosingtag(endIndex) {
        this.endIndex = endIndex;
        if (this.options.xmlMode ||
            this.options.recognizeSelfClosing ||
            this.foreignContext[this.foreignContext.length - 1]) {
            this.closeCurrentTag(false);
            // Set `startIndex` for next node
            this.startIndex = endIndex + 1;
        }
        else {
            // Ignore the fact that the tag is self-closing.
            this.onopentagend(endIndex);
        }
    }
    closeCurrentTag(isOpenImplied) {
        var _a, _b;
        const name = this.tagname;
        this.endOpenTag(isOpenImplied);
        // Self-closing tags will be on the top of the stack
        if (this.stack[this.stack.length - 1] === name) {
            // If the opening tag isn't implied, the closing tag has to be implied.
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
            this.stack.pop();
        }
    }
    /** @internal */
    onattribname(start, endIndex) {
        this.startIndex = start;
        const name = this.getSlice(start, endIndex);
        this.attribname = this.lowerCaseAttributeNames
            ? name.toLowerCase()
            : name;
    }
    /** @internal */
    onattribdata(start, endIndex) {
        this.attribvalue += this.getSlice(start, endIndex);
    }
    /** @internal */
    onattribentity(cp) {
        this.attribvalue += fromCodePoint(cp);
    }
    /** @internal */
    onattribend(quote, endIndex) {
        var _a, _b;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === QuoteType.Double
            ? '"'
            : quote === QuoteType.Single
                ? "'"
                : quote === QuoteType.NoValue
                    ? undefined
                    : null);
        if (this.attribs &&
            !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribvalue = "";
    }
    getInstructionName(value) {
        const index = value.search(reNameEnd);
        let name = index < 0 ? value : value.substr(0, index);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    }
    /** @internal */
    ondeclaration(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onprocessinginstruction(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    oncomment(start, endIndex, offset) {
        var _a, _b, _c, _d;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    oncdata(start, endIndex, offset) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex - offset);
        if (this.options.xmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        }
        else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, `[CDATA[${value}]]`);
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onend() {
        var _a, _b;
        if (this.cbs.onclosetag) {
            // Set the end index for all remaining tags
            this.endIndex = this.startIndex;
            for (let index = this.stack.length; index > 0; this.cbs.onclosetag(this.stack[--index], true))
                ;
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */
    reset() {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack.length = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        this.buffers.length = 0;
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
    }
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */
    parseComplete(data) {
        this.reset();
        this.end(data);
    }
    getSlice(start, end) {
        while (start - this.bufferOffset >= this.buffers[0].length) {
            this.shiftBuffer();
        }
        let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
        while (end - this.bufferOffset > this.buffers[0].length) {
            this.shiftBuffer();
            slice += this.buffers[0].slice(0, end - this.bufferOffset);
        }
        return slice;
    }
    shiftBuffer() {
        this.bufferOffset += this.buffers[0].length;
        this.writeIndex--;
        this.buffers.shift();
    }
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */
    write(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
            return;
        }
        this.buffers.push(chunk);
        if (this.tokenizer.running) {
            this.tokenizer.write(chunk);
            this.writeIndex++;
        }
    }
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */
    end(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".end() after done!"));
            return;
        }
        if (chunk)
            this.write(chunk);
        this.ended = true;
        this.tokenizer.end();
    }
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */
    pause() {
        this.tokenizer.pause();
    }
    /**
     * Resumes parsing after `pause` was called.
     */
    resume() {
        this.tokenizer.resume();
        while (this.tokenizer.running &&
            this.writeIndex < this.buffers.length) {
            this.tokenizer.write(this.buffers[this.writeIndex++]);
        }
        if (this.ended)
            this.tokenizer.end();
    }
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */
    parseChunk(chunk) {
        this.write(chunk);
    }
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */
    done(chunk) {
        this.end(chunk);
    }
}
//# sourceMappingURL=Parser.js.map
;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/generated/encode-html.js
// Generated using scripts/write-encode-map.ts
function restoreDiff(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i][0] += arr[i - 1][0] + 1;
    }
    return arr;
}
// prettier-ignore
/* harmony default export */ const encode_html = (new Map(/* #__PURE__ */ restoreDiff([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* #__PURE__ */ restoreDiff([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* #__PURE__ */ restoreDiff([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* #__PURE__ */ restoreDiff([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]])));
//# sourceMappingURL=encode-html.js.map
;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/escape.js
const escape_xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
const xmlCodeMap = new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"],
]);
// For compatibility with node < 4, we wrap `codePointAt`
const escape_getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null
    ? (str, index) => str.codePointAt(index)
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        (c, index) => (c.charCodeAt(index) & 0xfc00) === 0xd800
            ? (c.charCodeAt(index) - 0xd800) * 0x400 +
                c.charCodeAt(index + 1) -
                0xdc00 +
                0x10000
            : c.charCodeAt(index);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
function escape_encodeXML(str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while ((match = escape_xmlReplacer.exec(str)) !== null) {
        const i = match.index;
        const char = str.charCodeAt(i);
        const next = xmlCodeMap.get(char);
        if (next !== undefined) {
            ret += str.substring(lastIdx, i) + next;
            lastIdx = i + 1;
        }
        else {
            ret += `${str.substring(lastIdx, i)}&#x${escape_getCodePoint(str, i).toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIdx = escape_xmlReplacer.lastIndex += Number((char & 0xfc00) === 0xd800);
        }
    }
    return ret + str.substr(lastIdx);
}
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
const escape_escape = (/* unused pure expression or super */ null && (escape_encodeXML));
/**
 * Creates a function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 *
 * @param regex Regular expression to match characters to escape.
 * @param map Map of characters to escape to their entities.
 *
 * @returns Function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 */
function getEscaper(regex, map) {
    return function escape(data) {
        let match;
        let lastIdx = 0;
        let result = "";
        while ((match = regex.exec(data))) {
            if (lastIdx !== match.index) {
                result += data.substring(lastIdx, match.index);
            }
            // We know that this character will be in the map.
            result += map.get(match[0].charCodeAt(0));
            // Every match will be of length 1
            lastIdx = match.index + 1;
        }
        return result + data.substring(lastIdx);
    };
}
/**
 * Encodes all characters not valid in XML documents using XML entities.
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
const escape_escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
/**
 * Encodes all characters that have to be escaped in HTML attributes,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
const escape_escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"],
]));
/**
 * Encodes all characters that have to be escaped in HTML text,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
const escape_escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"],
]));
//# sourceMappingURL=escape.js.map
;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/encode.js


const htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
/**
 * Encodes all characters in the input using HTML entities. This includes
 * characters that are valid ASCII characters in HTML documents, such as `#`.
 *
 * To get a more compact output, consider using the `encodeNonAsciiHTML`
 * function, which will only encode characters that are not valid in HTML
 * documents, as well as non-ASCII characters.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */
function encode_encodeHTML(data) {
    return encodeHTMLTrieRe(htmlReplacer, data);
}
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities. This function will not encode characters that
 * are valid in HTML documents, such as `#`.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */
function encode_encodeNonAsciiHTML(data) {
    return encodeHTMLTrieRe(xmlReplacer, data);
}
function encodeHTMLTrieRe(regExp, str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while ((match = regExp.exec(str)) !== null) {
        const i = match.index;
        ret += str.substring(lastIdx, i);
        const char = str.charCodeAt(i);
        let next = htmlTrie.get(char);
        if (typeof next === "object") {
            // We are in a branch. Try to match the next char.
            if (i + 1 < str.length) {
                const nextChar = str.charCodeAt(i + 1);
                const value = typeof next.n === "number"
                    ? next.n === nextChar
                        ? next.o
                        : undefined
                    : next.n.get(nextChar);
                if (value !== undefined) {
                    ret += value;
                    lastIdx = regExp.lastIndex += 1;
                    continue;
                }
            }
            next = next.v;
        }
        // We might have a tree node without a value; skip and use a numeric entity.
        if (next !== undefined) {
            ret += next;
            lastIdx = i + 1;
        }
        else {
            const cp = getCodePoint(str, i);
            ret += `&#x${cp.toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIdx = regExp.lastIndex += Number(cp !== char);
        }
    }
    return ret + str.substr(lastIdx);
}
//# sourceMappingURL=encode.js.map
;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/index.js



/** The level of entities to support. */
var EntityLevel;
(function (EntityLevel) {
    /** Support only XML entities. */
    EntityLevel[EntityLevel["XML"] = 0] = "XML";
    /** Support HTML entities, which are a superset of XML entities. */
    EntityLevel[EntityLevel["HTML"] = 1] = "HTML";
})(EntityLevel || (EntityLevel = {}));
var EncodingMode;
(function (EncodingMode) {
    /**
     * The output is UTF-8 encoded. Only characters that need escaping within
     * XML will be escaped.
     */
    EncodingMode[EncodingMode["UTF8"] = 0] = "UTF8";
    /**
     * The output consists only of ASCII characters. Characters that need
     * escaping within HTML, and characters that aren't ASCII characters will
     * be escaped.
     */
    EncodingMode[EncodingMode["ASCII"] = 1] = "ASCII";
    /**
     * Encode all characters that have an equivalent entity, as well as all
     * characters that are not ASCII characters.
     */
    EncodingMode[EncodingMode["Extensive"] = 2] = "Extensive";
    /**
     * Encode all characters that have to be escaped in HTML attributes,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */
    EncodingMode[EncodingMode["Attribute"] = 3] = "Attribute";
    /**
     * Encode all characters that have to be escaped in HTML text,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */
    EncodingMode[EncodingMode["Text"] = 4] = "Text";
})(EncodingMode || (EncodingMode = {}));
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 */
function decode(data, options = EntityLevel.XML) {
    const level = typeof options === "number" ? options : options.level;
    if (level === EntityLevel.HTML) {
        const mode = typeof options === "object" ? options.mode : undefined;
        return decodeHTML(data, mode);
    }
    return decodeXML(data);
}
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 * @deprecated Use `decode` with the `mode` set to `Strict`.
 */
function decodeStrict(data, options = EntityLevel.XML) {
    var _a;
    const opts = typeof options === "number" ? { level: options } : options;
    (_a = opts.mode) !== null && _a !== void 0 ? _a : (opts.mode = DecodingMode.Strict);
    return decode(data, opts);
}
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param options Encoding options.
 */
function encode(data, options = EntityLevel.XML) {
    const opts = typeof options === "number" ? { level: options } : options;
    // Mode `UTF8` just escapes XML entities
    if (opts.mode === EncodingMode.UTF8)
        return escapeUTF8(data);
    if (opts.mode === EncodingMode.Attribute)
        return escapeAttribute(data);
    if (opts.mode === EncodingMode.Text)
        return escapeText(data);
    if (opts.level === EntityLevel.HTML) {
        if (opts.mode === EncodingMode.ASCII) {
            return encodeNonAsciiHTML(data);
        }
        return encodeHTML(data);
    }
    // ASCII and Extensive are equivalent
    return encodeXML(data);
}



//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/dom-serializer/lib/esm/foreignNames.js
const elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath",
].map((val) => [val.toLowerCase(), val]));
const attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan",
].map((val) => [val.toLowerCase(), val]));

;// CONCATENATED MODULE: ./node_modules/dom-serializer/lib/esm/index.js
/*
 * Module dependencies
 */


/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */

const unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript",
]);
function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
}
/**
 * Format attributes
 */
function formatAttributes(attributes, opts) {
    var _a;
    if (!attributes)
        return;
    const encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false
        ? replaceQuotes
        : opts.xmlMode || opts.encodeEntities !== "utf8"
            ? escape_encodeXML
            : escape_escapeAttribute;
    return Object.keys(attributes)
        .map((key) => {
        var _a, _b;
        const value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */
            key = (_b = attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return `${key}="${encode(value)}"`;
    })
        .join(" ");
}
/**
 * Self-enclosing tags
 */
const singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */
function render(node, options = {}) {
    const nodes = "length" in node ? node : [node];
    let output = "";
    for (let i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
    }
    return output;
}
/* harmony default export */ const lib_esm = ((/* unused pure expression or super */ null && (render)));
function renderNode(node, options) {
    switch (node.type) {
        case Root:
            return render(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case Doctype:
        case Directive:
            return renderDirective(node);
        case Comment:
            return renderComment(node);
        case CDATA:
            return renderCdata(node);
        case Script:
        case Style:
        case Tag:
            return renderTag(node, options);
        case Text:
            return renderText(node, options);
    }
}
const foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title",
]);
const foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */
        elem.name = (_a = elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */
        if (elem.parent &&
            foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = { ...opts, xmlMode: false };
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = { ...opts, xmlMode: "foreign" };
    }
    let tag = `<${elem.name}`;
    const attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += ` ${attribs}`;
    }
    if (elem.children.length === 0 &&
        (opts.xmlMode
            ? // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
                opts.selfClosingTags !== false
            : // User explicitly asked for self-closing tags, even in HTML mode
                opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode)
            tag += " ";
        tag += "/>";
    }
    else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += `</${elem.name}>`;
        }
    }
    return tag;
}
function renderDirective(elem) {
    return `<${elem.data}>`;
}
function renderText(elem, opts) {
    var _a;
    let data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false &&
        !(!opts.xmlMode &&
            elem.parent &&
            unencodedElements.has(elem.parent.name))) {
        data =
            opts.xmlMode || opts.encodeEntities !== "utf8"
                ? escape_encodeXML(data)
                : escape_escapeText(data);
    }
    return data;
}
function renderCdata(elem) {
    return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
    return `<!--${elem.data}-->`;
}

;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/stringify.js



/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @returns `node`'s outer HTML.
 */
function getOuterHTML(node, options) {
    return renderHTML(node, options);
}
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @returns `node`'s inner HTML.
 */
function getInnerHTML(node, options) {
    return hasChildren(node)
        ? node.children.map((node) => getOuterHTML(node, options)).join("")
        : "";
}
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags. Ignores comments.
 *
 * @category Stringify
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */
function getText(node) {
    if (Array.isArray(node))
        return node.map(getText).join("");
    if (isTag(node))
        return node.name === "br" ? "\n" : getText(node.children);
    if (isCDATA(node))
        return getText(node.children);
    if (isText(node))
        return node.data;
    return "";
}
/**
 * Get a node's text content. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */
function stringify_textContent(node) {
    if (Array.isArray(node))
        return node.map(stringify_textContent).join("");
    if (hasChildren(node) && !isComment(node)) {
        return stringify_textContent(node.children);
    }
    if (isText(node))
        return node.data;
    return "";
}
/**
 * Get a node's inner text, ignoring `<script>` and `<style>` tags. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */
function innerText(node) {
    if (Array.isArray(node))
        return node.map(innerText).join("");
    if (hasChildren(node) && (node.type === ElementType.Tag || isCDATA(node))) {
        return innerText(node.children);
    }
    if (isText(node))
        return node.data;
    return "";
}
//# sourceMappingURL=stringify.js.map
;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/traversal.js

/**
 * Get a node's children.
 *
 * @category Traversal
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */
function getChildren(elem) {
    return hasChildren(elem) ? elem.children : [];
}
/**
 * Get a node's parent.
 *
 * @category Traversal
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node, or `null` if `elem` is a root node.
 */
function getParent(elem) {
    return elem.parent || null;
}
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first. If we don't
 * have a parent (the element is a root node), we walk the element's `prev` &
 * `next` to get all remaining nodes.
 *
 * @category Traversal
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings, including `elem`.
 */
function getSiblings(elem) {
    const parent = getParent(elem);
    if (parent != null)
        return getChildren(parent);
    const siblings = [elem];
    let { prev, next } = elem;
    while (prev != null) {
        siblings.unshift(prev);
        ({ prev } = prev);
    }
    while (next != null) {
        siblings.push(next);
        ({ next } = next);
    }
    return siblings;
}
/**
 * Gets an attribute from an element.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */
function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
/**
 * Checks whether an element has an attribute.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */
function hasAttrib(elem, name) {
    return (elem.attribs != null &&
        Object.prototype.hasOwnProperty.call(elem.attribs, name) &&
        elem.attribs[name] != null);
}
/**
 * Get the tag name of an element.
 *
 * @category Traversal
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */
function getName(elem) {
    return elem.name;
}
/**
 * Returns the next element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag, or `null` if there is no next
 * sibling.
 */
function nextElementSibling(elem) {
    let { next } = elem;
    while (next !== null && !isTag(next))
        ({ next } = next);
    return next;
}
/**
 * Returns the previous element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag, or `null` if there is no
 * previous sibling.
 */
function prevElementSibling(elem) {
    let { prev } = elem;
    while (prev !== null && !isTag(prev))
        ({ prev } = prev);
    return prev;
}
//# sourceMappingURL=traversal.js.map
;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/querying.js

/**
 * Search a node and its children for nodes passing a test function. If `node` is not an array, it will be wrapped in one.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function querying_filter(test, node, recurse = true, limit = Infinity) {
    return find(test, Array.isArray(node) ? node : [node], recurse, limit);
}
/**
 * Search an array of nodes and their children for nodes passing a test function.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function find(test, nodes, recurse, limit) {
    const result = [];
    /** Stack of the arrays we are looking at. */
    const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
    /** Stack of the indices within the arrays. */
    const indexStack = [0];
    for (;;) {
        // First, check if the current array has any more elements to look at.
        if (indexStack[0] >= nodeStack[0].length) {
            // If we have no more arrays to look at, we are done.
            if (indexStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            // Loop back to the start to continue with the next array.
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
                return result;
        }
        if (recurse && hasChildren(elem) && elem.children.length > 0) {
            /*
             * Add the children to the stack. We are depth-first, so this is
             * the next array we look at.
             */
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
/**
 * Finds the first element inside of an array that matches a test function. This is an alias for `Array.prototype.find`.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 * @deprecated Use `Array.prototype.find` directly.
 */
function findOneChild(test, nodes) {
    return nodes.find(test);
}
/**
 * Finds one element in a tree that passes a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Node or array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first node that passes `test`.
 */
function querying_findOne(test, nodes, recurse = true) {
    const searchedNodes = Array.isArray(nodes) ? nodes : [nodes];
    for (let i = 0; i < searchedNodes.length; i++) {
        const node = searchedNodes[i];
        if (isTag(node) && test(node)) {
            return node;
        }
        if (recurse && hasChildren(node) && node.children.length > 0) {
            const found = querying_findOne(test, node.children, true);
            if (found)
                return found;
        }
    }
    return null;
}
/**
 * Checks if a tree of nodes contains at least one node passing a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing the test.
 */
function existsOne(test, nodes) {
    return (Array.isArray(nodes) ? nodes : [nodes]).some((node) => (isTag(node) && test(node)) ||
        (hasChildren(node) && existsOne(test, node.children)));
}
/**
 * Search an array of nodes and their children for elements passing a test function.
 *
 * Same as `find`, but limited to elements and with less options, leading to reduced complexity.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */
function findAll(test, nodes) {
    const result = [];
    const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
    const indexStack = [0];
    for (;;) {
        if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            // Loop back to the start to continue with the next array.
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (isTag(elem) && test(elem))
            result.push(elem);
        if (hasChildren(elem) && elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
//# sourceMappingURL=querying.js.map
;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/legacy.js


/**
 * A map of functions to check nodes against.
 */
const Checks = {
    tag_name(name) {
        if (typeof name === "function") {
            return (elem) => node_isTag(elem) && name(elem.name);
        }
        else if (name === "*") {
            return node_isTag;
        }
        return (elem) => node_isTag(elem) && elem.name === name;
    },
    tag_type(type) {
        if (typeof type === "function") {
            return (elem) => type(elem.type);
        }
        return (elem) => elem.type === type;
    },
    tag_contains(data) {
        if (typeof data === "function") {
            return (elem) => node_isText(elem) && data(elem.data);
        }
        return (elem) => node_isText(elem) && elem.data === data;
    },
};
/**
 * Returns a function to check whether a node has an attribute with a particular
 * value.
 *
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a
 *   particular value.
 */
function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return (elem) => isTag(elem) && value(elem.attribs[attrib]);
    }
    return (elem) => isTag(elem) && elem.attribs[attrib] === value;
}
/**
 * Returns a function that returns `true` if either of the input functions
 * returns `true` for a node.
 *
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either of the input
 *   functions returns `true` for the node.
 */
function combineFuncs(a, b) {
    return (elem) => a(elem) || b(elem);
}
/**
 * Returns a function that executes all checks in `options` and returns `true`
 * if any of them match a node.
 *
 * @param options An object describing nodes to look for.
 * @returns A function that executes all checks in `options` and returns `true`
 *   if any of them match a node.
 */
function compileTest(options) {
    const funcs = Object.keys(options).map((key) => {
        const value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key)
            ? Checks[key](value)
            : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * Checks whether a node matches the description in `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */
function testElement(options, node) {
    const test = compileTest(options);
    return test ? test(node) : true;
}
/**
 * Returns all nodes that match `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */
function getElements(options, nodes, recurse, limit = Infinity) {
    const test = compileTest(options);
    return test ? filter(test, nodes, recurse, limit) : [];
}
/**
 * Returns the node with the supplied ID.
 *
 * @category Legacy Query Functions
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */
function getElementById(id, nodes, recurse = true) {
    if (!Array.isArray(nodes))
        nodes = [nodes];
    return findOne(getAttribCheck("id", id), nodes, recurse);
}
/**
 * Returns all nodes with the supplied `tagName`.
 *
 * @category Legacy Query Functions
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */
function legacy_getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
    return filter(Checks["tag_name"](tagName), nodes, recurse, limit);
}
/**
 * Returns all nodes with the supplied `className`.
 *
 * @category Legacy Query Functions
 * @param className Class name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `className`.
 */
function getElementsByClassName(className, nodes, recurse = true, limit = Infinity) {
    return filter(getAttribCheck("class", className), nodes, recurse, limit);
}
/**
 * Returns all nodes with the supplied `type`.
 *
 * @category Legacy Query Functions
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */
function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
    return filter(Checks["tag_type"](type), nodes, recurse, limit);
}
//# sourceMappingURL=legacy.js.map
;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/helpers.js

/**
 * Given an array of nodes, remove any member that is contained by another
 * member.
 *
 * @category Helpers
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't contained by other nodes.
 */
function removeSubsets(nodes) {
    let idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */
    while (--idx >= 0) {
        const node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for (let ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
            if (nodes.includes(ancestor)) {
                nodes.splice(idx, 1);
                break;
            }
        }
    }
    return nodes;
}
/**
 * @category Helpers
 * @see {@link http://dom.spec.whatwg.org/#dom-node-comparedocumentposition}
 */
var DocumentPosition;
(function (DocumentPosition) {
    DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
    DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
    DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
    DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
    DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
/**
 * Compare the position of one node against another node in any other document,
 * returning a bitmask with the values from {@link DocumentPosition}.
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent.
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @category Helpers
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */
function compareDocumentPosition(nodeA, nodeB) {
    const aParents = [];
    const bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    let current = hasChildren(nodeA) ? nodeA : nodeA.parent;
    while (current) {
        aParents.unshift(current);
        current = current.parent;
    }
    current = hasChildren(nodeB) ? nodeB : nodeB.parent;
    while (current) {
        bParents.unshift(current);
        current = current.parent;
    }
    const maxIdx = Math.min(aParents.length, bParents.length);
    let idx = 0;
    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
    }
    if (idx === 0) {
        return DocumentPosition.DISCONNECTED;
    }
    const sharedParent = aParents[idx - 1];
    const siblings = sharedParent.children;
    const aSibling = aParents[idx];
    const bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        }
        return DocumentPosition.FOLLOWING;
    }
    if (sharedParent === nodeA) {
        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
    }
    return DocumentPosition.PRECEDING;
}
/**
 * Sort an array of nodes based on their relative position in the document,
 * removing any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @category Helpers
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */
function uniqueSort(nodes) {
    nodes = nodes.filter((node, i, arr) => !arr.includes(node, i + 1));
    nodes.sort((a, b) => {
        const relative = compareDocumentPosition(a, b);
        if (relative & DocumentPosition.PRECEDING) {
            return -1;
        }
        else if (relative & DocumentPosition.FOLLOWING) {
            return 1;
        }
        return 0;
    });
    return nodes;
}
//# sourceMappingURL=helpers.js.map
;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/feeds.js


/**
 * Get the feed object from the root of a DOM tree.
 *
 * @category Feeds
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */
function feeds_getFeed(doc) {
    const feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot
        ? null
        : feedRoot.name === "feed"
            ? getAtomFeed(feedRoot)
            : getRssFeed(feedRoot);
}
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getAtomFeed(feedRoot) {
    var _a;
    const childs = feedRoot.children;
    const feed = {
        type: "atom",
        items: getElementsByTagName("entry", childs).map((item) => {
            var _a;
            const { children } = item;
            const entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            const href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
            if (href) {
                entry.link = href;
            }
            const description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            const pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        }),
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    const href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    const updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getRssFeed(feedRoot) {
    var _a, _b;
    const childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    const feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: getElementsByTagName("item", feedRoot.children).map((item) => {
            const { children } = item;
            const entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            const pubDate = fetch("pubDate", children) || fetch("dc:date", children);
            if (pubDate)
                entry.pubDate = new Date(pubDate);
            return entry;
        }),
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    const updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
const MEDIA_KEYS_STRING = (/* unused pure expression or super */ null && (["url", "type", "lang"]));
const MEDIA_KEYS_INT = (/* unused pure expression or super */ null && ([
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width",
]));
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */
function getMediaElements(where) {
    return getElementsByTagName("media:content", where).map((elem) => {
        const { attribs } = elem;
        const media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"],
        };
        for (const attrib of MEDIA_KEYS_STRING) {
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (const attrib of MEDIA_KEYS_INT) {
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs["expression"]) {
            media.expression = attribs["expression"];
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */
function getOneElement(tagName, node) {
    return getElementsByTagName(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */
function fetch(tagName, where, recurse = false) {
    return textContent(getElementsByTagName(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */
function addConditionally(obj, prop, tagName, where, recurse = false) {
    const val = fetch(tagName, where, recurse);
    if (val)
        obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */
function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}
//# sourceMappingURL=feeds.js.map
;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/index.js







/** @deprecated Use these methods from `domhandler` directly. */

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/htmlparser2/lib/esm/index.js




// Helper methods
/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */
function parseDocument(data, options) {
    const handler = new esm_DomHandler(undefined, options);
    new Parser_Parser(handler, options).end(data);
    return handler.root;
}
/**
 * Parses data, returns an array of the root nodes.
 *
 * Note that the root nodes still have a `Document` node as their parent.
 * Use `parseDocument` to get the `Document` node instead.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 * @deprecated Use `parseDocument` instead.
 */
function parseDOM(data, options) {
    return parseDocument(data, options).children;
}
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param callback A callback that will be called once parsing has been completed.
 * @param options Optional options for the parser and DOM builder.
 * @param elementCallback An optional callback that will be called every time a tag has been completed inside of the DOM.
 */
function createDomStream(callback, options, elementCallback) {
    const handler = new DomHandler(callback, options, elementCallback);
    return new Parser(handler, options);
}

/*
 * All of the following exports exist for backwards-compatibility.
 * They should probably be removed eventually.
 */



const parseFeedDefaultOptions = { xmlMode: true };
/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this, you should set `xmlMode` to `true`.
 */
function parseFeed(feed, options = parseFeedDefaultOptions) {
    return getFeed(parseDOM(feed, options));
}

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__(2569);
;// CONCATENATED MODULE: ./node_modules/html-to-text/lib/html-to-text.mjs






/**
 * Make a recursive function that will only run to a given depth
 * and switches to an alternative function at that depth. \
 * No limitation if `n` is `undefined` (Just wraps `f` in that case).
 *
 * @param   { number | undefined } n   Allowed depth of recursion. `undefined` for no limitation.
 * @param   { Function }           f   Function that accepts recursive callback as the first argument.
 * @param   { Function }           [g] Function to run instead, when maximum depth was reached. Do nothing by default.
 * @returns { Function }
 */
function limitedDepthRecursive (n, f, g = () => undefined) {
  if (n === undefined) {
    const f1 = function (...args) { return f(f1, ...args); };
    return f1;
  }
  if (n >= 0) {
    return function (...args) { return f(limitedDepthRecursive(n - 1, f, g), ...args); };
  }
  return g;
}

/**
 * Return the same string or a substring with
 * the given character occurrences removed from each side.
 *
 * @param   { string } str  A string to trim.
 * @param   { string } char A character to be trimmed.
 * @returns { string }
 */
function trimCharacter (str, char) {
  let start = 0;
  let end = str.length;
  while (start < end && str[start] === char) { ++start; }
  while (end > start && str[end - 1] === char) { --end; }
  return (start > 0 || end < str.length)
    ? str.substring(start, end)
    : str;
}

/**
 * Return the same string or a substring with
 * the given character occurrences removed from the end only.
 *
 * @param   { string } str  A string to trim.
 * @param   { string } char A character to be trimmed.
 * @returns { string }
 */
function trimCharacterEnd (str, char) {
  let end = str.length;
  while (end > 0 && str[end - 1] === char) { --end; }
  return (end < str.length)
    ? str.substring(0, end)
    : str;
}

/**
 * Return a new string will all characters replaced with unicode escape sequences.
 * This extreme kind of escaping can used to be safely compose regular expressions.
 *
 * @param { string } str A string to escape.
 * @returns { string } A string of unicode escape sequences.
 */
function unicodeEscape (str) {
  return str.replace(/[\s\S]/g, c => '\\u' + c.charCodeAt().toString(16).padStart(4, '0'));
}

/**
 * Deduplicate an array by a given key callback.
 * Item properties are merged recursively and with the preference for last defined values.
 * Of items with the same key, merged item takes the place of the last item,
 * others are omitted.
 *
 * @param { any[] } items An array to deduplicate.
 * @param { (x: any) => string } getKey Callback to get a value that distinguishes unique items.
 * @returns { any[] }
 */
function mergeDuplicatesPreferLast (items, getKey) {
  const map = new Map();
  for (let i = items.length; i-- > 0;) {
    const item = items[i];
    const key = getKey(item);
    map.set(
      key,
      (map.has(key))
        ? cjs(item, map.get(key), { arrayMerge: overwriteMerge$1 })
        : item
    );
  }
  return [...map.values()].reverse();
}

const overwriteMerge$1 = (acc, src, options) => [...src];

/**
 * Get a nested property from an object.
 *
 * @param   { object }   obj  The object to query for the value.
 * @param   { string[] } path The path to the property.
 * @returns { any }
 */
function get (obj, path) {
  for (const key of path) {
    if (!obj) { return undefined; }
    obj = obj[key];
  }
  return obj;
}

/**
 * Convert a number into alphabetic sequence representation (Sequence without zeroes).
 *
 * For example: `a, ..., z, aa, ..., zz, aaa, ...`.
 *
 * @param   { number } num              Number to convert. Must be >= 1.
 * @param   { string } [baseChar = 'a'] Character for 1 in the sequence.
 * @param   { number } [base = 26]      Number of characters in the sequence.
 * @returns { string }
 */
function numberToLetterSequence (num, baseChar = 'a', base = 26) {
  const digits = [];
  do {
    num -= 1;
    digits.push(num % base);
    num = (num / base) >> 0; // quick `floor`
  } while (num > 0);
  const baseCode = baseChar.charCodeAt(0);
  return digits
    .reverse()
    .map(n => String.fromCharCode(baseCode + n))
    .join('');
}

const html_to_text_I = ['I', 'X', 'C', 'M'];
const html_to_text_V = ['V', 'L', 'D'];

/**
 * Convert a number to it's Roman representation. No large numbers extension.
 *
 * @param   { number } num Number to convert. `0 < num <= 3999`.
 * @returns { string }
 */
function numberToRoman (num) {
  return [...(num) + '']
    .map(n => +n)
    .reverse()
    .map((v, i) => ((v % 5 < 4)
      ? (v < 5 ? '' : html_to_text_V[i]) + html_to_text_I[i].repeat(v % 5)
      : html_to_text_I[i] + (v < 5 ? html_to_text_V[i] : html_to_text_I[i + 1])))
    .reverse()
    .join('');
}

/**
 * Helps to build text from words.
 */
class InlineTextBuilder {
  /**
   * Creates an instance of InlineTextBuilder.
   *
   * If `maxLineLength` is not provided then it is either `options.wordwrap` or unlimited.
   *
   * @param { Options } options           HtmlToText options.
   * @param { number }  [ maxLineLength ] This builder will try to wrap text to fit this line length.
   */
  constructor (options, maxLineLength = undefined) {
    /** @type { string[][] } */
    this.lines = [];
    /** @type { string[] }   */
    this.nextLineWords = [];
    this.maxLineLength = maxLineLength || options.wordwrap || Number.MAX_VALUE;
    this.nextLineAvailableChars = this.maxLineLength;
    this.wrapCharacters = get(options, ['longWordSplit', 'wrapCharacters']) || [];
    this.forceWrapOnLimit = get(options, ['longWordSplit', 'forceWrapOnLimit']) || false;

    this.stashedSpace = false;
    this.wordBreakOpportunity = false;
  }

  /**
   * Add a new word.
   *
   * @param { string } word A word to add.
   * @param { boolean } [noWrap] Don't wrap text even if the line is too long.
   */
  pushWord (word, noWrap = false) {
    if (this.nextLineAvailableChars <= 0 && !noWrap) {
      this.startNewLine();
    }
    const isLineStart = this.nextLineWords.length === 0;
    const cost = word.length + (isLineStart ? 0 : 1);
    if ((cost <= this.nextLineAvailableChars) || noWrap) { // Fits into available budget

      this.nextLineWords.push(word);
      this.nextLineAvailableChars -= cost;

    } else { // Does not fit - try to split the word

      // The word is moved to a new line - prefer to wrap between words.
      const [first, ...rest] = this.splitLongWord(word);
      if (!isLineStart) { this.startNewLine(); }
      this.nextLineWords.push(first);
      this.nextLineAvailableChars -= first.length;
      for (const part of rest) {
        this.startNewLine();
        this.nextLineWords.push(part);
        this.nextLineAvailableChars -= part.length;
      }

    }
  }

  /**
   * Pop a word from the currently built line.
   * This doesn't affect completed lines.
   *
   * @returns { string }
   */
  popWord () {
    const lastWord = this.nextLineWords.pop();
    if (lastWord !== undefined) {
      const isLineStart = this.nextLineWords.length === 0;
      const cost = lastWord.length + (isLineStart ? 0 : 1);
      this.nextLineAvailableChars += cost;
    }
    return lastWord;
  }

  /**
   * Concat a word to the last word already in the builder.
   * Adds a new word in case there are no words yet in the last line.
   *
   * @param { string } word A word to be concatenated.
   * @param { boolean } [noWrap] Don't wrap text even if the line is too long.
   */
  concatWord (word, noWrap = false) {
    if (this.wordBreakOpportunity && word.length > this.nextLineAvailableChars) {
      this.pushWord(word, noWrap);
      this.wordBreakOpportunity = false;
    } else {
      const lastWord = this.popWord();
      this.pushWord((lastWord) ? lastWord.concat(word) : word, noWrap);
    }
  }

  /**
   * Add current line (and more empty lines if provided argument > 1) to the list of complete lines and start a new one.
   *
   * @param { number } n Number of line breaks that will be added to the resulting string.
   */
  startNewLine (n = 1) {
    this.lines.push(this.nextLineWords);
    if (n > 1) {
      this.lines.push(...Array.from({ length: n - 1 }, () => []));
    }
    this.nextLineWords = [];
    this.nextLineAvailableChars = this.maxLineLength;
  }

  /**
   * No words in this builder.
   *
   * @returns { boolean }
   */
  isEmpty () {
    return this.lines.length === 0
        && this.nextLineWords.length === 0;
  }

  clear () {
    this.lines.length = 0;
    this.nextLineWords.length = 0;
    this.nextLineAvailableChars = this.maxLineLength;
  }

  /**
   * Join all lines of words inside the InlineTextBuilder into a complete string.
   *
   * @returns { string }
   */
  toString () {
    return [...this.lines, this.nextLineWords]
      .map(words => words.join(' '))
      .join('\n');
  }

  /**
   * Split a long word up to fit within the word wrap limit.
   * Use either a character to split looking back from the word wrap limit,
   * or truncate to the word wrap limit.
   *
   * @param   { string }   word Input word.
   * @returns { string[] }      Parts of the word.
   */
  splitLongWord (word) {
    const parts = [];
    let idx = 0;
    while (word.length > this.maxLineLength) {

      const firstLine = word.substring(0, this.maxLineLength);
      const remainingChars = word.substring(this.maxLineLength);

      const splitIndex = firstLine.lastIndexOf(this.wrapCharacters[idx]);

      if (splitIndex > -1) { // Found a character to split on

        word = firstLine.substring(splitIndex + 1) + remainingChars;
        parts.push(firstLine.substring(0, splitIndex + 1));

      } else { // Not found a character to split on

        idx++;
        if (idx < this.wrapCharacters.length) { // There is next character to try

          word = firstLine + remainingChars;

        } else { // No more characters to try

          if (this.forceWrapOnLimit) {
            parts.push(firstLine);
            word = remainingChars;
            if (word.length > this.maxLineLength) {
              continue;
            }
          } else {
            word = firstLine + remainingChars;
          }
          break;

        }

      }

    }
    parts.push(word); // Add remaining part to array
    return parts;
  }
}

/* eslint-disable max-classes-per-file */


class StackItem {
  constructor (next = null) { this.next = next; }

  getRoot () { return (this.next) ? this.next : this; }
}

class BlockStackItem extends StackItem {
  constructor (options, next = null, leadingLineBreaks = 1, maxLineLength = undefined) {
    super(next);
    this.leadingLineBreaks = leadingLineBreaks;
    this.inlineTextBuilder = new InlineTextBuilder(options, maxLineLength);
    this.rawText = '';
    this.stashedLineBreaks = 0;
    this.isPre = next && next.isPre;
    this.isNoWrap = next && next.isNoWrap;
  }
}

class ListStackItem extends BlockStackItem {
  constructor (
    options,
    next = null,
    {
      interRowLineBreaks = 1,
      leadingLineBreaks = 2,
      maxLineLength = undefined,
      maxPrefixLength = 0,
      prefixAlign = 'left',
    } = {}
  ) {
    super(options, next, leadingLineBreaks, maxLineLength);
    this.maxPrefixLength = maxPrefixLength;
    this.prefixAlign = prefixAlign;
    this.interRowLineBreaks = interRowLineBreaks;
  }
}

class ListItemStackItem extends BlockStackItem {
  constructor (
    options,
    next = null,
    {
      leadingLineBreaks = 1,
      maxLineLength = undefined,
      prefix = '',
    } = {}
  ) {
    super(options, next, leadingLineBreaks, maxLineLength);
    this.prefix = prefix;
  }
}

class TableStackItem extends StackItem {
  constructor (next = null) {
    super(next);
    this.rows = [];
    this.isPre = next && next.isPre;
    this.isNoWrap = next && next.isNoWrap;
  }
}

class TableRowStackItem extends StackItem {
  constructor (next = null) {
    super(next);
    this.cells = [];
    this.isPre = next && next.isPre;
    this.isNoWrap = next && next.isNoWrap;
  }
}

class TableCellStackItem extends StackItem {
  constructor (options, next = null, maxColumnWidth = undefined) {
    super(next);
    this.inlineTextBuilder = new InlineTextBuilder(options, maxColumnWidth);
    this.rawText = '';
    this.stashedLineBreaks = 0;
    this.isPre = next && next.isPre;
    this.isNoWrap = next && next.isNoWrap;
  }
}

class TransformerStackItem extends StackItem {
  constructor (next = null, transform) {
    super(next);
    this.transform = transform;
  }
}

function charactersToCodes (str) {
  return [...str]
    .map(c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'))
    .join('');
}

/**
 * Helps to handle HTML whitespaces.
 *
 * @class WhitespaceProcessor
 */
class WhitespaceProcessor {

  /**
   * Creates an instance of WhitespaceProcessor.
   *
   * @param { Options } options    HtmlToText options.
   * @memberof WhitespaceProcessor
   */
  constructor (options) {
    this.whitespaceChars = (options.preserveNewlines)
      ? options.whitespaceCharacters.replace(/\n/g, '')
      : options.whitespaceCharacters;
    const whitespaceCodes = charactersToCodes(this.whitespaceChars);
    this.leadingWhitespaceRe = new RegExp(`^[${whitespaceCodes}]`);
    this.trailingWhitespaceRe = new RegExp(`[${whitespaceCodes}]$`);
    this.allWhitespaceOrEmptyRe = new RegExp(`^[${whitespaceCodes}]*$`);
    this.newlineOrNonWhitespaceRe = new RegExp(`(\\n|[^\\n${whitespaceCodes}])`, 'g');
    this.newlineOrNonNewlineStringRe = new RegExp(`(\\n|[^\\n]+)`, 'g');

    if (options.preserveNewlines) {

      const wordOrNewlineRe = new RegExp(`\\n|[^\\n${whitespaceCodes}]+`, 'gm');

      /**
       * Shrink whitespaces and wrap text, add to the builder.
       *
       * @param { string }                  text              Input text.
       * @param { InlineTextBuilder }       inlineTextBuilder A builder to receive processed text.
       * @param { (str: string) => string } [ transform ]     A transform to be applied to words.
       * @param { boolean }                 [noWrap] Don't wrap text even if the line is too long.
       */
      this.shrinkWrapAdd = function (text, inlineTextBuilder, transform = (str => str), noWrap = false) {
        if (!text) { return; }
        const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
        let anyMatch = false;
        let m = wordOrNewlineRe.exec(text);
        if (m) {
          anyMatch = true;
          if (m[0] === '\n') {
            inlineTextBuilder.startNewLine();
          } else if (previouslyStashedSpace || this.testLeadingWhitespace(text)) {
            inlineTextBuilder.pushWord(transform(m[0]), noWrap);
          } else {
            inlineTextBuilder.concatWord(transform(m[0]), noWrap);
          }
          while ((m = wordOrNewlineRe.exec(text)) !== null) {
            if (m[0] === '\n') {
              inlineTextBuilder.startNewLine();
            } else {
              inlineTextBuilder.pushWord(transform(m[0]), noWrap);
            }
          }
        }
        inlineTextBuilder.stashedSpace = (previouslyStashedSpace && !anyMatch) || (this.testTrailingWhitespace(text));
        // No need to stash a space in case last added item was a new line,
        // but that won't affect anything later anyway.
      };

    } else {

      const wordRe = new RegExp(`[^${whitespaceCodes}]+`, 'g');

      this.shrinkWrapAdd = function (text, inlineTextBuilder, transform = (str => str), noWrap = false) {
        if (!text) { return; }
        const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
        let anyMatch = false;
        let m = wordRe.exec(text);
        if (m) {
          anyMatch = true;
          if (previouslyStashedSpace || this.testLeadingWhitespace(text)) {
            inlineTextBuilder.pushWord(transform(m[0]), noWrap);
          } else {
            inlineTextBuilder.concatWord(transform(m[0]), noWrap);
          }
          while ((m = wordRe.exec(text)) !== null) {
            inlineTextBuilder.pushWord(transform(m[0]), noWrap);
          }
        }
        inlineTextBuilder.stashedSpace = (previouslyStashedSpace && !anyMatch) || this.testTrailingWhitespace(text);
      };

    }
  }

  /**
   * Add text with only minimal processing.
   * Everything between newlines considered a single word.
   * No whitespace is trimmed.
   * Not affected by preserveNewlines option - `\n` always starts a new line.
   *
   * `noWrap` argument is `true` by default - this won't start a new line
   * even if there is not enough space left in the current line.
   *
   * @param { string }            text              Input text.
   * @param { InlineTextBuilder } inlineTextBuilder A builder to receive processed text.
   * @param { boolean }           [noWrap] Don't wrap text even if the line is too long.
   */
  addLiteral (text, inlineTextBuilder, noWrap = true) {
    if (!text) { return; }
    const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
    let anyMatch = false;
    let m = this.newlineOrNonNewlineStringRe.exec(text);
    if (m) {
      anyMatch = true;
      if (m[0] === '\n') {
        inlineTextBuilder.startNewLine();
      } else if (previouslyStashedSpace) {
        inlineTextBuilder.pushWord(m[0], noWrap);
      } else {
        inlineTextBuilder.concatWord(m[0], noWrap);
      }
      while ((m = this.newlineOrNonNewlineStringRe.exec(text)) !== null) {
        if (m[0] === '\n') {
          inlineTextBuilder.startNewLine();
        } else {
          inlineTextBuilder.pushWord(m[0], noWrap);
        }
      }
    }
    inlineTextBuilder.stashedSpace = (previouslyStashedSpace && !anyMatch);
  }

  /**
   * Test whether the given text starts with HTML whitespace character.
   *
   * @param   { string }  text  The string to test.
   * @returns { boolean }
   */
  testLeadingWhitespace (text) {
    return this.leadingWhitespaceRe.test(text);
  }

  /**
   * Test whether the given text ends with HTML whitespace character.
   *
   * @param   { string }  text  The string to test.
   * @returns { boolean }
   */
  testTrailingWhitespace (text) {
    return this.trailingWhitespaceRe.test(text);
  }

  /**
   * Test whether the given text contains any non-whitespace characters.
   *
   * @param   { string }  text  The string to test.
   * @returns { boolean }
   */
  testContainsWords (text) {
    return !this.allWhitespaceOrEmptyRe.test(text);
  }

  /**
   * Return the number of newlines if there are no words.
   *
   * If any word is found then return zero regardless of the actual number of newlines.
   *
   * @param   { string }  text  Input string.
   * @returns { number }
   */
  countNewlinesNoWords (text) {
    this.newlineOrNonWhitespaceRe.lastIndex = 0;
    let counter = 0;
    let match;
    while ((match = this.newlineOrNonWhitespaceRe.exec(text)) !== null) {
      if (match[0] === '\n') {
        counter++;
      } else {
        return 0;
      }
    }
    return counter;
  }

}

/**
 * Helps to build text from inline and block elements.
 *
 * @class BlockTextBuilder
 */
class BlockTextBuilder {

  /**
   * Creates an instance of BlockTextBuilder.
   *
   * @param { Options } options HtmlToText options.
   * @param { import('selderee').Picker<DomNode, TagDefinition> } picker Selectors decision tree picker.
   * @param { any} [metadata] Optional metadata for HTML document, for use in formatters.
   */
  constructor (options, picker, metadata = undefined) {
    this.options = options;
    this.picker = picker;
    this.metadata = metadata;
    this.whitespaceProcessor = new WhitespaceProcessor(options);
    /** @type { StackItem } */
    this._stackItem = new BlockStackItem(options);
    /** @type { TransformerStackItem } */
    this._wordTransformer = undefined;
  }

  /**
   * Put a word-by-word transform function onto the transformations stack.
   *
   * Mainly used for uppercasing. Can be bypassed to add unformatted text such as URLs.
   *
   * Word transformations applied before wrapping.
   *
   * @param { (str: string) => string } wordTransform Word transformation function.
   */
  pushWordTransform (wordTransform) {
    this._wordTransformer = new TransformerStackItem(this._wordTransformer, wordTransform);
  }

  /**
   * Remove a function from the word transformations stack.
   *
   * @returns { (str: string) => string } A function that was removed.
   */
  popWordTransform () {
    if (!this._wordTransformer) { return undefined; }
    const transform = this._wordTransformer.transform;
    this._wordTransformer = this._wordTransformer.next;
    return transform;
  }

  /**
   * Ignore wordwrap option in followup inline additions and disable automatic wrapping.
   */
  startNoWrap () {
    this._stackItem.isNoWrap = true;
  }

  /**
   * Return automatic wrapping to behavior defined by options.
   */
  stopNoWrap () {
    this._stackItem.isNoWrap = false;
  }

  /** @returns { (str: string) => string } */
  _getCombinedWordTransformer () {
    const wt = (this._wordTransformer)
      ? ((str) => applyTransformer(str, this._wordTransformer))
      : undefined;
    const ce = this.options.encodeCharacters;
    return (wt)
      ? ((ce) ? (str) => ce(wt(str)) : wt)
      : ce;
  }

  _popStackItem () {
    const item = this._stackItem;
    this._stackItem = item.next;
    return item;
  }

  /**
   * Add a line break into currently built block.
   */
  addLineBreak () {
    if (!(
      this._stackItem instanceof BlockStackItem
      || this._stackItem instanceof ListItemStackItem
      || this._stackItem instanceof TableCellStackItem
    )) { return; }
    if (this._stackItem.isPre) {
      this._stackItem.rawText += '\n';
    } else {
      this._stackItem.inlineTextBuilder.startNewLine();
    }
  }

  /**
   * Allow to break line in case directly following text will not fit.
   */
  addWordBreakOpportunity () {
    if (
      this._stackItem instanceof BlockStackItem
      || this._stackItem instanceof ListItemStackItem
      || this._stackItem instanceof TableCellStackItem
    ) {
      this._stackItem.inlineTextBuilder.wordBreakOpportunity = true;
    }
  }

  /**
   * Add a node inline into the currently built block.
   *
   * @param { string } str
   * Text content of a node to add.
   *
   * @param { object } [param1]
   * Object holding the parameters of the operation.
   *
   * @param { boolean } [param1.noWordTransform]
   * Ignore word transformers if there are any.
   * Don't encode characters as well.
   * (Use this for things like URL addresses).
   */
  addInline (str, { noWordTransform = false } = {}) {
    if (!(
      this._stackItem instanceof BlockStackItem
      || this._stackItem instanceof ListItemStackItem
      || this._stackItem instanceof TableCellStackItem
    )) { return; }

    if (this._stackItem.isPre) {
      this._stackItem.rawText += str;
      return;
    }

    if (
      str.length === 0 || // empty string
      (
        this._stackItem.stashedLineBreaks && // stashed linebreaks make whitespace irrelevant
        !this.whitespaceProcessor.testContainsWords(str) // no words to add
      )
    ) { return; }

    if (this.options.preserveNewlines) {
      const newlinesNumber = this.whitespaceProcessor.countNewlinesNoWords(str);
      if (newlinesNumber > 0) {
        this._stackItem.inlineTextBuilder.startNewLine(newlinesNumber);
        // keep stashedLineBreaks unchanged
        return;
      }
    }

    if (this._stackItem.stashedLineBreaks) {
      this._stackItem.inlineTextBuilder.startNewLine(this._stackItem.stashedLineBreaks);
    }
    this.whitespaceProcessor.shrinkWrapAdd(
      str,
      this._stackItem.inlineTextBuilder,
      (noWordTransform) ? undefined : this._getCombinedWordTransformer(),
      this._stackItem.isNoWrap
    );
    this._stackItem.stashedLineBreaks = 0; // inline text doesn't introduce line breaks
  }

  /**
   * Add a string inline into the currently built block.
   *
   * Use this for markup elements that don't have to adhere
   * to text layout rules.
   *
   * @param { string } str Text to add.
   */
  addLiteral (str) {
    if (!(
      this._stackItem instanceof BlockStackItem
      || this._stackItem instanceof ListItemStackItem
      || this._stackItem instanceof TableCellStackItem
    )) { return; }

    if (str.length === 0) { return; }

    if (this._stackItem.isPre) {
      this._stackItem.rawText += str;
      return;
    }

    if (this._stackItem.stashedLineBreaks) {
      this._stackItem.inlineTextBuilder.startNewLine(this._stackItem.stashedLineBreaks);
    }
    this.whitespaceProcessor.addLiteral(
      str,
      this._stackItem.inlineTextBuilder,
      this._stackItem.isNoWrap
    );
    this._stackItem.stashedLineBreaks = 0;
  }

  /**
   * Start building a new block.
   *
   * @param { object } [param0]
   * Object holding the parameters of the block.
   *
   * @param { number } [param0.leadingLineBreaks]
   * This block should have at least this number of line breaks to separate it from any preceding block.
   *
   * @param { number }  [param0.reservedLineLength]
   * Reserve this number of characters on each line for block markup.
   *
   * @param { boolean } [param0.isPre]
   * Should HTML whitespace be preserved inside this block.
   */
  openBlock ({ leadingLineBreaks = 1, reservedLineLength = 0, isPre = false } = {}) {
    const maxLineLength = Math.max(20, this._stackItem.inlineTextBuilder.maxLineLength - reservedLineLength);
    this._stackItem = new BlockStackItem(
      this.options,
      this._stackItem,
      leadingLineBreaks,
      maxLineLength
    );
    if (isPre) { this._stackItem.isPre = true; }
  }

  /**
   * Finalize currently built block, add it's content to the parent block.
   *
   * @param { object } [param0]
   * Object holding the parameters of the block.
   *
   * @param { number } [param0.trailingLineBreaks]
   * This block should have at least this number of line breaks to separate it from any following block.
   *
   * @param { (str: string) => string } [param0.blockTransform]
   * A function to transform the block text before adding to the parent block.
   * This happens after word wrap and should be used in combination with reserved line length
   * in order to keep line lengths correct.
   * Used for whole block markup.
   */
  closeBlock ({ trailingLineBreaks = 1, blockTransform = undefined } = {}) {
    const block = this._popStackItem();
    const blockText = (blockTransform) ? blockTransform(html_to_text_getText(block)) : html_to_text_getText(block);
    addText(this._stackItem, blockText, block.leadingLineBreaks, Math.max(block.stashedLineBreaks, trailingLineBreaks));
  }

  /**
   * Start building a new list.
   *
   * @param { object } [param0]
   * Object holding the parameters of the list.
   *
   * @param { number } [param0.maxPrefixLength]
   * Length of the longest list item prefix.
   * If not supplied or too small then list items won't be aligned properly.
   *
   * @param { 'left' | 'right' } [param0.prefixAlign]
   * Specify how prefixes of different lengths have to be aligned
   * within a column.
   *
   * @param { number } [param0.interRowLineBreaks]
   * Minimum number of line breaks between list items.
   *
   * @param { number } [param0.leadingLineBreaks]
   * This list should have at least this number of line breaks to separate it from any preceding block.
   */
  openList ({ maxPrefixLength = 0, prefixAlign = 'left', interRowLineBreaks = 1, leadingLineBreaks = 2 } = {}) {
    this._stackItem = new ListStackItem(this.options, this._stackItem, {
      interRowLineBreaks: interRowLineBreaks,
      leadingLineBreaks: leadingLineBreaks,
      maxLineLength: this._stackItem.inlineTextBuilder.maxLineLength,
      maxPrefixLength: maxPrefixLength,
      prefixAlign: prefixAlign
    });
  }

  /**
   * Start building a new list item.
   *
   * @param {object} param0
   * Object holding the parameters of the list item.
   *
   * @param { string } [param0.prefix]
   * Prefix for this list item (item number, bullet point, etc).
   */
  openListItem ({ prefix = '' } = {}) {
    if (!(this._stackItem instanceof ListStackItem)) {
      throw new Error('Can\'t add a list item to something that is not a list! Check the formatter.');
    }
    const list = this._stackItem;
    const prefixLength = Math.max(prefix.length, list.maxPrefixLength);
    const maxLineLength = Math.max(20, list.inlineTextBuilder.maxLineLength - prefixLength);
    this._stackItem = new ListItemStackItem(this.options, list, {
      prefix: prefix,
      maxLineLength: maxLineLength,
      leadingLineBreaks: list.interRowLineBreaks
    });
  }

  /**
   * Finalize currently built list item, add it's content to the parent list.
   */
  closeListItem () {
    const listItem = this._popStackItem();
    const list = listItem.next;

    const prefixLength = Math.max(listItem.prefix.length, list.maxPrefixLength);
    const spacing = '\n' + ' '.repeat(prefixLength);
    const prefix = (list.prefixAlign === 'right')
      ? listItem.prefix.padStart(prefixLength)
      : listItem.prefix.padEnd(prefixLength);
    const text = prefix + html_to_text_getText(listItem).replace(/\n/g, spacing);

    addText(
      list,
      text,
      listItem.leadingLineBreaks,
      Math.max(listItem.stashedLineBreaks, list.interRowLineBreaks)
    );
  }

  /**
   * Finalize currently built list, add it's content to the parent block.
   *
   * @param { object } param0
   * Object holding the parameters of the list.
   *
   * @param { number } [param0.trailingLineBreaks]
   * This list should have at least this number of line breaks to separate it from any following block.
   */
  closeList ({ trailingLineBreaks = 2 } = {}) {
    const list = this._popStackItem();
    const text = html_to_text_getText(list);
    if (text) {
      addText(this._stackItem, text, list.leadingLineBreaks, trailingLineBreaks);
    }
  }

  /**
   * Start building a table.
   */
  openTable () {
    this._stackItem = new TableStackItem(this._stackItem);
  }

  /**
   * Start building a table row.
   */
  openTableRow () {
    if (!(this._stackItem instanceof TableStackItem)) {
      throw new Error('Can\'t add a table row to something that is not a table! Check the formatter.');
    }
    this._stackItem = new TableRowStackItem(this._stackItem);
  }

  /**
   * Start building a table cell.
   *
   * @param { object } [param0]
   * Object holding the parameters of the cell.
   *
   * @param { number } [param0.maxColumnWidth]
   * Wrap cell content to this width. Fall back to global wordwrap value if undefined.
   */
  openTableCell ({ maxColumnWidth = undefined } = {}) {
    if (!(this._stackItem instanceof TableRowStackItem)) {
      throw new Error('Can\'t add a table cell to something that is not a table row! Check the formatter.');
    }
    this._stackItem = new TableCellStackItem(this.options, this._stackItem, maxColumnWidth);
  }

  /**
   * Finalize currently built table cell and add it to parent table row's cells.
   *
   * @param { object } [param0]
   * Object holding the parameters of the cell.
   *
   * @param { number } [param0.colspan] How many columns this cell should occupy.
   * @param { number } [param0.rowspan] How many rows this cell should occupy.
   */
  closeTableCell ({ colspan = 1, rowspan = 1 } = {}) {
    const cell = this._popStackItem();
    const text = trimCharacter(html_to_text_getText(cell), '\n');
    cell.next.cells.push({ colspan: colspan, rowspan: rowspan, text: text });
  }

  /**
   * Finalize currently built table row and add it to parent table's rows.
   */
  closeTableRow () {
    const row = this._popStackItem();
    row.next.rows.push(row.cells);
  }

  /**
   * Finalize currently built table and add the rendered text to the parent block.
   *
   * @param { object } param0
   * Object holding the parameters of the table.
   *
   * @param { TablePrinter } param0.tableToString
   * A function to convert a table of stringified cells into a complete table.
   *
   * @param { number } [param0.leadingLineBreaks]
   * This table should have at least this number of line breaks to separate if from any preceding block.
   *
   * @param { number } [param0.trailingLineBreaks]
   * This table should have at least this number of line breaks to separate it from any following block.
   */
  closeTable ({ tableToString, leadingLineBreaks = 2, trailingLineBreaks = 2 }) {
    const table = this._popStackItem();
    const output = tableToString(table.rows);
    if (output) {
      addText(this._stackItem, output, leadingLineBreaks, trailingLineBreaks);
    }
  }

  /**
   * Return the rendered text content of this builder.
   *
   * @returns { string }
   */
  toString () {
    return html_to_text_getText(this._stackItem.getRoot());
    // There should only be the root item if everything is closed properly.
  }

}

function html_to_text_getText (stackItem) {
  if (!(
    stackItem instanceof BlockStackItem
    || stackItem instanceof ListItemStackItem
    || stackItem instanceof TableCellStackItem
  )) {
    throw new Error('Only blocks, list items and table cells can be requested for text contents.');
  }
  return (stackItem.inlineTextBuilder.isEmpty())
    ? stackItem.rawText
    : stackItem.rawText + stackItem.inlineTextBuilder.toString();
}

function addText (stackItem, text, leadingLineBreaks, trailingLineBreaks) {
  if (!(
    stackItem instanceof BlockStackItem
    || stackItem instanceof ListItemStackItem
    || stackItem instanceof TableCellStackItem
  )) {
    throw new Error('Only blocks, list items and table cells can contain text.');
  }
  const parentText = html_to_text_getText(stackItem);
  const lineBreaks = Math.max(stackItem.stashedLineBreaks, leadingLineBreaks);
  stackItem.inlineTextBuilder.clear();
  if (parentText) {
    stackItem.rawText = parentText + '\n'.repeat(lineBreaks) + text;
  } else {
    stackItem.rawText = text;
    stackItem.leadingLineBreaks = lineBreaks;
  }
  stackItem.stashedLineBreaks = trailingLineBreaks;
}

/**
 * @param { string } str A string to transform.
 * @param { TransformerStackItem } transformer A transformer item (with possible continuation).
 * @returns { string }
 */
function applyTransformer (str, transformer) {
  return ((transformer) ? applyTransformer(transformer.transform(str), transformer.next) : str);
}

/**
 * Compile selectors into a decision tree,
 * return a function intended for batch processing.
 *
 * @param   { Options } [options = {}]   HtmlToText options (defaults, formatters, user options merged, deduplicated).
 * @returns { (html: string, metadata?: any) => string } Pre-configured converter function.
 * @static
 */
function compile$1 (options = {}) {
  const selectorsWithoutFormat = options.selectors.filter(s => !s.format);
  if (selectorsWithoutFormat.length) {
    throw new Error(
      'Following selectors have no specified format: ' +
      selectorsWithoutFormat.map(s => `\`${s.selector}\``).join(', ')
    );
  }
  const picker = new DecisionTree(
    options.selectors.map(s => [s.selector, s])
  ).build(hp2Builder);

  if (typeof options.encodeCharacters !== 'function') {
    options.encodeCharacters = makeReplacerFromDict(options.encodeCharacters);
  }

  const baseSelectorsPicker = new DecisionTree(
    options.baseElements.selectors.map((s, i) => [s, i + 1])
  ).build(hp2Builder);
  function findBaseElements (dom) {
    return findBases(dom, options, baseSelectorsPicker);
  }

  const limitedWalk = limitedDepthRecursive(
    options.limits.maxDepth,
    recursiveWalk,
    function (dom, builder) {
      builder.addInline(options.limits.ellipsis || '');
    }
  );

  return function (html, metadata = undefined) {
    return process(html, metadata, options, picker, findBaseElements, limitedWalk);
  };
}


/**
 * Convert given HTML according to preprocessed options.
 *
 * @param { string } html HTML content to convert.
 * @param { any } metadata Optional metadata for HTML document, for use in formatters.
 * @param { Options } options HtmlToText options (preprocessed).
 * @param { import('selderee').Picker<DomNode, TagDefinition> } picker
 * Tag definition picker for DOM nodes processing.
 * @param { (dom: DomNode[]) => DomNode[] } findBaseElements
 * Function to extract elements from HTML DOM
 * that will only be present in the output text.
 * @param { RecursiveCallback } walk Recursive callback.
 * @returns { string }
 */
function process (html, metadata, options, picker, findBaseElements, walk) {
  const maxInputLength = options.limits.maxInputLength;
  if (maxInputLength && html && html.length > maxInputLength) {
    console.warn(
      `Input length ${html.length} is above allowed limit of ${maxInputLength}. Truncating without ellipsis.`
    );
    html = html.substring(0, maxInputLength);
  }

  const document = parseDocument(html, { decodeEntities: options.decodeEntities });
  const bases = findBaseElements(document.children);
  const builder = new BlockTextBuilder(options, picker, metadata);
  walk(bases, builder);
  return builder.toString();
}


function findBases (dom, options, baseSelectorsPicker) {
  const results = [];

  function recursiveWalk (walk, /** @type { DomNode[] } */ dom) {
    dom = dom.slice(0, options.limits.maxChildNodes);
    for (const elem of dom) {
      if (elem.type !== 'tag') {
        continue;
      }
      const pickedSelectorIndex = baseSelectorsPicker.pick1(elem);
      if (pickedSelectorIndex > 0) {
        results.push({ selectorIndex: pickedSelectorIndex, element: elem });
      } else if (elem.children) {
        walk(elem.children);
      }
      if (results.length >= options.limits.maxBaseElements) {
        return;
      }
    }
  }

  const limitedWalk = limitedDepthRecursive(
    options.limits.maxDepth,
    recursiveWalk
  );
  limitedWalk(dom);

  if (options.baseElements.orderBy !== 'occurrence') { // 'selectors'
    results.sort((a, b) => a.selectorIndex - b.selectorIndex);
  }
  return (options.baseElements.returnDomByDefault && results.length === 0)
    ? dom
    : results.map(x => x.element);
}

/**
 * Function to walk through DOM nodes and accumulate their string representations.
 *
 * @param   { RecursiveCallback } walk    Recursive callback.
 * @param   { DomNode[] }         [dom]   Nodes array to process.
 * @param   { BlockTextBuilder }  builder Passed around to accumulate output text.
 * @private
 */
function recursiveWalk (walk, dom, builder) {
  if (!dom) { return; }

  const options = builder.options;

  const tooManyChildNodes = dom.length > options.limits.maxChildNodes;
  if (tooManyChildNodes) {
    dom = dom.slice(0, options.limits.maxChildNodes);
    dom.push({
      data: options.limits.ellipsis,
      type: 'text'
    });
  }

  for (const elem of dom) {
    switch (elem.type) {
      case 'text': {
        builder.addInline(elem.data);
        break;
      }
      case 'tag': {
        const tagDefinition = builder.picker.pick1(elem);
        const format = options.formatters[tagDefinition.format];
        format(elem, walk, builder, tagDefinition.options || {});
        break;
      }
    }
  }

  return;
}

/**
 * @param { Object<string,string | false> } dict
 * A dictionary where keys are characters to replace
 * and values are replacement strings.
 *
 * First code point from dict keys is used.
 * Compound emojis with ZWJ are not supported (not until Node 16).
 *
 * @returns { ((str: string) => string) | undefined }
 */
function makeReplacerFromDict (dict) {
  if (!dict || Object.keys(dict).length === 0) {
    return undefined;
  }
  /** @type { [string, string][] } */
  const entries = Object.entries(dict).filter(([, v]) => v !== false);
  const regex = new RegExp(
    entries
      .map(([c]) => `(${unicodeEscape([...c][0])})`)
      .join('|'),
    'g'
  );
  const values = entries.map(([, v]) => v);
  const replacer = (m, ...cgs) => values[cgs.findIndex(cg => cg)];
  return (str) => str.replace(regex, replacer);
}

/**
 * Dummy formatter that discards the input and does nothing.
 *
 * @type { FormatCallback }
 */
function formatSkip (elem, walk, builder, formatOptions) {
  /* do nothing */
}

/**
 * Insert the given string literal inline instead of a tag.
 *
 * @type { FormatCallback }
 */
function formatInlineString (elem, walk, builder, formatOptions) {
  builder.addLiteral(formatOptions.string || '');
}

/**
 * Insert a block with the given string literal instead of a tag.
 *
 * @type { FormatCallback }
 */
function formatBlockString (elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.addLiteral(formatOptions.string || '');
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}

/**
 * Process an inline-level element.
 *
 * @type { FormatCallback }
 */
function formatInline (elem, walk, builder, formatOptions) {
  walk(elem.children, builder);
}

/**
 * Process a block-level container.
 *
 * @type { FormatCallback }
 */
function formatBlock$1 (elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}

function renderOpenTag (elem) {
  const attrs = (elem.attribs && elem.attribs.length)
    ? ' ' + Object.entries(elem.attribs)
      .map(([k, v]) => ((v === '') ? k : `${k}=${v.replace(/"/g, '&quot;')}`))
      .join(' ')
    : '';
  return `<${elem.name}${attrs}>`;
}

function renderCloseTag (elem) {
  return `</${elem.name}>`;
}

/**
 * Render an element as inline HTML tag, walk through it's children.
 *
 * @type { FormatCallback }
 */
function formatInlineTag (elem, walk, builder, formatOptions) {
  builder.startNoWrap();
  builder.addLiteral(renderOpenTag(elem));
  builder.stopNoWrap();
  walk(elem.children, builder);
  builder.startNoWrap();
  builder.addLiteral(renderCloseTag(elem));
  builder.stopNoWrap();
}

/**
 * Render an element as HTML block bag, walk through it's children.
 *
 * @type { FormatCallback }
 */
function formatBlockTag (elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.startNoWrap();
  builder.addLiteral(renderOpenTag(elem));
  builder.stopNoWrap();
  walk(elem.children, builder);
  builder.startNoWrap();
  builder.addLiteral(renderCloseTag(elem));
  builder.stopNoWrap();
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}

/**
 * Render an element with all it's children as inline HTML.
 *
 * @type { FormatCallback }
 */
function formatInlineHtml (elem, walk, builder, formatOptions) {
  builder.startNoWrap();
  builder.addLiteral(
    render(elem, { decodeEntities: builder.options.decodeEntities })
  );
  builder.stopNoWrap();
}

/**
 * Render an element with all it's children as HTML block.
 *
 * @type { FormatCallback }
 */
function formatBlockHtml (elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.startNoWrap();
  builder.addLiteral(
    render(elem, { decodeEntities: builder.options.decodeEntities })
  );
  builder.stopNoWrap();
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}

/**
 * Render inline element wrapped with given strings.
 *
 * @type { FormatCallback }
 */
function formatInlineSurround (elem, walk, builder, formatOptions) {
  builder.addLiteral(formatOptions.prefix || '');
  walk(elem.children, builder);
  builder.addLiteral(formatOptions.suffix || '');
}

var genericFormatters = /*#__PURE__*/Object.freeze({
  __proto__: null,
  block: formatBlock$1,
  blockHtml: formatBlockHtml,
  blockString: formatBlockString,
  blockTag: formatBlockTag,
  inline: formatInline,
  inlineHtml: formatInlineHtml,
  inlineString: formatInlineString,
  inlineSurround: formatInlineSurround,
  inlineTag: formatInlineTag,
  skip: formatSkip
});

function getRow (matrix, j) {
  if (!matrix[j]) { matrix[j] = []; }
  return matrix[j];
}

function findFirstVacantIndex (row, x = 0) {
  while (row[x]) { x++; }
  return x;
}

function transposeInPlace (matrix, maxSize) {
  for (let i = 0; i < maxSize; i++) {
    const rowI = getRow(matrix, i);
    for (let j = 0; j < i; j++) {
      const rowJ = getRow(matrix, j);
      if (rowI[j] || rowJ[i]) {
        const temp = rowI[j];
        rowI[j] = rowJ[i];
        rowJ[i] = temp;
      }
    }
  }
}

function putCellIntoLayout (cell, layout, baseRow, baseCol) {
  for (let r = 0; r < cell.rowspan; r++) {
    const layoutRow = getRow(layout, baseRow + r);
    for (let c = 0; c < cell.colspan; c++) {
      layoutRow[baseCol + c] = cell;
    }
  }
}

function getOrInitOffset (offsets, index) {
  if (offsets[index] === undefined) {
    offsets[index] = (index === 0) ? 0 : 1 + getOrInitOffset(offsets, index - 1);
  }
  return offsets[index];
}

function updateOffset (offsets, base, span, value) {
  offsets[base + span] = Math.max(
    getOrInitOffset(offsets, base + span),
    getOrInitOffset(offsets, base) + value
  );
}

/**
 * Render a table into a string.
 * Cells can contain multiline text and span across multiple rows and columns.
 *
 * Modifies cells to add lines array.
 *
 * @param { TablePrinterCell[][] } tableRows Table to render.
 * @param { number } rowSpacing Number of spaces between columns.
 * @param { number } colSpacing Number of empty lines between rows.
 * @returns { string }
 */
function tableToString (tableRows, rowSpacing, colSpacing) {
  const layout = [];
  let colNumber = 0;
  const rowNumber = tableRows.length;
  const rowOffsets = [0];
  // Fill the layout table and row offsets row-by-row.
  for (let j = 0; j < rowNumber; j++) {
    const layoutRow = getRow(layout, j);
    const cells = tableRows[j];
    let x = 0;
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      x = findFirstVacantIndex(layoutRow, x);
      putCellIntoLayout(cell, layout, j, x);
      x += cell.colspan;
      cell.lines = cell.text.split('\n');
      const cellHeight = cell.lines.length;
      updateOffset(rowOffsets, j, cell.rowspan, cellHeight + rowSpacing);
    }
    colNumber = (layoutRow.length > colNumber) ? layoutRow.length : colNumber;
  }

  transposeInPlace(layout, (rowNumber > colNumber) ? rowNumber : colNumber);

  const outputLines = [];
  const colOffsets = [0];
  // Fill column offsets and output lines column-by-column.
  for (let x = 0; x < colNumber; x++) {
    let y = 0;
    let cell;
    const rowsInThisColumn = Math.min(rowNumber, layout[x].length);
    while (y < rowsInThisColumn) {
      cell = layout[x][y];
      if (cell) {
        if (!cell.rendered) {
          let cellWidth = 0;
          for (let j = 0; j < cell.lines.length; j++) {
            const line = cell.lines[j];
            const lineOffset = rowOffsets[y] + j;
            outputLines[lineOffset] = (outputLines[lineOffset] || '').padEnd(colOffsets[x]) + line;
            cellWidth = (line.length > cellWidth) ? line.length : cellWidth;
          }
          updateOffset(colOffsets, x, cell.colspan, cellWidth + colSpacing);
          cell.rendered = true;
        }
        y += cell.rowspan;
      } else {
        const lineOffset = rowOffsets[y];
        outputLines[lineOffset] = (outputLines[lineOffset] || '');
        y++;
      }
    }
  }

  return outputLines.join('\n');
}

/**
 * Process a line-break.
 *
 * @type { FormatCallback }
 */
function formatLineBreak (elem, walk, builder, formatOptions) {
  builder.addLineBreak();
}

/**
 * Process a `wbr` tag (word break opportunity).
 *
 * @type { FormatCallback }
 */
function formatWbr (elem, walk, builder, formatOptions) {
  builder.addWordBreakOpportunity();
}

/**
 * Process a horizontal line.
 *
 * @type { FormatCallback }
 */
function formatHorizontalLine (elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.addInline('-'.repeat(formatOptions.length || builder.options.wordwrap || 40));
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}

/**
 * Process a paragraph.
 *
 * @type { FormatCallback }
 */
function formatParagraph (elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}

/**
 * Process a preformatted content.
 *
 * @type { FormatCallback }
 */
function formatPre (elem, walk, builder, formatOptions) {
  builder.openBlock({
    isPre: true,
    leadingLineBreaks: formatOptions.leadingLineBreaks || 2
  });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}

/**
 * Process a heading.
 *
 * @type { FormatCallback }
 */
function formatHeading (elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  if (formatOptions.uppercase !== false) {
    builder.pushWordTransform(str => str.toUpperCase());
    walk(elem.children, builder);
    builder.popWordTransform();
  } else {
    walk(elem.children, builder);
  }
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}

/**
 * Process a blockquote.
 *
 * @type { FormatCallback }
 */
function formatBlockquote (elem, walk, builder, formatOptions) {
  builder.openBlock({
    leadingLineBreaks: formatOptions.leadingLineBreaks || 2,
    reservedLineLength: 2
  });
  walk(elem.children, builder);
  builder.closeBlock({
    trailingLineBreaks: formatOptions.trailingLineBreaks || 2,
    blockTransform: str => ((formatOptions.trimEmptyLines !== false) ? trimCharacter(str, '\n') : str)
      .split('\n')
      .map(line => '> ' + line)
      .join('\n')
  });
}

function withBrackets (str, brackets) {
  if (!brackets) { return str; }

  const lbr = (typeof brackets[0] === 'string')
    ? brackets[0]
    : '[';
  const rbr = (typeof brackets[1] === 'string')
    ? brackets[1]
    : ']';
  return lbr + str + rbr;
}

function pathRewrite (path, rewriter, baseUrl, metadata, elem) {
  const modifiedPath = (typeof rewriter === 'function')
    ? rewriter(path, metadata, elem)
    : path;
  return (modifiedPath[0] === '/' && baseUrl)
    ? trimCharacterEnd(baseUrl, '/') + modifiedPath
    : modifiedPath;
}

/**
 * Process an image.
 *
 * @type { FormatCallback }
 */
function formatImage (elem, walk, builder, formatOptions) {
  const attribs = elem.attribs || {};
  const alt = (attribs.alt)
    ? attribs.alt
    : '';
  const src = (!attribs.src)
    ? ''
    : pathRewrite(attribs.src, formatOptions.pathRewrite, formatOptions.baseUrl, builder.metadata, elem);
  const text = (!src)
    ? alt
    : (!alt)
      ? withBrackets(src, formatOptions.linkBrackets)
      : alt + ' ' + withBrackets(src, formatOptions.linkBrackets);

  builder.addInline(text, { noWordTransform: true });
}

// a img baseUrl
// a img pathRewrite
// a img linkBrackets

// a     ignoreHref: false
//            ignoreText ?
// a     noAnchorUrl: true
//            can be replaced with selector
// a     hideLinkHrefIfSameAsText: false
//            how to compare, what to show (text, href, normalized) ?
// a     mailto protocol removed without options

// a     protocols: mailto, tel, ...
//            can be matched with selector?

// anchors, protocols - only if no pathRewrite fn is provided

// normalize-url ?

// a
// a[href^="#"] - format:skip by default
// a[href^="mailto:"] - ?

/**
 * Process an anchor.
 *
 * @type { FormatCallback }
 */
function formatAnchor (elem, walk, builder, formatOptions) {
  function getHref () {
    if (formatOptions.ignoreHref) { return ''; }
    if (!elem.attribs || !elem.attribs.href) { return ''; }
    let href = elem.attribs.href.replace(/^mailto:/, '');
    if (formatOptions.noAnchorUrl && href[0] === '#') { return ''; }
    href = pathRewrite(href, formatOptions.pathRewrite, formatOptions.baseUrl, builder.metadata, elem);
    return href;
  }
  const href = getHref();
  if (!href) {
    walk(elem.children, builder);
  } else {
    let text = '';
    builder.pushWordTransform(
      str => {
        if (str) { text += str; }
        return str;
      }
    );
    walk(elem.children, builder);
    builder.popWordTransform();

    const hideSameLink = formatOptions.hideLinkHrefIfSameAsText && href === text;
    if (!hideSameLink) {
      builder.addInline(
        (!text)
          ? href
          : ' ' + withBrackets(href, formatOptions.linkBrackets),
        { noWordTransform: true }
      );
    }
  }
}

/**
 * @param { DomNode }           elem               List items with their prefixes.
 * @param { RecursiveCallback } walk               Recursive callback to process child nodes.
 * @param { BlockTextBuilder }  builder            Passed around to accumulate output text.
 * @param { FormatOptions }     formatOptions      Options specific to a formatter.
 * @param { () => string }      nextPrefixCallback Function that returns increasing index each time it is called.
 */
function formatList (elem, walk, builder, formatOptions, nextPrefixCallback) {
  const isNestedList = get(elem, ['parent', 'name']) === 'li';

  // With Roman numbers, index length is not as straightforward as with Arabic numbers or letters,
  // so the dumb length comparison is the most robust way to get the correct value.
  let maxPrefixLength = 0;
  const listItems = (elem.children || [])
    // it might be more accurate to check only for html spaces here, but no significant benefit
    .filter(child => child.type !== 'text' || !/^\s*$/.test(child.data))
    .map(function (child) {
      if (child.name !== 'li') {
        return { node: child, prefix: '' };
      }
      const prefix = (isNestedList)
        ? nextPrefixCallback().trimStart()
        : nextPrefixCallback();
      if (prefix.length > maxPrefixLength) { maxPrefixLength = prefix.length; }
      return { node: child, prefix: prefix };
    });
  if (!listItems.length) { return; }

  builder.openList({
    interRowLineBreaks: 1,
    leadingLineBreaks: isNestedList ? 1 : (formatOptions.leadingLineBreaks || 2),
    maxPrefixLength: maxPrefixLength,
    prefixAlign: 'left'
  });

  for (const { node, prefix } of listItems) {
    builder.openListItem({ prefix: prefix });
    walk([node], builder);
    builder.closeListItem();
  }

  builder.closeList({ trailingLineBreaks: isNestedList ? 1 : (formatOptions.trailingLineBreaks || 2) });
}

/**
 * Process an unordered list.
 *
 * @type { FormatCallback }
 */
function formatUnorderedList (elem, walk, builder, formatOptions) {
  const prefix = formatOptions.itemPrefix || ' * ';
  return formatList(elem, walk, builder, formatOptions, () => prefix);
}

/**
 * Process an ordered list.
 *
 * @type { FormatCallback }
 */
function formatOrderedList (elem, walk, builder, formatOptions) {
  let nextIndex = Number(elem.attribs.start || '1');
  const indexFunction = getOrderedListIndexFunction(elem.attribs.type);
  const nextPrefixCallback = () => ' ' + indexFunction(nextIndex++) + '. ';
  return formatList(elem, walk, builder, formatOptions, nextPrefixCallback);
}

/**
 * Return a function that can be used to generate index markers of a specified format.
 *
 * @param   { string } [olType='1'] Marker type.
 * @returns { (i: number) => string }
 */
function getOrderedListIndexFunction (olType = '1') {
  switch (olType) {
    case 'a': return (i) => numberToLetterSequence(i, 'a');
    case 'A': return (i) => numberToLetterSequence(i, 'A');
    case 'i': return (i) => numberToRoman(i).toLowerCase();
    case 'I': return (i) => numberToRoman(i);
    case '1':
    default: return (i) => (i).toString();
  }
}

/**
 * Given a list of class and ID selectors (prefixed with '.' and '#'),
 * return them as separate lists of names without prefixes.
 *
 * @param { string[] } selectors Class and ID selectors (`[".class", "#id"]` etc).
 * @returns { { classes: string[], ids: string[] } }
 */
function splitClassesAndIds (selectors) {
  const classes = [];
  const ids = [];
  for (const selector of selectors) {
    if (selector.startsWith('.')) {
      classes.push(selector.substring(1));
    } else if (selector.startsWith('#')) {
      ids.push(selector.substring(1));
    }
  }
  return { classes: classes, ids: ids };
}

function isDataTable (attr, tables) {
  if (tables === true) { return true; }
  if (!attr) { return false; }

  const { classes, ids } = splitClassesAndIds(tables);
  const attrClasses = (attr['class'] || '').split(' ');
  const attrIds = (attr['id'] || '').split(' ');

  return attrClasses.some(x => classes.includes(x)) || attrIds.some(x => ids.includes(x));
}

/**
 * Process a table (either as a container or as a data table, depending on options).
 *
 * @type { FormatCallback }
 */
function formatTable (elem, walk, builder, formatOptions) {
  return isDataTable(elem.attribs, builder.options.tables)
    ? formatDataTable(elem, walk, builder, formatOptions)
    : formatBlock(elem, walk, builder, formatOptions);
}

function formatBlock (elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks });
}

/**
 * Process a data table.
 *
 * @type { FormatCallback }
 */
function formatDataTable (elem, walk, builder, formatOptions) {
  builder.openTable();
  elem.children.forEach(walkTable);
  builder.closeTable({
    tableToString: (rows) => tableToString(rows, formatOptions.rowSpacing ?? 0, formatOptions.colSpacing ?? 3),
    leadingLineBreaks: formatOptions.leadingLineBreaks,
    trailingLineBreaks: formatOptions.trailingLineBreaks
  });

  function formatCell (cellNode) {
    const colspan = +get(cellNode, ['attribs', 'colspan']) || 1;
    const rowspan = +get(cellNode, ['attribs', 'rowspan']) || 1;
    builder.openTableCell({ maxColumnWidth: formatOptions.maxColumnWidth });
    walk(cellNode.children, builder);
    builder.closeTableCell({ colspan: colspan, rowspan: rowspan });
  }

  function walkTable (elem) {
    if (elem.type !== 'tag') { return; }

    const formatHeaderCell = (formatOptions.uppercaseHeaderCells !== false)
      ? (cellNode) => {
        builder.pushWordTransform(str => str.toUpperCase());
        formatCell(cellNode);
        builder.popWordTransform();
      }
      : formatCell;

    switch (elem.name) {
      case 'thead':
      case 'tbody':
      case 'tfoot':
      case 'center':
        elem.children.forEach(walkTable);
        return;

      case 'tr': {
        builder.openTableRow();
        for (const childOfTr of elem.children) {
          if (childOfTr.type !== 'tag') { continue; }
          switch (childOfTr.name) {
            case 'th': {
              formatHeaderCell(childOfTr);
              break;
            }
            case 'td': {
              formatCell(childOfTr);
              break;
            }
              // do nothing
          }
        }
        builder.closeTableRow();
        break;
      }
        // do nothing
    }
  }
}

var textFormatters = /*#__PURE__*/Object.freeze({
  __proto__: null,
  anchor: formatAnchor,
  blockquote: formatBlockquote,
  dataTable: formatDataTable,
  heading: formatHeading,
  horizontalLine: formatHorizontalLine,
  image: formatImage,
  lineBreak: formatLineBreak,
  orderedList: formatOrderedList,
  paragraph: formatParagraph,
  pre: formatPre,
  table: formatTable,
  unorderedList: formatUnorderedList,
  wbr: formatWbr
});

/**
 * Default options.
 *
 * @constant
 * @type { Options }
 * @default
 * @private
 */
const DEFAULT_OPTIONS = {
  baseElements: {
    selectors: [ 'body' ],
    orderBy: 'selectors', // 'selectors' | 'occurrence'
    returnDomByDefault: true
  },
  decodeEntities: true,
  encodeCharacters: {},
  formatters: {},
  limits: {
    ellipsis: '...',
    maxBaseElements: undefined,
    maxChildNodes: undefined,
    maxDepth: undefined,
    maxInputLength: (1 << 24) // 16_777_216
  },
  longWordSplit: {
    forceWrapOnLimit: false,
    wrapCharacters: []
  },
  preserveNewlines: false,
  selectors: [
    { selector: '*', format: 'inline' },
    {
      selector: 'a',
      format: 'anchor',
      options: {
        baseUrl: null,
        hideLinkHrefIfSameAsText: false,
        ignoreHref: false,
        linkBrackets: ['[', ']'],
        noAnchorUrl: true
      }
    },
    { selector: 'article', format: 'block', options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: 'aside', format: 'block', options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    {
      selector: 'blockquote',
      format: 'blockquote',
      options: { leadingLineBreaks: 2, trailingLineBreaks: 2, trimEmptyLines: true }
    },
    { selector: 'br', format: 'lineBreak' },
    { selector: 'div', format: 'block', options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: 'footer', format: 'block', options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: 'form', format: 'block', options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: 'h1', format: 'heading', options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
    { selector: 'h2', format: 'heading', options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
    { selector: 'h3', format: 'heading', options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
    { selector: 'h4', format: 'heading', options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
    { selector: 'h5', format: 'heading', options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
    { selector: 'h6', format: 'heading', options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
    { selector: 'header', format: 'block', options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    {
      selector: 'hr',
      format: 'horizontalLine',
      options: { leadingLineBreaks: 2, length: undefined, trailingLineBreaks: 2 }
    },
    {
      selector: 'img',
      format: 'image',
      options: { baseUrl: null, linkBrackets: ['[', ']'] }
    },
    { selector: 'main', format: 'block', options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: 'nav', format: 'block', options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    {
      selector: 'ol',
      format: 'orderedList',
      options: { leadingLineBreaks: 2, trailingLineBreaks: 2 }
    },
    { selector: 'p', format: 'paragraph', options: { leadingLineBreaks: 2, trailingLineBreaks: 2 } },
    { selector: 'pre', format: 'pre', options: { leadingLineBreaks: 2, trailingLineBreaks: 2 } },
    { selector: 'section', format: 'block', options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    {
      selector: 'table',
      format: 'table',
      options: {
        colSpacing: 3,
        leadingLineBreaks: 2,
        maxColumnWidth: 60,
        rowSpacing: 0,
        trailingLineBreaks: 2,
        uppercaseHeaderCells: true
      }
    },
    {
      selector: 'ul',
      format: 'unorderedList',
      options: { itemPrefix: ' * ', leadingLineBreaks: 2, trailingLineBreaks: 2 }
    },
    { selector: 'wbr', format: 'wbr' },
  ],
  tables: [], // deprecated
  whitespaceCharacters: ' \t\r\n\f\u200b',
  wordwrap: 80
};

const concatMerge = (acc, src, options) => [...acc, ...src];
const overwriteMerge = (acc, src, options) => [...src];
const selectorsMerge = (acc, src, options) => (
  (acc.some(s => typeof s === 'object'))
    ? concatMerge(acc, src) // selectors
    : overwriteMerge(acc, src) // baseElements.selectors
);

/**
 * Preprocess options, compile selectors into a decision tree,
 * return a function intended for batch processing.
 *
 * @param   { Options } [options = {}]   HtmlToText options.
 * @returns { (html: string, metadata?: any) => string } Pre-configured converter function.
 * @static
 */
function compile (options = {}) {
  options = cjs(
    DEFAULT_OPTIONS,
    options,
    {
      arrayMerge: overwriteMerge,
      customMerge: (key) => ((key === 'selectors') ? selectorsMerge : undefined)
    }
  );
  options.formatters = Object.assign({}, genericFormatters, textFormatters, options.formatters);
  options.selectors = mergeDuplicatesPreferLast(options.selectors, (s => s.selector));

  handleDeprecatedOptions(options);

  return compile$1(options);
}

/**
 * Convert given HTML content to plain text string.
 *
 * @param   { string }  html           HTML content to convert.
 * @param   { Options } [options = {}] HtmlToText options.
 * @param   { any }     [metadata]     Optional metadata for HTML document, for use in formatters.
 * @returns { string }                 Plain text string.
 * @static
 *
 * @example
 * const { convert } = require('html-to-text');
 * const text = convert('<h1>Hello World</h1>', {
 *   wordwrap: 130
 * });
 * console.log(text); // HELLO WORLD
 */
function convert (html, options = {}, metadata = undefined) {
  return compile(options)(html, metadata);
}

/**
 * Map previously existing and now deprecated options to the new options layout.
 * This is a subject for cleanup in major releases.
 *
 * @param { Options } options HtmlToText options.
 */
function handleDeprecatedOptions (options) {
  if (options.tags) {
    const tagDefinitions = Object.entries(options.tags).map(
      ([selector, definition]) => ({ ...definition, selector: selector || '*' })
    );
    options.selectors.push(...tagDefinitions);
    options.selectors = mergeDuplicatesPreferLast(options.selectors, (s => s.selector));
  }

  function set (obj, path, value) {
    const valueKey = path.pop();
    for (const key of path) {
      let nested = obj[key];
      if (!nested) {
        nested = {};
        obj[key] = nested;
      }
      obj = nested;
    }
    obj[valueKey] = value;
  }

  if (options['baseElement']) {
    const baseElement = options['baseElement'];
    set(
      options,
      ['baseElements', 'selectors'],
      (Array.isArray(baseElement) ? baseElement : [baseElement])
    );
  }
  if (options['returnDomByDefault'] !== undefined) {
    set(options, ['baseElements', 'returnDomByDefault'], options['returnDomByDefault']);
  }

  for (const definition of options.selectors) {
    if (definition.format === 'anchor' && get(definition, ['options', 'noLinkBrackets'])) {
      set(definition, ['options', 'linkBrackets'], false);
    }
  }
}



// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47919);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(13687);
// EXTERNAL MODULE: external "node:stream"
var external_node_stream_ = __webpack_require__(57075);
;// CONCATENATED MODULE: ./node_modules/@react-email/render/dist/node/index.mjs







//#region src/shared/utils/pretty.ts
function recursivelyMapDoc(doc, callback) {
	if (Array.isArray(doc)) return doc.map((innerDoc) => recursivelyMapDoc(innerDoc, callback));
	if (typeof doc === "object") {
		if (doc.type === "group") return {
			...doc,
			contents: recursivelyMapDoc(doc.contents, callback),
			expandedStates: recursivelyMapDoc(doc.expandedStates, callback)
		};
		if ("contents" in doc) return {
			...doc,
			contents: recursivelyMapDoc(doc.contents, callback)
		};
		if ("parts" in doc) return {
			...doc,
			parts: recursivelyMapDoc(doc.parts, callback)
		};
		if (doc.type === "if-break") return {
			...doc,
			breakContents: recursivelyMapDoc(doc.breakContents, callback),
			flatContents: recursivelyMapDoc(doc.flatContents, callback)
		};
	}
	return callback(doc);
}
const modifiedHtml = { ...html_namespaceObject };
if (modifiedHtml.printers) {
	const previousPrint = modifiedHtml.printers.html.print;
	modifiedHtml.printers.html.print = (path, options, print, args) => {
		const node = path.getNode();
		const rawPrintingResult = previousPrint(path, options, print, args);
		if (node.type === "ieConditionalComment") return recursivelyMapDoc(rawPrintingResult, (doc) => {
			if (typeof doc === "object" && doc.type === "line") return doc.soft ? "" : " ";
			return doc;
		});
		return rawPrintingResult;
	};
}
const defaults = {
	endOfLine: "lf",
	tabWidth: 2,
	plugins: [modifiedHtml],
	bracketSameLine: true,
	parser: "html"
};
const pretty = (str, options = {}) => {
	return standalone_Jn(str.replaceAll("\0", ""), {
		...defaults,
		...options
	});
};

//#endregion
//#region src/shared/utils/to-plain-text.ts
const plainTextSelectors = [
	{
		selector: "img",
		format: "skip"
	},
	{
		selector: "[data-skip-in-text=true]",
		format: "skip"
	},
	{
		selector: "a",
		options: {
			linkBrackets: false,
			hideLinkHrefIfSameAsText: true
		}
	}
];
function toPlainText(html$1, options) {
	return convert(html$1, {
		wordwrap: false,
		...options,
		selectors: [...plainTextSelectors, ...options?.selectors ?? []]
	});
}

//#endregion
//#region src/shared/error-boundary.tsx
function createErrorBoundary(reject) {
	if (!react.Component) return (props) => /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: props.children });
	return class ErrorBoundary extends react.Component {
		componentDidCatch(error) {
			reject(error);
		}
		render() {
			return this.props.children;
		}
	};
}

//#endregion
//#region src/node/read-stream.ts
const readStream = async (stream) => {
	let result = "";
	const decoder = new TextDecoder("utf-8");
	if ("pipeTo" in stream) {
		const writableStream = new WritableStream({
			write(chunk) {
				result += decoder.decode(chunk, { stream: true });
			},
			close() {
				result += decoder.decode();
			}
		});
		await stream.pipeTo(writableStream);
	} else {
		const writable = new external_node_stream_.Writable({
			write(chunk, _encoding, callback) {
				result += decoder.decode(chunk, { stream: true });
				callback();
			},
			final(callback) {
				result += decoder.decode();
				callback();
			}
		});
		await new Promise((resolve, reject) => {
			writable.on("pipe", (source) => {
				source.on("error", (err) => {
					writable.destroy(err);
				});
			});
			writable.on("error", reject);
			writable.on("close", () => {
				resolve();
			});
			stream.pipe(writable);
		});
	}
	return result;
};

//#endregion
//#region src/node/render.tsx
const node_render = async (node, options) => {
	const reactDOMServer = await __webpack_require__.e(/* import() */ 409).then(__webpack_require__.t.bind(__webpack_require__, 47409, 19)).then((m) => {
		if ("default" in m) return m.default;
		return m;
	});
	let html$1;
	await new Promise((resolve, reject) => {
		if (Object.hasOwn(reactDOMServer, "renderToReadableStream") && typeof WritableStream !== "undefined") {
			const ErrorBoundary = createErrorBoundary(reject);
			reactDOMServer.renderToReadableStream(/* @__PURE__ */ (0,jsx_runtime.jsx)(ErrorBoundary, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react.Suspense, { children: node }) }), {
				progressiveChunkSize: Number.POSITIVE_INFINITY,
				onError(error) {
					throw error;
				}
			}).then((stream) => readStream(stream)).then((result) => {
				html$1 = result;
				resolve();
			}).catch(reject);
		} else {
			const ErrorBoundary = createErrorBoundary(reject);
			const stream = reactDOMServer.renderToPipeableStream(/* @__PURE__ */ (0,jsx_runtime.jsx)(ErrorBoundary, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react.Suspense, { children: node }) }), {
				async onAllReady() {
					html$1 = await readStream(stream);
					resolve();
				},
				onError(error) {
					reject(error);
				},
				progressiveChunkSize: Number.POSITIVE_INFINITY
			});
		}
	});
	if (options?.plainText) return toPlainText(html$1, options.htmlToTextOptions);
	const document = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">${html$1.replace(/<!DOCTYPE.*?>/, "")}`;
	if (options?.pretty) return pretty(document);
	return document;
};

//#endregion

//# sourceMappingURL=index.mjs.map

/***/ })

};
