# Digital Invoice Data Model

## 3. Salesforce Data Model

The module reads information from several records. This section lists the objects and fields used, so you know **where to enter and check** the data that ends up on your Factur-X invoice.

### 3.1 Objects involved

| Object | Role |
|--------|------|
| `Mobee__Invoice__c` | The invoice being converted to Factur-X. |
| `Mobee__InvoiceLineItem__c` | The invoice lines (linked to the invoice). |
| `Account` — **Payable To** | Your company (the **seller**). |
| `Account` — **Bill To** | Your customer (the **buyer**). |
| `Mobee__PaymentAccount__c` | Your bank details (IBAN, BIC). |
| `Mobee__TaxTemplate__c` | The tax configuration applied to the invoice. |
| `Mobee__DocumentTemplate__c` | The layout used for the visual PDF. |

### 3.2 Fields used on the Invoice (`Mobee__Invoice__c`)

| Field | What it is used for |
|-------|---------------------|
| `Mobee__InvoiceNumber__c` | The invoice number. |
| `Mobee__InvoiceDate__c` | The issue date. |
| `Mobee__DueDate__c` | When payment is due. |
| `Mobee__Type__c` | The invoice type (e.g. *Invoice* or *Credit Note*). |
| `CurrencyIsoCode` | The invoice currency. |
| `Mobee__PaymentMeans__c` | How the invoice is to be paid (e.g. bank transfer). |
| `Mobee__Subtotal__c` | The amount before tax. |
| `Mobee__TaxAmount__c` | The total tax. |
| `Mobee__TotalAmount__c` | The total amount due. |
| `Mobee__PayableTo__c` | Your company (seller). |
| `Mobee__BillToAccount__c` | Your customer (buyer). |
| `Mobee__PaymentAccount__c` | The bank account providing IBAN/BIC. |
| `Mobee__TaxTemplate__c` | The tax setup applied. |

### 3.3 Fields used on the Line Item (`Mobee__InvoiceLineItem__c`)

| Field | What it is used for |
|-------|---------------------|
| `Name` | The line description. |
| `Mobee__Quantity__c` | How many units. |
| `Mobee__UnitPrice__c` | Price per unit. |
| `Mobee__AmountBeforeTaxes__c` | The line total before tax. |
| `Mobee__TaxRate__c` | The VAT rate for the line. |
| `Mobee__TaxCategory__c` | The VAT category (e.g. standard rate). |

### 3.4 Account fields used (for both seller and buyer)

| Field | What it is used for |
|-------|---------------------|
| `Name` | The company name on the invoice. |
| `BillingStreet` / `BillingCity` / `BillingPostalCode` / `BillingCountry` | The full address. |
| `AccountNumber` | The company registration number (SIREN / SIRET). |
| `Mobee__VATNumber__c` | The VAT identifier, **including the country code** (e.g. `FR…`). |

> **Tip:** the most reliable invoices come from accounts that have a complete address, a correctly formatted VAT number, and a registration number.

---