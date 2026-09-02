# Digital Invoice Configuration

## 5. Configuration — Setting Up the Factur-X Button

This section is for **administrators**. It explains how to make the *Generate Factur-X* button available to users: creating the action from the flow and adding it to the **Approved Invoice Record Page**.

You will do this once per environment. Users do not need to do any of this.

---

### 5.1 What you are setting up

The *Generate Factur-X* button launches the Screen Flow that collects the invoice data and generates the document. To make it available, you:

1. Create an **action** on the Invoice object that runs the flow.
2. Add that action to the **Approved Invoice Record Page**.

Because the button is added to the *Approved Invoice Record Page* — which is only shown for approved invoices — the button automatically appears only on approved invoices. No extra visibility rule is needed.

---

### 5.2 Prerequisites

Before you begin, confirm:

- The Screen Flow **"Mobee Invoice FacturX Document Generation Button Screen Flow"** is **Active**.
- The flow has a record variable (commonly named `recordId`) marked **Available for input**, so the action can pass the current invoice into it.
- Your user has permission to edit Lightning record pages (Customize Application / Modify Metadata) and to manage the Invoice object's buttons and actions.

> If the flow's input variable is named something other than `recordId`, note its name — Salesforce maps the record automatically only when the variable is called `recordId`. If it differs, you will set it manually when configuring the action.

---

### 5.3 Step 1 — Create the action on the Invoice object

1. Go to **Setup → Object Manager → Invoice (`Mobee__Invoice__c`)**.
2. Select **Buttons, Links, and Actions**, then click **New Action**.
3. Configure the action:
   - **Action Type:** *Flow*
   - **Flow:** select *Mobee Invoice FacturX Document Generation Button Screen Flow*
   - **Label:** `Generate Factur-X` (this is what users see)
   - **Name:** `Generate_FacturX` (the API name)
4. Click **Save**.

If the flow's input variable is named `recordId`, the current invoice is passed in automatically. If it is named differently, open the action and map the invoice's Id to the correct input variable.

---

### 5.4 Step 2 — Add the action to the Approved Invoice Record Page

The button should be added to the **Approved Invoice Record Page** (the Lightning record page used for approved invoices). Adding it to the Highlights Panel places it alongside the standard buttons at the top of the record.

1. Go to **Setup → Object Manager → Invoice (`Mobee__Invoice__c`) → Lightning Record Pages**.
2. Open the **Approved Invoice Record Page**, then click **Edit** to open it in the Lightning App Builder.
   *(You can also open it directly from the page's setup view and choose **Edit**.)*
3. In the App Builder:
   - Select the **Highlights Panel** component at the top of the page.
   - In the right-hand properties panel, click **Add Action** (under *Actions* → *Customize Actions* if prompted).
   - From the list, add **Generate Factur-X**.
   - Reorder it if you want it more prominent.
4. Click **Save**.

> If you prefer the button inside the body of the page rather than the Highlights Panel, you can instead drop an **Actions** component onto the page and add **Generate Factur-X** to it. Either way, since this is the *Approved Invoice Record Page*, the button only appears for approved invoices.

---

### 5.5 Step 3 — Confirm the page is activated for approved invoices

The *Approved Invoice Record Page* should already be assigned so that it is the page shown for approved invoices (for example, by record type, app, or an assignment that corresponds to approved invoices). If it is already in use, your change applies as soon as you save.

To check the assignment:

1. In the App Builder for the page, click **Activation**.
2. Review where the page is assigned (Org Default, or specific Apps / Record Types / Profiles).
3. If it is already the active page for approved invoices, no change is needed — just **Save**.

---

### 5.6 Verifying the setup

1. Open an invoice that is **approved** (so it uses the *Approved Invoice Record Page*), with at least one line item → the **Generate Factur-X** button should appear.
2. Click it → the flow should run, ask for any missing setup, and generate the document.
3. Open a non-approved invoice → because it uses a different record page, the button should not be present.

If the button does not appear on an approved invoice, re-check: the flow is Active, the action was added to the *Approved Invoice Record Page* (not a different page), the component you added it to is visible, and the page was saved.

---

### 5.7 Summary

| Step | Where | What you do |
|------|-------|-------------|
| 1 | Object Manager → Invoice → Buttons, Links, and Actions | Create a **Flow action** pointing at the Screen Flow. |
| 2 | Lightning App Builder → **Approved Invoice Record Page** | Add the action to the **Highlights Panel** (or an Actions component). |
| 3 | App Builder → Activation | Confirm the page is the active one for approved invoices. |
| 4 | A test invoice | Verify the button appears and works on an approved invoice. |

Because the button lives on the *Approved Invoice Record Page*, it is naturally limited to approved invoices — no separate visibility filter is required.