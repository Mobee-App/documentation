# Mobee Installation Guide

## Salesforce AppExchange Package

To seamlessly install the Mobee App Package from the AppExchange, follow the steps below:

1) **Navigate to Mobee App Page:**
   - Launch your web browser.
   - Access the Mobee App page on AppExchange using the following link: [Mobee App on AppExchange](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3u00000ONmC7EAL&tab=e).
<br />   
![Sample Image](./img/app_exchange.png)
<br />
2) **Install the Package:**
   - Click on the "Get It Now" button.
   - Choose the Salesforce org where you'd like to install the package.
<br />
3) **User Management & Permission Assignment:**
   - Navigate to the user management page in Salesforce.
   - Select a user.
   - Assign the required permissions based on your operational requirements (options include: Mobee Administrator, Mobee User, Mobee Community Administrator, Mobee Community User, Mobee Time And Expenses Administrator, Mobee Time And Expenses User).
<br />
![Sample Image](./img/permission.png)
<br />

4) **License Management:**
   - Go to the Setup Page.
   - Access the “Installed Packages” section.
   - Click on the “Manage Licenses” link adjacent to the Mobee Package. This is where you can allocate licenses to specific users.
<br />  
![Sample Image](./img/installed_packages.png)
<br />

5) **Mobee Object Setup:**
   - If you're a Mobee Administrator user, head over to the “Mobee Object Setup” tab.
   - This tab is crucial for determining the objects that will synchronize with the mobile app.
<br />
6) **Define Synchronization Settings:**
   - Input the Object API Name.
   - Adjust the settings as per your requirements.
<br />
![Sample Image](./img/mobee_object_setup.png)
<br />

7) **Finalizing the Setup:**
   - Upon finalizing your synchronization objects, users granted the correct permissions can now download and utilize the mobile application on both iOS and Android platforms.
<br />
## Mobee Mobile App

To use the Mobee Mobile App, follow these steps:

1. Install the mobile app on iOS or Android.
2. After installing the mobile application on your device, open the app and you will be prompted to log in.
3. Log in using your Salesforce credentials and modify the connection server (Production/Sandbox/Custom Domain) if necessary.
4. After logging in and filling the received confirmation code, the user should allow the required access to the connected App.
5. The splash screen will list the synchronization steps. This step can take some time depending on the data that needs to be synchronized.
6. To reduce the synchronization time, try to minimize the number of objects to synchronize and use the “List View Filter” and the “File Sync Down” options in Mobee Object Setup. Note that disabling the “File Sync Down” will only disable downloading the files on your device but will keep uploading every attachment made by the users.
7. After finishing the data syncing process, the user will have access to the Home Pages, App Pages, Listviews & Record Pages totally offline.

That's it! You have successfully installed and used the Mobee App tool on your Salesforce org and mobile device.
