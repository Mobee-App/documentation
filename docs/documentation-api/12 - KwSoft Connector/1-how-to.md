
# KwSoft Connector for Salesforce

The KwSoft Connector lets your teams generate documents from Salesforce records using ready-made Flows.

This guide is written for administrators and functional users. You do not need coding knowledge to understand the process.

## What this module does

With this module, users can:

1. Open a Flow from a record (for example, a Case).
2. Select a KwSoft template.
3. Generate a document.
4. Save the output back into Salesforce.

Two document modes are supported:

- Automatic document: generated directly as a PDF and attached to the record.
- Interactive document: opened in KwSoft for editing first, then exported later.

## What is included in the package

The package provides template Flows to help you start quickly:

1. Mobee - KwSoft Document Generation
2. Mobee - Export KwSoft Document

You can keep most of these, and adapt them to your own business process easily.

## Recommended reading order

To keep setup simple, follow the pages in this order:

1. [KwSoft Connector Setup](2-kwsoft-connector-setup.md).
2. [Document Generation Flow](3-kwsoft-document-generation-flow.md).
3. [Interactive Documents and Final Export](4-kwsoft-interactive-documents.md).
4. [Admin Checklist and Troubleshooting](5-kwsoft-admin-checklist-and-troubleshooting.md).

## Before you start

Make sure:

1. The package is installed.
2. Administrators can edit Flows.
3. Users have access to the object where documents are generated (for example, Case).
4. At least one KwSoft template is available.

## Need a quick win

If you want a fast rollout, start with automatic documents only. You can add interactive document management in a second phase.