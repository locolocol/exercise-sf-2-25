trigger AccountTriggerHandler on Account (before insert, before update, before delete, after insert, after update, after delete, after undelete) {
    if (Trigger.isBefore) {
        if (Trigger.isInsert || Trigger.isUpdate) {
            // Call method to prevent deletion or handle other logic before DML operation
            AccountTriggerHandler.preventDel(Trigger.new);
        }else if (Trigger.isDelete) {
            AccountTriggerHandler.preventAccountDeletion(Trigger.old);
        }
    
    } else if (Trigger.isAfter) {
        if (Trigger.isInsert) {
            // Call method to create Opportunity when new Accounts are inserted
            AccountTriggerHandler.afterInsert(Trigger.new);
            // Call method to create Opportunity when new Accounts with Industry as Agriculture are inserted
            AccountTriggerHandler.createOpportunity(Trigger.new, Trigger.oldMap);
        } else if (Trigger.isUpdate) {
            // Call method to create Opportunity when existing Accounts are updated
            AccountTriggerHandler.createOpportunity(Trigger.new, Trigger.oldMap);
            // Additional logic for after update if needed
        } else if (Trigger.isDelete) {
            // Call method to prevent deletion or handle other logic after deletion operation
        }
        // Add similar blocks for after delete and after undelete if needed
    }
}
