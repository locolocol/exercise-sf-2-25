import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccController.getAcclist';

export default class BindWirewithFunction extends LightningElement {
    // these are  two public properties or attributes
    accounts;
    error;
    @wire(getAccountList)
    wiredAccounts(data,error){
        if (data){
            this.accounts = data;
            this.error= undefined;
        }else if(error){
            this.error = error;
            // versa yukardakinin tam tersi
            this.accounts =undefined ;
        }
    }
}