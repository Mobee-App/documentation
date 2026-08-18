# Conector iRaiser

## Introducción

El conector **iRaiser Connector** permite a los usuarios de Salesforce recibir datos de donaciones y donantes de iRaiser directamente en Salesforce en tiempo real mediante una integración segura por webhook. A diferencia de otros conectores de datos que utilizan un enfoque basado en búsqueda donde los usuarios recuperan datos activamente, el conector iRaiser opera bajo un **modelo push** donde iRaiser envía automáticamente datos a Salesforce cada vez que ocurren cambios.

🌐 Documentación de iRaiser: https://www.iraiser.eu/

> ✅ Caso de uso típico: Crear o actualizar automáticamente registros de **Contacto**, **Cuenta**, **Oportunidad** u objetos de donante personalizados en Salesforce cuando se crean o modifican donaciones o información de donantes en iRaiser.

---

## ¿Cómo funciona?

### Integración por Webhook

El conector iRaiser recibe datos de iRaiser mediante llamadas HTTP POST de webhook. Cuando un evento ocurre en iRaiser (como una nueva donación, actualización de contacto o pago recurrente), iRaiser envía los datos a un endpoint designado en Salesforce.

El conector:
1. Valida la solicitud entrante utilizando autenticación basada en tokens
2. Procesa la carga JSON de iRaiser
3. Coincide o crea registros en los objetos Salesforce apropiados
4. Maneja automáticamente las relaciones padre-hijo
5. Registra todas las actividades para monitoreo y solución de problemas

### Autenticación

El conector utiliza **autenticación basada en tokens** para asegurar las comunicaciones por webhook. Un token secreto compartido configurado en Salesforce se utiliza para validar cada solicitud entrante de iRaiser.

Cada solicitud incluye tres encabezados de seguridad que se validan:
- `securelogin` — Inicio de sesión de iRaiser
- `securetimestamp` — Marca de tiempo UTC actual
- `securetoken` — Hash MD5 generado a partir del token y los detalles de la solicitud

> ℹ️ La autenticación es manejada automáticamente por el conector. No se requiere configuración del lado del cliente.

### Flujo de Datos

El conector iRaiser procesa datos a través de estos objetos personalizados clave:

- **[Data Connector](3-data-connector-module-configuration.md#create-a-data-connector)** — Identifica esto como una integración de iRaiser definiendo el tipo de conector.
- **[Data Table Definition](8-iraiser-connector-configuration.md#data-table-definition)** — Vincula el conector a objetos de Salesforce (Ejemplo: Contacto, Cuenta, Oportunidad) y define relaciones padre-hijo.
- **[Data Attribute Mapping](8-iraiser-connector-configuration.md#data-attribute-mappings)** — Mapea campos de la carga JSON de iRaiser a campos de Salesforce, definiendo cómo se importan los datos a los registros de Salesforce.

### Procesamiento Asíncrono

Para garantizar escalabilidad y confiabilidad, el conector utiliza **Eventos de Plataforma** de Salesforce para procesamiento asíncrono. Esto significa:

- Las solicitudes de webhook son aceptadas inmediatamente (respuesta HTTP 202)
- El procesamiento real de registros ocurre en segundo plano
- Grandes volúmenes de datos pueden ser manejados sin impactar la experiencia del usuario
- Las operaciones fallidas se reintentan automáticamente

---
