# iRaiser Connector

## Introduction

The **iRaiser Connector** allows Salesforce users to receive real-time donation and supporter data from iRaiser directly into Salesforce through secure webhook integration. Unlike other Data Connectors that use a search-based approach where users actively retrieve data, the iRaiser Connector operates on a **push-based model** where iRaiser automatically sends data to Salesforce whenever changes occur.

🌐 iRaiser Documentation: https://www.iraiser.eu/

> ✅ Typical use case: Automatically create or update **Contact**, **Account**, **Opportunity** or custom donor records in Salesforce when donations or supporter information are created or modified in iRaiser.

---

## How Does It Work?

### Webhook Integration

The iRaiser Connector receives data from iRaiser via HTTP POST webhook calls. When an event occurs in iRaiser (such as a new donation, contact update, or recurring payment), iRaiser sends the data to a designated endpoint in Salesforce.

The connector:
1. Validates the incoming request using token-based authentication
2. Processes the JSON payload from iRaiser
3. Matches or creates records in the appropriate Salesforce objects
4. Handles parent-child relationships automatically
5. Logs all activities for monitoring and troubleshooting

### Authentication

The connector uses **token-based authentication** to secure webhook communications. A shared secret token configured in Salesforce is used to validate each incoming request from iRaiser.

Each request includes three security headers that are validated:
- `securelogin` — iRaiser login/username
- `securetimestamp` — Current UTC timestamp
- `securetoken` — MD5 hash generated from the token and request details

> ℹ️ Authentication is handled automatically by the connector. No client-side configuration is required.

### Data Flow

The iRaiser Connector processes data through these key custom objects:

- **[Data Connector](3-data-connector-module-configuration.md#create-a-data-connector)** – Identifies this as an iRaiser integration by defining the connector type.
- **[Data Table Definition](8-iraiser-connector-configuration.md#data-table-definition)** – Links the connector to Salesforce objects (Example: Contact, Account, Opportunity) and defines parent-child relationships.
- **[Data Attribute Mapping](8-iraiser-connector-configuration.md#data-attribute-mappings)** – Maps fields from the iRaiser JSON payload to Salesforce fields, defining how data is imported into Salesforce records.

### Asynchronous Processing

To ensure scalability and reliability, the connector uses Salesforce **Platform Events** for asynchronous processing. This means:

- Webhook requests are accepted immediately (HTTP 202 response)
- Actual record processing happens in the background
- High volumes of data can be handled without impacting user experience
- Failed operations are automatically retried

---
