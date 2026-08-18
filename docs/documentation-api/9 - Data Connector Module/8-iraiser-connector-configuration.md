# iRaiser Connector Configuration

## Overview

> ⚠️ **Prerequisite:** Before configuring this connector, make sure the **General Configuration** is completed.  
> See [General Configuration](3-data-connector-module-configuration.md) for steps on assigning permission sets and creating a Data Connector.

1. [**Create the Data Connector**](#data-connector) – Set up the connector record with type "iRaiser Connector"
2. [**Store the iRaiser Token**](#store-the-iraiser-token) – Configure the security token in Settings
3. [**Create Data Table Definitions**](#data-table-definition) – Link iRaiser data to Salesforce objects
4. [**Configure Data Attribute Mappings**](#data-attribute-mappings) – Map iRaiser JSON fields to Salesforce fields
5. [**Create the Public Site for Webhook Reception**](#create-the-public-site-for-webhook-reception) – Enable webhook reception

In the next section, we'll take a closer look at each of these configuration steps.

---

## Data Connector

### Create the Data Connector Record

The Data Connector record identifies this as an iRaiser integration.

#### Required Fields

| Field | Meaning | Value to Set |
|-------|--------|--------------------------|
| **Name** | Unique identifier for this connector | Example: `iRaiser Production` or `iRaiser Sandbox` |
| **Connector Type** | Type of connector | Select `iRaiser Connector` from the picklist |

#### Example Configuration

| Field | Example Value |
|-------|---------------|
| Name | `iRaiser Production` |
| Connector Type | `iRaiser Connector` |

#### Steps

1. Go to **Data Connectors** tab
2. Click **New**
3. Enter a Name (e.g., "iRaiser Production")
4. Select `iRaiser Connector` as the Connector Type
5. Save the record

---

## Store the iRaiser Token

### Configure the Security Token

The iRaiser Connector uses a shared secret token to validate incoming webhook requests. This token must be configured in the Mobee Settings custom metadata.

#### Required Fields

| Field | Meaning | Value to Set |
|-------|--------|--------------------------|
| **iRaiser Token** | Shared secret key for webhook authentication | The token provided by iRaiser |

#### Steps

1. Go to **Setup** → **Custom Metadata Types**
2. Click **Manage Records** next to **Mobee Settings**
3. Edit the default **Settings** record (or create a new one)
4. Enter the iRaiser Token in the **iRaiser Token** field
5. Save the record

> 🔐 **Security Note:** This token is used to validate the `securetoken` header in incoming webhook requests. Keep it secure and never expose it in client-side code.

---

## Data Table Definition

### Overview

Data Table Definitions link iRaiser data to Salesforce objects. For the iRaiser Connector, each definition specifies which Salesforce object will receive data from the webhook payload.

The connector supports processing multiple objects in a single webhook call, with automatic handling of parent-child relationships.

### Required Fields

| Field | Meaning | Value to Set |
|-------|--------|--------------------------|
| **Data Connector** | Links this table definition to the connector | Select your iRaiser Connector |
| **Object Name** | The Salesforce object where records will be created/updated | Type the Object API Name. Example: `Account`, `Contact`, `Opportunity` |
| **Object Record Type** *(optional)* | Limits processing to specific record types | Developer Names separated by commas |
| **Parent Table Lookup Mapping** *(optional)* | Defines parent-child relationships for hierarchical processing | Format: `ParentObjectAPI->ChildLookupField` (one per line) |

> 💡 If your org does **not** use record types on the designated object, leave **Object Record Type** blank.  
> When filling **Object Record Type**, enter the **Developer Name**, not the label.  
> Example: `Business_Account, PersonAccount`

### Example Configuration

#### For a Contact Object (Child of Account)

| Field | Example Value |
|-------|---------------|
| Data Connector | *iRaiser Production* |
| Object Name | `Contact` |
| Object Record Type | (blank) |
| Parent Table Lookup Mapping | `Account->AccountId` |

#### For an Account Object (Root)

| Field | Example Value |
|-------|---------------|
| Data Connector | *iRaiser Production* |
| Object Name | `Account` |
| Object Record Type | `Business_Account` |
| Parent Table Lookup Mapping | (blank - this is a root object) |

#### For an Opportunity Object (Child of Account and Contact)

| Field | Example Value |
|-------|---------------|
| Data Connector | *iRaiser Production* |
| Object Name | `Opportunity` |
| Object Record Type | `Donation` |
| Parent Table Lookup Mapping | `Account->AccountId` |

### Steps

1. Go to **Data Table Definitions** tab
2. Click **New**
3. Select your iRaiser Connector in the **Data Connector** field
4. Enter the Salesforce **Object Name** (API name)
5. Optionally specify **Object Record Type** if you need to filter by record type
6. If this object has parent relationships, configure the **Parent Table Lookup Mapping**
7. Save the record

---

## Data Attribute Mappings

### Overview

Data Attribute Mappings define how fields from the iRaiser JSON payload map to Salesforce object fields. The iRaiser Connector uses **dot notation** to access nested fields in the JSON structure.

> 💡 Only fields with the appropriate mappings will be populated in Salesforce records. Each mapping links a specific JSON path to a Salesforce field.

### Key Fields

| Field | Meaning | Value to Set |
|-------|--------|-------------|
| **Data Table Definition** | Links this mapping to the corresponding data table definition | Select the related *Data Table Definition* record |
| **SF Object Field** | Salesforce field where the value should be stored | Developer Name of the field (Example: `FirstName`, `LastName`, `Email`) |
| **API Field** | Field path from the iRaiser JSON payload | JSON field path using dot notation (Example: `contact.firstname`, `contact.lastname`) |
| **Is Unique Identifier** | Marks this field as a unique identifier for record matching | Check for fields that uniquely identify records (e.g., iRaiser ID, Email) |

#### 1. Setting the SF Object Field in the Data Attribute Mapping

- This is the internal API name of the Salesforce field you want to populate.
- It must exist on the object associated with your Data Table Definition.
- You can find it in **Object Manager → [Your Object] → Fields & Relationships**.

📌 <u>*Example:*</u>

To map the Contact's first name, set the **SF Object Field** to `FirstName`.

#### 2. Setting the API Field in the Data Attribute Mapping

This is the exact field path as returned by the iRaiser API, using **dot notation** to access nested objects.

- Use dot notation to traverse the JSON structure
- Make sure the field exists in the webhook payload

📌 <u>*Example:*</u>

<details>
<summary>View iRaiser JSON payload example</summary>

```json
Example of webhook payload:

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

| SF Object Field | API Field | Is Unique Identifier |
|-----------|-------------------|---------------------|
| FirstName | `contact.firstname` | No |
| LastName | `contact.lastname` | No |
| Email | `contact.email` | Yes |
| Phone | `contact.phone` | No |
| iRaiser_Id__c | `contact.id` | Yes |

#### 3. Example of Data Attribute Mapping Records

For a Contact object receiving iRaiser data:

| Data Table Definition | SF Object Field | API Field | Is Unique Identifier |
|---|---|---|---|
| iRaiser Contact | FirstName | contact.firstname | (unchecked) |
| iRaiser Contact | LastName | contact.lastname | (unchecked) |
| iRaiser Contact | Email | contact.email | ✅ (checked) |
| iRaiser Contact | Phone | contact.phone | (unchecked) |
| iRaiser Contact | iRaiser_Id__c | contact.id | ✅ (checked) |

For an Account object:

| Data Table Definition | SF Object Field | API Field | Is Unique Identifier |
|---|---|---|---|
| iRaiser Account | Name | contact.account.name | (unchecked) |
| iRaiser Account | iRaiser_Account_Id__c | contact.account.id | ✅ (checked) |
| iRaiser Account | BillingStreet | contact.account.address.street | (unchecked) |
| iRaiser Account | BillingCity | contact.account.address.city | (unchecked) |
| iRaiser Account | BillingPostalCode | contact.account.address.postalcode | (unchecked) |

> 💡 **Best Practice:** Always map the iRaiser external ID (e.g., `contact.id`) to a custom field in Salesforce and mark it as a **Unique Identifier**. This ensures proper record matching across syncs and prevents duplicate records.

---

## Create the Public Site for Webhook Reception

The iRaiser Connector receives webhook calls from iRaiser, which requires a publicly accessible endpoint in Salesforce. This is achieved by creating and activating a Salesforce Site.

> ⚠️ Small differences may appear depending on your Salesforce edition — the principle remains the same.

### Steps

1. Go to **Setup > User Interface > Sites and Domains > Sites**
2. Click **New**
3. Fill in the following fields:

   | Field | Value |
   |---|---|
   | Site Label | `iRaiser Webhooks` |
   | Site Name | `iraiserwebhooks` |
   | Site Contact | *(System Administrator)* |
   | Default Record Owner | *(System Administrator)* |
   | Active | ✅ Checked |
   | Active Site Home Page | `InMaintenance` |

4. Click **Save**
5. Ensure the site is **Active**

---

## Parent-Child Relationships

### Overview

The iRaiser Connector automatically handles hierarchical data processing where parent records are created before their children. This is configured using the **Parent Table Lookup Mapping** field on the Data Table Definition.

### How It Works

When you define parent-child relationships, the connector:
1. Identifies all Data Table Definitions for your connector
2. Builds a dependency graph based on Parent Table Lookup Mappings
3. Automatically sorts the definitions so parents are processed first
4. Creates/updates parent records before their children
5. Uses the mapped lookup fields to establish relationships

> ⚠️ **Circular Dependency Detection:** If circular dependencies are detected (e.g., Object A depends on Object B, and Object B depends on Object A), the connector will throw an error and halt processing.

### Configuration Format

The **Parent Table Lookup Mapping** field uses the following format:

```
ParentObjectAPI->ChildLookupField
```

- **ParentObjectAPI**: The API name of the parent Salesforce object
- **ChildLookupField**: The API name of the lookup field on the child object that references the parent

Multiple parent relationships can be defined, one per line.

### Example: Three-Level Hierarchy

For a typical donation scenario with Account → Contact → Opportunity:

**Account DTD (Root):**
| Field | Value |
|---|---|
| Parent Table Lookup Mapping | (blank - no parent) |

**Contact DTD (Child of Account):**
| Field | Value |
|---|---|
| Parent Table Lookup Mapping | `Account->AccountId` |

**Opportunity DTD (Child of Account):**
| Field | Value |
|---|---|
| Parent Table Lookup Mapping | `Account->AccountId` |

This ensures that:
1. Account records are created/updated first
2. Then Contact records (linked to their Accounts)
3. Finally Opportunity records (linked to their Accounts)

---

## Testing Your Configuration

Before going live, test your iRaiser Connector configuration:

1. **Verify Data Connector** - Ensure it's created with type "iRaiser Connector"
2. **Verify Token** - Confirm the iRaiser Token is configured in Mobee Settings
3. **Verify Site** - Confirm the Salesforce Site is created and active
4. **Test with Sample Payload** - Use the iRaiser sandbox to send test webhook calls
5. **Validate Field Mappings** - Confirm all expected fields are populated correctly
6. **Test Parent-Child Relationships** - Verify hierarchical data is processed in the correct order

> 💡 Start with a small subset of data and gradually expand as you validate the integration.

---

## Troubleshooting

### Common Issues

#### Webhook Returns 403 Forbidden

**Symptoms:** HTTP 403 response with "Invalid token" message

**Causes:**
- Incorrect iRaiser Token in Settings
- Invalid securetoken calculation
- Missing or incorrect headers

**Solution:**
1. Verify the iRaiser Token in Mobee Settings
2. Ensure iRaiser is sending all three required headers: `securelogin`, `securetimestamp`, `securetoken`
3. Verify the token calculation: MD5(`securelogin` + `iRaiserToken` + `securetimestamp`).toLowerCase()
4. Check the timestamp format: must be ISO 8601 UTC format

#### Records Not Created/Updated

**Symptoms:** Webhook returns 202 Accepted but no records are created

**Causes:**
- Missing Data Table Definitions
- No Data Attribute Mappings configured
- Field-level security issues
- Missing required fields
- Site not active or misconfigured

**Solution:**
1. Verify Data Table Definitions exist for the target objects
2. Check that Data Attribute Mappings are configured for all required fields
3. Ensure the integration user has create/update permissions on the target objects
4. Verify the Salesforce Site is active

#### Duplicate Records

**Symptoms:** Multiple records created for the same iRaiser contact

**Causes:**
- No unique identifier fields configured
- Unique identifier field not mapped correctly
- Different unique identifier values between syncs

**Solution:**
1. Configure at least one **Unique Identifier** mapping per object
2. Ensure the mapped field contains a consistent, unique value from iRaiser
3. Consider using the iRaiser ID as an external ID field in Salesforce

#### Parent-Child Processing Order Issues

**Symptoms:** Child records created before parents, causing lookup errors

**Causes:**
- Missing or incorrect Parent Table Lookup Mapping
- Circular dependencies in Data Table Definitions

**Solution:**
1. Verify Parent Table Lookup Mapping is configured for all child objects
2. Review the dependency graph to ensure valid hierarchy

---

*Last updated: August 2026*
