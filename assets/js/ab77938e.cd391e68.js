"use strict";(self.webpackChunkdocumentation_api=self.webpackChunkdocumentation_api||[]).push([[525],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var i=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var n=i.createContext({}),l=function(e){var t=i.useContext(n),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return i.createElement(n.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},A=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,n=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),A=r,m=d["".concat(n,".").concat(A)]||d[A]||g[A]||o;return a?i.createElement(m,p(p({ref:t},c),{},{components:a})):i.createElement(m,p({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=A;var s={};for(var n in t)hasOwnProperty.call(t,n)&&(s[n]=t[n]);s.originalType=e,s[d]="string"==typeof e?e:r,p[1]=s;for(var l=2;l<o;l++)p[l]=a[l];return i.createElement.apply(null,p)}return i.createElement.apply(null,a)}A.displayName="MDXCreateElement"},3801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>n,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=a(8168),r=(a(6540),a(5680));const o={},p="Time Sheet Approval Process",s={unversionedId:"documentation-api/Timesheet Module/Approval Process Guide",id:"documentation-api/Timesheet Module/Approval Process Guide",title:"Time Sheet Approval Process",description:"Introduction",source:"@site/docs/documentation-api/5 - Timesheet Module/Approval Process Guide.md",sourceDirName:"documentation-api/5 - Timesheet Module",slug:"/documentation-api/Timesheet Module/Approval Process Guide",permalink:"/documentation/docs/documentation-api/Timesheet Module/Approval Process Guide",draft:!1,editUrl:"https://github.com/Mobee-App/documentation/blob/main/docs/documentation-api/5 - Timesheet Module/Approval Process Guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Admin Guide",permalink:"/documentation/docs/documentation-api/Timesheet Module/Admin Guide"},next:{title:"Notifications Banner Component",permalink:"/documentation/docs/documentation-api/Notifications Banner/notifications-banner"}},n={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Approval Process Activation",id:"approval-process-activation",level:2},{value:"1. Create The Approval Process",id:"1-create-the-approval-process",level:3},{value:"Step 1: Enter Name And Description",id:"step-1-enter-name-and-description",level:4},{value:"Step 2: Specify Entry Criteria",id:"step-2-specify-entry-criteria",level:4},{value:"Step 3: Specify Approver FielD And Record Editability Properties",id:"step-3-specify-approver-field-and-record-editability-properties",level:4},{value:"Step 4: Select Notification Templates",id:"step-4-select-notification-templates",level:4},{value:"Step 5: Select Fields To Display On Approval Page Layout",id:"step-5-select-fields-to-display-on-approval-page-layout",level:4},{value:"Step 6: Specify Initial Submitters",id:"step-6-specify-initial-submitters",level:4},{value:"2. Manage The Approval Process",id:"2-manage-the-approval-process",level:3},{value:"2.1. Initial Submission Actions",id:"21-initial-submission-actions",level:4},{value:"2.2. Final Approval Actions",id:"22-final-approval-actions",level:4},{value:"2.3. Final Rejection Actions",id:"23-final-rejection-actions",level:4},{value:"2.4. Recall Actions",id:"24-recall-actions",level:4},{value:"3. Choose The Approver",id:"3-choose-the-approver",level:3},{value:"3.1. Assign The Approver On The Approval Process",id:"31-assign-the-approver-on-the-approval-process",level:4},{value:"3.2. Permission Set Assignment",id:"32-permission-set-assignment",level:4},{value:"Approval Process Usage",id:"approval-process-usage",level:2},{value:"1. Submitter",id:"1-submitter",level:4},{value:"2. Approver",id:"2-approver",level:4},{value:"Approval Process Behavior And Considerations",id:"approval-process-behavior-and-considerations",level:2}],c={toc:l},d="wrapper";function g(e){let{components:t,...o}=e;return(0,r.yg)(d,(0,i.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"time-sheet-approval-process"},"Time Sheet Approval Process"),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"You can add an approval process to have your manager, or a designated approver, review and approve or reject your submitted time entries."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Approval Process Submission Preview",src:a(6613).A,title:"Approval Process Submission Preview",width:"1317",height:"281"}),"  "),(0,r.yg)("sup",null,"*Approval Process Submission Preview*"),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"approval-process-activation"},"Approval Process Activation"),(0,r.yg)("h3",{id:"1-create-the-approval-process"},"1. Create The Approval Process"),(0,r.yg)("p",null,"The following section is a step-by-step guide for creating a standard approval process, where some actions are mandatory and others are optional.  ",(0,r.yg)("strong",{parentName:"p"},"(The mandatory steps are highlighted in bold)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Go to the setup page"),(0,r.yg)("li",{parentName:"ul"},"Access the approval processes"),(0,r.yg)("li",{parentName:"ul"},"Manage approval processes for: time period"),(0,r.yg)("li",{parentName:"ul"},"Create new approval process: use standard setup wizard")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Approval Process Creation Intro",src:a(3618).A,title:"Approval Process Creation Intro",width:"1916",height:"538"})),(0,r.yg)("h4",{id:"step-1-enter-name-and-description"},"Step 1: Enter Name And Description"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Approval Process Creation Step 1",src:a(3519).A,title:"Approval Process Creation Step 1",width:"1620",height:"324"})),(0,r.yg)("h4",{id:"step-2-specify-entry-criteria"},"Step 2: Specify Entry Criteria"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"No Action To Do"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("img",{alt:"Approval Process Creation Step 2",src:a(9028).A,title:"Approval Process Creation Step 2",width:"1619",height:"420"})),(0,r.yg)("h4",{id:"step-3-specify-approver-field-and-record-editability-properties"},"Step 3: Specify Approver FielD And Record Editability Properties"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Specify Approver Field (for automated approval routing)\nSelect: ",(0,r.yg)("em",{parentName:"p"},"Manager"),"\nThis step is important only if you wish to designate the manager as the approver (after completing the approval process creation)")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Record Editability\nSelect: ",(0,r.yg)("em",{parentName:"p"},"Administrators or the currently assigned approver can edit records during the approval process."),"  "))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Approval Process Creation Step 3",src:a(2061).A,title:"Approval Process Creation Step 3",width:"1619",height:"338"})),(0,r.yg)("h4",{id:"step-4-select-notification-templates"},"Step 4: Select Notification Templates"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"No Action To Do"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("img",{alt:"Approval Process Creation Step 4",src:a(7810).A,title:"Approval Process Creation Step 4",width:"1620",height:"225"})),(0,r.yg)("h4",{id:"step-5-select-fields-to-display-on-approval-page-layout"},"Step 5: Select Fields To Display On Approval Page Layout"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"No Action To Do"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("img",{alt:"Approval Process Creation Step 5",src:a(8939).A,title:"Approval Process Creation Step 5",width:"1619",height:"652"})),(0,r.yg)("h4",{id:"step-6-specify-initial-submitters"},"Step 6: Specify Initial Submitters"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Initial submitters",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"Select: Time period owner, record creator"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Submission settings"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Select: Allow submitters to recall approval requests")),"  "))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Approval Process Creation Step 6",src:a(7648).A,title:"Approval Process Creation Step 6",width:"1620",height:"570"})),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"2-manage-the-approval-process"},"2. Manage The Approval Process"),(0,r.yg)("p",null,"After completing the creation of the approval process, you will be able to manage actions (initial submission, final approval, final rejection, and recall)."),(0,r.yg)("p",null,"These actions must be included for the approval process to function as intended."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Actions And Approval Steps Preview",src:a(9189).A,title:"Actions And Approval Steps Preview",width:"1603",height:"477"}),"  "),(0,r.yg)("sup",null,"*Actions And Approval Steps Preview*"),(0,r.yg)("h4",{id:"21-initial-submission-actions"},"2.1. Initial Submission Actions"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Add existing  "),(0,r.yg)("li",{parentName:"ol"},"Add: ",(0,r.yg)("em",{parentName:"li"},"Field Update: Update Status to Submitted"))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Initial Submission Add Action",src:a(3556).A,title:"Initial Submission Add Action",width:"1603",height:"477"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Initial Submission Add Action 2",src:a(124).A,title:"Initial Submission Add Action",width:"1630",height:"456"})),(0,r.yg)("h4",{id:"22-final-approval-actions"},"2.2. Final Approval Actions"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Edit record lock and select: ",(0,r.yg)("em",{parentName:"li"},"Unlock record for editing"),"  "),(0,r.yg)("li",{parentName:"ol"},"Add existing and add: ",(0,r.yg)("em",{parentName:"li"},"Field Update: Update Status to Approved"))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Final Approval Edit And Add Action",src:a(4707).A,title:"Final Approval Edit And Add Action",width:"1603",height:"477"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Final Approval Edit Record Lock",src:a(9362).A,title:"Final Approval Edit Record Lock",width:"1640",height:"219"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Final Approval Add Action",src:a(329).A,title:"Final Approval Add Action",width:"1629",height:"452"})),(0,r.yg)("h4",{id:"23-final-rejection-actions"},"2.3. Final Rejection Actions"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Add existing  "),(0,r.yg)("li",{parentName:"ol"},"Add:",(0,r.yg)("br",{parentName:"li"}),"a. ",(0,r.yg)("em",{parentName:"li"},"Field Update: Update Status to Rejected"),(0,r.yg)("br",{parentName:"li"}),"b. ",(0,r.yg)("em",{parentName:"li"},"Email alert: Send Email Notification to Assignee on Rejection")," (this is an email alert sent to the timesheet submitter if their timesheet is rejected by the approver. if not needed, this email alert should not be added)")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Final Approval Add Action",src:a(5735).A,title:"Final Approval Add Action",width:"1603",height:"477"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Final Approval Add Action 2",src:a(1109).A,title:"Final Approval Add Action",width:"1631",height:"452"})),(0,r.yg)("h4",{id:"24-recall-actions"},"2.4. Recall Actions"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Add existing  "),(0,r.yg)("li",{parentName:"ol"},"Add: ",(0,r.yg)("em",{parentName:"li"},"Field Update: Update Status to Draft"))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Recall Add Action",src:a(7733).A,title:"Recall Add Action",width:"1603",height:"477"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Recall Add Action 2",src:a(680).A,title:"Recall Add Action",width:"1629",height:"452"})),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"3-choose-the-approver"},"3. Choose The Approver"),(0,r.yg)("h4",{id:"31-assign-the-approver-on-the-approval-process"},"3.1. Assign The Approver On The Approval Process"),(0,r.yg)("p",null,"The approver may be the submitter's manager or a specific user responsible for all submitters, such as the hr manager, ensuring that all timesheets are directed to one individual for approval. This is also controlled at the level of the approval process after its creation."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Approval Steps",src:a(897).A,title:"Approval Steps",width:"1603",height:"477"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Approval Step Change Approver",src:a(4428).A,title:"Approval Step Change Approver",width:"1611",height:"424"})),(0,r.yg)("h4",{id:"32-permission-set-assignment"},"3.2. Permission Set Assignment"),(0,r.yg)("p",null,"In Setup > Users, set the ",(0,r.yg)("em",{parentName:"p"},"Mobee Approve All Timesheets")," permission set on the approver user."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Edit Permission Set On User",src:a(5866).A,title:"Edit Permission Set On User",width:"1912",height:"816"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Edit Permission Set On User",src:a(8418).A,title:"Edit Permission Set On User",width:"1916",height:"661"})),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"approval-process-usage"},"Approval Process Usage"),(0,r.yg)("h4",{id:"1-submitter"},"1. Submitter"),(0,r.yg)("p",null,"User submits his time sheet for approval",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"This action is recallable (1)"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"Submission comment (2)"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"Time entries submitted indicator (3)")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Submitted Time Sheet",src:a(6231).A,title:"Submitted Time Sheet",width:"1268",height:"354"})),(0,r.yg)("h4",{id:"2-approver"},"2. Approver"),(0,r.yg)("p",null,"Assigned approver can approve/reject on submitter's contact",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"the assigned approver reviews the timesheet (submitted time entries) and has the option to either approve or reject the submission.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Submitted Time Sheet",src:a(5397).A,title:"Submitted Time Sheet",width:"1277",height:"424"})),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"approval-process-behavior-and-considerations"},"Approval Process Behavior And Considerations"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Partial approval is possible")),(0,r.yg)("p",null,"Example A:",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"the user submits a request for days off, which gets approved. later, they submit their assigned workload for the remaining days")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Partial Approval Process Example",src:a(981).A,title:"Partial Approval Process Example",width:"1256",height:"330"}),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("img",{alt:"Partial Approval Process Example",src:a(3150).A,title:"Partial Approval Process Example",width:"1256",height:"369"})),(0,r.yg)("p",null,"Example B:",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"the user submits the last days of the month for approval. in the following month, for the same assignment, they submit the remaining weekdays for approval")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Partial Approval Process Example",src:a(2647).A,title:"Partial Approval Process Example",width:"1254",height:"332"}),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("img",{alt:"Partial Approval Process Example",src:a(504).A,title:"Partial Approval Process Example",width:"1251",height:"316"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When a timesheet is approved, a notification is sent to the submitter  "),(0,r.yg)("li",{parentName:"ul"},"When a timesheet is rejected, both a notification and an email are sent to the submitter (the email is sent if added according to 2.3. final rejection actions)  "),(0,r.yg)("li",{parentName:"ul"},"When any pending time entries on a timesheet are rejected, the entire timesheet becomes editable  "),(0,r.yg)("li",{parentName:"ul"},"Hovering over the following icons ",(0,r.yg)("img",{alt:"Submitted Icon",src:a(1872).A,title:"Submitted Icon",width:"20",height:"20"}),", ",(0,r.yg)("img",{alt:"Approved Icon",src:a(8232).A,title:"Approved Icon",width:"20",height:"20"})," and ",(0,r.yg)("img",{alt:"Rejected Icon",src:a(2251).A,title:"Rejected Icon",width:"20",height:"20"})," displays comments from the submitter or approver related to the submission, approval, or rejection, respectively  "),(0,r.yg)("li",{parentName:"ul"},"The following icons ",(0,r.yg)("img",{alt:"Submitted Icon Cell",src:a(7856).A,title:"Submitted Icon Cell",width:"20",height:"20"})," and ",(0,r.yg)("img",{alt:"Approved Icon Cell",src:a(9960).A,title:"Approved Icon Cell",width:"27",height:"20"})," serve as indicators showing the status of the time entry")))}g.isMDXComponent=!0},8232:(e,t,a)=>{a.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAIVBMVEVGxlv///8/xFQ3wk6O3ZtbzW606Lz1/PbB7Mh614qZ4KX1RfEeAAAAi0lEQVQI12MQFBTPDGCdVigoyCAo2KrEwKAUAWKKGDEAgbIjkOnMAAYmggwSBhAmcyNDqQKIwaTAFM6QBJF2ZlBjmMTABJR1dGbQZAhiYFVgMBExYFAFSrIngwTBQEXMRApsTBBQYeNiIEMVqI0BIqgJMowpCCStBrYCZAvQCiSLkZyD7Egkp8M9BACqIBZ/6NnRawAAAABJRU5ErkJggg=="},9960:(e,t,a)=>{a.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAUBAMAAACOrFuzAAAAJ1BMVEX///9DxlhIx11jz3X5/fk8xFKD2ZDN8NPo+Ord9eGT3p9XzGq+68TDaMbQAAAAkUlEQVQY02NgQAIcyBwGTrMGZO4koQRkSUVFA2TJIGEkxZxbFS2QJGcHCU9gYGCZApVMVbUEUm42DmBum1DwBCArNfgIkMPCkahqzgJkLFIFSwMlC0A0lxBIGibJwLAQJA2ThEgjJBkcgNKzhIShkgwsXILRRoLbWWDOcVgoJCQNkwRLKyIkgdKLkCRB0uowSQB65h8c+hag3QAAAABJRU5ErkJggg=="},981:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/partialApprovalExample1-7702069c85ef9014c747110cb69ce2c9.png"},3150:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/partialApprovalExample2-c89cd44ea1d776434b2dfc55de7dacf0.png"},2647:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/partialApprovalExample3-1a1f1934f55708399ccf19a2305a81f0.png"},504:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/partialApprovalExample4-721807c2049c56f75f46dad3ab1f98ec.png"},2251:(e,t,a)=>{a.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAJFBMVEXzb4TzZ33////zbYL8z9f0fJD+9vf6xc34qbb1g5T3maj5ucMtmkaMAAAAq0lEQVQI102PsQrCMBCGLxzuCR3UjoeI44Wjg2vp4qa0+ACBIo4VQXBLfYWicyd3n9ALopjpW+7/vgDR8rqdPAMREG2ciBsSrhzoc71iBPaMMCNYWDHrHYsp4Wh5Xh4QzR06xD1RhzyFEU1P1DLnUIt5JZQC8Ius6E8htFaxxoZUPmKhZ011OVcRch3z7hGzTMdUgcMNkkLF7K0kseaIzqScFCnyifxL/33oDf8mKBxEdDjhAAAAAElFTkSuQmCC"},1872:(e,t,a)=>{a.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAALVBMVEX3SoD////3R373QXr3OnX7kbL/9vn5YpH8wdT4WYz5eqL8tsz+1uP7or7+5+6ps9rjAAAAwElEQVQI12MQFBTbNYFzdaKgIIOgYLuxkpJxBYgp6swABCaBQGYIA4OyERODqyCDhIOCCudkAyWWRoZ0AybehzmLmZjLGDYzKRwLXy1qoGDNsJjBN9O3JLCYwYphEhNbCN8VuysMmgxMzIXFelcsWpgUgMxpi62lfLYAmZMYbFqYtrKFABUsZrASNXE4Y6BgBTSMOfBF20kFoGHpBgrud1qVQVZIOCgxu7gogCwGOkeBgQHsHJAjgQaBHYnkdLiHAF3OLybZzdAcAAAAAElFTkSuQmCC"},7856:(e,t,a)=>{a.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAMFBMVEX///9tbW1ycnJ4eHjX19f4+PiioqKFhYWurq6Wlpa5ubnh4eHw8PCMjIzS0tLIyMjxbs/TAAAAy0lEQVQI12NgYGB4kV7ZHcAAAs8UBQWFU0AsLkWlaZ2Gwh+AzIXKawJYTxlZMTCwKJUw8Bxg2K7swBApvCFg720GFsNUho0aDAyP9IDqrBkaTRkYnE1YGQ5LMUycysDw2I6BIVKWobAByNRjZWATZyhMYGBwUgtg4BBnuFTKwBAmlMoQK8mwEMhkTRRjCJZgcAQaxsCmwdAkArICyHbgNpwKthgI3JUcGBg+Cy8FOUcKyOdXVL6RaSS0ACTnBnS6ENjpDAwe0yuzgRQAwlAszh2AemYAAAAASUVORK5CYII="},6231:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/submittedTimeSheet-396ac765213547d9871272f00ad30411.png"},5397:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/submittedTimeSheet2-c09abb354410d5e7e8b97ec4c0097e32.png"},3618:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/approvalProcessCreationIntro-65386001fb2addcdb6a45b8842c685a5.png"},3519:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/approvalProcessCreationStep1-863ce55a08b5536dddc9979742bb36fc.png"},9028:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/approvalProcessCreationStep2-6768fab2c726b7357208e8a30188d515.png"},2061:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/approvalProcessCreationStep3-299875721a923abe6bcc1499c28e3992.png"},7810:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/approvalProcessCreationStep4-87f3aed56a76a6cc73a234a1780a5a60.png"},8939:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/approvalProcessCreationStep5-1056792699a6415e060f1348bc9f08d9.png"},7648:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/approvalProcessCreationStep6-25fd21446fc0f6b8435f6d605225e11e.png"},6613:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/approvalProcessPreview-f2996ac2ad288ae85baeea05b231cdbf.png"},9189:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/actionsAndApprovalStepsPreview-c5f05c4891e366015c8095cc9f4ee94f.png"},897:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/approvalStepsEdit-ced6c3592cafdbf8e0c3fcda703e260f.png"},4428:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/approvalStepsEditStep3-46a9b441474a26785176882c8300ae29.png"},5866:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/editPermissionSetOnUser-7e888b5b6d0a86f92d1a676794daf954.png"},8418:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/editPermissionSetOnUser2-e67ccb647dfd8dfd70782c851a1fce31.png"},4707:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/finalApprovalAddAction-19f4013383fcc6ec757db8c478898448.png"},9362:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/finalApprovalAddAction1-2b543b74da480efccb5adbb5d9e4cf24.png"},329:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/finalApprovalAddAction2-47e6fa1c9c9b9d459275d8df6d110a0b.png"},5735:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/finalRejectionAddAction-0e70af801392328c56a5791a995ddd0e.png"},1109:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/finalRejectionAddAction2-542aee774d2fda75fd69b8c946a7eea4.png"},3556:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/initialSubmissionAddAction-1ce06ce8211e0dd61f59d6203d041c60.png"},124:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/initialSubmissionAddAction2-4d185e7317731c751fc12ec0de1d98ca.png"},7733:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/recallAddAction-edb9023208b7613dc34d5014b013c7ff.png"},680:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/recallAddAction1-8b3e18cd42af50b9364fa622e83062ab.png"}}]);