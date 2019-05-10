public with sharing class ContactController {
    public ContactController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> fetchContacts(){
        return [Select Id, Name, Email, Phone From Contact LIMIT 10];
    }

    @AuraEnabled//(cacheable=true)
    public static List<Contact> createContacts(String recordList){
        //System.debug(' recordList '+recordList);
        List<Contact> contactList = (List<Contact>)JSON.deserialize(recordList, List<Contact>.class);
        //System.debug(' Contact List '+contactList);
        insert contactList;
        return contactList;
    }

    @AuraEnabled(cacheable=true)
    public static List<String> getpickVal(String ObjectName, String apiName){
        List<String> options = new List<String>();
        Schema.sObjectType objType = Schema.getGlobalDescribe().get(ObjectName);
        Schema.DescribeFieldResult fieldResult = objType.getDescribe().fields.getMap().get(apiName).getDescribe();
        List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
        for( Schema.PicklistEntry f : ple){
            options.add(f.getLabel()+'####'+f.getValue());
        }       
        return options;
    }
}
