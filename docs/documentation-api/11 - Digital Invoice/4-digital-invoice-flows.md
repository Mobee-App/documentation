## 4. The Flows — what is collected and what you can edit

The process runs in two flows. The main **Screen Flow** is launched by the button; it calls a **Data Population** step that gathers all the invoice information. Understanding the data population helps you know what you can change to affect the result.

### 4.1 The main flow (the button)

1. **Loads the invoice** and its related records.
2. **Checks your setup** — confirms the document template, payment account, and tax template are present. If anything is missing, it asks you for it (see Section 5).
3. **Collects the invoice data** (the Data Population step below).
4. **Generates the document** and attaches it.
5. **Shows the result** — a success message, or a message explaining what to fix.

### 4.2 Data Population — the data that is collected

This step assembles everything into one structured set of invoice data. The tables below list exactly what is collected, **whether it is required for the invoice to be valid**, the **format** it must take, and **where it comes from**. If a required item is missing or in the wrong format, generation stops with a clear message before any document is produced.

#### Invoice header

| Information | Required? | Format / rule | Source |
|-------------|-----------|----------------|--------|
| Invoice number | **Yes** | Any text. | Invoice → `Mobee__InvoiceNumber__c` |
| Invoice date | **Yes** | A valid date. | Invoice → `Mobee__InvoiceDate__c` |
| Invoice type | **Yes** | A recognised type (e.g. *Invoice*, *Credit Note*). | Invoice → `Mobee__Type__c` |
| Currency | **Yes** | A valid currency (e.g. Euro / EUR). | Invoice → `CurrencyIsoCode` |
| Profile reference | **Yes** | Set automatically to the EN 16931 profile. | Set by the module |

#### Seller (your company — *Payable To*)

| Information | Required? | Format / rule | Source |
|-------------|-----------|----------------|--------|
| Name | **Yes** | Any text. | Account → `Name` |
| Address (street, city, postal code, country) | **Yes** | All four present; country can be a name (e.g. "France"). | Account → `Billing…` fields |
| VAT number | **Yes** | Must start with the country code (e.g. `FR40987654321`). | Account → `Mobee__VATNumber__c` |
| Registration number (SIREN/SIRET) | Recommended | 9 or 14 digits if provided. | Account → `AccountNumber` |

#### Buyer (your customer — *Bill To*)

| Information | Required? | Format / rule | Source |
|-------------|-----------|----------------|--------|
| Name | **Yes** | Any text. | Account → `Name` |
| Address (street, city, postal code, country) | **Yes** | All four present; country can be a name. | Account → `Billing…` fields |
| VAT number | **Yes** | Must start with the country code (e.g. `FR32123456789`). | Account → `Mobee__VATNumber__c` |
| Registration number (SIREN/SIRET) | Recommended | 9 or 14 digits if provided. | Account → `AccountNumber` |

#### Payment

| Information | Required? | Format / rule | Source |
|-------------|-----------|----------------|--------|
| Payment method | **Yes** | Must match how the invoice is paid. If an IBAN is given, this must be a transfer method. | Invoice → `Mobee__PaymentMeans__c` |
| Due date / payment terms | **Yes (one of them)** | A valid due date, or payment terms text. | Invoice → `Mobee__DueDate__c` |
| IBAN | Required for transfers | Valid IBAN format (e.g. `FR76…`, 27 characters for France). | Payment Account |
| BIC | Required for transfers | 8 or 11 characters. | Payment Account |

#### Totals

| Information | Required? | Format / rule | Source |
|-------------|-----------|----------------|--------|
| Amount before tax | **Yes** | A number; should equal the sum of the line amounts. | Invoice → `Mobee__Subtotal__c` |
| Total tax | **Yes** | A number; the sum of the VAT amounts. | Calculated from the lines |
| Total amount due | **Yes** | Amount before tax + total tax. | Invoice → `Mobee__TotalAmount__c` |

#### Line items (at least one is required)

For **each** line, the following are collected:

| Information | Required? | Format / rule | Source |
|-------------|-----------|----------------|--------|
| Description | **Yes** | Any text. | Line → `Name` |
| Quantity | **Yes** | A number. | Line → `Mobee__Quantity__c` |
| Unit price | **Yes** | A number. | Line → `Mobee__UnitPrice__c` |
| Line amount (before tax) | **Yes** | A number; should equal quantity × unit price. | Line → `Mobee__AmountBeforeTaxes__c` |
| Tax rate | **Yes** | A percentage. | Line → `Mobee__TaxRate__c` |
| Tax category | **Yes** | A VAT category (e.g. standard rate). | Line → `Mobee__TaxCategory__c` |

> **An invoice with no line items cannot be generated** — this is the most common reason generation stops.

#### Tax breakdown (calculated automatically)

You do **not** enter the VAT breakdown by hand. The module builds it from the line items by grouping them by tax rate and category, then totals the taxable amount and the tax for each group. This is what guarantees the header tax totals always match the lines — so keeping each line's **rate** and **category** correct is what keeps the tax summary correct.

### 4.3 What you can edit to change the result

Everything above comes from the records you maintain:

- **To change amounts, descriptions, or taxes** → edit the **invoice line items**.
- **To change seller or buyer details** → edit the relevant **account** (Payable To or Bill To).
- **To change bank details** → edit the **payment account**.
- **To change dates, type, or currency** → edit the **invoice**.

Because the VAT breakdown is calculated from the lines, keeping each line's rate and category correct is what keeps the tax totals correct.

---
