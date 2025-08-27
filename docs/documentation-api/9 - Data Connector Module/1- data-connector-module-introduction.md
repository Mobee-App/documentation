# Introduction

This user guide will help you understand and use the Data Connector tool.

The **Data Connector** is a flexible and powerful tool built into your Salesforce environment to allow real-time connections with external APIs. It enables your users to **search external data**, **view results inside Salesforce**, and **use that data to create Salesforce records** — all from a single, user-friendly interface.

This connector was designed to be:
- 🔌 **Adaptable** – It can be configured to work with a wide range of external systems (public or private APIs)
- 🎯 **Personalized** – You can define exactly which data is displayed, how it’s mapped, and what filters are available
- 🚀 **User-Friendly** – All configuration is handled behind the scenes, while users work with a clean, guided interface

***Demo:***
![Objects Diagram](img/Demo/DataConnectorDemo.gif "Objects Diagram")

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

The module is powered by:

- **Named and External Credentials**: These credentials securely store the authentication details needed to connect to the external API.  
  > ℹ️ *This configuration is handled entirely within the package and is **not** something the client needs to create or maintain. It ensures the connection between Salesforce and the API is secure and managed by the implementer.*

- **4 custom objects**: Define the structure, filters, fields, and mappings between Salesforce and external APIs.
  - Data Connector
  - Data Table Definition
  - Data Attribute Mapping
  - Data Search Mapping

- A **Lightning Web Component (LWC)**: At the core of the connector is a reusable Lightning Web Component. It uses configuration settings — such as the Data Connector Type (which defines the API to connect to) and the Salesforce Object Name (which specifies where the data should be used) — to establish the connection, display search results, and populate Salesforce records with selected data.
  > 💡 Depending on your setup, it can be linked to tabs, buttons, or embedded in record pages.

---