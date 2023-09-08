# Configuración de la comunidad Mobee
## Setup Mobee Community

Salesforce does not allow community users to access some metadata using the API. To work around these limitations and optimize governor limits, Mobee provides a set of automated tools that extract the required metadata, including pages from Experience Cloud and other resources. The Mobee automated tools generate JSON files and zip files for the metadata records resources that will be included in the static resource.

To set up Mobee Community, follow the steps below:

1. Execute the Mobee procedure provided with the AppExchange. Provide the name of the Experience Cloud Site and any additional languages required.

    ```javascript
    Mobee.SetupUtils.prepareMobeeResources('Customer_Site1', 'fr');
    ```

2. You can also run the individual tools using the following sub-procedures:

    ```javascript
    Mobee.SetupUtils.refreshCoreMetadata();
    Mobee.SetupUtils.refreshCustomLabel();
    Mobee.SetupUtils.refreshExternalStringLocalization('fr');
    Mobee.SetupUtils.siteExperienceBundleQueueable('Customer_Site1');
    ```

It is important to run these automated tools for the first time and each time you publish your Experience Cloud Site. The estimated time for running the tools is about 2 minutes.

The output of the procedure will generate the following files in the Static Resources directory:

| Resource                             | Description                                                                                |
| ------------------------------------ | ------------------------------------------------------------------------------------------ |
| Mobee_CoreMetadata                   | Contains the main metadata of the Salesforce Core System, such as Validation Rules, Web Links, Lookup Filters, and Flow definitions. |
| Mobee_CoreCustomLabel                | Contains the custom labels.                                                                |
| Mobee_CoreExternalStringLocalization | Contains the translated custom labels for the specified language.                          |
| Mobee_Community_Customer_Site1       | Contains the Experience Cloud Site pages, themes, and other resources.                     |

**How to verify if your resources are up to date?**  
Check the last modified date of the output files to ensure that the files are up to date.

## Output files in the Static Resources

| File                                 | Type        | Description                                                                               |
| ------------------------------------ | ----------- | ----------------------------------------------------------------------------------------- |
| Mobee_CoreMetadata                   | `Json File` | Mobee Core Metadata listes                                                                |
| Mobee_CoreCustomLabel                | `Json File` | Mobee Core CustomLabels                                                                   |
| Mobee_CoreExternalStringLocalization | `Json File` | Mobee Core ExternalStringLocalization                                                     |
| Mobee_Community_Customer_Site1       | `Zip File`  | Site pages, components, and properties                                                     |
