# Time Sheet Approval Process

## Introduction

You can add an approval process to have your manager, or a designated approver, review and approve or reject your submitted time entries.

![Approval Process Submission Preview](images/APImg/approvalProcessCreation/approvalProcessPreview.png "Approval Process Submission Preview")  
<sup>*Approval Process Submission Preview*</sup>

---

## Approval Process Activation

### 1. Create The Approval Process

The following section is a step-by-step guide for creating a standard approval process, where some actions are mandatory and others are optional.  **(The mandatory steps are highlighted in bold)**

- Go to the setup page
- Access the approval processes
- Manage approval processes for: time period
- Create new approval process: use standard setup wizard

![Approval Process Creation Intro](images/APImg/approvalProcessCreation/approvalProcessCreationIntro.png "Approval Process Creation Intro")

#### Step 1: Enter Name And Description

![Approval Process Creation Step 1](images/APImg/approvalProcessCreation/approvalProcessCreationStep1.png "Approval Process Creation Step 1")

#### Step 2: Specify Entry Criteria

*No action to do*  
![Approval Process Creation Step 2](images/APImg/approvalProcessCreation/approvalProcessCreationStep2.png "Approval Process Creation Step 2")

#### Step 3: Specify Approver Field And Record Editability Properties

1. Specify Approver Field (for automated approval routing)
   Select: *Manager*

2. Record Editability
   Select: *Administrators or the currently assigned approver can edit records during the approval process.*  

![Approval Process Creation Step 3](images/APImg/approvalProcessCreation/approvalProcessCreationStep3.png "Approval Process Creation Step 3")

#### Step 4: Select Notification Templates

*No action to do*  
![Approval Process Creation Step 4](images/APImg/approvalProcessCreation/approvalProcessCreationStep4.png "Approval Process Creation Step 4")

#### Step 5: Select Fields To Display On Approval Page Layout

*No action to do*  
![Approval Process Creation Step 5](images/APImg/approvalProcessCreation/approvalProcessCreationStep5.png "Approval Process Creation Step 5")

#### Step 6: Specify Initial Submitters

1. Initial submitters  
   *Select: Time period owner, record creator*

2. **Submission settings**  
   ***Select: Allow submitters to recall approval requests***  

![Approval Process Creation Step 6](images/APImg/approvalProcessCreation/approvalProcessCreationStep6.png "Approval Process Creation Step 6")

---

### 2. Manage The Approval Process

After completing the creation of the approval process, you will be able to manage actions (initial submission, final approval, final rejection, and recall).

These actions must be included for the approval process to function as intended.

![Actions And Approval Steps Preview](images/APImg/approvalProcessManagement/actionsAndApprovalStepsPreview.png "Actions And Approval Steps Preview")  
<sup>*Actions And Approval Steps Preview*</sup>

#### 2.1. Initial Submission Actions

1. Add existing  
2. Add: *Field update: update status to submitted*

![Initial Submission Add Action](images/APImg/approvalProcessManagement/initialSubmissionAddAction.png "Initial Submission Add Action")

![Initial Submission Add Action 2](images/APImg/approvalProcessManagement/initialSubmissionAddAction2.png "Initial Submission Add Action")

#### 2.2. Final Approval Actions

1. Edit record lock and select: *Unlock record for editing*  
2. Add existing and add: *Field update: update status to approved*

![Final Approval Edit And Add Action](images/APImg/approvalProcessManagement/finalApprovalAddAction.png "Final Approval Edit And Add Action")

![Final Approval Edit Record Lock](images/APImg/approvalProcessManagement/finalApprovalAddAction1.png "Final Approval Edit Record Lock")

![Final Approval Add Action](images/APImg/approvalProcessManagement/finalApprovalAddAction2.png "Final Approval Add Action")

#### 2.3. Final Rejection Actions

1. Add existing  
2. Add:  
   a. *Field update: update status to rejected*  
   b. *Email alert: send email notification to assignee on rejection* (this is an email alert sent to the timesheet submitter if their timesheet is rejected by the approver. if not needed, this email alert should not be added)

