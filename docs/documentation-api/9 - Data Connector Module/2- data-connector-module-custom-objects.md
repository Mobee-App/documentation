# Salesforce Objects (Data Settings)

To configure and personalize your Data Connector, we use four objects. These allow you to define how your connector behaves, which data it pulls, and how it maps to your Salesforce records.

<br/>
<center>

![Objects Diagram](img/Objects/ObjectsDiagram.png "Objects Diagram")

</center>

---

## 1. Data Connector

This record represents an external API you want to connect to.

![Data Connector Preview](img/Objects/DataConnector_Preview.png "Data Connector Preview")

| **Field** | **Type** | **Description** |
| --------- | -------- | --------------- |
| **Connector Name** | Text | A friendly name for the Data Connector |
| **Connector Type** | Picklist | Specifies the type of connector from the available list (e.g., "Recherche Entreprise API") |

📌 Each Data Connector can contain one or more “Data Table Definitions”.

---

## 2. Data Table Definition

This record links the connector to a specific Salesforce object (like Accounts, Contacts, etc.) and defines how to display and interact with the data.

![Data Table Definition Preview](img/Objects/DataTableDefinition_Preview.png "Data Table Definition Preview")

| **Field** | **Type** | **Description** |
| --------- | -------- | --------------- |
| **Data Connector** | Lookup | The parent connector this definition belongs to |
| **Data Table Definition Name** | Text | A personalized name for this configuration |
| **Object Name** | Text | The Salesforce object this table targets (e.g., Account, Contact) |

📌 Each Data Table Definition can include multiple attribute and search mappings.

---

## 3. Data Attribute Mapping

These records map external API fields to Salesforce fields, define what is shown in the search results, and allow values to pre-fill when creating new Salesforce records.

![Data Attribute Mapping Preview](img/Objects/DataAttributeMapping_Preview.png "Data Attribute Mapping Preview")

| **Field** | **Type** | **Description** |
| --------- | -------- | --------------- |
| **Data Table Definition** | Lookup | The related table this mapping belongs to |
| **SF Object Field** | Text | The corresponding field in Salesforce |
| **API Field** | Text | The field name coming from the external system |
| **Display in Search Results** | Checkbox | When checked, this field appears in the results list in the interface. |
| **Is Title** | Checkbox | When checked, this field is used as the main title in the search results display. |

📌 Use this to control the output that users see and which values are passed to Salesforce.

---

## 4. Data Search Mapping

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