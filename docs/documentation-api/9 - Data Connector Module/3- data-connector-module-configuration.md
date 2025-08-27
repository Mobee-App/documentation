# Configuration

## Overview

To set up a new API connection and enable the data connector:

1. **Assign Permission Sets** – Give users access.
2. **Create a Data Connector** – Define the API base URL.
3. **Create a Data Table Definition** – Link the connector to a Salesforce object.
4. **Create Data Attribute Mappings** – Define how response data maps to Salesforce fields.
5. **Create Data Search Mappings** – Define filters for searching external data.
6. **Add the Lightning Web Component** – Embed the UI where users need it.

In the next section, we’ll take a closer look at each of these configuration steps and how the different components work together to power the data connector.

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

#### Steps to Assign the Permission Set

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

## Filters & Search Inputs

### Preview

The filter bar shown at the top of the component is generated from **Data Search Mapping** records.

![Component Filters](img/ComponentPreview/ComponentFilters.png "Component Filters")

Each filter is tied to a Salesforce field and an API query parameter, giving users a dynamic and guided way to search.

### How to Configure Filters (Technical Guide 🛠️)

Each filter is defined in a **Data Search Mapping** record and requires two key values:

| Field | Description |
|-------|-------------|
| **SF Object Field** | The API name of the Salesforce field that captures user input |
| **API Query Filter** | The parameter name that the external API expects in the request URL |

---

#### 1. Setting the SF Object Field in the Data Search Mapping

- This is the internal API name of the Salesforce field you want the user to fill in.
- It must exist on the object associated with your Data Table Definition.
- You can find it in **Object Manager → [Your Object] → Fields & Relationships**.

📌 <u>*Example:*</u>

To allow users to search accounts using their `Account Name`, set the **SF Object Field** to `Name`:
 
![Salesforce Field API Name](img\SearchAndAttributeCreation\SFAPIPreview.png "Salesforce Field API Name")

---

#### 2. Setting the API Query Filter in the Data Search Mapping

- This value comes from the **external API’s documentation**.
- It tells you what query string parameters the API supports for filtering.
- These parameters are **not found in the response**, but rather in the **request** — usually documented under "search", "filter", or "GET parameters".

📌 <u>*Example:*</u>

If the API allows general search using a parameter `q`, and you want to allow users to search by Account Name, then set the **API Query Filter** to `q`

![API Query Filter](img\SearchAndAttributeCreation\APIPreview.png "API Query Filter")

> The final request will look something like:
> `https://external-api.com/search?q=ABC`

---

## Search Results Display

### Preview

The columns shown in the search results list are defined via **Data Attribute Mapping** records.

![Component Attributes](img/ComponentPreview/ComponentAttributes.png "Component Attributes")

*Note: Only the fields with **Display in Search Results** checked will appear here. When a user selects a result, the mapped fields are used to populate the Salesforce record.*

### How to Configure Result Attributes (Technical Guide 🛠️)

Each result attribute is defined in a **Data Attribute Mapping** record with key fields:

| Field | Description |
|-------|-------------|
| **SF Object Field** | The API name of the Salesforce field where the value should be stored |
| **API Field** | The name of the field in the API's response JSON |

---

#### 1. Setting the SF Object Field in the Data Attribute Mapping

- This is the internal API name of the Salesforce field you want the user to fill in.
- It must exist on the object associated with your Data Table Definition.
- You can find it in **Object Manager → [Your Object] → Fields & Relationships**.

📌 <u>*Example:*</u>

To map the `Account Number` field, set the **SF Object Field** to `AccountNumber`:
 
![Salesforce Field API Name](img\SearchAndAttributeCreation\SFAPIAccNumberPreview.png "Salesforce Field API Name")

---

#### 2. Setting the API Field in the Data Attribute Mapping

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

## Lightning Web Component: `Data Connector`

- Custom UI where users:
  - Enter search terms (using mapped filters)
  - View external data (based on mapped attributes)
  - Select and import records into Salesforce

