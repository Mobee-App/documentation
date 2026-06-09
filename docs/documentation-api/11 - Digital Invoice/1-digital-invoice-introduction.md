# Factur-X Document Generation — Documentation

**Package:** Mobee (`Mobee__` namespace)
**Scope:** Generation of a Factur-X invoice (a PDF that contains both the visual invoice and its structured data) from a Salesforce Invoice record.
**Standard:** EN 16931 (European e-invoicing norm) · Factur-X 1.08

---

## 1. Overview

Factur-X is the French and European standard for **electronic invoices**. It produces a single PDF file that is:

- **Readable by people** — it looks like a normal invoice PDF, and
- **Readable by software** — the invoice details (amounts, parties, taxes, lines) are also stored inside the file in a structured form that accounting and government platforms can read automatically.

This module turns a Mobee Invoice (`Mobee__Invoice__c`) into that file with a single button. The visual PDF and the structured data are created together — you don't manage them separately.

**The result:** a valid Factur-X PDF, attached to your invoice, ready to download or send to your customer or to an e-invoicing platform.

---

