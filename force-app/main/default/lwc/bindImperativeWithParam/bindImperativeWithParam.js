import { LightningElement } from 'lwc';
import findAccList from '@salesforce/apex/AccController.findAccList';

export default class BindImperativeWithParam extends LightningElement {
    searchKey = '';
    accounts;
    error;

    handlechange(event) {
        this.searchKey = event.target.value;
    }

    handleClick() {
        findAccList({ keyword: this.searchKey })
            .then((result) => {
                this.accounts = result;
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.accounts = undefined; // Fixed the variable name here
            });
    }
}