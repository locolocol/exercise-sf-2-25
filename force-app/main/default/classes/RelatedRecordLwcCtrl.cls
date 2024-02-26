public with sharing class RelatedRecordLwcCtrl {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> oppList(string recId) {
        List<Opportunity> oppItemList = [SELECT Id, Name, CloseDate, StageName, AccountId FROM Opportunity WHERE AccountId = :recId];
        return oppItemList;
    }
}