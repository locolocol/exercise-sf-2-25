public with sharing class AccController {
   @AuraEnabled(cacheable = true)
   public static list<Account> getAcclist(){
    return [Select Id, Name, Phone from Account Limit 10];
   }
   
   @AuraEnabled
   public static List<Account> findAccList (String keyword){
      string key='%'+keyword+'%';
      return [Select Id, Name From Account Where Name Like:key Limit 10];
   }

}