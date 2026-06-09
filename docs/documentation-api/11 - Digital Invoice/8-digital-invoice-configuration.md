## 8. Configuration — Setting Up the Factur-X Button

This section is for **administrators**. It explains how to make the *Generate Factur-X* button available to users: creating the action from the flow, adding it to the invoice Lightning page, and using dynamic visibility so the button only appears on **approved** invoices.

You will do this once per environment. Users do not need to do any of this.

---

### 8.1 What you are setting up

The *Generate Factur-X* button launches the Screen Flow that collects the invoice data and generates the document. To make it available, you:

1. Create an **action** on the Invoice object that runs the flow.
2. Add that action to the Invoice **Lightning record page**.
3. Apply **dynamic visibility** so the button only shows when the invoice is approved.

---

### 8.2 Prerequisites

Before you begin, confirm:

- The Screen Flow **"Mobee Invoice FacturX Document Generation Button Screen Flow"** is **Active**.
- The flow has a record variable (commonly named `recordId`) marked **Available for input**, so the action can pass the current invoice into it.
- Your user has permission to edit Lightning record pages (Customize Application / Modify Metadata) and to manage the Invoice object's buttons and actions.

> If the flow's input variable is named something other than `recordId`, note its name — Salesforce maps the record automatically only when the variable is called `recordId`. If it differs, you will set it manually when configuring the action.

---

### 8.3 Step 1 — Create the action on the Invoice object

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

### 8.4 Step 2 — Add the action to the Lightning record page

The recommended approach is to add the button to the **Highlights Panel** (the buttons at the top of the record) so it sits alongside Edit, Delete, etc.

1. Open an Invoice record.
2. Click the **gear icon → Edit Page** (this opens the Lightning App Builder for the Invoice record page).
3. In the App Builder:
   - Select the **Highlights Panel** component at the top of the page.
   - In the right-hand properties panel, click **Add Action** (under *Actions* → *Upgrade*/*Customize Actions* if prompted).
   - From the list, add **Generate Factur-X**.
   - Reorder it if you want it more prominent.
4. Click **Save**.

> If you prefer the button in a button bar inside the page rather than the highlights panel, you can instead add a **Quick Action** to the page layout via **Setup → Object Manager → Invoice → Page Layouts**, and drag the *Generate Factur-X* action into the *Salesforce Mobile and Lightning Experience Actions* section. The Highlights Panel approach is generally cleaner in Lightning.

---

### 8.5 Step 3 — Show the button only on approved invoices (dynamic visibility)

You usually only want users to generate a Factur-X document once the invoice is **approved**. Lightning App Builder lets you control when a component (and its actions) appears using **component visibility filters**. Because action visibility is controlled at the component level, the simplest pattern is:

**Option A — a dedicated button area with a visibility filter (recommended)**

1. In **Edit Page**, drag an **Actions** component (or a second region) onto the page where you want the approved-only buttons.
2. Add the **Generate Factur-X** action to it.
3. With that component selected, scroll to **Set Component Visibility** in the right-hand panel.
4. Click **Add Filter** and set the condition based on your approval field, for example:
   - **Field:** `Record → Status` (`Mobee__Status__c`) — or whichever field marks approval
   - **Operator:** *Equal*
   - **Value:** `Approved`
5. Click **Done**, then **Save**.

Now the button only appears when the invoice's status is *Approved*. On non-approved invoices, the component (and the button) is hidden.

**Option B — keep the button always visible, but block early in the flow**

If you would rather show the button always and prevent use at the flow level, leave the action on the Highlights Panel without a visibility filter, and add a Decision at the start of the flow that checks the approval status and shows a message ("This invoice is not yet approved") if it isn't. This keeps the button visible but stops generation. Option A is cleaner for users; Option B centralises the rule in the flow.

> **Tip:** confirm the exact field and value that represent "approved" in your org (it may be a `Status` picklist value, an `Approved__c` checkbox, or an approval-process state). Use that field in the visibility filter so the button matches your real approval definition.

---

### 8.6 Step 4 — Activate and assign the page

If you edited the org default page, it applies immediately on Save. If you created a new page or want it for specific apps/profiles:

1. In the App Builder, click **Activation**.
2. Assign the page as **Org Default**, or to specific **Apps, Record Types, and Profiles** as needed.
3. Click **Save**.

---

### 8.7 Verifying the setup

1. Open an invoice that is **not** approved → the button should be **hidden** (Option A) or show a blocking message when clicked (Option B).
2. Open an invoice that **is** approved, with at least one line item → the **Generate Factur-X** button should appear.
3. Click it → the flow should run, ask for any missing setup, and generate the document.

If the button does not appear on an approved invoice, re-check: the flow is Active, the action was added to the visible component, the visibility filter matches your real approval field/value, and the page was saved/activated for the right profile.

---

### 8.8 Summary

| Step | Where | What you do |
|------|-------|-------------|
| 1 | Object Manager → Invoice → Buttons, Links, and Actions | Create a **Flow action** pointing at the Screen Flow. |
| 2 | Lightning App Builder (Edit Page) | Add the action to the **Highlights Panel** (or page layout). |
| 3 | Lightning App Builder → Component Visibility | Filter so the button shows only when **Status = Approved**. |
| 4 | App Builder → Activation | Assign the page as Org Default or to the right profiles. |
| 5 | A test invoice | Verify hidden on non-approved, visible and working on approved. |