> 💡 This component is configuration-driven — it uses the data and mappings defined in the **Data Connector**, **Data Table Definition**, **Data Attribute Mappings**, and **Data Search Mappings** to function.

---

### Adding the Component as a List View Button

The Data Connector can be launched directly from a list view button. This gives users quick access to the component without needing to navigate through other menus.  

There are multiple ways to achieve this, but in this guide we will illustrate two common approaches:  

1. **Using the delivered button ("New") on Accounts**  
2. **Creating a new button for another object**  

The delivered setup provides a working example on **Accounts**, which you can reuse as a "template." If you want to enable the Data Connector for other objects, you will need to create the corresponding Lightning Page, Lightning Tab, and custom button.  

---

#### 1. Using the Delivered Button on Accounts

We deliver a ready-to-use button called **New** on the **Account** object.  
This button is already configured to open the Lightning Page that contains the Data Connector.  

To add it to your list view:  

1. Go to **Setup** → **Object Manager** → **Account**.
![Account in Object Manager](img\ComponentConfiguration\1_AccountInObjectManager.png "Account in Object Manager")

2. Edit the **List View Button Layout**.
![Edit List View Button Layout](img\ComponentConfiguration\2_AccessListViewButtonLayoutEdit.png "Edit List View Button Layout")

3. In the **Available Buttons** list, locate **New** and move it to the **Selected Buttons** section.
![Add Existing Button](img\ComponentConfiguration\3_AddExistingButton.png "Add Existing Button")

The **New** button will now appear on the Account list view, launching the Account Creation page powered by the **Data Connector**.

---

#### 2. Creating a New Button for Another Object

If you want to use the Data Connector on a different object, you will need to create the required elements:  

1. **Create a Lightning Page**  

   - From **Setup**, go to **Lightning App Builder** and click on **New**
   ![New Lightning App](img\ComponentConfiguration\4_NewLighningApp.png "New Lightning App")

   - Create the lightning page of type **App Page**.
   ![Type App Page](img\ComponentConfiguration\5_LightningPageTypeAppPage.png "Type App Page")

   - Complete the setup as desired

   - Add the **Data Connector** component to the page, fill in the desired component parameters, save and activate it with default settings.
   ![Add Data Connector](img\ComponentConfiguration\6_InsertDataConnector.png "Add Data Connector")

2. **Check for / Create the Lightning Tab**  

   - From **Setup**, search for **Tabs**. 
   - Scroll down to **Lightning Page Tabs** and check if a tab exists for the Lightning Page you just created *(3a)*
   - *(Conditional)* If not, create a new tab and link it to the Lightning Page you just created *(3b)* 
   ![Check Lightning Tab](img\ComponentConfiguration\7_CheckIfTabCreated.png "Check Lightning Tab")

3. **Create a Weblink Button**

   - Go to **Object Manager** and open the object you want (e.g., **Contact**).
   ![Contact in Object Manager](img\ComponentConfiguration\8_ContactInObjectManager.png "Contact in Object Manager")

   - Select **Buttons, Links, and Actions** and click **New Button or Link**.
   ![New Button Link](img\ComponentConfiguration\9_NewButtonLink.png "New Button Link")

   - Choose **List Button** as the display type and in the **URL**, reference the Lightning Tab you created. *Example: /lightning/n/Mobee__TestingNewLightningPage*
   ![Create New Button Link](img\ComponentConfiguration\10_CreatingButtonLink.png "Create New Button Link")
 
   - Save the button.  

4. **Add the Button to the List View**  
   - Follow the same steps as **"1. Using the Delivered Button on Accounts"** above for your target object. (e.g., **Contact**)

Now, when users open the list view for that object, they will see your custom button. Clicking it will open the Data Connector in the Lightning Page you assigned.

👉 By following this approach, you can replicate the **Account** example for any other object that needs the Data Connector. The Account setup serves as a template, but you are free to extend it across your org.

---