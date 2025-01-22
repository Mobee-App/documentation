"use strict";(self.webpackChunkdocumentation_api=self.webpackChunkdocumentation_api||[]).push([[87],{5680:(e,a,o)=>{o.d(a,{xA:()=>d,yg:()=>A});var i=o(6540);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,i)}return o}function t(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,i,r=function(e,a){if(null==e)return{};var o,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=i.createContext({}),p=function(e){var a=i.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):t(t({},a),e)),o},d=function(e){var a=p(e.components);return i.createElement(s.Provider,{value:a},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},m=i.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(o),m=r,A=l["".concat(s,".").concat(m)]||l[m]||g[m]||n;return o?i.createElement(A,t(t({ref:a},d),{},{components:o})):i.createElement(A,t({ref:a},d))}));function A(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,t=new Array(n);t[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c[l]="string"==typeof e?e:r,t[1]=c;for(var p=2;p<n;p++)t[p]=o[p];return i.createElement.apply(null,t)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8108:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>t,default:()=>g,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var i=o(8168),r=(o(6540),o(5680));const n={},t="Proceso de aprobaci\xf3n de la hoja de tiempo",c={unversionedId:"documentation-api/Timesheet Module/Approval Process Guide",id:"documentation-api/Timesheet Module/Approval Process Guide",title:"Proceso de aprobaci\xf3n de la hoja de tiempo",description:"Introducci\xf3n",source:"@site/i18n/esp/docusaurus-plugin-content-docs/current/documentation-api/5 - Timesheet Module/Approval Process Guide.md",sourceDirName:"documentation-api/5 - Timesheet Module",slug:"/documentation-api/Timesheet Module/Approval Process Guide",permalink:"/documentation/esp/docs/documentation-api/Timesheet Module/Approval Process Guide",draft:!1,editUrl:"https://github.com/Mobee-App/documentation/blob/main/docs/documentation-api/5 - Timesheet Module/Approval Process Guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gu\xeda del administrador",permalink:"/documentation/esp/docs/documentation-api/Timesheet Module/Admin Guide"},next:{title:"Notifications Banner Component",permalink:"/documentation/esp/docs/documentation-api/Notifications Banner/notifications-banner"}},s={},p=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Activaci\xf3n del proceso de aprobaci\xf3n",id:"activaci\xf3n-del-proceso-de-aprobaci\xf3n",level:2},{value:"1. Crear el proceso de aprobaci\xf3n",id:"1-crear-el-proceso-de-aprobaci\xf3n",level:3},{value:"Paso 1: Introducir nombre y descripci\xf3n",id:"paso-1-introducir-nombre-y-descripci\xf3n",level:4},{value:"Paso 2: Especificar criterios de entrada",id:"paso-2-especificar-criterios-de-entrada",level:4},{value:"Paso 3: Especificar campo de aprobador y propiedades de editabilidad del registro",id:"paso-3-especificar-campo-de-aprobador-y-propiedades-de-editabilidad-del-registro",level:4},{value:"Paso 4: Seleccionar plantillas de notificaci\xf3n",id:"paso-4-seleccionar-plantillas-de-notificaci\xf3n",level:4},{value:"Paso 5: Seleccionar campos para mostrar en el dise\xf1o de la p\xe1gina de aprobaci\xf3n",id:"paso-5-seleccionar-campos-para-mostrar-en-el-dise\xf1o-de-la-p\xe1gina-de-aprobaci\xf3n",level:4},{value:"Paso 6: Especificar remitentes iniciales",id:"paso-6-especificar-remitentes-iniciales",level:4},{value:"2. Gestionar el proceso de aprobaci\xf3n",id:"2-gestionar-el-proceso-de-aprobaci\xf3n",level:3},{value:"2.1. Acciones de env\xedo inicial",id:"21-acciones-de-env\xedo-inicial",level:4},{value:"2.2. Acciones de aprobaci\xf3n final",id:"22-acciones-de-aprobaci\xf3n-final",level:4},{value:"2.3. Acciones de rechazo final",id:"23-acciones-de-rechazo-final",level:4},{value:"2.4. Acciones de retiro",id:"24-acciones-de-retiro",level:4},{value:"3. Elegir el aprobador",id:"3-elegir-el-aprobador",level:3},{value:"3.1. Asignar el aprobador en el proceso de aprobaci\xf3n",id:"31-asignar-el-aprobador-en-el-proceso-de-aprobaci\xf3n",level:4},{value:"3.2. Asignaci\xf3n de conjuntos de permisos",id:"32-asignaci\xf3n-de-conjuntos-de-permisos",level:4},{value:"Uso del proceso de aprobaci\xf3n",id:"uso-del-proceso-de-aprobaci\xf3n",level:2},{value:"1. Remitente",id:"1-remitente",level:4},{value:"2. Aprobador",id:"2-aprobador",level:4},{value:"Comportamiento y consideraciones del proceso de aprobaci\xf3n",id:"comportamiento-y-consideraciones-del-proceso-de-aprobaci\xf3n",level:2}],d={toc:p},l="wrapper";function g(e){let{components:a,...n}=e;return(0,r.yg)(l,(0,i.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"proceso-de-aprobaci\xf3n-de-la-hoja-de-tiempo"},"Proceso de aprobaci\xf3n de la hoja de tiempo"),(0,r.yg)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,r.yg)("p",null,"Puedes agregar un proceso de aprobaci\xf3n para que tu gerente o un aprobador designado revise y apruebe o rechace el registro de tiempo enviado."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Vista previa del env\xedo del proceso de aprobaci\xf3n",src:o(703).A,title:"Vista previa del env\xedo del proceso de aprobaci\xf3n",width:"1317",height:"281"}),"  "),(0,r.yg)("sup",null,"*Vista previa del env\xedo del proceso de aprobaci\xf3n*"),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"activaci\xf3n-del-proceso-de-aprobaci\xf3n"},"Activaci\xf3n del proceso de aprobaci\xf3n"),(0,r.yg)("h3",{id:"1-crear-el-proceso-de-aprobaci\xf3n"},"1. Crear el proceso de aprobaci\xf3n"),(0,r.yg)("p",null,"La siguiente secci\xf3n es una gu\xeda paso a paso para crear un proceso de aprobaci\xf3n est\xe1ndar, donde algunas acciones son obligatorias y otras son opcionales. ",(0,r.yg)("strong",{parentName:"p"},"(Los pasos obligatorios est\xe1n resaltados en negrita)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Ve a la p\xe1gina de configuraci\xf3n"),(0,r.yg)("li",{parentName:"ul"},"Accede a los procesos de aprobaci\xf3n"),(0,r.yg)("li",{parentName:"ul"},"Gestiona los procesos de aprobaci\xf3n para: per\xedodo de tiempo"),(0,r.yg)("li",{parentName:"ul"},"Crea un nuevo proceso de aprobaci\xf3n: utiliza el asistente de configuraci\xf3n est\xe1ndar")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Introducci\xf3n a la creaci\xf3n del proceso de aprobaci\xf3n",src:o(1556).A,title:"Introducci\xf3n a la creaci\xf3n del proceso de aprobaci\xf3n",width:"1916",height:"538"})),(0,r.yg)("h4",{id:"paso-1-introducir-nombre-y-descripci\xf3n"},"Paso 1: Introducir nombre y descripci\xf3n"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Paso 1 de la creaci\xf3n del proceso de aprobaci\xf3n",src:o(9497).A,title:"Paso 1 de la creaci\xf3n del proceso de aprobaci\xf3n",width:"1620",height:"324"})),(0,r.yg)("h4",{id:"paso-2-especificar-criterios-de-entrada"},"Paso 2: Especificar criterios de entrada"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"No hay acci\xf3n a realizar"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("img",{alt:"Paso 2 de la creaci\xf3n del proceso de aprobaci\xf3n",src:o(5490).A,title:"Paso 2 de la creaci\xf3n del proceso de aprobaci\xf3n",width:"1619",height:"420"})),(0,r.yg)("h4",{id:"paso-3-especificar-campo-de-aprobador-y-propiedades-de-editabilidad-del-registro"},"Paso 3: Especificar campo de aprobador y propiedades de editabilidad del registro"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Especificar campo de aprobador (para la asignaci\xf3n autom\xe1tica de aprobaciones)",(0,r.yg)("br",{parentName:"p"}),"\n","Selecciona: ",(0,r.yg)("em",{parentName:"p"},"Gerente (Manager)"),"\nEste paso es importante solo si deseas designar al gerente como el aprobador (despu\xe9s de completar la creaci\xf3n del proceso de aprobaci\xf3n)")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Editabilidad del registro",(0,r.yg)("br",{parentName:"p"}),"\n","Selecciona: ",(0,r.yg)("em",{parentName:"p"},"Los administradores o el aprobador asignado pueden editar los registros durante el proceso de aprobaci\xf3n.")))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Paso 3 de la creaci\xf3n del proceso de aprobaci\xf3n",src:o(9147).A,title:"Paso 3 de la creaci\xf3n del proceso de aprobaci\xf3n",width:"1619",height:"338"})),(0,r.yg)("h4",{id:"paso-4-seleccionar-plantillas-de-notificaci\xf3n"},"Paso 4: Seleccionar plantillas de notificaci\xf3n"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"No hay acci\xf3n a realizar"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("img",{alt:"Paso 4 de la creaci\xf3n del proceso de aprobaci\xf3n",src:o(7156).A,title:"Paso 4 de la creaci\xf3n del proceso de aprobaci\xf3n",width:"1620",height:"225"})),(0,r.yg)("h4",{id:"paso-5-seleccionar-campos-para-mostrar-en-el-dise\xf1o-de-la-p\xe1gina-de-aprobaci\xf3n"},"Paso 5: Seleccionar campos para mostrar en el dise\xf1o de la p\xe1gina de aprobaci\xf3n"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"No hay acci\xf3n a realizar"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("img",{alt:"Paso 5 de la creaci\xf3n del proceso de aprobaci\xf3n",src:o(8285).A,title:"Paso 5 de la creaci\xf3n del proceso de aprobaci\xf3n",width:"1619",height:"652"})),(0,r.yg)("h4",{id:"paso-6-especificar-remitentes-iniciales"},"Paso 6: Especificar remitentes iniciales"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Remitentes iniciales",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"Selecciona: propietario del per\xedodo de tiempo, creador del registro"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Configuraciones de env\xedo"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Selecciona: Permitir que los remitentes retiren solicitudes de aprobaci\xf3n")))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Paso 6 de la creaci\xf3n del proceso de aprobaci\xf3n",src:o(870).A,title:"Paso 6 de la creaci\xf3n del proceso de aprobaci\xf3n",width:"1620",height:"570"})),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"2-gestionar-el-proceso-de-aprobaci\xf3n"},"2. Gestionar el proceso de aprobaci\xf3n"),(0,r.yg)("p",null,"Despu\xe9s de completar la creaci\xf3n del proceso de aprobaci\xf3n, podr\xe1s gestionar las acciones (env\xedo inicial, aprobaci\xf3n final, rechazo final y retiro)."),(0,r.yg)("p",null,"Estas acciones deben incluirse para que el proceso de aprobaci\xf3n funcione como se espera."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Vista previa de acciones y pasos de aprobaci\xf3n",src:o(8723).A,title:"Vista previa de acciones y pasos de aprobaci\xf3n",width:"1603",height:"477"}),"  "),(0,r.yg)("sup",null,"*Vista previa de acciones y pasos de aprobaci\xf3n*"),(0,r.yg)("h4",{id:"21-acciones-de-env\xedo-inicial"},"2.1. Acciones de env\xedo inicial"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Agregar existentes  "),(0,r.yg)("li",{parentName:"ol"},"Agregar: ",(0,r.yg)("em",{parentName:"li"},"Actualizaci\xf3n de campo: actualizar estado a enviado (Update Status to Submitted)"))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Agregar acci\xf3n de env\xedo inicial",src:o(4030).A,title:"Agregar acci\xf3n de env\xedo inicial",width:"1603",height:"477"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Agregar acci\xf3n de env\xedo inicial 2",src:o(6078).A,title:"Agregar acci\xf3n de env\xedo inicial 2",width:"1630",height:"456"})),(0,r.yg)("h4",{id:"22-acciones-de-aprobaci\xf3n-final"},"2.2. Acciones de aprobaci\xf3n final"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Editar bloqueo de registro y seleccionar: ",(0,r.yg)("em",{parentName:"li"},"Desbloquear registro para edici\xf3n"),"  "),(0,r.yg)("li",{parentName:"ol"},"Agregar existentes y agregar: ",(0,r.yg)("em",{parentName:"li"},"Actualizaci\xf3n de campo: actualizar estado a aprobado (Update Status to Approved)"))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Editar y agregar acci\xf3n de aprobaci\xf3n final",src:o(7525).A,title:"Editar y agregar acci\xf3n de aprobaci\xf3n final",width:"1603",height:"477"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Editar bloqueo de registro de aprobaci\xf3n final",src:o(6984).A,title:"Editar bloqueo de registro de aprobaci\xf3n final",width:"1640",height:"219"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Agregar acci\xf3n de aprobaci\xf3n final",src:o(3843).A,title:"Agregar acci\xf3n de aprobaci\xf3n final",width:"1629",height:"452"})),(0,r.yg)("h4",{id:"23-acciones-de-rechazo-final"},"2.3. Acciones de rechazo final"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Agregar existentes  "),(0,r.yg)("li",{parentName:"ol"},"Agregar:",(0,r.yg)("br",{parentName:"li"}),"a. ",(0,r.yg)("em",{parentName:"li"},"Actualizaci\xf3n de campo: actualizar estado a rechazado (Update Status to Rejected)"),(0,r.yg)("br",{parentName:"li"}),"b. ",(0,r.yg)("em",{parentName:"li"},"Alerta de correo electr\xf3nico: enviar notificaci\xf3n por correo al asignado en caso de rechazo (Send Email Notification to Assignee on Rejection)")," (esta es una alerta por correo enviada al remitente de la hoja de tiempo si su hoja es rechazada por el aprobador. si no es necesario, esta alerta no debe a\xf1adirse)")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Agregar acci\xf3n de rechazo final",src:o(901).A,title:"Agregar acci\xf3n de rechazo final",width:"1603",height:"477"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Agregar acci\xf3n de rechazo final 2",src:o(1283).A,title:"Agregar acci\xf3n de rechazo final 2",width:"1631",height:"452"})),(0,r.yg)("h4",{id:"24-acciones-de-retiro"},"2.4. Acciones de retiro"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Agregar existentes  "),(0,r.yg)("li",{parentName:"ol"},"Agregar: ",(0,r.yg)("em",{parentName:"li"},"Actualizaci\xf3n de campo: actualizar estado a borrador (Field Update: Update Status to Draft)"))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Agregar acci\xf3n de retiro",src:o(4815).A,title:"Agregar acci\xf3n de retiro",width:"1603",height:"477"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Agregar acci\xf3n de retiro 2",src:o(8694).A,title:"Agregar acci\xf3n de retiro 2",width:"1629",height:"452"})),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"3-elegir-el-aprobador"},"3. Elegir el aprobador"),(0,r.yg)("h4",{id:"31-asignar-el-aprobador-en-el-proceso-de-aprobaci\xf3n"},"3.1. Asignar el aprobador en el proceso de aprobaci\xf3n"),(0,r.yg)("p",null,"El aprobador puede ser el gerente del remitente o un usuario espec\xedfico responsable de todos los remitentes, como el gerente de recursos humanos, asegurando que todas las hojas de tiempo se dirijan a una sola persona para su aprobaci\xf3n. Esto tambi\xe9n se controla a nivel del proceso de aprobaci\xf3n tras su creaci\xf3n."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Pasos de aprobaci\xf3n",src:o(787).A,title:"Pasos de aprobaci\xf3n",width:"1603",height:"477"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Cambiar aprobador en paso de aprobaci\xf3n",src:o(1074).A,title:"Cambiar aprobador en paso de aprobaci\xf3n",width:"1611",height:"424"})),(0,r.yg)("h4",{id:"32-asignaci\xf3n-de-conjuntos-de-permisos"},"3.2. Asignaci\xf3n de conjuntos de permisos"),(0,r.yg)("p",null,"En configuraci\xf3n > usuarios, asigna el conjunto de permisos ",(0,r.yg)("em",{parentName:"p"},"Mobee Approve All Timesheets")," en el usuario aprobador."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Editar conjunto de permisos en usuario",src:o(4664).A,title:"Editar conjunto de permisos en usuario",width:"1912",height:"816"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Editar conjunto de permisos en usuario",src:o(8552).A,title:"Editar conjunto de permisos en usuario",width:"1916",height:"661"})),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"uso-del-proceso-de-aprobaci\xf3n"},"Uso del proceso de aprobaci\xf3n"),(0,r.yg)("h4",{id:"1-remitente"},"1. Remitente"),(0,r.yg)("p",null,"El usuario env\xeda su hoja de tiempo para aprobaci\xf3n",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"Esta acci\xf3n es recuperable (1)"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"Comentario de env\xedo (2)"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"Indicador de registro de tiempo enviado (3)")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Hoja de tiempo enviada",src:o(7057).A,title:"Hoja de tiempo enviada",width:"1268",height:"354"})),(0,r.yg)("h4",{id:"2-aprobador"},"2. Aprobador"),(0,r.yg)("p",null,"El aprobador asignado puede aprobar/rechazar en el contacto del remitente",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"el aprobador asignado revisa la hoja de tiempo (registro de tiempo enviado) y tiene la opci\xf3n de aprobar o rechazar la solicitud.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Hoja de tiempo enviada",src:o(4023).A,title:"Hoja de tiempo enviada",width:"1277",height:"424"})),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"comportamiento-y-consideraciones-del-proceso-de-aprobaci\xf3n"},"Comportamiento y consideraciones del proceso de aprobaci\xf3n"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Aprobaci\xf3n parcial es posible")),(0,r.yg)("p",null,"Ejemplo A:",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"el usuario env\xeda una solicitud de d\xedas libres, que es aprobada. luego, env\xedan su carga de trabajo asignada para los d\xedas restantes")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Ejemplo de proceso de aprobaci\xf3n parcial",src:o(8807).A,title:"Ejemplo de proceso de aprobaci\xf3n parcial",width:"1256",height:"330"}),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("img",{alt:"Ejemplo de proceso de aprobaci\xf3n parcial",src:o(700).A,title:"Ejemplo de proceso de aprobaci\xf3n parcial",width:"1256",height:"369"})),(0,r.yg)("p",null,"Ejemplo B:",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("em",{parentName:"p"},"el usuario env\xeda los \xfaltimos d\xedas del mes para su aprobaci\xf3n. en el mes siguiente, para la misma tarea, env\xedan los d\xedas laborables restantes para aprobaci\xf3n")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Ejemplo de proceso de aprobaci\xf3n parcial",src:o(3589).A,title:"Ejemplo de proceso de aprobaci\xf3n parcial",width:"1254",height:"332"}),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("img",{alt:"Ejemplo de proceso de aprobaci\xf3n parcial",src:o(362).A,title:"Ejemplo de proceso de aprobaci\xf3n parcial",width:"1251",height:"316"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Cuando se aprueba una hoja de tiempo, se env\xeda una notificaci\xf3n al remitente.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Cuando se rechaza una hoja de tiempo, se env\xedan tanto una notificaci\xf3n como un correo electr\xf3nico al remitente (el correo se env\xeda si se agreg\xf3 seg\xfan 2.3. acciones de rechazo final).")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Cuando se rechazan registros de tiempo pendientes en una hoja de tiempo, toda la hoja de tiempo se vuelve editable.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Al pasar el cursor sobre los siguientes \xedconos ",(0,r.yg)("img",{alt:"\xcdcono Enviado",src:o(9006).A,title:"\xcdcono Enviado",width:"20",height:"20"}),", ",(0,r.yg)("img",{alt:"\xcdcono Aprobado",src:o(3230).A,title:"\xcdcono Aprobado",width:"20",height:"20"})," y ",(0,r.yg)("img",{alt:"\xcdcono Rechazado",src:o(8409).A,title:"\xcdcono Rechazado",width:"20",height:"20"})," se muestran comentarios del remitente o del aprobador relacionados con la presentaci\xf3n, aprobaci\xf3n o rechazo, respectivamente."))),(0,r.yg)("p",null,"Los siguientes \xedconos ",(0,r.yg)("img",{alt:"\xcdcono Enviado Celda",src:o(9962).A,title:"\xcdcono Enviado Celda",width:"20",height:"20"})," y ",(0,r.yg)("img",{alt:"\xcdcono Aprobado Celda",src:o(9274).A,title:"\xcdcono Aprobado Celda",width:"27",height:"20"})," sirven como indicadores que muestran el estado del registro de tiempo."))}g.isMDXComponent=!0},3230:(e,a,o)=>{o.d(a,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAIVBMVEVGxlv///8/xFQ3wk6O3ZtbzW606Lz1/PbB7Mh614qZ4KX1RfEeAAAAi0lEQVQI12MQFBTPDGCdVigoyCAo2KrEwKAUAWKKGDEAgbIjkOnMAAYmggwSBhAmcyNDqQKIwaTAFM6QBJF2ZlBjmMTABJR1dGbQZAhiYFVgMBExYFAFSrIngwTBQEXMRApsTBBQYeNiIEMVqI0BIqgJMowpCCStBrYCZAvQCiSLkZyD7Egkp8M9BACqIBZ/6NnRawAAAABJRU5ErkJggg=="},9274:(e,a,o)=>{o.d(a,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAUBAMAAACOrFuzAAAAJ1BMVEX///9DxlhIx11jz3X5/fk8xFKD2ZDN8NPo+Ord9eGT3p9XzGq+68TDaMbQAAAAkUlEQVQY02NgQAIcyBwGTrMGZO4koQRkSUVFA2TJIGEkxZxbFS2QJGcHCU9gYGCZApVMVbUEUm42DmBum1DwBCArNfgIkMPCkahqzgJkLFIFSwMlC0A0lxBIGibJwLAQJA2ThEgjJBkcgNKzhIShkgwsXILRRoLbWWDOcVgoJCQNkwRLKyIkgdKLkCRB0uowSQB65h8c+hag3QAAAABJRU5ErkJggg=="},8807:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/partialApprovalExample1-7702069c85ef9014c747110cb69ce2c9.png"},700:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/partialApprovalExample2-c89cd44ea1d776434b2dfc55de7dacf0.png"},3589:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/partialApprovalExample3-1a1f1934f55708399ccf19a2305a81f0.png"},362:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/partialApprovalExample4-721807c2049c56f75f46dad3ab1f98ec.png"},8409:(e,a,o)=>{o.d(a,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAJFBMVEXzb4TzZ33////zbYL8z9f0fJD+9vf6xc34qbb1g5T3maj5ucMtmkaMAAAAq0lEQVQI102PsQrCMBCGLxzuCR3UjoeI44Wjg2vp4qa0+ACBIo4VQXBLfYWicyd3n9ALopjpW+7/vgDR8rqdPAMREG2ciBsSrhzoc71iBPaMMCNYWDHrHYsp4Wh5Xh4QzR06xD1RhzyFEU1P1DLnUIt5JZQC8Ius6E8htFaxxoZUPmKhZ011OVcRch3z7hGzTMdUgcMNkkLF7K0kseaIzqScFCnyifxL/33oDf8mKBxEdDjhAAAAAElFTkSuQmCC"},9006:(e,a,o)=>{o.d(a,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAALVBMVEX3SoD////3R373QXr3OnX7kbL/9vn5YpH8wdT4WYz5eqL8tsz+1uP7or7+5+6ps9rjAAAAwElEQVQI12MQFBTbNYFzdaKgIIOgYLuxkpJxBYgp6swABCaBQGYIA4OyERODqyCDhIOCCudkAyWWRoZ0AybehzmLmZjLGDYzKRwLXy1qoGDNsJjBN9O3JLCYwYphEhNbCN8VuysMmgxMzIXFelcsWpgUgMxpi62lfLYAmZMYbFqYtrKFABUsZrASNXE4Y6BgBTSMOfBF20kFoGHpBgrud1qVQVZIOCgxu7gogCwGOkeBgQHsHJAjgQaBHYnkdLiHAF3OLybZzdAcAAAAAElFTkSuQmCC"},9962:(e,a,o)=>{o.d(a,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAMFBMVEX///9tbW1ycnJ4eHjX19f4+PiioqKFhYWurq6Wlpa5ubnh4eHw8PCMjIzS0tLIyMjxbs/TAAAAy0lEQVQI12NgYGB4kV7ZHcAAAs8UBQWFU0AsLkWlaZ2Gwh+AzIXKawJYTxlZMTCwKJUw8Bxg2K7swBApvCFg720GFsNUho0aDAyP9IDqrBkaTRkYnE1YGQ5LMUycysDw2I6BIVKWobAByNRjZWATZyhMYGBwUgtg4BBnuFTKwBAmlMoQK8mwEMhkTRRjCJZgcAQaxsCmwdAkArICyHbgNpwKthgI3JUcGBg+Cy8FOUcKyOdXVL6RaSS0ACTnBnS6ENjpDAwe0yuzgRQAwlAszh2AemYAAAAASUVORK5CYII="},7057:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/submittedTimeSheet-396ac765213547d9871272f00ad30411.png"},4023:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/submittedTimeSheet2-c09abb354410d5e7e8b97ec4c0097e32.png"},1556:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/approvalProcessCreationIntro-65386001fb2addcdb6a45b8842c685a5.png"},9497:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/approvalProcessCreationStep1-863ce55a08b5536dddc9979742bb36fc.png"},5490:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/approvalProcessCreationStep2-6768fab2c726b7357208e8a30188d515.png"},9147:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/approvalProcessCreationStep3-299875721a923abe6bcc1499c28e3992.png"},7156:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/approvalProcessCreationStep4-87f3aed56a76a6cc73a234a1780a5a60.png"},8285:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/approvalProcessCreationStep5-1056792699a6415e060f1348bc9f08d9.png"},870:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/approvalProcessCreationStep6-25fd21446fc0f6b8435f6d605225e11e.png"},703:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/approvalProcessPreview-f2996ac2ad288ae85baeea05b231cdbf.png"},8723:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/actionsAndApprovalStepsPreview-c5f05c4891e366015c8095cc9f4ee94f.png"},787:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/approvalStepsEdit-ced6c3592cafdbf8e0c3fcda703e260f.png"},1074:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/approvalStepsEditStep3-46a9b441474a26785176882c8300ae29.png"},4664:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/editPermissionSetOnUser-7e888b5b6d0a86f92d1a676794daf954.png"},8552:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/editPermissionSetOnUser2-e67ccb647dfd8dfd70782c851a1fce31.png"},7525:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/finalApprovalAddAction-19f4013383fcc6ec757db8c478898448.png"},6984:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/finalApprovalAddAction1-2b543b74da480efccb5adbb5d9e4cf24.png"},3843:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/finalApprovalAddAction2-47e6fa1c9c9b9d459275d8df6d110a0b.png"},901:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/finalRejectionAddAction-0e70af801392328c56a5791a995ddd0e.png"},1283:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/finalRejectionAddAction2-542aee774d2fda75fd69b8c946a7eea4.png"},4030:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/initialSubmissionAddAction-1ce06ce8211e0dd61f59d6203d041c60.png"},6078:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/initialSubmissionAddAction2-4d185e7317731c751fc12ec0de1d98ca.png"},4815:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/recallAddAction-edb9023208b7613dc34d5014b013c7ff.png"},8694:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/recallAddAction1-8b3e18cd42af50b9364fa622e83062ab.png"}}]);