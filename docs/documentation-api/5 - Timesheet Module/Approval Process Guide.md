# Time Sheet Approval Process

## Introduction

You can add an approval process to have your manager, or a designated approver, review and approve or reject your submitted time entries.

![Approval Process Submission Preview](images/approvalProcessImages/approvalProcessCreation/approvalProcessPreview.png "Approval Process Submission Preview")
<sup>*Approval Process Submission Preview*</sup>

---

## Approval Process Activation

### 1. Create the Approval Process

- Go to the Setup Page
- Access the Approval Processes
- Manage Approval Processes For: Time Period
- Create New Approval Process: Use Standard Setup Wizard

![Approval Process Creation Intro](images/approvalProcessImages/approvalProcessCreation/approvalProcessCreationIntro.png "Approval Process Creation Intro")

#### Step 1: Enter Name and Description

![Approval Process Creation Step 1](images/approvalProcessImages/approvalProcessCreation/approvalProcessCreationStep1.png "Approval Process Creation Step 1")

#### Step 2: Specify Entry Criteria

**No Action to do**
![Approval Process Creation Step 2](images/approvalProcessImages/approvalProcessCreation/approvalProcessCreationStep2.png "Approval Process Creation Step 2")

#### Step 3: Specify Approver Field and Record Editability Properties

1. **Specify Approver Field (For Automated Approval Routing)**  
   Select: *Manager*

2. **Record Editability**  
   Select: *Administrators OR the currently assigned approver can edit records during the approval process.*  

![Approval Process Creation Step 3](images/approvalProcessImages/approvalProcessCreation/approvalProcessCreationStep3.png "Approval Process Creation Step 3")

#### Step 4: Select Notification Templates

**No Action to do**
![Approval Process Creation Step 4](images/approvalProcessImages/approvalProcessCreation/approvalProcessCreationStep4.png "Approval Process Creation Step 4")

#### Step 5: Select Fields to Display on Approval Page Layout

**No Action to do**
![Approval Process Creation Step 5](images/approvalProcessImages/approvalProcessCreation/approvalProcessCreationStep5.png "Approval Process Creation Step 5")

#### Step 6: Specify Initial Submitters

1. **Initial Submitters**  
   Select: *Time Period Owner, Record Creator*

2. **Submission Settings**  
   Select: *Allow submitters to recall approval requests*  

![Approval Process Creation Step 6](images/approvalProcessImages/approvalProcessCreation/approvalProcessCreationStep6.png "Approval Process Creation Step 6")

---

### 2. Manage the Approval Process

After completing the creation of the approval process, you will be able to manage actions (Initial Submission, Final Approval, Final Rejection, and Recall).

![Actions and Approval Steps Preview](images/approvalProcessImages/approvalProcessManagement/actionsAndApprovalStepsPreview.png "Actions and Approval Steps Preview")
<sup>*Actions and Approval Steps Preview*</sup>

#### 2.1. Initial Submission Actions

1. Add Existing
2. Add: *Field Update: Update Status to Submitted*

![Initial Submission Add Action](images/approvalProcessImages/approvalProcessManagement/initialSubmissionAddAction.png "Initial Submission Add Action")

![Initial Submission Add Action 2](images/approvalProcessImages/approvalProcessManagement/initialSubmissionAddAction2.png "Initial Submission Add Action")

#### 2.2. Final Approval Actions

1. Edit Record Lock and Select: *Unlock record for editing*
2. Add Existing and Add: *Field Update: Update Status to Approved*

![Final Approval Edit and Add Action](images/approvalProcessImages/approvalProcessManagement/finalApprovalAddAction.png "Final Approval Edit and Add Action")

![Final Approval Edit Record Lock](images/approvalProcessImages/approvalProcessManagement/finalApprovalAddAction1.png "Final Approval Edit Record Lock")

![Final Approval Add Action](images/approvalProcessImages/approvalProcessManagement/finalApprovalAddAction2.png "Final Approval Add Action")

#### 2.3. Final Rejection Actions

1. Add Existing
2. Add: 
    a. *Field Update: Update Status to Submitted*
    b. *Email Alert: Send Email Notification To Assignee On Rejection* (This is an email alert sent to the timesheet submitter if their timesheet is rejected by the approver. If not needed, this email alert should not be added)

