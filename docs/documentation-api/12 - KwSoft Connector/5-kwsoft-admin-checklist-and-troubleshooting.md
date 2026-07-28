# Admin Checklist and Troubleshooting

Use this page as a quick operational reference.

## Pre-go-live checklist

1. KwSoft package installed
2. Both template Flows available
3. Custom log object created
4. Related list added to target object layouts
5. User permissions validated
6. At least one successful test for automatic PDF
7. At least one successful test for interactive export

## Daily admin checks

1. Monitor failed Flow interviews
2. Review draft documents older than your target SLA
3. Confirm users can see only relevant templates
4. Verify generated PDFs are attached to the correct records

## Common issues and fixes

Issue: no templates are visible

Possible causes:

1. Template filter is too restrictive
2. User does not have access to templates
3. Required metadata values are missing

Action:

1. Temporarily remove the filter and test again
2. Validate template visibility with an admin profile
3. Reapply the filter once confirmed

Issue: PDF is not attached to the record

Possible causes:

1. Flow input Record Id is empty or incorrect
2. User lacks file/attachment permissions
3. Generation process failed before completion

Action:

1. Check Flow debug details
2. Confirm object-level and file permissions
3. Retest with an administrator user

Issue: interactive document cannot be finalized

Possible causes:

1. Document name in log does not match KwSoft
2. Related Record Id in log is missing
3. Document was removed or renamed outside expected process

Action:

1. Verify document name in the log record
2. Confirm lookup to business record is populated
3. Retry export with a fresh interactive document

## Support model recommendation

For stable operations, define two support levels:

1. L1 Admin support: permission checks, template availability, user guidance
2. L2 Technical support: Flow logic changes, query updates, integration troubleshooting

This separation keeps day-to-day support fast while technical changes remain controlled.
