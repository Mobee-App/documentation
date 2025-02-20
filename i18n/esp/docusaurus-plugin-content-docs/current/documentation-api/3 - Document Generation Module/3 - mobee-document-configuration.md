
# Configuración y uso

## Requisitos y permisos del perfil de usuario

Para utilizar el módulo, los usuarios deben cumplir con los siguientes requisitos previos:

- Poseer una licencia de Mobee.
- Asignación de un conjunto de permisos "Usuario de Mobee" o "Administrador de Mobee".
- Habilitar las Credenciales Externas de Usuario a través de los Perfiles de Usuario si es necesario.

## Recuperar y restablecer el token de generación de documentos

1. Abre la Configuración de Mobee navegando a **Lanzador de Aplicaciones** y buscando **Configuración de Mobee**.

2. Haz clic en "Configuración de Mobee" en la sección "Artículos".

![Imagen de ejemplo](./img/Mobee-Settings-Tab.png)

3. En la Configuración de Mobee, navega a la pestaña "Generación de Documentos".

4. Dentro de la pestaña "Generación de Documentos", encontrarás tu Token de Organización si tu organización está suscrita al servicio de Generación de Documentos de Mobee. Utiliza este token para autorizar tu acceso a la generación de documentos. Puedes hacer clic en el botón a la izquierda del 'Botón de Restablecer' para copiar el token al portapapeles o seleccionarlo y copiarlo.

![Imagen de ejemplo](./img/Mobee-Token.png)

Si necesitas restablecer el token, localiza el botón "Restablecer Token" a la derecha. Al hacer clic en este botón podrás generar un nuevo token para tu organización.

![Imagen de ejemplo](./img/Token-Reset.png)

