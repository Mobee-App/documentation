## 6. How the Client Fills the Flow

When you click **Generate Factur-X**, the module checks that the invoice has everything it needs. If something is missing, a short screen appears asking you to complete it. You provide each item only **once** — it is saved for next time.

### You may be asked for:

- **Invoice template** — the layout for the visual PDF. Choose the template for this customer. (Saved on the Bill To account.)
- **Payment account** — the bank account (IBAN/BIC) to show on the invoice. Select one from the list. (Saved on the invoice.)
- **Tax template** — the tax setup that applies. Select the correct one from the list. (Saved on the invoice.)

Once these are provided, the module continues automatically and produces the invoice. Next time you generate an invoice for the same customer, you won't be asked again.

### If you generate the same invoice more than once

- **No file yet** → a new file is created.
- **One file exists** → that file is updated with the new version.
- **Several files exist** → you are asked which one to update.

This keeps your invoice from collecting duplicate attachments.

---

## Validation Rules — what is checked

To be a valid electronic invoice, the data must meet the rules of the EN 16931 standard. The module checks this for you and will stop with a clear message if something isn't right, **before** producing an invalid document.

The main things that are checked:

- The invoice has **at least one line item**.
- The **invoice type** is a recognised type.
- The **VAT numbers** (seller and buyer) include the country code (e.g. `FR…`).
- The **registration numbers** (SIREN/SIRET) are the right length (9 or 14 digits).
- The **IBAN and BIC** have a valid format.
- The **payment method** is consistent with having bank details (for example, a bank transfer when an IBAN is present).
- Every **line item** has a tax category.
- The **totals** are present and consistent.

Some details — such as the country format and the currency code — are tidied up automatically, so you can enter the country as a name (e.g. "France") and it will be handled correctly.

If everything passes, the invoice is generated. If not, you'll see a message listing what to fix.

---