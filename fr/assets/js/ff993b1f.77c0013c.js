"use strict";(self.webpackChunkdocumentation_api=self.webpackChunkdocumentation_api||[]).push([[819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(f,r(r({ref:t},s),{},{components:n})):a.createElement(f,r({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={},r="Mod\xe8le d'e-mail personnalis\xe9",l={unversionedId:"documentation-api/QR Code Module/qr-codes-in-email-template",id:"documentation-api/QR Code Module/qr-codes-in-email-template",title:"Mod\xe8le d'e-mail personnalis\xe9",description:"Dans cet exemple, nous allons vous guider \xe0 travers le processus d'envoi d'un email d'invitation aux clients depuis un compte dans Salesforce. L'email contiendra un code QR personnalis\xe9 g\xe9n\xe9r\xe9 dynamiquement pour chaque destinataire.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/documentation-api/2 - QR Code Module/qr-codes-in-email-template.md",sourceDirName:"documentation-api/2 - QR Code Module",slug:"/documentation-api/QR Code Module/qr-codes-in-email-template",permalink:"/documentation/fr/docs/documentation-api/QR Code Module/qr-codes-in-email-template",draft:!1,editUrl:"https://github.com/Mobee-App/documentation/blob/main/docs/documentation-api/2 - QR Code Module/qr-codes-in-email-template.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration du Scanner de Codes QR",permalink:"/documentation/fr/docs/documentation-api/QR Code Module/qr-code-scanner-guide"},next:{title:"Module de g\xe9n\xe9ration de documents Mobee",permalink:"/documentation/fr/docs/documentation-api/Document Generation Module/mobee-document-generator"}},u={},d=[{value:"Configuration du Mod\xe8le d&#39;Email",id:"configuration-du-mod\xe8le-demail",level:2},{value:"Contenu du Mod\xe8le",id:"contenu-du-mod\xe8le",level:2},{value:"Sujet :",id:"sujet-",level:3},{value:"Corps HTML:",id:"corps-html",level:3},{value:"Aper\xe7u du Corps HTML :",id:"aper\xe7u-du-corps-html-",level:2},{value:"Email R\xe9sultant",id:"email-r\xe9sultant",level:2},{value:"Explication",id:"explication",level:2},{value:"Personnalisation",id:"personnalisation",level:2}],s={toc:d},p="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mod\xe8le-de-mail-personnalis\xe9"},"Mod\xe8le d'e-mail personnalis\xe9"),(0,o.kt)("p",null,"Dans cet exemple, nous allons vous guider \xe0 travers le processus d'envoi d'un email d'invitation aux clients depuis un compte dans Salesforce. L'email contiendra un code QR personnalis\xe9 g\xe9n\xe9r\xe9 dynamiquement pour chaque destinataire."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Bien que cet exemple utilise l'objet \"Contact\", vous pouvez appliquer la m\xeame approche \xe0 d'autres objets dans Salesforce."),(0,o.kt)("h2",{id:"configuration-du-mod\xe8le-demail"},"Configuration du Mod\xe8le d'Email"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Type de Mod\xe8le")," : Personnalis\xe9"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"En-t\xeate de Lettre Classique")," : Non utilis\xe9")),(0,o.kt)("h2",{id:"contenu-du-mod\xe8le"},"Contenu du Mod\xe8le"),(0,o.kt)("h3",{id:"sujet-"},"Sujet :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"Invitation pour {!Contact.Name}\n")),(0,o.kt)("h3",{id:"corps-html"},"Corps HTML:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n    <title>Invitation de Compte</title>\n</head>\n<body>\n    <p>Cher client pr\xe9cieux,</p>\n    <p>Nous sommes ravis de vous inviter \xe0 notre \xe9v\xe9nement. Veuillez trouver ci-dessous votre code QR personnalis\xe9 :</p>\n    <img src="https://api.mobee-app.com/qr-code?width=200&data={!CASESAFEID(Contact.Id)}" alt="Code QR">\n    <p>Ce code QR est li\xe9 \xe0 votre compte avec l\'ID {!CASESAFEID(Contact.Id)}. Votre participation est grandement appr\xe9ci\xe9e.</p>\n    <p>Merci !</p>\n    <p>Cordialement,<br>Votre Organisation</p>\n</body>\n</html>\n')),(0,o.kt)("h2",{id:"aper\xe7u-du-corps-html-"},"Aper\xe7u du Corps HTML :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sample Image",src:n(4248).Z,width:"1232",height:"766"})),(0,o.kt)("h2",{id:"email-r\xe9sultant"},"Email R\xe9sultant"),(0,o.kt)("p",null,"Apr\xe8s que le mod\xe8le a \xe9t\xe9 trait\xe9 par Salesforce, l'email sera envoy\xe9 aux clients. Voici \xe0 quoi pourrait ressembler l'email r\xe9sultant :"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"R\xe9sultat de l'Email d'Exemple :")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sample Image",src:n(8277).Z,width:"593",height:"350"})),(0,o.kt)("h2",{id:"explication"},"Explication"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Le mod\xe8le d\'email est configur\xe9 en tant que type "Personnalis\xe9", ce qui signifie que vous avez le contr\xf4le sur le contenu et la mise en page.'),(0,o.kt)("li",{parentName:"ul"},"L'en-t\xeate de lettre classique n'est pas utilis\xe9, donc l'email n'aura pas d'en-t\xeate/pied de page pr\xe9d\xe9finis depuis un mod\xe8le d'en-t\xeate de lettre."),(0,o.kt)("li",{parentName:"ul"},"Le sujet de l'email est g\xe9n\xe9r\xe9 dynamiquement en utilisant des champs de fusion. {!Contact.Name} ins\xe8re le nom du compte dans la ligne de sujet."),(0,o.kt)("li",{parentName:"ul"},"Le corps HTML de l'email est o\xf9 r\xe9side le contenu principal."),(0,o.kt)("li",{parentName:"ul"},"La balise img source l'image du code QR depuis une URL. L'URL inclut le champ de fusion CASESAFEID(Contact.Id) pour g\xe9n\xe9rer dynamiquement le code QR en fonction de l'ID du compte du destinataire."),(0,o.kt)("li",{parentName:"ul"},"Un paragraphe sous le code QR explique le but du code QR et son association avec le compte du destinataire."),(0,o.kt)("li",{parentName:"ul"},"L'email se termine par un message de remerciement et les informations de l'organisation exp\xe9ditrice.")),(0,o.kt)("h2",{id:"personnalisation"},"Personnalisation"),(0,o.kt)("p",null,"Ce mod\xe8le offre une exp\xe9rience d'invitation personnalis\xe9e pour chaque destinataire en incorporant le nom de leur compte et un code QR li\xe9 \xe0 leur compte sp\xe9cifique."),(0,o.kt)("p",null,"Cette approche am\xe9liore l'engagement des clients et offre une exp\xe9rience d'invitation unique gr\xe2ce aux mod\xe8les d'email Salesforce."))}c.isMDXComponent=!0},4248:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Html-Body-00bcbc81c672bd397f2857291c464160.png"},8277:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/result-72504261b42111757384588428c6d192.png"}}]);