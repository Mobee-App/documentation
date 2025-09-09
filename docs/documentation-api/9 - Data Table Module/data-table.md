# Data Table Setup

![Data Table Showcase](./img/data-table.png)

## Overview

The 'Mobee Data Table' Lightning Web Component (LWC) provides a robust, configurable, and high-performance table for displaying Salesforce records. It supports dynamic columns, relationship fields, multi-currency, row selection, and seamless integration with Salesforce Flows.

## How Does It Work?
Mobee Data Table dynamically builds its columns and queries based on configuration and metadata. It supports:

- **Dynamic Columns:** Specify any Salesforce field, including relationship fields (e.g., `Account.Name`).
- **Multi-Currency:** Automatically includes currency fields when enabled.
- **Selection Modes:** Single, multiple, or view-only row selection.
- **Supports every Salesforce Data Type**  The table automatically formats currency, percent, email, and reference fields
- **Flow Integration:** Input/output variables for selected rows, configuration, and validation.

## Requirements

Make sure that Lightning Web Security (LWS) is activated in your organization. For more information, see the [Salesforce documentation on enabling LWS](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/lws-enable.html).

## Usage

### Setting Up the Flow

To use the Mobee Data Table in a Flow, follow these steps:

1. **Define the Collection Variable**
   - In Flow Builder, create a variable (e.g., `RecordCollection`) of type "Record" (matching your object).
   - Ensure "Allow multiple values (collection)" is checked.
   - Mark it as "Available for output" so it can be accessed by the component.

2. **Configure the Data Table Component**
   - Add the Mobee Data Table component to your Flow screen.
   - Set the following properties:
     - **Source Collection:** The Flow variable containing your records.
     - **Columns:** Comma-separated API names of fields to display (e.g., `Name,Account.Name,Amount`).
     - **Row Selection Mode:** Choose "Single", "Multiple", or "View Only".
     - **Use Label as Title:** Optionally display a custom label as the table title.
     - **Require Selection:** Optionally require the user to select at least one row before proceeding.

3. **Handle Output Variables**
   - Map the component’s output variables (e.g., `selectedRows`, `firstSelectedRow`) to Flow variables for use in subsequent Flow logic.

4. **Save and Activate the Flow**
   - Save your Flow and activate it.