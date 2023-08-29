"use strict";(self.webpackChunkdocumentation_api=self.webpackChunkdocumentation_api||[]).push([[614],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[m]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={},l="Sending Custom Template Email with Dynamic QR Code in Salesforce",r={unversionedId:"documentation-api/Classic Email Templater/QrCode",id:"documentation-api/Classic Email Templater/QrCode",title:"Sending Custom Template Email with Dynamic QR Code in Salesforce",description:"In this example, we'll walk through the process of sending an invitation email to clients from an account in Salesforce. The email will contain a personalized QR code that is dynamically generated for each recipient.",source:"@site/docs/documentation-api/Classic Email Templater/QrCode.md",sourceDirName:"documentation-api/Classic Email Templater",slug:"/documentation-api/Classic Email Templater/QrCode",permalink:"/documentation/docs/documentation-api/Classic Email Templater/QrCode",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation-api/Classic Email Templater/QrCode.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ApplicationLifecycle",permalink:"/documentation/docs/documentation-api/ApplicationLifecycle"},next:{title:"Community Supported Features",permalink:"/documentation/docs/documentation-api/Community Supported Features"}},c={},p=[{value:"Email Template Setup",id:"email-template-setup",level:2},{value:"Template Content",id:"template-content",level:2},{value:"Subject:",id:"subject",level:3},{value:"HTML Body:",id:"html-body",level:3},{value:"Sample HTML Body Preview:",id:"sample-html-body-preview",level:2},{value:"Resulting Email",id:"resulting-email",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Personalization",id:"personalization",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sending-custom-template-email-with-dynamic-qr-code-in-salesforce"},"Sending Custom Template Email with Dynamic QR Code in Salesforce"),(0,i.kt)("p",null,"In this example, we'll walk through the process of sending an invitation email to clients from an account in Salesforce. The email will contain a personalized QR code that is dynamically generated for each recipient."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),': While this example uses the "Account" object, you can apply the same approach to other objects in Salesforce.'),(0,i.kt)("h2",{id:"email-template-setup"},"Email Template Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Template Type"),": Custom"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Classic Letterhead"),": Not used")),(0,i.kt)("h2",{id:"template-content"},"Template Content"),(0,i.kt)("h3",{id:"subject"},"Subject:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"Invitation from {!Account.Name}\n")),(0,i.kt)("h3",{id:"html-body"},"HTML Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n    <title>Account Invitation</title>\n</head>\n<body>\n    <p>Dear valued customer,</p>\n    <p>We are excited to invite you to our event. Please find your personalized QR code below:</p>\n    <img src="http://137.184.6.241:8080/qr-code?data={!CASESAFEID(Account.Id)}" alt="QR Code">\n    <p>This QR code is linked to your account with {!CASESAFEID(Account.Id)}. Your participation is highly appreciated.</p>\n    <p>Thank you!</p>\n    <p>Sincerely,<br>Your Organization</p>\n</body>\n</html>\n')),(0,i.kt)("h2",{id:"sample-html-body-preview"},"Sample HTML Body Preview:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sample Image",src:a(9283).Z,width:"1528",height:"766"})),(0,i.kt)("h2",{id:"resulting-email"},"Resulting Email"),(0,i.kt)("p",null,"After the template is processed by Salesforce, the email will be sent to clients. Here's what the resulting email might look like:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sample Email Result:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sample Image",src:a(6437).Z,width:"669",height:"387"})),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The email template is set up as a Custom type, which means you have control over the content and layout."),(0,i.kt)("li",{parentName:"ul"},"Classic Letterhead is not used, so the email won't have a predefined header/footer from a letterhead template."),(0,i.kt)("li",{parentName:"ul"},"The subject of the email is dynamically generated using merge fields. {!Account.Name} inserts the account's name into the subject line."),(0,i.kt)("li",{parentName:"ul"},"The HTML body of the email is where the main content resides."),(0,i.kt)("li",{parentName:"ul"},"The img tag sources the QR code image from a URL. The URL includes the CASESAFEID(Account.Id) merge field to dynamically generate the QR code based on the recipient's account ID."),(0,i.kt)("li",{parentName:"ul"},"A paragraph below the QR code explains the purpose of the QR code and its association with the recipient's account."),(0,i.kt)("li",{parentName:"ul"},"The email concludes with a thank you message and the sender's organization information.")),(0,i.kt)("h2",{id:"personalization"},"Personalization"),(0,i.kt)("p",null,"This template provides a personalized invitation experience for each recipient by incorporating their account name and a QR code linked to their specific account."),(0,i.kt)("p",null,"Keep in mind that the QR code URL (",(0,i.kt)("a",{parentName:"p",href:"http://137.184.6.241:8080/qr-code?data=%7B!CASESAFEID(Account.Id)%7D"},"http://137.184.6.241:8080/qr-code?data={!CASESAFEID(Account.Id)}"),") should be functional and capable of generating QR codes based on the provided account ID."),(0,i.kt)("p",null,"This approach enhances client engagement and delivers a unique invitation experience through Salesforce email templates."))}u.isMDXComponent=!0},9283:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Html-Body-49194f58feb07fba5be1c1fdb0e5f233.png"},6437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/result-920f02bb9f3be51fcedb750139decc51.png"}}]);