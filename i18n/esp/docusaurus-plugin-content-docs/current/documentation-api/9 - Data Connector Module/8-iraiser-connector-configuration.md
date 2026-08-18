# Configuración del Conector iRaiser

## Descripción General

> ⚠️ **Requisito previo:** Antes de configurar este conector, asegúrese de que la **Configuración General** esté completa.  
> Consulte [Configuración General](3-data-connector-module-configuration.md) para los pasos de asignación de conjuntos de permisos y creación de un Conector de Datos.

1. [**Crear el Conector de Datos**](#data-connector) – Configurar el registro del conector con el tipo "iRaiser Connector"
2. [**Almacenar el Token de iRaiser**](#store-the-iraiser-token) – Configurar el token de seguridad en Configuración
3. [**Crear Definiciones de Tabla de Datos**](#data-table-definition) – Vincular datos de iRaiser a objetos de Salesforce
4. [**Configurar Mapeos de Atributos de Datos**](#data-attribute-mappings) – Mapear campos JSON de iRaiser a campos de Salesforce
5. [**Crear el Sitio Público para Recepción de Webhooks**](#create-the-public-site-for-webhook-reception) – Habilitar la recepción de webhooks

En la siguiente sección, examinará cada uno de estos pasos de configuración.

---

## Conector de Datos

### Crear el Registro del Conector de Datos

El registro del Conector de Datos identifica esto como una integración de iRaiser.

#### Campos Requeridos

| Campo | Significado | Valor a Establecer |
|-------|-------------|--------------------|
| **Nombre** | Identificador único para este conector | Ejemplo: `iRaiser Production` o `iRaiser Sandbox` |
| **Tipo de Conector** | Tipo de conector | Seleccione `iRaiser Connector` de la lista desplegable |

#### Configuración de Ejemplo

| Campo | Valor de Ejemplo |
|-------|------------------|
| Nombre | `iRaiser Production` |
| Tipo de Conector | `iRaiser Connector` |

#### Pasos

1. Vaya a la pestaña **Connectores de Datos**
2. Haga clic en **Nuevo**
3. Ingrese un Nombre (ej. "iRaiser Production")
4. Seleccione `iRaiser Connector` como Tipo de Conector
5. Guarde el registro

---

## Almacenar el Token de iRaiser

### Configurar el Token de Seguridad

El conector iRaiser utiliza un token secreto compartido para validar solicitudes entrantes de webhook. Este token debe ser configurado en los metadatos personalizados de Configuración de Mobee.

#### Campos Requeridos

| Campo | Significado | Valor a Establecer |
|-------|-------------|--------------------|
| **iRaiser Token** | Clave secreta compartida para autenticación de webhook | El token proporcionado por iRaiser |

#### Pasos

1. Vaya a **Configuración** → **Tipos de Metadatos Personalizados**
2. Haga clic en **Administrar Registros** junto a **Configuración de Mobee**
3. Edite el registro **Configuración** predeterminado (o cree uno nuevo)
4. Ingrese el Token de iRaiser en el campo **iRaiser Token**
5. Guarde el registro

> 🔐 **Nota de Seguridad:** Este token se utiliza para validar el encabezado `securetoken` en solicitudes entrantes de webhook. Manténgalo seguro y nunca lo exponga en código del lado del cliente.

---

## Definición de Tabla de Datos

### Descripción General

Las definiciones de tabla de datos vinculan datos de iRaiser a objetos de Salesforce. Para el conector iRaiser, cada definición especifica qué objeto de Salesforce recibirá datos de la carga del webhook.

El conector admite el procesamiento de múltiples objetos en una sola llamada de webhook, con manejo automático de relaciones padre-hijo.

### Campos Requeridos

| Campo | Significado | Valor a Establecer |
|-------|-------------|--------------------|
| **Conector de Datos** | Vincula esta definición de tabla al conector | Seleccione su Conector iRaiser |
| **Nombre del Objeto** | El objeto de Salesforce donde se crearán/actualizarán los registros | Ingrese el Nombre de API del Objeto. Ejemplo: `Account`, `Contact`, `Opportunity` |
| **Tipo de Registro del Objeto** *(opcional)* | Limita el procesamiento a tipos de registro específicos | Nombres de Desarrollador separados por comas |
| **Mapeo de Búsqueda de Tabla Padre** *(opcional)* | Define relaciones padre-hijo para procesamiento jerárquico | Formato: `APIObjetoPadre->CampoBúsquedaHijo` (uno por línea) |

> 💡 Si su org **no usa** tipos de registro en el objeto designado, deje **Tipo de Registro del Objeto** en blanco.  
> Al completar **Tipo de Registro del Objeto**, ingrese el **Nombre de Desarrollador**, no la etiqueta.  
> Ejemplo: `Business_Account, PersonAccount`

### Configuración de Ejemplo

#### Para un Objeto Contacto (Hijo de Cuenta)

| Campo | Valor de Ejemplo |
|-------|------------------|
| Conector de Datos | *iRaiser Production* |
| Nombre del Objeto | `Contact` |
| Tipo de Registro del Objeto | (en blanco) |
| Mapeo de Búsqueda de Tabla Padre | `Account->AccountId` |

#### Para un Objeto Cuenta (Raíz)

| Campo | Valor de Ejemplo |
|-------|------------------|
| Conector de Datos | *iRaiser Production* |
| Nombre del Objeto | `Account` |
| Tipo de Registro del Objeto | `Business_Account` |
| Mapeo de Búsqueda de Tabla Padre | (en blanco - este es un objeto raíz) |

#### Para un Objeto Oportunidad (Hijo de Cuenta y Contacto)

| Campo | Valor de Ejemplo |
|-------|------------------|
| Conector de Datos | *iRaiser Production* |
| Nombre del Objeto | `Opportunity` |
| Tipo de Registro del Objeto | `Donation` |
| Mapeo de Búsqueda de Tabla Padre | `Account->AccountId` |

### Pasos

1. Vaya a la pestaña **Definiciones de Tabla de Datos**
2. Haga clic en **Nuevo**
3. Seleccione su Conector iRaiser en el campo **Conector de Datos**
4. Ingrese el **Nombre del Objeto** de Salesforce (nombre de API)
5. Opcionalmente especifique **Tipo de Registro del Objeto** si necesita filtrar por tipo de registro
6. Si este objeto tiene relaciones padre, configure el **Mapeo de Búsqueda de Tabla Padre**
7. Guarde el registro

---

## Mapeos de Atributos de Datos

### Descripción General

Los mapeos de atributos de datos definen cómo los campos de la carga JSON de iRaiser se mapean a campos de objetos de Salesforce. El conector iRaiser utiliza **notación de puntos** para acceder a campos anidados en la estructura JSON.

> 💡 Solo los campos con los mapeos apropiados se poblarán en los registros de Salesforce. Cada mapeo vincula una ruta JSON específica a un campo de Salesforce.

### Campos Clave

| Campo | Significado | Valor a Establecer |
|-------|-------------|--------------------|
| **Definición de Tabla de Datos** | Vincula este mapeo a la definición de tabla correspondiente | Seleccione el registro *Definición de Tabla de Datos* relacionado |
| **Campo de Objeto SF** | Campo de Salesforce donde se debe almacenar el valor | Nombre de Desarrollador del campo (Ejemplo: `FirstName`, `LastName`, `Email`) |
| **Campo API** | Ruta del campo desde la carga JSON de iRaiser | Ruta del campo JSON usando notación de puntos (Ejemplo: `contact.firstname`, `contact.lastname`) |
| **Es Identificador Único** | Marca este campo como identificador único para coincidencia de registros | Marque para campos que identifiquen de manera única registros (ej. ID de iRaiser, Email) |

#### 1. Establecer el Campo de Objeto SF en el Mapeo de Atributos de Datos

- Este es el nombre de API interno del campo de Salesforce que desea poblar.
- Debe existir en el objeto asociado a su Definición de Tabla de Datos.
- Puede encontrarlo en **Administrador de Objetos → [Su Objeto] → Campos y Relaciones**.

📌 <u>*Ejemplo:*</u>

Para mapear el nombre del contacto, establezca el **Campo de Objeto SF** en `FirstName`.

#### 2. Establecer el Campo API en el Mapeo de Atributos de Datos

Esta es la ruta exacta del campo tal como es devuelta por la API de iRaiser, usando **notación de puntos** para acceder a objetos anidados.

- Use notación de puntos para recorrer la estructura JSON
- Asegúrese de que el campo exista en la carga del webhook

📌 <u>*Ejemplo:*</u>

<details>
<summary>Ver ejemplo de carga JSON de iRaiser</summary>

```json
Ejemplo de carga de webhook:

{
  "event": "contact.updated",
  "data": {
    "contact": {
      "id": "12345",
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com",
      "phone": "+33123456789",
      "account": {
        "id": "67890",
        "name": "Acme Corporation",
        "address": {
          "street": "123 Main Street",
          "city": "Paris",
          "postalcode": "75001",
          "country": "France"
        }
      }
    }
  },
  "timestamp": "2025-08-17T10:00:00Z"
}
```

</details>

| Campo de Objeto SF | Campo API | Es Identificador Único |
|-------------------|------------|----------------------|
| FirstName | `contact.firstname` | No |
| LastName | `contact.lastname` | No |
| Email | `contact.email` | Sí |
| Phone | `contact.phone` | No |
| iRaiser_Id__c | `contact.id` | Sí |

#### 3. Ejemplo de Registros de Mapeo de Atributos de Datos

Para un objeto Contacto que recibe datos de iRaiser:

| Definición de Tabla de Datos | Campo de Objeto SF | Campo API | Es Identificador Único |
|---|---|---|---|
| iRaiser Contact | FirstName | contact.firstname | (no marcado) |
| iRaiser Contact | LastName | contact.lastname | (no marcado) |
| iRaiser Contact | Email | contact.email | ✅ (marcado) |
| iRaiser Contact | Phone | contact.phone | (no marcado) |
| iRaiser Contact | iRaiser_Id__c | contact.id | ✅ (marcado) |

Para un objeto Cuenta:

| Definición de Tabla de Datos | Campo de Objeto SF | Campo API | Es Identificador Único |
|---|---|---|---|
| iRaiser Account | Name | contact.account.name | (no marcado) |
| iRaiser Account | iRaiser_Account_Id__c | contact.account.id | ✅ (marcado) |
| iRaiser Account | BillingStreet | contact.account.address.street | (no marcado) |
| iRaiser Account | BillingCity | contact.account.address.city | (no marcado) |
| iRaiser Account | BillingPostalCode | contact.account.address.postalcode | (no marcado) |

> 💡 **Mejor Práctica:** Siempre mapee el ID externo de iRaiser (ej. `contact.id`) a un campo personalizado en Salesforce y márquelo como **Identificador Único**. Esto garantiza una coincidencia correcta de registros entre sincronizaciones y evita duplicados.

---

## Crear el Sitio Público para Recepción de Webhooks

El conector iRaiser recibe llamadas de webhook de iRaiser, lo que requiere un endpoint públicamente accesible en Salesforce. Esto se logra creando y activando un Sitio de Salesforce.

> ⚠️ Pueden aparecer pequeñas diferencias dependiendo de su edición de Salesforce, el principio sigue siendo el mismo.

### Pasos

1. Vaya a **Configuración > Interfaz de Usuario > Sitios y Dominios > Sitios**
2. Haga clic en **Nuevo**
3. Complete los siguientes campos:

   | Campo | Valor |
   |---|---|
   | Etiqueta del Sitio | `iRaiser Webhooks` |
   | Nombre del Sitio | `iraiserwebhooks` |
   | Contacto del Sitio | *(Administrador del Sistema)* |
   | Propietario de Registro Predeterminado | *(Administrador del Sistema)* |
   | Activo | ✅ Marcado |
   | Página de Inicio del Sitio Activo | `InMaintenance` |

4. Haga clic en **Guardar**
5. Asegúrese de que el sitio esté **Activo**

---

## Relaciones Padre-Hijo

### Descripción General

El conector iRaiser maneja automáticamente el procesamiento jerárquico de datos donde los registros padre se crean antes que sus hijos. Esto se configura utilizando el campo **Mapeo de Búsqueda de Tabla Padre** en la Definición de Tabla de Datos.

### Funcionamiento

Cuando define relaciones padre-hijo, el conector:
1. Identifica todas las Definiciones de Tabla de Datos para su conector
2. Construye un grafo de dependencias basado en Mapeos de Búsqueda de Tabla Padre
3. Ordena automáticamente las definiciones para que los padres sean procesados primero
4. Crea/actualiza registros padre antes que sus hijos
5. Utiliza campos de búsqueda mapeados para establecer relaciones

> ⚠️ **Detección de Dependencia Circular:** Si se detectan dependencias circulares (ej. Objeto A depende de Objeto B, y Objeto B depende de Objeto A), el conector generará un error y detendrá el procesamiento.

### Formato de Configuración

El campo **Mapeo de Búsqueda de Tabla Padre** utiliza el siguiente formato:

```
APIObjetoPadre->CampoBúsquedaHijo
```

- **APIObjetoPadre:** El nombre de API del objeto padre de Salesforce
- **CampoBúsquedaHijo:** El nombre de API del campo de búsqueda en el objeto hijo que referencia al padre

Se pueden definir múltiples relaciones padre, una por línea.

### Ejemplo: Jerarquía de Tres Niveles

Para un escenario de donación típico con Cuenta → Contacto → Oportunidad:

**DTD Cuenta (Raíz):**
| Campo | Valor |
|---|---|
| Mapeo de Búsqueda de Tabla Padre | (en blanco - sin padre) |

**DTD Contacto (Hijo de Cuenta):**
| Campo | Valor |
|---|---|
| Mapeo de Búsqueda de Tabla Padre | `Account->AccountId` |

**DTD Oportunidad (Hijo de Cuenta):**
| Campo | Valor |
|---|---|
| Mapeo de Búsqueda de Tabla Padre | `Account->AccountId` |

Esto garantiza que:
1. Los registros de Cuenta se crean/actualizan primero
2. Luego los registros de Contacto (vinculados a sus Cuentas)
3. Finalmente los registros de Oportunidad (vinculados a sus Cuentas)

---

## Probar Su Configuración

Antes de pasar a producción, pruebe su configuración del conector iRaiser:

1. **Verifique el Conector de Datos** - Asegúrese de que esté creado con el tipo "iRaiser Connector"
2. **Verifique el Token** - Confirme que el Token de iRaiser esté configurado en Configuración de Mobee
3. **Verifique el Sitio** - Confirme que el Sitio de Salesforce esté creado y activo
4. **Pruebe con una Carga de Ejemplo** - Use el sandbox de iRaiser para enviar llamadas de webhook de prueba
5. **Valide los Mapeos de Campos** - Confirme que todos los campos esperados se poblan correctamente
6. **Pruebe las Relaciones Padre-Hijo** - Verifique que los datos jerárquicos se procesen en el orden correcto

> 💡 Comience con un pequeño subconjunto de datos y expándalo gradualmente a medida que valide la integración.

---

## Solución de Problemas

### Problemas Comunes

#### El Webhook Devuelve 403 Prohibido

**Síntomas:** Respuesta HTTP 403 con el mensaje "Token no válido"

**Causas:**
- Token de iRaiser incorrecto en Configuración
- Cálculo de securetoken no válido
- Encabezados faltantes o incorrectos

**Solución:**
1. Verifique el Token de iRaiser en Configuración de Mobee
2. Asegúrese de que iRaiser esté enviando los tres encabezados requeridos: `securelogin`, `securetimestamp`, `securetoken`
3. Verifique el cálculo del token: MD5(`securelogin` + `iRaiserToken` + `securetimestamp`).toLowerCase()
4. Verifique el formato de la marca de tiempo: debe estar en formato ISO 8601 UTC

#### No se Crean/Actualizan Registros

**Síntomas:** El webhook devuelve 202 Aceptado pero no se crean registros

**Causas:**
- Definiciones de Tabla de Datos faltantes
- No hay Mapeos de Atributos de Datos configurados
- Problemas de seguridad a nivel de campo
- Campos requeridos faltantes
- Sitio no activo o mal configurado

**Solución:**
1. Verifique que las Definiciones de Tabla de Datos existan para los objetos objetivo
2. Verifique que los Mapeos de Atributos de Datos estén configurados para todos los campos requeridos
3. Asegúrese de que el usuario de integración tenga permisos de creación/modificación en los objetos objetivo
4. Verifique que el Sitio de Salesforce esté activo

#### Registros Duplicados

**Síntomas:** Múltiples registros creados para el mismo contacto de iRaiser

**Causas:**
- No hay campos de identificador único configurados
- Campo de identificador único mapeado incorrectamente
- Diferentes valores de identificador único entre sincronizaciones

**Solución:**
1. Configure al menos un mapeo de **Identificador Único** por objeto
2. Asegúrese de que el campo mapeado contenga un valor único y consistente de iRaiser
3. Considere usar el ID de iRaiser como campo de ID externo en Salesforce

#### Problemas de Orden de Procesamiento Padre-Hijo

**Síntomas:** Los registros hijos creados antes que los padres, causando errores de búsqueda

**Causas:**
- Mapeo de Búsqueda de Tabla Padre faltante o incorrecto
- Dependencias circulares en las Definiciones de Tabla de Datos

**Solución:**
1. Verifique que el Mapeo de Búsqueda de Tabla Padre esté configurado para todos los objetos hijos
2. Revise el grafo de dependencias para garantizar una jerarquía válida

---

*Última actualización: Agosto 2026*
