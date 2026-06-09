## 2. Architecture

The module works across two parts. You only ever interact with Salesforce; the generation service runs in the background.

```
   SALESFORCE                                  GENERATION SERVICE
   ──────────                                  ──────────────────
   [Generate Factur-X button]
            │
            ▼
   Screen Flow
   (checks setup, asks for
    anything missing)
            │
            ▼
   Data Population
   (collects invoice + lines
    into one set of data)
            │
            │   sends the template + the invoice data
            ├───────────────────────────────────────►  Builds the visual PDF
            │                                           Builds the structured data
            │                                           Checks it is valid
            │                                           Combines them into one file
            │   returns the finished Factur-X PDF
            ◄───────────────────────────────────────┘
            │
            ▼
   PDF attached to the invoice
```

In short: Salesforce gathers the data and the service produces the final document. The validation and document assembly happen automatically — if anything is wrong with the data, you are told before a document is produced.

---