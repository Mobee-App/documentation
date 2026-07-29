# Flow de generación de documentos

## Plantilla de Flow: Mobee - KwSoft Document Generation

Este Flow es el punto de entrada principal para los usuarios. Abre plantillas de KwSoft y genera documentos desde registros de Salesforce.

## Recorrido del usuario

1. El usuario abre un registro (ejemplo: Case)
2. El usuario ejecuta el Flow
3. El usuario selecciona una plantilla
4. El usuario genera el documento
5. El sistema adjunta un PDF directamente o abre una ruta de edición interactiva

## Entradas del componente (vista de administrador)

El componente de KwSoft dentro del Flow usa estas entradas:

1. **Current Record Id** - Propósito: identifica el registro de Salesforce usado para los datos y para adjuntar el documento.

2. **Object API Name** - Propósito: indica qué objeto de Salesforce se utiliza (por ejemplo, Case).

3. **Output Format** - Propósito: define el tipo de salida. Actualmente se admite `PDF`.

4. **Data Query** - Propósito: recupera la información del registro para completar el documento.

> Si tu equipo no se siente cómodo con la sintaxis de consultas técnicas, pide al responsable técnico de Salesforce que lo prepare una vez. Los usuarios no necesitan editarlo en la operación diaria.

5. **Template Filter (opcional)** - Propósito: limita qué plantillas pueden ver los usuarios.

Caso de uso de ejemplo: mostrar solo plantillas para Francia y Luxemburgo.

Valor de filtro de ejemplo:
METADATA.COUNTRY="FR" OR METADATA.COUNTRY="LU"

También puedes construir este valor de forma dinámica usando datos de Salesforce.

![Parámetro Template Filter](img/kwsoft-lwc-filters.png)

### Filtro dinámico usando fórmulas de Flow

Por ejemplo, si el usuario conectado tiene países asignados en Salesforce, puedes generar el filtro automáticamente en lugar de escribir un valor fijo.

Escenario de ejemplo: el usuario tiene dos países asignados.

1. Crea un recurso de tipo Fórmula en el Flow (Texto), por ejemplo `TemplateFilterFormula`.
2. Construye la expresión con los datos del usuario.
3. Asigna este recurso de Fórmula al campo **Template Filter** del componente KwSoft.

Resultado de fórmula de ejemplo:
METADATA.COUNTRY="{!UserCountry1}" OR METADATA.COUNTRY="{!UserCountry2}"

Este enfoque permite que cada usuario vea solo las plantillas que corresponden a sus países asignados.

> Consejo: si uno de los países puede estar vacío, añade condiciones `IF` básicas en la fórmula para evitar una expresión incompleta.

## Qué ocurre después de la generación

### Documento automático:

1. Se genera el PDF
2. El PDF se adjunta al registro actual
3. El usuario ve un mensaje de éxito

### Documento interactivo:

1. El usuario es redirigido a la interfaz interactiva para editar el documento en línea
2. El sistema devuelve un enlace editable y un nombre de documento
3. Debes guardar esta información en el **objeto de registro personalizado**

![Registro personalizado de documentos KwSoft](img/create-kwsoft-document-log.png)

## Buenas prácticas para administradores

1. Mantén nombres de plantilla simples y claros para negocio
2. Usa filtros de plantillas para reducir errores de usuario
3. Prueba un flujo por objeto (Case, Opportunity, etc.)
4. Evita exponer configuraciones técnicas a usuarios finales

## El Flow en acción

Puedes ejecutar este Flow desde un botón de Action en la página de registro de `Case`.

Cuando se abre la ventana modal, los usuarios ven las plantillas disponibles según el `Template Filter` configurado. Si no hay filtro configurado, se muestran todas las plantillas disponibles.

El botón Export se habilita cuando el usuario selecciona una plantilla. Si la plantilla seleccionada es interactiva, se muestra un mensaje indicando que el usuario será redirigido a la interfaz de edición interactiva.

![Modal de selección de plantillas](img/template-selection.png)
![Mensaje de redirección para documento interactivo](img/interactive-document.png)