**Nota:** Asegúrate de actualizar el token en los [Encabezados Personalizados](#access-authorization) cuando lo restablezcas en la Configuración de Mobee.

## Autorización de acceso

La generación de documentos de Mobee depende de un servicio externo, lo que hace que la autorización sea vital para la seguridad. Al emplear la autenticación por token, solo las entidades autenticadas pueden acceder al servicio, eliminando el riesgo de uso no autorizado y garantizando una protección robusta contra violaciones de datos.

### Configuración de credenciales externas para el generador de documentos de mobee

Esta sección describe una guía paso a paso sobre cómo configurar credenciales externas para el Generador de Documentos de Mobee, que incluye la creación de un protocolo de autenticación personalizado, agregar parámetros, encabezados personalizados e integración con Uprizon para la autenticación.

### Configuración de credenciales externas

1. Abre la interfaz de gestión de credenciales externas navegando a **Configuración** > **Seguridad** > **Credenciales Nombradas**.

![Imagen de ejemplo](./img/Setup-Named-Credential.png)

2. Haz clic en la pestaña "Credenciales Externas".

![Imagen de ejemplo](./img/Named-Credentials.png)

3. Localiza la credencial externa con la etiqueta "Credenciales Externas de Generación de Documentos" y haz clic en ella.

![Imagen de ejemplo](./img/External-Credentials.png)

![Imagen de ejemplo](./img/External-Credentials-Page.png)

4. En las "Credenciales Externas de Generación de Documentos", encuentra los **Encabezados Personalizados** con el Nombre "Authorization", haz clic en la flecha a la derecha y selecciona "Editar".

![Imagen de ejemplo](./img/Custom-Headers.png)

![Imagen de ejemplo](./img/Custom-Headers-Edit-Button.png)

5. Dentro de la Ventana de Encabezados Personalizados, agrega el Token al Encabezado Personalizado:

    Reemplaza el **Valor** por el [token](#retrieve-and-reset-document-generation-token) proporcionado en la Página de Configuración de Mobee:
     - **Nombre:** Authorization
     - **Valor:** Bearer [Token proporcionado por Mobee]

    **Nota:** Antes de guardar, asegúrate de que el token tenga el prefijo "Bearer ". Si no lo tiene, agrégalo con un espacio al final. 

    Por ejemplo: Si el token es `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`, hazlo: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

    Haz clic en "Guardar" para guardar el encabezado personalizado.

![Imagen de ejemplo](./img/Custom-Headers-Windows.png)

**Nota:** Asegúrate de actualizar el token en los [Encabezados Personalizados](#access-authorization) cuando lo restablezcas en la Configuración de Mobee.

## Crear una plantilla de documento

1. Navega a la pestaña de **Plantillas de Documentos de Mobee** en Salesforce para iniciar la creación de una nueva plantilla.
2. Haz clic en el botón "**Nuevo**" y proporciona un nombre adecuado para la plantilla.

![Texto alternativo](img/prep_word.png)

Después de la creación exitosa de la plantilla, el siguiente paso es asociarla con un objeto específico de Salesforce. Sigue los siguientes pasos:

1. Accede a la plantilla recién creada seleccionando su nombre de la lista.
2. En la sección inicial, haz clic en el botón "**Elegir Objeto Principal**" ubicado a la derecha.
3. Utiliza el campo de búsqueda para designar el objeto principal deseado.
4. Opta por un campo de Salesforce en el objeto seleccionado que servirá como convención de nombres para el archivo generado. Se admiten tipos como campos de texto y fórmulas. El campo **Nombre** es seleccionado por defecto.

![Imagen de ejemplo](img/prep_word2.png)

5. Después de la selección del objeto principal y el campo de nombre, procede a cargar tu plantilla de documento Word seleccionando el botón "**Subir**". Ten en cuenta que solo se admiten archivos con la extensión `.docx`.

![Imagen de ejemplo](img/prep_word3.png)

## Generar documentos desde la plantilla

Mobee ofrece una variedad de opciones para facilitar la generación de documentos adaptados a tus requisitos específicos. El paquete incluye componentes preconstruidos listos para usar e integrarse sin problemas en tus páginas. Además, Mobee proporciona funcionalidades que permiten personalizar todo el proceso de generación de documentos utilizando Lightning o incluso Apex.

### Componente web lightning

Para la generación manual de documentos dentro de una pantalla, Mobee presenta un componente web Lightning fundamental diseñado para generar documentos para el registro actual basado en un ID de plantilla especificado.

**A continuación, se muestran los parámetros del componente:**

![Generador de Documentos Web Lightning](img/document_generator_lwc.png)

- **ID del Registro Actual:** Cuando se coloca en una página de registro, este parámetro puede dejarse vacío, ya que detecta automáticamente el ID del registro actual.

- **IDs de Múltiples Registros (separados por comas):** Este parámetro puede dejarse vacío cuando se generen documentos unitarios y se usará para plantillas de documentos combinados más adelante.

- **Adjuntar al Registro:** Un indicador de si el usuario desea adjuntar el documento generado a las Notas y Archivos del registro actual. Si no se marca, el documento se descargará automáticamente.

- **Nombre API del Objeto Actual:** Cuando se coloca en una página de registro, este parámetro puede dejarse vacío, ya que detecta automáticamente el nombre API del objeto del registro actual.

- **ID de Plantilla Seleccionada:** Informa al componente sobre la plantilla que se utilizará para la generación.

- **Mostrar Botón de Generación:** Un indicador de si se desea un botón físico para activar la generación. Si no se marca, la generación de documentos se activará al cargar la página que contiene el componente.

- **Formato de Salida:** Este parámetro indica el formato deseado para el archivo generado. Mobee actualmente admite `docx` y `pdf`.

**Uso:**

Este componente es adecuado para su uso en **"Páginas Lightning de Registro"** y **"Pantallas de Flujos"**. Para aprovechar al máximo las capacidades de este componente, se recomienda usarlo en **Pantallas de Flujos**. Aprovechar la flexibilidad de Flow permite obtener dinámicamente la plantilla deseada según criterios de búsqueda específicos, proporcionando un parámetro dinámico al componente y evitando la inclusión de parámetros en texto fijo.

Aquí tienes un ejemplo de su uso en un Flujo de Pantalla.

![Flujo de Pantalla LWC](img/screen_flow_lwc.png)

### Botón de acción

El paquete Mobee se integra sin problemas con las páginas de registros de Salesforce, proporcionando un Flow listo para usar que se puede agregar fácilmente como un botón de acción.

The Mobee package seamlessly integrates with Salesforce record pages, providing an out-of-the-box Flow that can be effortlessly added as an action button.

**Creación del botón de acción:**

1. Navega al administrador de objetos y selecciona el objeto donde deseas que esté disponible el botón de generación.
2. Ve a la sección "Botones, Enlaces y Acciones" y haz clic en el botón "Nueva Acción".
3. Elige la opción "Componente Web Lightning" para el "Tipo de Acción" y selecciona "Mobee:documentGeneratorAction" para el "Componente Web Lightning".

![Añadir Botón de Acción](./img/ajouter_button_action.png)

**Añadir el botón de acción a un diseño de página:**

Una vez que el botón de acción esté creado, sigue estos pasos para agregarlo a un "Diseño de Página" deseado.

1. Abre la sección "Diseños de Página" desde el administrador de objetos y selecciona la página donde deseas agregar tu botón.
2. Localiza el botón recién creado en la sección "Acciones Móviles y Lightning".
3. Arrastra el botón y colócalo en la sección "Acción en Salesforce Mobile y Lightning Experience".

![Imagen de Ejemplo](./img/ajouter_button_action2.jpg)

**Utilización del botón añadido:**

Para utilizar el botón añadido, sigue estos pasos:

1. Navega a un registro del mismo tipo de objeto que la plantilla de documento creada.
2. Haz clic en el botón de acción "Generar Documento".
3. Selecciona la plantilla deseada de la lista proporcionada.
4. El documento será generado y descargado automáticamente.

![Imagen de Ejemplo](./img/generer_apartir_modele_creer.png)

### Botón de vista de lista

Similar al botón de acción mencionado anteriormente, Mobee extiende su funcionalidad ofreciendo un flujo que puede ser invocado desde los botones de vista de lista. Esta característica resalta la capacidad de generar documentos para múltiples registros simultáneamente.

**Creación de un botón de vista de lista:**

Sigue estos pasos para crear el botón:

1. Prepara una plantilla que se utilizará en el objeto principal deseado.
2. Desde la pantalla de configuración, selecciona el objeto principal deseado.
3. Ve a la sección "Botones, Enlaces y Acciones".
4. Haz clic en el botón "Nuevo Botón o Enlace" en la parte superior derecha.
5. Completa los campos requeridos de Etiqueta y Nombre.
6. Selecciona "Botón de Lista" en el "Tipo de Visualización" y asegúrate de que la opción "Mostrar Casillas de Verificación (para Selección de Múltiples Registros)" esté marcada.
7. En el área de texto de la fórmula, ingresa la siguiente ruta y reemplaza el ID de la plantilla con tu plantilla deseada: `/flow/Mobee__ListViewDocumentGenerator?templateId=a057Q000005Yd7BQAS&attachToRecord=false&outputFormat=pdf`

![Botón de Vista de Lista](img/list_view_button.png)

**Añadir el botón a la vista de lista:**

Para añadir el botón a la vista de lista, sigue estos pasos:

1. Desde el "Administrador de Objetos", accede a la sección "Diseño de Botón de Vista de Lista".
2. Para el diseño de vista de lista, haz clic en el botón desplegable a la derecha y selecciona "Editar".
3. En el Editor de Vista de Lista, encuentra tu botón en la sección "Botones Personalizados" y agrégalo a la lista de Botones Seleccionados.
4. Haz clic en Guardar.

**Utilización del botón añadido:**

Para utilizar el botón de vista de lista, sigue estos pasos:

1. Ve a la vista de lista del objeto.
2. Selecciona los registros deseados haciendo clic en la casilla de verificación de cada línea.
3. Localiza tu botón en la lista de botones en la sección de acciones superiores.
4. Haz clic en el botón, lo que abrirá el flujo en una nueva página y generará los documentos.

**Nota:** Este "Botón Personalizado" también se puede usar para **Vistas de lista relacionadas**.

### Cliente Apex

La generación de documentos no siempre es una funcionalidad activada por el usuario; a veces, es necesario generar documentos desde triggers, trabajos y otros procesos automatizados. Para facilitar esto, Mobee proporciona una función Apex que permite la generación de documentos sin problemas adaptados a requisitos específicos.

La función es accesible dentro del paquete Mobee invocando la función `Mobee.DocumentTemplaterController.generateDocuments`.

Al igual que el Componente Web Lightning, esta función Apex toma cuatro parámetros como entrada:

1. Una lista de IDs de registros de Salesforce para los cuales se deben generar documentos. (Puede ser una lista que contenga un solo ID).
2. El ID de la Plantilla de Documento de Mobee que se utilizará como plantilla para la generación.
3. El formato de salida deseado (`docx` o `pdf`).
4. Una bandera que indica si se debe adjuntar el archivo generado al registro dado.

Esta función devuelve un `Map` que contiene el archivo generado como `Blob` indexado por sus respectivos IDs de registro.

Aquí tienes un ejemplo de cómo utilizar esta función Apex:

**Contexto:** En este ejemplo, el Objeto Principal de la Plantilla de Mobee es el objeto personalizado `Application__c`, y el ID de la plantilla se almacena en el campo de búsqueda `ContractTemplate__c`, que está en el campo padre `Sector__c`.

```java
public class DocumentGeneration {
    @Future(callout=true)
    public static void generateContract(String applicationId) {
        String OUTPUT_FORMAT = 'pdf';
        Application__c application = [SELECT Id, Sector__c.ContractTemplate__c FROM Application__c WHERE Id = :applicationId];
        if (application.Sector__c.ContractTemplate__c == null) {
            throw new Mobee.DocumentGenerationException('Template is not defined on this Sector.');
        }
        Map<Id, Blob> generatedDocuments;
        if (Test.isRunningTest()) {
            generatedDocuments = generateDocumentMock(new List<Id>{applicationId});
        } else {
            generatedDocuments = Mobee.DocumentTemplaterController.generateDocuments(
                // recordsIds
                new List<String>{applicationId},
                // templateId
                application.Sector__c.ContractTemplate__c,
                // outputFormat
                OUTPUT_FORMAT,
                // attachToRecords
                false);
        }
        Blob generatedDocument = generatedDocuments.get(applicationId);
        if (generatedDocument == null) {
            throw new Mobee.DocumentGenerationException('Error while generating document.');
        }
        // Do whatever you want with the Blob...
    }
}
```

## Compresor de PDF

Mobee proporciona una función para comprimir archivos PDF, ayudando a reducir su tamaño. Los usuarios pueden proporcionar una ruta de archivo local o una URL de un archivo PDF, que se descargará y comprimirá.

### Uso

**Parámetros de entrada**

- **Ruta del archivo o URL**: La ubicación del archivo PDF a comprimir, ya sea una ruta local o una URL en línea.
- **Resolución de imágenes en color (predeterminado: 120 DPI)**: Establece la resolución de las imágenes en color dentro del PDF. Valores más altos proporcionan mejor calidad de imagen, pero resultan en archivos más grandes.
- **Resolución de imágenes en escala de grises (predeterminado: 120 DPI)**: Controla la resolución de las imágenes en escala de grises, que contienen tonos de gris pero no color. Ajustar esta configuración afecta la claridad de las imágenes en escala de grises.
- **Resolución de imágenes monocromáticas (predeterminado: 120 DPI)**: Especifica la resolución de las imágenes monocromáticas (blanco y negro) en el PDF. Esto afecta la nitidez del texto y los dibujos lineales.

**Notas importantes:**

- La resolución predeterminada para todos los tipos de imágenes está configurada en 120 DPI.
- Configuraciones de resolución más altas aumentan la calidad de la imagen, pero también el tamaño del archivo.
- Ajusta la configuración de resolución en función de tu equilibrio entre calidad de imagen y tamaño de archivo.

### Cliente Apex

La compresión de PDF no siempre se activa manualmente por los usuarios. A veces, los procesos automatizados, como los disparadores o trabajos programados, necesitan comprimir documentos. Para estos escenarios, Mobee proporciona una función Apex que permite una compresión de documentos sin interrupciones adaptada a necesidades específicas.

La función está disponible en el paquete Mobee a través de `Mobee.DocumentsApiClient.compressDocument`.

Esta función Apex requiere cuatro parámetros de entrada:

1. Una lista de ID de registros de Salesforce para los documentos a comprimir (o una sola URL).
2. Resolución de imágenes en color.
3. Resolución de imágenes en escala de grises.
4. Resolución de imágenes monocromáticas.

**Caso de uso de ejemplo:**

En el siguiente ejemplo, el documento a comprimir se identifica por su **ID de registro de Salesforce** o **URL**.

```java
/**
 * @description Esta clase proporciona funcionalidad para comprimir archivos PDF de facturas
 * antes de guardarlos en Salesforce.
 *
 * @usage Comprime el blob PDF proporcionado utilizando opciones de compresión especificadas
 * y guarda la versión comprimida a través de InvoiceController.
 */
public with sharing class InvoiceController {

    /**
     * @description Comprime un blob de factura PDF utilizando configuraciones predefinidas
     * para reducir el tamaño del archivo mientras se mantiene la legibilidad.
     *
     * @param invoicePdfBlob El archivo PDF original en formato Blob.
     *
     * @throws IllegalArgumentException Si el blob proporcionado es nulo o está vacío.
     *
     * @example
     * Blob pdfBlob = [SELECT Body FROM ContentVersion WHERE Title = 'SampleInvoice'].Body;
     * InvoiceController.compressInvoice(pdfBlob);
     */
    public static void compressInvoice(Blob invoicePdfBlob) {
        if (invoicePdfBlob == null || invoicePdfBlob.size() == 0) {
            throw new IllegalArgumentException('El blob PDF de la factura no puede ser nulo o estar vacío.');
        }

        // Definir configuraciones de compresión
        Map<String, String> compressionOptions = new Map<String, String>{
            'ColorImageResolution' => '72',  // Establecer resolución de imágenes en color a 72 DPI
            'GrayImageResolution'  => '72',  // Establecer resolución de imágenes en escala de grises a 72 DPI
            'MonoImageResolution'  => '72'   // Establecer resolución de imágenes monocromáticas a 72 DPI
        };

        try {
            Blob compressedInvoice = DocumentsApiClient.compressDocument(invoicePdfBlob, compressionOptions);
            InvoiceController.saveInvoice(compressedInvoice);
            System.debug('Factura comprimida y guardada con éxito.');
        } catch (Exception ex) {
            System.debug('Error durante la compresión: ' + ex.getMessage());
            throw new AuraHandledException('No se pudo comprimir la factura: ' + ex.getMessage());
        }
    }
}
```

Este ejemplo demuestra cómo comprimir y almacenar eficazmente facturas PDF en Salesforce, manteniendo un equilibrio óptimo entre calidad y tamaño de archivo.
