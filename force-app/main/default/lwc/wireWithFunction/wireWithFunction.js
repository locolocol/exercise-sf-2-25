import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class WireWithFunction extends LightningElement {
    @api recordId;
    account;
    error;

    @wire(getRecord, { recordId: '$recordId', fields: ['Account.Name'] })
    wireAccount({ error, data }) {
        if (data) {
            // perform any action here 
            console.log('### Getting Record from Wire with Function');
            this.account = data;
        } else if (error) {
            this.error = error;
            console.log("##### Error: " + error.body.message);
        }
    }
}