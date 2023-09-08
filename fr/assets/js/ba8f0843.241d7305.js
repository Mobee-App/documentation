"use strict";(self.webpackChunkdocumentation_api=self.webpackChunkdocumentation_api||[]).push([[855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=a,b=p["".concat(u,".").concat(c)]||p[c]||d[c]||o;return n?r.createElement(b,i(i({ref:t},m),{},{components:n})):r.createElement(b,i({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i="Configuration de la Communaut\xe9 Mobee",l={unversionedId:"documentation-api/Community/Mobee Community Setup",id:"documentation-api/Community/Mobee Community Setup",title:"Configuration de la Communaut\xe9 Mobee",description:"Configuration de la Communaut\xe9 Mobee",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/documentation-api/4 - Community/Mobee Community Setup.md",sourceDirName:"documentation-api/4 - Community",slug:"/documentation-api/Community/Mobee Community Setup",permalink:"/documentation/fr/docs/documentation-api/Community/Mobee Community Setup",draft:!1,editUrl:"https://github.com/Mobee-App/documentation/blob/main/docs/documentation-api/4 - Community/Mobee Community Setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Th\xe8me et Personnalisation Pris en Charge dans la Communaut\xe9",permalink:"/documentation/fr/docs/documentation-api/Community/Community Supported Features"},next:{title:"Guide de l'administrateur",permalink:"/documentation/fr/docs/documentation-api/Timesheet Module/Admin Guide"}},u={},s=[{value:"Configuration de la Communaut\xe9 Mobee",id:"configuration-de-la-communaut\xe9-mobee-1",level:2},{value:"Fichiers de sortie dans les Ressources Statiques",id:"fichiers-de-sortie-dans-les-ressources-statiques",level:2}],m={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration-de-la-communaut\xe9-mobee"},"Configuration de la Communaut\xe9 Mobee"),(0,a.kt)("h2",{id:"configuration-de-la-communaut\xe9-mobee-1"},"Configuration de la Communaut\xe9 Mobee"),(0,a.kt)("p",null,"Salesforce n'autorise pas les utilisateurs de la communaut\xe9 \xe0 acc\xe9der \xe0 certaines m\xe9tadonn\xe9es \xe0 l'aide de l'API. Pour contourner ces limitations et optimiser les limites du gouverneur, Mobee fournit un ensemble d'outils automatis\xe9s qui extraient les m\xe9tadonn\xe9es requises, y compris les pages de l'Experience Cloud et d'autres ressources. Les outils automatis\xe9s de Mobee g\xe9n\xe8rent des fichiers JSON et des fichiers zip pour les ressources de m\xe9tadonn\xe9es qui seront incluses dans la ressource statique."),(0,a.kt)("p",null,"Pour configurer la Communaut\xe9 Mobee, suivez les \xe9tapes ci-dessous :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ex\xe9cutez la proc\xe9dure Mobee fournie avec l'AppExchange. Fournissez le nom du site de l'Experience Cloud et toute langue suppl\xe9mentaire requise."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Mobee.SetupUtils.prepareMobeeResources('Customer_Site1', 'fr');\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Vous pouvez \xe9galement ex\xe9cuter les outils individuels en utilisant les sous-proc\xe9dures suivantes :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Mobee.SetupUtils.refreshCoreMetadata();\nMobee.SetupUtils.refreshCustomLabel();\nMobee.SetupUtils.refreshExternalStringLocalization('fr');\nMobee.SetupUtils.siteExperienceBundleQueueable('Customer_Site1');\n")))),(0,a.kt)("p",null,"Il est important d'ex\xe9cuter ces outils automatis\xe9s la premi\xe8re fois et \xe0 chaque fois que vous publiez votre site Experience Cloud. Le temps estim\xe9 pour l'ex\xe9cution des outils est d'environ 2 minutes."),(0,a.kt)("p",null,"La sortie de la proc\xe9dure g\xe9n\xe9rera les fichiers suivants dans le r\xe9pertoire des Ressources Statiques :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ressource"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mobee_CoreMetadata"),(0,a.kt)("td",{parentName:"tr",align:null},"Contient les principales m\xe9tadonn\xe9es du syst\xe8me principal de Salesforce, telles que les r\xe8gles de validation, les liens web, les filtres de recherche et les d\xe9finitions de flux.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mobee_CoreCustomLabel"),(0,a.kt)("td",{parentName:"tr",align:null},"Contient les libell\xe9s personnalis\xe9s.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mobee_CoreExternalStringLocalization"),(0,a.kt)("td",{parentName:"tr",align:null},"Contient les libell\xe9s personnalis\xe9s traduits pour la langue sp\xe9cifi\xe9e.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mobee_Community_Customer_Site1"),(0,a.kt)("td",{parentName:"tr",align:null},"Contient les pages, les th\xe8mes et les autres ressources du site Experience Cloud.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Comment v\xe9rifier si vos ressources sont \xe0 jour ?"),(0,a.kt)("br",{parentName:"p"}),"\n","V\xe9rifiez la date de derni\xe8re modification des fichiers de sortie pour vous assurer qu'ils sont \xe0 jour."),(0,a.kt)("h2",{id:"fichiers-de-sortie-dans-les-ressources-statiques"},"Fichiers de sortie dans les Ressources Statiques"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Fichier"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mobee_CoreMetadata"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Fichier JSON")),(0,a.kt)("td",{parentName:"tr",align:null},"Liste des m\xe9tadonn\xe9es de base de Mobee")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mobee_CoreCustomLabel"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Fichier JSON")),(0,a.kt)("td",{parentName:"tr",align:null},"CustomLabels de base de Mobee")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mobee_CoreExternalStringLocalization"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Fichier JSON")),(0,a.kt)("td",{parentName:"tr",align:null},"ExternalStringLocalization de base de Mobee")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mobee_Community_Customer_Site1"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Fichier Zip")),(0,a.kt)("td",{parentName:"tr",align:null},"Pages du site, composants et propri\xe9t\xe9s de l'Experience Cloud")))))}d.isMDXComponent=!0}}]);