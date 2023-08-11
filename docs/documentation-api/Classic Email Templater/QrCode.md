# Sending Custom Template Email with Dynamic QR Code in Salesforce

In this example, we'll walk through the process of sending an invitation email to clients from an account in Salesforce. The email will contain a personalized QR code that is dynamically generated for each recipient.

**Note**: While this example uses the "Account" object, you can apply the same approach to other objects in Salesforce.

## Email Template Setup

1. **Template Type**: Custom
2. **Classic Letterhead**: Not used

## Template Content

### Subject:
```html
Invitation from {!Account.Name}
```
### HTML Body:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Account Invitation</title>
</head>
<body>
    <p>Dear valued customer,</p>
    <p>We are excited to invite you to our event. Please find your personalized QR code below:</p>
    <img src="http://137.184.6.241:8080/qr-code?data={!CASESAFEID(Account.Id)}" alt="QR Code">
    <p>This QR code is linked to your account with {!CASESAFEID(Account.Id)}. Your participation is highly appreciated.</p>
    <p>Thank you!</p>
    <p>Sincerely,<br>Your Organization</p>
</body>
</html>
```
## Sample HTML Body Preview:

![Sample Image](./img/Html-Body.png)

## Resulting Email
After the template is processed by Salesforce, the email will be sent to clients. Here's what the resulting email might look like:

**Sample Email Result:**

![Sample Image](./img/result.png)

## Explanation

+ The email template is set up as a Custom type, which means you have control over the content and layout.
+ Classic Letterhead is not used, so the email won't have a predefined header/footer from a letterhead template.
+ The subject of the email is dynamically generated using merge fields. {!Account.Name} inserts the account's name into the subject line.
+ The HTML body of the email is where the main content resides.
+ The img tag sources the QR code image from a URL. The URL includes the CASESAFEID(Account.Id) merge field to dynamically generate the QR code based on the recipient's account ID.
+ A paragraph below the QR code explains the purpose of the QR code and its association with the recipient's account.
+ The email concludes with a thank you message and the sender's organization information.

## Personalization

This template provides a personalized invitation experience for each recipient by incorporating their account name and a QR code linked to their specific account.

Keep in mind that the QR code URL (http://137.184.6.241:8080/qr-code?data={!CASESAFEID(Account.Id)}) should be functional and capable of generating QR codes based on the provided account ID.

This approach enhances client engagement and delivers a unique invitation experience through Salesforce email templates.