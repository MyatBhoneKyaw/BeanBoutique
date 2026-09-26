/**
 * Fuse.js v7.1.0 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2025 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
var e,t;e=this,t=function(){"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function u(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function h(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e){return Array.isArray?Array.isArray(e):"[object Array]"===M(e)}var y=1/0;function p(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-y?"-0":t}(e)}function A(e){return"string"==typeof e}function m(e){return"number"==typeof e}function C(e){return!0===e||!1===e||function(e){return k(e)&&null!==e}(e)&&"[object Boolean]"==M(e)}function k(e){return"object"===n(e)}function E(e){return null!=e}function F(e){return!e.trim().length}function M(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}var b=function(e){return"Missing ".concat(e," property in key")},D=function(e){return"Property 'weight' in key '".concat(e,"' must be a positive integer")},B=Object.prototype.hasOwnProperty,x=function(){function e(t){var n=this;r(this,e),this._keys=[],this._keyMap={};var i=0;t.forEach((function(e){var t=w(e);n._keys.push(t),n._keyMap[t.id]=t,i+=t.weight})),this._keys.forEach((function(e){e.weight/=i}))}return u(e,[{key:"get",value:function(e){return this._keyMap[e]}},{key:"keys",value:function(){return this._keys}},{key:"toJSON",value:function(){return JSON.stringify(this._keys)}}]),e}();function w(e){var t=null,n=null,r=null,i=1,u=null;if(A(e)||g(e))r=e,t=S(e),n=L(e);else{if(!B.call(e,"name"))throw new Error(b("name"));var o=e.name;if(r=o,B.call(e,"weight")&&(i=e.weight)<=0)throw new Error(D(o));t=S(o),n=L(o),u=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:u}}function S(e){return g(e)?e:e.split(".")}function L(e){return g(e)?e.join("."):e}var _={useExtendedSearch:!1,getFn:function(e,t){var n=[],r=!1;return function e(t,i,u){if(E(t))if(i[u]){var o=t[i[u]];if(!E(o))return;if(u===i.length-1&&(A(o)||m(o)||C(o)))n.push(p(o));else if(g(o)){r=!0;for(var c=0,a=o.length;c<a;c+=1)e(o[c],i,u+1)}else i.length&&e(o,i,u+1)}else n.push(t)}(e,A(t)?t.split("."):t,0),r?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},O=t(t(t(t({},{isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:function(e,t){return e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1}}),{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1}),{location:0,threshold:.6,distance:100}),_),j=/[^ ]+/g,I=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.getFn,i=void 0===n?O.getFn:n,u=t.fieldNormWeight,o=void 0===u?O.fieldNormWeight:u;r(this,e),this.norm=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=new Map,r=Math.pow(10,t);return{get:function(t){var i=t.match(j).length;if(n.has(i))return n.get(i);var u=1/Math.pow(i,.5*e),o=parseFloat(Math.round(u*r)/r);return n.set(i,o),o},clear:function(){n.clear()}}}(o,3),this.getFn=i,this.isCreated=!1,this.setIndexRecords()}return u(e,[{key:"setSources",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.docs=e}},{key:"setIndexRecords",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.records=e}},{key:"setKeys",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.keys=t,this._keysMap={},t.forEach((function(t,n){e._keysMap[t.id]=n}))}},{key:"create",value:function(){var e=this;!this.isCreated&&this.docs.length&&(this.isCreated=!0,A(this.docs[0])?this.docs.forEach((function(t,n){e._addString(t,n)})):this.docs.forEach((function(t,n){e._addObject(t,n)})),this.norm.clear())}},{key:"add",value:function(e){var t=this.size();A(e)?this._addString(e,t):this._addObject(e,t)}},{key:"removeAt",value:function(e){this.records.splice(e,1);for(var t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}},{key:"getValueForItemAtKeyId",value:function(e,t){return e[this._keysMap[t]]}},{key:"size",value:function(){return this.records.length}},{key:"_addString",value:function(e,t){if(E(e)&&!F(e)){var n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}}},{key:"_addObject",value:function(e,t){var n=this,r={i:t,$:{}};this.keys.forEach((function(t,i){var u=t.getFn?t.getFn(e):n.getFn(e,t.path);if(E(u))if(g(u)){for(var o=[],c=[{nestedArrIndex:-1,value:u}];c.length;){var a=c.pop(),s=a.nestedArrIndex,h=a.value;if(E(h))if(A(h)&&!F(h)){var l={v:h,i:s,n:n.norm.get(h)};o.push(l)}else g(h)&&h.forEach((function(e,t){c.push({nestedArrIndex:t,value:e})}))}r.$[i]=o}else if(A(u)&&!F(u)){var f={v:u,n:n.norm.get(u)};r.$[i]=f}})),this.records.push(r)}},{key:"toJSON",value:function(){return{keys:this.keys,records:this.records}}}]),e}();function $(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.getFn,i=void 0===r?O.getFn:r,u=n.fieldNormWeight,o=void 0===u?O.fieldNormWeight:u,c=new I({getFn:i,fieldNormWeight:o});return c.setKeys(e.map(w)),c.setSources(t),c.create(),c}function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errors,r=void 0===n?0:n,i=t.currentLocation,u=void 0===i?0:i,o=t.expectedLocation,c=void 0===o?0:o,a=t.distance,s=void 0===a?O.distance:a,h=t.ignoreLocation,l=void 0===h?O.ignoreLocation:h,f=r/e.length;if(l)return f;var d=Math.abs(c-u);return s?f+d/s:d?1:f}var N=32;function P(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.location,u=void 0===i?O.location:i,o=r.distance,c=void 0===o?O.distance:o,a=r.threshold,s=void 0===a?O.threshold:a,h=r.findAllMatches,l=void 0===h?O.findAllMatches:h,f=r.minMatchCharLength,d=void 0===f?O.minMatchCharLength:f,v=r.includeMatches,g=void 0===v?O.includeMatches:v,y=r.ignoreLocation,p=void 0===y?O.ignoreLocation:y;if(t.length>N)throw new Error("Pattern length exceeds max of ".concat(N,"."));for(var A,m=t.length,C=e.length,k=Math.max(0,Math.min(u,C)),E=s,F=k,M=d>1||g,b=M?Array(C):[];(A=e.indexOf(t,F))>-1;){var D=R(t,{currentLocation:A,expectedLocation:k,distance:c,ignoreLocation:p});if(E=Math.min(D,E),F=A+m,M)for(var B=0;B<m;)b[A+B]=1,B+=1}F=-1;for(var x=[],w=1,S=m+C,L=1<<m-1,_=0;_<m;_+=1){for(var j=0,I=S;j<I;)R(t,{errors:_,currentLocation:k+I,expectedLocation:k,distance:c,ignoreLocation:p})<=E?j=I:S=I,I=Math.floor((S-j)/2+j);S=I;var $=Math.max(1,k-I+1),P=l?C:Math.min(k+I,C)+m,W=Array(P+2);W[P+1]=(1<<_)-1;for(var z=P;z>=$;z-=1){var T=z-1,K=n[e.charAt(T)];if(M&&(b[T]=+!!K),W[z]=(W[z+1]<<1|1)&K,_&&(W[z]|=(x[z+1]|x[z])<<1|1|x[z+1]),W[z]&L&&(w=R(t,{errors:_,currentLocation:T,expectedLocation:k,distance:c,ignoreLocation:p}))<=E){if(E=w,(F=T)<=k)break;$=Math.max(1,2*k-F)}}if(R(t,{errors:_+1,currentLocation:k,expectedLocation:k,distance:c,ignoreLocation:p})>E)break;x=W}var q={isMatch:F>=0,score:Math.max(.001,w)};if(M){var J=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.minMatchCharLength,n=[],r=-1,i=-1,u=0,o=e.length;u<o;u+=1){var c=e[u];c&&-1===r?r=u:c||-1===r||((i=u-1)-r+1>=t&&n.push([r,i]),r=-1)}return e[u-1]&&u-r>=t&&n.push([r,u-1]),n}(b,d);J.length?g&&(q.indices=J):q.isMatch=!1}return q}function W(e){for(var t={},n=0,r=e.length;n<r;n+=1){var i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}var z=String.prototype.normalize?function(e){return e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")}:function(e){return e},T=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=i.location,o=void 0===u?O.location:u,c=i.threshold,a=void 0===c?O.threshold:c,s=i.distance,h=void 0===s?O.distance:s,l=i.includeMatches,f=void 0===l?O.includeMatches:l,d=i.findAllMatches,v=void 0===d?O.findAllMatches:d,g=i.minMatchCharLength,y=void 0===g?O.minMatchCharLength:g,p=i.isCaseSensitive,A=void 0===p?O.isCaseSensitive:p,m=i.ignoreDiacritics,C=void 0===m?O.ignoreDiacritics:m,k=i.ignoreLocation,E=void 0===k?O.ignoreLocation:k;if(r(this,e),this.options={location:o,threshold:a,distance:h,includeMatches:f,findAllMatches:v,minMatchCharLength:y,isCaseSensitive:A,ignoreDiacritics:C,ignoreLocation:E},t=A?t:t.toLowerCase(),t=C?z(t):t,this.pattern=t,this.chunks=[],this.pattern.length){var F=function(e,t){n.chunks.push({pattern:e,alphabet:W(e),startIndex:t})},M=this.pattern.length;if(M>N){for(var b=0,D=M%N,B=M-D;b<B;)F(this.pattern.substr(b,N),b),b+=N;if(D){var x=M-N;F(this.pattern.substr(x),x)}}else F(this.pattern,0)}}return u(e,[{key:"searchIn",value:function(e){var t=this.options,n=t.isCaseSensitive,r=t.ignoreDiacritics,i=t.includeMatches;if(e=n?e:e.toLowerCase(),e=r?z(e):e,this.pattern===e){var u={isMatch:!0,score:0};return i&&(u.indices=[[0,e.length-1]]),u}var o=this.options,c=o.location,a=o.distance,s=o.threshold,h=o.findAllMatches,l=o.minMatchCharLength,d=o.ignoreLocation,v=[],g=0,y=!1;this.chunks.forEach((function(t){var n=t.pattern,r=t.alphabet,u=t.startIndex,o=P(e,n,r,{location:c+u,distance:a,threshold:s,findAllMatches:h,minMatchCharLength:l,includeMatches:i,ignoreLocation:d}),p=o.isMatch,A=o.score,m=o.indices;p&&(y=!0),g+=A,p&&m&&(v=[].concat(f(v),f(m)))}));var p={isMatch:y,score:y?g/this.chunks.length:1};return y&&i&&(p.indices=v),p}}]),e}(),K=function(){function e(t){r(this,e),this.pattern=t}return u(e,[{key:"search",value:function(){}}],[{key:"isMultiMatch",value:function(e){return q(e,this.multiRegex)}},{key:"isSingleMatch",value:function(e){return q(e,this.singleRegex)}}]),e}();function q(e,t){var n=e.match(t);return n?n[1]:null}var J=function(e){c(n,e);var t=l(n);function n(e){return r(this,n),t.call(this,e)}return u(n,[{key:"search",value:function(e){var t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}],[{key:"type",get:function(){return"exact"}},{key:"multiRegex",get:function(){return/^="(.*)"$/}},{key:"singleRegex",get:function(){return/^=(.*)$/}}]),n}(K),U=function(e){c(n,e);var t=l(n);function n(e){return r(this,n),t.call(this,e)}return u(n,[{key:"search",value:function(e){var t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"$/}},{key:"singleRegex",get:function(){return/^!(.*)$/}}]),n}(K),V=function(e){c(n,e);var t=l(n);function n(e){return r(this,n),t.call(this,e)}return u(n,[{key:"search",value:function(e){var t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}],[{key:"type",get:function(){return"prefix-exact"}},{key:"multiRegex",get:function(){return/^\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^\^(.*)$/}}]),n}(K),G=function(e){c(n,e);var t=l(n);function n(e){return r(this,n),t.call(this,e)}return u(n,[{key:"search",value:function(e){var t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-prefix-exact"}},{key:"multiRegex",get:function(){return/^!\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^!\^(.*)$/}}]),n}(K),H=function(e){c(n,e);var t=l(n);function n(e){return r(this,n),t.call(this,e)}return u(n,[{key:"search",value:function(e){var t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}],[{key:"type",get:function(){return"suffix-exact"}},{key:"multiRegex",get:function(){return/^"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^(.*)\$$/}}]),n}(K),Q=function(e){c(n,e);var t=l(n);function n(e){return r(this,n),t.call(this,e)}return u(n,[{key:"search",value:function(e){var t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-suffix-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^!(.*)\$$/}}]),n}(K),X=function(e){c(n,e);var t=l(n);function n(e){var i,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=u.location,c=void 0===o?O.location:o,a=u.threshold,s=void 0===a?O.threshold:a,h=u.distance,l=void 0===h?O.distance:h,f=u.includeMatches,d=void 0===f?O.includeMatches:f,v=u.findAllMatches,g=void 0===v?O.findAllMatches:v,y=u.minMatchCharLength,p=void 0===y?O.minMatchCharLength:y,A=u.isCaseSensitive,m=void 0===A?O.isCaseSensitive:A,C=u.ignoreDiacritics,k=void 0===C?O.ignoreDiacritics:C,E=u.ignoreLocation,F=void 0===E?O.ignoreLocation:E;return r(this,n),(i=t.call(this,e))._bitapSearch=new T(e,{location:c,threshold:s,distance:l,includeMatches:d,findAllMatches:g,minMatchCharLength:p,isCaseSensitive:m,ignoreDiacritics:k,ignoreLocation:F}),i}return u(n,[{key:"search",value:function(e){return this._bitapSearch.searchIn(e)}}],[{key:"type",get:function(){return"fuzzy"}},{key:"multiRegex",get:function(){return/^"(.*)"$/}},{key:"singleRegex",get:function(){return/^(.*)$/}}]),n}(K),Y=function(e){c(n,e);var t=l(n);function n(e){return r(this,n),t.call(this,e)}return u(n,[{key:"search",value:function(e){for(var t,n=0,r=[],i=this.pattern.length;(t=e.indexOf(this.pattern,n))>-1;)n=t+i,r.push([t,n-1]);var u=!!r.length;return{isMatch:u,score:u?0:1,indices:r}}}],[{key:"type",get:function(){return"include"}},{key:"multiRegex",get:function(){return/^'"(.*)"$/}},{key:"singleRegex",get:function(){return/^'(.*)$/}}]),n}(K),Z=[J,Y,V,G,Q,H,U,X],ee=Z.length,te=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ne=new Set([X.type,Y.type]),re=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.isCaseSensitive,u=void 0===i?O.isCaseSensitive:i,o=n.ignoreDiacritics,c=void 0===o?O.ignoreDiacritics:o,a=n.includeMatches,s=void 0===a?O.includeMatches:a,h=n.minMatchCharLength,l=void 0===h?O.minMatchCharLength:h,f=n.ignoreLocation,d=void 0===f?O.ignoreLocation:f,v=n.findAllMatches,g=void 0===v?O.findAllMatches:v,y=n.location,p=void 0===y?O.location:y,A=n.threshold,m=void 0===A?O.threshold:A,C=n.distance,k=void 0===C?O.distance:C;r(this,e),this.query=null,this.options={isCaseSensitive:u,ignoreDiacritics:c,includeMatches:s,minMatchCharLength:l,findAllMatches:g,ignoreLocation:d,location:p,threshold:m,distance:k},t=u?t:t.toLowerCase(),t=c?z(t):t,this.pattern=t,this.query=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.split("|").map((function(e){for(var n=e.trim().split(te).filter((function(e){return e&&!!e.trim()})),r=[],i=0,u=n.length;i<u;i+=1){for(var o=n[i],c=!1,a=-1;!c&&++a<ee;){var s=Z[a],h=s.isMultiMatch(o);h&&(r.push(new s(h,t)),c=!0)}if(!c)for(a=-1;++a<ee;){var l=Z[a],f=l.isSingleMatch(o);if(f){r.push(new l(f,t));break}}}return r}))}(this.pattern,this.options)}return u(e,[{key:"searchIn",value:function(e){var t=this.query;if(!t)return{isMatch:!1,score:1};var n=this.options,r=n.includeMatches,i=n.isCaseSensitive,u=n.ignoreDiacritics;e=i?e:e.toLowerCase(),e=u?z(e):e;for(var o=0,c=[],a=0,s=0,h=t.length;s<h;s+=1){var l=t[s];c.length=0,o=0;for(var d=0,v=l.length;d<v;d+=1){var g=l[d],y=g.search(e),p=y.isMatch,A=y.indices,m=y.score;if(!p){a=0,o=0,c.length=0;break}if(o+=1,a+=m,r){var C=g.constructor.type;ne.has(C)?c=[].concat(f(c),f(A)):c.push(A)}}if(o){var k={isMatch:!0,score:a/o};return r&&(k.indices=c),k}}return{isMatch:!1,score:1}}}],[{key:"condition",value:function(e,t){return t.useExtendedSearch}}]),e}(),ie=[];function ue(e,t){for(var n=0,r=ie.length;n<r;n+=1){var i=ie[n];if(i.condition(e,t))return new i(e,t)}return new T(e,t)}var oe="$and",ce="$or",ae="$path",se="$val",he=function(e){return!(!e[oe]&&!e[ce])},le=function(e){return o({},oe,Object.keys(e).map((function(t){return o({},t,e[t])})))};function fe(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).auto,r=void 0===n||n;return he(e)||(e=le(e)),function e(n){var i=Object.keys(n),u=function(e){return!!e[ae]}(n);if(!u&&i.length>1&&!he(n))return e(le(n));if(function(e){return!g(e)&&k(e)&&!he(e)}(n)){var o=u?n[ae]:i[0],c=u?n[se]:n[o];if(!A(c))throw new Error(function(e){return"Invalid value for key ".concat(e)}(o));var a={keyId:L(o),pattern:c};return r&&(a.searcher=ue(c,t)),a}var s={children:[],operator:i[0]};return i.forEach((function(t){var r=n[t];g(r)&&r.forEach((function(t){s.children.push(e(t))}))})),s}(e)}function de(e,t){var n=e.matches;t.matches=[],E(n)&&n.forEach((function(e){if(E(e.indices)&&e.indices.length){var n={indices:e.indices,value:e.value};e.key&&(n.key=e.key.src),e.idx>-1&&(n.refIndex=e.idx),t.matches.push(n)}}))}function ve(e,t){t.score=e.score}var ge=function(){function e(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=arguments.length>2?arguments[2]:void 0;r(this,e),this.options=t(t({},O),i),this.options.useExtendedSearch,this._keyStore=new x(this.options.keys),this.setCollection(n,u)}return u(e,[{key:"setCollection",value:function(e,t){if(this._docs=e,t&&!(t instanceof I))throw new Error("Incorrect 'index' type");this._myIndex=t||$(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}},{key:"add",value:function(e){E(e)&&(this._docs.push(e),this._myIndex.add(e))}},{key:"remove",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1},t=[],n=0,r=this._docs.length;n<r;n+=1){var i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,t.push(i))}return t}},{key:"removeAt",value:function(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}},{key:"getIndex",value:function(){return this._myIndex}},{key:"search",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).limit,n=void 0===t?-1:t,r=this.options,i=r.includeMatches,u=r.includeScore,o=r.shouldSort,c=r.sortFn,a=r.ignoreFieldNorm,s=A(e)?A(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,t){var n=t.ignoreFieldNorm,r=void 0===n?O.ignoreFieldNorm:n;e.forEach((function(e){var t=1;e.matches.forEach((function(e){var n=e.key,i=e.norm,u=e.score,o=n?n.weight:null;t*=Math.pow(0===u&&o?Number.EPSILON:u,(o||1)*(r?1:i))})),e.score=t}))}(s,{ignoreFieldNorm:a}),o&&s.sort(c),m(n)&&n>-1&&(s=s.slice(0,n)),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.includeMatches,i=void 0===r?O.includeMatches:r,u=n.includeScore,o=void 0===u?O.includeScore:u,c=[];return i&&c.push(de),o&&c.push(ve),e.map((function(e){var n=e.idx,r={item:t[n],refIndex:n};return c.length&&c.forEach((function(t){t(e,r)})),r}))}(s,this._docs,{includeMatches:i,includeScore:u})}},{key:"_searchStringList",value:function(e){var t=ue(e,this.options),n=this._myIndex.records,r=[];return n.forEach((function(e){var n=e.v,i=e.i,u=e.n;if(E(n)){var o=t.searchIn(n),c=o.isMatch,a=o.score,s=o.indices;c&&r.push({item:n,idx:i,matches:[{score:a,value:n,norm:u,indices:s}]})}})),r}},{key:"_searchLogical",value:function(e){var t=this,n=fe(e,this.options),r=function e(n,r,i){if(!n.children){var u=n.keyId,o=n.searcher,c=t._findMatches({key:t._keyStore.get(u),value:t._myIndex.getValueForItemAtKeyId(r,u),searcher:o});return c&&c.length?[{idx:i,item:r,matches:c}]:[]}for(var a=[],s=0,h=n.children.length;s<h;s+=1){var l=e(n.children[s],r,i);if(l.length)a.push.apply(a,f(l));else if(n.operator===oe)return[]}return a},i=this._myIndex.records,u={},o=[];return i.forEach((function(e){var t=e.$,i=e.i;if(E(t)){var c=r(n,t,i);c.length&&(u[i]||(u[i]={idx:i,item:t,matches:[]},o.push(u[i])),c.forEach((function(e){var t,n=e.matches;(t=u[i].matches).push.apply(t,f(n))})))}})),o}},{key:"_searchObjectList",value:function(e){var t=this,n=ue(e,this.options),r=this._myIndex,i=r.keys,u=r.records,o=[];return u.forEach((function(e){var r=e.$,u=e.i;if(E(r)){var c=[];i.forEach((function(e,i){c.push.apply(c,f(t._findMatches({key:e,value:r[i],searcher:n})))})),c.length&&o.push({idx:u,item:r,matches:c})}})),o}},{key:"_findMatches",value:function(e){var t=e.key,n=e.value,r=e.searcher;if(!E(n))return[];var i=[];if(g(n))n.forEach((function(e){var n=e.v,u=e.i,o=e.n;if(E(n)){var c=r.searchIn(n),a=c.isMatch,s=c.score,h=c.indices;a&&i.push({score:s,key:t,value:n,idx:u,norm:o,indices:h})}}));else{var u=n.v,o=n.n,c=r.searchIn(u),a=c.isMatch,s=c.score,h=c.indices;a&&i.push({score:s,key:t,value:u,norm:o,indices:h})}return i}}]),e}();return ge.version="7.1.0",ge.createIndex=$,ge.parseIndex=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getFn,r=void 0===n?O.getFn:n,i=t.fieldNormWeight,u=void 0===i?O.fieldNormWeight:i,o=e.keys,c=e.records,a=new I({getFn:r,fieldNormWeight:u});return a.setKeys(o),a.setIndexRecords(c),a},ge.config=O,function(){ie.push.apply(ie,arguments)}(re),ge},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Fuse=t();
;
/* Bean Boutique — shared application code.
   Teacher concepts: DOM events, arrays, forms, localStorage, filtering and modals.
   Prices are integer US cents. Email uses the visitor's own mail app, not a server.
   Fuse.js (MIT, bundled above) provides the third-party search widget. */
