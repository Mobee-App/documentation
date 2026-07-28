# Interactive Documents and Final Export

## Flow template: Mobee - Export KwSoft Document

Use this Flow when a document was created in interactive mode and must be finalized as a PDF.

## Why this Flow exists

Interactive documents are draft versions. They are editable and not yet the final file for archive or sharing.

This second Flow retrieves the edited document from KwSoft and attaches the final PDF to Salesforce.

## Required information

The export action needs:

1. **Document Name** - Source: your custom log object

2. **Record Id** - Source: the related record lookup in the log object

In practice, users should not type these values manually. The Flow should read them from the selected log record.

## Recommended user process

1. User opens a record and sees related draft documents
2. User opens the selected draft in KwSoft and completes edits
3. User runs the export Flow from Salesforce
4. Final PDF is attached to the related Salesforce record
5. Log entry status is updated from Draft to Finalized

![KwSoft Generated Documents Related List](img/kwsoft-documents-related-list.png)

## Redirection behavior

After export, you can redirect users to:

1. The generated file
2. The original business record (recommended for most teams)

Choose the option that matches your support process.

## Governance recommendation

To keep records clean:

1. Keep one log entry per interactive document
2. Track status clearly (Draft, Finalized)
3. Hide outdated drafts from end users when finalized
4. Add a simple report for administrators to monitor draft backlog
