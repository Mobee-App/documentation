"use strict";(self.webpackChunkdocumentation_api=self.webpackChunkdocumentation_api||[]).push([[434],{5680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>m});var l=n(6540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,l,i=function(e,a){if(null==e)return{};var n,l,i={},t=Object.keys(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),p=function(e){var a=l.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=p(e.components);return l.createElement(s.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},d=l.forwardRef((function(e,a){var n=e.components,i=e.mdxType,t=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||t;return n?l.createElement(m,o(o({ref:a},c),{},{components:n})):l.createElement(m,o({ref:a},c))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var t=n.length,o=new Array(t);o[0]=d;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<t;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4304:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>r,toc:()=>p});var l=n(8168),i=(n(6540),n(5680));const t={},o="Tipos de plantillas y sintaxis",r={unversionedId:"documentation-api/Document Generation Module/mobee-document-types",id:"documentation-api/Document Generation Module/mobee-document-types",title:"Tipos de plantillas y sintaxis",description:"Tipos de plantillas",source:"@site/i18n/esp/docusaurus-plugin-content-docs/current/documentation-api/3 - Document Generation Module/2 - mobee-document-types.md",sourceDirName:"documentation-api/3 - Document Generation Module",slug:"/documentation-api/Document Generation Module/mobee-document-types",permalink:"/documentation/esp/docs/documentation-api/Document Generation Module/mobee-document-types",draft:!1,editUrl:"https://github.com/Mobee-App/documentation/blob/main/docs/documentation-api/3 - Document Generation Module/2 - mobee-document-types.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/documentation/esp/docs/documentation-api/Document Generation Module/mobee-document-introduction"},next:{title:"Configuraci\xf3n y uso",permalink:"/documentation/esp/docs/documentation-api/Document Generation Module/mobee-document-configuration"}},s={},p=[{value:"Tipos de plantillas",id:"tipos-de-plantillas",level:2},{value:"Plantilla de documento simple",id:"plantilla-de-documento-simple",level:3},{value:"Plantilla de documento combinado",id:"plantilla-de-documento-combinado",level:3},{value:"Sintaxis",id:"sintaxis",level:2},{value:"Condiciones",id:"condiciones",level:2},{value:"Expresiones l\xf3gicas",id:"expresiones-l\xf3gicas",level:3},{value:"Bucles",id:"bucles",level:2},{value:"Im\xe1genes din\xe1micas",id:"im\xe1genes-din\xe1micas",level:2},{value:"Im\xe1genes Base64",id:"im\xe1genes-base64",level:3},{value:"Im\xe1genes por URL",id:"im\xe1genes-por-url",level:3},{value:"Funcionalidades adicionales",id:"funcionalidades-adicionales",level:2},{value:"Fechas",id:"fechas",level:3},{value:"Filtros",id:"filtros",level:3},{value:"Documentaci\xf3n de la funci\xf3n <code>groupBy</code>",id:"documentaci\xf3n-de-la-funci\xf3n-groupby",level:4},{value:"Funci\xf3n <code>sortBy</code>",id:"funci\xf3n-sortby",level:4},{value:"Funci\xf3n <code>htmlList</code>",id:"funci\xf3n-htmllist",level:4},{value:"Funci\xf3n <code>multiPicklist</code>",id:"funci\xf3n-multipicklist",level:4},{value:"Funci\xf3n <code>where</code>",id:"funci\xf3n-where",level:4}],c={toc:p},u="wrapper";function g(e){let{components:a,...t}=e;return(0,i.yg)(u,(0,l.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"tipos-de-plantillas-y-sintaxis"},"Tipos de plantillas y sintaxis"),(0,i.yg)("h2",{id:"tipos-de-plantillas"},"Tipos de plantillas"),(0,i.yg)("p",null,"Mobee admite dos tipos de plantillas:"),(0,i.yg)("h3",{id:"plantilla-de-documento-simple"},"Plantilla de documento simple"),(0,i.yg)("p",null,"Cuando la casilla ",(0,i.yg)("strong",{parentName:"p"},"Documento Combinado"),' no est\xe1 marcada, la plantilla est\xe1 dise\xf1ada para una generaci\xf3n unitaria. Esto significa que la plantilla incluye informaci\xf3n de un \xfanico registro. Por ejemplo, si creas una plantilla simple para el objeto "Contacto", incorporar\xe1 la informaci\xf3n de un solo contacto y sus datos relacionados.'),(0,i.yg)("h3",{id:"plantilla-de-documento-combinado"},"Plantilla de documento combinado"),(0,i.yg)("p",null,"Cuando la casilla ",(0,i.yg)("strong",{parentName:"p"},"Documento Combinado")," est\xe1 marcada, indica que la plantilla se generar\xe1 para m\xfaltiples registros simult\xe1neamente. Esta plantilla utiliza una sintaxis especial para recorrer una lista de registros. Para acceder a los campos de cada registro en un documento combinado, tu plantilla debe comenzar recorriendo la lista de elementos utilizando la etiqueta ",(0,i.yg)("inlineCode",{parentName:"p"},"{#items}{/}"),". Consulta la ",(0,i.yg)("a",{parentName:"p",href:"#Loops"},"secci\xf3n de bucles")," para m\xe1s detalles."),(0,i.yg)("h2",{id:"sintaxis"},"Sintaxis"),(0,i.yg)("p",null,"La sintaxis de las etiquetas utilizadas en las plantillas de Mobee se inspira en la especificaci\xf3n ",(0,i.yg)("a",{parentName:"p",href:"https://mustache.github.io/"},"Mustache"),", que no depende de un lenguaje espec\xedfico."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Las etiquetas normales comienzan con un car\xe1cter alfab\xe9tico."),(0,i.yg)("li",{parentName:"ul"},"Otros tipos de etiquetas comienzan con prefijos especiales.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Por ejemplo:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Acceder a campos de combinaci\xf3n en el objeto: ",(0,i.yg)("inlineCode",{parentName:"li"},"{Salutation} {firstName} {lastName}")),(0,i.yg)("li",{parentName:"ul"},"Acceder a datos de listas relacionadas: ",(0,i.yg)("inlineCode",{parentName:"li"},"{#cases}")," y ",(0,i.yg)("inlineCode",{parentName:"li"},"{/}")," para abrir y cerrar una etiqueta. Consulta la secci\xf3n ",(0,i.yg)("strong",{parentName:"li"},"bucles")," para m\xe1s detalles."),(0,i.yg)("li",{parentName:"ul"},"Insertar im\xe1genes din\xe1micas: ",(0,i.yg)("inlineCode",{parentName:"li"},"{%ImageUrl__c}"),' agregar\xe1 la imagen del campo "ImageUrl',"_","_",'c". Consulta la secci\xf3n ',(0,i.yg)("strong",{parentName:"li"},"Im\xe1genes din\xe1micas")," para m\xe1s detalles.")),(0,i.yg)("p",null,'Por ejemplo, para acceder a los datos del objeto "Contacto" usando la sintaxis proporcionada en tu plantilla:'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"Hola {Salutation} {FirstName} {LastName}!\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Salida:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"Hola Sr. John Doe!\n")),(0,i.yg)("h2",{id:"condiciones"},"Condiciones"),(0,i.yg)("p",null,"Las condiciones comienzan con el car\xe1cter ",(0,i.yg)("inlineCode",{parentName:"p"},"#")," y terminan con una barra. Por ejemplo, ",(0,i.yg)("inlineCode",{parentName:"p"},'{#Salutation == "Mr."}')," inicia una condici\xf3n y ",(0,i.yg)("inlineCode",{parentName:"p"},"{/}")," la cierra."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Nota:")," Para verificar campos de casillas de verificaci\xf3n (",(0,i.yg)("inlineCode",{parentName:"p"},"true")," o ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),"), utiliza la siguiente sintaxis:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"El contacto {Name} {#HasOptedOutOfEmail == 1}ha{/}{#HasOptedOutOfEmail == 0}no ha{/} optado por no recibir correos electr\xf3nicos.\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Salida:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"El contacto Sr. John Doe ha optado por no recibir correos electr\xf3nicos.\n")),(0,i.yg)("h3",{id:"expresiones-l\xf3gicas"},"Expresiones l\xf3gicas"),(0,i.yg)("p",null,"Puedes utilizar los siguientes operadores para expresiones l\xf3gicas m\xe1s complejas:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"AND ",(0,i.yg)("inlineCode",{parentName:"li"},"a && b")),(0,i.yg)("li",{parentName:"ul"},"OR ",(0,i.yg)("inlineCode",{parentName:"li"},"a || b")),(0,i.yg)("li",{parentName:"ul"},"SUMA ",(0,i.yg)("inlineCode",{parentName:"li"},"a + b")),(0,i.yg)("li",{parentName:"ul"},"RESTA ",(0,i.yg)("inlineCode",{parentName:"li"},"a - b")),(0,i.yg)("li",{parentName:"ul"},"MULTIPLICACI\xd3N ",(0,i.yg)("inlineCode",{parentName:"li"},"a * b")),(0,i.yg)("li",{parentName:"ul"},"M\xd3DULO ",(0,i.yg)("inlineCode",{parentName:"li"},"a % b")),(0,i.yg)("li",{parentName:"ul"},"DIVISI\xd3N ",(0,i.yg)("inlineCode",{parentName:"li"},"a / b")),(0,i.yg)("li",{parentName:"ul"},"TERNARIO ",(0,i.yg)("inlineCode",{parentName:"li"},"a ? b : c")),(0,i.yg)("li",{parentName:"ul"},"ASIGNACI\xd3N ",(0,i.yg)("inlineCode",{parentName:"li"},"a = 1")),(0,i.yg)("li",{parentName:"ul"},"IGUALDAD/DESIGUALDAD ",(0,i.yg)("inlineCode",{parentName:"li"},"a == 1, a != 1")),(0,i.yg)("li",{parentName:"ul"},"RELACIONAL ",(0,i.yg)("inlineCode",{parentName:"li"},"a > 1, a < 1, a >= 1, a <= 1")),(0,i.yg)("li",{parentName:"ul"},"PRECEDENCIA DE OPERADORES con par\xe9ntesis ",(0,i.yg)("inlineCode",{parentName:"li"},"(a && b) || c")),(0,i.yg)("li",{parentName:"ul"},"NOTACI\xd3N EXPONENCIAL: ",(0,i.yg)("inlineCode",{parentName:"li"},"12e3")," => retorna ",(0,i.yg)("inlineCode",{parentName:"li"},"12000"))),(0,i.yg)("p",null,"Ejemplo:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},'{#products.length > 1}Hay varios productos{/}\n{#firstName == "John"}Hola John{/}\n')),(0,i.yg)("p",null,"La primera condici\xf3n mostrar\xe1 la secci\xf3n solo si hay 2 o m\xe1s productos."),(0,i.yg)("p",null,'La segunda condici\xf3n mostrar\xe1 la secci\xf3n solo si el nombre del usuario es la cadena "John".'),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Salida:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"Hay varios productos\nHola John\n")),(0,i.yg)("h2",{id:"bucles"},"Bucles"),(0,i.yg)("p",null,'Como se mencion\xf3 anteriormente, los bucles comienzan con el s\xedmbolo "#". Ejemplo:'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"{#Cases}\n{CaseNumber}: {Description}.\n{/}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Salida:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"00001299: Necesita permiso de acceso para visitar la ubicaci\xf3n.\n00001624: Soporte al cliente.\n00001836: Falta el cable del cargador de bater\xeda.\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Nota:")," Cada campo de combinaci\xf3n utilizado en la secci\xf3n de bucle se refiere a los campos del objeto relacionado actual. Si el campo no se encuentra en el objeto relacionado, el motor lo referencia desde el objeto principal."),(0,i.yg)("h2",{id:"im\xe1genes-din\xe1micas"},"Im\xe1genes din\xe1micas"),(0,i.yg)("p",null,"Las im\xe1genes din\xe1micas pueden integrarse f\xe1cilmente en tus documentos generados mediante el uso de marcadores din\xe1micos. Por ejemplo, si posees un campo llamado ",(0,i.yg)("inlineCode",{parentName:"p"},"ProfilePicture__c")," que contiene la URL de una imagen o la imagen codificada como una cadena Base64, puedes incorporarla en tu documento usando la etiqueta designada: ",(0,i.yg)("inlineCode",{parentName:"p"},"{%ProfilePicture__c}")," (comenzando con el s\xedmbolo ",(0,i.yg)("inlineCode",{parentName:"p"},"%"),")."),(0,i.yg)("h3",{id:"im\xe1genes-base64"},"Im\xe1genes Base64"),(0,i.yg)("p",null,"Para incluir una imagen usando datos en formato Base64, simplemente codifica la imagen en Base64 y almac\xe9nala directamente en el campo de Salesforce."),(0,i.yg)("h3",{id:"im\xe1genes-por-url"},"Im\xe1genes por URL"),(0,i.yg)("p",null,"Para incorporar una imagen usando una URL, sigue estos pasos:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Ve a "Configuraci\xf3n" dentro de Salesforce.')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'En el cuadro de b\xfasqueda r\xe1pida, ubica y selecciona "Configuraciones de sitios remotos."')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Haz clic en el bot\xf3n "Nuevo Sitio Remoto."')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Asigna un nombre al sitio (por ejemplo, "Sitio Imgur").')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'En el campo "URL del Sitio Remoto," introduce la URL base de la ubicaci\xf3n de la imagen, como "',(0,i.yg)("a",{parentName:"p",href:"https://i.imgur.com.%22"},'https://i.imgur.com."'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Habilita la casilla "Deshabilitar Seguridad de Protocolo" para permitir la recuperaci\xf3n mediante HTTP.')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Selecciona "Guardar" para guardar los cambios.')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Realiza los siguientes pasos para incorporar la URL en los sitios de confianza con todas las directivas de Pol\xedtica de Seguridad de Contenidos (CSP) habilitadas:"),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},'En la p\xe1gina de configuraci\xf3n, ubica "URLs de confianza" utilizando el cuadro de b\xfasqueda r\xe1pida.'),(0,i.yg)("li",{parentName:"ol"},'Selecciona el bot\xf3n "Nuevo Sitio de Confianza."'),(0,i.yg)("li",{parentName:"ol"},'Asigna un nombre al sitio de confianza (por ejemplo, "Imgur Confiable").'),(0,i.yg)("li",{parentName:"ol"},'En el campo "URL del Sitio," introduce la misma URL base que antes, es decir, "',(0,i.yg)("a",{parentName:"li",href:"https://i.imgur.com.%22"},'https://i.imgur.com."')),(0,i.yg)("li",{parentName:"ol"},'Habilita todas las directivas CSP: "Connect," "Font," "Img," "Media," "Object," "Script," "Style."'),(0,i.yg)("li",{parentName:"ol"},'Confirma los cambios haciendo clic en "Guardar."')))),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Ejemplo de Imagen",src:n(9407).A,width:"1478",height:"476"})),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Ejemplo de Imagen",src:n(6621).A,width:"1461",height:"480"})),(0,i.yg)("p",null,"Ahora has configurado las configuraciones de sitio remoto y URLs confiables para recuperar la imagen de manera segura mediante HTTP. Luego, puedes usar la etiqueta ",(0,i.yg)("inlineCode",{parentName:"p"},"{%ProfilePicture__c}")," para incluir din\xe1micamente la imagen en los documentos generados."),(0,i.yg)("h2",{id:"funcionalidades-adicionales"},"Funcionalidades adicionales"),(0,i.yg)("p",null,"Mobee proporciona varias etiquetas y filtros para ayudar a los usuarios a personalizar sus documentos."),(0,i.yg)("h3",{id:"fechas"},"Fechas"),(0,i.yg)("p",null,"La etiqueta ",(0,i.yg)("inlineCode",{parentName:"p"},"{docUtils.today}")," es un elemento predefinido que permite incluir la fecha actual en una plantilla de documento durante el proceso de generaci\xf3n. Adem\xe1s de los filtros descritos a continuaci\xf3n, los usuarios tienen la flexibilidad de manipular esta fecha seg\xfan sus necesidades espec\xedficas."),(0,i.yg)("h3",{id:"filtros"},"Filtros"),(0,i.yg)("p",null,"Los filtros son funciones predefinidas dise\xf1adas para la manipulaci\xf3n de cadenas, fechas y n\xfameros dentro de las plantillas de documentos. Pueden aplicarse a cualquier etiqueta a\xf1adiendo el car\xe1cter de tuber\xeda ",(0,i.yg)("inlineCode",{parentName:"p"},"|")," seguido del filtro deseado."),(0,i.yg)("p",null,"Ejemplo ilustrativo de la sintaxis:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"Hola {Salutation} {FirstName} {LastName | upper}!\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Salida:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"Hola Sr. JOHN DOE!\n")),(0,i.yg)("p",null,"Los siguientes filtros est\xe1n soportados:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Filtros de cadenas:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"lower"),": Convierte el texto a min\xfasculas."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"upper"),": Convierte el texto a may\xfasculas.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Filtros de fechas:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"shortDate"),": Convierte la fecha en un formato corto y conciso."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"followingMonth"),": Retorna el mes siguiente basado en una fecha dada."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"followingYear"),": Retorna el a\xf1o siguiente basado en una fecha dada."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"lastWorkingDayOfMonth"),": Retorna el \xfaltimo d\xeda laborable del mes basado en una fecha dada."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"formatDate"),": Un filtro vers\xe1til para formatear valores de fechas.")),(0,i.yg)("p",null,"Ejemplo de uso:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},'La fecha de creaci\xf3n es {StartDate | shortDate}\nEl siguiente mes es {StartDate | followingMonth: \'[["year": "numeric", "month": "long"]]\' }\nEl siguiente a\xf1o es {StartDate | followingYear: \'[["year": "numeric"]]\' }\nEl \xfaltimo d\xeda laborable del mes es {StartDate | lastWorkingDayOfMonth}\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Salida:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"La fecha de creaci\xf3n es 21/01/2022\nEl siguiente mes es febrero 2022\nEl siguiente a\xf1o es 2023\nEl \xfaltimo d\xeda laborable del mes es 31/01/2022\n")),(0,i.yg)("p",null,"Las funciones ",(0,i.yg)("inlineCode",{parentName:"p"},"followingMonth"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"followingYear"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"lastWorkingDayOfMonth")," y ",(0,i.yg)("inlineCode",{parentName:"p"},"formatDate")," aceptan las siguientes opciones de formato:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},"[[ \n  weekday: 'narrow' | 'short' | 'long',\n  era: 'narrow' | 'short' | 'long',\n  year: 'numeric' | '2-digit',\n  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',\n  day: 'numeric' | '2-digit',\n  hour: 'numeric' | '2-digit',\n  minute: 'numeric' | '2-digit',\n  second: 'numeric' | '2-digit',\n  timeZoneName: 'short' | 'long',\n\n  // Zona horaria a expresar\n  timeZone: 'Asia/Shanghai',\n  // Forzar formato de 12 o 24 horas\n  hour12: true | false,\n\n  // Opciones raramente usadas\n  hourCycle: 'h11' | 'h12' | 'h23' | 'h24',\n  formatMatcher: 'basic' | 'best fit'\n]]\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Filtros de listas:")),(0,i.yg)("h4",{id:"documentaci\xf3n-de-la-funci\xf3n-groupby"},"Documentaci\xf3n de la funci\xf3n ",(0,i.yg)("inlineCode",{parentName:"h4"},"groupBy")),(0,i.yg)("p",null,"La funci\xf3n ",(0,i.yg)("inlineCode",{parentName:"p"},"groupBy")," organiza los elementos de una colecci\xf3n agrup\xe1ndolos seg\xfan claves espec\xedficas. Se pueden realizar varios niveles de agrupaci\xf3n proporcionando m\xfaltiples claves separadas por punto y coma. El orden de agrupaci\xf3n sigue la secuencia de las claves especificadas."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Devuelve")),(0,i.yg)("p",null,"La funci\xf3n devuelve un objeto que contiene las siguientes propiedades:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"$groupedKey#")),": Representa la clave de agrupaci\xf3n en cada nivel, donde ",(0,i.yg)("inlineCode",{parentName:"li"},"#")," indica el nivel de agrupaci\xf3n, comenzando desde 1."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"$groupedItems#")),": Contiene los elementos asociados a cada clave de agrupaci\xf3n. Si se aplican varios niveles de agrupaci\xf3n, cada nivel contiene su propia clave ",(0,i.yg)("inlineCode",{parentName:"li"},"$groupedKey#")," y sus elementos ",(0,i.yg)("inlineCode",{parentName:"li"},"$groupedItems#"),", incrementando el \xedndice para cada nivel adicional.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Ejemplo de uso")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Escenario:")),(0,i.yg)("p",null,"Agrupar los elementos de una factura por ",(0,i.yg)("inlineCode",{parentName:"p"},"Categor\xeda")," y ",(0,i.yg)("inlineCode",{parentName:"p"},"Subcategor\xeda"),"."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Plantilla:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"N\xfamero de factura: {InvoiceNumber}\n\n{#InvoiceItems | groupBy: 'Category;Subcategory'}\n- Categor\xeda: {$groupedKey1}\n  {#$groupedItems1}\n  - Subcategor\xeda: {$groupedKey2}\n    {#$groupedItems2}\n    - Art\xedculo: {ItemName}\n      Cantidad: {Quantity}\n      Precio: {Price | currency: 'USD'}\n    {/}\n  {/}\n{/}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Datos de ejemplo (Formato de tabla):")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Categor\xeda"),(0,i.yg)("th",{parentName:"tr",align:null},"Subcategor\xeda"),(0,i.yg)("th",{parentName:"tr",align:null},"Nombre del art\xedculo"),(0,i.yg)("th",{parentName:"tr",align:null},"Cantidad"),(0,i.yg)("th",{parentName:"tr",align:null},"Precio"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Electr\xf3nica"),(0,i.yg)("td",{parentName:"tr",align:null},"Port\xe1tiles"),(0,i.yg)("td",{parentName:"tr",align:null},"Dell XPS 13"),(0,i.yg)("td",{parentName:"tr",align:null},"2"),(0,i.yg)("td",{parentName:"tr",align:null},"1200")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Electr\xf3nica"),(0,i.yg)("td",{parentName:"tr",align:null},"Port\xe1tiles"),(0,i.yg)("td",{parentName:"tr",align:null},"MacBook Pro"),(0,i.yg)("td",{parentName:"tr",align:null},"1"),(0,i.yg)("td",{parentName:"tr",align:null},"2000")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Electr\xf3nica"),(0,i.yg)("td",{parentName:"tr",align:null},"Tel\xe9fonos"),(0,i.yg)("td",{parentName:"tr",align:null},"iPhone 14"),(0,i.yg)("td",{parentName:"tr",align:null},"3"),(0,i.yg)("td",{parentName:"tr",align:null},"999")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Muebles"),(0,i.yg)("td",{parentName:"tr",align:null},"Sillas"),(0,i.yg)("td",{parentName:"tr",align:null},"Silla de oficina"),(0,i.yg)("td",{parentName:"tr",align:null},"5"),(0,i.yg)("td",{parentName:"tr",align:null},"150")))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Salida esperada:")),(0,i.yg)("p",null,"N\xfamero de factura: INV-2024-001"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Categor\xeda:")," Electr\xf3nica"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Subcategor\xeda:")," Port\xe1tiles",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Art\xedculo: Dell XPS 13\nCantidad: 2\nPrecio: $1,200.00"),(0,i.yg)("li",{parentName:"ul"},"Art\xedculo: MacBook Pro\nCantidad: 1\nPrecio: $2,000.00"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Subcategor\xeda:")," Tel\xe9fonos",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Art\xedculo: iPhone 14\nCantidad: 3\nPrecio: $999.00"))))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Categor\xeda:")," Muebles"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Subcategor\xeda:")," Sillas",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Art\xedculo: Silla de oficina\nCantidad: 5\nPrecio: $150.00")))))),(0,i.yg)("hr",null),(0,i.yg)("h4",{id:"funci\xf3n-sortby"},"Funci\xf3n ",(0,i.yg)("inlineCode",{parentName:"h4"},"sortBy")),(0,i.yg)("p",null,"La funci\xf3n ",(0,i.yg)("inlineCode",{parentName:"p"},"sortBy")," permite ordenar los elementos de una lista seg\xfan campos espec\xedficos, como la categor\xeda y el precio."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Ejemplo")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Plantilla:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"{#InvoiceItems | sortBy: 'Category;Price'}\n- {ItemName}: {Price}\n{/}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Salida esperada:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"- Silla de oficina: 150\n- Dell XPS 13: 1200\n- MacBook Pro: 2000\n")),(0,i.yg)("hr",null),(0,i.yg)("h4",{id:"funci\xf3n-htmllist"},"Funci\xf3n ",(0,i.yg)("inlineCode",{parentName:"h4"},"htmlList")),(0,i.yg)("p",null,"La funci\xf3n ",(0,i.yg)("inlineCode",{parentName:"p"},"htmlList")," convierte una cadena HTML en una lista sencilla."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Ejemplo")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Plantilla:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"{richTextField: htmlList}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Datos")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"{richTextField: '<ul><li>Art\xedculo 1</li><li>Art\xedculo 2</li></ul>'}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Salida esperada:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"- Art\xedculo 1\n- Art\xedculo 2\n")),(0,i.yg)("hr",null),(0,i.yg)("h4",{id:"funci\xf3n-multipicklist"},"Funci\xf3n ",(0,i.yg)("inlineCode",{parentName:"h4"},"multiPicklist")),(0,i.yg)("p",null,"La funci\xf3n ",(0,i.yg)("inlineCode",{parentName:"p"},"multiPicklist")," convierte una cadena en una lista utilizando opciones espec\xedficas, como un separador y un s\xedmbolo de vi\xf1eta."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Ejemplo")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Datos")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"{fruits: 'Manzana;Naranja;Banana'}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Plantilla:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},'{fruits | multiPicklist: \'[{"separator": ";", "bulletSymbol": "-"}]\'}\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Salida esperada:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"- Manzana\n- Naranja\n- Banana\n")),(0,i.yg)("hr",null),(0,i.yg)("h4",{id:"funci\xf3n-where"},"Funci\xf3n ",(0,i.yg)("inlineCode",{parentName:"h4"},"where")),(0,i.yg)("p",null,"La funci\xf3n ",(0,i.yg)("inlineCode",{parentName:"p"},"where")," permite filtrar elementos que coinciden con condiciones espec\xedficas, como seleccionar solo art\xedculos electr\xf3nicos."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Ejemplo")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Plantilla:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"{#InvoiceItems | where: 'Category==\"Electr\xf3nica\"'}\n- {ItemName}\n{/}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Salida esperada:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"- Dell XPS 13\n- MacBook Pro\n- iPhone 14\n")))}g.isMDXComponent=!0},9407:(e,a,n)=>{n.d(a,{A:()=>l});const l=n.p+"assets/images/trusted_url-f662f986213dcdccff1f96c6e72f7928.png"},6621:(e,a,n)=>{n.d(a,{A:()=>l});const l=n.p+"assets/images/trusted_url2-4cf5bfd038628d8fed34f34b8371801a.png"}}]);