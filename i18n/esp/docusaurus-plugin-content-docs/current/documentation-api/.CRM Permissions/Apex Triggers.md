## Introduction
This document catalogs the apex triggers that create assignments for users automatically.
In the future, it was proposed to have a single assignment that is shared among users through those triggers using apex sharing.

## Purpose
The purpose of these triggers is to auto-assign all public or internal accessibility (Mobee__Accessibility__c) projects to every community user (i.e., profile is "Uprizon Internal Community Access") with the account name "Uprizon Account Name" or "Uprizon Lebanon Account Name".

## Trigger 1: Mobee_Project_Trigger
The trigger only has the afterInsert method in the Mobee_ProjectTriggerHandler class as active, and will trigger whenever a new project (Mobee__Project__c) is created.
### afterInsert
This method will call "Mobee_Project_Utility.retreivePublicProjects(TriggerNew)", which will in turn filter the projects that are public or internal.
For every filtered project, an assignment will be created for every community user with the account name "Uprizon Account Name" or "Uprizon Lebanon Account Name".

## Trigger 2: User_Trigger
The trigger only has the afterInsert method in the User_TriggerHandler class as active, and will trigger whenever a new User is created.
### afterInsert
This method will filter users that are community users and, in turn, call the "User_Utility.retreive_CommunityUsers" method on the filtered users, which will create assignments to each user from projects that are public or internal.