![Final Approval Add Action](images/APImg/approvalProcessManagement/finalRejectionAddAction.png "Final Approval Add Action")

![Final Approval Add Action 2](images/APImg/approvalProcessManagement/finalRejectionAddAction2.png "Final Approval Add Action")

#### 2.4. Recall Actions

1. Add existing  
2. Add: *Field update: update status to draft*

![Recall Add Action](images/APImg/approvalProcessManagement/recallAddAction.png "Recall Add Action")

![Recall Add Action 2](images/APImg/approvalProcessManagement/recallAddAction1.png "Recall Add Action")

---

### 3. Choose The Approver

#### 3.1. Assign The Approver On The Approval Process

The approver may be the submitter's manager or a specific user responsible for all submitters, such as the hr manager, ensuring that all timesheets are directed to one individual for approval. This is also controlled at the level of the approval process after its creation.

![Approval Steps](images/APImg/approvalProcessManagement/approvalStepsEdit.png "Approval Steps")

![Approval Step Change Approver](images/APImg/approvalProcessManagement/approvalStepsEditStep3.png "Approval Step Change Approver")

#### 3.2. Permission Set Assignment

In setup > users, set the *Mobee approve all timesheets* permission set on the approver user.

![Edit Permission Set On User](images/APImg/approvalProcessManagement/editPermissionSetOnUser.png "Edit Permission Set On User")

![Edit Permission Set On User](images/APImg/approvalProcessManagement/editPermissionSetOnUser2.png "Edit Permission Set On User")

---

## Approval Process Usage

#### 1. Submitter

User submits his time sheet for approval  
*This action is recallable (1)*  
*Submission comment (2)*  
*Time entries submitted indicator (3)*

![Submitted Time Sheet](images/APImg/approvalProcessBehavior/submittedTimeSheet.png "Submitted Time Sheet")

#### 2. Approver

Assigned approver can approve/reject on submitter's contact  
*the assigned approver reviews the timesheet (submitted time entries) and has the option to either approve or reject the submission.*

![Submitted Time Sheet](images/APImg/approvalProcessBehavior/submittedTimeSheet2.png "Submitted Time Sheet")

---

## Approval Process Behavior And Considerations

- Partial approval is possible

Example A:  
*the user submits a request for days off, which gets approved. later, they submit their assigned workload for the remaining days*

![Partial Approval Process Example](images/APImg/approvalProcessBehavior/partialApprovalExample1.png "Partial Approval Process Example")  
![Partial Approval Process Example](images/APImg/approvalProcessBehavior/partialApprovalExample2.png "Partial Approval Process Example")

Example B:  
*the user submits the last days of the month for approval. in the following month, for the same assignment, they submit the remaining weekdays for approval*

![Partial Approval Process Example](images/APImg/approvalProcessBehavior/partialApprovalExample3.png "Partial Approval Process Example")  
![Partial Approval Process Example](images/APImg/approvalProcessBehavior/partialApprovalExample4.png "Partial Approval Process Example")

- When a timesheet is approved, a notification is sent to the submitter  
- When a timesheet is rejected, both a notification and an email are sent to the submitter (the email is sent if added according to 2.3. final rejection actions)  
- When any pending time entries on a timesheet are rejected, the entire timesheet becomes editable  
- Hovering over the following icons ![Submitted Icon](images/APImg/approvalProcessBehavior/submittedIcon.png "Submitted Icon"), ![Approved Icon](images/APImg/approvalProcessBehavior/approvedIcon.png "Approved Icon") and ![Rejected Icon](images/APImg/approvalProcessBehavior/rejectedIcon.png "Rejected Icon") displays comments from the submitter or approver related to the submission, approval, or rejection, respectively  
- The following icons ![Submitted Icon Cell](images/APImg/approvalProcessBehavior/submittedIconCell.png "Submitted Icon Cell") and ![Approved Icon Cell](images/APImg/approvalProcessBehavior/approvedIconCell.png "Approved Icon Cell") serve as indicators showing the status of the time entry