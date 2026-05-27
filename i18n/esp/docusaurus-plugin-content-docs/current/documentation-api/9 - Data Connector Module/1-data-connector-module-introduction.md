# Introducción

Esta guía de usuario le ayudará a comprender y utilizar la herramienta Data Connector.

El **Data Connector** es una herramienta flexible y potente integrada en su entorno Salesforce que permite conexiones en tiempo real con APIs externas. Permite a sus usuarios **buscar datos externos**, **ver resultados dentro de Salesforce** y **utilizar esos datos para crear registros de Salesforce**.

Este conector fue diseñado para ser:
- 🔌 **Adaptable** – Puede configurarse para funcionar con una amplia gama de sistemas externos (APIs públicas o privadas)
- 🎯 **Personalizado** – Puede definir exactamente qué datos se muestran, cómo se mapean y qué filtros están disponibles
- 🚀 **Fácil de usar** – Toda la configuración se gestiona entre bastidores, mientras los usuarios trabajan con una interfaz clara y guiada

---

## ¿Qué hace?

En términos prácticos, el Data Connector le permite:

- Conectarse a APIs externas utilizando configuraciones seguras y preconfiguradas
- Definir qué datos deben mostrarse a los usuarios
- Permitir a los usuarios buscar datos externos mediante filtros
- Rellenar automáticamente los campos de Salesforce con los resultados seleccionados
- Extender fácilmente el conector para admitir APIs adicionales en el futuro

---

## ¿Cómo funciona?

### Autenticación y seguridad

Cada Data Connector se basa en un método de autenticación seguro para comunicarse con sistemas externos. Dependiendo del conector, esto puede gestionarse a través de:
- **Named Credentials / External Credentials**
- Un **token o clave API** almacenado de forma segura en la configuración de Mobee
- U otros mecanismos de autenticación seguros proporcionados por la plataforma o la API

### Cinco [objetos personalizados](2-data-connector-module-custom-objects.md#salesforce-objects-data-settings)

Definen la estructura, los filtros, los campos y las correspondencias entre Salesforce y las APIs externas.
- [Data Connector](2-data-connector-module-custom-objects.md#1-data-connector)
- [Data Table Definition](2-data-connector-module-custom-objects.md#2-data-table-definition)
- [Data Attribute Mapping](2-data-connector-module-custom-objects.md#3-data-attribute-mapping)
- [Data Search Mapping](2-data-connector-module-custom-objects.md#4-data-search-mapping)
- [Data Code Mapping](2-data-connector-module-custom-objects.md#5-data-code-mapping)

### Interfaz de usuario y modelos de automatización

Cada Data Connector puede funcionar de manera diferente según su propósito:

#### Conectores interactivos
Estos conectores incluyen un **Lightning Web Component (LWC)** que permite a los usuarios realizar búsquedas en tiempo real desde Salesforce y seleccionar los datos que desean incorporar a los registros. Se basan en configuraciones parametrizables — como la fuente de datos y el objeto Salesforce de destino — y pueden añadirse a páginas de registro, barras de utilidades o botones.

#### Conectores automatizados
Algunos conectores funcionan completamente en segundo plano sin interfaz de usuario. Una vez configurados, procesan datos automáticamente — por ejemplo, sincronizando donaciones e información de donantes desde el sistema externo hacia Salesforce — sin requerir acción manual por parte de los usuarios finales.

> 💡 Dependiendo del conector, la interacción puede ser **dirigida por el usuario (vía LWC)** o **completamente automatizada (sin interfaz)**.

---
