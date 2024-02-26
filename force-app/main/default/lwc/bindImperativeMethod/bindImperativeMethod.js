import { LightningElement } from 'lwc';
import getAccountlist from '@salesforce/apex/AccController.getAcclist';

export default class BindImperativeMethod extends LightningElement {
    
    accounts;
    error;
    handleClick(){
       getAccountlist()
       .then(result => {
        this.accounts = result;
        this.error = undefined;
       })
       .catch(error =>{
        this.error=error;
        this.account = undefined;
       });

    }
}