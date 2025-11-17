# Introduction

This user guide will help you understand and use the Data Connector tool.

The **Data Connector** is a flexible and powerful tool built into your Salesforce environment to allow real-time connections with external APIs. It enables your users to **search external data**, **view results inside Salesforce**, and **use that data to create Salesforce records**

This connector was designed to be:
- 🔌 **Adaptable** – It can be configured to work with a wide range of external systems (public or private APIs)
- 🎯 **Personalized** – You can define exactly which data is displayed, how it’s mapped, and what filters are available
- 🚀 **User-Friendly** – All configuration is handled behind the scenes, while users work with a clean, guided interface

---

## What Does It Do?

In practical terms, the Data Connector allows you to:

- Connect to external APIs using secure, preconfigured settings
- Define what data should be displayed to users
- Let users search for external data using filters
- Automatically populate Salesforce fields with selected results
- Easily extend the connector to support additional APIs in the future

---

## How Does It Work?

### Authentication & Security

Each Data Connector relies on a secure authentication method to communicate with external systems. Depending on the connector, this may be managed through:
- **Named Credentials / External Credentials**
- A **token or API key** stored securely in Mobee Settings
- Or other secure authentication mechanisms provided by the platform or API

### Four [Custom Objects](2-data-connector-module-custom-objects.md#salesforce-objects-data-settings)

Define the structure, filters, fields, and mappings between Salesforce and external APIs.
- [Data Connector](2-data-connector-module-custom-objects.md#1-data-connector)
- [Data Table Definition](2-data-connector-module-custom-objects.md#2-data-table-definition)
- [Data Attribute Mapping](2-data-connector-module-custom-objects.md#3-data-attribute-mapping)
- [Data Search Mapping](2-data-connector-module-custom-objects.md#4-data-search-mapping)

### User Interface & Automation Models

Each Data Connector may operate differently depending on its purpose:

#### Interactive Connectors
These connectors include a **Lightning Web Component (LWC)** that allows users to perform real-time searches from Salesforce and select the data they want to bring into records. They rely on configurable settings — such as the data source and target Salesforce object — and can be added to record pages, utility bars, or buttons.

#### Automated Connectors
Some connectors run entirely in the background without a user interface. Once configured, they process data automatically — for example, syncing donations and donor information from the external system into Salesforce — requiring no manual action from end-users.

> 💡 Depending on the connector, interaction may be **user-driven (via LWC)** or **fully automated (without UI)**.

---