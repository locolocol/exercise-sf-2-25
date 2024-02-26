import { LightningElement, wire, api} from 'lwc';
import { getFieldValue, getRecord, } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import OPPORTUNITY_NAME_FIELD from '@salesforce/schema/Opportunity';
  
export default class WireWithProperty extends LightningElement {
    // you will get the ID from the pages
    @api recordId;

    @wire(getRecord,{recordId:'$recordId', fields:[ACCOUNT_NAME_FIELD]})
    record;
    
    get name(){
        return getFieldValue(this.record.data, ACCOUNT_NAME_FIELD)
    }

    @wire(getRecord,{recordId:'$recordId', field:[OPPORTUNITY_NAME_FIELD]})
    opprecord
    get oppname(){
        return getFieldValue(this.opprecord.data,OPPORTUNITY_NAME_FIELD)
    }

}