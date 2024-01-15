# Configuration and Usage

## User Profile Requirements and Permissions

To utilize the module, users must meet the following prerequisites:

- Possession of a Mobee license.
- Assignment of either the "Mobee User" or "Mobee Administrator" permission set.
- Enable User External Credentials Through User Profiles

## Retrieve and Reset Document Generation Token

1. Open the Mobee Settings by navigating to the **App Launcher** and searching for **Mobee Settings**.

2. Click on "Mobee Settings" in the "Items" section.

![Sample Image](./img/Mobee-Settings-Tab.png)

3. In Mobee Settings, navigate to the "Document Generation" tab.

4. Within the "Document Generation" tab, you will find Your Organization Token if your Organization is subscribed to the Mobee Document Generation service. Utilize this token to authorize your access to the document generation. You can click on the button to the left of the 'Reset Button' to copy the token to your clipboard or select and copy it.

![Sample Image](./img/Mobee-Token.png)

If your Organization needs to reset the token, locate the "Reset Token" button on the right. Clicking this button will allow you to generate a new token for your Organization.

![Sample Image](./img/Token-Reset.png)

**Attention:** [Make sure to update the token in the Custom Headers when you reset it in the Mobee Settings](#access-authorization).

## Access Authorization

Mobee's document generation relies on an external service, making authorization vital for security. By employing Token authentication, only authenticated entities can access the service, eliminating the risk of unauthorized use and ensuring robust protection against data breaches.

### Mobee Document Generator External Credential Setup

This section outlines a step-by-step guide on how to set up external credentials for Mobee Document Generator, including creating a custom authentication protocol, adding parameters, custom headers, and integrating with Uprizon for authentication.

### Setup External Credentials

1. Open the external credentials management interface by navigating to **Setup** > **Security** > **Named Credentials**.

![Sample Image](./img/Setup-Named-Credential.png)

2. Click on the "External Credentials" tab.

![Sample Image](./img/Named-Credentials.png)

3. Locate the external credential with the label "Document Generation External Credentials" and click on it.

![Sample Image](./img/External-Credentials.png)

![Sample Image](./img/External-Credentials-Page.png)

4. In the "Document Generation External Credentials," find the **Custom Headers** with the Name "Authorization", click on the arrow on the right and select "Edit".

![Sample Image](./img/Custom-Headers.png)

![Sample Image](./img/Custom-Headers-Edit-Button.png)

5. Inside the Custom Headers Window, Add The Token To The Custom Header:
    - Replace the **Value** by the [token](#retrieve-and-reset-document-generation-token) provided by Mobee:
        - **Name:** Authorization
        - **Value:** Bearer [Token provided by Mobee]

          **Note:** Before saving, ensure that the token has the "Bearer " prefix. If not, add the prefix with a trailing space at the end. 
          
            For example: If the token is `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`, make it: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

    - Click on "Save" to save the custom header.
    
   ![Sample Image](./img/Custom-Headers-Windows.png)

You are now done with the setup for Mobee Document Generator External Credentials.

**Attention:** Make sure to update the token in the Custom Headers when you reset it in the Mobee Settings.

## Creating a Document Template

1. Navigate to the **Mobee Documents Templates** Salesforce Tab to initiate the creation of a new template.
2. Click on the "**New**" button and furnish a suitable name for the template.

![Alt text](img/prep_word.png)


After the successful creation of the template, the next step involves associating it with a specific Salesforce object. Follow the steps below:

1. Access the newly created template by selecting its name from the list.
2. Within the initial section, click the "**Choose Main Object**" button located on the right.
3. Utilize the lookup search field to designate the desired main object.
4. Opt for a Salesforce field on the selected object to serve as the naming convention for the generated file. Supported types include text fields and formulas. The **Name** field is selected by default.

![Sample Image](img/prep_word2.png)

5.  After the selection of the main object and naming field, proceed to upload your Word document template by selecting the "**Upload**" button. Please note that only files with the `.docx` extension are supported.

![Sample Image](img/prep_word3.png)

## Generate Documents from Template

Mobee offers a range of options to facilitate document generation tailored to your specific requirements. The package encompasses pre-built components ready for immediate use, seamlessly integratable into your pages. Moreover, Mobee provides functionalities allowing you to customize your entire document generation processes using Lightning or even Apex.

### Lightning Web Component

For manual document generation within a screen, Mobee presents a fundamental Lightning Web Component designed to generate documents for the current record based on a specified template ID.

**Below are the component parameters:**

![Document Generation Lightning Web Component](img/document_generator_lwc.png)

- **Current Record Id:** When placed on a record page, this parameter can be left empty, as it automatically detects the ID of the current record.

- **Multiple Record Ids (Comma Separated):** This parameter can be left empty when generating unitary documents and will be used for combined document templates later.

- **Attach to Record:** A flag indicating whether the user wishes to attach the generated document to the Notes & Attachments of the current record. If unchecked, the document will be automatically downloaded.

- **Current Object API Name:** When placed on a record page, this parameter can be left empty, as it automatically detects the object API Name of the current record.

- **Selected Template Id:** Informs the component about the template to be used for the generation.

- **Show Generate Button:** A flag indicating whether a physical button is desired to trigger the generation. If unchecked, document generation will be triggered upon loading the page containing the component.

- **Output Format:** This parameter indicates the desired format for the generated file. Mobee currently supports `docx` and `pdf`.

**Usage:**

This component is suitable for use in both **"Record Lightning Pages"** and **"Flow Screens."** To harness the full capabilities of this component, it is recommended to use it in **Flow Screens**. Leveraging Flow's flexibility enables dynamic fetching of the desired template based on specific search criteria, providing a dynamic parameter to the component, and avoiding the inclusion of parameters in hard text.

Here's an example of its usage in a Screen Flow.

![Screen Flow LWC](img/screen_flow_lwc.png)

### Action Button

The Mobee package seamlessly integrates with Salesforce record pages, providing an out-of-the-box Flow that can be effortlessly added as an action button.

**Creating the Action Button:**

1. Navigate to the object manager and select the object where you want the generation button to be available.
2. Go to the "Buttons, Links, and Actions" section and click on the "New Action" button.
3. Choose the "Lightning Web Component" option for the "Action Type," and select "Mobee:documentGeneratorAction" for the "Lightning Web Component."

![Add Action Button](./img/ajouter_button_action.png)

**Adding the Action Button to a Page Layout:**

Once the action button is created, follow these steps to add it to a desired "Page Layout."

1. Open the "Page Layouts" section from the object manager and select the desired page where you want to add your button.
2. Locate your newly created button in the "Mobile & Lightning Actions" Section.
3. Drag the button and drop it into the "Salesforce Mobile and Lightning Experience Action" section.

![Sample Image](./img/ajouter_button_action2.jpg)

**Utilizing the Added Button:**

To utilize the added button, follow these steps:

1. Navigate to a record of the same object type as the created document template.
2. Click the "Generate Document" action button.
3. Select the desired template from the provided selection list.
4. The document will be generated and automatically downloaded.

![Sample Image](./img/generer_apartir_modele_creer.png)

### List View Button

Similar to the aforementioned action button, Mobee extends its functionality by offering a Flow that can be invoked from list view buttons. This feature emphasizes the capability to generate documents for multiple records simultaneously.

**Creating a List View Button:**

Follow these steps to create the button:

1. Prepare a template to be used on the desired main object.
2. From the Setup screen, select the desired main object.
3. Go to the "Buttons, Links, and Actions" section.
4. Click on the top-right "New Button or Link" button.
5. Complete the required Label and Name input fields.
6. Select List Button from the "Display Type" and ensure that the "Display Checkboxes (for Multi-Record Selection)" option is checked.
7. In the formula text area, input the following path and replace the template ID with your desired template: `/flow/Mobee__ListViewDocumentGenerator?templateId=a057Q000005Yd7BQAS&attachToRecord=false&outputFormat=pdf`

![List View Button](img/list_view_button.png)

**Adding the Button to the List View:**

To add the button to the list view, follow these steps:

1. From the "Object Manager", access the "**List View Button Layout**" section.
2. For the list view layout, click the dropdown button on the right and select "Edit."
3. In the List View Editor, find your button in the "Custom Buttons" section and add it to the Selected Buttons List.
4. Click on Save.

**Utilizing the Added Button:**

To utilize the list view button, follow these steps:

1. Go to the object list view.
2. Select your desired records by clicking on the checkbox on each line.
3. Locate your button in the button list in the top actions section.
4. Click on the button, which will open the flow in a new page and generate the documents.

**Note:** This "Custom Button" can also be used for **Related List Views**.

### Apex Client

Document generation is not always a user-triggered functionality; at times, there's a need to generate documents from triggers, jobs, and other automated processes. To facilitate this, Mobee provides an Apex function that enables seamless document generation tailored to specific requirements.

The function is accessible within the Mobee package by invoking the `Mobee.DocumentTemplaterController.generateDocuments` function.

Similar to the Lightning Web Component, this Apex function takes four parameters as input:

1. A list of Salesforce record IDs for which documents need to be generated. (It can be a list containing a single ID)
2. The Mobee Document Template ID to be used as the template for the generation.
3. The desired output format (`docx` or `pdf`).
4. A flag indicating whether to attach the generated file to the given record.

This function returns a `Map` containing the generated file as `Blob` indexed by their respective record IDs.

Here's an example of utilizing this Apex function:

**Context:** In this example, the Mobee Template Main Object is the `Application__c` custom object, and the template Id is stored in the `ContractTemplate__c` lookup field, which is on the parent field `Sector__c`.

```java
public class DocumentGeneration {
    @Future(callout=true)
    public static void generateContract(String applicationId) {
        String OUTPUT_FORMAT = 'pdf';
        Application__c application = [SELECT Id, Sector__c.ContractTemplate__c FROM Application__c WHERE Id = :applicationId];
        if (application.Sector__c.ContractTemplate__c == null) {
            throw new Mobee.DocumentGenerationException('Template is not defined on this Sector.');
        }
        Map<Id, Blob> generatedDocuments;
        if (Test.isRunningTest()) {
            generatedDocuments = generateDocumentMock(new List<Id>{applicationId});
        } else {
            generatedDocuments = Mobee.DocumentTemplaterController.generateDocuments(
                // recordsIds
                new List<String>{applicationId},
                // templateId
                application.Sector__c.ContractTemplate__c,
                // outputFormat
                OUTPUT_FORMAT,
                // attachToRecords
                false);
        }
        Blob generatedDocument = generatedDocuments.get(applicationId);
        if (generatedDocument == null) {
            throw new Mobee.DocumentGenerationException('Error while generating document.');
        }
        // Do whatever you want with the Blob...
    }
}
```
