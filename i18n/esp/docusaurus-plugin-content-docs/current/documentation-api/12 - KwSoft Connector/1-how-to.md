# Conector KwSoft para Salesforce

El Conector KwSoft permite a tus equipos generar documentos desde registros de Salesforce usando Flows ya preparados.

Esta guía está escrita para administradores y usuarios funcionales. No necesitas conocimientos de programación para entender el proceso.

> Nota de terminología: los nombres de campos y objetos de Salesforce (por ejemplo, `Case`, `Record Id`, `Template Filter`) se mantienen en inglés para coincidir exactamente con la interfaz.

## Qué hace este módulo

Con este módulo, los usuarios pueden:

1. Abrir un Flow desde un registro (por ejemplo, un Case).
2. Seleccionar una plantilla de KwSoft.
3. Generar un documento.
4. Guardar el resultado de nuevo en Salesforce.

Se admiten dos modos de documento:

- Documento automático: se genera directamente como PDF y se adjunta al registro.
- Documento interactivo: se abre en KwSoft para editarlo primero y luego exportarlo.

## Qué incluye el paquete

El paquete incluye Flows de plantilla para empezar rápidamente:

1. Mobee - KwSoft Document Generation
2. Mobee - Export KwSoft Document

Puedes mantener la mayor parte de estos Flows y adaptarlos fácilmente a tu proceso de negocio.

## Orden de lectura recomendado

Para simplificar la configuración, sigue estas páginas en este orden:

1. [Configuración del Conector KwSoft](2-kwsoft-connector-setup.md).
2. [Flow de generación de documentos](3-kwsoft-document-generation-flow.md).
3. [Documentos interactivos y exportación final](4-kwsoft-interactive-documents.md).
4. [Checklist de administración y solución de problemas](5-kwsoft-admin-checklist-and-troubleshooting.md).

## Antes de empezar

Asegúrate de que:

1. El paquete está instalado.
2. Los administradores pueden editar Flows.
3. Los usuarios tienen acceso al objeto donde se generan los documentos (por ejemplo, Case).
4. Hay al menos una plantilla de KwSoft disponible.

## ¿Necesitas un resultado rápido?

Si quieres un despliegue rápido, empieza solo con documentos automáticos. Puedes añadir la gestión de documentos interactivos en una segunda fase.
