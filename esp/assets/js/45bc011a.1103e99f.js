"use strict";(self.webpackChunkdocumentation_api=self.webpackChunkdocumentation_api||[]).push([[7],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i=void 0,s={unversionedId:"documentation-api/ApplicationLifecycle",id:"documentation-api/ApplicationLifecycle",title:"ApplicationLifecycle",description:"Application Lifecycle and Development Models",source:"@site/i18n/esp/docusaurus-plugin-content-docs/current/documentation-api/ApplicationLifecycle.md",sourceDirName:"documentation-api",slug:"/documentation-api/ApplicationLifecycle",permalink:"/documentation/esp/docs/documentation-api/ApplicationLifecycle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation-api/ApplicationLifecycle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MobeeDocumentation",permalink:"/documentation/esp/docs/documentation-api/"},next:{title:"Apex Triggers",permalink:"/documentation/esp/docs/documentation-api/CRM Permissions/Apex Triggers"}},l={},c=[{value:"Application Lifecycle and Development Models",id:"application-lifecycle-and-development-models",level:2},{value:"Application Lifecycle Management (ALM)",id:"application-lifecycle-management-alm",level:3},{value:"Basics of Release Management",id:"basics-of-release-management",level:2},{value:"Create a Release Management Process",id:"create-a-release-management-process",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"application-lifecycle-and-development-models"},"Application Lifecycle and Development Models"),(0,o.kt)("p",null,"Reference: ",(0,o.kt)("a",{parentName:"p",href:"https://trailhead.salesforce.com/en/content/learn/modules/application-lifecycle-and-development-models"},"https://trailhead.salesforce.com/en/content/learn/modules/application-lifecycle-and-development-models")),(0,o.kt)("h3",{id:"application-lifecycle-management-alm"},"Application Lifecycle Management (ALM)"),(0,o.kt)("p",null,"We have the following three development models in Salesforce:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change set development"),(0,o.kt)("li",{parentName:"ul"},"Org development"),(0,o.kt)("li",{parentName:"ul"},"Package development")),(0,o.kt)("p",null,"These 3 models follow the same ALM process. But the models differ in the way that they let you manage changes to your org.\nSome changes can be done directley in Production Org such Reports and Dashboards others changes should be tested before making them available in production."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ALM",src:n(5213).Z,width:"275",height:"183"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Plan Release"),"\nStart your customization or development project with a plan. Gather requirements and analyze them. Have your product manager (or equivalent) create design specifications and share them with the development team for implementation. Determine the various development and testing environments the team needs as the project progresses through the ALM cycle."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Develop"),"\nComplete the work, following the design specifications. Perform the work in an environment containing a copy of the production org\u2019s metadata, but with no production data. Develop on Lightning Platform using an appropriate combination of declarative tools (Process Builder, the Custom Object wizard, and others in the UI) and programmatic tools (Developer Console, Source Code Editor, or Visual Studio Code)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Test"),"\nExercise the changes you\u2019re making to check that they work as intended before you integrate them with other people\u2019s work. Do your testing in the same type of environment as you used in the develop step, but keep your development and integrated testing environments separate. At this point, focus on testing your changes themselves, not on understanding how your changes affect other parts of the release or the app as a whole."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4: Build Release"),"\nAggregate all the assets you created or modified during the develop stage into a single release artifact: a logical bundle of customizations that you deploy to production. From this point on, focus on what you\u2019re going to release, not on the contributions of individuals."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5: Test Release"),"\nTest what you\u2019re actually going to deploy, but test safely in a staging environment that mimics production as much as possible. Use a realistic amount of representative production data. Connect your test environments with all the external systems they need to mimic your production system\u2019s integration points. Run full regression and final performance tests in this step. Test the release with a small set of experienced people who provide feedback (a technique called user-acceptance testing)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6: Release"),"\nWhen you\u2019ve completed your testing and met your quality benchmarks, you can deploy the customization to production. Train your employees and partners so they understand the changes. If a release has significant user impact, create a separate environment with realistic data for training users."),(0,o.kt)("h2",{id:"basics-of-release-management"},"Basics of Release Management"),(0,o.kt)("h3",{id:"create-a-release-management-process"},"Create a Release Management Process"),(0,o.kt)("p",null,"By implementing the ALM cycle, we adopt a basic release management process. But the team has both ",(0,o.kt)("strong",{parentName:"p"},"large")," and ",(0,o.kt)("strong",{parentName:"p"},"small")," projects in progress, all at different steps in the ALM cycle. Releases typically fall into one of three categories"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Patch Bug fixes and simple changes.")),(0,o.kt)("p",null,"Simple changes include reports, dashboards, list views, and email templates.\nMinor Changes with limited impact, such as a new workflow rule or trigger impacting a single business process.\nThese releases typically require testing, but only limited training and change management. Typically, a team delivers the changes for a minor release within a few weeks."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Major Changes with significant impact.")),(0,o.kt)("p",null,"Including changes with one or more dependencies. Because these releases can greatly affect the user experience and data quality, they require thorough testing, training, and careful change management. Major releases are typically delivered once a quarter (Salesforce does it three times a year)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Release on a consistent schedule.")),(0,o.kt)("p",null,"Aim to release at regular intervals and on a given day of the week. For example, maybe minor releases occur at 8 PM eastern time on the first Tuesday of every month. Scheduling consistency helps with company-wide planning and sets expectations with your business users."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("u",null,"NB:"))," One more thing: Try not to release near holidays or other major events."))}m.isMDXComponent=!0},5213:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);