![Final Approval Add Action](images/approvalProcessImages/approvalProcessManagement/finalRejectionAddAction.png "Final Approval Add Action")

![Final Approval Add Action 2](images/approvalProcessImages/approvalProcessManagement/finalRejectionAddAction2.png "Final Approval Add Action")

#### 2.4. Recall Actions

1. Add Existing
2. Add: *Field Update: Update Status to Draft*

![Recall Add Action](images/approvalProcessImages/approvalProcessManagement/recallAddAction.png "Recall Add Action")

![Recall Add Action 2](images/approvalProcessImages/approvalProcessManagement/recallAddAction1.png "Recall Add Action")

---

### 3. Choose the Approver

#### 3.1. Assign the Approver on the Approval Process

The approver may be the submitter's manager or a specific user responsible for all submitters, such as the HR Manager, ensuring that all timesheets are directed to one individual for approval. This is also controlled at the level of the Approval Process after its creation.

![Approval Steps](images/approvalProcessImages/approvalProcessManagement/approvalStepsEdit.png "Approval Steps")

![Approval Step Change Approver](images/approvalProcessImages/approvalProcessManagement/approvalStepsEditStep3.png "Approval Step Change Approver")

#### 3.2. Permission Set Assignment

In Setup > Users, set the *Mobee Approve All TimeSheets* permission set on the approver user.

![Edit Permission Set on User](images/approvalProcessImages/approvalProcessManagement/editPermissionSetOnUser.png "Edit Permission Set on User")

![Edit Permission Set on User](images/approvalProcessImages/approvalProcessManagement/editPermissionSetOnUser2.png "Edit Permission Set on User")

---

### 4. Approval Process Usage

#### 4.1. Submitter
User submits his time sheet for approval
*This action is recallable (1)*
*Submission comment (2)*
*Time entries submitted indicator (3)*
![Submitted Time Sheet](images/approvalProcessImages/approvalProcessBehavior/submittedTimeSheet.png "Submitted Time Sheet")

#### 4.2. Approver
Assigned approver can approve/reject on Submitter's Contact
*The assigned approver reviews the timesheet (submitted time entries) and has the option to either approve or reject the submission.*
![Submitted Time Sheet](images/approvalProcessImages/approvalProcessBehavior/submittedTimeSheet2.png "Submitted Time Sheet")

### 5. Approval Process Behavior and Considerations

- Partial Approval is possible

Example A:
*The user submits a request for days off, which gets approved. Later, they submit their assigned workload for the remaining days*
![Partial Approval Process Example](images/approvalProcessImages/approvalProcessBehavior/partialApprovalExample1.png "Partial Approval Process Example")
![Partial Approval Process Example](images/approvalProcessImages/approvalProcessBehavior/partialApprovalExample2.png "Partial Approval Process Example")

Example B: 
*The user submits the last days of the month for approval. In the following month, for the same assignment, they submit the remaining weekdays for approval*
![Partial Approval Process Example](images/approvalProcessImages/approvalProcessBehavior/partialApprovalExample3.png "Partial Approval Process Example")
![Partial Approval Process Example](images/approvalProcessImages/approvalProcessBehavior/partialApprovalExample4.png "Partial Approval Process Example")

- When a timesheet is approved, a notification is sent to the submitter

- When a timesheet is rejected, both a notification and an email are sent to the submitter (the email is sent if added according to 2.3. Final Rejection Actions)

- When any pending time entries on a timesheet are rejected, the entire timesheet becomes editable

- Hovering over the following icons ![Submitted Icon](images/approvalProcessImages/approvalProcessBehavior/submittedIcon.png "Submitted Icon"), ![Approved Icon](images/approvalProcessImages/approvalProcessBehavior/approvedIcon.png "Approved Icon") and ![Rejected Icon](images/approvalProcessImages/approvalProcessBehavior/rejectedIcon.png "Rejected Icon") displays comments from the submitter or approver related to the submission, approval, or rejection, respectively

- The following icons ![Submitted Icon Cell](images/approvalProcessImages/approvalProcessBehavior/submittedIconCell.png "Submitted Icon Cell") and ![Approved Icon Cell](images/approvalProcessImages/approvalProcessBehavior/approvedIconCell.png "Approved Icon Cell") serve as indicators showing the status of the time entry