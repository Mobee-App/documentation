"use strict";(self.webpackChunkdocumentation_api=self.webpackChunkdocumentation_api||[]).push([[688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,g=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={},i="QR Code Generator Setup",c={unversionedId:"documentation-api/QR Code Module/qr-code-generator-guide",id:"documentation-api/QR Code Module/qr-code-generator-guide",title:"QR Code Generator Setup",description:"Description: The QR Code Generator component for Salesforce offers the ability to create QR codes from within the Salesforce interface. The generated QR code will contain the record ID of the object where the component is placed, streamlining data access and sharing.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/documentation-api/2 - QR Code Module/qr-code-generator-guide.md",sourceDirName:"documentation-api/2 - QR Code Module",slug:"/documentation-api/QR Code Module/qr-code-generator-guide",permalink:"/documentation/fr/docs/documentation-api/QR Code Module/qr-code-generator-guide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation-api/2 - QR Code Module/qr-code-generator-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mobee Mobile App Installation Guide",permalink:"/documentation/fr/docs/documentation-api/Mobee Installation Guide/mobile-app-installation-guide"},next:{title:"QR Code Scanner Setup",permalink:"/documentation/fr/docs/documentation-api/QR Code Module/qr-code-scanner-guide"}},l={},p=[{value:"Installation:",id:"installation",level:2},{value:"How to Add the QR Code Generator to an Object Page:",id:"how-to-add-the-qr-code-generator-to-an-object-page",level:2},{value:"Step-by-Step Instructions:",id:"step-by-step-instructions",level:3},{value:"Example Use Case: Generating QR Code for a Contact Record",id:"example-use-case-generating-qr-code-for-a-contact-record",level:2}],d={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"qr-code-generator-setup"},"QR Code Generator Setup"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),": The QR Code Generator component for Salesforce offers the ability to create QR codes from within the Salesforce interface. The generated QR code will contain the record ID of the object where the component is placed, streamlining data access and sharing."),(0,a.kt)("h2",{id:"installation"},"Installation:"),(0,a.kt)("p",null,"Before leveraging the QR Code Generator component, ensure that the Mobee package is installed in your Salesforce environment."),(0,a.kt)("h2",{id:"how-to-add-the-qr-code-generator-to-an-object-page"},"How to Add the QR Code Generator to an Object Page:"),(0,a.kt)("h3",{id:"step-by-step-instructions"},"Step-by-Step Instructions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Access the Object Page"),": Navigate to the desired object page where you want the QR code generator."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Enter Edit Mode"),": Click on the 'Edit Page' option, usually found at the top right, to switch to the Lightning App Builder."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Add the QR Code Generator Component"),": ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In the Lightning App Builder, look for the lightning components section on the left pane."),(0,a.kt)("li",{parentName:"ul"},"Drag the 'generateQrCode' component and place it at your preferred location on the page layout."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Configure Component Attributes"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The component is designed to automatically fetch the record ID of the object where it's placed, and use it for the QR code generation. No manual input is required."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Save & Activate"),": Once configured, save your changes and activate the page to reflect the modifications in the Salesforce interface.")),(0,a.kt)("h2",{id:"example-use-case-generating-qr-code-for-a-contact-record"},"Example Use Case: Generating QR Code for a Contact Record"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Navigate to a Contact"),": Start by accessing a specific Contact in Salesforce where you'd like a QR code.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Enter Edit Mode"),": Click on 'Edit Page'."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Sample Image",src:n(5188).Z,width:"547",height:"335"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Insert QR Code Generator Component"),": "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Locate the 'generateQrCode' component in the left menu section."),(0,a.kt)("li",{parentName:"ul"},"Drag and drop it to your desired position on the account page layout.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Sample Image",src:n(5369).Z,width:"580",height:"360"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"QR Code Generation"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Once placed and the page is saved, the component will automatically generate a QR code containing the Contact record ID. ")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Sample Image",src:n(7574).Z,width:"368",height:"314"})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Make sure you have the necessary permissions to add components to page layouts in Salesforce. "),(0,a.kt)("p",null,"Happy QR Code Generating!"))}u.isMDXComponent=!0},5188:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/contact_page-9c384a85ee759af151ed8920c37b75c1.jpg"},5369:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/edit_page-220f99efb4f84ed7251b4d2cc9f20ec2.jpg"},7574:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/qr_code-8831180b0162bd689c9780ab896baaef.png"}}]);