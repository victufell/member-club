(()=>{"use strict";var n={612:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,".mc-fidelity {\n    margin-top: 8px;\n}\n\n.mc-fidelity__header {\n    display: flex;\n    gap: 16px;\n    margin-bottom: 20px;\n}\n\n.mc-fidelity__header-subtitle {\n    margin-bottom: 4px;\n}\n\n.mc-fidelity__header-user-id { \n    text-wrap: nowrap;\n    height: 100%;\n    background-color: var(--base-gray-300);\n    padding: 3.5px 8px;\n    border-radius: 8px;\n}\n\n.mc-fidelity__items {\n    display: grid;\n    gap: 8px;\n    grid-template-columns: repeat(5, 56px);\n    align-items: center;\n    justify-content: center;\n\n}\n\n.mc-fidelity__items-item {\n    background-color: var(--base-gray-200);\n    border-radius: 12px;\n    display: flex;\n    width: 56px;\n    height: 56px;\n    align-items: center;\n    justify-content: center;\n    \n    > img {\n        width: 25px;\n        height: 25px;\n        object-fit: contain;\n    }\n}\n\n@media (width > 980px) {\n    .mc-fidelity {\n        grid-area: B;\n        margin-top: 0;\n    }\n    \n    .mc-fidelity__header {\n        margin-bottom: 32px;\n        justify-content: space-between;\n    }\n\n    .mc-fidelity__items {\n        gap: 16px;\n        grid-template-columns: repeat(5, 88px);\n        justify-content: flex-start;\n    }\n\n    .mc-fidelity__items-item {\n        width: 88px;\n        height: 88px;\n\n        > img {\n            width: 40px;\n            height: 40px;\n        }\n    }\n}",""]);const s=o},721:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,".mc-header {\n    display: flex;\n    justify-content: center;\n    padding-block: 32px 16px;\n    \n}\n\n.mc-header__logo {\n    width: 99.43px;\n    max-height: 48px;\n    object-fit: contain;\n}\n\n@media (width > 980px) {\n    .mc-header__logo {\n        width: 116px;\n        max-height: 56px;\n    }\n}",""]);const s=o},742:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,'.mc-identify__wrapper {\n    display: flex;\n    justify-content: center;\n\n    border: none;\n    position: relative;\n    margin-bottom: 20px;\n}\n\n.mc-identify__input {\n    width: 100%;\n    max-width: 351px;\n    border-radius: 12px;\n    padding: 16px;\n    background-color: var(--base-gray-300);\n    border: 1px solid var(--base-gray-400);\n    transition: outline;\n    color: var(--base-gray-700);\n}\n\n.mc-identify__input::placeholder {\n    color: var(--base-gray-500);\n}\n\n.mc-identify__input:focus, \n.mc-identify__input:hover{\n    outline-color: var(--main-pink);\n}\n\n.mc-identify__icon {\n\n    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);\n    background-color: var(--base-gray-700);\n    padding: 12px 14px;\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    transform: translateY(-50%);\n    top: 50%;\n    right: 8px;\n    cursor: pointer;\n}\n\n.mc-identify__icon[disabled="true"] {\n    opacity: .6;\n    pointer-events: none;\n}\n\n.mc-identify__icon > svg {\n    width: 13px;\n    height: 16px;\n}\n\n@media (width > 980px) {\n    .mc-identify__wrapper {\n        max-width: 400px;\n        margin: 0 auto;\n        margin: 32px auto 64px auto;\n    }\n\n    .mc-identify__input {\n        max-width: 400px;\n    }\n\n}',""]);const s=o},208:(n,e,t)=>{t.d(e,{A:()=>x});var r=t(601),i=t.n(r),a=t(314),o=t.n(a),s=t(463),d=t(993),c=t(146),p=t(721),l=t(742),u=t(687),m=t(612),g=t(983),f=t(251),b=o()(i());b.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap);"]),b.i(s.A),b.i(d.A),b.i(c.A),b.i(p.A),b.i(l.A),b.i(u.A),b.i(m.A),b.i(g.A),b.i(f.A),b.push([n.id,'body {\n    height: 100%;\n    font-family: "Oxygen", sans-serif;\n    background-color: var(--base-gray-200);\n}\n\n.member-club-app {\n    padding-bottom: 24px;\n}\n\n.member-club-app__data {\n    display: none;\n}\n\n.member-club-app__data--active {\n    display: block;\n}\n\n@media (width > 980px) {\n    .member-club-app__data--active {\n        display: grid;\n        grid-template-areas: \n            "A B B B"\n            "C B B B"\n            "C B B B"\n            "C D D D";\n\n        gap: 16px 24px;\n    }\n    \n}\n',""]);const x=b},687:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,".mc-profile {\n    display: flex;\n    align-items: center;\n    background-color: var(--base-gray-100);\n    border: 1px solid var(--base-gray-200);\n    border-radius: 16px;\n    padding: 16px;\n    gap: 16px;\n\n}\n\n.mc-profile__image-wrapper {\n    position: relative;\n    padding: 2px;\n    display: flex;\n    border-radius: 10px;\n    background: linear-gradient(90deg, #2DAA6E 0%, #2DAAAA 33.33%, #856CCF 66.67%, #D658B3 100%);\n}\n\n.mc-profile__image-wrapper::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: transparent;\n    border-radius: 10px;\n    margin: 2px;\n}\n\n.mc-profile__avatar {\n    width: 56px;\n    height: 56px;\n\n}\n\n.mc-profile__name {\n    margin-bottom: 4px;\n}\n\n/* Desktop */\n\n@media (width > 980px) {\n    .mc-profile {\n        grid-area: A;\n    }\n}",""]);const s=o},983:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,".mc-progress {\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n    margin-block: 8px;\n}\n\n.mc-progress > div {\n    margin-right: 24px;\n}\n\n.mc-progress__wrapper-bar {\n    display: flex;\n    align-items: center;\n    margin-top: 8.5px;\n}\n\n.mc-progress__wrapper-bar__progress-bar {\n    min-width: 182px;\n    height: 8px;\n    background-color: var(--base-gray-300);\n    border-radius: 10px;\n    position: relative;\n    margin-right: 12px;\n}\n\n.mc-progress__wrapper-bar__steps {\n    white-space: nowrap;\n}\n\n.mc-progress__wrapper-bar__progress-bar > span {\n    position: absolute;\n    height: 8px;\n    background: linear-gradient(90deg, #2DAA6E 0%, #2DAAAA 33.33%, #856CCF 66.67%, #D658B3 100%);\n    border-radius: 10px;\n}\n\n\n@media (width > 980px) {\n    .mc-progress {\n        grid-area: D;\n    }\n}",""]);const s=o},993:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,"* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nbutton,\ninput {\n\tborder: none;\n}\n\nol,\nul {\n\tlist-style: none;\n}\n\nblockquote,\nq {\n\tquotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=o},251:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,".mc-resume__header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-bottom: 16px;\n    border-bottom: 1px solid var(--base-gray-200);\n}\n\n.mc-resume__items {\n    overflow-y: scroll;\n    max-height: 360px;\n}\n\n.mc-resume__items__item {\n    margin-top: 12px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    &:first-child {\n        margin-top: 14px;\n    }\n}\n\n.mc-resume__items__item-image-wrapper {\n    border-radius: 50%;\n    padding: 5.5px;\n    background: rgba(69, 180, 66, 0.12);\n    display: flex;\n    align-items: center;\n}\n\n.mc-resume__items__item-image-wrapper > img {\n    max-width: 21px;\n    width: 100%;\n    object-fit: contain;\n}\n\n\n@media (width > 980px) {\n    .mc-resume {\n        grid-area: C;\n    }\n}",""]);const s=o},463:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,".ds-container {\n    max-width: 375px;\n    padding-inline: 12px;\n    margin: 0 auto;\n}\n\n.ds__title {\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 140%;\n    color: var(--base-gray-600);\n\n}\n\n.ds__subtitle {\n    font-weight: 700;\n    font-size: 12px;\n    line-height: 140%;\n    color: var(--base-gray-500);\n}\n\n.ds__description {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 140%;\n    color: var(--base-gray-500);\n}\n\n.ds__box {\n    background-color: var(--base-gray-100);\n    border: 1px solid var(--base-gray-200);\n    border-radius: 16px;\n}\n\n.ds__box--sm {\n    padding: 16px;\n}\n\n.ds__box--md {\n    padding: 24px 20px;\n}\n\n\n@media (width > 980px) {\n    .ds-container {\n        max-width: 912px;\n    }\n\n    .ds__box--md {\n        padding: 36px;\n    }\n}",""]);const s=o},146:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,":root {\n    /* Color styles */\n    --main-pink: #D658B3;\n    --main-green: #45B442;\n    --base-white: #FFFFFF;\n    --base-gray-100: #F4F1F2;\n    --base-gray-200: #E9E7E9;\n    --base-gray-300: #DFDCDF;\n    --base-gray-400: #CECACD;\n    --base-gray-500: #756C71;\n    --base-gray-600: #4A4448;\n    --base-gray-700: #332B31;\n\n    /* Text-size styles */\n    --heading-title-md: 24px;\n    --heading-title-sm: 18px;\n    --heading-subtitle-md: 14px;\n    --heading-subtitle-sm: 12px;\n    --body-text-md: 16px;\n    --body-text-sm: 14px;\n    --body-text-xs: 12px;\n\n    --desktop-size: 980px;\n}",""]);const s=o},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);r&&o[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],p=a[c]||0,l="".concat(c," ").concat(p);a[c]=p+1;var u=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=i(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:g,references:1})}o.push(l)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=t(a[o]);e[s].references--}for(var d=r(n,i),c=0;c<a.length;c++){var p=t(a[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),i=t.n(r),a=t(825),o=t.n(a),s=t(659),d=t.n(s),c=t(56),p=t.n(c),l=t(540),u=t.n(l),m=t(113),g=t.n(m),f=t(208),b={};b.styleTagTransform=g(),b.setAttributes=p(),b.insert=d().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=u(),i()(f.A,b),f.A&&f.A.locals&&f.A.locals;var x=function(n,e,t,r){return new(t||(t=Promise))((function(i,a){function o(n){try{d(r.next(n))}catch(n){a(n)}}function s(n){try{d(r.throw(n))}catch(n){a(n)}}function d(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(o,s)}d((r=r.apply(n,e||[])).next())}))};(()=>{const n=document.querySelector("#btn-enter-id"),e=document.querySelector('[data-identify="user-id"]');if(!n||!e)return void console.warn("Erro no carregamento da DOM...");const t=()=>x(void 0,void 0,void 0,(function*(){n.setAttribute("disabled","true");try{const t=yield(n=>x(void 0,void 0,void 0,(function*(){var e;const t=null!==(e=null==n?void 0:n.value.trim())&&void 0!==e?e:"";if(!t)return alert("Por favor, insira um ID válido."),null;try{const n=((n,e)=>e.find((({id:e})=>n===e))||null)(t,yield x(void 0,void 0,void 0,(function*(){const n=yield fetch("http://localhost:3000/clients");if(!n.ok)throw alert("Tivemos problemas internos! Consulte o atendimento."),new Error("Failed to fetch clients");return yield n.json()})));return n||(alert(`Usuário com ID ${t} não encontrado.`),null)}catch(n){return alert("Erro ao processar a solicitação. Consulte o atendimento."),null}})))(e);t&&(n.removeAttribute("disabled"),(n=>{if(!n||!n.id)return void console.warn("Client data is invalid or ID is missing.");const{id:e,name:t,clientSince:r,loyaltyCard:i,appointmentHistory:a}=n;((n,e)=>{const t=document.querySelectorAll("[data-profile]");if(e&&n){const r={name:n,date:`Cliente desde ${e}`};t.forEach((n=>{const e=(null==n?void 0:n.getAttribute("data-profile"))||"",t=r[e]||"";t&&(n.textContent=t)}))}})(t,r),(n=>{const e=document.querySelector('[data-fidelity="ID"]');e&&(e.textContent=`ID: ${n}`)})(e),(n=>{const e=document.querySelector('[data-fidelity="items"]');e&&(e.innerHTML="",new Array(10).fill(void 0).forEach(((t,r)=>{const i=r+1===10,a=r+1<=n,o=document.createElement("li");o.classList.add("mc-fidelity__items-item");const s=document.createElement("img");a&&(s.src=i?"./assets/ic-gift-active.svg":"./assets/ic-check-with-bg.svg"),!a&&i&&(s.src="./assets/ic-gift-disabled.svg"),Boolean(s.src)&&o.appendChild(s),e.append(o)})))})(i.totalCuts),(n=>{const e={amount:document.querySelector('[data-progress="amount"]'),steps:document.querySelector('[data-progress="steps"]'),progressBar:document.querySelector('[data-progress="progressBar"]')},{totalCuts:t,cutsNeeded:r,cutsRemaining:i}=n;if(e.amount&&(e.amount.textContent=String(i)),e.steps&&(e.steps.textContent=`${t} de ${r}`),e.progressBar){const n=(r-i)/r*100;e.progressBar.style.width=`${n}%`}0===r&&e.progressBar&&alert("Parabéns! Seu próximo corte é gratuito!")})(i),(n=>{const e=document.querySelector('[data-resume="amount"]'),t=document.querySelector('[data-resume="items"]'),r=n.length;if(e){const n=1===r?"corte":"cortes";e.textContent=`${r} ${n}`}if(t){const e=n.map((({date:n,time:e})=>`\n            <li class="mc-resume__items__item">\n                <div>\n                    <p class="ds__subtitle">${n}</p>\n                    <p class="ds__description">${e}</p>\n                </div>\n                <div class="mc-resume__items__item-image-wrapper">\n                    <img src="./assets/ic-check-without-bg.svg" />\n                </div>\n            </li>\n        `));t.innerHTML=e.join("")}})(a),(n=>{var e,t;const r=document.querySelector('[data-mc="user-info"]');n?null===(e=null==r?void 0:r.classList)||void 0===e||e.add("member-club-app__data--active"):null===(t=null==r?void 0:r.classList)||void 0===t||t.remove("member-club-app__data--active")})(n)})(t))}catch(n){throw console.error("Erro ao tentar exibir o cliente:",n),n}}));n.addEventListener("click",t),e.addEventListener("input",(e=>{((n,e)=>{const t=n.target,r=t.value.replace(/[A-Z]/gi,"");r?(t.value=r,null==e||e.removeAttribute("disabled")):null==e||e.setAttribute("disabled","true")})(e,n)})),e.addEventListener("keypress",(n=>{var e;const r=n.key;"enter"===(null===(e=null==r?void 0:r.trim())||void 0===e?void 0:e.toLowerCase())&&t()}))})()})();