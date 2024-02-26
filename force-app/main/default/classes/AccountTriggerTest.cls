// test test test test 123
@isTest
private class AccountTriggerTest {
    @isTest
    static void testAfterInsert() {
        // Create a new Account
        List<Account> accountList = new List<Account>();
        for(integer i=0; i<10; i++){
            accountList.add(new Account(Name = 'Test Account ' + i));
        }
               
        // Insert the list of Accounts
        insert accountList;

        // Verify that a Contact related to the Account has been created
        List<Contact> createdContacts = [SELECT Id, LastName, AccountId FROM Contact WHERE AccountId = :accountList[0].Id];
        System.assertEquals(1, createdContacts.size());
        System.assertEquals(accountList[0].Name, createdContacts[0].LastName);
        System.assertEquals(accountList[0].Id, createdContacts[0].AccountId);
    }




    @isTest
    static void testPreventDel() {
        // Create an inactive Account
        Account inactiveAccount = new Account(Name = 'Inactive Account', Active__c = 'No');
        insert inactiveAccount;
    
        // Attempt to delete the inactive Account
        Test.startTest();
        try {
            delete inactiveAccount;
        } catch (DmlException e) {
            System.assertEquals('Account record cannot be deleted because it is marked as active.', e.getDmlMessage(0));
        }
        Test.stopTest();
    }
    
    @isTest
    static void testCreateOpportunity() {
        // Create a new Account with Industry set to 'Agriculture'
        Account agricultureAccount = new Account(Name = 'Agriculture Account', Industry = 'Agriculture');
        insert agricultureAccount;

        // Verify that a new Opportunity has been created for the Agriculture Account
        List<Opportunity> createdOpportunities = [SELECT Id, Name, CloseDate, StageName, AccountId FROM Opportunity WHERE AccountId = :agricultureAccount.Id];
        System.assertEquals(1, createdOpportunities.size());
        System.assertEquals('New Opportunity Name', createdOpportunities[0].Name);
        System.assertEquals(Date.today(), createdOpportunities[0].CloseDate);
        System.assertEquals('Prospecting', createdOpportunities[0].StageName);
        System.assertEquals(agricultureAccount.Id, createdOpportunities[0].AccountId);
    }
}