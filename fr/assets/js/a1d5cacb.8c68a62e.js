"use strict";(self.webpackChunkdocumentation_api=self.webpackChunkdocumentation_api||[]).push([[359],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i="Configuration du Scanner de Codes QR",s={unversionedId:"documentation-api/QR Code Module/qr-code-scanner-guide",id:"documentation-api/QR Code Module/qr-code-scanner-guide",title:"Configuration du Scanner de Codes QR",description:"Description : Le composant Scanner de Codes QR pour Salesforce permet aux utilisateurs de scanner des codes QR directement depuis leur interface Salesforce. En int\xe9grant ce composant, vous pouvez instantan\xe9ment r\xe9cup\xe9rer et saisir des donn\xe9es, simplifiant diverses t\xe2ches manuelles.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/documentation-api/2 - QR Code Module/qr-code-scanner-guide.md",sourceDirName:"documentation-api/2 - QR Code Module",slug:"/documentation-api/QR Code Module/qr-code-scanner-guide",permalink:"/documentation/fr/docs/documentation-api/QR Code Module/qr-code-scanner-guide",draft:!1,editUrl:"https://github.com/Mobee-App/documentation/blob/main/docs/documentation-api/2 - QR Code Module/qr-code-scanner-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration du G\xe9n\xe9rateur de Codes QR",permalink:"/documentation/fr/docs/documentation-api/QR Code Module/qr-code-generator-guide"},next:{title:"Mod\xe8le d'e-mail personnalis\xe9",permalink:"/documentation/fr/docs/documentation-api/QR Code Module/qr-codes-in-email-template"}},l={},p=[{value:"Installation :",id:"installation-",level:2},{value:"Comment Ajouter le Scanner de Codes QR \xe0 une Page d&#39;Objet :",id:"comment-ajouter-le-scanner-de-codes-qr-\xe0-une-page-dobjet-",level:2},{value:"Instructions \xc9tape par \xc9tape :",id:"instructions-\xe9tape-par-\xe9tape-",level:3},{value:"Exemple d&#39;Utilisation : Ajouter des Contacts ou des Pistes \xe0 une Campagne via le Scan de Codes QR",id:"exemple-dutilisation--ajouter-des-contacts-ou-des-pistes-\xe0-une-campagne-via-le-scan-de-codes-qr",level:2},{value:"Int\xe9gration du Scanner de Codes QR pour la Gestion des Membres d&#39;une Campagne",id:"int\xe9gration-du-scanner-de-codes-qr-pour-la-gestion-des-membres-dune-campagne",level:2},{value:"<strong>Aper\xe7u</strong>",id:"aper\xe7u",level:3},{value:"<strong>Fonctionnalit\xe9 du Flow</strong>:",id:"fonctionnalit\xe9-du-flow",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-du-scanner-de-codes-qr"},"Configuration du Scanner de Codes QR"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")," : Le composant Scanner de Codes QR pour Salesforce permet aux utilisateurs de scanner des codes QR directement depuis leur interface Salesforce. En int\xe9grant ce composant, vous pouvez instantan\xe9ment r\xe9cup\xe9rer et saisir des donn\xe9es, simplifiant diverses t\xe2ches manuelles."),(0,r.kt)("h2",{id:"installation-"},"Installation :"),(0,r.kt)("p",null,"Avant d'utiliser le composant Scanner de Codes QR, assurez-vous que le package Mobee est install\xe9 dans votre environnement Salesforce."),(0,r.kt)("h2",{id:"comment-ajouter-le-scanner-de-codes-qr-\xe0-une-page-dobjet-"},"Comment Ajouter le Scanner de Codes QR \xe0 une Page d'Objet :"),(0,r.kt)("h3",{id:"instructions-\xe9tape-par-\xe9tape-"},"Instructions \xc9tape par \xc9tape :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Acc\xe9dez \xe0 la Page de l'Objet")," : Rendez-vous sur la page d'objet souhait\xe9e o\xf9 vous souhaitez ajouter le scanner de codes QR."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Passez en Mode \xc9dition")," : Cliquez sur l'option 'Modifier la page', g\xe9n\xe9ralement disponible en haut \xe0 droite de l'\xe9cran, pour acc\xe9der au Lightning App Builder."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Ajoutez le Composant Scanner de Codes QR")," :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dans le Lightning App Builder, recherchez la section des composants Lightning dans le volet de gauche."),(0,r.kt)("li",{parentName:"ul"},"Faites glisser le composant 'scanQrCode' et d\xe9posez-le \xe0 l'emplacement de votre choix sur la page."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Configurez les Attributs du Composant")," :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cliquez sur le composant Scanner de Codes QR ajout\xe9 pour afficher ses propri\xe9t\xe9s."),(0,r.kt)("li",{parentName:"ul"},"Dans le champ 'Flow API Name', saisissez le nom de l'API du flux souhait\xe9 (pr\xe9c\xe9d\xe9 du pr\xe9fixe de l'espace de noms si vous utilisez le flux int\xe9gr\xe9 Mobee Campaign Scan). Ce flux sera ex\xe9cut\xe9 lorsque le composant scanne un code QR."),(0,r.kt)("li",{parentName:"ul"},"L'attribut \"Record Id\" peut \xeatre laiss\xe9 vide. S'il est laiss\xe9 vide, il sera automatiquement renseign\xe9 avec l'ID de l'enregistrement o\xf9 le composant est plac\xe9."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Enregistrez et Activez")," : Une fois termin\xe9, enregistrez les modifications et activez la page pour les refl\xe9ter dans l'interface Salesforce.")),(0,r.kt)("h2",{id:"exemple-dutilisation--ajouter-des-contacts-ou-des-pistes-\xe0-une-campagne-via-le-scan-de-codes-qr"},"Exemple d'Utilisation : Ajouter des Contacts ou des Pistes \xe0 une Campagne via le Scan de Codes QR"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Acc\xe9dez \xe0 la Campagne")," : Commencez par acc\xe9der \xe0 la campagne souhait\xe9e dans Salesforce.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Passez en Mode \xc9dition")," : Cliquez sur 'Modifier la page' pour passer au Lightning App Builder."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Image d&#39;Exemple",src:a(1162).Z,width:"574",height:"447"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Ins\xe9rez le Composant Scanner de Codes QR")," :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Trouvez le composant 'scanQrCode' dans la section 'Personnalis\xe9e' \xe0 gauche."),(0,r.kt)("li",{parentName:"ul"},"Faites glisser et placez le composant o\xf9 vous le souhaitez sur la mise en page de la campagne.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Image d&#39;Exemple",src:a(8498).Z,width:"602",height:"471"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configurez le Composant")," : "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cliquez sur le composant pour voir ses attributs."),(0,r.kt)("li",{parentName:"ul"},"Dans le champ 'Flow API Name', saisissez le nom \"Mobee__Campaign_SCR_Scan\" (ou le nom du flux associ\xe9 \xe0 la fonction de num\xe9risation pour les campagnes).")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Image d&#39;Exemple",src:a(1580).Z,width:"804",height:"401"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Effectuez la Num\xe9risation")," :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Quittez le Lightning App Builder et acc\xe9dez \xe0 la page de la campagne."),(0,r.kt)("li",{parentName:"ul"},"\xc0 l'aide d'un t\xe9l\xe9phone ou d'un appareil dot\xe9 d'une cam\xe9ra, utilisez le composant Scanner de Codes QR pour scanner les codes QR des contacts ou des pistes.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Image d&#39;Exemple",src:a(7970).Z,width:"2660",height:"1459"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"V\xe9rification")," :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apr\xe8s la num\xe9risation, v\xe9rifiez en consultant la liste des membres de la campagne."),(0,r.kt)("li",{parentName:"ul"},"Assurez-vous que le contact ou la piste num\xe9ris\xe9 a bien \xe9t\xe9 ajout\xe9 \xe0 la campagne.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Image d&#39;Exemple",src:a(2642).Z,width:"546",height:"133"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Remarque"),' : Assurez-vous que le flux ("Mobee__Campaign_SCR_Scan" dans cet exemple) est correctement configur\xe9 pour g\xe9rer les donn\xe9es des codes QR et effectuer les actions souhait\xe9es dans Salesforce.'),(0,r.kt)("h2",{id:"int\xe9gration-du-scanner-de-codes-qr-pour-la-gestion-des-membres-dune-campagne"},"Int\xe9gration du Scanner de Codes QR pour la Gestion des Membres d'une Campagne"),(0,r.kt)("h3",{id:"aper\xe7u"},(0,r.kt)("strong",{parentName:"h3"},"Aper\xe7u")),(0,r.kt)("p",null,"\"Mobee__Campaign_SCR_Scan\", fourni en tant que flow mod\xe8le dans le package Mobee, s'int\xe8gre harmonieusement avec le module de scanner de codes QR. Il facilite l'ajout d'un contact ou d'une Piste \xe0 la liste des membres d'une campagne. Con\xe7u comme un mod\xe8le, ce flow est hautement adaptable pour r\xe9pondre \xe0 divers besoins."),(0,r.kt)("h3",{id:"fonctionnalit\xe9-du-flow"},(0,r.kt)("strong",{parentName:"h3"},"Fonctionnalit\xe9 du Flow"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scan et Identification de l'ID"),":\n",(0,r.kt)("img",{alt:"Image Exemple",src:a(8473).Z,width:"901",height:"809"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apr\xe8s le scan, l'ID est r\xe9cup\xe9r\xe9 et stock\xe9 dans la variable ",(0,r.kt)("inlineCode",{parentName:"li"},"scannedId"),"."),(0,r.kt)("li",{parentName:"ul"},"Le flow v\xe9rifie si ce ",(0,r.kt)("inlineCode",{parentName:"li"},"scannedId")," correspond \xe0 une Piste ou un Contact."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Gestion des ID Inconnus"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Si le ",(0,r.kt)("inlineCode",{parentName:"li"},"scannedId")," ne correspond pas \xe0 une Piste ou Contact, le flow redirige vers un \xe9cran affichant un message indiquant que l'ID est inconnu.")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"V\xe9rification de l'Appartenance \xe0 la Campagne"),":\n",(0,r.kt)("img",{alt:"Image Exemple",src:a(3109).Z,width:"799",height:"841"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Si le ",(0,r.kt)("inlineCode",{parentName:"li"},"scannedId")," est identifi\xe9 comme une Piste ou un Contact, le flow v\xe9rifie ensuite si l'enregistrement en question est d\xe9j\xe0 membre de la campagne associ\xe9e au ",(0,r.kt)("inlineCode",{parentName:"li"},"recordId")," (c'est-\xe0-dire la campagne o\xf9 le module de scan est plac\xe9)."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Gestion des Informations du Compte du Contact"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pour les contacts, en raison de la nature hors ligne du scan sur Mobee, le flow r\xe9cup\xe8re manuellement les informations du compte associ\xe9 en utilisant ",(0,r.kt)("inlineCode",{parentName:"li"},"GetCompanyById"),". Actuellement, en mode hors ligne de Mobee, il existe une limitation o\xf9 les champs associ\xe9s int\xe9gr\xe9s dans les flows Salesforce ne peuvent pas \xeatre directement accessibles. Ce probl\xe8me devrait \xeatre r\xe9solu dans les prochaines mises \xe0 jour."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Ajout \xe0 l'Appartenance de la Campagne"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Si la Piste ou le Contact n'est pas un membre de la campagne, ils sont ajout\xe9s \xe0 la liste des membres de la campagne."),(0,r.kt)("li",{parentName:"ul"},"Leur statut est d\xe9fini sur 'R\xe9pondu', bien que cela puisse \xeatre personnalis\xe9 dans le flow selon les besoins."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mise \xe0 jour du Membre Existante de la Campagne"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Si la Piste ou le Contact est d\xe9j\xe0 membre de la campagne, leur statut sera mis \xe0 jour \xe0 'R\xe9pondu'.")))),(0,r.kt)("p",null,"Bonne num\xe9risation !"))}c.isMDXComponent=!0},2642:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/campaign_member-2fab163d701b428873eec404e10a5519.png"},1162:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit_page_button-755b078b77ef443df749a3545d67ac10.png"},8498:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit_page_section-6e730a8fa469ec1adef397b3550a9890.png"},1580:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flow_api_name-f421e02cbaf6f266f28c7f96bdb58613.png"},3109:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flow_end-b24267c90aec6e78bf73b9b8c8093d95.png"},8473:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flow_start-5997bcd5a94e95fe25daffc1a0389e58.png"},7970:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/phone4-29d73326d05a03287142fbeac8832c1f.jpg"}}]);