"use strict";(self.webpackChunkdocumentation_api=self.webpackChunkdocumentation_api||[]).push([[59],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={},r="Envoi d'un Email avec Mod\xe8le Personnalis\xe9 et Code QR Dynamique dans Salesforce",l={unversionedId:"documentation-api/Classic Email Templater/QrCode",id:"documentation-api/Classic Email Templater/QrCode",title:"Envoi d'un Email avec Mod\xe8le Personnalis\xe9 et Code QR Dynamique dans Salesforce",description:"Dans cet exemple, nous allons vous guider \xe0 travers le processus d'envoi d'un email d'invitation aux clients depuis un compte dans Salesforce. L'email contiendra un code QR personnalis\xe9 g\xe9n\xe9r\xe9 dynamiquement pour chaque destinataire.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/documentation-api/Classic Email Templater/QrCode.md",sourceDirName:"documentation-api/Classic Email Templater",slug:"/documentation-api/Classic Email Templater/QrCode",permalink:"/documentation/fr/docs/documentation-api/Classic Email Templater/QrCode",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation-api/Classic Email Templater/QrCode.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ApplicationLifecycle",permalink:"/documentation/fr/docs/documentation-api/ApplicationLifecycle"},next:{title:"Community Supported Features",permalink:"/documentation/fr/docs/documentation-api/Community Supported Features"}},u={},s=[{value:"Configuration du Mod\xe8le d&#39;Email",id:"configuration-du-mod\xe8le-demail",level:2},{value:"Contenu du Mod\xe8le",id:"contenu-du-mod\xe8le",level:2},{value:"Sujet :",id:"sujet-",level:3},{value:"Corps HTML:",id:"corps-html",level:3},{value:"Aper\xe7u du Corps HTML :",id:"aper\xe7u-du-corps-html-",level:2},{value:"Email R\xe9sultant",id:"email-r\xe9sultant",level:2},{value:"Explication",id:"explication",level:2},{value:"Personnalisation",id:"personnalisation",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"envoi-dun-email-avec-mod\xe8le-personnalis\xe9-et-code-qr-dynamique-dans-salesforce"},"Envoi d'un Email avec Mod\xe8le Personnalis\xe9 et Code QR Dynamique dans Salesforce"),(0,i.kt)("p",null,"Dans cet exemple, nous allons vous guider \xe0 travers le processus d'envoi d'un email d'invitation aux clients depuis un compte dans Salesforce. L'email contiendra un code QR personnalis\xe9 g\xe9n\xe9r\xe9 dynamiquement pour chaque destinataire."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),': Bien que cet exemple utilise l\'objet "Compte" ("Account"), vous pouvez appliquer la m\xeame approche \xe0 d\'autres objets dans Salesforce.'),(0,i.kt)("h2",{id:"configuration-du-mod\xe8le-demail"},"Configuration du Mod\xe8le d'Email"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Type de Mod\xe8le")," : Personnalis\xe9"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"En-t\xeate de Lettre Classique")," : Non utilis\xe9")),(0,i.kt)("h2",{id:"contenu-du-mod\xe8le"},"Contenu du Mod\xe8le"),(0,i.kt)("h3",{id:"sujet-"},"Sujet :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"Invitation de {!Account.Name}\n")),(0,i.kt)("h3",{id:"corps-html"},"Corps HTML:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n    <title>Invitation de Compte</title>\n</head>\n<body>\n    <p>Cher client pr\xe9cieux,</p>\n    <p>Nous sommes ravis de vous inviter \xe0 notre \xe9v\xe9nement. Veuillez trouver ci-dessous votre code QR personnalis\xe9 :</p>\n    <img src="http://137.184.6.241:8080/qr-code?data={!CASESAFEID(Account.Id)}" alt="Code QR">\n    <p>Ce code QR est li\xe9 \xe0 votre compte avec l\'ID {!CASESAFEID(Account.Id)}. Votre participation est grandement appr\xe9ci\xe9e.</p>\n    <p>Merci !</p>\n    <p>Cordialement,<br>Votre Organisation</p>\n</body>\n</html>\n')),(0,i.kt)("h2",{id:"aper\xe7u-du-corps-html-"},"Aper\xe7u du Corps HTML :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sample Image",src:n(2792).Z,width:"1528",height:"766"})),(0,i.kt)("h2",{id:"email-r\xe9sultant"},"Email R\xe9sultant"),(0,i.kt)("p",null,"Apr\xe8s que le mod\xe8le a \xe9t\xe9 trait\xe9 par Salesforce, l'email sera envoy\xe9 aux clients. Voici \xe0 quoi pourrait ressembler l'email r\xe9sultant :"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"R\xe9sultat de l'Email d'Exemple :")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sample Image",src:n(3933).Z,width:"669",height:"387"})),(0,i.kt)("h2",{id:"explication"},"Explication"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Le mod\xe8le d\'email est configur\xe9 en tant que type "Personnalis\xe9", ce qui signifie que vous avez le contr\xf4le sur le contenu et la mise en page.'),(0,i.kt)("li",{parentName:"ul"},"L'en-t\xeate de lettre classique n'est pas utilis\xe9, donc l'email n'aura pas d'en-t\xeate/pied de page pr\xe9d\xe9finis depuis un mod\xe8le d'en-t\xeate de lettre."),(0,i.kt)("li",{parentName:"ul"},"Le sujet de l'email est g\xe9n\xe9r\xe9 dynamiquement en utilisant des champs de fusion. {!Account.Name} ins\xe8re le nom du compte dans la ligne de sujet."),(0,i.kt)("li",{parentName:"ul"},"Le corps HTML de l'email est o\xf9 r\xe9side le contenu principal."),(0,i.kt)("li",{parentName:"ul"},"La balise img source l'image du code QR depuis une URL. L'URL inclut le champ de fusion CASESAFEID(Account.Id) pour g\xe9n\xe9rer dynamiquement le code QR en fonction de l'ID du compte du destinataire."),(0,i.kt)("li",{parentName:"ul"},"Un paragraphe sous le code QR explique le but du code QR et son association avec le compte du destinataire."),(0,i.kt)("li",{parentName:"ul"},"L'email se termine par un message de remerciement et les informations de l'organisation exp\xe9ditrice.")),(0,i.kt)("h2",{id:"personnalisation"},"Personnalisation"),(0,i.kt)("p",null,"Ce mod\xe8le offre une exp\xe9rience d'invitation personnalis\xe9e pour chaque destinataire en incorporant le nom de leur compte et un code QR li\xe9 \xe0 leur compte sp\xe9cifique."),(0,i.kt)("p",null,"N'oubliez pas que l'URL du code QR (",(0,i.kt)("a",{parentName:"p",href:"http://137.184.6.241:8080/qr-code?data=%7B!CASESAFEID(Account.Id)%7D"},"http://137.184.6.241:8080/qr-code?data={!CASESAFEID(Account.Id)}"),") doit \xeatre fonctionnelle et capable de g\xe9n\xe9rer des codes QR bas\xe9s sur l'ID de compte fourni."),(0,i.kt)("p",null,"Cette approche am\xe9liore l'engagement des clients et offre une exp\xe9rience d'invitation unique gr\xe2ce aux mod\xe8les d'email Salesforce."))}p.isMDXComponent=!0},2792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Html-Body-49194f58feb07fba5be1c1fdb0e5f233.png"},3933:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/result-920f02bb9f3be51fcedb750139decc51.png"}}]);