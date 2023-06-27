## Application Lifecycle and Development Models

Reference: <https://trailhead.salesforce.com/en/content/learn/modules/application-lifecycle-and-development-models>

### Application Lifecycle Management (ALM)

We have the following three development models in Salesforce:

* Change set development
* Org development
* Package development

These 3 models follow the same ALM process. But the models differ in the way that they let you manage changes to your org.
Some changes can be done directley in Production Org such Reports and Dashboards others changes should be tested before making them available in production.

<p align="center">
  <img src="./img/download.png" alt="ALM" />
</p>

**Step 1: Plan Release**
Start your customization or development project with a plan. Gather requirements and analyze them. Have your product manager (or equivalent) create design specifications and share them with the development team for implementation. Determine the various development and testing environments the team needs as the project progresses through the ALM cycle.

**Step 2: Develop**
Complete the work, following the design specifications. Perform the work in an environment containing a copy of the production org’s metadata, but with no production data. Develop on Lightning Platform using an appropriate combination of declarative tools (Process Builder, the Custom Object wizard, and others in the UI) and programmatic tools (Developer Console, Source Code Editor, or Visual Studio Code).

**Step 3: Test**
Exercise the changes you’re making to check that they work as intended before you integrate them with other people’s work. Do your testing in the same type of environment as you used in the develop step, but keep your development and integrated testing environments separate. At this point, focus on testing your changes themselves, not on understanding how your changes affect other parts of the release or the app as a whole.

**Step 4: Build Release**
Aggregate all the assets you created or modified during the develop stage into a single release artifact: a logical bundle of customizations that you deploy to production. From this point on, focus on what you’re going to release, not on the contributions of individuals.

**Step 5: Test Release**
Test what you’re actually going to deploy, but test safely in a staging environment that mimics production as much as possible. Use a realistic amount of representative production data. Connect your test environments with all the external systems they need to mimic your production system’s integration points. Run full regression and final performance tests in this step. Test the release with a small set of experienced people who provide feedback (a technique called user-acceptance testing).

**Step 6: Release**
When you’ve completed your testing and met your quality benchmarks, you can deploy the customization to production. Train your employees and partners so they understand the changes. If a release has significant user impact, create a separate environment with realistic data for training users.

## Basics of Release Management

### Create a Release Management Process

By implementing the ALM cycle, we adopt a basic release management process. But the team has both **large** and **small** projects in progress, all at different steps in the ALM cycle. Releases typically fall into one of three categories

**Patch Bug fixes and simple changes.**

Simple changes include reports, dashboards, list views, and email templates.
Minor Changes with limited impact, such as a new workflow rule or trigger impacting a single business process.
These releases typically require testing, but only limited training and change management. Typically, a team delivers the changes for a minor release within a few weeks.

**Major Changes with significant impact.**

Including changes with one or more dependencies. Because these releases can greatly affect the user experience and data quality, they require thorough testing, training, and careful change management. Major releases are typically delivered once a quarter (Salesforce does it three times a year).

**Release on a consistent schedule.**

Aim to release at regular intervals and on a given day of the week. For example, maybe minor releases occur at 8 PM eastern time on the first Tuesday of every month. Scheduling consistency helps with company-wide planning and sets expectations with your business users.

**<u>NB:</u>** One more thing: Try not to release near holidays or other major events.
