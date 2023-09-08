# Static Resources Synchronization Coverage

On the Salesforce platform, static resources refer to files such as images, CSS files, JavaScript, as well as any other file you want to make available for use on your Salesforce application. Static resources are stored in the Salesforce storage area. At startup, the Mobee application will download them for offline access. Downloading all static resources present in an environment requires a lot of storage resources on the device and slows down the startup. Mobee will only retrieve static files used in the Mobee Settings, formula fields, and flows.

## Static Resources type

| Static Resources Type         | Mobee Settings | Use in formula fields (e.g., hyperlink...) | Flows | Rich Text Field | Rich Text Component |
|------------------------------|----------------|------------------------------------------|-------|-----------------|---------------------|
| Js                           | X (Mobee dynamic function file) | X                                      |       | Not supported in Mobee | X                   |
| Json                         |                | X                                      |       | Not supported in Mobee | X                   |
| Pdf                          |                | X                                      |       | Not supported in Mobee | X                   |
| Image                        | X (Avatar image file) | X                                      | X     | Not supported in Mobee | X                   |
| Video                        |                | X                                      |       | Not supported in Mobee | X                   |
| Font                         |               | X                                      |       | Not supported in Mobee | X                   |
| Text                         |               | X                                      |       | Not supported in Mobee | X                   |
| Markdown                     |               | X                                      |       | Not supported in Mobee | X                   |
| Zip                          |               | X                                      |       | Not supported in Mobee | X                   |
| x-bzip                       |               | X                                      |       | Not supported in Mobee | X                   |
| x-rar-compressed             |               | X                                      |       | Not supported in Mobee | X                   |
| x-tar                        |               | X                                      |       | Not supported in Mobee | X                   |
