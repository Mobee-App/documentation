"use strict";(self.webpackChunkdocumentation_api=self.webpackChunkdocumentation_api||[]).push([[617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(b,i(i({ref:t},s),{},{components:n})):a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"documentation-api/SetupMobeeCommunity",id:"documentation-api/SetupMobeeCommunity",title:"SetupMobeeCommunity",description:"Setup Mobee Community",source:"@site/i18n/esp/docusaurus-plugin-content-docs/current/documentation-api/SetupMobeeCommunity.md",sourceDirName:"documentation-api",slug:"/documentation-api/SetupMobeeCommunity",permalink:"/documentation/esp/docs/documentation-api/SetupMobeeCommunity",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation-api/SetupMobeeCommunity.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MobeeLimitations",permalink:"/documentation/esp/docs/documentation-api/MobeeLimitations"},next:{title:"Static resources synchronization coverage",permalink:"/documentation/esp/docs/documentation-api/Static-resources-synchronization-coverage/"}},u={},p=[{value:"Setup Mobee Community",id:"setup-mobee-community",level:2},{value:"Output files in the Static Resources",id:"output-files-in-the-static-resources",level:2}],s={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"setup-mobee-community"},"Setup Mobee Community"),(0,r.kt)("p",null,"Salesforce does not allow community users to access some metadata using the API. To work around these limitations and optimize governor limits, Mobee provides a set of automated tools that extract the required metadata, including pages from Experience Cloud and other resources. The Mobee automated tools generate JSON files and zip files for the metadata records resources that will be included in the static resource."),(0,r.kt)("p",null,"To set up Mobee Community, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the Mobee procedure provided with the AppExchange. Provide the name of the Experience Cloud Site and any additional languages required."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Mobee.SetupUtils.prepareMobeeResources('Customer_Site1', 'fr');\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can also run the individual tools using the following sub-procedures:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Mobee.SetupUtils.refreshCoreMetadata();\nMobee.SetupUtils.refreshCustomLabel();\nMobee.SetupUtils.refreshExternalStringLocalization('fr');\nMobee.SetupUtils.siteExperienceBundleQueueable('Customer_Site1');\n")))),(0,r.kt)("p",null,"It is important to run these automated tools for the first time and each time you publish your Experience Cloud Site. The estimated time for running the tools is about 2 minutes."),(0,r.kt)("p",null,"The output of the procedure will generate the following files in the Static Resources directory:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mobee_CoreMetadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the main metadata of the Salesforce Core System, such as Validation Rules, Web Links, Lookup Filters, and Flow definitions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mobee_CoreCustomLabel"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the custom labels.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mobee_CoreExternalStringLocalization"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the translated custom labels for the specified language.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mobee_Community_Customer_Site1"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the Experience Cloud Site pages, themes, and other resources.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to verify if your resources are up to date?"),(0,r.kt)("br",{parentName:"p"}),"\n","Check the last modified date of the output files to ensure that the files are up to date."),(0,r.kt)("h2",{id:"output-files-in-the-static-resources"},"Output files in the Static Resources"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"File"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mobee_CoreMetadata"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Json File")),(0,r.kt)("td",{parentName:"tr",align:null},"Mobee Core Metadata listes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mobee_CoreCustomLabel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Json File")),(0,r.kt)("td",{parentName:"tr",align:null},"Mobee Core CustomLabels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mobee_CoreExternalStringLocalization"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Json File")),(0,r.kt)("td",{parentName:"tr",align:null},"Mobee Core ExternalStringLocalization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mobee_Community_Customer_Site1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Zip File")),(0,r.kt)("td",{parentName:"tr",align:null},"Site pages, components, and properties")))))}c.isMDXComponent=!0}}]);