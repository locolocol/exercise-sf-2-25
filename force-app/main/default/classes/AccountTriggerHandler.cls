//Write a trigger, when a new Account is created then create a contact related to that account. 
// This is the trigger handler clas
public class AccountTriggerHandler {
    public static void afterInsert(List<Account> acclist) {
        List<Contact> conlist = new List<Contact>();
        try {
            for (Account acc : acclist) {
                Contact con = new Contact();
                con.LastName = acc.Name;
                con.AccountId = acc.Id;
                conlist.add(con);
            }
            if (!conlist.isEmpty()) {
                insert conlist;
            }
        } catch (Exception e) {
            System.debug('Exception error message is : ' + e.getMessage());
        }
    }
//Account records cannot be deleted if active is Yes.
    public static void preventDel(List<Account> accList) {
        for (Account acc : accList) {
            if (acc.Active__c == 'Yes') {
                acc.addError('Account record cannot be deleted because it is marked as active.');
            }
        }
    }  
    // -  Write a trigger, to create new Opportunity whenever an account is created/updated
// for Industry – Agriculture.
public static void createOpportunity(List<Account> newAccounts, Map<Id, Account> oldAccounts) {
    List<Opportunity> newOpportunities = new List<Opportunity>();

    try {
        for (Account acc : newAccounts) {
            if ((oldAccounts == null || (oldAccounts.get(acc.Id) != null && oldAccounts.get(acc.Id).Industry != 'Agriculture')) && acc.Industry == 'Agriculture') {
                Opportunity newOpp = new Opportunity();
                newOpp.Name = 'New Opportunity Name';
                newOpp.CloseDate = Date.today();
                newOpp.StageName = 'Prospecting';
                newOpp.AccountId = acc.Id;
                newOpportunities.add(newOpp);
            }
        }

        if (!newOpportunities.isEmpty()) {
            insert newOpportunities;
        }
    } catch (Exception e) {
        System.debug('An error occurred: ' + e.getMessage());
        // Handle the error gracefully, log it, or take appropriate action
    }
}
//  Write a trigger, user should not be able to delete any account with associated contact.
        public static void preventAccountDeletion(List<Account> accounts) {
            Set<Id> accountIdsWithContacts = new Set<Id>();
            
            // Populate the Set with Account Ids having associated Contacts
            for (Contact con : [SELECT AccountId FROM Contact WHERE AccountId IN :accounts]) {
                accountIdsWithContacts.add(con.AccountId);
            }
            
            // Iterate through the Accounts being deleted and prevent deletion if they have associated Contacts
            for (Account acc : accounts) {
                if (accountIdsWithContacts.contains(acc.Id)) {
                    acc.addError('Cannot delete this Account as it has associated Contacts.');
                }
            }
        }

    }
     
    // can you create contact related account
    