public class Accountcontroller {
@AuraEnabled(cacheable=true)
public static list<Account> accountlist()
{
    list<Account> acclist=new list<Account>();
    acclist=[SELECT Id,BillingState,Name,Phone,Type FROM Account];
    return acclist;
}

}