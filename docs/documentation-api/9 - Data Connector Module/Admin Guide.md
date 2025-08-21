## Introduction

This user guide will help you understand and use the Data Connector tool.

The **Data Connector** is a flexible and powerful tool built into your Salesforce environment to allow real-time connections with external APIs. It enables your users to **search external data**, **view results inside Salesforce**, and **use that data to create Salesforce records** — all from a single, user-friendly interface.

This connector was designed to be:
- 🔌 **Adaptable** – It can be configured to work with a wide range of external systems (public or private APIs)
- 🎯 **Personalized** – You can define exactly which data is displayed, how it’s mapped, and what filters are available
- 🚀 **User-Friendly** – All configuration is handled behind the scenes, while users work with a clean, guided interface

***Demo:***
![Objects Diagram](img/Demo/DataConnectorDemo.gif "Objects Diagram")

---

### What Does It Do?

In practical terms, the Data Connector allows you to:

- Connect to external APIs using secure, preconfigured settings
- Define what data should be displayed to users
- Let users search for external data using filters
- Automatically populate Salesforce fields with selected results
- Easily extend the connector to support additional APIs in the future

---

### How Does It Work?

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

### Configuration Flow Overview

To set up a new API connection and enable the data connector:

1. **Create a Named Credential** – Set up the API authentication.
2. **Create a Data Connector** – Define the API base URL.
3. **Create a Data Table Definition** – Link the connector to a Salesforce object.
4. **Create Data Attribute Mappings** – Define how response data maps to Salesforce fields.
5. **Create Data Search Mappings** – Define filters for searching external data.
6. **Assign Permission Sets** – Give users access.
7. **Add the Lightning Web Component** – Embed the UI where users need it.

In the next section, we’ll take a closer look at each of these configuration steps and how the different components work together to power the data connector.

---

## Salesforce Objects (Data Settings)

To configure and personalize your Data Connector, we use four objects. These allow you to define how your connector behaves, which data it pulls, and how it maps to your Salesforce records.

<br/>
<center>

![Objects Diagram](img/Objects/ObjectsDiagram.png "Objects Diagram")

</center>

---

### 1. Data Connector

This record represents an external API you want to connect to.

![Data Connector Preview](img/Objects/DataConnector_Preview.png "Data Connector Preview")

| **Field** | **Type** | **Description** |
| --------- | -------- | --------------- |
| **Connector Name** | Text | A friendly name for the Data Connector |
| **Connector Type** | Picklist | Specifies the type of connector from the available list (e.g., "Recherche Entreprise API")
| **Connector URL** | Text | The base URL for the API |

📌 Each Data Connector can contain one or more “Data Table Definitions”.

---

### 2. Data Table Definition

This record links the connector to a specific Salesforce object (like Accounts, Contacts, etc.) and defines how to display and interact with the data.

![Data Table Definition Preview](img/Objects/DataTableDefinition_Preview.png "Data Table Definition Preview")

| **Field** | **Type** | **Description** |
| --------- | -------- | --------------- |
| **Data Connector** | Lookup | The parent connector this definition belongs to |
| **Data Table Definition Name** | Text | A personalized name for this configuration |
| **Object Name** | Text | The Salesforce object this table targets (e.g., Account, Contact) |

📌 Each Data Table Definition can include multiple attribute and filter mappings.

---

### 3. Data Attribute Mapping

These records map external API fields to Salesforce fields, define what is shown in the search results, and allow values to pre-fill when creating new Salesforce records.

![Data Attribute Mapping Preview](img/Objects/DataAttributeMapping_Preview.png "Data Attribute Mapping Preview")

| **Field** | **Type** | **Description** |
| --------- | -------- | --------------- |
| **Data Table Definition** | Lookup | The related table this mapping belongs to |
| **SF Object Field** | Text | The corresponding field in Salesforce |
| **API Field** | Text | The field name coming from the external system |
| **Display in Search Results** | Checkbox | When checked, this field appears in the results list in the interface. |

📌 Use this to control the output that users see and which values are passed to Salesforce.

---

### 4. Data Search Mapping

These records define the parameters users can apply to filter data in both Salesforce and the API when initiating a search. Each parameter corresponds to a Salesforce field and links to a specific API query parameter.

![Data Search Mapping Preview](img/Objects/DataSearchMapping_Preview.png "Data Search Mapping Preview")

| **Field** | **Type** | **Description** |
| --------- | -------- | --------------- |
| **Data Table Definition** | Lookup | The related table this search parameter belongs to |
| **SF Object Field** | Text | The Salesforce field shown in the filter bar (e.g., Billing Postal Code) |
| **API Query Filter** | Text | The filter parameter used in the external API (e.g., `code_postal`, `q`, etc.) |
| **Priority** | Number | If multiple filters share the same API parameter, the connector will try them in order |

📌 Use this to define what filtering options appear at the top of the search screen.

---

## Access & Permissions

To ensure the module works correctly and securely, users must be granted access to key components:

### Permission Set: `Mobee Data Connector`

Assign this permission set to all users who will use the Data Connector. It includes:

- Access to Apex classes used by the connector
- Access to the Lightning Web Component (LWC)
- Access to the external credential used by the named credentials that rely on it
- Object and field permissions (read/create on the connector objects)

> ❗ Without this permission set, users will encounter authorization errors when attempting to use the connector.

#### Steps to Assign the Permission Set:

1. **Go to Setup → Users**  
   ![Setup Users](img/PermissionSetAssignment/1-Setup_Users.png "Setup Users")
<br/>

2. **Go to the desired User**  
   ![Go to User](img/PermissionSetAssignment/2-User_GoTo.png "Go to User")
<br/>

3. **In the user detail page, scroll down to Permission Set Assignments → Click "Edit Assignments"**  
   ![Edit Permission Set Assignments](img/PermissionSetAssignment/3-PermissionSet_EditAssignments.png "Edit Permission Set Assignments")
<br/>

4. **Select `Mobee Data Connector` from the list on the left → Click "Add" → Save**  
   ![Add Mobee Data Connector](img/PermissionSetAssignment/4-PermissionSet_AddMobeeDataConnector.png "Add Mobee Data Connector")
<br/>

5. **Verify that the permission set is now listed under the user's assignments**  
   ![Permission Set Assigned](img/PermissionSetAssignment/5-PermissionSet_Result.png "Permission Set Assigned")
<br/>

---

## Lightning Web Component: `Data Connector`

- Custom UI where users:
  - Enter search terms (using mapped filters)
  - View external data (based on mapped attributes)
  - Select and import records into Salesforce

> 💡 This component is configuration-driven — it uses the data and mappings defined in the **Data Connector**, **Data Table Definition**, **Data Attribute Mappings**, and **Data Search Mappings** to function.

---

### Filters & Search Inputs

#### Preview

The filter bar shown at the top of the component is generated from **Data Search Mapping** records.

![Component Filters](img/ComponentPreview/ComponentFilters.png "Component Filters")

Each filter is tied to a Salesforce field and an API query parameter, giving users a dynamic and guided way to search.

#### How to Configure Filters (Technical Guide 🛠️)

Each filter is defined in a **Data Search Mapping** record and requires two key values:

| Field | Description |
|-------|-------------|
| **SF Object Field** | The API name of the Salesforce field that captures user input |
| **API Query Filter** | The parameter name that the external API expects in the request URL |

---

##### 1. Setting the SF Object Field in the Data Search Mapping

- This is the internal API name of the Salesforce field you want the user to fill in.
- It must exist on the object associated with your Data Table Definition.
- You can find it in **Object Manager → [Your Object] → Fields & Relationships**.

📌 <u>*Example:*</u>

To allow users to search accounts using their `Account Name`, set the **SF Object Field** to `Name`:
 
![Salesforce Field API Name](img\SearchAndAttributeCreation\SFAPIPreview.png "Salesforce Field API Name")

---

##### 2. Setting the API Query Filter in the Data Search Mapping

- This value comes from the **external API’s documentation**.
- It tells you what query string parameters the API supports for filtering.
- These parameters are **not found in the response**, but rather in the **request** — usually documented under "search", "filter", or "GET parameters".

📌 <u>*Example:*</u>

If the API allows general search using a parameter `q`, and you want to allow users to search by Account Name, then set the **API Query Filter** to `q`

![API Query Filter](img\SearchAndAttributeCreation\APIPreview.png "API Query Filter")

> The final request will look something like:
> `https://external-api.com/search?q=ABC`

---

### Search Results Display

#### Preview

The columns shown in the search results list are defined via **Data Attribute Mapping** records.

![Component Attributes](img/ComponentPreview/ComponentAttributes.png "Component Attributes")

*Note: Only the fields with **Display in Search Results** checked will appear here. When a user selects a result, the mapped fields are used to populate the Salesforce record.*

#### How to Configure Result Attributes (Technical Guide 🛠️)

Each result attribute is defined in a **Data Attribute Mapping** record with key fields:

| Field | Description |
|-------|-------------|
| **SF Object Field** | The API name of the Salesforce field where the value should be stored |
| **API Field** | The name of the field in the API's response JSON |

---

##### 1. Setting the SF Object Field in the Data Attribute Mapping

- This is the internal API name of the Salesforce field you want the user to fill in.
- It must exist on the object associated with your Data Table Definition.
- You can find it in **Object Manager → [Your Object] → Fields & Relationships**.

📌 <u>*Example:*</u>

To map the `Account Number` field, set the **SF Object Field** to `AccountNumber`:
 
![Salesforce Field API Name](img\SearchAndAttributeCreation\SFAPIAccNumberPreview.png "Salesforce Field API Name")

---

##### 2. Setting the API Field in the Data Attribute Mapping

This is the exact field name (or path) as returned by the external API.

- Use **dot notation** to access nested objects.
- Make sure the field exists in the `results` array object.

📌 <u>*Example:*</u>

```json
Example of API response:

{
  "results": [
    {
      "siren": "123456789",
      "nom_raison_sociale": "Entreprise ABC",
      "siege": {
        "code_postal": "75001",
        "activite_principale": "62.01Z"
      }
    }
  ]
}
```

| SF Object Field | API Field |
|-----------|-------------------|
| AccountNumber | `siren` |
| Name | `nom_raison_sociale` |
| BillingPostalCode | `siege.code_postal` |
| MainActivityCode__c | `siege.activite_principale` |

---

## Troubleshooting

Here are common issues and how to resolve them:

| Problem | Likely Cause | Solution |
|--------|---------------|----------|
| “Authorization required” error | Permission set not assigned | Assign `Mobee Data Connector` permission set |
| No results returned | API filters are incorrect or API is down | Check `API Query Filter` values, test URL |
| Mapped fields not populating | Incorrect `API Field` or SF field mismatch | Verify field paths and names |

---