(() => {
  'use strict';
  const REGISTRATION_EMAIL = 'pyae.2255phk@gmail.com';
  const VENUE = 'Strategy First College – Yangon Teaching Centre 1, Myaynigone, Yangon, Myanmar';
  const PRODUCTS = [
  {
    "id": "signature-house-blend",
    "name": "Signature House Blend",
    "price": 3099,
    "img": "image/ArabicaBeanswith_p.png",
    "specs": "Our balanced Arabica and Robusta blend. Tasting notes: cocoa, caramel and roasted nuts. Recommended brewing: espresso or moka pot. Whole beans · 250 g.",
    "categories": [
      "bean",
      "blend",
      "bestseller"
    ]
  },
  {
    "id": "arabica-medium-fine",
    "name": "Arabica (Medium Fine)",
    "price": 1200,
    "img": "image/Arabicapowderwith.png",
    "specs": "Smooth, mild flavor profile with notes of chocolate and caramel Tasting Note - Smooth, balanced, mild acidity with chocolate and nutty notes. Recommended Brewing - Pour-over Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "arabica-powder-fine",
    "name": "Arabica Powder(Fine)",
    "price": 1300,
    "img": "image/Arabicapowderwith.png",
    "specs": "Smooth, mild flavor profile with notes of chocolate and caramel Tasting Note - Stronger body, caramel undertones, slightly bitter. Recommended Brewing - Espresso Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "arabica-powder-extra-fine",
    "name": "Arabica Powder(Extra Fine)",
    "price": 1500,
    "img": "image/Arabicapowderwith.png",
    "specs": "Smooth, mild flavor profile with notes of chocolate and caramel Tasting Note - Rich, velvety, floral hints, sediment texture. Recommended Brewing - Arabic coffee Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "robusta-powder-fine",
    "name": "Robusta powder (Fine)",
    "price": 899,
    "img": "image/Robustapowderwithf.png",
    "specs": "Bold and strong with higher caffeine content, perfect for espresso. Tasting Notes-Bold, bitter, earthy Recommended Brewing-Moka pot Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "robusta-powder-medium",
    "name": "Robusta Powder(medium)",
    "price": 999,
    "img": "image/Robustapowdermedi.png",
    "specs": "Bold and strong with higher caffeine content, perfect for espresso. Tasting Notes-Strong but smoother,with chocolate undertones Recommended Brewing-AeroPress Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "robusta-powder-extra-coarse",
    "name": "Robusta Powder(extra coarse)",
    "price": 1199,
    "img": "image/Robustapowderextr.png",
    "specs": "Bold ground Robusta. Tasting notes: earthy cocoa. Recommended brewing: cold brew. Extra coarse · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "bourbon-powder-fine",
    "name": "Bourbon powder(fine)",
    "price": 1500,
    "img": "image/Bourbonpowderfine.png",
    "specs": "Rare heirloom variety with complex fruity and floral notes. Tasting Notes - Fuller body, caramel undertones, slightly stronger bitterness. Recommended Brewing - Espresso Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "bourbon-powder-medium-coarse",
    "name": "Bourbon powder(medium coarse)",
    "price": 1300,
    "img": "image/Bourbonpowdermedi.png",
    "specs": "Rare heirloom variety with complex fruity and floral notes. Tasting Notes - Nutty, earthy, with lower acidity and a rounder mouthfeel. Recommended Brewing - French press Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "bourbon-powder-medium-fine",
    "name": "Bourbon powder(medium fine)",
    "price": 1400,
    "img": "image/Bourbonpowdermedif.png",
    "specs": "Rare heirloom variety with complex fruity and floral notes. Tasting Notes - Smooth, balanced, with mild acidity and chocolate sweetness. Recommended Brewing - Pour-over Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "catimor-powder-extra-fine",
    "name": "Catimor Powder(extra fine)",
    "price": 1200,
    "img": "image/Catimorpowderextr.png",
    "specs": "Disease-resistant hybrid with balanced acidity and body. Tasting Note - Citrus brightness, cocoa depth, floral aromatics. Recommended Brewing - Espresso Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "catimor-powder-medium",
    "name": "Catimor Powder(medium)",
    "price": 1000,
    "img": "image/Catimorpowdermedi.png",
    "specs": "Disease-resistant hybrid with balanced acidity and body. Tasting Note - Clean acidity, stone fruit sweetness, balanced body. Recommended Brewing - Pour-over Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "catimor-powder-coarse",
    "name": "Catimor Powder(coarse)",
    "price": 900,
    "img": "image/Catimorpowdercoar.png",
    "specs": "Disease-resistant hybrid with balanced acidity and body. Tasting Note - Rustic, earthy, lower acidity, smooth finish. Recommended Brewing - French press Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "geisha-powder-coarse",
    "name": "Geisha Powder(coarse)",
    "price": 2000,
    "img": "image/Geishapowdercoars.png",
    "specs": "Exotic and rare with unique floral and tea-like characteristics. Tasting Note - Tea-like, floral, delicate, light body. Recommended Brewing - French press Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "geisha-powder-extra-fine",
    "name": "Geisha Powder(extra fine)",
    "price": 2500,
    "img": "image/Geishapowderextraf.png",
    "specs": "Exotic and rare with unique floral and tea-like characteristics. Tasting Note - Intense floral, jasmine, bergamot, silky texture. Recommended Brewing - Turkish coffee Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "geisha-powder-fine",
    "name": "Geisha Powder(fine)",
    "price": 2200,
    "img": "image/Geishapowderfine.png",
    "specs": "Exotic and rare with unique floral and tea-like characteristics. Tasting Note - Bright acidity, honey sweetness, complex layers. Recommended Brewing - Espresso Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "geisha-powder-medium",
    "name": "Geisha Powder(medium)",
    "price": 2000,
    "img": "image/Geishapowdermediu.png",
    "specs": "Exotic and rare with unique floral and tea-like characteristics. Tasting Note - Elegant, balanced, tea-like clarity, citrus. Recommended Brewing - Pour-over Ground coffee · 250 g.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "coffee-creamer",
    "name": "Coffee Creamer",
    "price": 1299,
    "img": "image/CoffeeCreamerwith.png",
    "specs": "Rich and creamy creamer made from real dairy for smooth coffee drinks.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "milk-powder",
    "name": "Milk Powder",
    "price": 999,
    "img": "image/MilkPowderwithpap.png",
    "specs": "Instant milk powder for quick preparation of lattes and cappuccinos.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "specialty-sugar",
    "name": "Specialty Sugar",
    "price": 799,
    "img": "image/SpecialtySugarwith.png",
    "specs": "Raw cane sugar crystals for natural sweetness in your coffee.",
    "categories": [
      "powder"
    ]
  },
  {
    "id": "arabica-beans",
    "name": "Arabica Beans",
    "price": 3299,
    "img": "image/ArabicaBeanswith_p.png",
    "specs": "Single-origin Myanmar coffee. Tasting notes: chocolate and caramel. Recommended brewing: pour-over. Whole beans · 250 g.",
    "categories": [
      "bean"
    ]
  },
  {
    "id": "robusta-beans",
    "name": "Robusta Beans",
    "price": 2899,
    "img": "image/RobustaBeansp.png",
    "specs": "Single-origin Vietnam coffee. Tasting notes: cocoa and toasted nuts. Recommended brewing: espresso. Whole beans · 250 g.",
    "categories": [
      "bean"
    ]
  },
  {
    "id": "bourbon-beans",
    "name": "Bourbon Beans",
    "price": 4599,
    "img": "image/BourbonBeanswithp.png",
    "specs": "Single-origin Rwanda coffee. Tasting notes: red fruit and caramel. Recommended brewing: pour-over. Whole beans · 250 g.",
    "categories": [
      "bean"
    ]
  },
  {
    "id": "catimor-beans",
    "name": "Catimor Beans",
    "price": 2999,
    "img": "image/CatimorBeanswithp.png",
    "specs": "Single-origin Myanmar coffee. Tasting notes: citrus and cocoa. Recommended brewing: French press. Whole beans · 250 g.",
    "categories": [
      "bean"
    ]
  },
  {
    "id": "caturra-beans",
    "name": "Caturra Beans",
    "price": 3499,
    "img": "image/CaturraBeanswithp.png",
    "specs": "Single-origin Colombia coffee. Tasting notes: apple and brown sugar. Recommended brewing: drip. Whole beans · 250 g.",
    "categories": [
      "bean"
    ]
  },
  {
    "id": "geisha-beans",
    "name": "Geisha Beans",
    "price": 8999,
    "img": "image/GeishaBeanswithpa.png",
    "specs": "Single-origin Panama coffee. Tasting notes: jasmine and bergamot. Recommended brewing: pour-over. Whole beans · 250 g.",
    "categories": [
      "bean"
    ]
  },
  {
    "id": "espresso",
    "name": "Espresso",
    "price": 450,
    "img": "image/download(1).png",
    "specs": "A strong, concentrated coffee shot with rich crema on top. Tasting notes: bold roast and cocoa. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "espresso",
      "hot",
      "bestseller"
    ]
  },
  {
    "id": "latte",
    "name": "Latte",
    "price": 675,
    "img": "image/download.png",
    "specs": "Espresso blended with steamed milk and light foam, mild and creamy. Tasting notes: cocoa and creamy sweetness. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "espresso",
      "hot",
      "bestseller"
    ]
  },
  {
    "id": "cappuccino",
    "name": "Cappuccino",
    "price": 600,
    "img": "image/Cappuccino.png",
    "specs": "Equal parts espresso, steamed milk, and milk foam. Tasting notes: cocoa and creamy sweetness. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "espresso",
      "hot",
      "bestseller"
    ]
  },
  {
    "id": "americano",
    "name": "Americano",
    "price": 500,
    "img": "image/Americano.png",
    "specs": "Espresso diluted with hot water, similar to drip coffee. Tasting notes: bold roast and cocoa. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "espresso",
      "hot",
      "bestseller"
    ]
  },
  {
    "id": "mocha",
    "name": "Mocha",
    "price": 725,
    "img": "image/Mocha3.png",
    "specs": "Espresso with chocolate syrup and steamed milk, sometimes topped with whipped cream. Tasting notes: cocoa and creamy sweetness. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "espresso",
      "hot",
      "bestseller"
    ]
  },
  {
    "id": "macchiato",
    "name": "Macchiato",
    "price": 525,
    "img": "image/maccc.png",
    "specs": "Espresso topped with a small amount of milk foam. Tasting notes: cocoa and creamy sweetness. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "espresso",
      "hot"
    ]
  },
  {
    "id": "flat-white",
    "name": "Flat White",
    "price": 625,
    "img": "image/white.png",
    "specs": "Espresso with micro-foamed milk, creamy texture, stronger coffee taste. Tasting notes: cocoa and creamy sweetness. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "espresso",
      "hot"
    ]
  },
  {
    "id": "lungo",
    "name": "Lungo",
    "price": 500,
    "img": "image/lug.png",
    "specs": "Espresso brewed with extra water, milder than a regular shot. Tasting notes: bold roast and cocoa. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "espresso",
      "hot"
    ]
  },
  {
    "id": "ristretto",
    "name": "Ristretto",
    "price": 450,
    "img": "image/ris.png",
    "specs": "Short, concentrated espresso with bold flavor. Tasting notes: bold roast and cocoa. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "espresso",
      "hot"
    ]
  },
  {
    "id": "doppio",
    "name": "Doppio",
    "price": 500,
    "img": "image/dip.png",
    "specs": "Double shot of espresso, stronger and more flavorful. Tasting notes: bold roast and cocoa. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "espresso",
      "hot"
    ]
  },
  {
    "id": "iced-latte",
    "name": "Iced Latte",
    "price": 700,
    "img": "image/latice.png",
    "specs": "Chilled latte served with ice cubes. Tasting notes: cocoa and creamy sweetness. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "cold",
      "bestseller"
    ]
  },
  {
    "id": "iced-mocha",
    "name": "Iced Mocha",
    "price": 750,
    "img": "image/Icemochacoffeein.png",
    "specs": "Chocolate-flavored iced coffee with milk. Tasting notes: cocoa and creamy sweetness. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "cold"
    ]
  },
  {
    "id": "cold-brew",
    "name": "Cold Brew",
    "price": 650,
    "img": "image/Coldbrewcoffeein.png",
    "specs": "Coffee steeped in cold water for hours, smooth and low-acid. Tasting notes: bold roast and cocoa. Recommended brewing: cold steeping.",
    "categories": [
      "cold"
    ]
  },
  {
    "id": "nitro-cold-brew",
    "name": "Nitro Cold Brew",
    "price": 800,
    "img": "image/Largenitrocoffeei.png",
    "specs": "Cold brew infused with nitrogen gas, creamy and foamy. Tasting notes: bold roast and cocoa. Recommended brewing: cold steeping.",
    "categories": [
      "cold"
    ]
  },
  {
    "id": "frapp",
    "name": "Frappé",
    "price": 750,
    "img": "image/Largefrappécoffee.png",
    "specs": "Blended iced coffee, often sweetened and topped with foam or whipped cream. Tasting notes: cocoa and creamy sweetness. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "cold"
    ]
  },
  {
    "id": "irish-coffee",
    "name": "Irish Coffee",
    "price": 1000,
    "img": "image/HotIrishcoffeein.png",
    "specs": "Hot coffee mixed with whiskey, sugar, and cream. Tasting notes: bold roast and cocoa. Recommended brewing: freshly brewed filter coffee.",
    "categories": [
      "international",
      "hot"
    ]
  },
  {
    "id": "vietnamese-coffee",
    "name": "Vietnamese Coffee",
    "price": 650,
    "img": "image/HotVietnamesecoffe.png",
    "specs": "Strong drip coffee with sweetened condensed milk. Tasting notes: bold roast and cocoa. Recommended brewing: phin filter.",
    "categories": [
      "international",
      "hot"
    ]
  },
  {
    "id": "turkish-coffee",
    "name": "Turkish Coffee",
    "price": 650,
    "img": "image/HotTurkishcoffeei.png",
    "specs": "Finely ground coffee brewed in a cezve, served unfiltered. Tasting notes: bold roast and cocoa. Recommended brewing: cezve or briki.",
    "categories": [
      "international",
      "hot"
    ]
  },
  {
    "id": "greek-coffee",
    "name": "Greek Coffee",
    "price": 650,
    "img": "image/HotGreekcoffeein.png",
    "specs": "Finely ground coffee gently heated in a briki and served unfiltered. Tasting notes: rich cocoa and a lasting finish. Brewing: briki.",
    "categories": [
      "international",
      "hot"
    ]
  },
  {
    "id": "white-coffee",
    "name": "White Coffee",
    "price": 550,
    "img": "image/Whitecoffeeinlarg.png",
    "specs": "Made from lightly roasted beans, mild taste, higher caffeine. Tasting notes: cocoa and creamy sweetness. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "cold",
      "international",
      "bestseller"
    ]
  },
  {
    "id": "affogato",
    "name": "Affogato",
    "price": 850,
    "img": "image/Coldaffogatoinlar.png",
    "specs": "Espresso poured over a scoop of ice cream, dessert-style. Tasting notes: cocoa and creamy sweetness. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "cold",
      "international"
    ]
  },
  {
    "id": "red-eye",
    "name": "Red Eye",
    "price": 600,
    "img": "image/Hotredeyecoffeei.png",
    "specs": "Brewed coffee with a shot of espresso for extra caffeine. Tasting notes: bold roast and cocoa. Recommended brewing: drip or pour-over.",
    "categories": [
      "popular",
      "hot"
    ]
  },
  {
    "id": "black-coffee",
    "name": "Black Coffee",
    "price": 425,
    "img": "image/Coldblackcoffeewi.png",
    "specs": "Simple brewed coffee without milk or sugar. Tasting notes: bold roast and cocoa. Recommended brewing: drip or pour-over.",
    "categories": [
      "cold",
      "popular",
      "bestseller"
    ]
  },
  {
    "id": "vienna-coffee",
    "name": "Vienna Coffee",
    "price": 700,
    "img": "image/HotViennacoffeein.png",
    "specs": "Coffee topped with whipped cream instead of milk. Tasting notes: cocoa and creamy sweetness. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "popular",
      "hot"
    ]
  },
  {
    "id": "caf-bomb-n",
    "name": "Café Bombón",
    "price": 550,
    "img": "image/CaféBombóninplain.png",
    "specs": "Espresso with sweetened condensed milk, layered. Tasting notes: cocoa and creamy sweetness. Recommended brewing: espresso with milk or water to taste.",
    "categories": [
      "popular",
      "hot"
    ]
  },
  {
    "id": "chocolate-cake",
    "name": "Chocolate Cake",
    "price": 350,
    "img": "image/ChocolateCakepiece.png",
    "specs": "Rich with chocolate flavor, sweet and satisfying to eat.",
    "categories": [
      "cake"
    ]
  },
  {
    "id": "red-velvet-cake",
    "name": "Red Velvet Cake",
    "price": 400,
    "img": "image/RedVelvetCakepiec.png",
    "specs": "Beautifully red, paired with cream cheese frosting, perfect for celebrations.",
    "categories": [
      "cake"
    ]
  },
  {
    "id": "carrot-cake",
    "name": "Carrot Cake",
    "price": 350,
    "img": "image/CarrotCakepiece.png",
    "specs": "Made with carrots, walnuts, and spices, offering a nutritious and flavorful bite",
    "categories": [
      "cake"
    ]
  },
  {
    "id": "cheesecake",
    "name": "Cheesecake",
    "price": 450,
    "img": "image/Cheesecakepiece.png",
    "specs": "Cream cheese–based, with a sweet and tangy taste, best enjoyed chilled.",
    "categories": [
      "cake"
    ]
  },
  {
    "id": "black-forest-cake",
    "name": "Black Forest Cake",
    "price": 400,
    "img": "image/BlackForestCakepi.png",
    "specs": "German classic with chocolate sponge, cream, and cherries layered together.",
    "categories": [
      "cake"
    ]
  },
  {
    "id": "angel-food-cake",
    "name": "Angel Food Cake",
    "price": 300,
    "img": "image/AngelFoodCakepiec.png",
    "specs": "Made with egg whites, very light and airy, almost cloud-like",
    "categories": [
      "cake"
    ]
  },
  {
    "id": "tiramisu",
    "name": "Tiramisu",
    "price": 450,
    "img": "image/Tiramisupiece.png",
    "specs": "Coffee-soaked sponge layered with mascarpone cream and dusted with cocoa. A creamy dessert with a gentle coffee finish.",
    "categories": [
      "cake"
    ]
  },
  {
    "id": "fruit-cake",
    "name": "Fruit Cake",
    "price": 350,
    "img": "image/Fruitcakepiece.png",
    "specs": "Packed with dried fruits and nuts, often enjoyed during festive occasions.",
    "categories": [
      "cake"
    ]
  },
  {
    "id": "coffee-cake",
    "name": "Coffee Cake",
    "price": 300,
    "img": "image/CoffeeCakepiece.png",
    "specs": "Coffee-flavored cake, perfect for breakfast or tea time",
    "categories": [
      "cake"
    ]
  },
  {
    "id": "butter-cake",
    "name": "Butter Cake",
    "price": 550,
    "img": "image/ButterCakepiece.png",
    "specs": "Classic cake made mainly with butter, sugar, eggs, and milk",
    "categories": [
      "cake"
    ]
  },
  {
    "id": "brioche",
    "name": "Brioche",
    "price": 250,
    "img": "image/Briochebreadloaf.png",
    "specs": "Rich, buttery French bread, slightly sweet.",
    "categories": [
      "bread"
    ]
  },
  {
    "id": "baguette",
    "name": "Baguette",
    "price": 200,
    "img": "image/Baguettebreadpiece.png",
    "specs": "Long, thin French bread with a crispy crust.",
    "categories": [
      "bread"
    ]
  },
  {
    "id": "white-bread",
    "name": "White Bread",
    "price": 150,
    "img": "image/WhiteBreadpiece.png",
    "specs": "Soft, fluffy, made from refined wheat flour",
    "categories": [
      "bread"
    ]
  },
  {
    "id": "sourdough",
    "name": "Sourdough",
    "price": 250,
    "img": "image/Sourdoughbreadpiec.png",
    "specs": "Fermented naturally with wild yeast, tangy flavor",
    "categories": [
      "bread"
    ]
  },
  {
    "id": "ciabatta",
    "name": "Ciabatta",
    "price": 220,
    "img": "image/Ciabattabreadpiece.png",
    "specs": "Italian bread, rustic with airy texture, perfect for sandwiches.",
    "categories": [
      "bread"
    ]
  },
  {
    "id": "coffee-grinder-electric-burr-grinder",
    "name": "Coffee Grinder (Electric Burr Grinder)",
    "price": 22000,
    "img": "image/CoffeeGrinderwitho.png",
    "specs": "Description: Produces uniform grind size, crucial for consistent flavor. Adjustable settings for espresso, drip, French press. Saves time vs manual. Usage: Select grind size, add beans to hopper, press start, grounds collect in bin.",
    "categories": [
      "machine"
    ]
  },
  {
    "id": "manual-coffee-grinder",
    "name": "Manual Coffee Grinder",
    "price": 8000,
    "img": "image/Modernstylemanual.png",
    "specs": "Description: Portable, quiet, precise. Great for travel or small kitchens. Ceramic burrs often durable. Usage: Adjust grind setting, add beans to chamber, turn hand crank until ground.",
    "categories": [
      "tool"
    ]
  },
  {
    "id": "digital-scale-with-timer",
    "name": "Digital Scale with Timer",
    "price": 6000,
    "img": "image/DigitalScalewithT.png",
    "specs": "Description: Ensures exact coffee-to-water ratio. Timer tracks brew phases. Essential for pour-over and espresso. Usage: Place cup/dripper, tare zero, add grounds, note weight, start timer when pouring water.",
    "categories": [
      "accessory"
    ]
  },
  {
    "id": "gooseneck-kettle",
    "name": "Gooseneck Kettle",
    "price": 5500,
    "img": "image/GooseneckKettlefor.png",
    "specs": "Description: Thin spout allows precise water flow. Essential for pour-over control. Some models have temperature control. Usage: Fill with water, heat to ~96°C (205°F), pour slowly in circles over grounds.",
    "categories": [
      "tool"
    ]
  },
  {
    "id": "espresso-machine",
    "name": "Espresso Machine",
    "price": 85000,
    "img": "image/EspressoMachinewit.png",
    "specs": "Description: Café-quality espresso at home. Can steam milk for lattes/cappuccinos. Usage: Grind beans fine, tamp in portafilter, lock portafilter, start extraction 25–30 sec.",
    "categories": [
      "machine"
    ]
  },
  {
    "id": "cold-brew-machine",
    "name": "Cold Brew Machine",
    "price": 8000,
    "img": "image/Moderncoldbrewcof.png",
    "specs": "Description: Smooth, low-acid coffee. Large batches stay fresh for days. Usage: Add coarse grounds, fill with cold water, steep 12–24 hrs, strain.",
    "categories": [
      "machine"
    ]
  },
  {
    "id": "french-press",
    "name": "French Press",
    "price": 4000,
    "img": "image/ModernFrenchpress.png",
    "specs": "Description: Full-bodied rich coffee with natural oils. Simple, no filters needed. Usage: Add coarse grounds, pour hot water, stir, steep 4 min, press plunger.",
    "categories": [
      "tool"
    ]
  },
  {
    "id": "chemex",
    "name": "Chemex",
    "price": 6500,
    "img": "image/Chemexcoffeemaker.png",
    "specs": "Description: Clean bright flavor. Thick filter removes oils. Elegant design doubles as carafe. Usage: Place filter and rinse, add medium-coarse grounds, pour water slowly in spirals.",
    "categories": [
      "tool"
    ]
  },
  {
    "id": "drip-coffee-machine",
    "name": "Drip Coffee Machine",
    "price": 15000,
    "img": "image/Moderndripcoffeem.png",
    "specs": "Description: Convenient automatic brewing. Consistent results. Usage: Add water to reservoir, place filter and grounds, press start.",
    "categories": [
      "machine"
    ]
  },
  {
    "id": "pour-over-coffee-set",
    "name": "Pour-over Coffee Set",
    "price": 5500,
    "img": "image/Pour-overcoffeeset.png",
    "specs": "Description: Control every variable. Compact and affordable. Usage: Place dripper on cup, add filter and grounds, pour water in stages.",
    "categories": [
      "tool"
    ]
  },
  {
    "id": "turkish-coffee-pot-cezve",
    "name": "Turkish Coffee Pot (Cezve)",
    "price": 2500,
    "img": "image/pot.png",
    "specs": "Description: Strong thick unfiltered coffee. Traditional style. Usage: Mix fine grounds, water, sugar in pot, heat slowly until foam rises, pour into small cups.",
    "categories": [
      "tool"
    ]
  },
  {
    "id": "stovetop-espresso-maker-moka-pot",
    "name": "Stovetop Espresso Maker (Moka Pot)",
    "price": 4500,
    "img": "image/Stovetopcoffeemake.png",
    "specs": "Bold, concentrated stovetop coffee. Usage: fill water below the safety valve, add medium-fine grounds without tamping, and heat gently. Follow the manufacturer’s instructions.",
    "categories": [
      "tool"
    ]
  },
  {
    "id": "coffee-paper-filter",
    "name": "Coffee Paper Filter",
    "price": 800,
    "img": "image/Coffeepaperfilter.png",
    "specs": "Description: Cleaner cup, removes sediment, easy cleanup. Usage: Place in dripper, rinse with hot water, add grounds, brew.",
    "categories": [
      "accessory"
    ]
  },
  {
    "id": "coffee-tamper",
    "name": "Coffee Tamper",
    "price": 3000,
    "img": "image/Coffeetampertool.png",
    "specs": "Description: Ensures even espresso extraction, prevents channeling. Usage: Place on portafilter, press firmly and evenly.",
    "categories": [
      "accessory"
    ]
  },
  {
    "id": "espresso-coffee-funnel",
    "name": "Espresso Coffee Funnel",
    "price": 1500,
    "img": "image/Magneticespressoco.png",
    "specs": "Description: Prevents mess when dosing, keeps grounds inside portafilter. Usage: Place funnel on portafilter, grind directly into it.",
    "categories": [
      "accessory"
    ]
  },
  {
    "id": "tetra-drip",
    "name": "Tetra Drip",
    "price": 3000,
    "img": "image/ModernstyleTetraD.png",
    "specs": "Description: Lightweight, collapsible pour-over, perfect for travel. Usage: Assemble frame, insert filter, add grounds, pour hot water.",
    "categories": [
      "accessory"
    ]
  },
  {
    "id": "timemore-electric-thermometer",
    "name": "Timemore Electric Thermometer",
    "price": 3000,
    "img": "image/ModernstyleTimemor.png",
    "specs": "Description: Provides precise temperature readings for coffee brewing. Compact design with LED display. Switches easily between Celsius and Fahrenheit. Helps maintain ideal water temperature for pour-over, espresso, and milk steaming. Usage: Insert probe into water or milk. Read temperature on LED screen. Short press power button to switch between °C and °F. Use readings to adjust brewing or steaming process.",
    "categories": [
      "accessory"
    ]
  },
  {
    "id": "milk-frother",
    "name": "Milk Frother",
    "price": 5000,
    "img": "image/ModernstyleAerolat1.png",
    "specs": "Description: Frothy milk for lattes, cappuccinos, hot chocolate. Usage: Add milk,Froth manually or press button,Pour over espresso.",
    "categories": [
      "accessory"
    ]
  },
  {
    "id": "bean-pass",
    "name": "All-Variety Coffee Bean Pass",
    "price": 99999,
    "img": "image/gcoffeepacka.png",
    "specs": "Annual plan: six 30 g tasting packs every month for 12 months. Delivery included in this demo price.",
    "categories": [
      "offer"
    ]
  },
  {
    "id": "grinder-duo",
    "name": "Double Grinder Bundle",
    "price": 27999,
    "img": "image/Twocoffeegrinders150.png",
    "specs": "Two manual grinders and two 250 g bags of house-blend beans. One-time bundle.",
    "categories": [
      "offer"
    ]
  }
];
  const byId = new Map(PRODUCTS.map(product => [product.id, product]));
  const byName = new Map(PRODUCTS.map(product => [product.name.toLowerCase(), product]));
  const CART_KEY = 'beanBoutiqueCart';
  const OFFER_KEY = 'beanBoutiqueOffers';
  const FAVOURITE_KEY = 'beanBoutiqueFavourites';
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const money = cents => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
  const memory = new Map();
  let storageAvailable = true;
  let toastTimer;
  let activeDialog = null;
  let previousFocus = null;
  let selectedEvent = null;
  let selectedPayment = null;

  // A blocked or full storage area must never crash a page.
  function storageWarning() {
    storageAvailable = false;
    const notice = $('#storageNotice');
    notice.textContent = 'Browser storage is unavailable. Selections work on this page but cannot be kept when you leave it.';
    notice.hidden = false;
  }
  function read(key, fallback) {
    try {
      const value = storageAvailable ? localStorage.getItem(key) : memory.get(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      if (!(error instanceof SyntaxError)) storageWarning();
      return fallback;
    }
  }
  function write(key, value) {
    const data = JSON.stringify(value);
    memory.set(key, data);
    if (storageAvailable) {
      try { localStorage.setItem(key, data); } catch (_) { storageWarning(); }
    }
  }
  function toast(message) {
    const status = $('#siteStatus');
    clearTimeout(toastTimer);
    status.textContent = message;
    status.classList.add('visible');
    toastTimer = setTimeout(() => status.classList.remove('visible'), 4500);
  }
  function normaliseCart(value) {
    if (!Array.isArray(value)) return [];
    const quantities = new Map();
    value.slice(0, 200).forEach(item => {
      if (!item || typeof item !== 'object') return;
      const legacyName = typeof item.name === 'string' ? item.name.toLowerCase().replace('arabic', 'arabica').replace('(find)', '(fine)') : '';
      const product = byId.get(item.id) || byName.get(legacyName);
      const qty = Number(item.quantity);
      if (!product || !Number.isFinite(qty) || qty < 1) return;
      quantities.set(product.id, Math.min(99, (quantities.get(product.id) || 0) + Math.floor(qty)));
    });
    return [...quantities].map(([id, quantity]) => ({ id, quantity }));
  }
  let cart = normaliseCart(read(CART_KEY, []));
  function normaliseOffers(value) {
    const object = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
    const result = { welcome: object.welcome === true, member: object.member === true, choice: 'none' };
    if (object.choice === 'welcome' && result.welcome) result.choice = 'welcome';
    if (object.choice === 'member' && result.member) result.choice = 'member';
    return result;
  }
  let offers = normaliseOffers(read(OFFER_KEY, {}));
  function normaliseFavourites(value) {
    return new Set(Array.isArray(value) ? value.filter(id => byId.has(id)) : []);
  }
  let favourites = normaliseFavourites(read(FAVOURITE_KEY, []));
  // Canonical product information replaces stale images, untrusted prices and old
  // negative-price discount rows when a previous version's cart is loaded.
  write(CART_KEY, cart);

  function totals() {
    const subtotal = cart.reduce((sum, item) => sum + byId.get(item.id).price * item.quantity, 0);
    const discount = offers.choice === 'welcome' ? Math.min(1000, subtotal) : offers.choice === 'member' ? Math.round(subtotal * 0.05) : 0;
    return { subtotal, discount, total: Math.max(0, subtotal - discount) };
  }
  function updateBadge() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    $$('.cart-counter').forEach(badge => {
      badge.textContent = String(count);
      badge.classList.toggle('hidden', !count);
      badge.setAttribute('aria-label', `${count} items in cart`);
    });
  }
  function saveCart() { write(CART_KEY, cart); updateBadge(); renderCart(); }
  function addProduct(id) {
    const product = byId.get(id);
    if (!product) return;
    const item = cart.find(entry => entry.id === id);
    if (item && item.quantity >= 99) { toast('Maximum quantity is 99 per product.'); return; }
    if (item) item.quantity += 1;
    else cart.push({ id, quantity: 1 });
    saveCart();
    toast(`${product.name} added to your cart.`);
  }
  function element(tag, className, value) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    return node;
  }
  function actionButton(label, className, action, id) {
    const button = element('button', className, label);
    button.type = 'button';
    button.dataset.action = action;
    if (id) button.dataset.id = id;
    return button;
  }

  // Safe DOM creation: never insert saved strings as HTML.
  function renderCart(focusId, focusAction) {
    const items = $('#cart-items');
    if (!items) return;
    const summary = $('#cart-summary');
    items.replaceChildren(); summary.replaceChildren();
    $('#cart-empty').hidden = cart.length > 0;
    items.classList.toggle('hidden', !cart.length);
    summary.classList.toggle('hidden', !cart.length);
    cart.forEach(item => {
      const product = byId.get(item.id);
      const article = element('article', 'cart-entry');
      const img = element('img', 'cart-entry__img'); img.src = product.img; img.alt = product.name; img.loading = 'lazy';
      const details = element('div', 'cart-entry__details');
      details.append(element('h2', 'cart-entry__name', product.name), element('p', 'cart-entry__specs', product.specs));
      const price = element('div', 'cart-entry__price'); price.append(element('span', '', money(product.price)));
      const controls = element('div', 'cart-entry__qtycontrols');
      const minus = actionButton('−', 'qty-btn', 'decrease', item.id);
      minus.setAttribute('aria-label', `Decrease ${product.name} quantity`);
      minus.setAttribute('aria-disabled', String(item.quantity <= 1));
      const plus = actionButton('+', 'qty-btn', 'increase', item.id);
      plus.setAttribute('aria-label', `Increase ${product.name} quantity`);
      plus.setAttribute('aria-disabled', String(item.quantity >= 99));
      controls.append(minus, element('span', 'cart-entry__qty', String(item.quantity)), plus); price.append(controls);
      const remove = actionButton('Remove', 'cart-entry__remove', 'remove', item.id);
      remove.setAttribute('aria-label', `Remove ${product.name} from cart`);
      details.append(price, element('p', 'cart-entry__subtotal', `Subtotal: ${money(product.price * item.quantity)}`), remove);
      article.append(img, details); items.append(article);
    });
    if (!cart.length) return;
    const top = element('div', 'cart-summary__top');
    top.append(actionButton('Clear cart', 'cart-summary__clear', 'clear-cart'));
    const breakdown = element('div', 'cart-summary__breakdown');
    const label = element('label', 'discount-label', 'Choose an offer'); label.htmlFor = 'discountChoice';
    const select = element('select', 'discount-choice'); select.id = 'discountChoice';
    const available = [['none', 'No discount']];
    if (offers.welcome) available.push(['welcome', 'Welcome: up to $10 off']);
    if (offers.member) available.push(['member', 'Member: 5% off']);
    available.forEach(([value, title]) => { const option = element('option', '', title); option.value = value; select.append(option); });
    select.value = offers.choice;
    select.addEventListener('change', () => { offers.choice = select.value; write(OFFER_KEY, offers); renderCart(); $('#discountChoice').focus(); });
    const sum = totals();
    breakdown.append(label, select, element('div', '', `Subtotal: ${money(sum.subtotal)}`), element('div', '', `Discount: −${money(sum.discount)}`), element('div', '', 'Delivery: included in this demo estimate'), element('div', 'cart-summary__total', `Grand total: ${money(sum.total)}`));
    top.append(breakdown); summary.append(top, actionButton('Preview Checkout', 'cart-summary__checkout', 'checkout'));
    if (focusId && focusAction) $(`[data-action="${focusAction}"][data-id="${focusId}"]`, items)?.focus();
  }

  function closeNavigation() {
    $('.nav-menu').classList.remove('open');
    $('.hamburger').setAttribute('aria-expanded', 'false');
    document.body.classList.remove('navigation-open');
  }
  $('.hamburger').addEventListener('click', () => {
    const open = $('.hamburger').getAttribute('aria-expanded') !== 'true';
    $('.hamburger').setAttribute('aria-expanded', String(open));
    $('.nav-menu').classList.toggle('open', open);
    document.body.classList.toggle('navigation-open', open);
  });
  $$('.nav-menu a').forEach(link => link.addEventListener('click', closeNavigation));
  const mobileQuery = window.matchMedia('(max-width: 900px)');
  mobileQuery.addEventListener('change', closeNavigation);

  function setBackgroundInert(dialog) {
    [...document.body.children].forEach(child => {
      if (child !== dialog && !['SCRIPT','NOSCRIPT'].includes(child.tagName)) child.inert = true;
    });
    $('#panelBackdrop').inert = false;
    $('#siteStatus').inert = false;
  }
  function openDialog(id) {
    const dialog = document.getElementById(id);
    if (!dialog) return;
    const restore = activeDialog ? previousFocus : document.activeElement;
    if (activeDialog) closeDialog(false);
    previousFocus = restore;
    activeDialog = dialog;
    closeNavigation();
    dialog.hidden = false;
    dialog.classList.add('show');
    document.body.classList.add('dialog-open');
    setBackgroundInert(dialog);
    $('#panelBackdrop').hidden = !dialog.classList.contains('slide-panel');
    const first = $('input:not([type="hidden"]), textarea, button, a[href]', dialog);
    (first || dialog).focus();
  }
  function closeDialog(restoreFocus = true) {
    if (!activeDialog) return;
    activeDialog.hidden = true;
    activeDialog.classList.remove('show', 'open');
    activeDialog = null;
    document.body.classList.remove('dialog-open');
    [...document.body.children].forEach(child => { child.inert = false; });
    $('#panelBackdrop').hidden = true;
    if (restoreFocus && previousFocus?.isConnected) previousFocus.focus();
  }
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (activeDialog) closeDialog();
      else { closeNavigation(); $('.hamburger').focus(); }
    }
    if (event.key === 'Tab' && activeDialog) {
      const focusable = $$('button, a[href], input:not([type="hidden"]), textarea, select, [tabindex="0"]', activeDialog).filter(node => !node.disabled && !node.closest('[hidden]'));
      if (!focusable.length) { event.preventDefault(); activeDialog.focus(); return; }
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === activeDialog)) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  function prepareEmail(subject, message) {
    $('#emailTitle').textContent = subject;
    const body = `${message}\n\nThis is an enquiry from the Bean Boutique student website. Please confirm availability by reply.`;
    $('#emailDraft').value = `To: ${REGISTRATION_EMAIL}\nSubject: ${subject}\n\n${body}`;
    $('#openEmail').href = `mailto:${REGISTRATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    $('#emailStatus').textContent = 'Draft ready. Your email app must send the message.';
    openDialog('emailModal');
    $('#openEmail').focus();
    // This user-triggered link opens a composer; it never sends automatically.
    $('#openEmail').click();
  }
  $('#copyEmail').addEventListener('click', async () => {
    const draft = $('#emailDraft');
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(draft.value);
      $('#emailStatus').textContent = 'Draft copied. Paste it into your email app and press Send.';
    } catch (_) {
      draft.focus(); draft.select();
      $('#emailStatus').textContent = 'The draft is selected. Copy it with your device’s Copy command and paste it into your email app.';
    }
  });
  function validateForm(form) {
    $$('input:not([type="hidden"])', form).forEach(input => { input.value = input.value.trim(); input.setCustomValidity(''); });
    return form.reportValidity();
  }
  $$('form').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    if (!validateForm(form)) return;
    const values = new FormData(form);
    const email = String(values.get('email') || '');
    if (form.id === 'eventForm') {
      if (!selectedEvent || new Date(selectedEvent.start).getTime() <= Date.now()) {
        $('#eventError').textContent = 'This session is no longer available. Please select an upcoming event.'; $('#eventError').hidden = false; return;
      }
      const name = `${values.get('firstName')} ${values.get('lastName')}`;
      prepareEmail(`Registration request: ${selectedEvent.title}`, `Event: ${selectedEvent.title}\nDate: ${selectedEvent.date} (Yangon time)\nVenue: ${VENUE}\nFirst name: ${values.get('firstName')}\nLast name: ${values.get('lastName')}\nEmail: ${email}\nPhone: ${values.get('phone') || 'Not provided'}\n\nHello, I would like to request a place for ${name}.`);
    } else if (form.id === 'welcomeDiscountForm') {
      if (offers.welcome) { $('#welcomeErrorMessage').hidden = false; $('#welcomeErrorMessage').textContent = 'Your welcome offer is already saved on this browser. Choose it in the shopping cart.'; return; }
      offers.welcome = true; offers.choice = 'welcome'; write(OFFER_KEY, offers);
      write('beanBoutiqueWelcomeSeen', true);
      prepareEmail('Welcome offer and club signup', `Email: ${email}\n\nI would like to request Bean Boutique club updates and ask about the welcome offer.`);
      $('#emailStatus').textContent = 'Your demo discount is saved. Review and send this email to request club updates.';
      toast('Welcome offer saved: up to $10 off. Choose one discount in your cart.');
      form.reset();
    } else if (form.id === 'memberForm') {
      prepareEmail('Inner Circle membership enquiry', `Name: ${values.get('name')}\nEmail: ${email}\n\nI would like to learn about membership and regular coffee deliveries.`);
    } else if (form.id === 'footerContactForm') {
      prepareEmail('Bean Boutique concierge enquiry', `Email: ${email}\n\nPlease tell me about coffee releases, events and club updates.`);
    }
  }));

  function renderFavourites() {
    $$('[data-favourite]').forEach(button => {
      const saved = favourites.has(button.dataset.favourite);
      button.setAttribute('aria-pressed', String(saved));
      button.classList.toggle('wishlisted', saved);
      button.setAttribute('aria-label', `${saved ? 'Remove' : 'Save'} ${byId.get(button.dataset.favourite).name} ${saved ? 'from' : 'to'} favourites`);
    });
  }
  let refreshSearch = () => {};
  if ($('#search')) {
    const cards = $$('[data-product-id]');
    const records = cards.map(card => byId.get(card.dataset.productId));
    const index = new Fuse(records, { keys: [{name:'name',weight:0.7},{name:'specs',weight:0.3}], threshold: 0.28, ignoreLocation: true, minMatchCharLength: 2 });
    let category = 'all';
    let onlyFavourites = false;
    let inputTimer;
    refreshSearch = () => {
      const query = $('#search').value.trim().toLowerCase();
      const matches = new Set(!query ? records.map(p => p.id) : query.length === 1 ? records.filter(p => `${p.name} ${p.specs}`.toLowerCase().includes(query)).map(p => p.id) : index.search(query).map(result => result.item.id));
      let count = 0;
      cards.forEach(card => {
        const id = card.dataset.productId;
        const visible = matches.has(id) && (category === 'all' || byId.get(id).categories.includes(category)) && (!onlyFavourites || favourites.has(id));
        card.hidden = !visible;
        card.classList.remove('entering');
        if (visible) { count += 1; card.classList.add('entering'); }
      });
      $('#clearSearch').hidden = !query;
      $('#noResults').hidden = count > 0;
      $('#searchResults').textContent = `${count} ${count === 1 ? 'product' : 'products'}${query ? ` matching “${$('#search').value.trim()}”` : ''}`;
    };
    $('#search').addEventListener('input', () => { clearTimeout(inputTimer); inputTimer = setTimeout(refreshSearch, 120); });
    $('#clearSearch').addEventListener('click', () => { $('#search').value = ''; refreshSearch(); $('#search').focus(); });
    $$('.filter-row [data-category]').forEach(button => button.addEventListener('click', () => {
      category = button.dataset.category;
      $$('.filter-row [data-category]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
      refreshSearch();
    }));
    $('.favourites-filter').addEventListener('click', event => {
      onlyFavourites = !onlyFavourites;
      event.currentTarget.setAttribute('aria-pressed', String(onlyFavourites));
      event.currentTarget.classList.toggle('active', onlyFavourites); refreshSearch();
    });
    // Category disclosure UI; existing filter button handlers still do the filtering.
    const categoryDropdown = $('.category-dropdown');
    if (categoryDropdown) {
      const toggle = $('.category-toggle', categoryDropdown);
      const label = $('.category-label', categoryDropdown);
      $$('.filter-row [data-category]').forEach(button => button.addEventListener('click', () => {
        label.textContent = button.dataset.category === 'all' ? 'All Categories' : button.textContent.trim();
        const wasOpen = categoryDropdown.open;
        categoryDropdown.open = false;
        if (wasOpen) toggle.focus();
      }));
      document.addEventListener('click', event => {
        if (!categoryDropdown.contains(event.target)) categoryDropdown.open = false;
      });
      categoryDropdown.addEventListener('keydown', event => {
        if (event.key === 'Escape' && categoryDropdown.open) {
          event.preventDefault(); event.stopPropagation();
          categoryDropdown.open = false; toggle.focus();
        }
      });
      categoryDropdown.addEventListener('focusout', event => {
        if (event.relatedTarget && !categoryDropdown.contains(event.relatedTarget)) categoryDropdown.open = false;
      });
    }
    const initial = new URLSearchParams(location.search).get('filter');
    const initialButton = $$('.filter-row [data-category]').find(button => button.dataset.category === initial);
    if (initialButton) initialButton.click(); else refreshSearch();
  }

  function showOffer(message) {
    if ($('#offerModalText')) { $('#offerModalText').textContent = message; openDialog('offerModal'); }
    else toast(message);
  }
  function checkout() {
    if (!cart.length) return;
    const receipt = $('#receiptItems');receipt.replaceChildren();
    receipt.append(element('p', 'receipt-header-info', 'Preview only · No transaction has occurred'));
    cart.forEach(item => {
      const product = byId.get(item.id);
      const row = element('div', 'receipt-item');
      row.append(element('span', '', product.name), element('span', '', `×${item.quantity}`), element('span', '', money(product.price * item.quantity)));
      receipt.append(row);
    });
    const sum = totals();
    receipt.append(element('p', '', `Discount: −${money(sum.discount)}`), element('p', 'cart-summary__total', `Total: ${money(sum.total)}`));
    selectedPayment = null;
    $$('.payment-option').forEach(button => { button.classList.remove('selected'); button.setAttribute('aria-pressed','false'); });
    $('#receiptContent').hidden = false; $('#successMessage').hidden = true; $('.receipt-confirm').hidden = false; $('#paymentAlertCard').hidden = true;
    openDialog('receiptModal');
  }
  document.addEventListener('click', event => {
    const target = event.target.closest('button, a, [data-close-dialog], #panelBackdrop');
    if (event.target === activeDialog || target?.id === 'panelBackdrop') { closeDialog(); return; }
    if (!target) { if (!event.target.closest('.site-header')) closeNavigation(); return; }
    if (target.hasAttribute('data-close-dialog')) { closeDialog(); return; }
    if (target.dataset.open) { event.preventDefault(); openDialog(target.dataset.open); return; }
    if (target.dataset.add) { addProduct(target.dataset.add); return; }
    if (target.dataset.favourite) {
      const id = target.dataset.favourite;
      if (favourites.has(id)) favourites.delete(id); else favourites.add(id);
      write(FAVOURITE_KEY, [...favourites]); renderFavourites(); refreshSearch();
      toast(`${byId.get(id).name} ${favourites.has(id) ? 'saved to' : 'removed from'} favourites.`); return;
    }
    if (target.classList.contains('register-btn')) {
      selectedEvent = { title:target.dataset.event, date:target.dataset.date, start:target.dataset.start };
      $('#modalEventName').textContent = `${selectedEvent.title} · ${selectedEvent.date}`;
      $('#eventInput').value = selectedEvent.title; $('#eventError').hidden = true; openDialog('eventModal'); return;
    }
    if (target.dataset.plan) { prepareEmail('Coffee subscription enquiry', `I am interested in the following plan:\n${target.dataset.plan}\n\nPlease confirm the price, delivery address, start date and cancellation terms before I subscribe.`); return; }
    if (target.dataset.method) {
      selectedPayment = target.dataset.method;
      $$('.payment-option').forEach(button => { const on = button === target;button.classList.toggle('selected',on);button.setAttribute('aria-pressed',String(on)); });
      $('#paymentAlertCard').hidden = true; return;
    }
    const action = target.dataset.action;
    const id = target.dataset.id;
    if (['increase','decrease'].includes(action)) {
      const item = cart.find(entry => entry.id === id);
      if (item) item.quantity = Math.min(99, Math.max(1,item.quantity+(action==='increase'?1:-1)));
      write(CART_KEY,cart);updateBadge();renderCart(id,action); return;
    }
    if (action === 'remove') {
      cart = cart.filter(item => item.id !== id);saveCart();
      const next = $('.cart-entry__remove') || $('#cart-empty a');next?.focus();toast('Item removed from your cart.');return;
    }
    if (action === 'clear-cart') { cart = [];saveCart();$('#cart-empty a').focus();toast('Your cart is now empty.');return; }
    if (action === 'checkout') { checkout();return; }
    if (action === 'checkout-confirm') {
      if (!cart.length) { closeDialog();toast('Your cart is empty. Add an item before checkout.');return; }
      if (!selectedPayment) { $('#paymentAlertCard').hidden = false;$('.payment-option').focus();return; }
      $('#receiptContent').hidden = true;$('.receipt-confirm').hidden = true;$('#successMessage').hidden = false;
      $('#selectedMethod').textContent = selectedPayment === 'cash' ? 'Cash (demo)' : 'Online payment (demo)';
      const heading = $('#successMessage h3');heading.tabIndex = -1;heading.focus();return;
    }
    if (action === 'membership') {
      offers.member = true;write(OFFER_KEY,offers);$('#discount-status').textContent = 'Member offer unlocked for this browser.';
      showOffer('Inner Circle preview unlocked. You can now choose the 5% member discount. This is a demonstration, not a paid membership.');return;
    }
    if (action === 'discount') {
      if (!offers.member) { showOffer('Select Explore Membership to unlock the member offer on this browser.');return; }
      offers.choice = 'member';write(OFFER_KEY,offers);$('#discount-status').textContent = '5% member offer selected. It replaces any welcome discount.';toast('Member discount selected. Cart totals update as items change.');return;
    }
    if (action === 'view-pass') { $('#curated-bundles')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});return; }
    if (action === 'student-info') { showOffer('Student privileges are illustrative. Email us to ask about eligibility; do not upload your student ID to this prototype.');return; }
    if (action === 'invite') { prepareEmail('Share Bean Boutique', 'Hello! I would like to introduce a friend to Bean Boutique coffees and workshops. Please tell us about upcoming sessions.'); }
  });

  if ($('.hero-slider-wrapper')) {
    const slides = $$('.hero-slide');
    const indicators = $$('.hero-indicator');
    const wrapper = $('.hero-slider-wrapper');
    let current = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let paused = reducedMotion.matches;
    let hovering = false;
    function goTo(index) {
      current = (index+slides.length)%slides.length;
      slides.forEach((slide,i) => { const active = i===current;slide.classList.toggle('active',active);slide.setAttribute('aria-hidden',String(!active));slide.inert = !active; });
      indicators.forEach((indicator,i) => {indicator.classList.toggle('active',i===current);indicator.setAttribute('aria-current',String(i===current));});
    }
    $('.hero-nav-prev').addEventListener('click',() => goTo(current-1));
    $('.hero-nav-next').addEventListener('click',() => goTo(current+1));
    indicators.forEach((indicator,i) => indicator.addEventListener('click',() => goTo(i)));
    wrapper.addEventListener('mouseenter',() => {hovering=true;});wrapper.addEventListener('mouseleave',() => {hovering=false;});
    reducedMotion.addEventListener('change',() => {paused=reducedMotion.matches;});
    setInterval(() => { if (!paused && !hovering && !activeDialog && !document.hidden && !wrapper.contains(document.activeElement)) goTo(current+1); },6000);
    goTo(0);
  }
  $$('.register-btn').forEach(button => {
    if (Date.parse(button.dataset.start) <= Date.now()) {button.disabled = true;button.textContent = 'Session ended';}
  });
  if ($('#countdown-timer')) {
    const timer = $('#countdown-timer');
    const deadline = Date.parse(timer.dataset.deadline);
    const updateCountdown = () => {
      const hours = Math.max(0,Math.ceil((deadline-Date.now())/3600000));
      timer.textContent = hours ? `${Math.floor(hours/24)} days · ${hours%24} hours remaining` : 'Seasonal promotion ended';
      $$('#curated-bundles [data-add]').forEach(button => {button.disabled = !hours;});
    };
    updateCountdown();setInterval(updateCountdown,60000);
    if (offers.member) $('#discount-status').textContent = offers.choice==='member'?'5% member offer selected.':'Member offer available on this browser.';
  }
  window.addEventListener('storage',event => {
    if ([CART_KEY,OFFER_KEY,FAVOURITE_KEY,null].includes(event.key)) {
      cart = normaliseCart(read(CART_KEY,[]));offers=normaliseOffers(read(OFFER_KEY,{}));favourites=normaliseFavourites(read(FAVOURITE_KEY,[]));
      if (activeDialog?.id==='receiptModal') {closeDialog();toast('Your cart changed in another tab. Review it before checkout.');}
      updateBadge();renderCart();renderFavourites();refreshSearch();
    }
  });
  updateBadge();renderCart();renderFavourites();
  if ($('#welcomeDiscountModal') && !read('beanBoutiqueWelcomeSeen',false) && !offers.welcome) {
    setTimeout(() => {if (!activeDialog) {openDialog('welcomeDiscountModal');write('beanBoutiqueWelcomeSeen',true);}},900);
  }
})();
